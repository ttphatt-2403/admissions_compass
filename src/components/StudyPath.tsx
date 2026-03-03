import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Trophy,
  Target,
  ArrowRight,
  BrainCircuit,
  Library,
  Sparkles,
  BookOpen,
  GraduationCap,
  Layout,
  BarChart3,
  ArrowLeft,
  Zap,
  Flame,
  Star,
  Clock,
  TrendingUp,
} from "lucide-react";
import { MathRoadmap } from "./MathRoadmap";
import { ChemistryRoadmap } from "./ChemistryRoadmap";
import { PhysicsRoadmap } from "./PhysicsRoadmap";
import { EnglishRoadmap } from "./EnglishRoadmap";
import { BiologyRoadmap } from "./BiologyRoadmap";
import { LiteratureRoadmap } from "./LiteratureRoadmap";
import { HistoryRoadmap } from "./HistoryRoadmap";
import { GeographyRoadmap } from "./GeographyRoadmap";
import { GDCDRoadmap } from "./GDCDRoadmap";

// --- Types ---
interface Task {
  id: string;
  topic: string;
  detail: string;
}

interface SubjectPlan {
  name: string;
  color: string;
  tasks: Task[];
}

interface Phase {
  id: number;
  title: string;
  timeRange: string;
  goal: string;
  subjects: SubjectPlan[];
}

interface GroupData {
  [key: string]: Phase[];
}

// Animation Utilities
function useInView(ref: React.RefObject<HTMLDivElement>, options = { threshold: 0.1 }) {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) { setIsInView(true); return; }
    setIsInView(false);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}

function useCounter(end: number, isInView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, end]);

  return count;
}

// --- Data Content (Preserved) ---
const studyData: GroupData = {
  A00: [
    {
      id: 1,
      title: "Khởi Động & Nền Tảng",
      timeRange: "Tháng 5 - Tháng 8",
      goal: "Nắm chắc 80% kiến thức SGK lớp 12 & Ôn lại 11",
      subjects: [
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "a00-p1-m1",
              topic: "Hàm số (Cực quan trọng)",
              detail: "Đơn điệu, Cực trị, Tiệm cận, Đồ thị",
            },
            {
              id: "a00-p1-m2",
              topic: "Khối đa diện",
              detail: "Thể tích chóp, lăng trụ, tỷ số thể tích",
            },
            {
              id: "a00-p1-m3",
              topic: "Ôn tập Lớp 11",
              detail: "Cấp số cộng/nhân, Tổ hợp xác suất",
            },
          ],
        },
        {
          name: "Vật Lý",
          color:
            "bg-purple-100 text-purple-700 border-purple-200",
          tasks: [
            {
              id: "a00-p1-p1",
              topic: "Dao động cơ",
              detail:
                "Con lắc lò xo, Con lắc đơn, Tổng hợp dao động",
            },
            {
              id: "a00-p1-p2",
              topic: "Sóng cơ",
              detail: "Giao thoa sóng, Sóng dừng",
            },
          ],
        },
        {
          name: "Hóa Học",
          color: "bg-teal-100 text-teal-700 border-teal-200",
          tasks: [
            {
              id: "a00-p1-c1",
              topic: "Este - Lipit",
              detail:
                "Phản ứng xà phòng hóa, bài toán đốt cháy",
            },
            {
              id: "a00-p1-c2",
              topic: "Cacbohidrat",
              detail: "Glucozơ, Saccarozơ, Tinh bột, Xenlulozơ",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Tăng Tốc & Vận Dụng",
      timeRange: "Tháng 9 - Tháng 12",
      goal: "Hoàn thành chương trình 12 & Luyện chuyên đề VDC",
      subjects: [
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "a00-p2-m1",
              topic: "Mũ & Logarit",
              detail:
                "Phương trình, Bất phương trình, Bài toán lãi suất",
            },
            {
              id: "a00-p2-m2",
              topic: "Nguyên hàm - Tích phân",
              detail:
                "Các phương pháp tính, Ứng dụng diện tích/thể tích",
            },
            {
              id: "a00-p2-m3",
              topic: "Nón - Trụ - Cầu",
              detail:
                "Mặt cầu ngoại tiếp, Diện tích xung quanh",
            },
          ],
        },
        {
          name: "Vật Lý",
          color:
            "bg-purple-100 text-purple-700 border-purple-200",
          tasks: [
            {
              id: "a00-p2-p1",
              topic: "Dòng điện xoay chiều",
              detail:
                "Mạch RLC, Cộng hưởng, Máy biến áp (Chương khó nhất)",
            },
            {
              id: "a00-p2-p2",
              topic: "Dao động điện từ",
              detail: "Mạch LC, Sóng điện từ",
            },
          ],
        },
        {
          name: "Hóa Học",
          color: "bg-teal-100 text-teal-700 border-teal-200",
          tasks: [
            {
              id: "a00-p2-c1",
              topic: "Amin - Amino Axit",
              detail: "Tính bazơ, Phản ứng với axit/kiềm",
            },
            {
              id: "a00-p2-c2",
              topic: "Đại cương kim loại",
              detail: "Dãy điện hóa, Ăn mòn kim loại",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Luyện Đề Thực Chiến",
      timeRange: "Tháng 1 - Tháng 4",
      goal: "Giải 30-50 đề/môn. Tổng ôn lý thuyết tránh sai ngu.",
      subjects: [
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "a00-p3-m1",
              topic: "Số phức",
              detail:
                "Các phép toán, Quỹ tích điểm, Min/Max số phức",
            },
            {
              id: "a00-p3-m2",
              topic: "Oxyz",
              detail:
                "Phương trình mặt phẳng, đường thẳng, mặt cầu",
            },
            {
              id: "a00-p3-m3",
              topic: "Luyện đề tổng hợp",
              detail:
                "Làm đề thi thử các sở, trường chuyên mới nhất",
            },
          ],
        },
        {
          name: "Vật Lý",
          color:
            "bg-purple-100 text-purple-700 border-purple-200",
          tasks: [
            {
              id: "a00-p3-p1",
              topic: "Sóng ánh sáng",
              detail: "Giao thoa Y-âng, Quang phổ",
            },
            {
              id: "a00-p3-p2",
              topic: "Lượng tử ánh sáng",
              detail: "Hiện tượng quang điện, Mẫu nguyên tử Bo",
            },
            {
              id: "a00-p3-p3",
              topic: "Hạt nhân nguyên tử",
              detail: "Phóng xạ, Phản ứng hạt nhân, Năng lượng",
            },
          ],
        },
        {
          name: "Hóa Học",
          color: "bg-teal-100 text-teal-700 border-teal-200",
          tasks: [
            {
              id: "a00-p3-c1",
              topic: "Kim loại Kiềm - Thổ - Nhôm",
              detail:
                "Bài toán nhiệt nhôm, Bài toán H+ + CO3 2-",
            },
            {
              id: "a00-p3-c2",
              topic: "Sắt và Crom",
              detail:
                "Các hợp chất quan trọng, Bài toán quy đổi",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Về Đích",
      timeRange: "Tháng 5 - Tháng 6",
      goal: "Rà soát lỗi sai. Giữ phong độ.",
      subjects: [
        {
          name: "Tổng Hợp",
          color:
            "bg-orange-100 text-orange-700 border-orange-200",
          tasks: [
            {
              id: "a00-p4-1",
              topic: "Thi thử như thi thật",
              detail:
                "Đúng giờ quy định (Sáng: Lý/Hóa - Chiều: Toán)",
            },
            {
              id: "a00-p4-2",
              topic: "Đọc lại SGK",
              detail:
                "Soát lại các ghi chú lý thuyết nhỏ nhặt dễ quên",
            },
          ],
        },
      ],
    },
  ],
  A01: [
    {
      id: 1,
      title: "Nền Tảng Cơ Bản",
      timeRange: "Tháng 5 - Tháng 8",
      goal: "Xây gốc Toán Lý & Từ vựng Anh",
      subjects: [
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "a01-p1-m1",
              topic: "Hàm số",
              detail:
                "Khảo sát hàm số, đồ thị, bài toán tương giao",
            },
            {
              id: "a01-p1-m2",
              topic: "Hình học không gian",
              detail:
                "Thể tích khối đa diện, góc và khoảng cách",
            },
          ],
        },
        {
          name: "Vật Lý",
          color:
            "bg-purple-100 text-purple-700 border-purple-200",
          tasks: [
            {
              id: "a01-p1-p1",
              topic: "Dao động cơ",
              detail:
                "Phương trình dao động, Năng lượng, Con lắc",
            },
            {
              id: "a01-p1-p2",
              topic: "Sóng cơ",
              detail:
                "Các đặc trưng sinh lý của âm, Giao thoa sóng",
            },
          ],
        },
        {
          name: "Tiếng Anh",
          color: "bg-pink-100 text-pink-700 border-pink-200",
          tasks: [
            {
              id: "a01-p1-e1",
              topic: "Ngữ pháp cốt lõi",
              detail:
                "12 thì, Câu bị động, Câu điều kiện, Mệnh đề quan hệ",
            },
            {
              id: "a01-p1-e2",
              topic: "Phát âm (Phonetics)",
              detail: "Quy tắc trọng âm, phát âm đuôi s/es, ed",
            },
            {
              id: "a01-p1-e3",
              topic: "Từ vựng SGK",
              detail:
                "Học theo Unit lớp 11-12, Collocations cơ bản",
            },
          ],
        },
      ],
    },
    // ... Additional phases for A01 (abbreviated for file size, logic remains same)
    {
      id: 2,
      title: "Luyện Đề Sớm",
      timeRange: "Tháng 9 - Tháng 12",
      goal: "Hoàn thiện kỹ năng giải đề",
      subjects: [
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "a01-p2-m1",
              topic: "Số phức",
              detail: "Cộng trừ nhân chia số phức",
            },
          ],
        },
      ],
    },
  ],
  D01: [
    {
      id: 1,
      title: "Xây Dựng Cảm Hứng",
      timeRange: "Tháng 5 - Tháng 8",
      goal: "Đọc tác phẩm Văn học & Gốc Toán Anh",
      subjects: [
        {
          name: "Ngữ Văn",
          color: "bg-rose-100 text-rose-700 border-rose-200",
          tasks: [
            {
              id: "d01-p1-v1",
              topic: "Thơ ca Cách mạng",
              detail: "Tây Tiến, Việt Bắc, Đất Nước",
            },
            {
              id: "d01-p1-v2",
              topic: "Kỹ năng viết đoạn NLXH",
              detail:
                "Cấu trúc đoạn văn 200 chữ, cách lấy dẫn chứng",
            },
          ],
        },
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "d01-p1-m1",
              topic: "Hàm số & Đồ thị",
              detail: "Nhận diện đồ thị, bài toán tiếp tuyến",
            },
            {
              id: "d01-p1-m2",
              topic: "Hình học",
              detail: "Thể tích khối đa diện, nón - trụ - cầu",
            },
          ],
        },
        {
          name: "Tiếng Anh",
          color: "bg-pink-100 text-pink-700 border-pink-200",
          tasks: [
            {
              id: "d01-p1-e1",
              topic: "Ngữ pháp căn bản",
              detail: "Thì, Câu bị động, Trực tiếp/Gián tiếp",
            },
            {
              id: "d01-p1-e2",
              topic: "Từ vựng theo chủ đề",
              detail: "Môi trường, Giáo dục, Công nghệ, Y tế",
            },
          ],
        },
      ],
    },
    // ... D01 phases
  ],
  B00: [
    {
      id: 1,
      title: "Nền Tảng KHTN",
      timeRange: "Tháng 5 - Tháng 8",
      goal: "Vững Toán Hóa & Lý thuyết Sinh học",
      subjects: [
        {
          name: "Sinh Học",
          color: "bg-green-100 text-green-700 border-green-200",
          tasks: [
            {
              id: "b00-p1-b1",
              topic: "Cơ chế di truyền",
              detail: "ADN, ARN, Protein, Phiên mã, Dịch mã",
            },
            {
              id: "b00-p1-b2",
              topic: "Biến dị",
              detail: "Đột biến gen, Đột biến NST",
            },
            {
              id: "b00-p1-b3",
              topic: "Quy luật Menđen",
              detail: "Phân ly, Phân ly độc lập",
            },
          ],
        },
        {
          name: "Hóa Học",
          color: "bg-teal-100 text-teal-700 border-teal-200",
          tasks: [
            {
              id: "b00-p1-c1",
              topic: "Este - Lipit",
              detail: "Đồng phân, Danh pháp, Tính chất hóa học",
            },
            {
              id: "b00-p1-c2",
              topic: "Cacbohidrat",
              detail: "Phản ứng tráng bạc, thủy phân",
            },
          ],
        },
        {
          name: "Toán",
          color: "bg-blue-100 text-blue-700 border-blue-200",
          tasks: [
            {
              id: "b00-p1-m1",
              topic: "Hàm số",
              detail: "Khảo sát và vẽ đồ thị hàm số",
            },
          ],
        },
      ],
    },
    // ... B00 phases
  ],
};

const defaultData = studyData["A00"];

export function StudyPath({
  setActiveTab,
}: {
  setActiveTab: (tab: any) => void;
}) {
  const [view, setView] = useState<
    "overview" | "math" | "chemistry" | "physics" | "english" | "biology" | "literature" | "history" | "geography" | "gdcd"
  >("overview");
  const [activeGroup, setActiveGroup] = useState("A00");
  const [completedTasks, setCompletedTasks] = useState<
    Set<string>
  >(new Set());
  const [expandedPhase, setExpandedPhase] = useState<
    number | null
  >(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const currentData =
    studyData[activeGroup as keyof typeof studyData] ||
    defaultData;

  if (view === "math") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <MathRoadmap />
      </div>
    );
  }

  if (view === "chemistry") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <ChemistryRoadmap />
      </div>
    );
  }

  if (view === "physics") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <PhysicsRoadmap />
      </div>
    );
  }

  if (view === "english") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <EnglishRoadmap />
      </div>
    );
  }

  if (view === "biology") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <BiologyRoadmap />
      </div>
    );
  }

  if (view === "literature") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <LiteratureRoadmap />
      </div>
    );
  }

  if (view === "history") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <HistoryRoadmap />
      </div>
    );
  }

  if (view === "geography") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <GeographyRoadmap />
      </div>
    );
  }

  if (view === "gdcd") {
    return (
      <div className="relative">
        <button
          onClick={() => setView("overview")}
          className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
        >
          <ArrowLeft size={20} /> Quay lại tổng quan
        </button>
        <GDCDRoadmap />
      </div>
    );
  }

  // Calculate Progress
  const totalTasks = currentData.reduce(
    (acc, phase) =>
      acc +
      phase.subjects.reduce(
        (sAcc, sub) => sAcc + sub.tasks.length,
        0,
      ),
    0,
  );
  const progress =
    totalTasks > 0
      ? Math.round((completedTasks.size / totalTasks) * 100)
      : 0;

  const toggleTask = (taskId: string) => {
    const newSet = new Set(completedTasks);
    if (newSet.has(taskId)) {
      newSet.delete(taskId);
    } else {
      newSet.add(taskId);
    }
    setCompletedTasks(newSet);
  };

  const togglePhase = (id: number) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* 2. Hero Section */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Column */}
              <div className="text-center lg:text-left space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-bold border border-blue-200 backdrop-blur-sm mb-2 hover:bg-blue-200 transition-colors">
                  <Trophy size={16} />
                  <span>🚀 Lộ trình ôn thi 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  Chinh Phục{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Đại Học
                  </span>{" "}
                  <br />
                  Trong Tầm Tay
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Kế hoạch học tập được cá nhân hóa cho từng
                  khối thi. Theo dõi tiến độ, hoàn thành nhiệm
                  vụ và đạt điểm số mơ ước.
                </p>
              </div>

              {/* Illustration Column (Hidden on Mobile/Tablet portrait if needed, strictly 2 cols on Desktop) */}
              <div className="hidden lg:block relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 backdrop-blur max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        📊 Tiến độ hôm nay
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Rất tốt! 🔥
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 border border-green-200">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200 backdrop-blur hover:bg-slate-100 transition-colors">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 border border-blue-200">
                        <BrainCircuit size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          Toán: Hàm số
                        </p>
                        <p className="text-xs text-slate-500">
                          30 câu trắc nghiệm
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200 backdrop-blur hover:bg-slate-100 transition-colors">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-500 border border-purple-200">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          Lý: Dao động cơ
                        </p>
                        <p className="text-xs text-slate-500">
                          Lý thuyết chương 1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 3. Subject Selection (Grid Responsive) */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Chọn Khối Thi
              </h2>
              <p className="text-slate-600">
                Lựa chọn tổ hợp môn thế mạnh của bạn
              </p>
            </div>

            {/* 
                   Grid Configuration:
                   - Mobile (<640px): 1 col (default) or 2 col
                   - Tablet (md: 768px): 2 cols
                   - Laptop (xl: 1280px): 4 cols
                   Note: Tailwind 'xl' is 1280px. 'lg' is 1024px.
                */}
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {["A00", "A01", "D01", "B00"].map((group) => (
                <div
                  key={group}
                  onClick={() => {
                    setActiveGroup(group);
                    setExpandedPhase(1);
                  }}
                  className={`
                                relative p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300
                                flex flex-col items-center text-center hover:-translate-y-2 group
                                ${activeGroup === group
                      ? "border-purple-500 bg-gradient-to-br from-purple-100 to-purple-50 shadow-xl shadow-purple-500/20 ring-2 ring-purple-500/50"
                      : "border-slate-200 bg-white backdrop-blur shadow-sm hover:shadow-lg hover:border-purple-400/50 hover:shadow-purple-500/20"
                    }
                            `}
                >
                  <div
                    className={`
                                w-14 h-14 rounded-full flex items-center justify-center mb-4 text-xl font-black transition-all
                                ${activeGroup === group ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50" : "bg-slate-100 text-slate-600 group-hover:bg-purple-100 group-hover:text-purple-600"}
                            `}
                  >
                    {group}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-1 transition-colors ${activeGroup === group ? "text-purple-600" : "text-slate-900"}`}
                  >
                    Khối {group}
                  </h3>
                  <p className={`text-sm transition-colors ${activeGroup === group ? "text-purple-500" : "text-slate-500"}`}>
                    {group === "A00"
                      ? "Toán - Lý - Hóa"
                      : group === "A01"
                        ? "Toán - Lý - Anh"
                        : group === "D01"
                          ? "Toán - Văn - Anh"
                          : "Toán - Hóa - Sinh"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Subject Detail Cards */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                🎓 Chi Tiết Từng Môn
              </h2>
              <p className="text-slate-600">
                Xem lộ trình chuyên sâu cho từng môn học
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              <div
                onClick={() => setView("math")}
                className="group bg-white backdrop-blur p-6 rounded-2xl border border-slate-200 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-500 rounded-xl flex items-center justify-center relative z-10 shadow-sm border border-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="4" y2="4" /><line x1="4" x2="20" y1="20" y2="20" /><path d="M4 4 12 12 4 20" /><path d="M20 4 12 12 20 20" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                     Môn Toán
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Hàm số, Hình học, Tích phân...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("chemistry")}
                className="group bg-white p-6 rounded-2xl border border-teal-100 hover:border-teal-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 text-teal-600 rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" /><path d="M8.5 2h7" /><path d="M7 16h10" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    Môn Hóa
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Hữu cơ, Vô cơ, Điện phân...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("physics")}
                className="group bg-white p-6 rounded-2xl border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center relative z-10 font-bold text-2xl shadow-sm">
                  ⚡
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    Môn Lý
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Dao động, Sóng, Điện xoay chiều...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("english")}
                className="group bg-white p-6 rounded-2xl border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-red-600 rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Môn Anh
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    12 thì, Ngữ pháp, Đọc hiểu...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("biology")}
                className="group bg-white p-6 rounded-2xl border border-rose-100 hover:border-rose-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center relative z-10 font-bold text-2xl shadow-sm">
                  🧬
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                    Môn Sinh
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Di truyền, Tiến hóa, Sinh thái...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("literature")}
                className="group bg-white p-6 rounded-2xl border border-violet-100 hover:border-violet-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-violet-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-600 text-violet-600 rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M8 7h6" /><path d="M8 11h8" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                    Ngữ Văn
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Đọc hiểu, Nghị luận, Tác phẩm...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("history")}
                className="group bg-white p-6 rounded-2xl border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 text-amber-600 rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14,2 14,8 20,8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    Lịch Sử
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Thế giới, Việt Nam, Chiến tranh...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("geography")}
                className="group bg-white p-6 rounded-2xl border border-teal-100 hover:border-teal-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-600 rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    Địa Lý
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Atlat, Vùng kinh tế, Biểu đồ...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div
                onClick={() => setView("gdcd")}
                className="group bg-white p-6 rounded-2xl border border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-lg cursor-pointer transition-all flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-green-600 text-orange-600 rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    GDCD
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Pháp luật, Quyền công dân...
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors relative z-10">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* 5. Timeline Section */}
          <div className="relative">
            {/* Center Line (Desktop Only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 rounded-full"></div>

            <div className="space-y-8 md:space-y-12">
              {currentData.map((phase, index) => {
                const isExpanded = expandedPhase === phase.id;
                const phaseTotal = phase.subjects.reduce(
                  (acc, s) => acc + s.tasks.length,
                  0,
                );
                const phaseCompleted = phase.subjects.reduce(
                  (acc, s) =>
                    acc +
                    s.tasks.filter((t) =>
                      completedTasks.has(t.id),
                    ).length,
                  0,
                );
                const phasePercent =
                  phaseTotal > 0
                    ? Math.round(
                      (phaseCompleted / phaseTotal) * 100,
                    )
                    : 0;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={phase.id}
                    className={`relative flex flex-col lg:flex-row items-center ${isLeft ? "" : "lg:flex-row-reverse"}`}
                  >
                    {/* Desktop Timeline Dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-blue-600 shadow-md items-center justify-center z-10 text-white font-bold text-sm">
                      {phase.id}
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full lg:w-1/2 ${isLeft ? "lg:pr-12" : "lg:pl-12"}`}
                    >
                      <div
                        className={`
                                            bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                                            ${isExpanded
                            ? "border-blue-300 shadow-xl shadow-blue-50 ring-1 ring-blue-100"
                            : "border-gray-200 shadow-sm hover:border-blue-200 hover:shadow-md"
                          }
                                        `}
                      >
                        {/* Card Header */}
                        <div
                          onClick={() => togglePhase(phase.id)}
                          className="p-6 cursor-pointer select-none relative"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <span className="inline-block px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide border border-blue-100 mb-2">
                                {phase.timeRange}
                              </span>
                              <h3 className="text-xl font-bold text-gray-900">
                                {phase.title}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">
                                {phase.goal}
                              </p>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isExpanded ? "bg-blue-50 rotate-180 text-blue-600" : "bg-gray-50 text-gray-400"}`}
                              >
                                <ChevronDown size={18} />
                              </div>
                              <span
                                className={`text-sm font-bold ${phasePercent === 100 ? "text-green-600" : "text-blue-600"}`}
                              >
                                {phasePercent}%
                              </span>
                            </div>
                          </div>

                          {/* Progress bar bottom */}
                          <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
                            <div
                              className="h-full bg-blue-500"
                              style={{
                                width: `${phasePercent}%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Expanded Tasks */}
                        <div
                          className={`transition-all duration-500 ease-in-out bg-gray-50/50 ${isExpanded ? "max-h-[2000px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}
                        >
                          <div className="p-6 space-y-6">
                            {phase.subjects.map(
                              (subject, subIndex) => (
                                <div key={subIndex}>
                                  <div className="flex items-center gap-2 mb-3">
                                    <span
                                      className={`px-2 py-0.5 rounded text-xs font-bold border ${subject.color}`}
                                    >
                                      {subject.name}
                                    </span>
                                    <div className="h-px bg-gray-200 flex-1"></div>
                                    {subject.name ===
                                      "Toán" && (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setView("math");
                                          }}
                                          className="text-xs font-bold text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                                        >
                                          Xem lộ trình{" "}
                                          <ArrowRight size={12} />
                                        </button>
                                      )}
                                    {subject.name ===
                                      "Hóa Học" && (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setView("chemistry");
                                          }}
                                          className="text-xs font-bold text-teal-600 hover:text-teal-800 underline flex items-center gap-1"
                                        >
                                          Xem lộ trình{" "}
                                          <ArrowRight size={12} />
                                        </button>
                                      )}
                                  </div>
                                  <div className="space-y-2">
                                    {subject.tasks.map(
                                      (task) => {
                                        const isDone =
                                          completedTasks.has(
                                            task.id,
                                          );
                                        return (
                                          <div
                                            key={task.id}
                                            onClick={() =>
                                              toggleTask(
                                                task.id,
                                              )
                                            }
                                            className={`
                                                                            flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors
                                                                            ${isDone ? "bg-white border border-gray-100" : "bg-white border border-transparent hover:border-blue-200 hover:shadow-sm"}
                                                                        `}
                                          >
                                            <div
                                              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${isDone ? "bg-green-500 border-green-500" : "border-gray-300"}`}
                                            >
                                              {isDone && (
                                                <CheckCircle2
                                                  size={14}
                                                  className="text-white"
                                                />
                                              )}
                                            </div>
                                            <div>
                                              <p
                                                className={`text-sm font-bold ${isDone ? "text-gray-500 line-through" : "text-gray-900"}`}
                                              >
                                                {task.topic}
                                              </p>
                                              <p
                                                className={`text-xs ${isDone ? "text-gray-400" : "text-gray-500"}`}
                                              >
                                                {task.detail}
                                              </p>
                                            </div>
                                          </div>
                                        );
                                      },
                                    )}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side (Desktop) */}
                    <div className="hidden lg:block w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}