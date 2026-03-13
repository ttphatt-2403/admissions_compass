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
    Monitor,
    Calendar,
    Layers,
    ArrowRight,
    CheckSquare,
    Square
} from 'lucide-react';
import { informaticsRoadmap } from '../roadmap/informatics-roadmap';

// --- Types based on the JSON structure ---
interface Module {
    name: string;
    topics: string[];
}

interface FormulaSummary {
    [key: string]: string[];
}

interface PracticeVolume {
    mcq_questions?: number;
    mini_tests?: number;
    full_tests?: number;
    true_false_sets?: number;
    situation_questions?: number;
    simulation_exercises?: number;
    topic_tests?: number;
    error_review_sessions?: number;
}

interface TimelineItem {
    month: string;
    phase: string;
    focus: string;
    modules: Module[];
    practice_volume: PracticeVolume;
    weekly_structure: { [key: string]: string };
    target_score: number;
    checkpoints: string[];
}

interface InformaticsRoadmapData {
    subject: string;
    exam: {
        total_questions: number;
        time_minutes: number;
        target_score: number;
        structure?: Array<{ part: string; questions: number; chapter: string }>;
    };
    timeline: TimelineItem[];
    formula_summary: FormulaSummary;
    common_mistakes: string[];
    study_tips: string[];
}

const data = informaticsRoadmap as InformaticsRoadmapData;

// --- Components ---

const StatusBadge = ({ phase }: { phase: string }) => {
    const getColor = (p: string) => {
        if (p.includes('Foundation')) return 'bg-cyan-100 text-cyan-700 border-cyan-200';
        if (p.includes('Practice')) return 'bg-purple-100 text-purple-700 border-purple-200';
        if (p.includes('Intensive')) return 'bg-orange-100 text-orange-700 border-orange-200';
        if (p.includes('Preparation')) return 'bg-red-100 text-red-700 border-red-200';
        if (p.includes('Consolidation')) return 'bg-teal-100 text-teal-700 border-teal-200';
        if (p.includes('Review')) return 'bg-green-100 text-green-700 border-green-200';
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
            className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-colors group ${checked ? 'bg-cyan-50/50' : 'hover:bg-slate-50'
                } ${className}`}
            onClick={() => onToggle(id)}
        >
            <div className={`mt-0.5 shrink-0 transition-colors ${checked ? 'text-cyan-600' : 'text-slate-300 group-hover:text-cyan-400'}`}>
                {checked ? <CheckSquare size={18} /> : <Square size={18} />}
            </div>
            <span className={`text-sm transition-all ${checked ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                {label}
            </span>
        </div>
    );
};

export function InformaticsRoadmap() {
    const [expandedMonth, setExpandedMonth] = useState<string | null>(data.timeline[0].month);
    const [activeFormulaTab, setActiveFormulaTab] = useState<string>('A_ATTT_dao_duc_so');
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    // Load state from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('informatics-roadmap-progress');
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
        localStorage.setItem('informatics-roadmap-progress', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const toggleItem = (id: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const calculateMonthProgress = (monthItem: TimelineItem) => {
        // Count all checkable items in this month
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

    const formulaCategories = {
        A_ATTT_dao_duc_so: "ATTT & Đạo đức số",
        B_mang_va_internet: "Mạng & Internet",
        C_thuat_toan_mo_phong: "Thuật toán cơ bản",
        D_csdl: "Dữ liệu & CSDL"
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
                                <span className="text-cyan-600 font-bold">Môn {data.subject}</span>
                            </div>
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                                <Monitor className="text-cyan-500 w-8 h-8" />
                                Chinh Phục Điểm {data.exam.target_score}+
                            </h1>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                                <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase">Thời gian</div>
                                    <div className="font-bold text-slate-900">{data.exam.time_minutes} phút</div>
                                </div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3">
                                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
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
                                <Calendar className="w-5 h-5 text-cyan-600" /> Timeline Chi Tiết
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

                                return (
                                    <div
                                        key={item.month}
                                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded
                                                ? 'border-cyan-500 ring-4 ring-cyan-500/10 shadow-lg relative z-10'
                                                : 'border-slate-200 hover:border-cyan-200 hover:shadow-md'
                                            } ${isComplete ? 'bg-cyan-50/30' : ''}`}
                                    >
                                        {/* Header Card */}
                                        <div
                                            className="p-6 cursor-pointer flex items-start gap-4"
                                            onClick={() => setExpandedMonth(isExpanded ? null : item.month)}
                                        >
                                            {/* Month Date Box */}
                                            <div className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-xl border shrink-0 transition-colors ${isComplete
                                                    ? 'bg-green-100 border-green-200 text-green-700'
                                                    : isExpanded
                                                        ? 'bg-cyan-600 border-cyan-600 text-white'
                                                        : 'bg-white border-slate-100 text-slate-400'
                                                }`}>
                                                {isComplete ? (
                                                    <CheckCircle2 className="w-8 h-8" />
                                                ) : (
                                                    <>
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-center px-1">
                                                            {item.month.includes('-') ? item.month.split('-')[0].trim().substring(0, 3) + '-' + item.month.split('-')[1].trim().substring(0, 3) : item.month.substring(0, 3)}
                                                        </span>
                                                        <span className="text-lg font-black">{index + 1}</span>
                                                    </>
                                                )}

                                                {/* Circular Progress (Visual only for now) */}
                                                {!isComplete && progress > 0 && (
                                                    <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
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
                                                    <span>{item.modules?.length || 0} chủ đề</span>
                                                </div>

                                                {/* Linear Progress Bar for Header */}
                                                {progress > 0 && (
                                                    <div className="mt-3 max-w-[200px]">
                                                        <ProgressBar value={progress} max={100} colorClass={progress === 100 ? "bg-green-500" : "bg-cyan-500"} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-slate-100 rotate-180' : 'bg-transparent'
                                                }`}>
                                                <ChevronDown className="w-5 h-5 text-slate-400" />
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        <div className={`border-t border-slate-100 bg-slate-50/50 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
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
                                                                        <Book className="w-4 h-4 text-cyan-500" /> {mod.name}
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
                                                            {Object.entries(item.weekly_structure).map(([week, content], wIdx) => (
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
                                                                    <ProgressBar value={progress} max={100} colorClass="bg-cyan-500" />
                                                                </div>
                                                            )}
                                                            {item.practice_volume.true_false_sets && (
                                                                <div>
                                                                    <div className="flex justify-between text-sm mb-1">
                                                                        <span className="text-slate-600">Bài Đúng / Sai</span>
                                                                        <span className="font-bold text-slate-900">{item.practice_volume.true_false_sets} sets</span>
                                                                    </div>
                                                                    <ProgressBar value={progress} max={100} colorClass="bg-indigo-500" />
                                                                </div>
                                                            )}
                                                            {item.practice_volume.simulation_exercises && (
                                                                <div>
                                                                    <div className="flex justify-between text-sm mb-1">
                                                                        <span className="text-slate-600">Mô phỏng thuật toán</span>
                                                                        <span className="font-bold text-slate-900">{item.practice_volume.simulation_exercises} bài</span>
                                                                    </div>
                                                                    <ProgressBar value={progress} max={100} colorClass="bg-orange-500" />
                                                                </div>
                                                            )}
                                                            {item.practice_volume.situation_questions && (
                                                                <div>
                                                                    <div className="flex justify-between text-sm mb-1">
                                                                        <span className="text-slate-600">Bài tập tình huống</span>
                                                                        <span className="font-bold text-slate-900">{item.practice_volume.situation_questions} câu</span>
                                                                    </div>
                                                                    <ProgressBar value={progress} max={100} colorClass="bg-pink-500" />
                                                                </div>
                                                            )}
                                                            {item.practice_volume.topic_tests && (
                                                                <div>
                                                                    <div className="flex justify-between text-sm mb-1">
                                                                        <span className="text-slate-600">Đề theo chủ đề</span>
                                                                        <span className="font-bold text-slate-900">{item.practice_volume.topic_tests} đề</span>
                                                                    </div>
                                                                    <ProgressBar value={progress} max={100} colorClass="bg-blue-500" />
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
                                                                className={`flex items-start gap-2 text-sm p-2 rounded cursor-pointer transition-colors ${checkedItems[`checkpoint-${item.month}-${cIdx}`]
                                                                        ? 'bg-green-200/50 text-green-800 line-through opacity-70'
                                                                        : 'hover:bg-green-100 text-green-800'
                                                                    }`}
                                                                onClick={() => toggleItem(`checkpoint-${item.month}-${cIdx}`)}
                                                            >
                                                                <div className={`mt-0.5 shrink-0 ${checkedItems[`checkpoint-${item.month}-${cIdx}`] ? 'text-green-600' : 'text-green-500'
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

                        {/* 1. Formula Bank */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
                            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                                <h3 className="font-bold flex items-center gap-2">
                                    <Monitor className="w-5 h-5 text-yellow-400" /> Sổ Tay Kiến Thức
                                </h3>
                            </div>

                            {/* Tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-100 p-2 gap-1 no-scrollbar">
                                {Object.keys(formulaCategories).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveFormulaTab(key)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${activeFormulaTab === key
                                                ? 'bg-cyan-100 text-cyan-700'
                                                : 'bg-transparent text-slate-500 hover:bg-slate-50'
                                            }`}
                                    >
                                        {/* @ts-ignore */}
                                        {formulaCategories[key].split(' ')[0]}...
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-4 max-h-[300px] overflow-y-auto bg-slate-50/50">
                                <ul className="space-y-3">
                                    {/* @ts-ignore */}
                                    {data.formula_summary[activeFormulaTab]?.map((formula, idx) => (
                                        <li key={idx} className="bg-white p-3 rounded-lg border border-slate-200 text-sm font-mono text-slate-700 shadow-sm">
                                            {formula}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                                <button className="text-xs font-bold text-cyan-600 hover:underline flex items-center justify-center gap-1 w-full">
                                    Xem toàn bộ kiến thức <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        {/* 2. Common Mistakes */}
                        <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
                            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Bẫy Thường Gặp
                            </h3>
                            <ul className="space-y-3">
                                {data.common_mistakes.slice(0, 5).map((mistake, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-red-700 bg-white/60 p-2 rounded-lg">
                                        <span className="font-bold shrink-0">🚨</span>
                                        {mistake}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Study Tips */}
                        <div className="bg-yellow-50 rounded-2xl border border-yellow-100 p-6">
                            <h3 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5" /> Mẹo Ôn Thi
                            </h3>
                            <ul className="space-y-4">
                                {data.study_tips.slice(0, 5).map((tip, idx) => (
                                    <li key={idx} className="text-sm text-yellow-900/80 leading-relaxed border-l-2 border-yellow-300 pl-3">
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Exam Structure */}
                        {data.exam.structure && (
                            <div className="bg-cyan-50 rounded-2xl border border-cyan-100 p-6">
                                <h3 className="font-bold text-cyan-800 mb-4 flex items-center gap-2">
                                    <Layers className="w-5 h-5" /> Cấu Trúc Đề Thi
                                </h3>
                                <div className="space-y-3">
                                    {data.exam.structure.map((part, idx) => (
                                        <div key={idx} className="bg-white/60 p-3 rounded-lg flex justify-between items-center shadow-sm border border-cyan-100">
                                            <div>
                                                <div className="font-bold text-cyan-700 text-sm">{part.part}</div>
                                                <div className="text-xs text-cyan-500 font-medium">{part.chapter}</div>
                                            </div>
                                            <div className="bg-cyan-200/50 text-cyan-700 px-2 py-1 rounded-full text-xs font-bold shrink-0">
                                                {part.questions} câu
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
