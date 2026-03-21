import React, { useState, useEffect, useRef } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  ArrowRight, BookOpen, Briefcase, CheckCircle2,
  ChevronLeft, ChevronRight, Globe, GraduationCap,
  Laptop, MapPin, Sparkles, Users, Star, Quote,
  Zap, TrendingUp, Award, Clock,
} from 'lucide-react';

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = Math.ceil(target / (duration / 16));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(cur);
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
}

function useTypewriter(words: string[], speed = 90, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return displayed;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const majorGroups = [
  { id: 'tech',     label: 'Nhóm Công nghệ',  color: '#3B82F6', bg: 'from-blue-500 to-cyan-500',    items: ['Công nghệ thông tin', 'Hệ thống thông tin', 'An ninh mạng'] },
  { id: 'business', label: 'Nhóm Kinh tế',    color: '#F59E0B', bg: 'from-amber-400 to-orange-500', items: ['Quản trị kinh doanh', 'Kế toán', 'Tài chính ngân hàng', 'Marketing'] },
  { id: 'language', label: 'Nhóm Ngoại ngữ',  color: '#8B5CF6', bg: 'from-violet-500 to-purple-600',items: ['Ngôn ngữ Anh', 'Ngôn ngữ Trung', 'Ngôn ngữ Nhật', 'Ngôn ngữ Hàn'] },
  { id: 'tourism',  label: 'Nhóm Du lịch',    color: '#14B8A6', bg: 'from-teal-400 to-emerald-500', items: ['Quản trị du lịch & lữ hành', 'Quản trị khách sạn', 'Ẩm thực & Dịch vụ'] },
];

const featuredMajors = [
  { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', title: 'Công nghệ thông tin', tag: 'Ngành hot', score: 25, color: 'from-blue-600 to-cyan-500', desc: 'Đào tạo lập trình viên, phát triển phần mềm và hệ thống công nghệ đáp ứng nhu cầu thị trường số.' },
  { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', title: 'Quản trị kinh doanh', tag: 'Cơ hội rộng', score: 23, color: 'from-amber-500 to-orange-500', desc: 'Trang bị kỹ năng quản lý, lãnh đạo và kinh doanh trong môi trường cạnh tranh toàn cầu.' },
  { img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800', title: 'Ngôn ngữ Anh', tag: 'Thị trường cao', score: 24, color: 'from-violet-500 to-purple-600', desc: 'Đào tạo kỹ năng ngôn ngữ, phiên dịch và giao tiếp quốc tế, mở ra cơ hội việc làm đa dạng.' },
  { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', title: 'Quản trị du lịch', tag: 'Tiềm năng lớn', score: 21, color: 'from-teal-500 to-emerald-500', desc: 'Đào tạo chuyên gia ngành du lịch, khách sạn và dịch vụ trong bối cảnh du lịch phục hồi mạnh mẽ.' },
];

const admissionSteps = [
  { step: '01', title: 'Xét điểm thi tốt nghiệp THPT', desc: 'Tham gia kỳ thi tốt nghiệp THPT quốc gia và đăng ký xét tuyển theo điểm thi.', icon: BookOpen },
  { step: '02', title: 'Xét học bạ', desc: 'Nộp học bạ THPT với điểm trung bình từng môn đạt yêu cầu theo tổ hợp.', icon: Award },
  { step: '03', title: 'Xét tuyển kết hợp', desc: 'Kết hợp điểm thi tốt nghiệp và kết quả học tập THPT theo quy định của trường.', icon: TrendingUp },
];

const combos = [
  { code: 'A00', subjects: 'Toán – Lý – Hóa',  color: 'from-blue-500 to-cyan-400' },
  { code: 'A01', subjects: 'Toán – Lý – Anh',  color: 'from-violet-500 to-blue-500' },
  { code: 'D01', subjects: 'Toán – Văn – Anh', color: 'from-emerald-500 to-teal-400' },
  { code: 'C00', subjects: 'Văn – Sử – Địa',   color: 'from-amber-500 to-orange-400' },
];

const scores = [
  { major: 'Công nghệ thông tin', score: 25,   color: '#3B82F6' },
  { major: 'Marketing',           score: 24.5, color: '#F59E0B' },
  { major: 'Ngôn ngữ Anh',        score: 24,   color: '#8B5CF6' },
  { major: 'Quản trị kinh doanh', score: 23,   color: '#14B8A6' },
  { major: 'Quản trị du lịch',    score: 21,   color: '#EC4899' },
];

const activities = [
  { emoji: '🌍', title: 'CLB Ngoại ngữ',   desc: 'Giao lưu quốc tế, thi hùng biện và các chương trình học ngôn ngữ sôi động.', bg: 'from-blue-600 to-cyan-500' },
  { emoji: '🚀', title: 'CLB Khởi nghiệp', desc: 'Ươm mầm ý tưởng, kết nối mentor và nhà đầu tư trong hệ sinh thái startup trẻ.', bg: 'from-violet-600 to-purple-500' },
  { emoji: '📡', title: 'CLB Truyền thông', desc: 'Sản xuất nội dung, quản lý mạng xã hội và xây dựng thương hiệu cá nhân.', bg: 'from-rose-500 to-pink-500' },
  { emoji: '💻', title: 'CLB Công nghệ',   desc: 'Hackathon, workshop lập trình và dự án công nghệ thực tế cùng các partner doanh nghiệp.', bg: 'from-amber-500 to-orange-500' },
];

const testimonials = [
  { name: 'Nguyễn Minh Anh', role: 'Cựu SV CNTT • 2020', text: 'HOU cho tôi nền tảng kỹ thuật vững chắc và cơ hội thực tập tại FPT Software ngay từ năm 3. Môi trường học rất năng động và giảng viên rất nhiệt tình.', rating: 5 },
  { name: 'Trần Thùy Linh', role: 'Cựu SV Ngoại ngữ • 2019', text: 'Chương trình Ngôn ngữ Anh tại HOU cực kỳ thực tế. Tôi có cơ hội tham gia nhiều cuộc thi hùng biện quốc tế và hiện đang làm việc cho công ty đa quốc gia.', rating: 5 },
  { name: 'Lê Quang Hưng', role: 'Cựu SV QTKD • 2021', text: 'Mô hình đào tạo linh hoạt của HOU giúp tôi vừa học vừa làm từ năm 2. Ra trường đã có 2 năm kinh nghiệm thực tế, tìm việc rất dễ dàng.', rating: 5 },
];

const employers = ['FPT Software', 'VNG', 'Grab', 'Viettel', 'Vingroup', 'KPMG', 'Deloitte', 'Manulife', 'Techcombank', 'Booking.com', 'Saigontourist', 'Agoda'];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HOULandingPage() {
  usePageAnalytics('HOU', 'Đại học Mở Hà Nội');
  const [sliderIdx, setSliderIdx]   = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [submitted, setSubmitted]   = useState(false);
  const [form, setForm]             = useState({ name: '', phone: '', major: '' });

  const { ref: statsRef,       visible: statsVisible }       = useScrollReveal(0.2);
  const { ref: scoresRef,      visible: scoresVisible }      = useScrollReveal(0.2);
  const { ref: heroRef,        visible: heroVisible }        = useScrollReveal(0.05);
  const { ref: majorsRef,      visible: majorsVisible }      = useScrollReveal(0.1);
  const { ref: featuredRef,    visible: featuredVisible }    = useScrollReveal(0.1);
  const { ref: admissionRef,   visible: admissionVisible }   = useScrollReveal(0.1);
  const { ref: activitiesRef,  visible: activitiesVisible }  = useScrollReveal(0.1);
  const { ref: employersRef,   visible: employersVisible }   = useScrollReveal(0.1);
  const { ref: testimonialsRef,visible: testimonialsVisible } = useScrollReveal(0.1);

  const typewritten = useTypewriter(['Linh hoạt', 'Hiện đại', 'Toàn diện', 'Đột phá'], 90, 2200);

  const c1 = useCounter(1993, statsVisible, 1600);
  const c2 = useCounter(20000, statsVisible, 2000);
  const c3 = useCounter(30, statsVisible, 1200);
  const c4 = useCounter(32, statsVisible, 1400);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="text-slate-900 bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes floatA { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(25px,-20px) scale(1.08)} 66%{transform:translate(-15px,18px) scale(0.95)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,15px) scale(1.1)} }
        @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(15px,-25px) scale(0.93)} 80%{transform:translate(-10px,10px) scale(1.05)} }
        @keyframes particleRise { 0%{transform:translateY(0) scale(1);opacity:0.6} 100%{transform:translateY(-120px) scale(0);opacity:0} }
        @keyframes marqueeScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0.4)} 50%{box-shadow:0 0 0 16px rgba(59,130,246,0)} }
        @keyframes borderSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes slideInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes countPop { 0%{transform:scale(0.7);opacity:0} 60%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
        @keyframes gridPulse { 0%,100%{opacity:0.03} 50%{opacity:0.07} }

        .blob-a { animation: floatA 9s ease-in-out infinite; }
        .blob-b { animation: floatB 12s ease-in-out infinite; }
        .blob-c { animation: floatC 7s ease-in-out infinite; }
        .marquee-scroll { animation: marqueeScroll 28s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 2s ease infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #93c5fd 40%, #fff 60%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .reveal { opacity:0; transform:translateY(28px); transition:all 0.85s cubic-bezier(0.2,0.8,0.2,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .reveal-left { opacity:0; transform:translateX(-36px); transition:all 0.9s cubic-bezier(0.2,0.8,0.2,1); }
        .reveal-left.visible { opacity:1; transform:translateX(0); }
        .reveal-right { opacity:0; transform:translateX(36px); transition:all 0.9s cubic-bezier(0.2,0.8,0.2,1); }
        .reveal-right.visible { opacity:1; transform:translateX(0); }
        .delay-1 { transition-delay:0.1s; }
        .delay-2 { transition-delay:0.2s; }
        .delay-3 { transition-delay:0.3s; }
        .delay-4 { transition-delay:0.4s; }
        .delay-5 { transition-delay:0.5s; }
        .card-3d { transition: transform 0.4s ease, box-shadow 0.4s ease; transform-style: preserve-3d; }
        .card-3d:hover { transform: perspective(800px) rotateY(-4deg) rotateX(3deg) translateY(-6px); }
        .glow-blue { box-shadow: 0 0 40px rgba(59,130,246,0.2), 0 0 80px rgba(59,130,246,0.08); }
        .cursor-blink { animation: pulseGlow 0.7s ease-in-out infinite; border-right: 3px solid #60a5fa; }
        .count-pop { animation: countPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .bg-grid-blue { background-image: radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px); background-size: 28px 28px; animation: gridPulse 4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid-blue pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-950/60 to-indigo-900/40 pointer-events-none" />

        {/* Blobs */}
        <div className="blob-a absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="blob-b absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
        <div className="blob-c absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

        {/* Particles */}
        {[...Array(14)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-blue-400/50 rounded-full pointer-events-none"
            style={{ left: `${5 + i * 7}%`, bottom: '0', animation: `particleRise ${3 + (i % 4)}s ease-out ${i * 0.6}s infinite` }} />
        ))}

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-28">
          <div className={`reveal ${heroVisible ? 'visible' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-8 animate-pulse-glow">
              <Sparkles size={12} /> Đại học công lập trực thuộc Bộ GD&ĐT
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter text-white">
                  Đại học<br />
                  <span className="text-blue-400">Mở</span> Hà Nội
                </h1>

                <div className="text-2xl md:text-3xl font-bold text-slate-300 flex items-center gap-2 h-10">
                  Học tập
                  <span className="text-blue-400 min-w-[160px]">{typewritten}</span>
                  <span className="cursor-blink inline-block w-0.5 h-7"></span>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-medium">
                  Tiên phong trong mô hình đào tạo mở — cung cấp chương trình học linh hoạt trong các lĩnh vực kinh tế, công nghệ, ngoại ngữ và du lịch.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-sm tracking-wider transition-all shadow-xl shadow-blue-900/40 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center gap-2">
                    Khám phá ngành học
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold rounded-xl text-sm tracking-wider transition-all backdrop-blur-sm">
                    Đăng ký tư vấn
                  </button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-5 pt-2">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/80?u=hou_sv_${i}`} className="w-9 h-9 rounded-full border-2 border-slate-950" alt="" />
                    ))}
                    <div className="w-9 h-9 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center text-white text-[8px] font-black">+20k</div>
                  </div>
                  <div>
                    <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} size={10} fill="#fbbf24" className="text-amber-400"/>)}</div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">Sinh viên tin tưởng lựa chọn</p>
                  </div>
                </div>
              </div>

              {/* Right — bento cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {/* Main image */}
                <div className="col-span-2 rounded-[28px] overflow-hidden aspect-video shadow-2xl relative group glow-blue card-3d">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="HOU Campus" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-white font-black text-lg">Khuôn viên Đại học Mở Hà Nội</span>
                    <p className="text-white/60 text-xs font-medium mt-1">Cơ sở hiện đại tại trung tâm Hà Nội</p>
                  </div>
                </div>

                {/* Stat mini-cards */}
                {[
                  { label: 'Năm thành lập', val: '1993', color: '#3B82F6' },
                  { label: 'Ngành đào tạo', val: '30+',  color: '#8B5CF6' },
                  { label: 'Sinh viên',      val: '20k+', color: '#14B8A6' },
                  { label: 'Hình thức học',  val: '3',   color: '#F59E0B' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-[20px] p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 cursor-default">
                    <p className="text-2xl font-black text-white" style={{ color: s.color }}>{s.val}</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-blue-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-16 bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: c1, suf: '',   label: 'Năm thành lập',    icon: Clock,          color: 'text-blue-400',   bg: 'bg-blue-400/10' },
              { val: c2, suf: '+',  label: 'Sinh viên đang học',icon: Users,          color: 'text-violet-400', bg: 'bg-violet-400/10' },
              { val: c3, suf: '+',  label: 'Ngành đào tạo',    icon: BookOpen,       color: 'text-teal-400',   bg: 'bg-teal-400/10' },
              { val: c4, suf: '+',  label: 'Năm kinh nghiệm',  icon: GraduationCap,  color: 'text-amber-400',  bg: 'bg-amber-400/10' },
            ].map((s, i) => (
              <div key={i} className={`reveal ${statsVisible ? 'visible' : ''} delay-${i+1} bg-white/5 border border-white/10 rounded-[24px] p-6 text-center hover:bg-white/8 hover:-translate-y-1 transition-all group cursor-default`}>
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <s.icon size={22} className={s.color} />
                </div>
                <p className={`text-4xl font-black tabular-nums ${s.color}`}>{s.val.toLocaleString()}{s.suf}</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`reveal-left ${heroVisible ? 'visible' : ''} relative`}>
              <div className="relative group rounded-[36px] overflow-hidden shadow-2xl glow-blue">
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700" alt="HOU" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-blue-600 text-white rounded-[16px] px-4 py-3 shadow-xl">
                <p className="font-black text-sm">Top 5</p>
                <p className="text-[9px] font-bold uppercase tracking-wider opacity-80">ĐH Mở VN</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-[14px] p-4 shadow-xl border border-slate-100">
                <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_,i)=><Star key={i} size={10} fill="#f59e0b" className="text-amber-400"/>)}</div>
                <p className="font-black text-xs text-slate-900">Linh hoạt #1</p>
                <p className="text-[9px] text-slate-500 font-bold">Mô hình đào tạo mở</p>
              </div>
            </div>

            <div className={`reveal-right ${heroVisible ? 'visible' : ''} space-y-7`}>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[9px] uppercase tracking-widest">Tổng quan HOU • Từ 1993</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Học tập không có<br />
                <span className="text-blue-600">giới hạn</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                Đại học Mở Hà Nội tiên phong trong mô hình đào tạo mở tại Việt Nam — nơi mỗi sinh viên có thể tự thiết kế hành trình học tập phù hợp với đam mê và mục tiêu sự nghiệp của mình.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['Công nghệ thông tin', 'Kinh tế – Quản trị', 'Ngoại ngữ', 'Du lịch – Khách sạn', 'Kế toán – Tài chính', 'Luật học'].map(f => (
                  <div key={f} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-[14px] border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group cursor-default">
                    <CheckCircle2 size={15} className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest group">
                Tìm hiểu thêm <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE — Bento Grid ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${heroVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[9px] uppercase tracking-widest">Tại sao chọn HOU?</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Điểm khác biệt của chúng tôi</h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Large card - left */}
            <div className={`reveal ${heroVisible ? 'visible' : ''} md:row-span-2 bg-blue-600 rounded-[32px] p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/20 cursor-default`}>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3">Chương trình đào tạo linh hoạt</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Sinh viên lựa chọn nhiều hình thức học phù hợp — chính quy, vừa làm vừa học, trực tuyến và kết hợp.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                Tìm hiểu <ArrowRight size={12} />
              </div>
            </div>

            {/* Top right - dark */}
            <div className={`reveal delay-1 ${heroVisible ? 'visible' : ''} md:col-span-2 bg-slate-900 rounded-[32px] p-8 group hover:-translate-y-1 transition-all shadow-lg cursor-default`}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen size={22} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2">30+ Ngành học đa dạng</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Từ công nghệ, kinh tế đến ngoại ngữ và du lịch — đáp ứng mọi đam mê và định hướng nghề nghiệp.</p>
                </div>
              </div>
              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['CNTT', 'Kinh tế', 'Ngoại ngữ', 'Du lịch', 'Kế toán', 'Luật'].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 font-bold text-[10px] rounded-full uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </div>

            {/* Bottom mid */}
            <div className={`reveal delay-2 ${heroVisible ? 'visible' : ''} bg-white border border-slate-100 rounded-[32px] p-8 group hover:-translate-y-1 hover:shadow-xl transition-all cursor-default shadow-sm`}>
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Laptop size={22} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Môi trường hiện đại</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Cơ sở vật chất tiên tiến, phòng lab công nghệ và thư viện điện tử phục vụ học tập 24/7.</p>
            </div>

            {/* Bottom right */}
            <div className={`reveal delay-3 ${heroVisible ? 'visible' : ''} bg-gradient-to-br from-amber-400 to-orange-500 rounded-[32px] p-8 group hover:-translate-y-1 transition-all shadow-xl cursor-default`}>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">98% có việc làm</h3>
              <p className="text-white/80 text-sm leading-relaxed">Sinh viên tốt nghiệp HOU được tuyển dụng bởi các doanh nghiệp hàng đầu trong và ngoài nước.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAJOR GROUPS ─────────────────────────────────────────────────────── */}
      <section ref={majorsRef} className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${majorsVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-400 font-bold text-[9px] uppercase tracking-widest border border-blue-800/40">Chương trình đào tạo</div>
            <h2 className="text-4xl font-black text-white tracking-tight">Các nhóm ngành</h2>
            <p className="text-slate-500 text-sm font-medium">HOU đào tạo đa dạng — từ công nghệ, kinh tế đến ngoại ngữ và du lịch</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {majorGroups.map((g, i) => (
              <div key={g.id} className={`reveal delay-${i+1} ${majorsVisible ? 'visible' : ''} group bg-white/5 border border-white/10 rounded-[28px] p-7 hover:bg-white/8 hover:-translate-y-2 hover:shadow-2xl transition-all cursor-default relative overflow-hidden`}>
                {/* Top glow bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${g.bg} opacity-0 group-hover:opacity-100 transition-opacity rounded-full`} />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.bg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Globe size={20} className="text-white" />
                </div>
                <h3 className="text-base font-black text-white mb-1">{g.label}</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-5">{g.items.length} ngành</p>
                <ul className="space-y-2.5">
                  {g.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-400 text-xs font-medium group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: g.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MAJORS ──────────────────────────────────────────────────── */}
      <section ref={featuredRef} className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${featuredVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[9px] uppercase tracking-widest">Ngành nổi bật</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Ngành học được yêu thích</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredMajors.map((m, i) => (
              <div key={m.title} className={`reveal delay-${i+1} ${featuredVisible ? 'visible' : ''} group rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all cursor-default flex flex-col`}>
                <div className="relative overflow-hidden" style={{ height: 180 }}>
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur text-white font-black text-[9px] rounded-full uppercase tracking-widest border border-white/20">{m.tag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur text-white font-black text-lg px-3 py-1 rounded-xl border border-white/20">
                    {m.score}đ
                  </div>
                </div>
                <div className="p-5 bg-slate-50 flex flex-col flex-1 border border-slate-100 border-t-0 rounded-b-[24px]">
                  <h3 className="font-black text-slate-900 text-sm mb-2">{m.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{m.desc}</p>
                  <button className="mt-4 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:gap-2 transition-all">
                    Tìm hiểu thêm <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS ───────────────────────────────────────────────────────── */}
      <section ref={admissionRef} className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${admissionVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-400 font-bold text-[9px] uppercase tracking-widest border border-blue-800/40">Tuyển sinh 2026</div>
            <h2 className="text-4xl font-black text-white tracking-tight">Phương thức xét tuyển</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Steps */}
            <div className={`reveal-left ${admissionVisible ? 'visible' : ''} space-y-4`}>
              {admissionSteps.map((s, i) => (
                <div key={s.step} className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/8 hover:border-blue-500/30 transition-all group cursor-default">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-black text-white text-base mb-1">{s.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Combos */}
            <div className={`reveal-right ${admissionVisible ? 'visible' : ''} space-y-4`}>
              <h3 className="text-xl font-black text-white mb-6">Tổ hợp xét tuyển</h3>
              {combos.map((c, i) => (
                <div key={c.code} className={`reveal delay-${i+1} ${admissionVisible ? 'visible' : ''} flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-[20px] hover:bg-white/8 hover:-translate-x-1 transition-all group cursor-default`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center font-black text-white text-lg shadow-lg shrink-0 group-hover:scale-105 transition-transform`}>
                    {c.code}
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">{c.subjects}</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Tổ hợp xét tuyển</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCORES ───────────────────────────────────────────────────────────── */}
      <section ref={scoresRef} className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${scoresVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[9px] uppercase tracking-widest">Điểm chuẩn</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Điểm chuẩn năm 2024</h2>
            <p className="text-slate-500 text-sm">Dao động từ <strong className="text-slate-700">20 – 25 điểm</strong> tùy ngành</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-5">
            {scores.map((s, i) => (
              <div key={s.major} className={`reveal delay-${i+1} ${scoresVisible ? 'visible' : ''}`}>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-slate-800 font-bold text-sm">{s.major}</span>
                  <span className="font-black text-base" style={{ color: s.color }}>{s.score} điểm</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: scoresVisible ? `${(s.score / 30) * 100}%` : '0%',
                      background: `linear-gradient(to right, ${s.color}cc, ${s.color})`,
                      transitionDelay: `${i * 0.1}s`,
                    }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ───────────────────────────────────────────────────────── */}
      <section ref={activitiesRef} className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${activitiesVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[9px] uppercase tracking-widest">Đời sống sinh viên</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Hoạt động sinh viên</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((a, i) => (
              <div key={i} className={`reveal delay-${i+1} ${activitiesVisible ? 'visible' : ''} group relative overflow-hidden rounded-[28px] p-8 bg-gradient-to-br ${a.bg} hover:-translate-y-2 hover:shadow-2xl transition-all cursor-default`}>
                <div className="absolute -top-6 -right-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">{a.emoji}</div>
                <div className="text-5xl mb-5 relative z-10">{a.emoji}</div>
                <h3 className="text-xl font-black text-white mb-3 relative z-10">{a.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed relative z-10 font-medium">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section ref={testimonialsRef} className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`reveal ${testimonialsVisible ? 'visible' : ''} text-center mb-16 space-y-3`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-400 font-bold text-[9px] uppercase tracking-widest border border-blue-800/40">Cựu sinh viên chia sẻ</div>
            <h2 className="text-4xl font-black text-white tracking-tight">Tiếng nói từ HOU</h2>
          </div>

          <div className={`reveal ${testimonialsVisible ? 'visible' : ''} relative max-w-3xl mx-auto`}>
            {testimonials.map((t, i) => (
              <div key={i} className={`transition-all duration-700 ${i === testimonialIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 relative">
                  <Quote size={56} className="text-blue-600/20 absolute top-8 left-8" />
                  <div className="flex gap-1 mb-6">{[...Array(t.rating)].map((_,j)=><Star key={j} size={14} fill="#60a5fa" className="text-blue-400"/>)}</div>
                  <p className="text-slate-200 text-lg font-medium leading-relaxed italic mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/120?u=hou_t_${i}`} className="w-14 h-14 rounded-full border-2 border-blue-500" alt={t.name} />
                    <div>
                      <p className="text-white font-black">{t.name}</p>
                      <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110">
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  className={`rounded-full transition-all ${i === testimonialIdx ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
              ))}
              <button onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYERS MARQUEE ────────────────────────────────────────────────── */}
      <section ref={employersRef} className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className={`reveal ${employersVisible ? 'visible' : ''} text-center mb-10`}>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Doanh nghiệp tuyển dụng sinh viên HOU</p>
        </div>
        <div className="flex">
          <div className="flex gap-12 marquee-scroll whitespace-nowrap shrink-0">
            {[...employers, ...employers].map((e, i) => (
              <span key={i} className="text-slate-400 font-black text-sm uppercase tracking-widest hover:text-blue-600 transition-colors cursor-default">{e}</span>
            ))}
          </div>
          <div className="flex gap-12 marquee-scroll whitespace-nowrap shrink-0" aria-hidden>
            {[...employers, ...employers].map((e, i) => (
              <span key={i} className="text-slate-400 font-black text-sm uppercase tracking-widest">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-950 overflow-hidden relative">
        <div className="blob-a absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-3xl pointer-events-none" />
        <div className="blob-b absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[48px] overflow-hidden flex flex-col lg:flex-row">
            {/* Left */}
            <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-xl mb-8 animate-pulse-glow shadow-xl">HOU</div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-5">Bắt đầu<br />hành trình<br /><span className="text-blue-400">tại HOU</span></h2>
              <p className="text-slate-400 font-medium text-base mb-8 max-w-sm">Tư vấn lộ trình học tập cá nhân hóa — hoàn toàn miễn phí.</p>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: '101 Nguyễn Hiền, Hai Bà Trưng, Hà Nội' },
                  { icon: Globe,  text: 'hou.edu.vn' },
                  { icon: Briefcase, text: 'Tư vấn miễn phí 24/7' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-blue-400 transition-colors cursor-default">
                    <item.icon size={13} className="text-blue-500 shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="lg:w-1/2 bg-white p-10 md:p-14">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-5 py-16">
                  <div className="w-20 h-20 bg-blue-50 rounded-[24px] flex items-center justify-center text-blue-500 shadow-lg animate-pulse-glow">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Đăng ký thành công!</h3>
                  <p className="text-slate-500 text-sm font-medium">Tư vấn viên sẽ liên hệ bạn trong vòng 24 giờ.</p>
                  <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-colors">
                    Quay lại
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black text-slate-900 mb-7">Đăng ký tư vấn</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Tên sinh viên</label>
                      <input type="text" placeholder="Nguyễn Văn A" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-200 outline-none text-sm font-bold text-slate-900 placeholder:text-slate-400 hover:bg-slate-100 transition-colors" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Điện thoại</label>
                      <input type="tel" placeholder="09xx..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-200 outline-none text-sm font-bold text-slate-900 placeholder:text-slate-400 hover:bg-slate-100 transition-colors" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Ngành quan tâm</label>
                    <select value={form.major} onChange={e => setForm({...form, major: e.target.value})}
                      className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-blue-200 outline-none text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                      <option value="">Chọn ngành...</option>
                      {featuredMajors.map(m => <option key={m.title}>{m.title}</option>)}
                      <option>Kế toán</option>
                      <option>Tài chính ngân hàng</option>
                      <option>An ninh mạng</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-[18px] font-black text-sm tracking-widest transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
                    NHẬN TƯ VẤN MIỄN PHÍ
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[9px] text-slate-400 font-medium">Cam kết bảo mật thông tin · Không spam</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
