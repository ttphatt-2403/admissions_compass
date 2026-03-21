import React, { useState, useEffect, useRef } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  X, ArrowRight, Newspaper, Megaphone, Landmark, Users,
  MapPin, Calendar, GraduationCap, Camera, Mic,
  CheckCircle2, Trophy, Sparkles, Award, Globe, Zap,
  Star, Quote, ChevronLeft, ChevronRight, BookOpen, Tv,
  Heart, Clock, Bell, Play, Flame, Target,
} from 'lucide-react';

// ─── Custom Hooks ───────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

function useCounter(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function useTypewriter(words: string[], speed = 100, pause = 2000) {
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

const trainingGroups = [
  { title: 'Báo chí', icon: Newspaper, color: 'from-rose-500 to-rose-700', bg: 'bg-rose-500', items: ['Báo in', 'Truyền hình', 'Phát thanh', 'Quay phim'], details: 'Chương trình đào tạo Báo chí cốt lõi cung cấp kiến thức toàn diện về kỹ năng viết tin, bài, sản xuất các chương trình phát thanh, truyền hình, báo mạng điện tử và sản xuất ảnh báo chí chuyên nghiệp. Sinh viên được tác nghiệp thực tế từ rất sớm.' },
  { title: 'Truyền thông', icon: Megaphone, color: 'from-blue-500 to-blue-700', bg: 'bg-blue-500', items: ['Đa phương tiện', 'PR & Quảng cáo', 'Marketing'], details: 'Ngành Truyền thông trang bị cho sinh viên năng lực lập kế hoạch chiến lược truyền thông đa nền tảng, thiết kế thông điệp sáng tạo đa phương tiện, nghệ thuật xử lý khủng hoảng và quản trị thương hiệu toàn cầu hiệu quả.' },
  { title: 'Chính trị', icon: Landmark, color: 'from-amber-500 to-amber-700', bg: 'bg-amber-500', items: ['Chính trị học', 'Xây dựng Đảng', 'Triết học'], details: 'Khối kiến thức Chính trị mang đến hệ thống hàn lâm nền tảng về quan điểm, đường lối, chính sách. Sinh viên rèn luyện tư duy phản biện sắc bén, bản lĩnh chính trị, năng lực lãnh đạo và quản lý các vấn đề xã hội hiện đại.' },
  { title: 'Xã hội', icon: Users, color: 'from-emerald-500 to-emerald-700', bg: 'bg-emerald-500', items: ['Lịch sử', 'Xã hội học', 'Quan hệ quốc tế'], details: 'Khối ngành Xã hội học, Lịch sử và QHQT tập trung phân tích sự vận động của xã hội loài người. Người học có khả năng đọc vị các hiện tượng xã hội phức tạp, phân tích chính sách và giải quyết các bài toán toàn cầu đương đại.' },
];

const testimonials = [
  { name: 'Nguyễn Hà Linh', role: 'PV VTV1 • Khóa 2018', text: 'AJC không chỉ dạy tôi cách cầm máy quay — trường dạy tôi cách nhìn thế giới bằng đôi mắt của người kể chuyện. Từng buổi thực tế, từng tít báo, từng lần lên sóng là một hành trình trưởng thành thật sự.', rating: 5 },
  { name: 'Trần Minh Khoa', role: 'PR Manager • Khóa 2016', text: 'Chất lượng đào tạo tại AJC thuộc top đầu Việt Nam. Tôi học được từ những giảng viên là chuyên gia thực tiễn — người đang làm việc trực tiếp tại các tòa soạn và công ty truyền thông lớn nhất.', rating: 5 },
  { name: 'Phạm Bảo Châu', role: 'Content Director • Khóa 2019', text: 'Môi trường AJC cực kỳ sôi động. CLB Sóng Trẻ, những mùa Tết Báo, hội thảo quốc tế... Tất cả tạo nên một thanh xuân mà tôi sẽ nhớ mãi. Và quan trọng hơn là mạng lưới kết nối cực mạnh sau khi ra trường.', rating: 5 },
  { name: 'Lê Quốc Hùng', role: 'Phóng viên VOV • Khóa 2017', text: 'Hệ thống studio, phòng thu và phòng lab hiện đại của AJC cho phép tôi thực hành ngay từ năm nhất. Đó là lợi thế cạnh tranh không nơi nào có được.', rating: 5 },
];

const milestones = [
  { year: '1962', title: 'Thành lập', desc: 'Trường Tuyên huấn Trung ương ra đời, đặt nền móng cho nền giáo dục báo chí Việt Nam.' },
  { year: '1990', title: 'Đổi mới', desc: 'Chuyển đổi thành Học viện Báo chí và Tuyên truyền, mở rộng đào tạo đa ngành.' },
  { year: '2005', title: 'Quốc tế hóa', desc: 'Ký kết hợp tác với hơn 20 trường đại học danh tiếng trên thế giới.' },
  { year: '2015', title: 'Studio 4K', desc: 'Khánh thành hệ thống phòng thu và studio phát thanh-truyền hình 4K đầu tiên tại Việt Nam.' },
  { year: '2020', title: 'Chuyển đổi số', desc: 'Ra mắt chương trình đào tạo Báo chí Dữ liệu và Truyền thông kỹ thuật số tiên phong.' },
  { year: '2024', title: 'Đỉnh cao mới', desc: 'Top 3 trường đào tạo truyền thông hàng đầu khu vực Đông Nam Á.' },
];

const faculty = [
  { name: 'GS.TS Nguyễn Văn Dũng', role: 'Chuyên gia Báo chí Điều tra', expertise: 'Báo chí & Truyền thông', img: 'https://images.unsplash.com/photo-1732159488321-ffa71052091e?auto=format&fit=crop&q=80&w=400' },
  { name: 'PGS.TS Lê Thị Hoa', role: 'Chuyên gia PR Chiến lược', expertise: 'Quan hệ Công chúng', img: 'https://images.unsplash.com/photo-1529232356377-57971f020a94?auto=format&fit=crop&q=80&w=400' },
  { name: 'TS. Phạm Quang Minh', role: 'Chuyên gia Truyền thông Số', expertise: 'Digital Media', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'PGS. Trần Bích Ngọc', role: 'Chuyên gia Quan hệ Quốc tế', expertise: 'Chính trị học', img: 'https://images.unsplash.com/photo-1698047681452-08eba22d0c64?auto=format&fit=crop&q=80&w=400' },
];

const newsItems = [
  { tag: 'Tuyển sinh', date: '15/03/2026', title: 'AJC công bố chỉ tiêu tuyển sinh 2026 với nhiều phương thức mới', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' },
  { tag: 'Sự kiện', date: '10/03/2026', title: 'Ngày hội Open Day 2026: Khám phá AJC với hàng trăm hoạt động trải nghiệm', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  { tag: 'Giải thưởng', date: '05/03/2026', title: 'Sinh viên AJC đoạt giải Nhất cuộc thi Báo chí Trẻ Toàn quốc 2026', img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800' },
];

const partners = [
  'VTV', 'VOV', 'Báo Nhân Dân', 'VNExpress', 'Thanh Niên', 'Tuổi Trẻ',
  'Middlesex University', 'Reuters', 'BBC Media', 'NHK Japan', 'Bloomberg',
];

// ─── Main Component ───────────────────────────────────────────────────────────

const AJCLandingPage = () => {
  usePageAnalytics('AJC', 'Học viện Báo chí và Tuyên truyền');
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState<typeof trainingGroups[0] | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollReveal();
  const { ref: majorsRef, isVisible: majorsVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: admissionsRef, isVisible: admissionsVisible } = useScrollReveal();
  const { ref: lifeRef, isVisible: lifeVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal();
  const { ref: facultyRef, isVisible: facultyVisible } = useScrollReveal();
  const { ref: newsRef, isVisible: newsVisible } = useScrollReveal();

  const typewritten = useTypewriter(['Tiếng Nói', 'Tương Lai', 'Câu Chuyện', 'Thế Giới'], 80, 2200);

  // Animated counters
  const c1 = useCounter(62, 1800, statsVisible);
  const c2 = useCounter(2000, 2000, statsVisible);
  const c3 = useCounter(350, 1600, statsVisible);
  const c4 = useCounter(500, 2200, statsVisible);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const stats = [
    { label: 'Năm kinh nghiệm', value: c1, suffix: '+', icon: Calendar },
    { label: 'Sinh viên/Năm', value: c2, suffix: '+', icon: GraduationCap },
    { label: 'Giảng viên', value: c3, suffix: '+', icon: Users },
    { label: 'Giải thưởng', value: c4, suffix: '+', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      {/* ── CSS Animations ── */}
      <style>{`
        @keyframes gradient-shift {
          0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}
        }
        @keyframes float {
          0%,100%{transform:translateY(0px)} 50%{transform:translateY(-20px)}
        }
        @keyframes float-slow {
          0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-30px) rotate(5deg)}
        }
        @keyframes pulse-glow {
          0%,100%{box-shadow:0 0 0 0 rgba(225,29,72,0.4)} 50%{box-shadow:0 0 0 20px rgba(225,29,72,0)}
        }
        @keyframes marquee {
          0%{transform:translateX(0)} 100%{transform:translateX(-50%)}
        }
        @keyframes spin-slow {
          from{transform:rotate(0deg)} to{transform:rotate(360deg)}
        }
        @keyframes shimmer {
          0%{background-position:-200% center} 100%{background-position:200% center}
        }
        @keyframes blob {
          0%,100%{border-radius:60% 40% 30% 70% / 60% 30% 70% 40%}
          50%{border-radius:30% 60% 70% 40% / 50% 60% 30% 60%}
        }
        @keyframes particle {
          0%{transform:translateY(0) scale(1);opacity:1}
          100%{transform:translateY(-100vh) scale(0);opacity:0}
        }
        @keyframes counter-pop {
          0%{transform:scale(0.8);opacity:0} 60%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1}
        }
        @keyframes slide-up {
          from{transform:translateY(40px);opacity:0} to{transform:translateY(0);opacity:1}
        }
        @keyframes reveal-bar {
          from{width:0} to{width:var(--target-w)}
        }

        .animate-gradient { background-size:200% auto; animation:gradient-shift 4s ease infinite; }
        .animate-float { animation:float 4s ease-in-out infinite; }
        .animate-float-slow { animation:float-slow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation:pulse-glow 2s ease infinite; }
        .animate-marquee { animation:marquee 30s linear infinite; }
        .animate-spin-slow { animation:spin-slow 8s linear infinite; }
        .animate-blob { animation:blob 8s ease-in-out infinite; }
        .animate-counter-pop { animation:counter-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .animate-slide-up { animation:slide-up 0.8s cubic-bezier(0.2,0.8,0.2,1) forwards; }
        .shimmer-text {
          background:linear-gradient(90deg,#fff 0%,#fda4af 40%,#fff 60%,#fda4af 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shimmer 3s linear infinite;
        }
        .reveal { opacity:0; transform:translateY(24px); transition:all 0.9s cubic-bezier(0.2,0.8,0.2,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .reveal-left { opacity:0; transform:translateX(-40px); transition:all 1s cubic-bezier(0.2,0.8,0.2,1); }
        .reveal-left.visible { opacity:1; transform:translateX(0); }
        .reveal-right { opacity:0; transform:translateX(40px); transition:all 1s cubic-bezier(0.2,0.8,0.2,1); }
        .reveal-right.visible { opacity:1; transform:translateX(0); }
        .stagger-1 { transition-delay:0.1s; }
        .stagger-2 { transition-delay:0.2s; }
        .stagger-3 { transition-delay:0.3s; }
        .stagger-4 { transition-delay:0.4s; }
        .bg-grid { background-image:radial-gradient(#e2e8f0 1px,transparent 1px); background-size:30px 30px; }
        .uw-container { max-width:1440px; margin-left:auto; margin-right:auto; }
        @media (min-width:1920px){.uw-container{max-width:1600px;}}
        .card-3d { transform-style:preserve-3d; transition:transform 0.4s ease; }
        .card-3d:hover { transform:perspective(800px) rotateY(-5deg) rotateX(3deg) translateY(-4px); }
        .glow-rose { box-shadow:0 0 40px rgba(225,29,72,0.25),0 0 80px rgba(225,29,72,0.1); }
        .cursor-blink { border-right:3px solid #f43f5e; animation:pulse-glow 0.8s ease-in-out infinite; }
        .timeline-line::before { content:''; position:absolute; left:50%; top:0; bottom:0; width:2px; background:linear-gradient(to bottom,transparent,#e11d48,#e11d48,transparent); transform:translateX(-50%); }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''} relative min-h-screen flex items-center overflow-hidden bg-slate-950`}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2560" className="w-full h-full object-cover opacity-30" alt="AJC Campus" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-rose-950/40"></div>
        </div>

        {/* Floating blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose-600/10 rounded-full animate-blob blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full animate-blob blur-3xl pointer-events-none" style={{animationDelay:'3s'}}></div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-rose-400/40 rounded-full pointer-events-none"
            style={{ left:`${8 + i*8}%`, bottom:'0', animation:`particle ${4+i*0.5}s ease-out ${i*0.8}s infinite` }} />
        ))}

        <div className="uw-container px-6 relative z-10 w-full pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-amber-400 font-bold text-[10px] uppercase tracking-widest animate-pulse-glow">
                <Sparkles size={12} className="animate-spin-slow" />
                Trường đại học trọng điểm quốc gia
              </div>

              <div>
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                  Đánh thức <br />
                  <span className="inline-flex items-center gap-1">
                    <span className="text-rose-500 drop-shadow-lg">{typewritten}</span>
                    <span className="cursor-blink inline-block w-1 h-14 ml-1 bg-rose-400"></span>
                  </span>
                  <br />
                  <span className="shimmer-text">Kiến tạo tương lai</span>
                </h2>
              </div>

              <p className="max-w-lg text-lg text-slate-300 leading-relaxed font-medium opacity-80">
                Học viện Báo chí và Tuyên truyền kiến tạo thế hệ lãnh đạo truyền thông bản lĩnh, sẵn sàng làm chủ dòng chảy thông tin toàn cầu.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-rose-600 text-white rounded-xl font-black text-[11px] tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-rose-900/50 hover:bg-rose-500 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">PHƯƠNG THỨC 2026 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-black transition-all backdrop-blur-xl uppercase tracking-widest text-[10px] flex items-center gap-2">
                  <Play size={14} /> Virtual Tour
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/80?u=ajc_rf_${i}`} className="w-10 h-10 rounded-full border-2 border-slate-950 hover:scale-110 transition-transform" alt="Alumni" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-rose-600 border-2 border-slate-950 flex items-center justify-center text-white text-[9px] font-black">+50k</div>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_,i)=><Star key={i} size={10} fill="#fbbf24" className="text-amber-400"/>)}</div>
                  <p className="text-white font-black text-xs uppercase tracking-wider">Mạng lưới tinh hoa</p>
                  <p className="text-slate-400 font-bold text-[10px]">Thành đạt trên toàn cầu</p>
                </div>
              </div>
            </div>

            {/* Right bento */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl card-3d">
                  <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Studio" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white font-black text-xs uppercase tracking-widest">Studio Chuyên nghiệp</span>
                  </div>
                </div>
                <div className="bg-rose-700/20 backdrop-blur-xl rounded-[32px] border border-white/10 p-6 flex flex-col justify-center items-center text-center group hover:bg-rose-700/30 transition-colors duration-500 cursor-default animate-float">
                  <Zap className="text-amber-400 mb-2" size={24} />
                  <h4 className="text-lg font-black text-white italic tracking-tighter leading-tight">Tư duy <br />đột phá</h4>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-[32px] p-8 aspect-square flex flex-col justify-end relative overflow-hidden shadow-2xl group hover:shadow-rose-900/30 transition-all duration-500 hover:-translate-y-2 cursor-default glow-rose card-3d">
                  <div className="absolute top-4 right-4 text-rose-50 group-hover:text-amber-100 group-hover:scale-125 transition-all duration-500"><Trophy size={48} /></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[32px]"></div>
                  <h4 className="text-3xl font-black text-rose-800 tracking-tighter italic leading-[1]">Since <br />1962</h4>
                </div>
                <div className="relative group rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-rose-700/10 hover:border-rose-500/30 transition-colors duration-500 card-3d">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Cuộn xuống</span>
            <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-rose-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE PARTNERS ───────────────────────────────────────────────── */}
      <section className="py-6 bg-white border-y border-slate-100 overflow-hidden">
        <div className="flex gap-0 w-full">
          <div className="flex gap-12 animate-marquee whitespace-nowrap shrink-0">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-slate-400 font-black text-[11px] uppercase tracking-widest hover:text-rose-600 transition-colors cursor-default">{p}</span>
            ))}
          </div>
          <div className="flex gap-12 animate-marquee whitespace-nowrap shrink-0" aria-hidden>
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-slate-400 font-black text-[11px] uppercase tracking-widest">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ─────────────────────────────────────────────────────── */}
      <section ref={statsRef} className={`reveal ${statsVisible ? 'visible' : ''} relative z-20 py-10 overflow-hidden bg-slate-50`}>
        <div className="uw-container px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className={`bg-white backdrop-blur-xl border border-slate-100 rounded-[28px] p-8 shadow-lg hover:shadow-rose-700/10 transition-all hover:-translate-y-2 text-center group cursor-default stagger-${i+1} ${statsVisible ? 'animate-counter-pop' : ''}`}>
                <div className="w-12 h-12 bg-rose-50 group-hover:bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-4 mx-auto transition-colors">
                  <stat.icon size={22} />
                </div>
                <p className="text-4xl xl:text-5xl font-black text-slate-900 tracking-tighter italic tabular-nums">
                  {stat.value.toLocaleString()}<span className="text-rose-500">{stat.suffix}</span>
                </p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────────── */}
      <section id="overview" ref={overviewRef} className={`py-24 bg-grid overflow-hidden`}>
        <div className="uw-container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`reveal-left ${overviewVisible ? 'visible' : ''} relative`}>
              <div className="relative group rounded-[40px] overflow-hidden shadow-2xl border-4 border-white hover:border-rose-100 transition-all duration-700 hover:shadow-rose-900/15 glow-rose">
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1600" alt="AJC Campus" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white font-black text-xs rounded-xl border border-white/20">36 Xuân Thủy, Cầu Giấy, Hà Nội</span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-rose-600 text-white rounded-[20px] px-4 py-3 shadow-xl animate-float-slow">
                <p className="font-black text-sm italic">Top 1</p>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Báo chí Việt Nam</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-[16px] p-4 shadow-xl animate-float">
                <div className="flex gap-1 mb-1">{[...Array(5)].map((_,i)=><Star key={i} size={10} fill="#f59e0b" className="text-amber-400"/>)}</div>
                <p className="font-black text-xs text-slate-900">98% việc làm</p>
                <p className="text-[9px] text-slate-500 font-bold">sau tốt nghiệp</p>
              </div>
            </div>

            <div className={`reveal-right ${overviewVisible ? 'visible' : ''} space-y-7`}>
              <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-[9px] uppercase tracking-widest">Di sản AJC • 60+ năm</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] italic">
                Nâng tầm <br />
                <span className="text-rose-700">Giá trị Việt</span>
              </h2>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Học viện Báo chí và Tuyên truyền khởi nguồn từ sứ mệnh đào tạo thế hệ tinh hoa. Trải qua hơn 60 năm, chúng tôi tự hào là cái nôi của những nhà chuyên gia truyền thông lỗi lạc nhất Việt Nam.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Trí tuệ', sub: 'Học thuật đỉnh cao', icon: BookOpen },
                  { label: 'Bản lĩnh', sub: 'Thực chiến Studio', icon: Target },
                  { label: 'Sáng tạo', sub: 'Đột phá liên tục', icon: Sparkles },
                  { label: 'Kết nối', sub: 'Mạng lưới toàn cầu', icon: Globe },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-[20px] border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group cursor-default">
                    <div className="w-10 h-10 bg-rose-50 group-hover:bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 transition-colors shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base italic tracking-tight">{item.label}</h4>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-3 font-black text-rose-700 group tracking-[0.2em] text-[10px] uppercase mt-2">
                XEM CHI TIẾT <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────────── */}
      <section ref={timelineRef} className={`reveal ${timelineVisible ? 'visible' : ''} py-24 bg-slate-950 overflow-hidden`}>
        <div className="uw-container px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-900/30 text-white font-bold text-[9px] uppercase tracking-widest border border-rose-700/40">Hành trình 60+ năm</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">Dấu ấn lịch sử</h2>
          </div>

          <div className="relative timeline-line">
            <div className="grid gap-8">
              {milestones.filter((_, i) => i % 2 === 0).map((leftM, rowIdx) => {
                const rightM = milestones[rowIdx * 2 + 1];
                return (
                  <div key={rowIdx} className="flex items-center gap-8">
                    {/* Left card */}
                    <div className={`w-1/2 text-right pr-12 stagger-${(rowIdx%4)+1} reveal ${timelineVisible ? 'visible' : ''}`}>
                      <div className="inline-block bg-white/5 border border-white/10 rounded-[24px] p-6 transition-all hover:bg-white/10 hover:border-rose-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-900/20 cursor-default">
                        <span className="text-rose-200 font-black text-3xl italic block mb-2">{leftM.year}</span>
                        <h4 className="text-white font-black text-lg italic mb-2">{leftM.title}</h4>
                        <p className="text-slate-200 text-sm font-medium leading-relaxed">{leftM.desc}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="relative z-10 shrink-0 w-6 h-6 rounded-full bg-rose-600 border-4 border-slate-950 shadow-lg shadow-rose-600/50 hover:scale-150 hover:shadow-rose-500/60 transition-all"></div>
                    {/* Right card */}
                    {rightM && (
                      <div className={`w-1/2 text-left pl-12 stagger-${(rowIdx%4)+2} reveal ${timelineVisible ? 'visible' : ''}`}>
                        <div className="inline-block bg-white/5 border border-white/10 rounded-[24px] p-6 transition-all hover:bg-white/10 hover:border-rose-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-900/20 cursor-default">
                          <span className="text-rose-200 font-black text-3xl italic block mb-2">{rightM.year}</span>
                          <h4 className="text-white font-black text-lg italic mb-2">{rightM.title}</h4>
                          <p className="text-slate-200 text-sm font-medium leading-relaxed">{rightM.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAJORS ───────────────────────────────────────────────────────────── */}
      <section id="majors" ref={majorsRef} className={`reveal ${majorsVisible ? 'visible' : ''} py-24 bg-slate-900`}>
        <div className="uw-container px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-900/30 text-rose-400 font-bold text-[9px] uppercase tracking-widest border border-rose-800/30">Chương trình đào tạo</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">Vũ trụ đào tạo</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest italic leading-relaxed">Đa phương thức · Liên ngành · Thực chiến</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {trainingGroups.map((group, i) => (
              <div key={i} className={`group relative bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-900/20 cursor-default stagger-${i+1}`}>
                {/* Glow top bar */}
                <div className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${group.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-full`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white mb-6 shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                  <group.icon size={26} />
                </div>
                <h3 className="text-xl font-black text-white mb-2 italic shrink-0">{group.title}</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-5">{group.items.length} chuyên ngành</p>
                <ul className="space-y-3 mb-8 grow">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 font-bold text-xs group-hover:text-slate-300 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full ${group.bg} shrink-0`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedMajor(group)}
                  className={`w-full py-3.5 border border-white/10 group-hover:border-rose-500 rounded-xl text-white font-black text-[9px] uppercase tracking-widest transition-all mt-auto group-hover:bg-rose-600/10`}
                >
                  Chi tiết ngành →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────────── */}
      <section ref={featuresRef} className={`reveal ${featuresVisible ? 'visible' : ''} py-24 bg-white overflow-hidden`}>
        <div className="uw-container px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-[9px] uppercase tracking-widest">Tại sao chọn AJC?</div>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 italic">Sống với đam mê</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-6">
              <p className="text-slate-500 font-medium text-base leading-relaxed">
                Tại AJC, mỗi cá tính là một mảnh ghép của sự sáng tạo. Chúng tôi dạy bạn cách dùng tiếng nói để thay đổi xã hội.
              </p>

              {[
                { label: 'Việc làm sau tốt nghiệp', value: 98 },
                { label: 'Sinh viên hài lòng', value: 95 },
                { label: 'Được nhận học bổng', value: 72 },
              ].map((bar, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-500 text-[10px] uppercase tracking-widest">{bar.label}</span>
                    <span className="text-xl font-black text-rose-700 italic">{bar.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-rose-500 to-rose-700 rounded-full transition-all duration-1000 delay-300`}
                      style={{ width: featuresVisible ? `${bar.value}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-2/3 grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Camera, bg: 'bg-rose-50', border: 'border-rose-100/50', iconColor: 'text-rose-700', title: 'Kinh đô hình ảnh', desc: 'Hệ thống phim trường, phòng lab 4K thực hành hiện đại cho mọi ý tưởng.', badge: 'Studio 4K' },
                  { icon: Globe, bg: 'bg-slate-950', border: '', iconColor: 'text-slate-200', title: 'Tầm nhìn toàn cầu', desc: 'Cơ hội trao đổi sinh viên tại Anh, Úc và Hàn Quốc từ năm hai.', badge: '20+ Đối tác QT' },
                  { icon: Mic, bg: 'bg-blue-50', border: 'border-blue-100/50', iconColor: 'text-blue-700', title: 'Phòng thu âm thanh', desc: 'Studio phát thanh chuyên nghiệp tiêu chuẩn quốc tế.', badge: 'VOV Partnership' },
                  { icon: Tv, bg: 'bg-amber-50', border: 'border-amber-100/50', iconColor: 'text-amber-700', title: 'Trường quay TV', desc: 'Cộng tác trực tiếp với VTV và các đài truyền hình lớn.', badge: 'VTV Partnership' },
                ].map((f, i) => (
                  <div key={i} className={`${f.bg} rounded-[32px] p-8 group border ${f.border || 'border-white/5'} shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-default relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-[8px] font-bold uppercase tracking-widest text-white/60">{f.badge}</div>
                    <f.icon size={36} className={`${f.iconColor} mb-4 group-hover:scale-110 transition-transform`} />
                    <h3 className={`text-xl font-black mb-2 italic ${f.bg === 'bg-slate-950' ? 'text-white' : 'text-slate-900'}`}>{f.title}</h3>
                    <p className={`font-bold text-xs leading-relaxed ${f.bg === 'bg-slate-950' ? 'text-slate-400' : 'text-slate-500'}`}>{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-400 rounded-[32px] p-10 flex flex-col sm:flex-row items-center gap-8 shadow-xl hover:shadow-2xl hover:shadow-amber-900/20 transition-all hover:-translate-y-1 cursor-default">
                <div className="sm:w-1/2">
                  <Award size={56} className="text-slate-900 mb-4 animate-float-slow" />
                  <h3 className="text-3xl font-black text-slate-900 mb-2 italic leading-tight">Bằng cấp <br />Vương Quốc Anh</h3>
                  <p className="text-slate-900 font-black uppercase text-[9px] tracking-widest opacity-70 italic">Middlesex University London</p>
                </div>
                <div className="sm:w-1/2 rounded-[20px] overflow-hidden aspect-video w-full border-4 border-white/30 shadow-inner group">
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="International" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────────────────────────────── */}
      <section ref={facultyRef} className={`reveal ${facultyVisible ? 'visible' : ''} py-24 bg-slate-50`}>
        <div className="uw-container px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-[9px] uppercase tracking-widest">Đội ngũ chuyên gia</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Giảng viên tinh hoa</h2>
            <p className="text-slate-500 text-sm font-medium max-w-lg mx-auto leading-relaxed">350+ giảng viên là những chuyên gia hàng đầu đang trực tiếp làm việc trong ngành truyền thông.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <div key={i} className={`group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-rose-900/10 transition-all hover:-translate-y-3 cursor-default stagger-${i+1} ${facultyVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                <div className="relative overflow-hidden aspect-square">
                  <img src={f.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={f.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">{f.expertise}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-black text-slate-900 text-sm italic leading-tight">{f.name}</h4>
                  <p className="text-rose-600 font-bold text-[10px] uppercase tracking-widest mt-1">{f.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 border-2 border-slate-200 rounded-xl font-black text-slate-700 text-[10px] uppercase tracking-widest hover:border-rose-300 hover:text-rose-700 hover:bg-rose-50 transition-all">
              Xem tất cả giảng viên →
            </button>
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS ───────────────────────────────────────────────────────── */}
      <section id="admissions" ref={admissionsRef} className={`reveal ${admissionsVisible ? 'visible' : ''} py-24 bg-white`}>
        <div className="uw-container px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-[9px] uppercase tracking-widest">Tuyển sinh 2026</div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Cánh cửa AJC</h2>
          </div>

          <div className="bg-slate-900 rounded-[48px] shadow-2xl overflow-hidden border border-slate-800">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-white mb-10 italic">Phương thức xét tuyển</h3>
                <div className="space-y-8">
                  {[
                    { num:'01', title:'Xét tuyển THPT', desc:'Dựa trên điểm thi tổ hợp khối C, D.', icon: GraduationCap, color:'bg-rose-600' },
                    { num:'02', title:'Xét học bạ (Đợt sớm)', desc:'Dành cho HS trường chuyên, lớp chọn.', icon: BookOpen, color:'bg-blue-600' },
                    { num:'03', title:'Chứng chỉ Quốc tế', desc:'IELTS 6.5+ hoặc tương đương.', icon: Globe, color:'bg-emerald-600' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group cursor-default hover:bg-white/5 p-4 rounded-[20px] transition-colors -mx-4">
                      <div className={`shrink-0 w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-lg italic tracking-tight">{item.title}</h4>
                        <p className="text-slate-400 text-sm font-medium italic mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 md:p-16 bg-white flex flex-col justify-center">
                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight italic">Tổ hợp môn xét tuyển</h3>
                <div className="grid gap-4">
                  {[
                    { code:'C15', name:'Ngữ văn, Lịch sử, GDCD', color:'border-rose-200 bg-rose-50' },
                    { code:'D01', name:'Ngữ văn, Toán, Tiếng Anh', color:'border-blue-200 bg-blue-50' },
                    { code:'C03', name:'Ngữ văn, Lịch sử, Địa lý', color:'border-amber-200 bg-amber-50' },
                  ].map((code, i) => (
                    <div key={i} className={`px-6 py-5 rounded-[20px] border-2 ${code.color} flex items-center justify-between transition-all hover:scale-[1.02] hover:shadow-md cursor-default group`}>
                      <div className="font-black text-2xl italic tracking-tighter text-slate-900 group-hover:text-rose-700 transition-colors">{code.code}</div>
                      <div className="font-bold text-slate-500 text-[10px] tracking-widest uppercase text-right max-w-[140px] leading-relaxed">{code.name}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-rose-50 rounded-[24px] border border-rose-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Bell size={16} className="text-rose-600 animate-pulse" />
                    <span className="text-rose-700 font-black text-[10px] uppercase tracking-widest">Lịch tuyển sinh 2026</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { date:'01/03 - 30/04', label:'Xét học bạ đợt sớm' },
                      { date:'18/07 - 20/08', label:'Xét tuyển THPT' },
                      { date:'20/08 - 05/09', label:'Xét tuyển bổ sung' },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Clock size={12} className="text-rose-400 shrink-0" />
                        <span className="text-rose-600 font-black text-[10px]">{t.date}:</span>
                        <span className="text-slate-600 font-bold text-[10px]">{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section ref={testimonialsRef} className={`reveal ${testimonialsVisible ? 'visible' : ''} py-24 bg-slate-950 overflow-hidden`}>
        <div className="uw-container px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-900/30 text-rose-400 font-bold text-[9px] uppercase tracking-widest border border-rose-800/30">Cựu sinh viên chia sẻ</div>
            <h2 className="text-4xl font-black text-white tracking-tighter italic">Tiếng nói từ AJC</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className={`transition-all duration-700 ${i === testimonialIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-14 relative">
                  <Quote size={60} className="text-rose-600/20 absolute top-8 left-8" />
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(t.rating)].map((_,j)=><Star key={j} size={14} fill="#f43f5e" className="text-rose-500"/>)}
                  </div>
                  <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed italic relative z-10 mb-10">"{t.text}"</p>
                  <div className="flex items-center gap-4 relative z-10">
                    <img src={`https://i.pravatar.cc/120?u=ajc_t_${i}`} className="w-14 h-14 rounded-full border-2 border-rose-500" alt={t.name} />
                    <div>
                      <p className="text-white font-black italic tracking-tight">{t.name}</p>
                      <p className="text-rose-400 font-bold text-[10px] uppercase tracking-widest">{t.role}</p>
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
                  className={`rounded-full transition-all ${i === testimonialIdx ? 'w-8 h-2 bg-rose-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
              ))}
              <button onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIFE ─────────────────────────────────────────────────────────────── */}
      <section id="life" ref={lifeRef} className={`reveal ${lifeVisible ? 'visible' : ''} py-24 bg-white`}>
        <div className="uw-container px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-[9px] uppercase tracking-widest mb-4">Đời sống sinh viên</div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 italic leading-tight">Nhịp đập <br />Radio & TV</h2>
              <p className="text-slate-500 text-base font-bold italic opacity-60">Thanh xuân rực rỡ dưới góc nhìn đa phương tiện.</p>
            </div>
            <button className="px-8 py-3 border-[3px] border-slate-900 rounded-xl font-black hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-[9px] shrink-0">
              Lịch sự kiện
            </button>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 relative rounded-[32px] overflow-hidden shadow-xl aspect-video border-4 border-slate-50 group">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Festival" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                <div className="space-y-3">
                  <div className="px-3 py-1 bg-rose-600 text-white font-black text-[8px] w-fit rounded-full uppercase tracking-widest">Tiêu điểm</div>
                  <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">AJC Sóng Trẻ Festival</h4>
                  <p className="text-white/70 font-bold text-xs max-w-md">Lễ hội truyền thông lớn nhất trong năm, quy tụ hàng nghìn sinh viên sáng tạo.</p>
                </div>
              </div>
              {/* Play button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:scale-125 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100">
                <Play size={24} fill="white" />
              </button>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white border-2 border-slate-100 rounded-[32px] p-8 text-slate-900 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-rose-100 hover:shadow-rose-900/10 transition-all hover:-translate-y-1 cursor-default flex-1">
                <h4 className="text-3xl font-black italic tracking-tighter relative z-10">Tài năng <br /><span className="text-rose-700">AJC</span></h4>
                <ul className="space-y-4 font-bold uppercase text-[9px] tracking-widest relative z-10 opacity-80 mt-6">
                  {['CLB Sóng Trẻ', 'CLB Truyền thông CJC', 'CLB Diễn thuyết STV', 'CLB Điện ảnh AJC Film'].map((c, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-rose-600 transition-colors cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>{c}
                    </li>
                  ))}
                </ul>
                <Mic className="absolute -bottom-6 -right-6 text-slate-100 opacity-60" size={140} />
              </div>

              <div className="bg-rose-600 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl hover:shadow-rose-900/30 hover:-translate-y-1 transition-all cursor-default group">
                <Flame size={32} className="mb-4 group-hover:scale-125 transition-transform" />
                <h4 className="text-2xl font-black italic tracking-tighter mb-2">Học bổng <br />AJC Stars</h4>
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Trị giá lên đến 100% học phí</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ─────────────────────────────────────────────────────────────── */}
      <section ref={newsRef} className={`reveal ${newsVisible ? 'visible' : ''} py-24 bg-slate-50`}>
        <div className="uw-container px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-[9px] uppercase tracking-widest mb-4">Tin tức & Sự kiện</div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Dòng chảy AJC</h2>
            </div>
            <button className="px-8 py-3 border-[3px] border-slate-200 rounded-xl font-black hover:border-rose-300 hover:text-rose-700 transition-all uppercase tracking-widest text-[9px] shrink-0">
              Xem tất cả →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((n, i) => (
              <div key={i} className={`group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-900/10 transition-all hover:-translate-y-2 cursor-default stagger-${i+1} ${newsVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={n.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={n.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-rose-600 text-white font-black text-[8px] rounded-full uppercase tracking-widest">{n.tag}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Clock size={10} />{n.date}
                  </div>
                  <h4 className="font-black text-slate-900 text-base italic leading-snug group-hover:text-rose-700 transition-colors">{n.title}</h4>
                  <div className="flex items-center gap-2 mt-4 text-rose-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Đọc thêm <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION ─────────────────────────────────────────────────────── */}
      <section id="consultation-form" className="py-24 bg-white">
        <div className="uw-container px-6">
          <div className="bg-slate-900 rounded-[48px] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
            {/* Animated bg blobs inside */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl pointer-events-none animate-blob" style={{animationDelay:'4s'}}></div>

            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
              <div className="w-16 h-16 bg-rose-600 text-white flex items-center justify-center font-black text-2xl rounded-2xl mb-8 rotate-3 animate-pulse-glow shadow-xl">AJC</div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] italic mb-6">Khởi đầu <br />rạng rỡ <br />tại AJC</h2>
              <p className="text-slate-400 text-base font-bold italic opacity-70 mb-8 max-w-sm">Tư vấn lộ trình học tập tối ưu, hoàn toàn miễn phí.</p>

              <div className="space-y-4">
                {[
                  { icon: MapPin, text: '36 Xuân Thủy, Cầu Giấy, HN' },
                  { icon: Globe, text: 'ajc.hcma.vn' },
                  { icon: Heart, text: 'Tư vấn miễn phí 24/7' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity cursor-default">
                    <item.icon size={14} className="text-rose-400 shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-10 md:p-16 relative z-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                  <div className="w-24 h-24 bg-rose-50 rounded-[32px] flex items-center justify-center text-rose-500 mb-4 shadow-xl animate-pulse-glow">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 italic">Gửi thành công!</h3>
                  <p className="text-slate-500 text-sm font-medium">Chúng tôi sẽ liên hệ bạn trong vòng 24 giờ.</p>
                  <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-rose-700 transition-colors">Quay lại</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black text-slate-900 italic mb-8">Đăng ký tư vấn</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Tên thí sinh</label>
                      <input type="text" placeholder="Nguyễn Văn A" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-rose-200 outline-none text-sm font-bold transition-colors hover:bg-slate-100" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Điện thoại</label>
                      <input type="tel" placeholder="09xx..." className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-rose-200 outline-none text-sm font-bold transition-colors hover:bg-slate-100" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Email</label>
                    <input type="email" placeholder="student@ajc.edu.vn" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-rose-200 outline-none text-sm font-bold transition-colors hover:bg-slate-100" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Ngành quan tâm</label>
                    <select className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-rose-200 outline-none text-sm font-bold text-slate-600 transition-colors hover:bg-slate-100">
                      <option value="">Chọn ngành...</option>
                      {trainingGroups.map(g => g.items.map(item => (
                        <option key={item}>{g.title} – {item}</option>
                      )))}
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 bg-rose-600 text-white rounded-[20px] font-black text-sm tracking-widest hover:bg-rose-500 transition-all shadow-xl hover:shadow-rose-600/40 flex items-center justify-center gap-3 group">
                    NHẬN TƯ VẤN MIỄN PHÍ <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 font-medium">Cam kết bảo mật thông tin · Không spam</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ────────────────────────────────────────────────────────────── */}
      {selectedMajor && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" onClick={() => setSelectedMajor(null)}></div>
          <div className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className={`h-36 bg-gradient-to-br ${selectedMajor.color} relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize:'20px 20px'}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <button onClick={() => setSelectedMajor(null)} className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white flex items-center justify-center transition-all z-10 hover:scale-110">
                <X size={18} />
              </button>
            </div>
            <div className="px-10 pb-10 relative">
              <div className={`w-20 h-20 -mt-10 mb-6 bg-gradient-to-br ${selectedMajor.color} text-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-white relative z-10 hover:scale-110 transition-transform`}>
                <selectedMajor.icon size={36} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter mb-2">Nhóm ngành {selectedMajor.title}</h3>
              <p className="text-rose-600 font-bold text-[10px] uppercase tracking-widest mb-6 border-b border-rose-100 pb-4 inline-block">Mã trường: HBT · Học viện Báo chí</p>
              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-8">{selectedMajor.details}</p>
              <div className="bg-slate-50 rounded-[20px] p-6 border border-slate-100 mb-6">
                <h4 className="font-black text-slate-800 text-sm mb-4 uppercase tracking-widest">Các chuyên ngành</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMajor.items.map((item, idx) => (
                    <span key={idx} className="bg-white border-2 border-slate-100 text-slate-700 text-[11px] font-bold px-4 py-2 rounded-full shadow-sm hover:border-rose-200 hover:text-rose-700 transition-colors cursor-default">{item}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => { setSelectedMajor(null); setTimeout(() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
                  className={`bg-gradient-to-r ${selectedMajor.color} text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2`}
                >
                  Đăng ký tư vấn <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AJCLandingPage;
