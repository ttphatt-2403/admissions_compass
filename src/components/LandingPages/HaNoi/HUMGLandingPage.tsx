import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  ArrowRight, BookOpen, Briefcase, CheckCircle2,
  ChevronLeft, ChevronRight, Compass, GraduationCap,
  Layers, MapPin, Mountain, Users,
} from 'lucide-react';

/* ─── Design tokens ─────────────────────────────────── */
const PRIMARY      = '#2F7D32';
const PRIMARY_DARK = '#1B5E20';
const PRIMARY_LITE = '#66BB6A';
const PRIMARY_BG   = '#F1F8E9';

/* ─── useScrollReveal hook ──────────────────────────── */
function useScrollReveal(threshold = 0.15) {
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

/* ─── useCounter hook ───────────────────────────────── */
function useCounter(target: number, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

/* ─── Reveal wrapper ────────────────────────────────── */
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
        opacity   : visible ? 1 : 0,
        transform : visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animated stat counter card ───────────────────── */
interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  trigger: boolean;
  delay?: number;
}
function StatCard({ target, suffix = '', label, icon, trigger, delay = 0 }: StatCardProps) {
  const count = useCounter(target, 1800, trigger);
  return (
    <Reveal delay={delay}>
      <div className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/30 transition-all duration-300 cursor-default">
        <div className="flex justify-center mb-3">{icon}</div>
        <div
          className="font-black mb-2 text-white"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: target > 9999 ? 28 : 36 }}
        >
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-slate-400 text-sm">{label}</div>
      </div>
    </Reveal>
  );
}

/* ─── Static data ───────────────────────────────────── */
const admissionSteps = [
  {
    step : '01',
    title: 'Xét điểm thi tốt nghiệp THPT',
    desc : 'Tham gia kỳ thi tốt nghiệp THPT và đăng ký xét tuyển theo điểm thi.',
  },
  {
    step : '02',
    title: 'Xét học bạ',
    desc : 'Nộp học bạ THPT với điểm trung bình các môn xét tuyển đạt yêu cầu.',
  },
  {
    step : '03',
    title: 'Xét tuyển kết hợp',
    desc : 'Kết hợp điểm thi tốt nghiệp và kết quả học tập THPT theo quy định.',
  },
];

const combos = [
  { code: 'A00', subjects: 'Toán – Lý – Hóa'  },
  { code: 'A01', subjects: 'Toán – Lý – Anh'  },
  { code: 'B00', subjects: 'Toán – Hóa – Sinh' },
  { code: 'D01', subjects: 'Toán – Văn – Anh'  },
];

const scores = [
  { major: 'Công nghệ thông tin',   score: 25 },
  { major: 'Logistics',             score: 24 },
  { major: 'Quản lý đất đai',       score: 23 },
  { major: 'Kỹ thuật khai thác mỏ', score: 21 },
  { major: 'Trắc địa bản đồ',       score: 20 },
];

const majorGroups = [
  {
    id   : 'geology',
    label: 'Nhóm Địa chất',
    accent: 'border-green-500',
    dot   : '#2F7D32',
    items : ['Địa chất học', 'Địa chất công trình', 'Địa chất thủy văn', 'Địa vật lý'],
  },
  {
    id   : 'mining',
    label: 'Nhóm Khai thác Mỏ',
    accent: 'border-amber-500',
    dot   : '#d97706',
    items : ['Kỹ thuật khai thác mỏ', 'Kỹ thuật mỏ hầm lò', 'Cơ điện mỏ'],
  },
  {
    id   : 'survey',
    label: 'Nhóm Trắc địa – Bản đồ',
    accent: 'border-blue-500',
    dot   : '#3b82f6',
    items : ['Trắc địa', 'Kỹ thuật trắc địa bản đồ', 'Hệ thống thông tin địa lý (GIS)'],
  },
  {
    id   : 'land',
    label: 'Nhóm Quản lý Đất đai',
    accent: 'border-teal-400',
    dot   : '#14b8a6',
    items : ['Quản lý đất đai', 'Khoa học môi trường', 'Kinh tế tài nguyên'],
  },
];

const featuredMajors = [
  {
    img  : 'https://picsum.photos/seed/humg-m1/600/400',
    title: 'Kỹ thuật khai thác mỏ',
    tag  : 'Ngành truyền thống',
    desc : 'Đào tạo kỹ sư thiết kế, quản lý và vận hành các hoạt động khai thác khoáng sản an toàn – hiệu quả.',
  },
  {
    img  : 'https://picsum.photos/seed/humg-m2/600/400',
    title: 'Trắc địa bản đồ',
    tag  : 'Ứng dụng rộng',
    desc : 'Ngành học chuyên về đo đạc, bản đồ địa hình và hệ thống định vị – nền tảng cho mọi công trình kỹ thuật.',
  },
  {
    img  : 'https://picsum.photos/seed/humg-m3/600/400',
    title: 'Quản lý đất đai',
    tag  : 'Nhu cầu cao',
    desc : 'Đào tạo chuyên gia quy hoạch, quản lý và khai thác tài nguyên đất trong bối cảnh đô thị hóa nhanh.',
  },
];

const gallery = [
  { src: 'https://picsum.photos/seed/humg-g1/600/400', caption: 'Phòng TN địa chất' },
  { src: 'https://picsum.photos/seed/humg-g2/600/400', caption: 'Mô phỏng khai thác mỏ' },
  { src: 'https://picsum.photos/seed/humg-g3/600/400', caption: 'Phòng GIS' },
  { src: 'https://picsum.photos/seed/humg-g4/600/400', caption: 'TT nghiên cứu môi trường' },
];

const activities = [
  { emoji: '🪨', title: 'CLB Địa chất',           desc: 'Khảo sát thực địa, nghiên cứu mẫu đất đá và đam mê khám phá lòng đất.' },
  { emoji: '🌿', title: 'CLB Môi trường',          desc: 'Chiến dịch bảo vệ môi trường, nghiên cứu tác động và giải pháp xanh.' },
  { emoji: '🔬', title: 'CLB Nghiên cứu khoa học', desc: 'Công bố nghiên cứu, hội thảo khoa học và giao lưu quốc tế.' },
  { emoji: '🚀', title: 'CLB Khởi nghiệp',         desc: 'Xây dựng ý tưởng startup trong lĩnh vực tài nguyên và công nghệ mỏ.' },
];

const employers = [
  'Vinacomin', 'TKV', 'PVEP', 'VICEM', 'MECO', 'GEORICT',
  'Vietmindo', 'Bộ TN&MT', 'Sonadezi', 'MEINHARDT', 'GEODETIC', 'HUD',
];

const whyChoose = [
  {
    icon : <Mountain  size={44} color={PRIMARY_LITE} />,
    title: 'Chuyên sâu về tài nguyên & địa chất',
    desc : 'Đại học Mỏ – Địa chất là nơi đào tạo nhiều chuyên gia hàng đầu làm việc trong ngành khai khoáng và tài nguyên tại Việt Nam.',
  },
  {
    icon : <Compass   size={44} color={PRIMARY_LITE} />,
    title: 'Học tập gắn với thực địa',
    desc : 'Sinh viên thường xuyên tham gia khảo sát địa chất, đo đạc bản đồ và thực tập trực tiếp tại các mỏ khai thác.',
  },
  {
    icon : <Briefcase size={44} color={PRIMARY_LITE} />,
    title: 'Nhu cầu nhân lực cao',
    desc : 'Ngành tài nguyên và môi trường luôn cần nguồn nhân lực kỹ thuật chất lượng phục vụ phát triển kinh tế bền vững.',
  },
];

const fields = [
  'Khai thác khoáng sản',
  'Địa chất công trình',
  'Trắc địa bản đồ',
  'Quản lý đất đai',
  'Môi trường',
  'Hệ thống thông tin địa lý',
];

/* ─── Main component ────────────────────────────────── */
export default function HUMGLandingPage() {
  usePageAnalytics('HUMG', 'Đại học Mỏ - Địa chất');
  const [sliderIdx, setSliderIdx]   = useState(0);
  const [submitted, setSubmitted]   = useState(false);
  const [form, setForm]             = useState({ name: '', phone: '', major: '' });

  /* stats section trigger */
  const statsRef  = useRef<HTMLDivElement>(null);
  const [statsTrig, setStatsTrig] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsTrig(true); obs.disconnect(); } },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* score bar trigger */
  const scoresRef  = useRef<HTMLDivElement>(null);
  const [scoresTrig, setScoresTrig] = useState(false);
  useEffect(() => {
    const el = scoresRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setScoresTrig(true); obs.disconnect(); } },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prevSlide = () => setSliderIdx(i => (i - 1 + activities.length) % activities.length);
  const nextSlide = () => setSliderIdx(i => (i + 1) % activities.length);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="text-slate-900 bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ══════════════════════════════════════════════════
          S1 — HERO  (dark slate-950 + green accents)
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">

        {/* floating blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl"
          style={{ background: PRIMARY }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: PRIMARY_DARK }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full opacity-10 blur-3xl"
          style={{ background: PRIMARY_LITE }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 py-24">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <div
              className="inline-flex items-center gap-2 mb-6 w-max px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: `${PRIMARY}33`, color: PRIMARY_LITE, border: `1px solid ${PRIMARY}55` }}
            >
              <Mountain size={13} />
              Hơn 55 năm đào tạo chuyên gia tài nguyên
            </div>

            <h1
              className="text-4xl md:text-6xl font-black leading-tight text-white mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Đại học Mỏ –<br />
              <span style={{ color: PRIMARY_LITE }}>Địa chất</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Trung tâm đào tạo hàng đầu về địa chất, khai thác khoáng sản, trắc địa bản đồ
              và công nghệ tài nguyên tại Việt Nam, gắn liền với thực tế khai thác và
              quản lý môi trường bền vững.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                className="flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-[14px] transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-green-800/40 text-slate-900"
                style={{ background: PRIMARY_LITE }}
              >
                Khám phá ngành học <ArrowRight size={18} />
              </button>
              <button
                className="flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-[14px] border-2 text-white transition-all hover:bg-white/10"
                style={{ borderColor: `${PRIMARY_LITE}88` }}
              >
                Đăng ký tư vấn tuyển sinh
              </button>
            </div>

            {/* quick stats row */}
            <div className="flex gap-8 border-t pt-8" style={{ borderColor: '#ffffff1a' }}>
              {[
                { n: '1966',  l: 'Năm thành lập'  },
                { n: '15k+',  l: 'Sinh viên'       },
                { n: '40+',   l: 'Ngành đào tạo'   },
              ].map(s => (
                <div key={s.l}>
                  <div
                    className="text-2xl font-black"
                    style={{ color: PRIMARY_LITE, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image card */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -top-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: PRIMARY }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://picsum.photos/seed/humg-hero/600/480"
                  alt="HUMG Campus"
                  className="w-full object-cover"
                  style={{ height: 400 }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
                <div className="absolute bottom-5 left-5 bg-slate-900/90 backdrop-blur rounded-xl px-4 py-3 border border-white/10">
                  <div className="text-slate-400 text-xs font-medium">Xếp hạng Quốc gia</div>
                  <div className="font-black text-sm mt-0.5" style={{ color: PRIMARY_LITE, fontFamily: "'Poppins', sans-serif" }}>
                    #1 Địa chất &amp; Khai khoáng
                  </div>
                </div>
                <div className="absolute top-5 right-5 bg-slate-900/90 backdrop-blur rounded-xl px-4 py-3 text-center border border-white/10">
                  <div className="font-black text-xl" style={{ color: PRIMARY_LITE }}>55+</div>
                  <div className="text-slate-400 text-xs">năm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S2 — ANIMATED STAT COUNTERS  (dark slate-900)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Tổng quan về trường
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Đại học Mỏ – Địa chất được thành lập năm 1966 và là trường đại học hàng đầu
                trong lĩnh vực tài nguyên, địa chất và công nghệ mỏ tại Việt Nam.
              </p>
            </div>
          </Reveal>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            <StatCard target={1966}  suffix="" label="Năm thành lập"      icon={<GraduationCap size={26} color={PRIMARY_LITE} />} trigger={statsTrig} delay={0}   />
            <StatCard target={15000} suffix="+" label="Sinh viên đang học" icon={<Users         size={26} color={PRIMARY_LITE} />} trigger={statsTrig} delay={100} />
            <StatCard target={40}    suffix="+" label="Ngành đào tạo"      icon={<BookOpen      size={26} color={PRIMARY_LITE} />} trigger={statsTrig} delay={200} />
            <Reveal delay={300}>
              <div className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/30 transition-all duration-300 cursor-default">
                <div className="flex justify-center mb-3"><MapPin size={26} color={PRIMARY_LITE} /></div>
                <div className="font-black mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22 }}>
                  Bắc Từ Liêm
                </div>
                <div className="text-slate-400 text-sm">Quận, Hà Nội</div>
              </div>
            </Reveal>
          </div>

          {/* Fields */}
          <Reveal delay={100}>
            <div className="bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Trường đào tạo nguồn nhân lực cho các lĩnh vực:
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {fields.map((f, i) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: `${PRIMARY}18`, transitionDelay: `${i * 60}ms` }}
                  >
                    <CheckCircle2 size={16} color={PRIMARY_LITE} />
                    <span className="text-slate-200 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S3 — WHY CHOOSE  (white bg)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-slate-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Vì sao nên chọn HUMG?
              </h2>
              <p className="text-slate-500">Ba lý do nổi bật khiến hàng ngàn sinh viên tin tưởng lựa chọn HUMG</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((r, i) => (
              <Reveal key={r.title} delay={i * 120}>
                <div
                  className="group bg-white border border-slate-100 rounded-2xl p-8 text-center cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-200"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    {r.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{r.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S4 — MAJOR GROUPS  (dark slate-950)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Các nhóm ngành đào tạo
              </h2>
              <p className="text-slate-400">HUMG đào tạo đa dạng các nhóm ngành liên quan đến địa chất và tài nguyên</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {majorGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 100}>
                <div
                  className={`bg-slate-900 rounded-2xl p-7 border-l-4 ${g.accent} border border-slate-800 hover:border-l-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                >
                  <h3 className="text-lg font-bold text-white mb-4">{g.label}</h3>
                  <ul className="space-y-2">
                    {g.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: g.dot }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S5 — FEATURED MAJORS  (light bg)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-slate-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ngành học nổi bật
              </h2>
              <p className="text-slate-500">Ba ngành học được sinh viên và nhà tuyển dụng đánh giá cao nhất tại HUMG</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMajors.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:border-green-200 transition-all duration-300">
                  <div className="overflow-hidden" style={{ height: 200 }}>
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                      style={{ background: PRIMARY_BG, color: PRIMARY_DARK }}
                    >
                      {m.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{m.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                    <button
                      className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
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

      {/* ══════════════════════════════════════════════════
          S6 — ADMISSION TIMELINE  (dark slate-900)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Phương thức tuyển sinh
              </h2>
              <p className="text-slate-400">Trường áp dụng nhiều phương thức xét tuyển linh hoạt</p>
            </div>
          </Reveal>

          <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
            <div
              className="hidden md:block absolute top-6 h-0.5 z-0"
              style={{ left: '16.5%', right: '16.5%', background: `${PRIMARY}44` }}
            />
            {admissionSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 150} className="relative z-10 flex-1">
                <div className="flex flex-col items-center text-center px-4">
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

      {/* ══════════════════════════════════════════════════
          S7 — SUBJECT COMBOS  (white bg)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-slate-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Tổ hợp xét tuyển
              </h2>
              <p className="text-slate-500">Các tổ hợp môn thi được áp dụng trong xét tuyển tại HUMG</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-slate-100">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: PRIMARY }}>
                    <th className="text-white text-left p-4 font-bold">Tổ hợp</th>
                    <th className="text-white text-left p-4 font-bold">Môn thi</th>
                  </tr>
                </thead>
                <tbody>
                  {combos.map((c, i) => (
                    <tr key={c.code} className={i % 2 === 0 ? 'bg-white' : ''} style={i % 2 !== 0 ? { background: PRIMARY_BG } : {}}>
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

      {/* ══════════════════════════════════════════════════
          S8 — BENCHMARK SCORES with animated bars
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-slate-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Điểm chuẩn năm 2024
              </h2>
              <p className="text-slate-500">
                Điểm chuẩn các ngành dao động từ <strong className="text-slate-800">18 – 25 điểm</strong>
              </p>
            </div>
          </Reveal>
          <div ref={scoresRef} className="max-w-2xl mx-auto space-y-6">
            {scores.map((s, i) => (
              <Reveal key={s.major} delay={i * 100}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium text-sm">{s.major}</span>
                    <span className="font-bold text-sm" style={{ color: PRIMARY }}>{s.score} điểm</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width     : scoresTrig ? `${(s.score / 30) * 100}%` : '0%',
                        background: `linear-gradient(to right, ${PRIMARY_DARK}, ${PRIMARY_LITE})`,
                        transition: `width 1s ease ${i * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S9 — FACILITIES GALLERY  (dark slate-950)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Cơ sở vật chất
              </h2>
              <p className="text-slate-400">
                Hệ thống phòng thí nghiệm và trung tâm nghiên cứu tiên tiến phục vụ đào tạo thực hành
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/30" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
            {gallery.map(img => (
              <div key={img.caption} className="text-center text-xs text-slate-500 font-medium">{img.caption}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S10 — ACTIVITIES SLIDER  (white bg)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-slate-900 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Hoạt động sinh viên
              </h2>
              <p className="text-slate-500">Phong trào sôi động, câu lạc bộ đa dạng tại HUMG</p>
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
                      className="max-w-xl mx-auto rounded-2xl p-10 text-center border border-slate-100"
                      style={{ background: PRIMARY_BG, boxShadow: '0 4px 24px rgba(47,125,50,0.1)' }}
                    >
                      <div className="text-6xl mb-5">{a.emoji}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{a.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center hover:border-green-500 transition-colors"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center hover:border-green-500 transition-colors"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => setSliderIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width    : sliderIdx === i ? 24 : 10,
                  height   : 10,
                  background: sliderIdx === i ? PRIMARY : '#d1d5db',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S11 — EMPLOYERS  (dark slate-900)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Cơ hội nghề nghiệp
              </h2>
              <p className="text-slate-400">
                Sinh viên HUMG tốt nghiệp được tuyển dụng bởi các tập đoàn và cơ quan hàng đầu
                trong ngành tài nguyên
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {employers.map((e, i) => (
              <Reveal key={e} delay={i * 50}>
                <div className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700 hover:border-green-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300 cursor-default">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ background: `${PRIMARY}22` }}
                  >
                    <Layers size={18} color={PRIMARY_LITE} />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-tight block">{e}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          S12 — CTA BANNER + FORM  (dark + green gradient)
      ══════════════════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 60%, #388e3c 100%)` }}
      >
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl bg-white" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl bg-white" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <Reveal>
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bạn muốn trở thành kỹ sư địa chất,<br className="hidden md:block" />
              chuyên gia khai thác mỏ hoặc quản lý tài nguyên?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Đại học Mỏ – Địa chất sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng để
              phát triển sự nghiệp trong ngành tài nguyên, địa chất và công nghệ mỏ.
            </p>
          </Reveal>

          <Reveal delay={150}>
            {submitted ? (
              <div
                className="rounded-2xl p-8 max-w-sm mx-auto"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <CheckCircle2 size={48} className="mx-auto mb-3 text-white" />
                <div className="font-bold text-lg text-white">Đăng ký thành công!</div>
                <div className="text-sm text-white/75 mt-1">Tư vấn viên sẽ liên hệ bạn trong thời gian sớm nhất.</div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
              >
                <div className="space-y-4 text-left">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-[12px] px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-green-500 transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-[12px] px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-green-500 transition-colors"
                    required
                  />
                  <select
                    value={form.major}
                    onChange={e => setForm({ ...form, major: e.target.value })}
                    className="w-full border border-slate-200 rounded-[12px] px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-green-500 transition-colors"
                  >
                    <option value="">Chọn ngành quan tâm</option>
                    <option>Kỹ thuật khai thác mỏ</option>
                    <option>Địa chất học</option>
                    <option>Trắc địa bản đồ</option>
                    <option>Quản lý đất đai</option>
                    <option>Hệ thống thông tin địa lý (GIS)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full mt-5 font-bold py-3.5 rounded-[12px] transition-all flex items-center justify-center gap-2 text-white hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
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
