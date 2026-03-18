import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight, BookOpen, Briefcase, Building2, Calendar,
  ChevronLeft, ChevronRight, CheckCircle2, MapPin,
  Trophy, Users, Star, Hammer, HardHat,
} from 'lucide-react';

/* ─── Design tokens ──────────────────────────────────────────── */
const PRIMARY      = '#E46A00';
const PRIMARY_DARK = '#B85400';
const PRIMARY_LITE = '#FF8C2E';

/* ─── useScrollReveal hook ───────────────────────────────────── */
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── useCounter hook ────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

/* ─── Static data ────────────────────────────────────────────── */
const admissionSteps = [
  {
    step: '01',
    title: 'Xét điểm thi tốt nghiệp THPT',
    desc : 'Tham gia kỳ thi tốt nghiệp THPT quốc gia và nộp kết quả điểm thi theo nguyện vọng.',
  },
  {
    step: '02',
    title: 'Xét học bạ',
    desc : 'Nộp học bạ THPT với điểm trung bình từng môn theo tổ hợp xét tuyển.',
  },
  {
    step: '03',
    title: 'Xét tuyển kết hợp',
    desc : 'Kết hợp điểm thi tốt nghiệp và kết quả học tập theo quy định của trường.',
  },
];

const combos = [
  { code: 'A00', subjects: 'Toán – Lý – Hóa' },
  { code: 'A01', subjects: 'Toán – Lý – Anh' },
  { code: 'D07', subjects: 'Toán – Hóa – Anh' },
];

const scores = [
  { major: 'Công nghệ thông tin',     score: 26   },
  { major: 'Kiến trúc',               score: 25.5 },
  { major: 'Kỹ thuật xây dựng',       score: 24   },
  { major: 'Kinh tế xây dựng',        score: 23   },
  { major: 'Kỹ thuật cấp thoát nước', score: 21   },
];

const majorGroups = [
  {
    id         : 'construction',
    label      : 'Nhóm Xây dựng',
    accent     : PRIMARY,
    icon       : <Hammer size={20} color={PRIMARY} />,
    items      : [
      'Kỹ thuật xây dựng công trình',
      'Kỹ thuật xây dựng dân dụng & công nghiệp',
      'Kỹ thuật xây dựng công trình giao thông',
      'Kỹ thuật xây dựng công trình thủy',
    ],
  },
  {
    id         : 'architecture',
    label      : 'Nhóm Kiến trúc',
    accent     : '#f59e0b',
    icon       : <Building2 size={20} color="#f59e0b" />,
    items      : ['Kiến trúc', 'Quy hoạch đô thị', 'Thiết kế nội thất'],
  },
  {
    id         : 'infrastructure',
    label      : 'Nhóm Hạ tầng',
    accent     : '#3b82f6',
    icon       : <HardHat size={20} color="#3b82f6" />,
    items      : [
      'Kỹ thuật cấp thoát nước',
      'Kỹ thuật môi trường',
      'Kỹ thuật hạ tầng đô thị',
    ],
  },
  {
    id         : 'economics',
    label      : 'Nhóm Kinh tế Xây dựng',
    accent     : '#22c55e',
    icon       : <Briefcase size={20} color="#22c55e" />,
    items      : ['Kinh tế xây dựng', 'Quản lý xây dựng', 'Kinh doanh bất động sản'],
  },
];

const featuredMajors = [
  {
    img  : 'https://picsum.photos/seed/nuce-m1/600/400',
    title: 'Kỹ thuật xây dựng công trình',
    tag  : 'Ngành hot',
    desc : 'Đào tạo kỹ sư thiết kế, thi công và quản lý các công trình xây dựng lớn trong nước và quốc tế.',
  },
  {
    img  : 'https://picsum.photos/seed/nuce-m2/600/400',
    title: 'Kiến trúc',
    tag  : 'Nhiều cơ hội',
    desc : 'Đào tạo kiến trúc sư sáng tạo, thiết kế công trình và lập quy hoạch đô thị bền vững.',
  },
  {
    img  : 'https://picsum.photos/seed/nuce-m3/600/400',
    title: 'Kinh tế xây dựng',
    tag  : 'Tiềm năng',
    desc : 'Kết hợp kỹ thuật xây dựng và quản lý dự án – nghề nghiệp đa dạng với thu nhập cao.',
  },
];

const gallery = [
  { src: 'https://picsum.photos/seed/nuce-g1/600/400', alt: 'Phòng TN kết cấu' },
  { src: 'https://picsum.photos/seed/nuce-g2/600/400', alt: 'Phòng vật liệu XD' },
  { src: 'https://picsum.photos/seed/nuce-g3/600/400', alt: 'Phòng mô phỏng' },
  { src: 'https://picsum.photos/seed/nuce-g4/600/400', alt: 'Xưởng thực hành' },
];

const activities = [
  { title: 'CLB Kiến trúc',           desc: 'Thiết kế mô hình và sáng tạo không gian kiến trúc độc đáo.',                emoji: '🏛️' },
  { title: 'CLB Kỹ thuật Xây dựng',  desc: 'Nghiên cứu vật liệu mới, hackathon kỹ thuật và mô phỏng công trình.',       emoji: '⚙️' },
  { title: 'CLB Sáng tạo Công nghệ', desc: 'Ứng dụng BIM, AI và phần mềm thiết kế trong xây dựng hiện đại.',            emoji: '💡' },
  { title: 'CLB Khởi nghiệp',        desc: 'Xây dựng ý tưởng startup, kết nối mentor và nhà đầu tư ngành xây dựng.',    emoji: '🚀' },
];

const employers = [
  'Vingroup', 'Hòa Phát', 'COTEC', 'COMA', 'Lũng Lô 5', 'CC1',
  'Vinaconex', 'Cofico', 'DIC Corp', 'Hà Đô Group', 'Nam Long', 'Daewoo E&C',
];

/* ─── Particle component ─────────────────────────────────────── */
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 4, height: 4,
        background: PRIMARY_LITE,
        opacity: 0.5,
        animation: 'floatUp 6s ease-in-out infinite',
        ...style,
      }}
    />
  );
}

/* ─── Reveal wrapper ─────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity   : visible ? 1 : 0,
        transform : visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── 3D Card ─────────────────────────────────────────────────── */
function Card3D({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
    el.style.boxShadow = `${-x * 12}px ${y * 12}px 40px rgba(228,106,0,0.25)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    el.style.boxShadow = '';
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease', willChange: 'transform', ...style }}
    >
      {children}
    </div>
  );
}

/* ─── Stat Counter Card ──────────────────────────────────────── */
function StatCounter({
  target,
  suffix,
  label,
  icon,
  active,
  isYear,
}: {
  target: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  isYear?: boolean;
}) {
  const count = useCounter(target, 1800, active);
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <div
        className="text-4xl font-black mb-1"
        style={{ color: PRIMARY, fontFamily: 'Montserrat, sans-serif' }}
      >
        {isYear ? (active ? count : '----') : (active ? count.toLocaleString() : '0')}{suffix ?? ''}
      </div>
      <div className="text-slate-400 text-sm text-center">{label}</div>
    </div>
  );
}

/* ─── AnimatedBar ────────────────────────────────────────────── */
function AnimatedBar({ score, active }: { score: number; active: boolean }) {
  const [width, setWidth] = useState('0%');
  useEffect(() => {
    if (active) {
      const t = setTimeout(() => setWidth(`${(score / 30) * 100}%`), 200);
      return () => clearTimeout(t);
    }
  }, [active, score]);
  return (
    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
      <div
        className="h-3 rounded-full"
        style={{
          width,
          background: `linear-gradient(to right, ${PRIMARY}, ${PRIMARY_LITE})`,
          transition : 'width 1s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function NUCELandingPage() {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({ name: '', phone: '', major: '' });

  const prevSlide = () => setSliderIdx(i => (i - 1 + activities.length) % activities.length);
  const nextSlide = () => setSliderIdx(i => (i + 1) % activities.length);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  /* Stat section reveal */
  const statsReveal = useScrollReveal(0.2);
  /* Scores section reveal */
  const scoresReveal = useScrollReveal(0.15);

  return (
    <div className="font-sans bg-white text-slate-900 overflow-x-hidden">

      {/* ── Keyframe styles ──────────────────────────────────── */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px)   scale(1);   opacity: 0.5; }
          50%  { transform: translateY(-40px) scale(1.3); opacity: 0.8; }
          100% { transform: translateY(-80px) scale(1);   opacity: 0;   }
        }
        @keyframes blobDrift {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%     { transform: translate(20px, -20px) scale(1.05); }
          66%     { transform: translate(-15px, 15px) scale(0.97); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-text-1 { animation: heroFadeIn 0.8s ease 0.1s both; }
        .hero-text-2 { animation: heroFadeIn 0.8s ease 0.3s both; }
        .hero-text-3 { animation: heroFadeIn 0.8s ease 0.5s both; }
        .hero-btns   { animation: heroFadeIn 0.8s ease 0.7s both; }
        .hero-stats  { animation: heroFadeIn 0.8s ease 0.9s both; }
        .hero-img    { animation: heroFadeIn 0.9s ease 0.4s both; }
      `}</style>

      {/* ════════════════════════════════════════════════════════
          S1 — HERO  (slate-950 bg → white text)
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: '#020617' }}
      >
        {/* Floating blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full opacity-20 pointer-events-none"
          style={{ background: PRIMARY, filter: 'blur(100px)', animation: 'blobDrift 12s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[360px] h-[360px] rounded-full opacity-15 pointer-events-none"
          style={{ background: '#3b82f6', filter: 'blur(80px)', animation: 'blobDrift 16s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
          style={{ background: PRIMARY_LITE, filter: 'blur(120px)' }}
        />

        {/* Particles */}
        {[10, 20, 35, 50, 65, 75, 85, 45].map((left, i) => (
          <Particle
            key={i}
            style={{
              left: `${left}%`,
              bottom: `${10 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + (i % 3)}s`,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 py-24">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <div className="hero-text-1">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border"
                style={{ color: PRIMARY, borderColor: `${PRIMARY}60`, background: `${PRIMARY}15` }}
              >
                <HardHat size={14} /> Hơn 60 năm đào tạo kỹ sư hàng đầu
              </span>
            </div>

            <h1
              className="hero-text-2 text-4xl md:text-6xl font-black leading-tight mb-4 text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Đại học<br />
              <span style={{ color: PRIMARY }}>Xây dựng</span><br />
              Hà Nội
            </h1>

            <p className="hero-text-3 text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Với hơn 60 năm phát triển, trường đã đào tạo nhiều thế hệ kỹ sư và
              chuyên gia đóng góp vào các công trình trọng điểm của đất nước.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row gap-4">
              <button
                className="font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 w-max text-white transition-all hover:brightness-110 active:scale-95"
                style={{ background: PRIMARY }}
              >
                Khám phá ngành học <ArrowRight size={18} />
              </button>
              <button
                className="font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 w-max transition-all hover:bg-white/10 active:scale-95 border text-white"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Nhận tư vấn tuyển sinh
              </button>
            </div>

            {/* Quick stats */}
            <div
              className="hero-stats mt-10 flex gap-8 border-t pt-8"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              {[
                { n: '1966', l: 'Năm thành lập' },
                { n: '20k+', l: 'Sinh viên' },
                { n: '60+',  l: 'Ngành đào tạo' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div
                    className="text-2xl font-black"
                    style={{ color: PRIMARY, fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {s.n}
                  </div>
                  <div className="text-slate-400 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="hero-img hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -top-8 -right-8 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: `${PRIMARY}20`, filter: 'blur(60px)' }}
              />
              <div className="relative rounded-2xl overflow-hidden border-2" style={{ borderColor: `${PRIMARY}40` }}>
                <img
                  src="https://picsum.photos/seed/nuce-hero/600/480"
                  alt="NUCE Campus"
                  className="w-full object-cover"
                  style={{ height: 400 }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #020617 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-4 py-3">
                    <div className="text-slate-400 text-xs font-medium">Xếp hạng Quốc gia</div>
                    <div className="font-black text-sm" style={{ color: PRIMARY }}>#1 Kỹ thuật Xây dựng</div>
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-3 py-2 text-center">
                    <div className="font-black text-xl" style={{ color: PRIMARY, lineHeight: 1 }}>60+</div>
                    <div className="text-slate-400 text-xs mt-0.5">năm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #020617)' }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════
          S2 — STATS  (slate-900 bg → white text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0f172a' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <h2
                className="text-3xl font-black text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Tổng quan về trường
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Đại học Xây dựng Hà Nội được thành lập năm 1966, là một trong những trung tâm
                đào tạo hàng đầu về kỹ thuật xây dựng, kiến trúc và hạ tầng đô thị tại Việt Nam.
              </p>
            </div>
          </Reveal>

          {/* Animated stat counters */}
          <div ref={statsReveal.ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { target: 1966,  suffix: '',   label: 'Năm thành lập',      icon: <Calendar  size={28} style={{ color: PRIMARY }} />, isYear: true  },
              { target: 20000, suffix: '+',  label: 'Sinh viên đang học', icon: <Users     size={28} style={{ color: PRIMARY }} />, isYear: false },
              { target: 60,    suffix: '+',  label: 'Ngành đào tạo',      icon: <BookOpen  size={28} style={{ color: PRIMARY }} />, isYear: false },
              { target: 0,     suffix: '',   label: 'Quận Hai Bà Trưng',  icon: <MapPin    size={28} style={{ color: PRIMARY }} />, isYear: false, customVal: 'HBT' },
            ].map((s, i) => (
              <Card3D
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-7 text-center cursor-default"
              >
                {s.customVal ? (
                  <>
                    <div className="flex justify-center mb-3">{s.icon}</div>
                    <div
                      className="font-black mb-1"
                      style={{ color: PRIMARY, fontFamily: 'Montserrat, sans-serif', fontSize: 28 }}
                    >
                      {s.customVal}
                    </div>
                    <div className="text-slate-400 text-sm">{s.label}</div>
                  </>
                ) : (
                  <StatCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    icon={s.icon}
                    active={statsReveal.visible}
                    isYear={s.isYear}
                  />
                )}
              </Card3D>
            ))}
          </div>

          {/* Fields */}
          <Reveal delay={200}>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Trường chuyên đào tạo các lĩnh vực:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Xây dựng dân dụng', 'Xây dựng công trình', 'Kiến trúc',
                  'Hạ tầng đô thị',    'Quản lý xây dựng',    'Bất động sản',
                ].map(f => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: `${PRIMARY}15`, border: `1px solid ${PRIMARY}30` }}
                  >
                    <CheckCircle2 size={18} style={{ color: PRIMARY }} />
                    <span className="text-slate-200 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S3 — WHY CHOOSE  (white bg → dark text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Vì sao nên chọn NUCE?
              </h2>
              <p className="text-slate-500">Ba lý do nổi bật khiến hàng ngàn sinh viên tin tưởng lựa chọn NUCE</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon : <Trophy    size={44} style={{ color: PRIMARY }} />,
                title: 'Trường xây dựng hàng đầu',
                desc : 'Là nơi đào tạo nhiều kỹ sư tham gia các dự án trọng điểm quốc gia và công trình lớn tại Việt Nam.',
                delay: 0,
              },
              {
                icon : <Building2 size={44} style={{ color: PRIMARY }} />,
                title: 'Môi trường học tập thực hành',
                desc : 'Sinh viên học tại phòng thí nghiệm kết cấu, vật liệu xây dựng và phòng mô phỏng công trình hiện đại.',
                delay: 100,
              },
              {
                icon : <Briefcase size={44} style={{ color: PRIMARY }} />,
                title: 'Hợp tác doanh nghiệp',
                desc : 'Sinh viên có cơ hội thực tập tại các tập đoàn xây dựng và bất động sản hàng đầu trong và ngoài nước.',
                delay: 200,
              },
            ].map(r => (
              <Reveal key={r.title} delay={r.delay}>
                <Card3D className="bg-white border border-slate-100 rounded-2xl p-8 text-center cursor-default shadow-sm h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${PRIMARY}12` }}
                  >
                    {r.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{r.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S4 — MAJOR GROUPS  (slate-900 bg → white text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0f172a' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Các nhóm ngành đào tạo
              </h2>
              <p className="text-slate-400">NUCE đào tạo đa dạng các nhóm ngành liên quan đến xây dựng và hạ tầng</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {majorGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 100}>
                <Card3D
                  className="bg-slate-800 rounded-2xl p-7 border-l-4 h-full cursor-default"
                  style={{ borderLeftColor: g.accent } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${g.accent}20` }}
                    >
                      {g.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">{g.label}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {g.items.map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: g.accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S5 — FEATURED MAJORS  (white bg → dark text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ngành học nổi bật
              </h2>
              <p className="text-slate-500">Ba ngành học được sinh viên và nhà tuyển dụng đánh giá cao nhất tại NUCE</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMajors.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                  <div className="overflow-hidden" style={{ height: 200 }}>
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 w-max"
                      style={{ background: `${PRIMARY}15`, color: PRIMARY }}
                    >
                      {m.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{m.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{m.desc}</p>
                    <button
                      className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2 w-max"
                      style={{ color: PRIMARY }}
                    >
                      Tìm hiểu thêm <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S6 — ADMISSION TIMELINE  (slate-900 bg → white text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0f172a' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Phương thức tuyển sinh
              </h2>
              <p className="text-slate-400">Trường áp dụng nhiều phương thức xét tuyển linh hoạt</p>
            </div>
          </Reveal>

          <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
            <div
              className="hidden md:block absolute top-6 h-0.5 z-0"
              style={{ left: '16.5%', right: '16.5%', background: `${PRIMARY}40` }}
            />
            {admissionSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 150}>
                <div className="relative z-10 flex-1 flex flex-col items-center text-center px-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg shadow-lg mb-4 text-white"
                    style={{ background: PRIMARY }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm md:text-base">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S7 — SUBJECT COMBOS  (white bg → dark text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Tổ hợp xét tuyển
              </h2>
              <p className="text-slate-500">Các tổ hợp môn thi được áp dụng trong xét tuyển tại NUCE</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: PRIMARY }}>
                    <th className="text-white text-left p-4 font-bold">Tổ hợp</th>
                    <th className="text-white text-left p-4 font-bold">Môn thi</th>
                  </tr>
                </thead>
                <tbody>
                  {combos.map((c, i) => (
                    <tr key={c.code} className={i % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
                      <td className="p-4 font-bold" style={{ color: PRIMARY }}>{c.code}</td>
                      <td className="p-4 text-slate-700">{c.subjects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S8 — BENCHMARK SCORES  (slate-900 bg → white text, animated bars)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0f172a' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Điểm chuẩn năm 2024
              </h2>
              <p className="text-slate-400">
                Điểm chuẩn các ngành dao động từ <strong className="text-white">20 – 26 điểm</strong>
              </p>
            </div>
          </Reveal>
          <div ref={scoresReveal.ref} className="max-w-2xl mx-auto space-y-7">
            {scores.map((s, i) => (
              <Reveal key={s.major} delay={i * 80}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-200 font-medium text-sm">{s.major}</span>
                    <span className="font-bold text-sm" style={{ color: PRIMARY }}>{s.score} điểm</span>
                  </div>
                  <AnimatedBar score={s.score} active={scoresReveal.visible} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S9 — FACILITIES GALLERY  (white bg → dark text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Cơ sở vật chất
              </h2>
              <p className="text-slate-500">
                Hệ thống phòng thí nghiệm và xưởng thực hành tiên tiến phục vụ nghiên cứu và học tập
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden shadow-md cursor-pointer" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center text-xs text-slate-500 font-medium mt-2">{img.alt}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S10 — ACTIVITIES SLIDER  (slate-900 bg → white text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0f172a' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Hoạt động sinh viên
              </h2>
              <p className="text-slate-400">Phong trào sôi động, câu lạc bộ đa dạng tại NUCE</p>
            </div>
          </Reveal>

          <div className="relative px-12">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${sliderIdx * 100}%)` }}
              >
                {activities.map((a, i) => (
                  <div key={i} className="min-w-full">
                    <div
                      className="max-w-xl mx-auto rounded-2xl p-10 text-center border"
                      style={{ background: '#1e293b', borderColor: `${PRIMARY}30` }}
                    >
                      <div className="text-6xl mb-5">{a.emoji}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors border"
              style={{ background: '#1e293b', borderColor: '#334155' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = PRIMARY; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#334155'; }}
            >
              <ChevronLeft size={20} className="text-slate-300" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors border"
              style={{ background: '#1e293b', borderColor: '#334155' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = PRIMARY; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#334155'; }}
            >
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => setSliderIdx(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  background: sliderIdx === i ? PRIMARY : '#334155',
                  transform : sliderIdx === i ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S11 — EMPLOYERS  (white bg → dark text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Cơ hội nghề nghiệp
              </h2>
              <p className="text-slate-500">
                Sinh viên NUCE tốt nghiệp được tuyển dụng bởi các tập đoàn, công ty xây dựng và bất động sản hàng đầu
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {employers.map((e, i) => (
              <Reveal key={e} delay={i * 50}>
                <Card3D className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm cursor-default hover:border-orange-200 transition-colors">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ background: `${PRIMARY}12` }}
                  >
                    <Briefcase size={18} style={{ color: PRIMARY }} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-tight block">{e}</span>
                </Card3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          S12 — CTA FORM  (slate-950 bg → white text)
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#020617' }}>
        {/* Accent blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: PRIMARY, filter: 'blur(100px)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: '#3b82f6', filter: 'blur(80px)', transform: 'translate(-30%, 30%)' }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border"
                style={{ color: PRIMARY, borderColor: `${PRIMARY}50`, background: `${PRIMARY}15` }}
              >
                <Star size={12} /> Tư vấn miễn phí
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-white mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Bạn muốn trở thành kỹ sư xây dựng<br className="hidden md:block" />
                hoặc kiến trúc sư trong tương lai?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Đại học Xây dựng Hà Nội sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng
                để phát triển sự nghiệp trong ngành xây dựng và kiến trúc.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            {submitted ? (
              <div
                className="rounded-2xl p-10 max-w-sm mx-auto text-center border"
                style={{ background: '#1e293b', borderColor: `${PRIMARY}40` }}
              >
                <CheckCircle2 size={52} className="mx-auto mb-4" style={{ color: PRIMARY }} />
                <div className="font-bold text-xl text-white">Đăng ký thành công!</div>
                <div className="text-sm text-slate-400 mt-2">Tư vấn viên sẽ liên hệ bạn trong thời gian sớm nhất.</div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 max-w-md mx-auto border"
                style={{ background: '#1e293b', borderColor: '#334155' }}
              >
                <div className="space-y-4">
                  {[
                    { type: 'text', placeholder: 'Họ và tên',      field: 'name'  },
                    { type: 'tel',  placeholder: 'Số điện thoại',   field: 'phone' },
                  ].map(inp => (
                    <input
                      key={inp.field}
                      type={inp.type}
                      placeholder={inp.placeholder}
                      value={form[inp.field as 'name' | 'phone']}
                      onChange={e => setForm({ ...form, [inp.field]: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors border"
                      style={{ background: '#0f172a', borderColor: '#334155' }}
                      onFocus={e  => { (e.target as HTMLInputElement).style.borderColor = PRIMARY; }}
                      onBlur={e   => { (e.target as HTMLInputElement).style.borderColor = '#334155'; }}
                      required
                    />
                  ))}
                  <select
                    value={form.major}
                    onChange={e => setForm({ ...form, major: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border"
                    style={{ background: '#0f172a', borderColor: '#334155', color: form.major ? '#fff' : '#64748b' }}
                    onFocus={e  => { (e.target as HTMLSelectElement).style.borderColor = PRIMARY; }}
                    onBlur={e   => { (e.target as HTMLSelectElement).style.borderColor = '#334155'; }}
                  >
                    <option value="">Chọn ngành quan tâm</option>
                    <option>Kỹ thuật xây dựng công trình</option>
                    <option>Kiến trúc</option>
                    <option>Kinh tế xây dựng</option>
                    <option>Kỹ thuật cấp thoát nước</option>
                    <option>Quy hoạch đô thị</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full mt-5 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-white transition-all hover:brightness-110 active:scale-95"
                  style={{ background: PRIMARY }}
                >
                  Nhận tư vấn miễn phí <ArrowRight size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
