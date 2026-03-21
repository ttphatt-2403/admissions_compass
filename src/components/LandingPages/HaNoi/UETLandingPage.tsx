import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  Menu,
  X,
  TrendingUp,
  BarChart,
  Briefcase,
  Users,
  Globe,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  GraduationCap,
  ClipboardCheck,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { FAQSection } from '../../FAQSection';

const UETLandingPage = () => {
  usePageAnalytics('UET', 'Đại học Công nghệ - ĐHQGHN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const UET_BLUE = '#003F87';
  const UET_RED = '#E31837';
  const [scoreFilter, setScoreFilter] = useState<'all' | 'ge28' | 'ge27' | 'lt27'>('all');
  const [query, setQuery] = useState('');
  const [activeMajorId, setActiveMajorId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('UET Form submitted:', formData);
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const parseScore = (raw: string) => {
    // score formats like "28.19+"
    const n = parseFloat(raw.replace(/[^\d.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  };

  const majors = [
    { id: 'cntt', title: 'Công nghệ Thông tin', score: '28.19+', desc: 'Đào tạo kỹ sư CNTT toàn diện, nắm vững lập trình, hệ thống, mạng và phát triển phần mềm theo chuẩn quốc tế.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800', icon: BookOpen },
    { id: 'khmt', title: 'Khoa học Máy tính', score: '27.86+', desc: 'Nghiên cứu chuyên sâu về giải thuật, cấu trúc dữ liệu, học máy và các nền tảng khoa học máy tính hiện đại.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800', icon: BarChart },
    { id: 'ai', title: 'Trí tuệ Nhân tạo', score: '27.75+', desc: 'Chương trình tiên tiến về AI, deep learning, xử lý ngôn ngữ tự nhiên và thị giác máy tính, bắt kịp xu hướng toàn cầu.', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800', icon: TrendingUp },
    { id: 'ktdktdh', title: 'Kỹ thuật Điều khiển & TĐH', score: '27.90+', desc: 'Đào tạo kỹ sư tự động hóa, điều khiển hệ thống thông minh, robot và IoT phục vụ công nghiệp 4.0.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800', icon: Briefcase },
  ];

  const filteredMajors = majors.filter((m) => {
    const s = parseScore(m.score);
    if (scoreFilter === 'all') return true;
    if (scoreFilter === 'ge28') return s >= 28;
    if (scoreFilter === 'ge27') return s >= 27;
    return s < 27;
  }).filter((m) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q);
  });

  const stats = [
    { value: 'Top 3', label: 'CNTT Việt Nam' },
    { value: '95%', label: 'Có việc làm sau ra trường' },
    { value: '200+', label: 'Đối tác doanh nghiệp' },
    { value: '15.000+', label: 'Sinh viên đang học' },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#003F87] text-black py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4"><span>Sinh viên</span><span>Cựu sinh viên</span><span>Cán bộ - Giảng viên</span></div>
          <div className="flex space-x-4"><span className="flex items-center gap-1"><Globe size={12} /> EN</span><span>Cổng thông tin đào tạo</span></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F39C12] shadow-md bg-white">
                <img
                  src="https://th.bing.com/th/id/OIP.laH_JcHGDoH2eyEeqBrByAHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                  alt="ULIS Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#003F87] font-bold text-lg leading-none uppercase">Đại học Công nghệ</span>
                <span className="text-[#E31837] text-xs font-bold uppercase tracking-wider">VNU University of Engineering and Technology</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Chương trình', 'NCKH', 'Đối tác'].map((item) => {
                const href =
                  item === 'Giới thiệu' ? '#highlights' :
                    item === 'Tuyển sinh' ? '#admissions' :
                      item === 'Chương trình' ? '#finder' :
                        item === 'NCKH' ? '#highlights' :
                          '#partners';
                return (
                  <a
                    key={item}
                    href={href}
                    className="text-slate-700 hover:text-[#003F87] font-semibold transition-colors uppercase text-sm"
                  >
                    {item}
                  </a>
                );
              })}
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#003F87] text-black px-6 py-2 rounded-full font-bold hover:opacity-90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#003F87] focus:ring-offset-2"
              >
                Đăng ký tư vấn
              </button>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#003F87] p-2 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#003F87] focus:ring-offset-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
              {['Giới thiệu', 'Tuyển sinh', 'Chương trình', 'NCKH', 'Đối tác'].map((item) => {
                const href =
                  item === 'Giới thiệu' ? '#highlights' :
                    item === 'Tuyển sinh' ? '#admissions' :
                      item === 'Chương trình' ? '#finder' :
                        item === 'NCKH' ? '#highlights' :
                          '#partners';
                return (
                  <a
                    key={item}
                    href={href}
                    className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 border-b border-slate-100 last:border-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
              <div className="pt-4 pb-2">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#003F87] text-white py-3 rounded font-bold hover:opacity-95 transition-colors focus:outline-none focus:ring-2 focus:ring-[#003F87] focus:ring-offset-2"
                >
                  Đăng ký tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-[550px] md:h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=800"
            alt="Hero"
            className="w-full h-full object-cover scale-105 blur-[3px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f44]/95 via-[#1A5276]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: UET_RED }} />
              Tuyển sinh Đại học chính quy 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Công nghệ đỉnh cao <br />
              <span className="text-[#E31837]">Khai phá tương lai số</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light border-l-4 border-[#E31837] pl-6">
              Trường Đại học Công nghệ – ĐHQGHN, nơi đào tạo kỹ sư và nhà khoa học công nghệ hàng đầu Việt Nam, tiên phong trong nghiên cứu và ứng dụng công nghệ số.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('finder')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#E31837] hover:opacity-90 text-white font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Khám phá Ngành học <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent hover:bg-white/10 border border-white/50 text-white font-bold rounded transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
              >
                <GraduationCap size={20} /> Tư vấn tuyển sinh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Timeline */}
      <section id="admissions" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#003F87]/10 text-[#003F87] text-xs font-bold uppercase tracking-wider mb-5 border border-[#003F87]/15">
              <ClipboardCheck className="w-4 h-4" />
              Quy trình tuyển sinh
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Từ đăng ký đến nhập học</h2>
            <p className="text-slate-600">
              Làm theo 4 bước để nắm chắc lộ trình và tăng cơ hội trúng tuyển vào ngành phù hợp của UET.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Tìm hiểu thông tin',
                desc: 'Xem chương trình, điểm chuẩn dự kiến và các thông tin tuyển sinh quan trọng.',
                icon: BookOpen,
              },
              {
                title: 'Đăng ký xét tuyển',
                desc: 'Điền thông tin để đội ngũ tư vấn hỗ trợ chọn ngành và hướng dẫn hồ sơ.',
                icon: Users,
              },
              {
                title: 'Hoàn thiện hồ sơ',
                desc: 'Chuẩn bị minh chứng và các giấy tờ theo quy định để tham gia xét tuyển.',
                icon: FileText,
              },
              {
                title: 'Xét tuyển & nhập học',
                desc: 'Theo dõi kết quả và thực hiện các thủ tục nhập học đúng thời hạn.',
                icon: CheckCircle2,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#003F87]/10 border border-[#003F87]/15 flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-[#003F87]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#003F87] mb-1">
                      Bước {idx + 1}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Finder */}
      <section id="finder" className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003F87] tracking-tight mb-3">
                Chương trình phù hợp theo điểm chuẩn
              </h2>
              <p className="text-slate-600">
                Tìm ngành bạn quan tâm và lọc nhanh theo ngưỡng điểm chuẩn dự kiến.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="w-full sm:w-72">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Tìm theo ngành</label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="VD: AI, CNTT, Máy tính..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003F87]/30 focus:border-[#003F87]"
                  aria-label="Tìm theo ngành"
                />
              </div>

              <div className="w-full sm:w-56">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Điểm chuẩn</label>
                <select
                  value={scoreFilter}
                  onChange={(e) => setScoreFilter(e.target.value as typeof scoreFilter)}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003F87]/30 focus:border-[#003F87]"
                  aria-label="Lọc theo điểm chuẩn"
                >
                  <option value="all">Tất cả</option>
                  <option value="ge28">28.00+</option>
                  <option value="ge27">27.00+</option>
                  <option value="lt27">Dưới 27.00</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMajors.map((major) => {
              const isActive = activeMajorId === major.id;
              return (
                <div
                  key={major.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={major.image}
                      alt={major.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003F87]/90 via-[#003F87]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold bg-white/90 text-[#003F87] border border-white/40">
                      Điểm chuẩn: {major.score}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <major.icon className="w-10 h-10 text-[#003F87] mb-3 group-hover:text-[#E31837] transition-colors" />
                    <h3 className="text-xl font-bold text-[#003F87] mb-2">{major.title}</h3>
                    <div className="w-12 h-0.5 bg-slate-200 mb-3" />

                    {isActive ? (
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">{major.desc}</p>
                    ) : (
                      <p className="text-slate-600 text-sm line-clamp-3 flex-1">{major.desc}</p>
                    )}

                    <div className="mt-5 flex flex-col gap-2">
                      <button
                        type="button"
                        className="w-full px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#003F87]/20 focus:ring-offset-2"
                        onClick={() => setActiveMajorId(isActive ? null : major.id)}
                      >
                        {isActive ? 'Thu gọn' : 'Xem chi tiết'}
                      </button>
                      <button
                        type="button"
                        className="w-full px-5 py-2.5 bg-[#003F87] hover:bg-[#0A4AA0] text-white font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#003F87]/30 focus:ring-offset-2"
                        onClick={() => {
                          setActiveMajorId(major.id);
                          document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Tư vấn theo ngành
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights & NCKH */}
      <section id="highlights" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003F87]/10 text-[#003F87] border border-[#003F87]/15 mb-5">
                <Users className="w-4 h-4" />
                Nghiên cứu & Giá trị đào tạo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003F87] mb-4">Cái nôi của kỹ sư công nghệ hàng đầu</h2>
              <p className="text-slate-600 mb-8">
                UET – ĐHQGHN là trường đại học kỹ thuật công nghệ uy tín hàng đầu Việt Nam, nơi đào tạo các kỹ sư tài năng đóng góp cho sự phát triển của đất nước và hội nhập quốc tế.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#003F87]/10 flex items-center justify-center border border-[#003F87]/15">
                    <Users className="text-[#E31837]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Đội ngũ giảng viên xuất sắc</h4>
                    <p className="text-slate-600 text-sm">
                      Hơn 300 giảng viên, trong đó 70% có học vị Tiến sĩ trở lên, nhiều giáo sư được đào tạo từ các trường đại học danh tiếng thế giới.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#003F87]/10 flex items-center justify-center border border-[#003F87]/15">
                    <Briefcase className="text-[#E31837]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Kết nối doanh nghiệp mạnh mẽ</h4>
                    <p className="text-slate-600 text-sm">
                      Hơn 200 doanh nghiệp công nghệ lớn như FPT, Viettel, VNG, Samsung, Intel thường xuyên tuyển dụng và hợp tác đào tạo với UET.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
                  className="rounded-2xl shadow-xl translate-y-8 object-cover h-64 w-full border border-slate-100"
                  alt="Campus"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                  className="rounded-2xl shadow-xl object-cover h-64 w-full border border-slate-100"
                  alt="Students"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Stats */}
      <section
        id="partners"
        className="py-24 bg-gradient-to-br from-yellow-400 to-teal-600 text-white relative overflow-hidden"
      >
        {/* Background effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Thành tựu & Đối tác
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Những con số phản ánh chất lượng đào tạo, mạng lưới hợp tác và cơ hội nghề nghiệp.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 
          transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>

                  <div className="h-1 w-14 bg-red-500 mb-4 rounded-full group-hover:w-20 transition-all duration-300" />

                  <div className="text-sm text-white/85 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-5/12 p-10 bg-[#003F87] text-black relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
              <div className="relative z-10">
                <h3 className="text-3xl text-black font-extrabold mb-4">Đăng ký Tư vấn</h3>
                <p className="text-slate-200/90 mb-8">Để lại thông tin, đội ngũ tư vấn sẽ liên hệ ngay.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#E31837]" />
                    <span className="font-medium">024 3754 9386</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#E31837]" />
                    <span className="font-medium">ts@uet.vnu.edu.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-[#E31837]" />
                    <span className="font-medium">144 Xuân Thủy, Cầu Giấy, Hà Nội</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <p className="text-xs text-slate-200 uppercase tracking-widest font-bold mb-2">Follow us</p>
                <div className="flex gap-4">
                  <button type="button" className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" aria-label="Facebook">
                    <Facebook className="hover:text-[#E31837] transition-colors" size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" aria-label="YouTube">
                    <Youtube className="hover:text-[#E31837] transition-colors" size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" aria-label="LinkedIn">
                    <Linkedin className="hover:text-[#E31837] transition-colors" size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 p-10">
              {submitted ? (
                <div
                  className="h-full min-h-[260px] flex flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Đăng ký thành công!</h4>
                  <p className="text-slate-600 text-sm mb-6">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ sớm nhất.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="text-[#003F87] font-semibold text-sm hover:underline">
                    Gửi đăng ký khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#003F87] mb-2">Họ và tên</label>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003F87] focus:ring-2 focus:ring-[#003F87]/20 outline-none transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#003F87] mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003F87] focus:ring-2 focus:ring-[#003F87]/20 outline-none transition-all"
                        placeholder="09xx xxx xxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#003F87] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003F87] focus:ring-2 focus:ring-[#003F87]/20 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#003F87] mb-2">Ngành quan tâm</label>
                    <select
                      name="school"
                      required
                      autoComplete="organization"
                      value={formData.school}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003F87] focus:ring-2 focus:ring-[#003F87]/20 outline-none text-slate-700 transition-all"
                    >
                      <option value="">Chọn ngành học...</option>
                      <option value="cntt">Công nghệ Thông tin</option>
                      <option value="khmt">Khoa học Máy tính</option>
                      <option value="ai">Trí tuệ Nhân tạo</option>
                      <option value="ktdktdh">Kỹ thuật Điều khiển & TĐH</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-3 rounded shadow-md transition-all hover:shadow-lg mt-2"
                    style={{ backgroundColor: UET_BLUE }}
                  >
                    Đăng ký ngay
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UETLandingPage;
