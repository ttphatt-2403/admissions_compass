import React, { useState, useEffect, useRef } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Cog,
  Car,
  Briefcase,
  Building2,
  Users,
  MapPin,
  Calendar,
  Trophy,
  Sparkles,
  Zap,
  Bot,
  GraduationCap,
  Wrench,
  Factory,
  BarChart3,
  BookOpen,
} from 'lucide-react';

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useCounter(target: number, visible: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return count;
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Stat counter card ────────────────────────────────────────────────────────

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  visible: boolean;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ target, suffix, label, icon: Icon, visible, delay = 0 }) => {
  const count = useCounter(target, visible);
  return (
    <div
      className="flex flex-col items-center p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:scale-105 hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s, scale 0.3s`,
      }}
    >
      <Icon className="w-8 h-8 text-cyan-300 mb-3" />
      <p className="text-4xl font-black text-white">
        {count.toLocaleString('vi-VN')}{suffix}
      </p>
      <p className="text-cyan-200 text-sm mt-1 text-center">{label}</p>
    </div>
  );
};

// ─── Score bar ────────────────────────────────────────────────────────────────

interface ScoreBarProps {
  label: string;
  score: number;
  max?: number;
  visible: boolean;
  delay?: number;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ label, score, max = 30, visible, delay = 0 }) => {
  const pct = Math.round((score / max) * 100);
  return (
    <div className="mb-4" style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${delay}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-slate-900 text-sm">{label}</span>
        <span className="font-black text-cyan-600 text-sm">~{score}</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
          style={{
            width: visible ? `${pct}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

const employers = ['Samsung', 'Canon', 'Toyota', 'Foxconn', 'LG', 'FPT Software'];

const Marquee: React.FC = () => (
  <div className="overflow-hidden py-4 relative">
    <div
      className="flex gap-8 whitespace-nowrap"
      style={{ animation: 'marquee 20s linear infinite' }}
    >
      {[...employers, ...employers, ...employers].map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm font-bold text-slate-700 text-sm hover:border-cyan-400 hover:text-cyan-700 hover:shadow-cyan-100 transition-all cursor-default select-none"
        >
          <Building2 className="w-4 h-4 text-cyan-500" />
          {name}
        </span>
      ))}
    </div>
  </div>
);

// ─── Particle dots (hero decoration) ─────────────────────────────────────────

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  top: `${Math.round((i * 37 + 5) % 95)}%`,
  left: `${Math.round((i * 53 + 8) % 95)}%`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
  delay: `${(i * 0.4) % 3}s`,
  dur: `${3 + (i % 4)}s`,
}));

// ─── Data ─────────────────────────────────────────────────────────────────────

const reasons = [
  {
    title: 'Chương trình đào tạo gắn với thực hành',
    desc: 'Sinh viên được thực hành tại các phòng lab, xưởng kỹ thuật và trung tâm nghiên cứu hiện đại.',
    icon: Wrench,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Hợp tác doanh nghiệp rộng',
    desc: 'Trường hợp tác với nhiều doanh nghiệp lớn trong và ngoài nước như Samsung, Canon, Toyota, Foxconn.',
    icon: Factory,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Cơ hội việc làm cao',
    desc: 'Sinh viên tốt nghiệp có cơ hội làm việc tại các tập đoàn công nghệ và nhà máy sản xuất lớn.',
    icon: Briefcase,
    color: 'from-orange-500 to-rose-500',
  },
];

const groups = [
  {
    title: 'Nhóm Công nghệ thông tin',
    icon: Cpu,
    iconBg: 'bg-cyan-600',
    items: ['Công nghệ thông tin', 'Khoa học máy tính', 'Hệ thống thông tin', 'Kỹ thuật phần mềm'],
  },
  {
    title: 'Nhóm Cơ khí - tự động hóa',
    icon: Cog,
    iconBg: 'bg-indigo-600',
    items: ['Công nghệ kỹ thuật cơ khí', 'Cơ điện tử', 'Tự động hóa', 'Robot và hệ thống thông minh'],
  },
  {
    title: 'Nhóm Điện - điện tử',
    icon: Zap,
    iconBg: 'bg-amber-500',
    items: ['Công nghệ kỹ thuật điện', 'Công nghệ kỹ thuật điện tử - viễn thông'],
  },
  {
    title: 'Nhóm Công nghệ ô tô',
    icon: Car,
    iconBg: 'bg-rose-600',
    items: ['Công nghệ kỹ thuật ô tô', 'Kỹ thuật cơ khí động lực'],
  },
  {
    title: 'Nhóm Kinh tế - quản trị',
    icon: BarChart3,
    iconBg: 'bg-emerald-600',
    items: ['Quản trị kinh doanh', 'Marketing', 'Kế toán', 'Tài chính ngân hàng'],
  },
];

const featuredMajors = [
  {
    title: 'Công nghệ thông tin',
    desc: 'Đào tạo lập trình, phát triển phần mềm, hệ thống thông tin và trí tuệ nhân tạo.',
    score: 26,
    icon: Cpu,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Cơ điện tử',
    desc: 'Ngành học kết hợp cơ khí, điện tử và lập trình để phát triển hệ thống tự động.',
    score: 25,
    icon: Bot,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Công nghệ ô tô',
    desc: 'Sinh viên được đào tạo về thiết kế, vận hành và bảo trì các hệ thống ô tô hiện đại.',
    score: 25,
    icon: Car,
    gradient: 'from-orange-500 to-rose-600',
  },
];

const admissions = [
  'Xét điểm thi tốt nghiệp THPT',
  'Xét học bạ THPT',
  'Xét tuyển kết hợp chứng chỉ quốc tế',
  'Tuyển thẳng theo quy định của Bộ GD&ĐT',
];

const scoreData = [
  { label: 'Công nghệ thông tin', score: 26 },
  { label: 'Công nghệ kỹ thuật ô tô', score: 25 },
  { label: 'Cơ điện tử', score: 25 },
  { label: 'Marketing', score: 25 },
];

const facilities = [
  { title: 'Phòng lab robot', icon: Bot },
  { title: 'Trung tâm thực hành ô tô', icon: Car },
  { title: 'Xưởng cơ khí', icon: Cog },
  { title: 'Phòng lab công nghệ thông tin', icon: Cpu },
];

const clubs = ['CLB Robotics', 'CLB Lập trình', 'CLB Khởi nghiệp', 'CLB Ngoại ngữ'];
const events = ['Hội trại sinh viên', 'Cuộc thi sáng tạo kỹ thuật', 'Ngày hội việc làm'];
const skills = ['Lập trình', 'Thiết kế kỹ thuật', 'Quản lý dự án', 'Phân tích dữ liệu'];

// ─── Main component ───────────────────────────────────────────────────────────

const HAUILandingPage: React.FC = () => {
  usePageAnalytics('HAUI', 'Đại học Công nghiệp Hà Nội');
  const [submitted, setSubmitted] = useState(false);

  const statsSection = useScrollReveal();
  const scoreSection = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="font-sans bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes floatBlob {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(22px, -32px) scale(1.08); }
          66%  { transform: translate(-20px, 18px) scale(0.94); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.6;  transform: scale(1.5); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .blob-1 { animation: floatBlob 12s ease-in-out infinite; }
        .blob-2 { animation: floatBlob 15s ease-in-out infinite reverse; }
        .blob-3 { animation: floatBlob 18s ease-in-out infinite 2s; }
        .animated-gradient {
          background-size: 200% 200%;
          animation: gradientShift 9s ease infinite;
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[88vh] flex items-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-cyan-700/40 via-blue-800/35 to-fuchsia-700/30 pointer-events-none" />

        {/* Floating blobs */}
        <div className="blob-1 absolute -top-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/25 blur-3xl pointer-events-none" />
        <div className="blob-2 absolute top-16 right-0 w-96 h-96 rounded-full bg-fuchsia-500/25 blur-3xl pointer-events-none" />
        <div className="blob-3 absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-blue-500/25 blur-3xl pointer-events-none" />

        {/* Particle dots */}
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `pulseDot ${p.dur} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> Tuyển sinh 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
              Đại học Công nghiệp Hà Nội&nbsp;—
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Nơi đào tạo kỹ sư &amp; chuyên gia công nghệ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
              Đại học Công nghiệp Hà Nội là một trong những trường đại học kỹ thuật – công nghệ lớn nhất Việt Nam,
              đào tạo hàng chục nghìn sinh viên mỗi năm trong các lĩnh vực công nghệ, kỹ thuật và kinh tế.
              Trường nổi bật với chương trình đào tạo gắn liền với thực hành và doanh nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-xl hover:scale-[1.03] hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
              >
                Khám phá ngành học <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 text-white font-bold text-lg transition-all"
              >
                Đăng ký tư vấn tuyển sinh
              </button>
            </div>

            {/* Quick meta */}
            <div className="flex flex-wrap gap-5 mt-10 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> Bắc Từ Liêm, Hà Nội</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> Thành lập 1898</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-cyan-400" /> 30.000+ sinh viên</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-cyan-400" /> Bộ Công Thương</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Stats ── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Đại học Công nghiệp Hà Nội qua con số</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Hơn 125 năm xây dựng và phát triển, HAUI tự hào là một trong những trung tâm đào tạo kỹ thuật – công nghệ hàng đầu Việt Nam.</p>
          </Reveal>
          <div ref={statsSection.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard target={30000} suffix="+" label="Sinh viên đang học" icon={Users} visible={statsSection.visible} delay={0} />
            <StatCard target={350}   suffix="+"  label="Giảng viên cơ hữu"  icon={GraduationCap} visible={statsSection.visible} delay={120} />
            <StatCard target={500}   suffix="+"  label="Giải thưởng & chứng nhận" icon={Trophy} visible={statsSection.visible} delay={240} />
            <StatCard target={1898}  suffix=""   label="Năm thành lập (tiền thân)" icon={BookOpen} visible={statsSection.visible} delay={360} />
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-slate-900">Tổng quan về trường</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Đại học Công nghiệp Hà Nội là trường đại học công lập trực thuộc Bộ Công Thương. Trường có lịch sử phát triển lâu đời và là một trong những trung tâm đào tạo kỹ thuật – công nghệ lớn của Việt Nam.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Trường đào tạo đa ngành, đặc biệt mạnh về kỹ thuật, công nghệ và công nghiệp với quan hệ hợp tác chặt chẽ cùng các tập đoàn đa quốc gia.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Thành lập (tiền thân)', value: '1898', bg: 'bg-cyan-600' },
                  { label: 'Loại hình', value: 'Đại học công lập', bg: 'bg-indigo-600' },
                  { label: 'Quy mô', value: '30.000+ sinh viên', bg: 'bg-fuchsia-600' },
                  { label: 'Cơ sở chính', value: 'Bắc Từ Liêm, Hà Nội', bg: 'bg-orange-500' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-5 rounded-2xl ${item.bg} text-white hover:scale-105 hover:shadow-xl transition-all duration-300`}
                  >
                    <p className="text-sm text-white/75">{item.label}</p>
                    <p className="text-xl font-black mt-1 text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Vì sao nên chọn Đại học Công nghiệp Hà Nội</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 120}>
                <div className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-cyan-300 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${reason.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Employer marquee ── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Doanh nghiệp hợp tác tuyển dụng</p>
          </Reveal>
          <Marquee />
        </div>
      </section>

      {/* ── Major groups ── */}
      <section id="majors" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Các nhóm ngành đào tạo</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Đại học Công nghiệp Hà Nội đào tạo nhiều nhóm ngành quan trọng trong lĩnh vực kỹ thuật và kinh tế.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {groups.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300 h-full">
                  <div className={`w-11 h-11 rounded-lg ${group.iconBg} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured majors ── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ngành học nổi bật</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredMajors.map((major, i) => (
              <Reveal key={major.title} delay={i * 130}>
                <div className="group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${major.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <major.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{major.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed flex-1">{major.desc}</p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/15 text-cyan-200 font-semibold text-sm self-start">
                    Điểm chuẩn tham khảo: ~{major.score}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admissions ── */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 h-full">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-slate-900">Phương thức tuyển sinh</h2>
              <ul className="space-y-3">
                {admissions.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="p-7 rounded-2xl border border-slate-200 bg-white overflow-x-auto h-full">
              <h3 className="text-2xl font-extrabold mb-5 text-slate-900">Tổ hợp xét tuyển phổ biến</h3>
              <table className="w-full min-w-[300px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase">
                    <th className="py-2 pr-4">Tổ hợp</th>
                    <th className="py-2">Môn thi</th>
                  </tr>
                </thead>
                <tbody className="text-slate-800">
                  {[
                    { code: 'A00', subjects: 'Toán · Vật lý · Hóa học' },
                    { code: 'A01', subjects: 'Toán · Vật lý · Tiếng Anh' },
                    { code: 'D01', subjects: 'Toán · Văn · Tiếng Anh' },
                    { code: 'C01', subjects: 'Toán · Văn · Vật lý' },
                  ].map((row) => (
                    <tr key={row.code} className="border-b border-slate-100 last:border-0">
                      <td className="py-3 pr-4 font-bold text-cyan-600">{row.code}</td>
                      <td className="py-3 text-slate-700">{row.subjects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Score bars ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Điểm chuẩn tham khảo</h2>
            <p className="text-slate-500 mt-2">Điểm chuẩn theo thang 30, năm gần nhất (tham khảo).</p>
          </Reveal>
          <div ref={scoreSection.ref} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm max-w-2xl">
            {scoreData.map((item, i) => (
              <ScoreBar
                key={item.label}
                label={item.label}
                score={item.score}
                visible={scoreSection.visible}
                delay={i * 150}
              />
            ))}
          </div>
          <p className="text-slate-500 mt-4 text-sm">Các ngành công nghệ thường có điểm chuẩn cao hơn.</p>
        </div>
      </section>

      {/* ── Curriculum & Skills ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl p-6 border border-slate-200 bg-slate-50 h-full">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900">Chương trình đào tạo</h2>
              <ul className="space-y-3 text-slate-700">
                {[
                  { text: 'Kết hợp lý thuyết và thực hành', color: 'text-indigo-600' },
                  { text: 'Gắn với nhu cầu thực tế của doanh nghiệp', color: 'text-cyan-600' },
                  { text: 'Cập nhật công nghệ mới liên tục', color: 'text-blue-600' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${item.color}`} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-2xl p-6 border border-slate-200 bg-slate-50 h-full">
              <h3 className="text-2xl font-extrabold mb-4 text-slate-900">Kỹ năng sinh viên được trang bị</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white border border-slate-200 font-semibold text-slate-700 text-sm hover:border-cyan-400 hover:text-cyan-700 hover:shadow-sm transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="py-20 bg-gradient-to-r from-indigo-950 via-blue-950 to-cyan-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Cơ sở vật chất</h2>
            <p className="text-slate-300 max-w-3xl mt-3">
              Trường sở hữu nhiều phòng thí nghiệm và trung tâm nghiên cứu hiện đại, giúp sinh viên có môi trường học tập thực tế.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-white/20 bg-white/8 backdrop-blur-sm hover:bg-white/15 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl transition-all duration-300 h-full">
                  <item.icon className="w-8 h-8 text-cyan-300 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-white">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student life ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-slate-900">Hoạt động sinh viên</h2>
            <p className="text-slate-600 text-lg mb-6">Sinh viên Đại học Công nghiệp Hà Nội tham gia nhiều hoạt động ngoại khóa và câu lạc bộ đa dạng.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {clubs.map((club) => (
                <div
                  key={club}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-sm transition-all cursor-default"
                >
                  {club}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h3 className="text-2xl font-extrabold mb-4 text-slate-900">Sự kiện nổi bật</h3>
            <ul className="space-y-3">
              {events.map((event) => (
                <li
                  key={event}
                  className="p-4 rounded-xl border border-cyan-100 bg-cyan-50 flex items-center gap-3 hover:border-cyan-300 hover:shadow-sm transition-all"
                >
                  <Calendar className="w-5 h-5 text-cyan-700 shrink-0" />
                  <span className="font-medium text-slate-800">{event}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Career ── */}
      <section id="career" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Cơ hội nghề nghiệp</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Công nghệ thông tin',
                jobs: ['Software Engineer', 'Web Developer', 'Data Analyst'],
                icon: Cpu,
                accent: 'border-cyan-200 hover:border-cyan-400',
                iconColor: 'text-cyan-600',
              },
              {
                title: 'Kỹ thuật',
                jobs: ['Kỹ sư cơ khí', 'Kỹ sư tự động hóa', 'Kỹ sư ô tô'],
                icon: Wrench,
                accent: 'border-indigo-200 hover:border-indigo-400',
                iconColor: 'text-indigo-600',
              },
              {
                title: 'Kinh tế',
                jobs: ['Chuyên viên marketing', 'Quản trị doanh nghiệp', 'Kế toán'],
                icon: BarChart3,
                accent: 'border-emerald-200 hover:border-emerald-400',
                iconColor: 'text-emerald-600',
              },
            ].map((col, i) => (
              <Reveal key={col.title} delay={i * 120}>
                <div className={`group p-6 rounded-2xl border bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full ${col.accent}`}>
                  <col.icon className={`w-7 h-7 ${col.iconColor} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{col.title}</h3>
                  <ul className="space-y-2 text-slate-700">
                    {col.jobs.map((j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className={`${col.iconColor} font-bold`}>•</span> {j}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="text-2xl font-extrabold mb-5 text-slate-900">Doanh nghiệp tuyển dụng nổi bật</h3>
          </Reveal>
          <Marquee />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="final-cta" className="py-20 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
              Bạn muốn trở thành kỹ sư, chuyên gia công nghệ hoặc nhà quản lý trong tương lai?
            </h2>
            <p className="text-cyan-100 text-lg leading-relaxed">
              Đại học Công nghiệp Hà Nội sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng để thành công trong sự nghiệp.
            </p>
            <ul className="mt-6 space-y-2 text-cyan-100">
              {['Hơn 125 năm đào tạo', 'Gắn kết chặt chẽ với doanh nghiệp', 'Tỉ lệ việc làm sau tốt nghiệp cao'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-5 text-slate-900">Đăng ký nhận tư vấn tuyển sinh</h3>
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
                  Đăng ký thành công. Nhà trường sẽ liên hệ với bạn sớm.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition"
                  />
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none bg-white transition"
                  >
                    <option value="" disabled>Ngành quan tâm</option>
                    <option>Công nghệ thông tin</option>
                    <option>Cơ điện tử</option>
                    <option>Công nghệ ô tô</option>
                    <option>Marketing</option>
                  </select>
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:opacity-95 hover:scale-[1.02] transition-all"
                    >
                      Đăng ký nhận tư vấn
                    </button>
                    <button
                      type="button"
                      onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
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

export default HAUILandingPage;
