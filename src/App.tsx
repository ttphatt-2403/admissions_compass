import { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { StatsSection } from './components/StatsSection';
import { DocumentLibrary } from './components/DocumentLibrary';
import { UniversitySearch } from './components/UniversitySearch';
import { ScoreCalculator } from './components/ScoreCalculator';
import { StudyPath } from './components/StudyPath';
import { NewsSection } from './components/NewsSection';
import { UniversityPromotions } from './components/UniversityPromotions';
import { TabType } from './types';

// --- Custom Hook: Intersection Observer for scroll animations ---
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    // Check if already visible in viewport
    const rect = ref.current.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isAlreadyVisible) {
      setIsInView(true);
      return;
    }

    setIsInView(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

// --- Custom Hook: Counter Animation ---
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || (isInView && !hasAnimated.current)) {
      hasAnimated.current = true;
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, startOnView]);

  return { count, ref };
}

// --- Animated Section Wrapper ---
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
import FPTLandingPage from './components/FPTLandingPage';
import VNULandingPage from './components/VNULandingPage';
import RMITLandingPage from './components/RMITLandingPage';
import HUSTLandingPage from './components/HUSTLandingPage';
import NEULandingPage from './components/NEULandingPage';
import UITLandingPage from './components/UITLandingPage';
import FTULandingPage from './components/FTULandingPage';
import HMULandingPage from './components/HMULandingPage';
import HNUELandingPage from './components/HNUELandingPage';
import VLULandingPage from './components/VLULandingPage';
import HSULandingPage from './components/HSULandingPage';
import UEFLandingPage from './components/UEFLandingPage';
import HUTECHLandingPage from './components/HUTECHLandingPage';
import GDULandingPage from './components/GDULandingPage';
import { CNITAILanding } from './components/CNITAILanding';
import { MarketingSalesLanding } from './components/MarketingSalesLanding';
import { LogisticsSupplyChainLanding } from './components/LogisticsSupplyChainLanding';
import { DesignCreativeLanding } from './components/DesignCreativeLanding';
import { EconomicsFinanceLanding } from './components/EconomicsFinanceLanding';
import { LanguagesTourismLanding } from './components/LanguagesTourismLanding';
import { B2BLanding } from './components/B2BLanding';
import { Footer } from './components/Footer';

import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import Chatbot from './components/Chatbot';
import Community from './components/Community';
import {
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  BookOpen,
  Calculator,
  Map,
  GraduationCap,
  Globe,
  Zap,
  Bell,
  ChevronRight,
  Flame,
  Play,
  Star,
  CheckCircle2
} from 'lucide-react';

import { MathRoadmap } from './components/MathRoadmap';
import { ChemistryRoadmap } from './components/ChemistryRoadmap';

const homeNews = [
  {
    id: '1',
    title: 'Bộ GD&ĐT công bố lịch thi THPT Quốc gia 2026',
    category: 'Chính sách',
    date: '2 ngày trước',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    title: 'Top 10 ngành học "khát" nhân lực & lương cao 2026',
    category: 'Xu hướng',
    date: '3 ngày trước',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    title: 'ĐH Bách Khoa HN tăng chỉ tiêu tuyển sinh ngành CNTT',
    category: 'Tuyển sinh',
    date: '5 ngày trước',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    title: 'Kinh nghiệm ôn thi môn Toán đạt 9+ từ thủ khoa',
    category: 'Góc học tập',
    date: '1 tuần trước',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    title: 'Săn học bổng du học toàn phần: Khó hay dễ?',
    category: 'Du học',
    date: '1 tuần trước',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400'
  }
];

const universities = [
  { id: 'fpt', name: 'Đại học FPT', logo: 'F', color: 'bg-orange-500', tab: 'fpt-landing' },
  { id: 'vnu', name: 'ĐHQG Hà Nội', logo: 'V', color: 'bg-blue-600', tab: 'vnu-landing' },
  { id: 'rmit', name: 'RMIT Vietnam', logo: 'R', color: 'bg-red-600', tab: 'rmit-landing' },
  { id: 'hust', name: 'ĐH Bách Khoa', logo: 'B', color: 'bg-red-700', tab: 'hust-landing' },
  { id: 'neu', name: 'KTQD (NEU)', logo: 'N', color: 'bg-blue-800', tab: 'neu-landing' },
  { id: 'uit', name: 'ĐH CNTT', logo: 'U', color: 'bg-cyan-600', tab: 'uit-landing' },
  { id: 'ftu', name: 'Ngoại Thương', logo: 'F', color: 'bg-red-800', tab: 'ftu-landing' },
  { id: 'hmu', name: 'ĐH Y Hà Nội', logo: 'Y', color: 'bg-sky-600', tab: 'hmu-landing' },
  { id: 'hnue', name: 'ĐH Sư Phạm', logo: 'S', color: 'bg-orange-500', tab: 'hnue-landing' },
  { id: 'vlu', name: 'ĐH Văn Lang', logo: 'V', color: 'bg-red-500', tab: 'vlu-landing' },
  { id: 'hsu', name: 'ĐH Hoa Sen', logo: 'H', color: 'bg-blue-700', tab: 'hsu-landing' },
  { id: 'uef', name: 'UEF', logo: 'U', color: 'bg-red-600', tab: 'uef-landing' },
  { id: 'hutech', name: 'HUTECH', logo: 'H', color: 'bg-blue-600', tab: 'hutech-landing' },
  { id: 'gdu', name: 'Gia Định', logo: 'G', color: 'bg-green-600', tab: 'gdu-landing' },
];

const documents = [
  { id: 1, title: 'Đề thi thử Toán THPTQG 2026 - Lần 1', downloads: '1.2k', tag: 'Mới' },
  { id: 2, title: 'Tổng hợp ngữ pháp Tiếng Anh trọng tâm', downloads: '856', tag: 'Hot' },
  { id: 3, title: 'Sơ đồ tư duy Lịch Sử 12 - Full chương trình', downloads: '2.1k', tag: 'VIP' },
  { id: 4, title: '400 câu trắc nghiệm Lý thuyết Hóa học', downloads: '543', tag: 'Mới' },
  { id: 5, title: 'Đề minh họa Vật Lý 2026 có lời giải', downloads: '920', tag: 'Hot' },
  { id: 6, title: 'Bí kíp khoanh bừa Sinh học xác suất cao', downloads: '3.5k', tag: 'Vui' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const otherUniversities = universities.slice(8);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // History management for browser back/forward buttons
  useEffect(() => {
    // Get current tab from URL or default to 'home'
    const urlParams = new URLSearchParams(window.location.search);
    const tabFromUrl = urlParams.get('tab') as TabType || 'home';

    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, []);

  useEffect(() => {
    // Push tab change to browser history
    const url = activeTab === 'home'
      ? window.location.pathname
      : `${window.location.pathname}?tab=${activeTab}`;
    window.history.pushState({ tab: activeTab }, '', url);
  }, [activeTab]);

  useEffect(() => {
    // Handle browser back/forward button
    const handlePopState = (event: PopStateEvent) => {
      const urlParams = new URLSearchParams(window.location.search);
      const tab = (urlParams.get('tab') as TabType) || 'home';
      setActiveTab(tab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Global CSS & Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-ticker { animation: ticker 25s linear infinite; }
        .animate-scroll-up { animation: scroll-up 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-gradient { animation: gradient-shift 3s ease infinite; background-size: 200% 200%; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-bounce-soft { animation: bounce-soft 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-scale-pulse { animation: scale-pulse 2s ease-in-out infinite; }
        
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        
        /* 3D Card Tilt Effect */
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .card-3d:hover {
          transform: rotateY(-5deg) rotateX(5deg) scale(1.02);
        }
        .card-3d-content {
          transform: translateZ(30px);
        }
        
        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .glass-dark {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Gradient Text Animation */
        .gradient-text-animated {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-shift 4s ease infinite;
        }
        
        /* Magnetic Button Effect */
        .magnetic-btn {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .magnetic-btn:hover {
          transform: scale(1.05);
        }
        .magnetic-btn:active {
          transform: scale(0.98);
        }
        
        /* Parallax layers */
        .parallax-slow { transform: translateY(calc(var(--scroll) * 0.3px)); }
        .parallax-medium { transform: translateY(calc(var(--scroll) * 0.5px)); }
        .parallax-fast { transform: translateY(calc(var(--scroll) * 0.7px)); }
        
        /* Shine effect on hover */
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255,255,255,0.3) 50%,
            transparent 100%
          );
          transform: rotate(30deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .shine-effect:hover::after {
          transform: rotate(30deg) translateX(100%);
        }
        
        /* Underline animation */
        .underline-animated {
          position: relative;
        }
        .underline-animated::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .underline-animated:hover::after {
          width: 100%;
        }
        
        /* Staggered children - no fade animation */
        .stagger-children > * {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .mask-image-gradient {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
        
        .hero-clip-path {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
        }
      `}</style>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Notification Bar */}
      <div className="bg-slate-900 text-white py-2 overflow-hidden relative z-50 border-b border-slate-800">
        <div className="whitespace-nowrap animate-ticker flex gap-16 text-sm font-medium items-center">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Sắp diễn ra: Kỳ thi thử THPT Quốc gia đợt 1 (Online)</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Mới cập nhật: 50+ đề thi thử môn Toán từ các trường chuyên</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Tin nóng: Phương án tuyển sinh 2026 có nhiều điểm mới</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span> Đăng ký tư vấn chọn ngành miễn phí ngay hôm nay!</span>
        </div>
      </div>

      <main className="relative overflow-hidden">
        {activeTab === 'home' && (
          <>
            {/* 1. PROFESSIONAL HERO SECTION (Split Layout) */}
            <div className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-slate-50">
              {/* Background Elements - Enhanced */}
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-50 via-purple-50/30 to-transparent rounded-bl-[100px] -z-10 hidden lg:block"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
              <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

              {/* Decorative geometric shapes */}
              <div className="absolute top-40 right-1/4 w-4 h-4 bg-blue-500 rounded-full animate-bounce-soft opacity-60"></div>
              <div className="absolute top-60 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-bounce-soft animation-delay-500 opacity-60"></div>
              <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-pink-500 rounded-full animate-bounce-soft animation-delay-700 opacity-60"></div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Content */}
                  <AnimatedSection className="text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-0 shadow-lg text-blue-600 font-bold text-xs uppercase tracking-wider">
                      <Sparkles size={14} className="animate-spin-slow" /> Nền tảng ôn thi số 1 Việt Nam
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                      Chinh Phục <br />
                      <span className="gradient-text-animated">
                        Cánh Cổng Đại Học
                      </span>
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                      Hệ sinh thái toàn diện giúp bạn tra cứu điểm chuẩn, ôn luyện đề thi và định hướng nghề nghiệp chính xác nhất. Đã có hơn <span className="font-bold text-slate-900">500,000+</span> học sinh tin dùng.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        onClick={() => setActiveTab('documents')}
                        className="magnetic-btn shine-effect px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 flex items-center justify-center gap-2 group animate-pulse-glow"
                      >
                        <BookOpen size={20} className="group-hover:rotate-12 transition-transform" />
                        Khám Phá Kho Đề
                      </button>
                      <button
                        onClick={() => setActiveTab('calculator')}
                        className="magnetic-btn px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-blue-300 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group hover:shadow-lg"
                      >
                        <Calculator size={20} className="group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                        Tính Điểm Xét Tuyển
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-md hover:scale-110 hover:z-10 transition-transform cursor-pointer" style={{ animationDelay: `${i * 100}ms` }}>
                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-md">+5k</div>
                      </div>
                      <div>
                        <div className="flex text-yellow-400 gap-0.5">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" className="animate-scale-pulse" style={{ animationDelay: `${i * 100}ms` }} />)}</div>
                        <span>Được yêu thích bởi 50k+ học sinh</span>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Right: Dynamic Visuals - Enhanced */}
                  <div className="relative hidden lg:block h-[600px]">
                    {/* Rotating decorative ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-dashed border-slate-200 rounded-full animate-spin-slow opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-dotted border-blue-200 rounded-full animate-spin-slow opacity-30" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>

                    {/* Main Image with Shape Mask */}
                    <div className="absolute top-10 right-0 w-[450px] h-[550px] bg-slate-200 rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl group card-3d">
                      <img
                        src="https://images.unsplash.com/photo-1666243035395-9b7853cecc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3R1ZGVudCUyMGhhcHB5JTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMGJyaWdodHxlbnwxfHx8fDE3NzE1MDg0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Student Success"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Stats overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                        <div className="text-white">
                          <div className="text-4xl font-black">98%</div>
                          <div className="text-sm font-medium opacity-90">Tỉ lệ đỗ NV1</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="glass-dark px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> Live
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Card 1: Notification - Enhanced */}
                    <div className="absolute top-20 left-0 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 w-64 animate-float">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-bold uppercase">Mới cập nhật</div>
                        <div className="text-sm font-bold text-slate-800">Đề thi thử Toán 2026</div>
                      </div>
                    </div>

                    {/* Floating Card 2: University - Enhanced */}
                    <div className="absolute bottom-32 -left-8 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 w-60 animate-float animation-delay-1000">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-200">F</div>
                      <div>
                        <div className="text-xs text-slate-400 font-bold uppercase">Đang tuyển sinh</div>
                        <div className="text-sm font-bold text-slate-800">Đại học FPT</div>
                      </div>
                    </div>

                    {/* Floating Card 3: New - Stats */}
                    <div className="absolute top-1/2 -left-4 glass p-3 rounded-xl shadow-xl animate-float animation-delay-500">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white">
                          <TrendingUp size={16} />
                        </div>
                        <div className="text-xs">
                          <div className="font-bold text-slate-800">+12.5%</div>
                          <div className="text-slate-400">điểm chuẩn</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. LIVE BENTO GRID - AUTO SCROLLING COMPONENTS */}
            <div className="py-24 bg-white relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection className="mb-12 flex items-end justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
                      <Zap size={12} /> Tính năng nổi bật
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Hệ Sinh Thái <span className="gradient-text-animated">Thông Minh</span></h2>
                    <p className="text-slate-500 mt-3 text-lg">Công cụ đắc lực hỗ trợ mọi giai đoạn của kỳ thi</p>
                  </div>
                  <div className="hidden md:flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors hover:scale-110"><ChevronRight className="rotate-180" size={20} /></button>
                    <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors hover:scale-110 shine-effect"><ChevronRight size={20} /></button>
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px] stagger-children">

                  {/* Card 1: DOCUMENT LIBRARY - With Auto-Scrolling List */}
                  <div
                    onClick={() => setActiveTab('documents')}
                    className="group relative md:col-span-2 md:row-span-2 rounded-[32px] overflow-hidden cursor-pointer bg-slate-900 text-white p-8 flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 card-3d"
                  >
                    {/* Background Pattern - Enhanced */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 animate-pulse-glow"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

                    {/* Shimmer effect overlay */}
                    <div className="absolute inset-0 animate-shimmer opacity-10" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)', backgroundSize: '200% 100%' }}></div>

                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50 group-hover:scale-110 group-hover:rotate-3 transition-all">
                          <BookOpen size={28} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-1 transition-transform">Kho Tài Liệu</h3>
                        <p className="text-slate-400">10,000+ đề thi chọn lọc</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all group-hover:rotate-45">
                        <ArrowRight size={20} />
                      </div>
                    </div>

                    {/* Auto-scrolling Document List */}
                    <div className="mt-auto relative h-[240px] overflow-hidden bg-white/5 rounded-2xl border border-white/10 p-4">
                      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80"></div>
                      <div className="space-y-3 animate-scroll-up hover:[animation-play-state:paused]">
                        {[...documents, ...documents, ...documents].map((doc, i) => (
                          <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 font-bold text-xs text-slate-400">PDF</div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-sm truncate text-slate-200">{doc.title}</h4>
                              <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                <span>{doc.downloads} tải về</span>
                                {doc.tag === 'Mới' && <span className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">Mới</span>}
                                {doc.tag === 'Hot' && <span className="text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">Hot</span>}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card 2: UNIVERSITIES - With Auto-Scrolling List */}
                  <div
                    onClick={() => setActiveTab('universities')}
                    className="group md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden cursor-pointer border border-slate-100 bg-white relative hover:shadow-xl hover:-translate-y-2 transition-all card-3d"
                  >
                    {/* Background gradient */}
                    <div className="group md:col-span-1 md:row-span-2 rounded-[32px] cursor-pointer border border-slate-100 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 hover:shadow-xl hover:-translate-y-2 transition-all"></div>

                    <div className="p-6 h-full flex flex-col relative z-10">
                      <div className="relative z-10 w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md">
                        <Globe size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">Tra Cứu Trường</h3>
                      <p className="text-slate-500 text-sm mb-6">Cập nhật điểm chuẩn 24/7</p>

                      {/* Real vertical scroll list with content */}
                      <div className="mt-auto relative h-[320px] overflow-hidden mask-image-gradient">
                        <div className="space-y-3 absolute w-full animate-scroll-up hover:[animation-play-state:paused]">
                          {[...universities, ...universities, ...universities].map((uni, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all group/item">
                              <div className={`w-10 h-10 rounded-full ${uni.color} text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0`}>
                                {uni.logo}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-slate-800 truncate group-hover/item:text-blue-600 transition-colors">{uni.name}</div>
                                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Đang nhận hồ sơ
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Calculator */}
                  <div
                    onClick={() => setActiveTab('calculator')}
                    className="group rounded-[32px] cursor-pointer border border-slate-200 bg-white p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-200/40"
                  >
                    <div className="flex justify-between items-start">
                      <div className="relative z-10 w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md">
                        <Calculator size={30} strokeWidth={2.5} />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                        <ArrowRight size={14} className="text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">Tính Điểm Xét Tuyển</h3>
                      <p className="text-slate-500 text-sm mt-1">Dự đoán khả năng đỗ chính xác 90%</p>
                    </div>
                  </div>

                  {/* Card 4: Study Path */}
                  <div
                    onClick={() => setActiveTab('studypath')}
                    className="group rounded-[32px] overflow-hidden cursor-pointer border border-slate-100 bg-white p-6 flex flex-col justify-between hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 hover:-translate-y-2 hover:shadow-xl transition-all card-3d"
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                        <Map size={30} />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                        <ArrowRight size={14} className="text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Lộ Trình Ôn Thi</h3>
                      <p className="text-slate-500 text-sm mt-1">Cá nhân hóa theo năng lực của bạn</p>
                    </div>
                  </div>

                  {/* Card 5: News Ticker (Horizontal Scroll inside Card) */}
                  <div
                    onClick={() => setActiveTab('news')}
                    className="group md:col-span-2 rounded-[32px] overflow-hidden cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white p-0 relative hover:shadow-2xl hover:-translate-y-2 transition-all"
                  >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-20" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)', backgroundSize: '200% 100%' }}></div>
                    <div className="h-full flex flex-col justify-center relative z-10">
                      <div className="px-6 pt-6 mb-2 flex items-center gap-2">
                        <div className="bg-white/20 backdrop-blur px-2 py-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                          <Zap size={12} className="text-yellow-300" fill="currentColor" /> Tin Nóng
                        </div>
                      </div>

                      {/* Horizontal Scrolling News Headlines */}
                      <div className="overflow-hidden w-full py-4">
                        <div className="flex animate-ticker hover:[animation-play-state:paused] w-max gap-8 px-6">
                          {homeNews.map((news, i) => (
                            <div key={i} className="flex flex-col w-64 shrink-0">
                              <h3 className="font-bold text-lg leading-snug line-clamp-2 mb-1">{news.title}</h3>
                              <span className="text-indigo-200 text-sm">{news.date}</span>
                            </div>
                          ))}
                          {/* Duplicate for loop */}
                          {homeNews.map((news, i) => (
                            <div key={`dup-${i}`} className="flex flex-col w-64 shrink-0">
                              <h3 className="font-bold text-lg leading-snug line-clamp-2 mb-1">{news.title}</h3>
                              <span className="text-indigo-200 text-sm">{news.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 3. TRENDING MAJORS (Professional Enhanced) */}
            <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute top-40 left-1/2 w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent opacity-20 pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <AnimatedSection className="mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold uppercase tracking-wider text-xs mb-4">
                        <TrendingUp size={14} className="animate-bounce-soft" /> Xu Hướng 2026
                      </span>
                      <h2 className="text-4xl font-black text-slate-900">
                        Ngành Học <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Tiềm Năng</span>
                      </h2>
                      <p className="text-slate-600 mt-3 text-lg">Các ngành học được tuyển dụng nhiều nhất và có lương cao 2026</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Majors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                  {[
                    {
                      name: 'CNTT & AI',
                      icon: <Zap size={28} />,
                      color: 'text-white',
                      bg: 'bg-gradient-to-br from-blue-500 to-blue-700',
                      glow: 'shadow-blue-400',
                      desc: 'Lập trình, AI, Cloud Computing',
                      jobs: '5,200+',
                      salary: '25-50M',
                      trend: 'Phát triển nhanh'
                    },
                    {
                      name: 'Marketing & Sales',
                      icon: <TrendingUp size={28} />,
                      color: 'text-white',
                      bg: 'bg-gradient-to-br from-orange-500 to-orange-700',
                      glow: 'shadow-orange-400',
                      desc: 'Digital Marketing, E-commerce',
                      jobs: '3,800+',
                      salary: '18-40M',
                      trend: 'Đang tăng'
                    },
                    {
                      name: 'Logistics & Supply Chain',
                      icon: <Map size={28} strokeWidth={2.5}/>,
                      color: 'text-white',
                      bg: 'bg-gradient-to-br from-yellow-500 to-yellow-500',
                      glow: 'shadow-yellow-400',
                      desc: 'Vận tải, Kho bãi, Nhập khẩu',
                      jobs: '2,900+',
                      salary: '20-45M',
                      trend: 'Ổn định'
                    },
                    {
                      name: 'Design & Creative',
                      icon: <Sparkles size={28} />,
                      color: 'text-white',
                      bg: 'bg-gradient-to-br from-purple-500 to-purple-700',
                      glow: 'shadow-purple-400',
                      desc: 'UI/UX, Graphic, Motion Design',
                      jobs: '2,100+',
                      salary: '15-35M',
                      trend: 'Cơ hội mới'
                    },
                    {
                      name: 'Kinh Tế & Tài Chính',
                      icon: <Flame size={28} />,
                      color: 'text-white',
                      bg: 'bg-gradient-to-br from-red-500 to-red-700',
                      glow: 'shadow-red-400',
                      desc: 'Kế toán, Tài chính, Ngân hàng',
                      jobs: '4,100+',
                      salary: '22-48M',
                      trend: 'Luôn cần'
                    },
                    {
                      name: 'Ngoại Ngữ & Du Lịch',
                      icon: <Globe size={28} />,
                      color: 'text-white',
                      bg: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
                      glow: 'shadow-indigo-400',
                      desc: 'Anh, Hàn, Nhật, Du lịch',
                      jobs: '1,800+',
                      salary: '16-38M',
                      trend: 'Phục hồi'
                    },
                  ].map((major, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (major.name === 'CNTT & AI') setActiveTab('cnit-landing');
                        if (major.name === 'Marketing & Sales') setActiveTab('marketing-sales-landing');
                        if (major.name === 'Logistics & Supply Chain') setActiveTab('logistics-supply-chain-landing');
                        if (major.name === 'Design & Creative') setActiveTab('design-creative-landing');
                        if (major.name === 'Kinh Tế & Tài Chính') setActiveTab('economics-finance-landing');
                        if (major.name === 'Ngoại Ngữ & Du Lịch') setActiveTab('languages-tourism-landing');
                      }}
                      className="group cursor-pointer"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-slate-200 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 group-hover:shadow-blue-500/20 overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>

                        {/* Gradient border glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all -z-10"></div>

                        <div className="relative z-10">
                          {/* Trending Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 text-xs font-bold mb-4">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                            {major.trend}
                          </div>

                          {/* Icon */}
                          <div className={`w-20 h-20 rounded-2xl ${major.bg} ${major.color} flex items-center justify-center transition-all group-hover:scale-125 group-hover:rotate-6 shadow-lg ${major.glow} mb-4`}>
                            {major.icon}
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                            {major.name}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-sm mb-6 leading-relaxed h-10">
                            {major.desc}
                          </p>

                          {/* Stats Row */}
                          <div className="grid grid-cols-2 gap-3 pt-6 border-t-2 border-slate-200">
                            <div>
                              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                                Vị trí tuyển
                              </div>
                              <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {major.jobs}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                                Lương khởi điểm
                              </div>
                              <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                                {major.salary}đ
                              </div>
                            </div>
                          </div>

                          {/* CTA */}
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              if (major.name === 'CNIT & AI') setActiveTab('cnit-landing');
                              if (major.name === 'Marketing & Sales') setActiveTab('marketing-sales-landing');
                              if (major.name === 'Logistics & Supply Chain') setActiveTab('logistics-supply-chain-landing');
                              if (major.name === 'Design & Creative') setActiveTab('design-creative-landing');
                              if (major.name === 'Kinh Tế & Tài Chính') setActiveTab('economics-finance-landing');
                              if (major.name === 'Ngoại Ngữ & Du Lịch') setActiveTab('languages-tourism-landing');
                            }}
                            className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 cursor-pointer hover:text-purple-600 transition-colors"
                          >
                            Khám phá ngành <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                  <p className="text-slate-600 mb-6">Chưa chọn được ngành? Hãy thử bài test định hướng ngành học!</p>
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 group flex items-center gap-2 mx-auto">
                    Bắt đầu kiểm tra
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4. TOP PARTNERS SECTION (Professional) */}
            <AnimatedSection className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">
                    <Sparkles size={14} /> CÁC TRƯỜNG HÀNG ĐẦU
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4">
                    Đối Tác Tuyển Sinh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Hàng Đầu</span>
                  </h2>
                  <p className="text-slate-600 text-lg max-w-2xl">Liên kết với 200+ trường đại học uy tín, giúp học sinh tìm đúng nơi phù hợp với giấc mơ</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {[
                    { value: '200+', label: 'Trường đại học' },
                    { value: '50K+', label: 'Sinh viên hỗ trợ' },
                    { value: '95%', label: 'Đạt nguyện vọng' },
                    { value: '24/7', label: 'Hỗ trợ tư vấn' }
                  ].map((stat, i) => (
                    <div key={i} className="group p-4 rounded-2xl bg-white/70 backdrop-blur border border-slate-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:-translate-y-1 hover:scale-105">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{stat.value}</div>
                      <div className="text-xs font-semibold text-slate-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Featured Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {universities.slice(0, 8).map((uni, idx) => (
                    <div
                      key={uni.id}
                      onClick={() => setActiveTab(uni.tab as TabType)}
                      className="group cursor-pointer"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="relative p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-transparent transition-all duration-300 h-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 group-hover:shadow-blue-500/30">
                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>

                        {/* Gradient border glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-lg group-hover:animate-pulse transition-opacity -z-10"></div>

                        <div className="relative z-10">
                          {/* Logo */}
                          <div className={`w-20 h-20 ${uni.color} rounded-2xl text-white flex items-center justify-center font-black text-3xl shadow-lg group-hover:scale-125 group-hover:rotate-6 transition-all duration-300`}>
                            {uni.logo}
                          </div>

                          {/* Content */}
                          <h3 className="font-bold text-lg mt-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                            {uni.name}
                          </h3>

                          {/* Stats */}
                          <div className="mt-3 pt-3 border-t border-slate-200">
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-600">Xếp hạng</span>
                              <span className="font-bold text-slate-900">Top {Math.floor(Math.random() * 20) + 1}</span>
                            </div>
                          </div>

                          {/* Hover CTA */}
                          <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            Khám phá <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-slate-200 hover:border-blue-400/50 transition-all">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">Xem tất cả 200+ trường đại học</h3>
                    <p className="text-slate-600 text-sm mt-1">Tìm kiếm trường phù hợp với điểm số và mục tiêu của bạn</p>
                  </div>
                  <button onClick={() => setActiveTab('universities')} className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 group flex items-center gap-2">
                    Khám phá ngay
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* 4.5. CAROUSEL: MORE UNIVERSITIES */}
            <AnimatedSection className="py-24 bg-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4">
                    <Globe size={14} /> KHÁM PHÁ THÊM
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">
                    Các Trường <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Khác</span>
                  </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                  {/* Carousel Wrapper */}
                  <div className="overflow-hidden rounded-3xl">
                    <div
                      className="flex transition-transform duration-700 ease-out"
                      style={{ transform: `translateX(-${carouselIndex * (100 / 2)}%)` }}
                    >
                      {otherUniversities.map((uni, idx) => (
                        <div key={uni.id} className="w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
                          <div
                            onClick={() => setActiveTab(uni.tab as TabType)}
                            className="group/card cursor-pointer"
                          >
                            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 hover:border-purple-400/50 transition-all duration-300 h-full shadow-lg hover:shadow-2xl transform hover:-translate-y-3 group-hover/card:shadow-purple-500/30">
                              {/* Gradient overlay on hover */}
                              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover/card:from-purple-600/10 group-hover/card:via-purple-600/5 group-hover/card:to-pink-600/10 transition-all"></div>

                              <div className="relative z-10">
                                {/* Logo */}
                                <div className={`w-20 h-20 ${uni.color} rounded-2xl text-white flex items-center justify-center font-black text-3xl shadow-lg group-hover/card:scale-125 group-hover/card:rotate-6 transition-all duration-300`}>
                                  {uni.logo}
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-lg mt-4 text-slate-900 group-hover/card:text-purple-600 transition-colors">
                                  {uni.name}
                                </h3>

                                {/* CTA */}
                                <div className="mt-4 flex items-center gap-2 text-purple-600 font-bold text-sm opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-2 group-hover/card:translate-y-0">
                                  Tìm hiểu <ArrowRight size={14} className="group-hover/card:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:border-purple-500 hover:bg-purple-50 flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <span className="text-slate-600 text-xl">‹</span>
                  </button>
                  <button
                    onClick={() => setCarouselIndex(Math.min(otherUniversities.length - 1, carouselIndex + 1))}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:border-purple-500 hover:bg-purple-50 flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <span className="text-slate-600 text-xl">›</span>
                  </button>

                  {/* Indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {otherUniversities.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`h-2 rounded-full transition-all ${carouselIndex === idx
                          ? 'bg-purple-600 w-8'
                          : 'bg-slate-300 hover:bg-slate-400 w-2'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* 5. VIDEO REVIEWS (Dark Professional) */}
            <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              {/* Ambient Light - Enhanced */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse-glow"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] animate-pulse-glow animation-delay-1000"></div>

              <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold mb-4 backdrop-blur">
                      <Play size={12} fill="currentColor" /> Video Reviews
                    </div>
                    <h2 className="text-4xl font-black">Góc Review <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Thực Tế</span></h2>
                    <p className="text-slate-400 mt-4 text-lg">Trải nghiệm thật từ sinh viên các trường đại học</p>
                  </div>
                  <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-full hover:bg-white hover:text-slate-900 transition-all font-bold shine-effect group">
                    Xem tất cả video <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
                  {[
                    { title: 'Review Đại học FPT: Học phí đắt xắt ra miếng?', views: '125K views', time: '10:05', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600' },
                    { title: 'Vlog: Một ngày làm sinh viên RMIT có gì vui?', views: '89K views', time: '15:30', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600' },
                    { title: 'Bí kíp ôn thi ĐGNL đạt 900+ trong 3 tháng', views: '200K views', time: '08:45', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600' },
                  ].map((video, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative rounded-2xl overflow-hidden aspect-video mb-5 border border-slate-700 group-hover:border-blue-500 transition-all shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                        <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-colors flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-125 group-hover:bg-white/20 transition-all shadow-xl">
                            <Play size={30} fill="white" className="ml-1 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 glass-dark px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> {video.time}
                        </div>
                      </div>
                      <h3 className="font-bold text-xl leading-snug group-hover:text-blue-400 transition-colors mb-2">{video.title}</h3>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <span>{video.views}</span> • <span>2 ngày trước</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <UniversityPromotions setActiveTab={setActiveTab} />
            <TestimonialsSection />
            <FAQSection />
          </>
        )}

        {activeTab === 'documents' && <DocumentLibrary />}
        {activeTab === 'universities' && <UniversitySearch />}
        {activeTab === 'calculator' && <ScoreCalculator />}
        {activeTab === 'studypath' && <StudyPath setActiveTab={setActiveTab} />}
        {activeTab === 'news' && <NewsSection />}
        {activeTab === 'math-roadmap' && <MathRoadmap />}
        {activeTab === 'chemistry-roadmap' && <ChemistryRoadmap />}
        {activeTab === 'chatbot' && <Chatbot />}
        {activeTab === 'community' && <Community />}
        {activeTab === 'fpt-landing' && <FPTLandingPage />}
        {activeTab === 'vnu-landing' && <VNULandingPage />}
        {activeTab === 'rmit-landing' && <RMITLandingPage />}
        {activeTab === 'hust-landing' && <HUSTLandingPage />}
        {activeTab === 'neu-landing' && <NEULandingPage />}
        {activeTab === 'uit-landing' && <UITLandingPage />}
        {activeTab === 'ftu-landing' && <FTULandingPage />}
        {activeTab === 'hmu-landing' && <HMULandingPage />}
        {activeTab === 'hnue-landing' && <HNUELandingPage />}
        {activeTab === 'vlu-landing' && <VLULandingPage />}
        {activeTab === 'hsu-landing' && <HSULandingPage />}
        {activeTab === 'uef-landing' && <UEFLandingPage />}
        {activeTab === 'hutech-landing' && <HUTECHLandingPage />}
        {activeTab === 'gdu-landing' && <GDULandingPage />}
        {activeTab === 'cnit-landing' && <CNITAILanding />}
        {activeTab === 'marketing-sales-landing' && <MarketingSalesLanding />}
        {activeTab === 'logistics-supply-chain-landing' && <LogisticsSupplyChainLanding />}
        {activeTab === 'design-creative-landing' && <DesignCreativeLanding />}
        {activeTab === 'economics-finance-landing' && <EconomicsFinanceLanding />}
        {activeTab === 'languages-tourism-landing' && <LanguagesTourismLanding />}
        {activeTab === 'b2b-landing' && <B2BLanding />}
      </main>

      {activeTab !== 'chatbot' && <Footer />}
    </div>
  );
}