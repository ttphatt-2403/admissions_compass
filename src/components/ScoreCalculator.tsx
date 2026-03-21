import { useState, useRef } from 'react';
import { Calculator, Lightbulb, TrendingUp, AlertCircle, RefreshCw, GraduationCap, ArrowLeft } from 'lucide-react';
import { mockUniversities, University, Major } from './UniversitySearch';
import { TabType } from '../types';
import { getUniversityLogo } from '../data/universityLogos';

interface ScoreCalculatorProps {
  setActiveTab: (tab: TabType) => void;
}

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

interface Block {
  id: string;
  name: string;
  combinations: SubjectCombination[];
}

const blocks: Block[] = [
  {
    id: 'A',
    name: 'Khối A',
    combinations: [
      { id: 'A00', name: 'A00: Toán, Vật lý, Hóa học', subjects: ['Toán', 'Vật lý', 'Hóa học'] },
      { id: 'A01', name: 'A01: Toán, Vật lý, Tiếng Anh', subjects: ['Toán', 'Vật lý', 'Tiếng Anh'] },
      { id: 'A02', name: 'A02: Toán, Vật lý, Sinh học', subjects: ['Toán', 'Vật lý', 'Sinh học'] },
      { id: 'A03', name: 'A03: Toán, Vật lý, Lịch sử', subjects: ['Toán', 'Vật lý', 'Lịch sử'] },
      { id: 'A04', name: 'A04: Toán, Vật lý, Địa lý', subjects: ['Toán', 'Vật lý', 'Địa lý'] },
      { id: 'A05', name: 'A05: Toán, Hóa học, Lịch sử', subjects: ['Toán', 'Hóa học', 'Lịch sử'] },
      { id: 'A06', name: 'A06: Toán, Hóa học, Địa lý', subjects: ['Toán', 'Hóa học', 'Địa lý'] },
      { id: 'A07', name: 'A07: Toán, Lịch sử, Địa lý', subjects: ['Toán', 'Lịch sử', 'Địa lý'] },
      { id: 'A08', name: 'A08: Toán, Lịch sử, GDKTPL', subjects: ['Toán', 'Lịch sử', 'GDKTPL'] },
      { id: 'A09', name: 'A09: Toán, Địa lý, GDKTPL', subjects: ['Toán', 'Địa lý', 'GDKTPL'] },
      { id: 'A10', name: 'A10: Toán, Vật lý, GDKTPL', subjects: ['Toán', 'Vật lý', 'GDKTPL'] },
      { id: 'A11', name: 'A11: Toán, Hóa học, GDKTPL', subjects: ['Toán', 'Hóa học', 'GDKTPL'] },
    ]
  },
  {
    id: 'B',
    name: 'Khối B',
    combinations: [
      { id: 'B00', name: 'B00: Toán, Hóa học, Sinh học', subjects: ['Toán', 'Hóa học', 'Sinh học'] },
      { id: 'B02', name: 'B02: Toán, Sinh học, Địa lý', subjects: ['Toán', 'Sinh học', 'Địa lý'] },
      { id: 'B03', name: 'B03: Toán, Sinh học, Ngữ văn', subjects: ['Toán', 'Sinh học', 'Ngữ văn'] },
      { id: 'B04', name: 'B04: Toán, Sinh học, GDKTPL', subjects: ['Toán', 'Sinh học', 'GDKTPL'] },
      { id: 'B08', name: 'B08: Toán, Sinh học, Tiếng Anh', subjects: ['Toán', 'Sinh học', 'Tiếng Anh'] },
    ]
  },
  {
    id: 'C',
    name: 'Khối C',
    combinations: [
      { id: 'C00', name: 'C00: Ngữ văn, Lịch sử, Địa lý', subjects: ['Ngữ văn', 'Lịch sử', 'Địa lý'] },
      { id: 'C01', name: 'C01: Ngữ văn, Toán, Vật lý', subjects: ['Ngữ văn', 'Toán', 'Vật lý'] },
      { id: 'C02', name: 'C02: Ngữ văn, Toán, Hóa học', subjects: ['Ngữ văn', 'Toán', 'Hóa học'] },
      { id: 'C03', name: 'C03: Ngữ văn, Toán, Lịch sử', subjects: ['Ngữ văn', 'Toán', 'Lịch sử'] },
      { id: 'C04', name: 'C04: Ngữ văn, Toán, Địa lý', subjects: ['Ngữ văn', 'Toán', 'Địa lý'] },
      { id: 'C05', name: 'C05: Ngữ văn, Vật lý, Hóa học', subjects: ['Ngữ văn', 'Vật lý', 'Hóa học'] },
      { id: 'C08', name: 'C08: Ngữ văn, Hóa học, Sinh học', subjects: ['Ngữ văn', 'Hóa học', 'Sinh học'] },
      { id: 'C12', name: 'C12: Ngữ văn, Lịch sử, Sinh học', subjects: ['Ngữ văn', 'Lịch sử', 'Sinh học'] },
      { id: 'C13', name: 'C13: Ngữ văn, Sinh học, Địa lý', subjects: ['Ngữ văn', 'Sinh học', 'Địa lý'] },
      { id: 'C14', name: 'C14: Ngữ văn, Toán, GDKTPL', subjects: ['Ngữ văn', 'Toán', 'GDKTPL'] },
      { id: 'C17', name: 'C17: Ngữ văn, Hóa học, GDKTPL', subjects: ['Ngữ văn', 'Hóa học', 'GDKTPL'] },
      { id: 'C19', name: 'C19: Ngữ văn, Lịch sử, GDKTPL', subjects: ['Ngữ văn', 'Lịch sử', 'GDKTPL'] },
      { id: 'C20', name: 'C20: Ngữ văn, Địa lý, GDKTPL', subjects: ['Ngữ văn', 'Địa lý', 'GDKTPL'] },
    ]
  },
  {
    id: 'D',
    name: 'Khối D',
    combinations: [
      { id: 'D01', name: 'D01: Ngữ văn, Toán, Tiếng Anh', subjects: ['Ngữ văn', 'Toán', 'Tiếng Anh'] },
      { id: 'D02', name: 'D02: Ngữ văn, Toán, Tiếng Nga', subjects: ['Ngữ văn', 'Toán', 'Tiếng Nga'] },
      { id: 'D03', name: 'D03: Ngữ văn, Toán, Tiếng Pháp', subjects: ['Ngữ văn', 'Toán', 'Tiếng Pháp'] },
      { id: 'D04', name: 'D04: Ngữ văn, Toán, Tiếng Trung', subjects: ['Ngữ văn', 'Toán', 'Tiếng Trung'] },
      { id: 'D05', name: 'D05: Ngữ văn, Toán, Tiếng Đức', subjects: ['Ngữ văn', 'Toán', 'Tiếng Đức'] },
      { id: 'D06', name: 'D06: Ngữ văn, Toán, Tiếng Nhật', subjects: ['Ngữ văn', 'Toán', 'Tiếng Nhật'] },
      { id: 'D07', name: 'D07: Toán, Hóa học, Tiếng Anh', subjects: ['Toán', 'Hóa học', 'Tiếng Anh'] },
      { id: 'D08', name: 'D08: Toán, Sinh học, Tiếng Anh', subjects: ['Toán', 'Sinh học', 'Tiếng Anh'] },
      { id: 'D09', name: 'D09: Toán, Lịch sử, Tiếng Anh', subjects: ['Toán', 'Lịch sử', 'Tiếng Anh'] },
      { id: 'D10', name: 'D10: Toán, Địa lý, Tiếng Anh', subjects: ['Toán', 'Địa lý', 'Tiếng Anh'] },
      { id: 'D11', name: 'D11: Ngữ văn, Vật lý, Tiếng Anh', subjects: ['Ngữ văn', 'Vật lý', 'Tiếng Anh'] },
      { id: 'D12', name: 'D12: Ngữ văn, Hóa học, Tiếng Anh', subjects: ['Ngữ văn', 'Hóa học', 'Tiếng Anh'] },
      { id: 'D13', name: 'D13: Ngữ văn, Sinh học, Tiếng Anh', subjects: ['Ngữ văn', 'Sinh học', 'Tiếng Anh'] },
      { id: 'D14', name: 'D14: Ngữ văn, Lịch sử, Tiếng Anh', subjects: ['Ngữ văn', 'Lịch sử', 'Tiếng Anh'] },
      { id: 'D15', name: 'D15: Ngữ văn, Địa lý, Tiếng Anh', subjects: ['Ngữ văn', 'Địa lý', 'Tiếng Anh'] },
      { id: 'D20', name: 'D20: Toán, Địa lý, Tiếng Trung', subjects: ['Toán', 'Địa lý', 'Tiếng Trung'] },
      { id: 'D21', name: 'D21: Toán, Hóa học, Tiếng Đức', subjects: ['Toán', 'Hóa học', 'Tiếng Đức'] },
      { id: 'D22', name: 'D22: Toán, Hóa học, Tiếng Nga', subjects: ['Toán', 'Hóa học', 'Tiếng Nga'] },
      { id: 'D23', name: 'D23: Toán, Hóa học, Tiếng Nhật', subjects: ['Toán', 'Hóa học', 'Tiếng Nhật'] },
      { id: 'D24', name: 'D24: Toán, Hóa học, Tiếng Pháp', subjects: ['Toán', 'Hóa học', 'Tiếng Pháp'] },
      { id: 'D25', name: 'D25: Toán, Hóa học, Tiếng Trung', subjects: ['Toán', 'Hóa học', 'Tiếng Trung'] },
      { id: 'D26', name: 'D26: Toán, Vật lý, Tiếng Đức', subjects: ['Toán', 'Vật lý', 'Tiếng Đức'] },
      { id: 'D27', name: 'D27: Toán, Vật lý, Tiếng Nga', subjects: ['Toán', 'Vật lý', 'Tiếng Nga'] },
      { id: 'D28', name: 'D28: Toán, Vật lý, Tiếng Nhật', subjects: ['Toán', 'Vật lý', 'Tiếng Nhật'] },
      { id: 'D29', name: 'D29: Toán, Vật lý, Tiếng Pháp', subjects: ['Toán', 'Vật lý', 'Tiếng Pháp'] },
      { id: 'D30', name: 'D30: Toán, Vật lý, Tiếng Trung', subjects: ['Toán', 'Vật lý', 'Tiếng Trung'] },
      { id: 'D31', name: 'D31: Toán, Sinh học, Tiếng Đức', subjects: ['Toán', 'Sinh học', 'Tiếng Đức'] },
      { id: 'D32', name: 'D32: Toán, Sinh học, Tiếng Nga', subjects: ['Toán', 'Sinh học', 'Tiếng Nga'] },
      { id: 'D33', name: 'D33: Toán, Sinh học, Tiếng Nhật', subjects: ['Toán', 'Sinh học', 'Tiếng Nhật'] },
      { id: 'D34', name: 'D34: Toán, Sinh học, Tiếng Pháp', subjects: ['Toán', 'Sinh học', 'Tiếng Pháp'] },
      { id: 'D35', name: 'D35: Toán, Sinh học, Tiếng Trung', subjects: ['Toán', 'Sinh học', 'Tiếng Trung'] },
      { id: 'D42', name: 'D42: Ngữ văn, Địa lý, Tiếng Nga', subjects: ['Ngữ văn', 'Địa lý', 'Tiếng Nga'] },
      { id: 'D43', name: 'D43: Ngữ văn, Địa lý, Tiếng Nhật', subjects: ['Ngữ văn', 'Địa lý', 'Tiếng Nhật'] },
      { id: 'D44', name: 'D44: Ngữ văn, Địa lý, Tiếng Pháp', subjects: ['Ngữ văn', 'Địa lý', 'Tiếng Pháp'] },
      { id: 'D45', name: 'D45: Ngữ văn, Địa lý, Tiếng Trung', subjects: ['Ngữ văn', 'Địa lý', 'Tiếng Trung'] },
      { id: 'D55', name: 'D55: Ngữ văn, Vật lý, Tiếng Trung', subjects: ['Ngữ văn', 'Vật lý', 'Tiếng Trung'] },
      { id: 'D63', name: 'D63: Ngữ văn, Lịch sử, Tiếng Nhật', subjects: ['Ngữ văn', 'Lịch sử', 'Tiếng Nhật'] },
      { id: 'D64', name: 'D64: Ngữ văn, Lịch sử, Tiếng Pháp', subjects: ['Ngữ văn', 'Lịch sử', 'Tiếng Pháp'] },
      { id: 'D65', name: 'D65: Ngữ văn, Lịch sử, Tiếng Trung', subjects: ['Ngữ văn', 'Lịch sử', 'Tiếng Trung'] },
      { id: 'D66', name: 'D66: Ngữ văn, GDKTPL, Tiếng Anh', subjects: ['Ngữ văn', 'GDKTPL', 'Tiếng Anh'] },
      { id: 'D68', name: 'D68: Ngữ văn, GDKTPL, Tiếng Nga', subjects: ['Ngữ văn', 'GDKTPL', 'Tiếng Nga'] },
      { id: 'D70', name: 'D70: Ngữ văn, GDKTPL, Tiếng Pháp', subjects: ['Ngữ văn', 'GDKTPL', 'Tiếng Pháp'] },
      { id: 'D71', name: 'D71: Ngữ văn, GDKTPL, Tiếng Trung', subjects: ['Ngữ văn', 'GDKTPL', 'Tiếng Trung'] },
      { id: 'D84', name: 'D84: Toán, Tiếng Anh, GDKTPL', subjects: ['Toán', 'Tiếng Anh', 'GDKTPL'] },
    ]
  }
];

export function ScoreCalculator({ setActiveTab }: ScoreCalculatorProps) {
  const suggestionsRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 5; // items per page
  const [selectedBlock, setSelectedBlock] = useState<Block>(blocks[0]);
  const [selectedCombination, setSelectedCombination] = useState<SubjectCombination>(blocks[0].combinations[0]);
  const [scores, setScores] = useState<Record<string, string>>({
    'Toán': '',
    'Vật lý': '',
    'Hóa học': '',
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

  const handleBlockChange = (blockId: string) => {
    const block = blocks.find(b => b.id === blockId);
    if (block) {
      setSelectedBlock(block);
      const firstCombination = block.combinations[0];
      setSelectedCombination(firstCombination);
      // Reset scores
      const newScores: Record<string, string> = {};
      firstCombination.subjects.forEach(subject => {
        newScores[subject] = '';
      });
      setScores(newScores);
      setTotalScore(null);
      setSuggestions([]);
      setCurrentPage(1);
    }
  };

  const handleCombinationChange = (combinationId: string) => {
    const combination = selectedBlock.combinations.find(c => c.id === combinationId);
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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
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
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h3 className="font-bold text-xl mb-6 text-gray-800 flex items-center gap-2">
            <GraduationCap className="text-green-600" />
            Nhập điểm thi của bạn
          </h3>

          {/* Block Selector */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Chọn khối ngành
            </label>
            <div className="relative">
              <select
                value={selectedBlock.id}
                onChange={(e) => handleBlockChange(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none font-medium text-gray-900"
              >
                {blocks.map(block => (
                  <option key={block.id} value={block.id}>{block.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

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
                {selectedBlock.combinations.map(combo => (
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
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm overflow-hidden">
                                  {getUniversityLogo(suggestion.universityId, suggestion.universityShortName) ? (
                                    <img
                                      src={getUniversityLogo(suggestion.universityId, suggestion.universityShortName)}
                                      alt={`${suggestion.university} logo`}
                                      className="w-full h-full object-contain bg-white p-1"
                                    />
                                  ) : (
                                    suggestion.universityShortName.charAt(0)
                                  )}
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
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setActiveTab('universities')}
          className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 animate-bounce"
        >
          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="text-lg">Quay lại Điểm Chuẩn</span>
          <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
        </button>
      </div>
    </div>
  );
}