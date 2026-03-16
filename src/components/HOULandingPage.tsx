import React, { useState } from 'react';
import {
  ArrowRight, BookOpen, Briefcase, CheckCircle2,
  ChevronLeft, ChevronRight, Globe, GraduationCap,
  Laptop, MapPin, Menu, Sparkles, Users, X,
} from 'lucide-react';

/* ─── Design tokens ─────────────────────────────────── */
const PRIMARY      = '#1E88E5';
const PRIMARY_DARK = '#1565C0';
const PRIMARY_LITE = '#64B5F6';
const PRIMARY_BG   = '#E3F2FD';

/* ─── Static data ────────────────────────────────────── */
const admissionSteps = [
  {
    step : '01',
    title: 'Xét điểm thi tốt nghiệp THPT',
    desc : 'Tham gia kỳ thi tốt nghiệp THPT quốc gia và đăng ký xét tuyển theo điểm thi.',
  },
  {
    step : '02',
    title: 'Xét học bạ',
    desc : 'Nộp học bạ THPT với điểm trung bình từng môn đạt yêu cầu theo tổ hợp.',
  },
  {
    step : '03',
    title: 'Xét tuyển kết hợp',
    desc : 'Kết hợp điểm thi tốt nghiệp và kết quả học tập THPT theo quy định của trường.',
  },
];

const combos = [
  { code: 'A00', subjects: 'Toán – Lý – Hóa'  },
  { code: 'A01', subjects: 'Toán – Lý – Anh'  },
  { code: 'D01', subjects: 'Toán – Văn – Anh'  },
  { code: 'C00', subjects: 'Văn – Sử – Địa'   },
];

const scores = [
  { major: 'Công nghệ thông tin', score: 25   },
  { major: 'Marketing',           score: 24.5 },
  { major: 'Ngôn ngữ Anh',        score: 24   },
  { major: 'Quản trị kinh doanh', score: 23   },
  { major: 'Quản trị du lịch',    score: 21   },
];

const majorGroups = [
  {
    id   : 'tech',
    label: 'Nhóm Công nghệ',
    color: 'border-[#1E88E5]',
    items: ['Công nghệ thông tin', 'Hệ thống thông tin', 'An ninh mạng'],
  },
  {
    id   : 'business',
    label: 'Nhóm Kinh tế',
    color: 'border-amber-500',
    items: ['Quản trị kinh doanh', 'Kế toán', 'Tài chính ngân hàng', 'Marketing'],
  },
  {
    id   : 'language',
    label: 'Nhóm Ngoại ngữ',
    color: 'border-violet-500',
    items: ['Ngôn ngữ Anh', 'Ngôn ngữ Trung', 'Ngôn ngữ Nhật', 'Ngôn ngữ Hàn'],
  },
  {
    id   : 'tourism',
    label: 'Nhóm Du lịch',
    color: 'border-teal-500',
    items: ['Quản trị du lịch và lữ hành', 'Quản trị khách sạn', 'Ẩm thực & Dịch vụ'],
  },
];

const featuredMajors = [
  {
    img  : 'https://picsum.photos/seed/hou-m1/600/400',
    title: 'Công nghệ thông tin',
    tag  : 'Ngành hot',
    desc : 'Đào tạo lập trình viên, phát triển phần mềm và hệ thống công nghệ đáp ứng nhu cầu thị trường số.',
  },
  {
    img  : 'https://picsum.photos/seed/hou-m2/600/400',
    title: 'Quản trị kinh doanh',
    tag  : 'Cơ hội rộng',
    desc : 'Trang bị kỹ năng quản lý, lãnh đạo và kinh doanh cho sinh viên trong môi trường cạnh tranh toàn cầu.',
  },
  {
    img  : 'https://picsum.photos/seed/hou-m3/600/400',
    title: 'Ngôn ngữ Anh',
    tag  : 'Thị trường cao',
    desc : 'Đào tạo kỹ năng ngôn ngữ, phiên dịch và giao tiếp quốc tế, mở ra cơ hội việc làm đa dạng.',
  },
  {
    img  : 'https://picsum.photos/seed/hou-m4/600/400',
    title: 'Quản trị du lịch',
    tag  : 'Tiềm năng lớn',
    desc : 'Đào tạo chuyên gia ngành du lịch, khách sạn và dịch vụ trong bối cảnh du lịch phục hồi mạnh mẽ.',
  },
];

const gallery = [
  { src: 'https://picsum.photos/seed/hou-g1/600/400', caption: 'Phòng lab CNTT' },
  { src: 'https://picsum.photos/seed/hou-g2/600/400', caption: 'Thư viện điện tử' },
  { src: 'https://picsum.photos/seed/hou-g3/600/400', caption: 'Phòng học hiện đại' },
  { src: 'https://picsum.photos/seed/hou-g4/600/400', caption: 'TT nghiên cứu' },
];

const activities = [
  { emoji: '🌍', title: 'CLB Ngoại ngữ',   desc: 'Giao lưu quốc tế, thi hùng biện và các chương trình học ngôn ngữ sôi động.' },
  { emoji: '🚀', title: 'CLB Khởi nghiệp', desc: 'Ươm mầm ý tưởng, kết nối mentor và nhà đầu tư trong hệ sinh thái startup trẻ.' },
  { emoji: '📡', title: 'CLB Truyền thông', desc: 'Sản xuất nội dung, quản lý mạng xã hội và xây dựng thương hiệu cá nhân.' },
  { emoji: '💻', title: 'CLB Công nghệ',   desc: 'Hackathon, workshop lập trình và dự án công nghệ thực tế cùng các partner doanh nghiệp.' },
];

const employers = [
  'FPT Software', 'VNG', 'Grab', 'Viettel', 'Vingroup', 'KPMG',
  'Deloitte', 'Manulife', 'Techcombank', 'Booking.com', 'Saigontourist', 'Agoda',
];

const navLinks = ['Giới thiệu', 'Ngành học', 'Tuyển sinh', 'Cơ sở vật chất', 'Liên hệ'];

/* ─── Component ─────────────────────────────────────── */
export default function HOULandingPage() {
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
    <div className="text-gray-800 bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 shadow-md" style={{ background: PRIMARY }}>
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
              <GraduationCap size={22} style={{ color: PRIMARY }} />
            </div>
            <div>
              <div className="text-white font-black leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15 }}>
                HOU
              </div>
              <div className="text-white/75 text-[10px] leading-tight hidden sm:block">Đại học Mở Hà Nội</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l} href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">{l}</a>
            ))}
            <button
              className="bg-white font-bold px-5 py-2 rounded-[12px] hover:bg-blue-50 transition-colors text-sm"
              style={{ color: PRIMARY }}
            >
              Đăng ký ngay
            </button>
          </div>

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
          S1 — HERO  (full-width layout)
      ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 45%, ${PRIMARY_LITE} 100%)` }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-0 text-center relative z-10">
          {/* Badge */}
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Đại học công lập – Bộ GD&ĐT
          </span>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-black text-white leading-snug mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Đại học Mở Hà Nội –<br />
            <span className="text-white/90 text-2xl md:text-4xl">
              Cơ hội học tập linh hoạt cho mọi sinh viên
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Tiên phong trong mô hình đào tạo mở, cung cấp nhiều chương trình đào tạo trong các lĩnh vực
            kinh tế, công nghệ, ngoại ngữ và du lịch, giúp sinh viên phát triển toàn diện và thích ứng
            với thị trường lao động hiện đại.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              className="bg-white font-bold px-7 py-3.5 rounded-[12px] hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2"
              style={{ color: PRIMARY }}
            >
              Khám phá ngành học <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-[12px] hover:bg-white/10 transition-all flex items-center gap-2">
              Đăng ký nhận tư vấn tuyển sinh
            </button>
          </div>

          {/* Quick stats bar */}
          <div className="inline-flex items-center gap-8 bg-white/15 backdrop-blur px-10 py-4 rounded-2xl mb-10">
            {[
              { n: '1993',  l: 'Năm thành lập'     },
              { n: '20k+',  l: 'Sinh viên'          },
              { n: '30+',   l: 'Ngành đào tạo'      },
              { n: 'BỘ GD', l: 'Trực thuộc BG&ĐT'  },
            ].map((s, i) => (
              <React.Fragment key={s.l}>
                {i > 0 && <div className="w-px h-8 bg-white/30" />}
                <div className="text-center">
                  <div className="text-xl font-black text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.n}</div>
                  <div className="text-white/70 text-xs mt-0.5 whitespace-nowrap">{s.l}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Hero image */}
          <div className="relative max-w-4xl mx-auto rounded-t-3xl overflow-hidden shadow-2xl border-t-4 border-x-4 border-white/30">
            <img
              src="https://picsum.photos/seed/hou-hero/1200/500"
              alt="HOU Campus"
              className="w-full object-cover"
              style={{ height: 320 }}
            />
            {/* Gradient fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          S2 — OVERVIEW
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Tổng quan về trường
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Đại học Mở Hà Nội được thành lập năm 1993, là một trong những trường tiên phong trong
              mô hình đào tạo mở tại Việt Nam, trực thuộc Bộ Giáo dục và Đào tạo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { n: '1993',  l: 'Năm thành lập',      icon: <GraduationCap size={24} style={{ color: PRIMARY }} /> },
              { n: '20.000+', l: 'Sinh viên đang học', icon: <Users        size={24} style={{ color: PRIMARY }} /> },
              { n: '30+',   l: 'Ngành đào tạo',       icon: <BookOpen     size={24} style={{ color: PRIMARY }} /> },
              { n: 'Hà Nội', l: 'Thủ đô',             icon: <MapPin       size={24} style={{ color: PRIMARY }} /> },
            ].map(s => (
              <div key={s.l} className="bg-white rounded-[14px] shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div
                  className="font-black mb-2"
                  style={{ color: PRIMARY, fontFamily: "'Poppins', sans-serif", fontSize: s.n.length > 5 ? 24 : 38 }}
                >
                  {s.n}
                </div>
                <div className="text-gray-500 text-sm">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Trường đào tạo nhiều lĩnh vực:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {['Công nghệ thông tin', 'Kinh tế – Quản trị', 'Ngoại ngữ', 'Du lịch – Khách sạn', 'Kế toán – Tài chính', 'Luật học'].map(f => (
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Vì sao nên chọn HOU?
            </h2>
            <p className="text-gray-500">Ba điểm nổi bật khiến HOU là lựa chọn lý tưởng cho hành trình đại học của bạn</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon : <Sparkles size={48} style={{ color: PRIMARY }} />,
                title: 'Chương trình đào tạo linh hoạt',
                desc : 'Sinh viên có thể lựa chọn nhiều hình thức học phù hợp – chính quy, vừa làm vừa học, trực tuyến.',
              },
              {
                icon : <BookOpen size={48} style={{ color: PRIMARY }} />,
                title: 'Ngành học đa dạng',
                desc : 'Trường đào tạo hơn 30 ngành từ công nghệ, kinh tế đến ngoại ngữ và du lịch – đáp ứng mọi đam mê.',
              },
              {
                icon : <Laptop   size={48} style={{ color: PRIMARY }} />,
                title: 'Môi trường học tập hiện đại',
                desc : 'Sinh viên được học trong môi trường năng động, sáng tạo với cơ sở vật chất và công nghệ tiên tiến.',
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Các nhóm ngành đào tạo
            </h2>
            <p className="text-gray-500">HOU đào tạo đa dạng – từ công nghệ, kinh tế đến ngoại ngữ và du lịch</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {majorGroups.map(g => (
              <div key={g.id} className={`bg-white rounded-2xl shadow-md p-7 border-l-4 ${g.color} hover:shadow-lg transition-shadow`}>
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
          S5 — FEATURED MAJORS (4-card grid)
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ngành học nổi bật
            </h2>
            <p className="text-gray-500">Bốn ngành học được sinh viên và nhà tuyển dụng đánh giá cao nhất tại HOU</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMajors.map(m => (
              <div
                key={m.title}
                className="group rounded-[16px] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                style={{ transform: 'translateY(0)' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div className="overflow-hidden" style={{ height: 160 }}>
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: PRIMARY_BG, color: PRIMARY }}
                  >
                    {m.tag}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                  <button className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: PRIMARY }}>
                    Tìm hiểu thêm <ArrowRight size={12} />
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
      <section className="py-20" style={{ background: `linear-gradient(to bottom, ${PRIMARY_BG}, #ffffff)` }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Phương thức tuyển sinh
            </h2>
            <p className="text-gray-500">Trường áp dụng nhiều phương thức xét tuyển linh hoạt</p>
          </div>
          <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
            <div className="hidden md:block absolute top-6 h-0.5 bg-gray-200 z-0" style={{ left: '16.5%', right: '16.5%' }} />
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Tổ hợp xét tuyển
            </h2>
            <p className="text-gray-500">Các tổ hợp môn thi được áp dụng trong xét tuyển tại HOU</p>
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Điểm chuẩn năm 2024
            </h2>
            <p className="text-gray-500">Điểm chuẩn các ngành dao động từ <strong>20 – 25 điểm</strong></p>
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
                    style={{ width: `${(s.score / 30) * 100}%`, background: `linear-gradient(to right, ${PRIMARY_DARK}, ${PRIMARY_LITE})` }}
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Cơ sở vật chất
            </h2>
            <p className="text-gray-500">Hệ thống phòng học, lab công nghệ và thư viện hiện đại phục vụ học tập và nghiên cứu</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-md cursor-pointer" style={{ aspectRatio: '4/3' }}>
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Hoạt động sinh viên
            </h2>
            <p className="text-gray-500">Phong trào sôi động, câu lạc bộ đa dạng tại HOU</p>
          </div>
          <div className="relative px-12">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${sliderIdx * 100}%)` }}
              >
                {activities.map((a, i) => (
                  <div key={i} className="min-w-full">
                    <div className="max-w-xl mx-auto rounded-2xl p-10 text-center shadow-md" style={{ background: PRIMARY_BG }}>
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
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:border-blue-400 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:border-blue-400 transition-colors"
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
                style={{ background: sliderIdx === i ? PRIMARY : '#d1d5db', transform: sliderIdx === i ? 'scale(1.3)' : 'scale(1)' }}
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
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Cơ hội nghề nghiệp
            </h2>
            <p className="text-gray-500">
              Sinh viên HOU tốt nghiệp được tuyển dụng bởi các doanh nghiệp và tổ chức trong và ngoài nước
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {employers.map(e => (
              <div key={e} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ background: PRIMARY_BG }}>
                  <Globe size={18} style={{ color: PRIMARY }} />
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Bạn muốn học tập trong môi trường năng động<br className="hidden md:block" />
            với nhiều cơ hội phát triển?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Đại học Mở Hà Nội sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng
            để thành công trong tương lai với chương trình đào tạo linh hoạt và hiện đại.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 max-w-sm mx-auto text-white">
              <CheckCircle2 size={48} className="mx-auto mb-3" />
              <div className="font-bold text-lg">Đăng ký thành công!</div>
              <div className="text-sm text-white/80 mt-1">Tư vấn viên sẽ liên hệ bạn trong thời gian sớm nhất.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
              <div className="space-y-4 text-left">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
                <select
                  value={form.major}
                  onChange={e => setForm({ ...form, major: e.target.value })}
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm focus:outline-none text-gray-600"
                >
                  <option value="">Chọn ngành quan tâm</option>
                  <option>Công nghệ thông tin</option>
                  <option>Quản trị kinh doanh</option>
                  <option>Ngôn ngữ Anh</option>
                  <option>Quản trị du lịch và lữ hành</option>
                  <option>Kế toán</option>
                  <option>Marketing</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-5 font-bold py-3.5 rounded-[12px] border-2 transition-colors flex items-center justify-center gap-2 hover:bg-blue-50"
                style={{ color: PRIMARY, borderColor: PRIMARY, background: '#ffffff' }}
              >
                Nhận tư vấn miễn phí <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer strip */}
      <div className="py-5 text-center text-sm" style={{ background: '#111827', color: '#9ca3af' }}>
        © 2026 Đại học Mở Hà Nội (HOU). All rights reserved.
      </div>
    </div>
  );
}
