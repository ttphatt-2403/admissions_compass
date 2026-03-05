import { useState, useRef } from 'react';
import { Calculator, Lightbulb, TrendingUp, AlertCircle, RefreshCw, GraduationCap } from 'lucide-react';
import { mockUniversities, University, Major } from './UniversitySearch';

interface Subject {
  name: string;
  score: string;
}

interface SubjectCombination {
  id: string;
  name: string;
  subjects: string[];
}

interface MajorSuggestion {
  name: string;
  university: string;
  universityShortName: string;
  benchmarkScore: number;
  yourScore: number;
  probability: 'high' | 'medium' | 'low';
  subjectCombination: string;
  ranking: number;
  universityId: string;
  majorCode: string;
}

const subjectCombinations: SubjectCombination[] = [
  { id: 'A00', name: 'A00 - Toán, Lý, Hóa', subjects: ['Toán', 'Vật Lý', 'Hóa Học'] },
  { id: 'A01', name: 'A01 - Toán, Lý, Anh', subjects: ['Toán', 'Vật Lý', 'Tiếng Anh'] },
  { id: 'B00', name: 'B00 - Toán, Hóa, Sinh', subjects: ['Toán', 'Hóa Học', 'Sinh Học'] },
  { id: 'C00', name: 'C00 - Văn, Sử, Địa', subjects: ['Văn', 'Lịch Sử', 'Địa Lý'] },
  { id: 'D01', name: 'D01 - Toán, Văn, Anh', subjects: ['Toán', 'Văn', 'Tiếng Anh'] },
  { id: 'D07', name: 'D07 - Toán, Hóa, Anh', subjects: ['Toán', 'Hóa Học', 'Tiếng Anh'] },
];

export function ScoreCalculator() {
  const suggestionsRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 5; // items per page
  const [selectedCombination, setSelectedCombination] = useState<SubjectCombination>(subjectCombinations[0]);
  const [scores, setScores] = useState<Record<string, string>>({
    'Toán': '',
    'Vật Lý': '',
    'Hóa Học': '',
  });
  const [priorityScore, setPriorityScore] = useState('');
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<MajorSuggestion[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // Scroll mượt lên đầu danh sách
    setTimeout(() => {
      suggestionsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 50);
  };

  const handleCombinationChange = (combinationId: string) => {
    const combination = subjectCombinations.find(c => c.id === combinationId);
    if (combination) {
      setSelectedCombination(combination);
      // Reset scores
      const newScores: Record<string, string> = {};
      combination.subjects.forEach(subject => {
        newScores[subject] = '';
      });
      setScores(newScores);
      setTotalScore(null);
      setSuggestions([]);
      setCurrentPage(1);
    }
  };

  const handleScoreChange = (subject: string, value: string) => {
    // Only allow numbers with up to 2 decimal places
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      const numValue = parseFloat(value);
      if (value === '' || (numValue >= 0 && numValue <= 10)) {
        setScores({ ...scores, [subject]: value });
      }
    }
  };

  const calculateScore = () => {
    let total = 0;
    let allFilled = true;

    selectedCombination.subjects.forEach(subject => {
      const score = scores[subject];
      if (score === '') {
        allFilled = false;
      } else {
        total += parseFloat(score);
      }
    });

    if (!allFilled) {
      alert('Vui lòng nhập đủ điểm các môn');
      return;
    }

    // Add priority score if entered
    if (priorityScore !== '') {
      total += parseFloat(priorityScore);
    }

    setIsCalculating(true);
    setTotalScore(total);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      generateSuggestions(total);
      setIsCalculating(false);
    }, 800);
  };

  const generateSuggestions = (score: number) => {
    const newSuggestions: MajorSuggestion[] = [];

    mockUniversities.forEach((uni) => {
      uni.majors.forEach((major) => {
        // Check if major accepts the selected combination
        // major.subjects is a string like "A00, A01, D01"
        const acceptedCombinations = major.subjects.split(',').map(s => s.trim());

        if (acceptedCombinations.includes(selectedCombination.id)) {
          let probability: 'high' | 'medium' | 'low' | null = null;

          // Determine probability
          const diff = score - major.benchmarkScore;

          if (diff >= 1.0) {
            probability = 'high'; // Safe zone
          } else if (diff >= 0) {
            probability = 'medium'; // Competitive
          } else if (diff >= -1.0) {
            probability = 'low'; // Risky but possible
          }
          // Ignore if score is too low compared to benchmark (e.g. < -1.0)

          if (probability) {
            newSuggestions.push({
              name: major.name,
              university: uni.name,
              universityShortName: uni.shortName,
              benchmarkScore: major.benchmarkScore,
              yourScore: score,
              probability,
              subjectCombination: selectedCombination.id,
              ranking: uni.ranking,
              universityId: uni.id,
              majorCode: major.code
            });
          }
        }
      });
    });

    // Sort suggestions:
    // 1. Probability (High -> Medium -> Low)
    // 2. Ranking (Lower number is better)
    // 3. Benchmark Score (Higher is usually more prestigious/competitive)
    newSuggestions.sort((a, b) => {
      const probOrder = { high: 3, medium: 2, low: 1 };
      if (probOrder[a.probability] !== probOrder[b.probability]) {
        return probOrder[b.probability] - probOrder[a.probability];
      }
      if (a.ranking !== b.ranking) {
        return a.ranking - b.ranking;
      }
      return b.benchmarkScore - a.benchmarkScore;
    });

    setSuggestions(newSuggestions);
    setCurrentPage(1); // Reset to page 1 when new suggestions are generated
  };

  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case 'high': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getProbabilityText = (probability: string) => {
    switch (probability) {
      case 'high': return 'Khả năng cao';
      case 'medium': return 'Cơ hội tốt';
      case 'low': return 'Mạo hiểm';
      default: return 'Không xác định';
    }
  };
  const filteredSuggestions = suggestions.filter((item) =>
    item.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative bg-gradient-to-br from-green-600 via-teal-600 to-cyan-700 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Calculator size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold">Công Cụ Tính Điểm & Gợi Ý Ngành</h2>
              <p className="text-green-100 mt-1">Tính điểm thi và nhận gợi ý ngành học từ dữ liệu tuyển sinh năm 2025 mới nhất</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h3 className="font-bold text-xl mb-6 text-gray-800 flex items-center gap-2">
            <GraduationCap className="text-green-600" />
            Nhập điểm thi của bạn
          </h3>

          {/* Combination Selector */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Chọn tổ hợp môn xét tuyển
            </label>
            <div className="relative">
              <select
                value={selectedCombination.id}
                onChange={(e) => handleCombinationChange(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none font-medium text-gray-900"
              >
                {subjectCombinations.map(combo => (
                  <option key={combo.id} value={combo.id}>{combo.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Score Inputs */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {selectedCombination.subjects.map(subject => (
              <div key={subject}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Điểm môn {subject}
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={scores[subject] || ''}
                  onChange={(e) => handleScoreChange(subject, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-center text-xl font-bold text-green-700 placeholder-gray-300 transition-all focus:border-green-500"
                />
              </div>
            ))}
          </div>

          {/* Priority Score */}
          <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Điểm ưu tiên (Khu vực / Đối tượng)
                </label>
                <p className="text-xs text-gray-500">Nhập tổng điểm ưu tiên nếu có (tối đa 2.75 điểm)</p>
              </div>
              <input
                type="text"
                inputMode="decimal"
                placeholder="0.00"
                value={priorityScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
                    const numValue = parseFloat(value);
                    if (value === '' || (numValue >= 0 && numValue <= 3)) {
                      setPriorityScore(value);
                    }
                  }
                }}
                className="w-full md:w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-center font-bold"
              />
            </div>
          </div>

          {/* Formula Explanation */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-amber-800 mb-3">Công thức tính điểm xét tuyển</h3>
                <div className="bg-white rounded-xl p-4 border border-amber-100 mb-4">
                  <p className="text-center font-mono text-lg text-gray-800 font-semibold">
                    Điểm xét tuyển = Môn 1 + Môn 2 + Môn 3 + Điểm ưu tiên
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Môn 1, 2, 3:</strong> Điểm các môn trong tổ hợp xét tuyển (thang điểm 0-10)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Điểm ưu tiên:</strong> Gồm điểm ưu tiên khu vực (tối đa 0.75) và đối tượng (tối đa 2.0)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Điểm tối đa:</strong> 30 điểm (không tính ưu tiên) hoặc 32.75 điểm (có ưu tiên)</span>
                  </p>
                </div>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg text-sm text-amber-800">
                  <strong>Ví dụ:</strong> Toán 8.5 + Lý 7.0 + Hóa 8.0 + Ưu tiên 0.5 = <strong>24.0 điểm</strong>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={calculateScore}
            disabled={isCalculating}
            className={`w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 ${isCalculating ? 'opacity-75 cursor-wait' : ''}`}
          >
            {isCalculating ? (
              <>
                <RefreshCw size={24} className="animate-spin" />
                Đang phân tích dữ liệu...
              </>
            ) : (
              <>
                <Calculator size={24} />
                Tính Điểm & Gợi Ý Ngành Học
              </>
            )}
          </button>
        </div>

        {/* Total Score Display */}
        {totalScore !== null && !isCalculating && (
          <div className="animate-fade-in-up">
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 shadow-xl text-white overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-5 pattern-dots"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-blue-100 font-medium mb-1">Tổng điểm xét tuyển của bạn</p>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tight">{totalScore.toFixed(2)}</h2>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm border border-white/20">
                    <span className="font-semibold mr-1">{selectedCombination.id}:</span> {selectedCombination.name}
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 max-w-sm">
                  <p className="text-sm leading-relaxed opacity-90">
                    Điểm số này được dùng để so sánh với điểm chuẩn năm 2025. Hệ thống sẽ gợi ý các trường có điểm chuẩn phù hợp với bạn.
                  </p>
                </div>
              </div>
            </div>

            {/* Suggestions List */}
            <div
              ref={suggestionsRef}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-full md:w-80">
                    <input
                      type="text"
                      placeholder="Tìm theo tên trường hoặc ngành..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                  </div>
                  <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Gợi ý ngành học phù hợp</h3>
                    <p className="text-sm text-gray-500">Dựa trên dữ liệu điểm chuẩn 2025</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  Tìm thấy <span className="text-green-600 font-bold">{filteredSuggestions.length}</span> kết quả phù hợp
                </div>
              </div>

              {/* Probability Legend */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm font-semibold text-gray-700">Chú thích mức độ khả năng đậu:</span>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border bg-green-100 text-green-700 border-green-200">
                        KHẢ NĂNG CAO
                      </span>
                      <span className="text-xs text-gray-600">Điểm bạn cao hơn điểm chuẩn ≥ 0.5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border bg-yellow-100 text-yellow-700 border-yellow-200">
                        CƠ HỘI TỐT
                      </span>
                      <span className="text-xs text-gray-600">Điểm chênh lệch trong khoảng -0.5 đến +0.5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border bg-red-100 text-red-700 border-red-200">
                        MẠO HIỂM
                      </span>
                      <span className="text-xs text-gray-600">Điểm bạn thấp hơn điểm chuẩn &gt; 0.5</span>
                    </div>
                  </div>
                </div>
              </div>

              {suggestions.length > 0 ? (
                <>
                  <div className="divide-y divide-gray-100">
                    {filteredSuggestions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((suggestion, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200 group">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* University Info */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm">
                                  {suggestion.universityShortName.charAt(0)}
                                </div>
                                <div>
                                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {suggestion.name}
                                  </h4>
                                  <p className="text-gray-600 font-medium text-sm">{suggestion.university}</p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                Mã ngành: {suggestion.majorCode}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-800">
                                Top {suggestion.ranking}
                              </span>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getProbabilityColor(suggestion.probability)}`}>
                                {getProbabilityText(suggestion.probability).toUpperCase()}
                              </span>
                            </div>
                          </div>

                          {/* Score Comparison */}
                          <div className="flex items-center gap-6 md:border-l md:border-gray-100 md:pl-6 min-w-[280px]">
                            <div className="text-center">
                              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Điểm chuẩn 2025</p>
                              <p className="text-2xl font-bold text-gray-900">{suggestion.benchmarkScore}</p>
                            </div>

                            <div className="flex-1 h-1 bg-gray-200 rounded-full relative overflow-hidden">
                              <div
                                className={`absolute top-0 left-0 h-full rounded-full ${suggestion.yourScore >= suggestion.benchmarkScore ? 'bg-green-500' : 'bg-yellow-500'}`}
                                style={{ width: '100%' }}
                              ></div>
                            </div>

                            <div className="text-center">
                              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Chênh lệch</p>
                              <p className={`text-2xl font-bold ${suggestion.yourScore >= suggestion.benchmarkScore ? 'text-green-600' : 'text-yellow-600'}`}>
                                {suggestion.yourScore >= suggestion.benchmarkScore ? '+' : ''}
                                {(suggestion.yourScore - suggestion.benchmarkScore).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Advice Message */}
                        <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                          {suggestion.yourScore >= suggestion.benchmarkScore ? (
                            <div className="flex items-center gap-2 text-sm text-green-700">
                              <TrendingUp size={16} />
                              <span>Điểm của bạn đang ở mức an toàn so với năm ngoái. Hãy tự tin đăng ký nguyện vọng!</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-sm text-yellow-700">
                              <AlertCircle size={16} />
                              <span>Điểm thấp hơn một chút. Cân nhắc đặt làm nguyện vọng ưu tiên nếu bạn thực sự yêu thích.</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {Math.ceil(filteredSuggestions.length / itemsPerPage) > 1 && (() => {
                    const totalPages = Math.ceil(filteredSuggestions.length / itemsPerPage);
                    const maxVisiblePages = 5; // số trang hiển thị ở giữa

                    const getPageNumbers = () => {
                      const pages: (number | string)[] = [];

                      if (totalPages <= maxVisiblePages + 2) {
                        return Array.from({ length: totalPages }, (_, i) => i + 1);
                      }

                      pages.push(1);

                      let start = Math.max(2, currentPage - 1);
                      let end = Math.min(totalPages - 1, currentPage + 1);

                      if (currentPage <= 3) {
                        start = 2;
                        end = 4;
                      }

                      if (currentPage >= totalPages - 2) {
                        start = totalPages - 3;
                        end = totalPages - 1;
                      }

                      if (start > 2) {
                        pages.push("...");
                      }

                      for (let i = start; i <= end; i++) {
                        pages.push(i);
                      }

                      if (end < totalPages - 1) {
                        pages.push("...");
                      }

                      pages.push(totalPages);

                      return pages;
                    };

                    return (
                      <div className="flex flex-col items-center gap-6 p-8 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">

                        {/* Page Info */}
                        <div className="text-sm font-medium text-gray-600">
                          Trang <span className="text-green-600 font-bold">{currentPage}</span> /{" "}
                          <span className="font-bold">{totalPages}</span>
                        </div>

                        <div className="flex items-center gap-2">

                          {/* Previous */}
                          <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            ←
                          </button>

                          {/* Page Numbers */}
                          {getPageNumbers().map((page, index) =>
                            page === "..." ? (
                              <span
                                key={index}
                                className="w-11 h-11 flex items-center justify-center text-gray-400 font-semibold"
                              >
                                ...
                              </span>
                            ) : (
                              <button
                                key={index}
                                onClick={() => handlePageChange(page as number)}
                                className={`
                w-11 h-11 flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200
                ${currentPage === page
                                    ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg scale-110"
                                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-md"
                                  }
              `}
                              >
                                {page}
                              </button>
                            )
                          )}

                          {/* Next */}
                          <button
                            onClick={() =>
                              handlePageChange(Math.min(totalPages, currentPage + 1))
                            }
                            disabled={currentPage === totalPages}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </>
              ) : (
                <div className="py-16 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle size={32} className="text-gray-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Chưa tìm thấy ngành phù hợp</h4>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Với mức điểm hiện tại, chúng tôi chưa tìm thấy ngành nào phù hợp trong cơ sở dữ liệu (chênh lệch không quá 1 điểm). Hãy thử cố gắng cải thiện điểm số hoặc xem xét các lựa chọn khác.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}