import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  CircleDot,
  GraduationCap,
  HardHat,
  Landmark,
  Lightbulb,
  MapPin,
  Menu,
  Package,
  Route,
  Ruler,
  Truck,
  Trophy,
  Users,
  X,
  ChevronRight,
  Layers,
  Zap,
} from 'lucide-react';

/* ─── Hooks ──────────────────────────────────────────────────── */

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

function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── Data ───────────────────────────────────────────────────── */

const majorGroups = {
  engineering: {
    label: 'Engineering',
    title: 'Nhóm xây dựng hạ tầng',
    items: [
      'Kỹ thuật xây dựng cầu đường',
      'Kỹ thuật xây dựng công trình giao thông',
      'Kỹ thuật hạ tầng đô thị',
    ],
    icon: HardHat,
    color: 'from-blue-700 to-[#003A8F]',
  },
  transportation: {
    label: 'Transportation',
    title: 'Nhóm cơ khí',
    items: ['Kỹ thuật cơ khí', 'Kỹ thuật ô tô'],
    icon: Car,
    color: 'from-slate-700 to-slate-900',
  },
  logistics: {
    label: 'Logistics',
    title: 'Nhóm logistics',
    items: ['Logistics và quản lý chuỗi cung ứng', 'Kinh tế vận tải'],
    icon: Package,
    color: 'from-cyan-700 to-blue-800',
  },
} as const;

type MajorTab = keyof typeof majorGroups;

const featureMajors = [
  {
    title: 'Kỹ thuật xây dựng cầu đường',
    desc: 'Đào tạo kỹ sư thiết kế, thi công và quản lý các công trình giao thông – nền tảng hạ tầng quốc gia.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    icon: Route,
    score: 24.5,
    badge: 'Ngành chủ lực',
  },
  {
    title: 'Logistics và chuỗi cung ứng',
    desc: 'Ngành đang phát triển mạnh trong thương mại và vận tải quốc tế – nhu cầu nhân lực cao.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    icon: Truck,
    score: 23.0,
    badge: 'Hot 2024',
  },
  {
    title: 'Kỹ thuật ô tô',
    desc: 'Đào tạo kỹ sư thiết kế và bảo trì các hệ thống ô tô, xe điện và phương tiện hiện đại.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    icon: Car,
    score: 22.75,
    badge: 'Công nghệ cao',
  },
];

const facilities = [
  { title: 'Phòng lab kết cấu cầu', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200' },
  { title: 'Phòng mô phỏng giao thông', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200' },
  { title: 'Xưởng cơ khí', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1200' },
  { title: 'Trung tâm nghiên cứu giao thông', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1200' },
];

const whyChoose = [
  {
    icon: Trophy,
    title: 'Trường kỹ thuật hàng đầu',
    desc: 'UTC là nơi đào tạo nhiều thế hệ kỹ sư xây dựng hạ tầng giao thông của Việt Nam.',
  },
  {
    icon: Ruler,
    title: 'Dự án thực tế lớn',
    desc: 'Sinh viên tham gia các dự án: cao tốc Bắc Nam, metro, cầu vượt, đường sắt đô thị.',
  },
  {
    icon: Building2,
    title: 'Hợp tác doanh nghiệp',
    desc: 'Sinh viên thực tập tại các tập đoàn hạ tầng lớn và có lộ trình nghề nghiệp rõ ràng.',
  },
];

const admissionMethods = [
  'Xét điểm thi tốt nghiệp THPT',
  'Xét học bạ',
  'Xét tuyển kết hợp chứng chỉ quốc tế',
];

const partners = ['Samsung', 'Canon', 'LG', 'Toyota', 'FPT Software'];

const studentActivities = ['CLB kỹ thuật cầu đường', 'CLB robotics', 'CLB khởi nghiệp', 'CLB ngoại ngữ'];

/* ─── Reveal wrapper ─────────────────────────────────────────── */

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────────── */

const UTCLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MajorTab>('engineering');
  const [submitted, setSubmitted] = useState(false);

  // Stats counter
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const yearCount = useCounter(1945, 1600, statsVisible);
  const studentCount = useCounter(20000, 2000, statsVisible);
  const majorCount = useCounter(50, 1200, statsVisible);

  const activeGroup = majorGroups[activeTab];
  const ActiveIcon = activeGroup.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen overflow-x-hidden">

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#003A8F] text-white font-black text-sm flex items-center justify-center shadow-lg tracking-wide">
              UTC
            </div>
            <div>
              <p className="font-extrabold text-[#003A8F] leading-tight text-sm md:text-base">
                ĐẠI HỌC GIAO THÔNG VẬN TẢI
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-widest hidden sm:block">
                University of Transport and Communications
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'majors', label: 'Ngành đào tạo' },
              { id: 'admissions', label: 'Tuyển sinh' },
              { id: 'career', label: 'Nghề nghiệp' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-[#003A8F] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2.5 rounded-xl bg-[#003A8F] text-white font-bold hover:bg-blue-800 transition-colors shadow-md"
            >
              Nhận tư vấn
            </button>
          </div>

          <button
            className="lg:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-3">
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'majors', label: 'Ngành đào tạo' },
              { id: 'admissions', label: 'Tuyển sinh' },
              { id: 'career', label: 'Nghề nghiệp' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-3 border-b border-slate-100 font-semibold text-slate-800 hover:text-[#003A8F] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#003A8F] text-white min-h-[90vh] flex items-center">
        {/* Background overlay image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1800')" }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f5c]/80 via-[#003A8F]/60 to-blue-900/70" />

        {/* Floating structural elements */}
        <div className="absolute top-16 right-10 w-40 h-40 rounded-full border border-white/10 animate-pulse hidden lg:block" />
        <div className="absolute top-32 right-28 w-24 h-24 rounded-full border border-white/10 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-12 w-56 h-2 bg-yellow-400/30 rounded-full hidden lg:block" />
        <div className="absolute bottom-32 left-12 w-36 h-1 bg-yellow-400/20 rounded-full hidden lg:block" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <HardHat className="w-4 h-4" />
              Thành lập 1945 · Hà Nội & TP.HCM
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
              Xây dựng<br />
              <span className="text-yellow-400">hạ tầng</span><br />
              tương lai Việt Nam
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-lg">
              Đại học Giao thông Vận tải — trường kỹ thuật lâu đời hàng đầu Việt Nam, đào tạo kỹ sư xây dựng cầu đường, cơ khí, logistics và vận tải.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#003A8F] font-bold text-base hover:bg-blue-50 transition-colors shadow-xl"
              >
                Khám phá ngành học <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-yellow-400 text-slate-900 font-bold text-base hover:bg-yellow-300 transition-colors shadow-xl"
              >
                Nhận tư vấn tuyển sinh
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1400"
                alt="UTC campus"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#003A8F]/40 to-transparent" />
            </div>
            {/* Floating info card */}
            <div className="absolute -bottom-6 -left-8 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-100">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Dự án tiêu biểu</p>
              <p className="text-sm font-extrabold text-[#003A8F] mt-1">Cao tốc Bắc Nam · Metro · Cầu vượt</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section id="overview" ref={statsRef} className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Landmark, label: 'Năm thành lập', value: statsVisible ? yearCount.toLocaleString('vi-VN') : '—', suffix: '' },
              { icon: MapPin, label: 'Cơ sở đào tạo', value: 'Hà Nội', suffix: '& TP.HCM', isText: true },
              { icon: Users, label: 'Quy mô sinh viên', value: statsVisible ? studentCount.toLocaleString('vi-VN') + '+' : '—', suffix: 'sinh viên' },
              { icon: GraduationCap, label: 'Ngành đào tạo', value: statsVisible ? majorCount + '+' : '—', suffix: 'chương trình' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">{item.label}</p>
                <p className="text-4xl font-black text-white mt-2 leading-none">{item.value}</p>
                {item.suffix && <p className="text-slate-400 text-sm mt-1">{item.suffix}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-[#003A8F] font-bold uppercase tracking-widest text-sm mb-3">Điểm mạnh</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Vì sao nên chọn UTC?</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group rounded-2xl border-2 border-slate-100 p-8 bg-white hover:border-[#003A8F] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#003A8F]/10 flex items-center justify-center mb-5 group-hover:bg-[#003A8F] transition-colors">
                    <item.icon className="w-7 h-7 text-[#003A8F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Major Groups (Tabs) ───────────────────────────────── */}
      <section id="majors" className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Chương trình đào tạo</p>
            <h2 className="text-3xl md:text-5xl font-black text-white">Các nhóm ngành đào tạo</h2>
          </Reveal>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {(Object.keys(majorGroups) as MajorTab[]).map((tab) => {
              const TabIcon = majorGroups[tab].icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-yellow-400 text-slate-900 shadow-lg scale-105'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {majorGroups[tab].label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className={`rounded-2xl p-8 bg-gradient-to-br ${activeGroup.color} border border-white/10 shadow-2xl`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <ActiveIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">{activeGroup.title}</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-4">
              {activeGroup.items.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Featured Majors ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-[#003A8F] font-bold uppercase tracking-widest text-sm mb-3">Nổi bật</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Ngành học nổi bật</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {featureMajors.map((major, i) => (
              <Reveal key={major.title} delay={i * 100}>
                <div className="group rounded-2xl bg-white border-2 border-slate-100 shadow-lg overflow-hidden hover:-translate-y-2 hover:border-[#003A8F] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={major.image}
                      alt={major.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003A8F]/60 to-transparent" />
                    <span className="absolute top-3 right-3 bg-yellow-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full">
                      {major.badge}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-10 h-10 rounded-lg bg-[#003A8F]/10 flex items-center justify-center mb-3 group-hover:bg-[#003A8F] transition-colors">
                      <major.icon className="w-5 h-5 text-[#003A8F] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">{major.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm flex-1">{major.desc}</p>

                    {/* Score display */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Điểm chuẩn 2024</span>
                        <span className="text-lg font-black text-[#003A8F]">{major.score}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#003A8F] to-blue-400 rounded-full transition-all duration-1000"
                          style={{ width: `${((major.score - 18) / (30 - 18)) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mt-1">
                        <span>18</span>
                        <span>30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admissions ───────────────────────────────────────── */}
      <section id="admissions" className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Tuyển sinh 2025</p>
            <h2 className="text-3xl md:text-5xl font-black text-white">Thông tin tuyển sinh</h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Methods */}
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-extrabold text-white mb-8">Phương thức tuyển sinh</h3>
                <div className="space-y-0">
                  {admissionMethods.map((item, idx) => (
                    <div key={item} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-yellow-400 text-slate-900 font-black text-sm flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>
                        {idx < admissionMethods.length - 1 && (
                          <div className="w-0.5 h-10 bg-white/20 my-1" />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="font-bold text-white mt-1.5">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Subject combos */}
            <Reveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-extrabold text-white mb-6">Tổ hợp xét tuyển</h3>
                <div className="space-y-3">
                  {[
                    { code: 'A00', subjects: 'Toán · Lý · Hóa', desc: 'Khối chính ngành kỹ thuật' },
                    { code: 'A01', subjects: 'Toán · Lý · Anh', desc: 'Kỹ thuật + ngoại ngữ' },
                    { code: 'D01', subjects: 'Toán · Văn · Anh', desc: 'Kinh tế & Logistics' },
                  ].map((row) => (
                    <div
                      key={row.code}
                      className="flex items-center gap-4 bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-yellow-400 text-slate-900 font-black text-sm flex items-center justify-center flex-shrink-0">
                        {row.code}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{row.subjects}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{row.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facilities ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-[#003A8F] font-bold uppercase tracking-widest text-sm mb-3">Cơ sở vật chất</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Hạ tầng học tập</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden relative aspect-square cursor-pointer">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003A8F]/80 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-bold leading-tight">
                    {facility.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career ───────────────────────────────────────────── */}
      <section id="career" className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Sau tốt nghiệp</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Cơ hội nghề nghiệp</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Sinh viên tốt nghiệp UTC có thể làm việc tại công ty xây dựng, tập đoàn hạ tầng, công ty logistics và các doanh nghiệp vận tải trong và ngoài nước.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {partners.map((company, i) => (
              <Reveal key={company} delay={i * 60}>
                <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center font-extrabold text-white hover:bg-white/15 hover:border-yellow-400/50 transition-all cursor-default">
                  {company}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Student activities */}
          <Reveal>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-extrabold text-white mb-5 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-400" /> Hoạt động sinh viên
              </h3>
              <div className="flex flex-wrap gap-3">
                {studentActivities.map((act) => (
                  <span
                    key={act}
                    className="bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section id="final-cta" className="py-24 bg-[#003A8F] text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">Bắt đầu hành trình</p>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
                Trở thành kỹ sư xây dựng hạ tầng giao thông tương lai?
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                Đại học Giao thông Vận tải sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng vững chắc để phát triển sự nghiệp trong ngành hạ tầng.
              </p>
              <div className="space-y-3">
                {['Đào tạo kỹ thuật chất lượng cao', 'Kết nối doanh nghiệp hàng đầu', 'Cơ hội tham gia dự án thực tế lớn'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl p-7 md:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Đăng ký nhận tư vấn tuyển sinh</h3>

              {submitted ? (
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  Đăng ký thành công! Trường sẽ liên hệ với bạn sớm.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#003A8F] focus:border-[#003A8F] focus:outline-none transition-colors placeholder:text-slate-400"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#003A8F] focus:border-[#003A8F] focus:outline-none transition-colors placeholder:text-slate-400"
                  />
                  <select
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 focus:ring-2 focus:ring-[#003A8F] focus:border-[#003A8F] focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Ngành quan tâm</option>
                    <option>Kỹ thuật xây dựng cầu đường</option>
                    <option>Logistics và chuỗi cung ứng</option>
                    <option>Kỹ thuật ô tô</option>
                  </select>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 px-5 py-3.5 rounded-xl bg-[#003A8F] text-white font-extrabold hover:bg-blue-800 transition-colors shadow-md"
                    >
                      Đăng ký nhận tư vấn
                    </button>
                    <button
                      type="button"
                      onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex-1 px-5 py-3.5 rounded-xl bg-yellow-400 text-slate-900 font-extrabold hover:bg-yellow-300 transition-colors shadow-md"
                    >
                      Tìm hiểu ngành học
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default UTCLandingPage;
