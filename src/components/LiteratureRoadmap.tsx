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
  CheckSquare,
  Square,
  PenTool,
  Quote,
  FileText
} from 'lucide-react';
import { literatureRoadmap } from '../roadmap/literature-roadmap';

// --- Types based on the JSON structure ---
interface Module {
  name: string;
  topics: string[];
}

interface PracticeVolume {
  doc_hieu_exercises?: number;
  short_essays_200_words?: number;
  mini_tests?: number;
  full_essays?: number;
  full_tests?: number;
  revision_sessions?: number;
  nlvh_essays?: number;
  nlxh_essays?: number;
  timed_tests?: number;
  error_correction_sessions?: number;
}

interface TimelineItem {
  month: string;
  phase: string;
  focus: string;
  modules?: Module[];
  practice_volume: PracticeVolume;
  weekly_structure: { [key: string]: string };
  target_score: number;
  checkpoints: string[];
}

interface LiteratureRoadmapData {
  subject: string;
  exam: {
    time_minutes: number;
    target_score: number;
    format: string;
    structure: Array<{ part: string; max_score: number; description: string; time_suggested_minutes: number }>;
  };
  timeline: TimelineItem[];
  writing_frameworks: {
    essay_nlvh_phan_tich_doan_tho: { mo_bai: string[]; than_bai: string[]; ket_bai: string[] };
    essay_nlvh_phan_tich_nhan_vat: { mo_bai: string[]; than_bai: string[]; ket_bai: string[] };
    essay_nlxh_tu_tuong_dao_ly: { mo_bai: string[]; than_bai: string[]; ket_bai: string[] };
    essay_nlxh_hien_tuong_doi_song: { mo_bai: string[]; than_bai: string[]; ket_bai: string[] };
  };
  quotation_bank: { [key: string]: string[] };
  common_mistakes: string[];
  study_tips: string[];
}

const data = literatureRoadmap as LiteratureRoadmapData;

// --- Components ---

const StatusBadge = ({ phase }: { phase: string }) => {
  const getColor = (p: string) => {
    if (p.includes('Foundation')) return 'bg-violet-100 text-violet-700 border-violet-200';
    if (p.includes('Advanced')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (p.includes('Intensive')) return 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200';
    if (p.includes('Exam') || p.includes('Simulation')) return 'bg-pink-100 text-pink-700 border-pink-200';
    if (p.includes('Final') || p.includes('Consolidation')) return 'bg-indigo-100 text-indigo-700 border-indigo-200';
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
        checked ? 'bg-violet-50/50' : 'hover:bg-slate-50'
      } ${className}`}
      onClick={() => onToggle(id)}
    >
      <div className={`mt-0.5 shrink-0 transition-colors ${checked ? 'text-violet-600' : 'text-slate-300 group-hover:text-violet-400'}`}>
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

export function LiteratureRoadmap() {
  const [expandedMonth, setExpandedMonth] = useState<string | null>(data.timeline[0].month);
  const [activeWritingTab, setActiveWritingTab] = useState<string>('nlvh_tho');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('literature-roadmap-progress');
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
    localStorage.setItem('literature-roadmap-progress', JSON.stringify(checkedItems));
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

  const writingTabs = {
    nlvh_tho: "NLVH Thơ",
    nlvh_nv: "NLVH Nhân vật",
    nlxh_ttdl: "NLXH Đạo lý",
    nlxh_htds: "NLXH Hiện tượng"
  };

  const getWritingFramework = (tab: string) => {
    switch (tab) {
      case 'nlvh_tho': return data.writing_frameworks.essay_nlvh_phan_tich_doan_tho;
      case 'nlvh_nv': return data.writing_frameworks.essay_nlvh_phan_tich_nhan_vat;
      case 'nlxh_ttdl': return data.writing_frameworks.essay_nlxh_tu_tuong_dao_ly;
      case 'nlxh_htds': return data.writing_frameworks.essay_nlxh_hien_tuong_doi_song;
      default: return data.writing_frameworks.essay_nlvh_phan_tich_doan_tho;
    }
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
                <span className="text-violet-600 font-bold">Môn {data.subject}</span>
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-violet-500" />
                Chinh Phục Điểm {data.exam.target_score}+
              </h1>
            </div>

            <div className="flex gap-4">
               <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-violet-100 text-violet-600 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Thời gian</div>
                    <div className="font-bold text-slate-900">{data.exam.time_minutes} phút</div>
                  </div>
               </div>
               <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Hình thức</div>
                    <div className="font-bold text-slate-900">{data.exam.format}</div>
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
                    <Calendar className="w-5 h-5 text-violet-600" /> Timeline Chi Tiết
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
                        ? 'border-violet-500 ring-4 ring-violet-500/10 shadow-lg relative z-10' 
                        : 'border-slate-200 hover:border-violet-200 hover:shadow-md'
                    } ${isComplete ? 'bg-violet-50/30' : ''}`}
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
                            ? 'bg-violet-600 border-violet-600 text-white' 
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
                              <div className="absolute -bottom-2 -right-2 bg-violet-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
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
                                <span>{moduleCount} nội dung</span>
                            </div>
                            
                            {/* Linear Progress Bar for Header */}
                            {progress > 0 && (
                              <div className="mt-3 max-w-[200px]">
                                <ProgressBar value={progress} max={100} colorClass={progress === 100 ? "bg-green-500" : "bg-violet-500"} />
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
                        isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
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
                                                  <Book className="w-4 h-4 text-violet-500" /> {mod.name}
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
                                        {item.practice_volume.doc_hieu_exercises && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài tập đọc hiểu</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.doc_hieu_exercises} câu</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-violet-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.short_essays_200_words && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Đoạn văn 200 chữ</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.short_essays_200_words} đoạn</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-purple-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.full_essays && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài văn hoàn chỉnh</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.full_essays} bài</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-fuchsia-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.nlvh_essays && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài NLVH</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.nlvh_essays} bài</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-pink-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.nlxh_essays && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Bài NLXH</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.nlxh_essays} bài</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-indigo-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.mini_tests && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Mini Tests</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.mini_tests} đề</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-blue-500" />
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
                                        {item.practice_volume.timed_tests && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Đề tính giờ</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.timed_tests} đề</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-orange-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.revision_sessions && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Buổi ôn tập</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.revision_sessions} buổi</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-teal-500" />
                                            </div>
                                        )}
                                        {item.practice_volume.error_correction_sessions && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600">Phiên chữa lỗi</span>
                                                    <span className="font-bold text-slate-900">{item.practice_volume.error_correction_sessions} buổi</span>
                                                </div>
                                                <ProgressBar value={progress} max={100} colorClass="bg-amber-500" />
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
          <div className="lg:col-span-4 space-y-6 overflow-hidden">
            
            {/* 1. Exam Structure */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden break-words">
                <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                        <FileText className="w-5 h-5 text-yellow-300" /> Cấu Trúc Đề Thi
                    </h3>
                </div>
                <div className="p-4 space-y-3">
                    {data.exam.structure.map((part, idx) => (
                        <div key={idx} className="bg-violet-50 p-3 rounded-lg border border-violet-100">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-violet-700 text-sm">{part.part}</h4>
                                <span className="bg-violet-500 text-white text-xs font-bold px-2 py-0.5 rounded">{part.max_score}đ</span>
                            </div>
                            <p className="text-xs text-slate-600 mb-1">{part.description}</p>
                            <p className="text-xs text-violet-500 font-medium">⏱ {part.time_suggested_minutes} phút</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Writing Framework Bank */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden break-words">
                <div className="p-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                        <PenTool className="w-5 h-5 text-yellow-300" /> Dàn Ý Chuẩn
                    </h3>
                </div>
                
                {/* Tabs */}
                <div className="flex flex-wrap border-b border-slate-100 p-2 gap-1">
                    {Object.keys(writingTabs).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveWritingTab(key)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                                activeWritingTab === key 
                                ? 'bg-violet-100 text-violet-700' 
                                : 'bg-transparent text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            {/* @ts-ignore */}
                            {writingTabs[key]}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-4 max-h-[350px] overflow-y-auto bg-slate-50/50 space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <h5 className="font-bold text-green-700 text-sm mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                            Mở bài
                        </h5>
                        <ul className="space-y-1">
                            {getWritingFramework(activeWritingTab).mo_bai.map((item, i) => (
                                <li key={i} className="text-xs text-slate-600 flex gap-2">
                                    <span className="text-green-500 shrink-0">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <h5 className="font-bold text-blue-700 text-sm mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                            Thân bài
                        </h5>
                        <ul className="space-y-1">
                            {getWritingFramework(activeWritingTab).than_bai.map((item, i) => (
                                <li key={i} className="text-xs text-slate-600 flex gap-2">
                                    <span className="text-blue-500 shrink-0">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <h5 className="font-bold text-orange-700 text-sm mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                            Kết bài
                        </h5>
                        <ul className="space-y-1">
                            {getWritingFramework(activeWritingTab).ket_bai.map((item, i) => (
                                <li key={i} className="text-xs text-slate-600 flex gap-2">
                                    <span className="text-orange-500 shrink-0">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3. Quotation Bank */}
            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6 overflow-hidden break-words">
                <h3 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                    <Quote className="w-5 h-5" /> Kho Trích Dẫn Hay
                </h3>
                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2">
                    {Object.entries(data.quotation_bank).map(([category, quotes]) => (
                        <div key={category} className="bg-white/60 p-3 rounded-lg break-words">
                            <h4 className="font-bold text-indigo-700 text-xs uppercase mb-2">
                                {category.replace(/_/g, ' ')}
                            </h4>
                            {quotes.map((quote, idx) => (
                                <p key={idx} className="text-xs text-slate-600 italic mb-1 pl-2 border-l-2 border-indigo-300 break-words whitespace-normal">
                                    {quote}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Common Mistakes */}
            <div className="bg-red-50 rounded-2xl border border-red-100 p-6 overflow-hidden break-words">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Lỗi Sai Kinh Điển
                </h3>
                <ul className="space-y-3">
                    {data.common_mistakes.map((mistake, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-red-700 bg-white/60 p-2 rounded-lg break-words">
                            <span className="font-bold shrink-0">{idx + 1}.</span>
                            <span className="break-words whitespace-normal">{mistake}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 5. Study Tips */}
            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6 overflow-hidden break-words">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" /> Mẹo Học Tập Hiệu Quả
                </h3>
                <ul className="space-y-3">
                    {data.study_tips.map((tip, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-amber-700 bg-white/60 p-3 rounded-lg items-start break-words">
                            <span className="text-lg shrink-0">💡</span>
                            <span className="break-words whitespace-normal">{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
