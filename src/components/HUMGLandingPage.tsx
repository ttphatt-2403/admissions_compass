import React, { useState } from 'react';
import {
  ArrowRight, BookOpen, Briefcase, CheckCircle2,
  ChevronLeft, ChevronRight, Compass, FlaskConical,
  GraduationCap, Layers, MapPin, Menu, Mountain, Users, X,
} from 'lucide-react';

/* ─── Design tokens ─────────────────────────────────── */
const PRIMARY      = '#2F7D32';
const PRIMARY_DARK = '#1B5E20';
const PRIMARY_LITE = '#66BB6A';
const PRIMARY_BG   = '#F1F8E9';

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
  { code: 'A00', subjects: 'Toán – Lý – Hóa'   },
  { code: 'A01', subjects: 'Toán – Lý – Anh'   },
  { code: 'B00', subjects: 'Toán – Hóa – Sinh'  },
  { code: 'D01', subjects: 'Toán – Văn – Anh'   },
];

const scores = [
  { major: 'Công nghệ thông tin',  score: 25   },
  { major: 'Logistics',            score: 24   },
  { major: 'Quản lý đất đai',      score: 23   },
  { major: 'Kỹ thuật khai thác mỏ', score: 21  },
  { major: 'Trắc địa bản đồ',      score: 20   },
];

const majorGroups = [
  {
    id    : 'geology',
    label : 'Nhóm Địa chất',
    color : 'border-[#2F7D32]',
    items : ['Địa chất học', 'Địa chất công trình', 'Địa chất thủy văn', 'Địa vật lý'],
  },
  {
    id    : 'mining',
    label : 'Nhóm Khai thác Mỏ',
    color : 'border-amber-600',
    items : ['Kỹ thuật khai thác mỏ', 'Kỹ thuật mỏ hầm lò', 'Cơ điện mỏ'],
  },
  {
    id    : 'survey',
    label : 'Nhóm Trắc địa – Bản đồ',
    color : 'border-blue-600',
    items : ['Trắc địa', 'Kỹ thuật trắc địa bản đồ', 'Hệ thống thông tin địa lý (GIS)'],
  },
  {
    id    : 'land',
    label : 'Nhóm Quản lý Đất đai',
    color : 'border-teal-500',
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
  { emoji: '🪨', title: 'CLB Địa chất',              desc: 'Khảo sát thực địa, nghiên cứu mẫu đất đá và đam mê khám phá lòng đất.' },
  { emoji: '🌿', title: 'CLB Môi trường',             desc: 'Chiến dịch bảo vệ môi trường, nghiên cứu tác động và giải pháp xanh.' },
  { emoji: '🔬', title: 'CLB Nghiên cứu khoa học',    desc: 'Công bố nghiên cứu, hội thảo khoa học và giao lưu quốc tế.' },
  { emoji: '🚀', title: 'CLB Khởi nghiệp',            desc: 'Xây dựng ý tưởng startup trong lĩnh vực tài nguyên và công nghệ mỏ.' },
];

const employers = [
  'Vinacomin', 'TKV', 'PVEP', 'VICEM', 'MECO', 'GEORICT',
  'Vietmindo', 'Bộ TN&MT', 'Sonadezi', 'MEINHARDT', 'GEODETIC', 'HUD',
];

const navLinks = ['Giới thiệu', 'Ngành học', 'Tuyển sinh', 'Cơ sở vật chất', 'Liên hệ'];

/* ─── Component ─────────────────────────────────────── */
export default function HUMGLandingPage() {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [form, setForm]           = useState({ name: '', phone: '', major: '' });

  const prevSlide = () => setSliderIdx(i => (i - 1 + activities.length) % activities.length);
  const nextSlide = () => setSliderIdx(i => (i + 1) % activities.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="text-gray-800 bg-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 shadow-md" style={{ background: PRIMARY }}>
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
              <Mountain size={22} style={{ color: PRIMARY }} />
            </div>
            <div>
              <div
                className="text-white font-black leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15 }}
              >
                HUMG
              </div>
              <div className="text-white/75 text-[10px] leading-tight hidden sm:block">
                Đại học Mỏ – Địa chất
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l} href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                {l}
              </a>
            ))}
            <button
              className="bg-white font-bold px-5 py-2 rounded-[12px] hover:bg-green-50 transition-colors text-sm"
              style={{ color: PRIMARY }}
            >
              Đăng ký ngay
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 py-3 flex flex-col gap-3" style={{ background: PRIMARY_DARK }}>
            {navLinks.map(l => (
              <a key={l} href="#" className="text-white text-sm font-medium">{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════════════
          S1 — HERO
      ════════════════════════════════════════════════ */}
      <section
        className="min-h-[calc(100vh-64px)] flex items-center"
        style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LITE} 100%)` }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-10 py-16">

          {/* Left — text */}
          <div className="flex flex-col justify-center text-white">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 w-max tracking-widest uppercase">
              Hơn 55 năm đào tạo chuyên gia tài nguyên
            </span>
            <h1
              className="text-3xl md:text-5xl font-black leading-snug mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Đại học Mỏ – Địa chất –<br />
              <span className="text-white/90 text-2xl md:text-3xl">
                Trung tâm đào tạo hàng đầu về<br />tài nguyên, địa chất và công nghệ mỏ
              </span>
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Trường chuyên đào tạo kỹ sư và chuyên gia trong các lĩnh vực khai thác khoáng sản,
              địa chất, môi trường, trắc địa bản đồ và công nghệ tài nguyên, gắn liền với thực tế
              khai thác tài nguyên và quản lý môi trường.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white font-bold px-7 py-3.5 rounded-[12px] hover:bg-green-50 transition-all shadow-lg flex items-center gap-2 w-max"
                style={{ color: PRIMARY }}
              >
                Khám phá ngành học <ArrowRight size={18} />
              </button>
              <button className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-[12px] hover:bg-white/10 transition-all flex items-center gap-2 w-max">
                Đăng ký tư vấn tuyển sinh
              </button>
            </div>

            {/* Quick stats */}
            <div className="mt-10 flex gap-8 border-t border-white/25 pt-8">
              {[
                { n: '1966', l: 'Năm thành lập'   },
                { n: '15k+', l: 'Sinh viên'        },
                { n: '40+',  l: 'Ngành đào tạo'    },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-white/70 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div
                className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full blur-2xl pointer-events-none"
                style={{ background: `${PRIMARY_DARK}70` }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src="https://picsum.photos/seed/humg-hero/600/480"
                  alt="HUMG Campus"
                  className="w-full object-cover"
                  style={{ height: 380 }}
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-xs text-gray-500 font-medium">Xếp hạng Quốc gia</div>
                  <div
                    className="font-black text-sm"
                    style={{ color: PRIMARY, fontFamily: "'Poppins', sans-serif" }}
                  >
                    #1 Địa chất & Khai khoáng
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl px-3 py-2 shadow-lg text-center">
                  <div className="font-black text-lg" style={{ color: PRIMARY, lineHeight: 1 }}>55+</div>
                  <div className="text-xs text-gray-500 mt-0.5">năm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S2 — OVERVIEW
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Tổng quan về trường
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Đại học Mỏ – Địa chất được thành lập năm 1966 và là trường đại học hàng đầu trong
              lĩnh vực tài nguyên, địa chất và công nghệ mỏ tại Việt Nam.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { n: '1966',        l: 'Năm thành lập',       icon: <GraduationCap size={24} style={{ color: PRIMARY }} /> },
              { n: '15.000+',     l: 'Sinh viên đang học',  icon: <Users         size={24} style={{ color: PRIMARY }} /> },
              { n: '40+',         l: 'Ngành đào tạo',       icon: <BookOpen      size={24} style={{ color: PRIMARY }} /> },
              { n: 'Bắc Từ Liêm', l: 'Quận, Hà Nội',       icon: <MapPin        size={24} style={{ color: PRIMARY }} /> },
            ].map(s => (
              <div
                key={s.l}
                className="bg-white rounded-[14px] shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div
                  className="font-black mb-2"
                  style={{
                    color      : PRIMARY,
                    fontFamily : "'Poppins', sans-serif",
                    fontSize   : s.n.length > 6 ? 22 : 36,
                  }}
                >
                  {s.n}
                </div>
                <div className="text-gray-500 text-sm">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Fields */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Trường đào tạo nguồn nhân lực cho các lĩnh vực:
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Khai thác khoáng sản',
                'Địa chất công trình',
                'Trắc địa bản đồ',
                'Quản lý đất đai',
                'Môi trường',
                'Hệ thống thông tin địa lý',
              ].map(f => (
                <div key={f} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: PRIMARY_BG }}>
                  <CheckCircle2 size={18} style={{ color: PRIMARY }} />
                  <span className="text-gray-700 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S3 — WHY CHOOSE
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Vì sao nên chọn HUMG?
            </h2>
            <p className="text-gray-500">Ba lý do nổi bật khiến hàng ngàn sinh viên tin tưởng lựa chọn HUMG</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon : <Mountain      size={48} style={{ color: PRIMARY }} />,
                title: 'Chuyên sâu về tài nguyên & địa chất',
                desc : 'Đại học Mỏ – Địa chất là nơi đào tạo nhiều chuyên gia làm việc trong ngành khai khoáng và tài nguyên tại Việt Nam.',
              },
              {
                icon : <Compass       size={48} style={{ color: PRIMARY }} />,
                title: 'Học tập gắn với thực địa',
                desc : 'Sinh viên thường xuyên tham gia khảo sát địa chất, đo đạc bản đồ và thực tập trực tiếp tại các mỏ khai thác.',
              },
              {
                icon : <Briefcase     size={48} style={{ color: PRIMARY }} />,
                title: 'Nhu cầu nhân lực cao',
                desc : 'Ngành tài nguyên và môi trường luôn cần nguồn nhân lực kỹ thuật chất lượng phục vụ phát triển kinh tế bền vững.',
              },
            ].map(r => (
              <div
                key={r.title}
                className="group bg-white border border-gray-100 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="flex justify-center mb-5">{r.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S4 — MAJOR GROUPS
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Các nhóm ngành đào tạo
            </h2>
            <p className="text-gray-500">HUMG đào tạo đa dạng các nhóm ngành liên quan đến địa chất và tài nguyên</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {majorGroups.map(g => (
              <div
                key={g.id}
                className={`bg-white rounded-2xl shadow-md p-7 border-l-4 ${g.color} hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{g.label}</h3>
                <ul className="space-y-2">
                  {g.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: PRIMARY }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S5 — FEATURED MAJORS
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ngành học nổi bật
            </h2>
            <p className="text-gray-500">Ba ngành học được sinh viên và nhà tuyển dụng đánh giá cao nhất tại HUMG</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMajors.map(m => (
              <div
                key={m.title}
                className="group rounded-[16px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ transform: undefined }}
              >
                <div className="overflow-hidden" style={{ height: 192 }}>
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: PRIMARY_BG, color: PRIMARY }}
                  >
                    {m.tag}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  <button
                    className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
                    style={{ color: PRIMARY }}
                  >
                    Tìm hiểu thêm <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S6 — ADMISSION TIMELINE
      ════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(to bottom, ${PRIMARY_BG}, #ffffff)` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Phương thức tuyển sinh
            </h2>
            <p className="text-gray-500">Trường áp dụng nhiều phương thức xét tuyển linh hoạt</p>
          </div>
          <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
            <div
              className="hidden md:block absolute top-6 h-0.5 bg-gray-200 z-0"
              style={{ left: '16.5%', right: '16.5%' }}
            />
            {admissionSteps.map(s => (
              <div key={s.step} className="relative z-10 flex-1 flex flex-col items-center text-center px-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg mb-4"
                  style={{ background: PRIMARY }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S7 — SUBJECT COMBOS
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Tổ hợp xét tuyển
            </h2>
            <p className="text-gray-500">Các tổ hợp môn thi được áp dụng trong xét tuyển tại HUMG</p>
          </div>
          <div className="max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: PRIMARY }}>
                  <th className="text-white text-left p-4 font-bold">Tổ hợp</th>
                  <th className="text-white text-left p-4 font-bold">Môn thi</th>
                </tr>
              </thead>
              <tbody>
                {combos.map((c, i) => (
                  <tr key={c.code} style={{ background: i % 2 === 0 ? '#ffffff' : PRIMARY_BG }}>
                    <td className="p-4 font-bold" style={{ color: PRIMARY }}>{c.code}</td>
                    <td className="p-4 text-gray-700">{c.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S8 — BENCHMARK SCORES
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Điểm chuẩn năm 2024
            </h2>
            <p className="text-gray-500">
              Điểm chuẩn các ngành dao động từ <strong>18 – 25 điểm</strong>
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {scores.map(s => (
              <div key={s.major}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium text-sm">{s.major}</span>
                  <span className="font-bold text-sm" style={{ color: PRIMARY }}>{s.score} điểm</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-700"
                    style={{
                      width     : `${(s.score / 30) * 100}%`,
                      background: `linear-gradient(to right, ${PRIMARY}, ${PRIMARY_LITE})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S9 — FACILITIES GALLERY
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Cơ sở vật chất
            </h2>
            <p className="text-gray-500">
              Hệ thống phòng thí nghiệm và trung tâm nghiên cứu tiên tiến phục vụ đào tạo thực hành
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-md cursor-pointer"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
            {gallery.map(img => (
              <div key={img.caption} className="text-center text-xs text-gray-500 font-medium">{img.caption}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S10 — ACTIVITIES SLIDER
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hoạt động sinh viên
            </h2>
            <p className="text-gray-500">Phong trào sôi động, câu lạc bộ đa dạng tại HUMG</p>
          </div>

          <div className="relative px-12">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${sliderIdx * 100}%)` }}
              >
                {activities.map((a, i) => (
                  <div key={i} className="min-w-full">
                    <div
                      className="max-w-xl mx-auto rounded-2xl p-10 text-center shadow-md"
                      style={{ background: PRIMARY_BG }}
                    >
                      <div className="text-6xl mb-5">{a.emoji}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:border-green-500 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:border-green-500 transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => setSliderIdx(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  background: sliderIdx === i ? PRIMARY : '#d1d5db',
                  transform : sliderIdx === i ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S11 — EMPLOYERS
      ════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: PRIMARY_BG }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Cơ hội nghề nghiệp
            </h2>
            <p className="text-gray-500">
              Sinh viên HUMG tốt nghiệp được tuyển dụng bởi các tập đoàn và cơ quan hàng đầu trong ngành tài nguyên
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {employers.map(e => (
              <div
                key={e}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{ background: PRIMARY_BG }}
                >
                  <Layers size={18} style={{ color: PRIMARY }} />
                </div>
                <span className="text-xs font-semibold text-gray-700 leading-tight block">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S12 — CTA BANNER
      ════════════════════════════════════════════════ */}
      <section
        className="py-24"
        style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 50%, ${PRIMARY_LITE} 100%)` }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Bạn muốn trở thành kỹ sư địa chất,<br className="hidden md:block" />
            chuyên gia khai thác mỏ hoặc quản lý tài nguyên?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Đại học Mỏ – Địa chất sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng để
            phát triển sự nghiệp trong ngành tài nguyên, địa chất và công nghệ mỏ.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 max-w-sm mx-auto text-white">
              <CheckCircle2 size={48} className="mx-auto mb-3" />
              <div className="font-bold text-lg">Đăng ký thành công!</div>
              <div className="text-sm text-white/80 mt-1">Tư vấn viên sẽ liên hệ bạn trong thời gian sớm nhất.</div>
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
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
                <select
                  value={form.major}
                  onChange={e => setForm({ ...form, major: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm focus:outline-none text-gray-600"
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
                className="w-full mt-5 font-bold py-3.5 rounded-[12px] border-2 transition-colors flex items-center justify-center gap-2 hover:bg-green-50"
                style={{ color: PRIMARY, borderColor: PRIMARY, background: '#ffffff' }}
              >
                Nhận tư vấn miễn phí <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer strip */}
      <div
        className="py-5 text-center text-sm"
        style={{ background: '#111827', color: '#9ca3af' }}
      >
        © 2026 Đại học Mỏ – Địa chất (HUMG). All rights reserved.
      </div>
    </div>
  );
}
