import { useState } from 'react';
import { 
  Search, 
  Download, 
  Eye, 
  Filter, 
  BookOpen, 
  ChevronDown, 
  Sparkles, 
  FolderDown, 
  GraduationCap, 
  Check,
  RefreshCw,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react';

interface Document {
  id: string;
  title: string;
  subject: string;
  grade: string;
  type: string;
  downloads: number;
  views: number;
  link: string;
}

const mockDocuments: Document[] = [
  { id: '1', title: 'Tổng hợp công thức Toán 12 - Đầy đủ', subject: 'Toán', grade: '12', type: 'Lý thuyết', downloads: 15420, views: 28900, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '2', title: 'Đề thi thử THPT QG 2026 - Toán (Có đáp án)', subject: 'Toán', grade: '12', type: 'Đề thi', downloads: 12350, views: 24100, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '3', title: 'Ngữ pháp Tiếng Anh tổng hợp THPT', subject: 'Tiếng Anh', grade: '12', type: 'Lý thuyết', downloads: 18200, views: 32400, link: "https://drive.google.com/drive/u/0/folders/11O_q1lcKORiInDURrGvJKBpo0ok8H2sh" },
  { id: '4', title: '1500 câu trắc nghiệm Vật Lý có giải chi tiết', subject: 'Vật Lý', grade: '12', type: 'Bài tập', downloads: 9800, views: 19200, link: "https://drive.google.com/drive/u/0/folders/1ro0TTs0JBhTpPU8elJuo1iUPmJ-FeNX-" },
  { id: '5', title: 'Lịch sử Việt Nam - Tóm tắt sự kiện quan trọng', subject: 'Lịch Sử', grade: '12', type: 'Lý thuyết', downloads: 7600, views: 15800, link: "https://drive.google.com/drive/u/0/folders/1TuRHSaeJWXTtG2mVx4pvpFh3hCQEV0x_" },
  { id: '6', title: 'Hóa học hữu cơ - Chuyên đề phản ứng', subject: 'Hóa Học', grade: '12', type: 'Chuyên đề', downloads: 10200, views: 21300, link: "https://drive.google.com/drive/u/0/folders/1PocYKHUA5YtA0Nw4B5vEHfW7G5D45W1B" },
  { id: '13', title: 'Hóa học hữu cơ - Chinh phục hữu cơ', subject: 'Hóa Học', grade: '12', type: 'Lý thuyết + Bài tập', downloads: 300, views: 2300, link: "https://drive.google.com/drive/u/0/folders/1uJqRPC23N0PkC6WbSpzPBGdE86pPDjaC" },
  { id: '14', title: 'Đề thi thử Hóa Học - Hóa Học', subject: 'Hóa Học', grade: '12', type: 'Đề thi', downloads: 3873, views: 22387, link: "https://drive.google.com/drive/u/0/folders/1r5l6R3NideOyutA3TwC61l7ZJZB8tl9W" },
  { id: '7', title: 'Sinh học di truyền - Bài tập nâng cao', subject: 'Sinh Học', grade: '12', type: 'Bài tập', downloads: 8900, views: 17500, link: "" },
  { id: '15', title: 'Đề Thi Thử Sinh Học - Sinh Học', subject: 'Sinh Học', grade: '12', type: 'Đề thi', downloads: 8900, views: 17500, link: "https://drive.google.com/drive/u/0/folders/1n9TWm8eRFaNCdxhhuUfRZNtBnj9zF196" },
  { id: '8', title: 'Địa lý Việt Nam - Bản đồ tư duy', subject: 'Địa Lý', grade: '12', type: 'Tài liệu tham khảo', downloads: 6500, views: 13200, link: "https://drive.google.com/drive/u/0/folders/1VI7pRktlrMtAoBSGeEeQFXAUdu9JK0Ir" },
  { id: '9', title: 'Đề thi thử THPT QG 2026 - Tiếng Anh', subject: 'Tiếng Anh', grade: '12', type: 'Đề thi', downloads: 14100, views: 26800, link: "https://drive.google.com/drive/folders/1W7Vtkxw7tQg4VIwbL4ow6HNQEuRsL6qW" },
  { id: '10', title: 'Văn học Việt Nam - Phân tích tác phẩm', subject: 'Văn', grade: '12', type: 'Lý thuyết', downloads: 11200, views: 22400, link: "https://drive.google.com/drive/folders/1tvq1JIU1pHe4RXSkdjR2WGjtfA93J5ED" },
  { id: '11', title: 'Toán 11 - Các dạng bài hàm số', subject: 'Toán', grade: '11', type: 'Bài tập', downloads: 5400, views: 11200, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '12', title: 'GDCD - Tóm tắt kiến thức cơ bản', subject: 'GDCD', grade: '12', type: 'Lý thuyết', downloads: 4800, views: 9600, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  
];

const subjects = ['Tất cả', 'Toán', 'Văn', 'Tiếng Anh', 'Vật Lý', 'Hóa Học', 'Sinh Học', 'Lịch Sử', 'Địa Lý', 'GDCD'];
const grades = ['Tất cả', '10', '11', '12'];
const types = ['Tất cả', 'Lý thuyết', 'Bài tập', 'Đề thi', 'Chuyên đề', 'Tài liệu tham khảo'];

const subjectConfigs: Record<string, { 
  icon: string; 
  badgeStyle: React.CSSProperties; 
  textColor: string;
  gradientFrom: string;
  gradientTo: string;
}> = {
  'Toán': { 
    icon: '📐', 
    badgeStyle: { backgroundColor: '#eff6ff', color: '#1d4ed8', borderColor: '#bfdbfe' },
    textColor: '#2563eb',
    gradientFrom: '#3b82f6',
    gradientTo: '#06b6d4'
  },
  'Văn': { 
    icon: '📖', 
    badgeStyle: { backgroundColor: '#fef3c7', color: '#b45309', borderColor: '#fde68a' },
    textColor: '#d97706',
    gradientFrom: '#f59e0b',
    gradientTo: '#f97316'
  },
  'Tiếng Anh': { 
    icon: '🇬🇧', 
    badgeStyle: { backgroundColor: '#fdf2f8', color: '#be185d', borderColor: '#fbcfe8' },
    textColor: '#db2777',
    gradientFrom: '#ec4899',
    gradientTo: '#f43f5e'
  },
  'Vật Lý': { 
    icon: '⚡', 
    badgeStyle: { backgroundColor: '#f5f3ff', color: '#6d28d9', borderColor: '#ddd6fe' },
    textColor: '#7c3aed',
    gradientFrom: '#a855f7',
    gradientTo: '#6366f1'
  },
  'Hóa Học': { 
    icon: '🧪', 
    badgeStyle: { backgroundColor: '#ecfdf5', color: '#047857', borderColor: '#a7f3d0' },
    textColor: '#059669',
    gradientFrom: '#10b981',
    gradientTo: '#14b8a6'
  },
  'Sinh Học': { 
    icon: '🧬', 
    badgeStyle: { backgroundColor: '#f0fdf4', color: '#15803d', borderColor: '#bbf7d0' },
    textColor: '#16a34a',
    gradientFrom: '#22c55e',
    gradientTo: '#10b981'
  },
  'Lịch Sử': { 
    icon: '⏳', 
    badgeStyle: { backgroundColor: '#fef2f2', color: '#b91c1c', borderColor: '#fecaca' },
    textColor: '#dc2626',
    gradientFrom: '#ef4444',
    gradientTo: '#f97316'
  },
  'Địa Lý': { 
    icon: '🗺️', 
    badgeStyle: { backgroundColor: '#ecfeff', color: '#0e7490', borderColor: '#cffafe' },
    textColor: '#0891b2',
    gradientFrom: '#06b6d4',
    gradientTo: '#3b82f6'
  },
  'GDCD': { 
    icon: '⚖️', 
    badgeStyle: { backgroundColor: '#faf5ff', color: '#7e22ce', borderColor: '#e9d5ff' },
    textColor: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#d946ef'
  },
  'Tất cả': { 
    icon: '✨', 
    badgeStyle: { backgroundColor: '#f8fafc', color: '#475569', borderColor: '#e2e8f0' },
    textColor: '#475569',
    gradientFrom: '#475569',
    gradientTo: '#1e293b'
  }
};

export function DocumentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Tất cả');
  const [selectedGrade, setSelectedGrade] = useState('Tất cả');
  const [selectedType, setSelectedType] = useState('Tất cả');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'Tất cả' || doc.subject === selectedSubject;
    const matchesGrade = selectedGrade === 'Tất cả' || doc.grade === selectedGrade;
    const matchesType = selectedType === 'Tất cả' || doc.type === selectedType;

    return matchesSearch && matchesSubject && matchesGrade && matchesType;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSubject('Tất cả');
    setSelectedGrade('Tất cả');
    setSelectedType('Tất cả');
  };

  const getSubjectConfig = (subj: string) => {
    return subjectConfigs[subj] || subjectConfigs['Tất cả'];
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20 relative overflow-hidden">
      {/* Custom CSS to bypass purged/missing Tailwind classes in pre-compiled stylesheet */}
      <style>{`
        .library-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .library-hero-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
          }
          .library-hero-left {
            grid-column: span 8 / span 8;
          }
          .library-hero-right {
            grid-column: span 4 / span 4;
          }
        }
        
        .library-stats-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .library-stats-container {
            flex-direction: row;
            justify-content: space-between;
          }
          .library-stats-container > div {
            flex: 1;
          }
        }
        
        .premium-stats-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-stats-card:hover {
          transform: translateY(-2px) scale(1.02);
          background-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }

        .premium-doc-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-doc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1 !important;
        }
        .premium-doc-card:hover .shine-effect {
          transform: scale(1.02);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      
      {/* 1. PREMIUM HERO SECTION */}
      <div className="relative text-white py-20 overflow-hidden" style={{ background: 'radial-gradient(circle at top right, #1e1b4b, #0f172a, #090d16)' }}>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-15" style={{ 
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`, 
          backgroundSize: '24px 24px' 
        }}></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <div className="library-hero-grid">
            <div className="library-hero-left space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
                <Sparkles size={14} className="animate-spin-slow" />
                Thư viện tài nguyên mở rộng
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Kho Tài Liệu <br />
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-900 bg-clip-text text-transparent">
                  Ôn Thi Đỉnh Cao
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Cung cấp hơn 10,000+ tài liệu chuyên sâu, đề thi thử, tóm tắt lý thuyết độc quyền hoàn toàn miễn phí giúp bạn tự tin hướng tới điểm 9, 10.
              </p>
            </div>
            
            {/* Stats Cards with Glassmorphism */}
            <div className="library-hero-right library-stats-container">
              <div className="glass premium-stats-card p-5 rounded-2xl border border-white/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', boxShadow: '0 10px 15px -3px rgba(6, 182, 212, 0.3)' }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">5,000+</div>
                  <div className="text-xs font-semibold text-black">Tài liệu chọn lọc</div>
                </div>
              </div>

              <div className="glass premium-stats-card p-5 rounded-2xl border border-white/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.3)' }}>
                  <FolderDown size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">500k+</div>
                  <div className="text-xs font-semibold text-black">Lượt tải xuống</div>
                </div>
              </div>

              <div className="glass premium-stats-card p-5 rounded-2xl border border-white/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)', boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.3)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-xs font-semibold text-black">Miễn phí trọn đời</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & FILTER HUB */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 p-6 md:p-8 border border-slate-100/80">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Intelligent Search Input */}
            <div className="flex-1 relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Nhập tên tài liệu, đề thi thử, từ khóa ôn tập..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border-2 border-transparent focus:border-indigo-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium text-slate-900 placeholder-slate-400"
              />
            </div>
            
            {/* Toggle Advanced Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all border-2 w-full md:w-auto ${
                showFilters 
                  ? 'bg-indigo-50 text-indigo-600 border-indigo-200 shadow-md' 
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Filter size={20} />
              <span>Bộ lọc nâng cao</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${showFilters ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
            </button>
          </div>

          {/* Expandable Advanced Filters */}
          {showFilters && (
            <div className="grid md:grid-cols-2 gap-6 pt-6 mt-6 border-t border-slate-100 custom-fade-in">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  <GraduationCap size={16} className="text-slate-400" />
                  <span>Chọn khối lớp học</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {grades.map(grade => (
                    <button
                      key={grade}
                      onClick={() => setSelectedGrade(grade)}
                      className={`px-4 py-2 text-sm font-bold rounded-xl transition-all border ${
                        selectedGrade === grade
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100/80'
                      }`}
                    >
                      {grade === 'Tất cả' ? 'Tất cả lớp' : `Lớp ${grade}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  <BookOpen size={16} className="text-slate-400" />
                  <span>Loại tài liệu ôn tập</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-slate-800 appearance-none cursor-pointer"
                  >
                    {types.map(t => (
                      <option key={t} value={t}>{t === 'Tất cả' ? 'Tất cả định dạng' : t}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Subject Chips Bar */}
          <div className="mt-8 w-full overflow-hidden">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Lọc nhanh theo môn học</h4>
            <div className="flex flex-nowrap gap-2 overflow-x-auto pb-3 scrollbar-none w-full">
              {subjects.map(subj => {
                const config = getSubjectConfig(subj);
                const isSelected = selectedSubject === subj;
                return (
                  <button
                    key={subj}
                    onClick={() => setSelectedSubject(subj)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all border ${
                      isSelected
                        ? 'text-white border-transparent'
                        : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                    style={
                      isSelected
                        ? { 
                            background: `linear-gradient(to right, ${config.gradientFrom}, ${config.gradientTo})`,
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                          }
                        : {}
                    }
                  >
                    <span>{config.icon}</span>
                    <span>{subj}</span>
                    {isSelected && <Check size={14} className="ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. RESULTS INFO & QUICK RESET */}
        <div className="flex justify-between items-center my-6 flex-wrap gap-3">
          <p className="text-sm font-semibold text-slate-500">
            Tìm thấy <span className="text-indigo-600 font-extrabold text-base">{filteredDocuments.length}</span> tài liệu chất lượng cao
          </p>
          {(selectedSubject !== 'Tất cả' || selectedGrade !== 'Tất cả' || selectedType !== 'Tất cả' || searchTerm !== '') && (
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              <RefreshCw size={12} className="animate-spin-slow" />
              Đặt lại bộ lọc
            </button>
          )}
        </div>

        {/* 4. PREMIUM DOCUMENTS GRID */}
        {filteredDocuments.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map(doc => {
              const config = getSubjectConfig(doc.subject);
              return (
                <div 
                  key={doc.id} 
                  className={`group bg-white rounded-3xl border-2 border-slate-100/80 premium-doc-card p-6 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Decorative glowing card accent */}
                  <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: `linear-gradient(to right, ${config.gradientFrom}, ${config.gradientTo})` }}></div>
                  
                  <div>
                    {/* Badge header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-lg border flex items-center gap-1.5" style={config.badgeStyle}>
                        <span>{config.icon}</span>
                        <span>{doc.subject}</span>
                      </span>
                      <span className="text-xs font-extrabold text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-lg">
                        Lớp {doc.grade}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                      {doc.title}
                    </h3>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/50">
                        {doc.type}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer & Call To Action */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <FolderDown size={14} className="text-emerald-500" />
                        <span>Tải về: <strong className="text-slate-700">{(doc.downloads / 1000).toFixed(1)}k</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className="text-indigo-500" />
                        <span>Xem: <strong className="text-slate-700">{(doc.views / 1000).toFixed(1)}k</strong></span>
                      </div>
                    </div>

                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shine-effect"
                      style={{
                        background: `linear-gradient(to right, ${config.gradientFrom}, ${config.gradientTo})`,
                        boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
                      }}
                    >
                      <Download size={18} />
                      <span>Tải tài liệu</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Premium Empty State */
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm py-16 px-6 text-center max-w-xl mx-auto my-12 custom-fade-in">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-500">
              <BookOpen size={40} className="animate-pulse" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Không tìm thấy tài liệu phù hợp</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Thử tìm kiếm với từ khóa khác hoặc bấm nút bên dưới để xóa các bộ lọc hiện tại của bạn.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Xem tất cả tài liệu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}