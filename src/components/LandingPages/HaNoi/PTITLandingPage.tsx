import React, { useState, useEffect, useRef } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  Menu, X, ChevronRight, Cpu,
  Code, Users, Trophy, BookOpen, MapPin,
  ArrowRight, Zap, Network, Radio, Briefcase, Building, Server, Globe, Facebook, Youtube
} from 'lucide-react';

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useCounter(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

// ─── Animated Counter Card ───────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  rawValue: string;
  numericTarget: number;
  suffix: string;
  icon: React.ElementType;
  active: boolean;
}

function StatCard({ label, numericTarget, suffix, icon: Icon, active }: StatCardProps) {
  const count = useCounter(numericTarget, 1800, active);
  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20 hover:-translate-y-1 transition-all group">
      <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
        <Icon size={26} />
      </div>
      <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl md:text-3xl font-black text-white">
        {count.toLocaleString('vi-VN')}{suffix}
      </div>
    </div>
  );
}

// ─── Reveal wrapper ──────────────────────────────────────────────────────────

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PTITLandingPage() {
  usePageAnalytics('PTIT', 'Học viện Công nghệ Bưu chính Viễn thông');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { ref: statsRef, visible: statsVisible } = useScrollReveal(0.2);

  const programs = [
    {
      id: 'it',
      category: 'CNTT',
      title: 'CNTT, Khoa học Máy tính & AI',
      desc: 'Công nghệ thông tin, Khoa học máy tính, Trí tuệ nhân tạo, An toàn thông tin.',
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MzQ4MDYyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Code,
      score: '25–26.5+',
      color: 'from-blue-900/80',
    },
    {
      id: 'telecom',
      category: 'Điện tử - Viễn thông',
      title: 'Kỹ thuật Điện tử Viễn thông',
      desc: 'Kỹ thuật điện tử viễn thông, Công nghệ kỹ thuật điện - điện tử.',
      image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzczNDg2NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Radio,
      score: '24–25.5+',
      color: 'from-purple-900/80',
    },
    {
      id: 'media',
      category: 'Truyền thông số',
      title: 'Truyền thông Đa phương tiện',
      desc: 'Truyền thông đa phương tiện, Quan hệ công chúng, Marketing số.',
      image: 'https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwbWVkaWF8ZW58MXx8fHwxNzczNDg2NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Globe,
      score: '24–26+',
      color: 'from-red-900/80',
    },
  ];

  const stats = [
    { label: 'Năm thành lập', rawValue: '1997', numericTarget: 1997, suffix: '', icon: Trophy },
    { label: 'Cơ quan chủ quản', rawValue: 'Bộ TT&TT', numericTarget: 0, suffix: '', icon: Building },
    { label: 'Sinh viên', rawValue: '20,000+', numericTarget: 20000, suffix: '+', icon: Users },
    { label: 'Cơ sở đào tạo', rawValue: '2', numericTarget: 2, suffix: ' CS', icon: MapPin },
  ];

  const facilities = [
    { title: 'Phòng lab AI và Data', icon: Cpu },
    { title: 'Trung tâm nghiên cứu vi mạch', icon: Server },
    { title: 'Phòng thực hành viễn thông', icon: Network },
    { title: 'Thư viện công nghệ số', icon: BookOpen },
  ];

  const admissionMethods = [
    { title: 'Xét điểm thi tốt nghiệp THPT', desc: 'Phương thức truyền thống dựa trên kết quả kỳ thi THPT Quốc gia.' },
    { title: 'Xét tuyển kết hợp chứng chỉ quốc tế', desc: 'Kết hợp chứng chỉ IELTS/TOEFL với kết quả học tập THPT.' },
    { title: 'Xét tuyển tài năng', desc: 'Dành cho thí sinh đạt giải học sinh giỏi cấp tỉnh, quốc gia.' },
    { title: 'Xét học bạ (một số chương trình)', desc: 'Áp dụng cho một số chương trình liên kết hoặc định hướng ứng dụng.' },
  ];

  const scoreRows = [
    { name: 'Công nghệ thông tin', score: '26+' },
    { name: 'Khoa học máy tính & AI', score: '26+' },
    { name: 'An toàn thông tin', score: '25+' },
    { name: 'Kỹ thuật Điện tử Viễn thông', score: '24.5+' },
    { name: 'Truyền thông đa phương tiện', score: '24+' },
    { name: 'Marketing số', score: '24+' },
  ];

  const navItems = ['Tổng quan', 'Tuyển sinh', 'Ngành học', 'Cơ sở vật chất', 'Việc làm'];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes network-drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(12px, -8px) rotate(120deg); }
          66% { transform: translate(-8px, 12px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-network { animation: network-drift 20s ease-in-out infinite; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(229,27,36,0.18); border-color: rgba(229,27,36,0.5); }
        .program-card:hover .program-img { transform: scale(1.08); }
        .program-img { transition: transform 0.7s ease; }
      `}</style>

      {/* ── Top Bar ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#E51B24] text-white py-1.5 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="cursor-pointer hover:text-white/75 transition-colors">Sinh viên</span>
            <span className="cursor-pointer hover:text-white/75 transition-colors">Cán bộ Giảng viên</span>
            <span className="cursor-pointer hover:text-white/75 transition-colors">Cựu sinh viên</span>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center gap-1 cursor-pointer hover:text-white/75 transition-colors">
              <Globe size={12} /> EN
            </span>
            <span className="cursor-pointer hover:text-white/75 transition-colors">Liên hệ</span>
          </div>
        </div>
      </div>

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E51B24] rounded-full flex items-center justify-center text-white font-black text-sm shadow-md ring-2 ring-red-200">
                PTIT
              </div>
              <div className="flex flex-col">
                <span className="text-[#E51B24] font-bold text-base leading-tight">HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</span>
                <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider mt-0.5">
                  Posts and Telecommunications Institute of Technology
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-slate-700 hover:text-[#E51B24] font-semibold transition-colors text-sm tracking-wide"
                >
                  {item}
                </a>
              ))}
              <div className="w-px h-6 bg-slate-200" />
              <button
                onClick={() => document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#E51B24] text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 hover:-translate-y-0.5"
              >
                Nhận tư vấn
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl z-50">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-red-50 hover:text-[#E51B24] border-b border-slate-50 last:border-0"
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 pb-4">
                <button
                  onClick={() => {
                    document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#E51B24] text-white py-3 rounded-xl font-bold"
                >
                  Nhận tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-slate-950 overflow-hidden">

        {/* Tech network SVG background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="heroGlow" cx="70%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#E51B24" stopOpacity="0.12" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGlow)" />

          {/* Grid lines */}
          <g stroke="#334155" strokeWidth="0.5" opacity="0.4">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={`${i * 5}%`} x2="100%" y2={`${i * 5}%`} />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v${i}`} x1={`${i * 3.33}%`} y1="0" x2={`${i * 3.33}%`} y2="100%" />
            ))}
          </g>

          {/* Network nodes */}
          <g className="animate-network" style={{ transformOrigin: '65% 45%' }}>
            {[
              [65, 20], [80, 35], [72, 50], [88, 22], [60, 38], [78, 55], [90, 45], [68, 65],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={`${cx}%`} cy={`${cy}%`} r="3" fill="#E51B24" opacity="0.7" />
                <circle cx={`${cx}%`} cy={`${cy}%`} r="8" fill="none" stroke="#E51B24" strokeWidth="0.5" opacity="0.3" />
              </g>
            ))}
            {/* Connecting lines */}
            {[
              [65, 20, 80, 35], [80, 35, 72, 50], [80, 35, 88, 22], [65, 20, 60, 38],
              [72, 50, 78, 55], [88, 22, 90, 45], [78, 55, 68, 65], [60, 38, 72, 50],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={`${x1}%`} y1={`${y1}%`}
                x2={`${x2}%`} y2={`${y2}%`}
                stroke="#E51B24" strokeWidth="0.8" opacity="0.25"
              />
            ))}
          </g>

          {/* Pulsing rings */}
          <circle cx="75%" cy="30%" r="120" fill="none" stroke="#E51B24" strokeWidth="1" opacity="0.08"
            style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
          <circle cx="75%" cy="30%" r="200" fill="none" stroke="#E51B24" strokeWidth="0.5" opacity="0.05"
            style={{ animation: 'pulse-glow 4s ease-in-out infinite 1s' }} />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left – Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/70 border border-red-800/60 text-red-300 font-bold text-xs uppercase tracking-wider mb-7"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                <Zap size={13} fill="currentColor" />
                Trực thuộc Bộ Thông tin &amp; Truyền thông
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-7">
                Trung tâm đào tạo
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E51B24] to-red-400">
                  công nghệ hàng đầu
                </span>
                <br />
                Việt Nam
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                Nơi đào tạo thế hệ kỹ sư công nghệ, chuyên gia an toàn thông tin, trí tuệ nhân tạo và truyền thông số. Lựa chọn hàng đầu của học sinh yêu thích lĩnh vực công nghệ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('nganh-hoc')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#E51B24] text-white rounded-xl font-bold text-base hover:bg-red-600 transition-all shadow-xl shadow-red-900/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Khám phá ngành học
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent text-white border-2 border-slate-600 rounded-xl font-bold text-base hover:border-red-500 hover:text-red-300 transition-all flex items-center justify-center gap-2"
                >
                  Nhận tư vấn tuyển sinh
                </button>
              </div>
            </div>

            {/* Right – Image with floating badges */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-700 z-10">
                <img
                  src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNDU2MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="PTIT Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating badge – Top 5 */}
              <div className="absolute -bottom-5 -left-5 bg-slate-800 border border-slate-600 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20 animate-float">
                <div className="w-11 h-11 bg-red-950 border border-red-700 rounded-xl flex items-center justify-center text-red-400">
                  <Trophy size={22} />
                </div>
                <div>
                  <div className="text-xl font-black text-white">Top 5</div>
                  <div className="text-xs font-medium text-slate-400">ĐH Công nghệ tại VN</div>
                </div>
              </div>

              {/* Floating badge – VNPT */}
              <div
                className="absolute -top-6 -right-6 bg-slate-800 border border-slate-600 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20 animate-float-slow"
                style={{ animationDelay: '2s' }}
              >
                <div className="w-11 h-11 bg-blue-950 border border-blue-700 rounded-xl flex items-center justify-center text-blue-400">
                  <Building size={22} />
                </div>
                <div>
                  <div className="text-xl font-black text-white">VNPT</div>
                  <div className="text-xs font-medium text-slate-400">Đối tác chiến lược</div>
                </div>
              </div>

              {/* Floating badge – 20,000+ */}
              <div
                className="absolute top-1/2 -right-8 bg-slate-800 border border-red-800/50 px-4 py-3 rounded-2xl shadow-2xl z-20 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-red-400 text-xs font-bold uppercase tracking-wider">Sinh viên</div>
                <div className="text-2xl font-black text-white">20,000+</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats / Overview ─────────────────────────────────────────────────── */}
      <section id="tong-quan" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-12">
            <span className="text-red-400 font-bold uppercase tracking-wider text-sm mb-2 block">Tổng quan</span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Học Viện Trong Con Số</h2>
            <div className="w-16 h-1 bg-[#E51B24] mx-auto mt-5 rounded-full" />
          </Reveal>

          {/* Stats grid with counters */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {stats.map((stat, idx) =>
              stat.numericTarget > 0 ? (
                <Reveal key={idx} delay={idx * 100}>
                  <StatCard
                    label={stat.label}
                    rawValue={stat.rawValue}
                    numericTarget={stat.numericTarget}
                    suffix={stat.suffix}
                    icon={stat.icon}
                    active={statsVisible}
                  />
                </Reveal>
              ) : (
                /* Bộ TT&TT – no numeric counter */
                <Reveal key={idx} delay={idx * 100}>
                  <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20 hover:-translate-y-1 transition-all group card-hover">
                    <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <stat.icon size={26} />
                    </div>
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-xl font-black text-white leading-snug">{stat.rawValue}</div>
                  </div>
                </Reveal>
              )
            )}
          </div>

          {/* Description */}
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-slate-300 leading-relaxed">
                PTIT là một trong những trường đại học hàng đầu Việt Nam trong lĩnh vực công nghệ thông tin, viễn thông và truyền thông đa phương tiện. Với chương trình đào tạo hiện đại, gắn liền với doanh nghiệp công nghệ lớn như Viettel, VNPT, FPT.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────────────────────── */}
      <section id="nganh-hoc" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-red-400 font-bold uppercase tracking-wider text-sm mb-2 block">Chương trình đào tạo</span>
            <h2 className="text-4xl font-black text-white">Các Ngành Đào Tạo Nổi Bật</h2>
            <div className="w-20 h-1 bg-[#E51B24] mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div className="program-card bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 card-hover cursor-pointer h-full flex flex-col">
                  {/* Image overlay */}
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="program-img w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} via-slate-900/50 to-transparent`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#E51B24]/90 backdrop-blur rounded-full text-xs font-black text-white uppercase tracking-wide">
                        {prog.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-11 h-11 bg-slate-900/60 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                      <prog.icon size={22} />
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-black text-white leading-tight">{prog.title}</h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-1">{prog.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div>
                        <span className="block text-xs text-slate-500 font-semibold uppercase mb-1">Điểm chuẩn tham khảo</span>
                        <span className="font-black text-[#E51B24] text-xl">{prog.score}</span>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E51B24] hover:text-white transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admissions ───────────────────────────────────────────────────────── */}
      <section id="tuyen-sinh" className="py-24 bg-red-950 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
        </div>

        {/* Glowing orb */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E51B24]/20 blur-[100px] pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="text-red-300 font-bold uppercase tracking-wider text-sm mb-2 block">Tuyển sinh 2025</span>
            <h2 className="text-4xl font-black text-white">Thông Tin Tuyển Sinh</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mt-6 rounded-full" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Methods */}
            <Reveal delay={0}>
              <h3 className="text-2xl font-black text-white mb-7">Phương Thức Tuyển Sinh</h3>
              <div className="space-y-4">
                {admissionMethods.map((method, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 font-black text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{method.title}</h4>
                      <p className="text-red-200/70 text-sm">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-white/10 border border-white/20 rounded-2xl flex items-center gap-4">
                <BookOpen size={24} className="text-white shrink-0" />
                <div>
                  <div className="text-red-200 text-sm font-semibold">Tổ hợp môn phổ biến</div>
                  <div className="text-xl font-black text-white">A00, A01, D01</div>
                </div>
              </div>
            </Reveal>

            {/* Scores table */}
            <Reveal delay={150}>
              <h3 className="text-2xl font-black text-white mb-7">Điểm Chuẩn Tham Khảo</h3>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-4 text-red-200 text-xs font-black uppercase tracking-wider">Ngành Đào Tạo</th>
                      <th className="px-6 py-4 text-red-200 text-xs font-black uppercase tracking-wider text-right">Điểm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {scoreRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-white font-medium text-sm">{row.name}</td>
                        <td className="px-6 py-4 text-right font-black text-[#E51B24] text-base">{row.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── Facilities & Careers ─────────────────────────────────────────────── */}
      <section id="co-so-vat-chat" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Facilities */}
            <Reveal>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Cơ Sở Vật Chất Hiện Đại</h2>
              <p className="text-slate-600 mb-8 text-base leading-relaxed">
                Hệ thống phòng thí nghiệm và trung tâm nghiên cứu được đầu tư bài bản, đáp ứng nhu cầu thực hành và nghiên cứu chuyên sâu của sinh viên và giảng viên.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-200 hover:bg-red-50 transition-colors group card-hover"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#E51B24] shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      <fac.icon size={24} />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{fac.title}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Careers */}
            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute inset-0 bg-slate-900 rounded-[32px] translate-x-3 translate-y-3" />
                <div className="relative bg-[#E51B24] rounded-[32px] p-8 md:p-10 text-white">
                  <h3 id="viec-lam" className="text-2xl font-black mb-7 flex items-center gap-3 text-white">
                    <Briefcase size={26} />
                    Cơ Hội Nghề Nghiệp
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-red-200 text-xs font-black uppercase tracking-wider mb-4">Doanh nghiệp tuyển dụng</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Viettel', 'VNPT', 'FPT Software', 'Samsung', 'MobiFone', 'Startup Công nghệ'].map((company, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/15 border border-white/25 rounded-full text-sm font-semibold text-white hover:bg-white/25 transition-colors cursor-default"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-red-200 text-xs font-black uppercase tracking-wider mb-4">Vị trí phổ biến</h4>
                    <ul className="space-y-3">
                      {[
                        'Software Engineer',
                        'Cyber Security Engineer',
                        'Data Analyst / Data Scientist',
                        'AI Engineer',
                        'Telecommunication Engineer',
                      ].map((pos, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                          <span className="font-medium">{pos}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── CTA / Contact Form ────────────────────────────────────────────────── */}
      <section id="tu-van" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-red-950/50 blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-5">
              Bắt đầu hành trình trở thành
              <br />
              <span className="text-[#E51B24]">kỹ sư công nghệ tương lai</span> tại PTIT
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Để lại thông tin để được đội ngũ tuyển sinh của học viện tư vấn chi tiết về ngành học, lộ trình và cơ hội học bổng.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <form className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl text-left">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Nhập họ tên của bạn"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E51B24] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E51B24] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Ngành quan tâm</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#E51B24] focus:border-transparent transition-all">
                    <option>Công nghệ thông tin</option>
                    <option>Kỹ thuật Viễn thông</option>
                    <option>Truyền thông Đa phương tiện</option>
                    <option>An toàn thông tin</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="w-full py-4 bg-[#E51B24] text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-all shadow-lg shadow-red-900/40 hover:-translate-y-0.5 mt-2"
                >
                  Đăng ký nhận tư vấn
                </button>
              </div>
            </form>
          </Reveal>

          {/* Quick contact */}
          <Reveal delay={250} className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-center">
            <a
              href="tel:02432521513"
              className="flex items-center justify-center gap-2 text-slate-300 hover:text-red-400 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              (024) 3252 1513
            </a>
            <a
              href="mailto:tuyensinh@ptit.edu.vn"
              className="flex items-center justify-center gap-2 text-slate-300 hover:text-red-400 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              tuyensinh@ptit.edu.vn
            </a>
            <div className="flex items-center justify-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#E51B24] hover:text-white hover:border-[#E51B24] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#E51B24] hover:text-white hover:border-[#E51B24] transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
