import React, { useState, useEffect } from 'react';
import { 
  Book, 
  Clock, 
  Target, 
  ChevronDown, 
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
  CheckSquare,
  Square,
  Scroll,
  Timer,
  Table
} from 'lucide-react';
import { historyRoadmap } from '../roadmap/history-roadmap';

// --- Types based on the JSON structure ---
interface Module {
  name: string;
  topics: string[];
}

interface ExamStructure {
  part: string;
  questions: number;
  percentage: string;
  topics: string[];
}

interface QuestionLevel {
  level: string;
  percentage: string;
  questions: number;
}

interface PracticeVolume {
  mcq_questions?: number;
  mini_tests?: number;
  full_tests?: number;
  timeline_exercises?: number;
  comparison_exercises?: number;
  error_review_sessions?: number;
}

interface TimelineItem {
  month: string;
  phase: string;
  focus: string;
  modules?: Module[];
  practice_volume: PracticeVolume;
  weekly_structure: { [key: string]: string };
  target_score: number;
  key_dates?: string[];
  checkpoints: string[];
}

interface TimelineSummary {
  [key: string]: string[];
}

interface ComparisonTable {
  ba_phong_trao_cach_mang: {
    headers: string[];
    rows: string[][];
  };
  bon_chien_luoc_chien_tranh_my: {
    headers: string[];
    rows: string[][];
  };
}

interface HistoryRoadmapData {
  subject: string;
  exam: {
    total_questions: number;
    time_minutes: number;
    target_score: number;
    structure: ExamStructure[];
    question_levels: QuestionLevel[];
  };
  timeline: TimelineItem[];
  timeline_summary: TimelineSummary;
  comparison_table: ComparisonTable;
  common_mistakes: string[];
  study_tips: string[];
}

const data = historyRoadmap as HistoryRoadmapData;

// --- Components ---

const StatusBadge = ({ phase }: { phase: string }) => {
  const getColor = (p: string) => {
    if (p.includes('Foundation')) return 'bg-amber-100 text-amber-700 border-amber-200';
    if (p.includes('Advanced')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (p.includes('Intensive')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (p.includes('Exam')) return 'bg-red-100 text-red-700 border-red-200';
    if (p.includes('Stabilization')) return 'bg-teal-100 text-teal-700 border-teal-200';
    if (p.includes('Review') || p.includes('Final')) return 'bg-green-100 text-green-700 border-green-200';
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${getColor(phase)}`}>
      {phase}
    </span>
  );
};

const ProgressBar = ({ value, max, colorClass }: { value: number, max: number, colorClass: string }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div 
        className={`h-full ${colorClass} transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const ChecklistItem = ({ 
  id, 
  label, 
  checked, 
  onToggle, 
  className = "" 
}: { 
  id: string; 
  label: string; 
  checked: boolean; 
  onToggle: (id: string) => void;
  className?: string;
}) => {
  return (
    <div 
      className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-colors group ${
        checked ? 'bg-amber-50/50' : 'hover:bg-slate-50'
      } ${className}`}
      onClick={() => onToggle(id)}
    >
      <div className={`mt-0.5 shrink-0 transition-colors ${checked ? 'text-amber-600' : 'text-slate-300 group-hover:text-amber-400'}`}>
        {checked ? <CheckSquare size={18} /> : <Square size={18} />}
      </div>
      <span className={`text-sm transition-all ${
        checked ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-slate-900'
      }`}>
        {label}
      </span>
    </div>
  );
};

export function HistoryRoadmap() {
  const [expandedMonth, setExpandedMonth] = useState<string | null>(data.timeline[0].month);
  const [activeDateTab, setActiveDateTab] = useState<string>('lich_su_the_gioi');
  const [activeCompareTab, setActiveCompareTab] = useState<string>('ba_phong_trao_cach_mang');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('history-roadmap-progress');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('history-roadmap-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculateMonthProgress = (monthItem: TimelineItem) => {
    let total = 0;
    let completed = 0;

    // 1. Modules & Topics
    if (monthItem.modules) {
      monthItem.modules.forEach((mod, mIdx) => {
        mod.topics.forEach((_, tIdx) => {
          total++;
          if (checkedItems[`topic-${monthItem.month}-${mIdx}-${tIdx}`]) completed++;
        });
      });
    }

    // 2. Weekly Structure
    Object.keys(monthItem.weekly_structure).forEach((week) => {
      total++;
      if (checkedItems[`week-${monthItem.month}-${week}`]) completed++;
    });

    // 3. Checkpoints
    monthItem.checkpoints.forEach((_, cIdx) => {
      total++;
      if (checkedItems[`checkpoint-${monthItem.month}-${cIdx}`]) completed++;
    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  const dateCategories: Record<string, string> = {
    lich_su_the_gioi: "Lịch sử Thế giới",
    lich_su_viet_nam_truoc_1945: "VN trước 1945",
    khang_chien_chong_phap: "Kháng chiến chống Pháp",
    khang_chien_chong_my: "Kháng chiến chống Mỹ",
    viet_nam_sau_1975: "VN sau 1975"
  };

  const compareCategories: Record<string, string> = {
    ba_phong_trao_cach_mang: "3 Phong trào CM",
    bon_chien_luoc_chien_tranh_my: "4 Chiến lược của Mỹ"
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* --- Hero Header --- */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                <span className="uppercase tracking-wider">Lộ trình ôn thi 2026</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-amber-600 font-bold">Môn {data.subject}</span>
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <Scroll className="w-8 h-8 text-amber-500" />
                Chinh Phục Điểm {data.exam.target_score}+
              </h1>
            </div>

            <div className="flex gap-4">
               <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Thời gian</div>
                    <div className="font-bold text-slate-900">{data.exam.time_minutes} phút</div>
                  </div>
               </div>
               <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Số câu</div>
                    <div className="font-bold text-slate-900">{data.exam.total_questions} câu</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- Main Timeline Column (Left) --- */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" /> Timeline Chi Tiết
                </h2>
                <div className="flex items-center gap-3">
                   <div className="hidden sm:block text-xs font-medium text-slate-500">
                      Đã lưu tiến độ vào trình duyệt
                   </div>
                   <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                      {data.timeline.length} giai đoạn
                   </span>
                </div>
            </div>

            <div className="space-y-4">
              {data.timeline.map((item, index) => {
                const isExpanded = expandedMonth === item.month;
                const progress = calculateMonthProgress(item);
                const isComplete = progress === 100;
                const moduleCount = item.modules?.length || 0;
                
                return (
                  <div 
                    key={item.month}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded 
                        ? 'border-amber-500 ring-4 ring-amber-500/10 shadow-lg relative z-10' 
                        : 'border-slate-200 hover:border-amber-200 hover:shadow-md'
                    } ${isComplete ? 'bg-amber-50/30' : ''}`}
                  >
                    {/* Header Card */}
                    <div 
                        className="p-6 cursor-pointer flex items-start gap-4"
                        onClick={() => setExpandedMonth(isExpanded ? null : item.month)}
                    >
                        {/* Month Date Box */}
                        <div className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-xl border shrink-0 transition-colors ${
                            isComplete 
                            ? 'bg-green-100 border-green-200 text-green-700' 
                            : isExpanded
                            ? 'bg-amber-600 border-amber-600 text-white' 
                            : 'bg-white border-slate-100 text-slate-400'
                        }`}>
                            {isComplete ? (
                              <CheckCircle2 className="w-8 h-8" />
                            ) : (
                              <>
                                <span className="text-xs font-bold uppercase tracking-wider">{item.month.substring(0, 7)}</span>
                                <span className="text-lg font-black">{index + 1}</span>
                              </>
                            )}
                            
                            {/* Progress indicator */}
                            {!isComplete && progress > 0 && (
                              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                                {progress}%
                              </div>
                            )}
                        </div>

                        {/* Content Header */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <StatusBadge phase={item.phase} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 truncate pr-4">{item.focus}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 font-medium">
                                <span className="flex items-center gap-1">
                                    <Target className="w-4 h-4 text-slate-400" /> Target: {item.target_score}
                                </span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span>{moduleCount} chương</span>
                            </div>
                            
                            {/* Linear Progress Bar for Header */}
                            {progress > 0 && (
                              <div className="mt-3 max-w-[200px]">
                                <ProgressBar value={progress} max={100} colorClass={progress === 100 ? "bg-green-500" : "bg-amber-500"} />
                              </div>
                            )}
                        </div>

                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            isExpanded ? 'bg-slate-100 rotate-180' : 'bg-transparent'
                        }`}>
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`border-t border-slate-100 bg-slate-50/50 transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                        <div className="p-6 space-y-8">
                            
                            {/* Modules Grid */}
                            {item.modules && item.modules.length > 0 && (
                              <div>
                                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Nội dung học tập (Checklist)</h4>
                                  <div className="grid md:grid-cols-2 gap-4">
                                      {item.modules.map((mod, mIdx) => (
                                          <div key={mIdx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                              <div className="font-bold text-slate-900 mb-2 pb-2 border-b border-slate-100 flex items-center gap-2">
                                                  <Book className="w-4 h-4 text-amber-500" /> {mod.name}
                                              </div>
                                              <div className="space-y-1">
                                                  {mod.topics.map((topic, tIdx) => (
                                                      <ChecklistItem 
                                                        key={tIdx}
                                                        id={`topic-${item.month}-${mIdx}-${tIdx}`}
                                                        label={topic}
                                                        checked={!!checkedItems[`topic-${item.month}-${mIdx}-${tIdx}`]}
                                                        onToggle={toggleItem}
                                                      />
                                                  ))}
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                            )}

                            {/* Key Dates for this month */}
                            {item.key_dates && item.key_dates.length > 0 && (
                              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Timer className="w-4 h-4" /> Mốc thời gian quan trọng
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    {item.key_dates.map((date, dIdx) => (
                                        <div key={dIdx} className="bg-white/60 p-2 rounded-lg text-sm text-amber-800 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0"></span>
                                            {date}
                                        </div>
                                    ))}
                                </div>
                              </div>
                            )}

                            {/* Weekly Plan & Stats */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Kế hoạch tuần</h4>
                                    <div className="space-y-2">
                                        {Object.entries(item.weekly_structure).map(([week, content]) => (
                                            <ChecklistItem 
                                              key={week}
                                              id={`week-${item.month}-${week}`}
                                              label={`${week.replace('_', ' ').toUpperCase()}: ${content}`}
                                              checked={!!checkedItems[`week-${item.month}-${week}`]}
                                              onToggle={toggleItem}
                                              className="bg-white border border-slate-100 shadow-sm"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">KPIs Hoàn thành</h4>
                                    <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-4">
                                        {item.practice_volume.mcq_questions && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài tập trắc nghiệm</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.mcq_questions} câu</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-amber-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.mini_tests && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Mini Tests</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.mini_tests} đề</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-purple-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.full_tests && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Thi thử (Full Test)</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.full_tests} đề</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-red-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.timeline_exercises && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài tập mốc thời gian</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.timeline_exercises} bài</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-blue-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.comparison_exercises && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài tập so sánh</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.comparison_exercises} bài</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-indigo-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.error_review_sessions && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Phiên chữa lỗi sai</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.error_review_sessions} buổi</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-orange-500" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Checkpoints */}
                            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                                <h4 className="text-xs font-bold text-green-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" /> Yêu cầu đạt được
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    {item.checkpoints.map((cp, cIdx) => (
                                        <div 
                                          key={cIdx} 
                                          className={`flex items-start gap-2 text-sm p-2 rounded cursor-pointer transition-colors ${
                                            checkedItems[`checkpoint-${item.month}-${cIdx}`]
                                              ? 'bg-green-200/50 text-green-800 line-through opacity-70'
                                              : 'hover:bg-green-100 text-green-800'
                                          }`}
                                          onClick={() => toggleItem(`checkpoint-${item.month}-${cIdx}`)}
                                        >
                                            <div className={`mt-0.5 shrink-0 ${
                                              checkedItems[`checkpoint-${item.month}-${cIdx}`] ? 'text-green-600' : 'text-green-500'
                                            }`}>
                                              {checkedItems[`checkpoint-${item.month}-${cIdx}`] ? <CheckSquare size={16} /> : <Square size={16} />}
                                            </div>
                                            {cp}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- Sidebar Resources (Right) --- */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Timeline Summary - Key Dates Bank */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
                <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-yellow-300" /> Sổ Tay Mốc Thời Gian
                    </h3>
                </div>
                
                {/* Tabs */}
                <div className="flex overflow-x-auto border-b border-slate-100 p-2 gap-1 no-scrollbar">
                    {Object.keys(dateCategories).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveDateTab(key)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                                activeDateTab === key 
                                ? 'bg-amber-100 text-amber-700' 
                                : 'bg-transparent text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            {dateCategories[key]}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-4 max-h-[300px] overflow-y-auto bg-slate-50/50">
                     <ul className="space-y-2">
                        {data.timeline_summary[activeDateTab]?.map((date, idx) => (
                            <li key={idx} className="bg-white p-3 rounded-lg border border-slate-200 text-sm text-slate-700 shadow-sm flex items-center gap-2">
                                <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0"></span>
                                {date}
                            </li>
                        ))}
                     </ul>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                    <button className="text-xs font-bold text-amber-600 hover:underline flex items-center justify-center gap-1 w-full">
                        Xem toàn bộ mốc thời gian <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* 2. Comparison Tables */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                        <Table className="w-5 h-5 text-indigo-200" /> Bảng So Sánh
                    </h3>
                </div>
                
                {/* Tabs */}
                <div className="flex overflow-x-auto border-b border-slate-100 p-2 gap-1 no-scrollbar">
                    {Object.keys(compareCategories).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCompareTab(key)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                                activeCompareTab === key 
                                ? 'bg-indigo-100 text-indigo-700' 
                                : 'bg-transparent text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            {compareCategories[key]}
                        </button>
                    ))}
                </div>

                {/* Table Content */}
                <div className="p-4 overflow-x-auto">
                    {activeCompareTab === 'ba_phong_trao_cach_mang' && (
                        <table className="w-full text-xs border-collapse">
                            <thead>
                                <tr>
                                    {data.comparison_table.ba_phong_trao_cach_mang.headers.map((header, idx) => (
                                        <th key={idx} className="bg-indigo-50 text-indigo-800 font-bold p-2 border border-slate-200 text-left">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.comparison_table.ba_phong_trao_cach_mang.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-slate-50">
                                        {row.map((cell, cIdx) => (
                                            <td key={cIdx} className={`p-2 border border-slate-200 ${cIdx === 0 ? 'font-medium text-slate-700' : 'text-slate-600'}`}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {activeCompareTab === 'bon_chien_luoc_chien_tranh_my' && (
                        <table className="w-full text-xs border-collapse">
                            <thead>
                                <tr>
                                    {data.comparison_table.bon_chien_luoc_chien_tranh_my.headers.map((header, idx) => (
                                        <th key={idx} className="bg-indigo-50 text-indigo-800 font-bold p-2 border border-slate-200 text-left">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.comparison_table.bon_chien_luoc_chien_tranh_my.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-slate-50">
                                        {row.map((cell, cIdx) => (
                                            <td key={cIdx} className={`p-2 border border-slate-200 ${cIdx === 0 ? 'font-medium text-slate-700' : 'text-slate-600'}`}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* 3. Common Mistakes */}
            <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Lỗi Sai Kinh Điển
                </h3>
                <ul className="space-y-3">
                    {data.common_mistakes.map((mistake, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-red-700 bg-white/60 p-2 rounded-lg">
                            <span className="font-bold shrink-0">{idx + 1}.</span>
                            {mistake}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 4. Study Tips */}
            <div className="bg-yellow-50 rounded-2xl border border-yellow-100 p-6">
                <h3 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" /> Mẹo Ôn Thi Lịch Sử
                </h3>
                <ul className="space-y-4">
                    {data.study_tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-yellow-900/80 leading-relaxed border-l-2 border-yellow-300 pl-3">
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 5. Exam Structure */}
            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <Scroll className="w-5 h-5" /> Cấu Trúc Đề Thi
                </h3>
                <div className="space-y-3">
                    {data.exam.structure.map((part, idx) => (
                        <div key={idx} className="bg-white/60 p-3 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <div className="font-bold text-amber-700 text-sm">{part.part}</div>
                                <div className="bg-amber-200 text-amber-700 px-2 py-1 rounded-full text-xs font-bold">
                                    {part.questions} câu ({part.percentage})
                                </div>
                            </div>
                            <div className="text-xs text-amber-600">
                                {part.topics.join(' • ')}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Question Levels */}
                <div className="mt-4 pt-4 border-t border-amber-200">
                    <div className="text-xs font-bold text-amber-700 uppercase mb-3">Mức độ câu hỏi</div>
                    <div className="grid grid-cols-2 gap-2">
                        {data.exam.question_levels.map((level, idx) => (
                            <div key={idx} className="bg-white/60 p-2 rounded-lg text-center">
                                <div className="text-xs text-amber-600">{level.level}</div>
                                <div className="font-bold text-amber-800">{level.questions} câu</div>
                                <div className="text-xs text-amber-500">({level.percentage})</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
