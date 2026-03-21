import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  Menu,
  X,
  Search,
  ArrowRight,
  TrendingUp,
  BarChart,
  Briefcase,
  Users,
  Globe,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Star,
  GraduationCap,
  CheckCircle2,
  ClipboardCheck,
  FileText
} from 'lucide-react';

const HUPLandingPage = () => {
  usePageAnalytics('HUP', 'Đại học Cảnh sát nhân dân');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const HUP_GREEN = '#1B5E20';
  const HUP_BLUE = '#1A5276';
  const [query, setQuery] = useState('');
  const [scoreFilter, setScoreFilter] = useState<'all' | 'ge27' | 'ge25' | 'lt25'>('all');
  const [activeMajorId, setActiveMajorId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: '',
    question: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('HUP Form submitted:', formData);
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const majors = [
    { id: 'duochoc', title: 'Dược học', score: '27.20+', desc: 'Đào tạo dược sĩ đại học toàn diện, có năng lực nghiên cứu, sản xuất, kiểm nghiệm và cung ứng thuốc theo chuẩn quốc tế GMP.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800', icon: Award },
    { id: 'duocly', title: 'Dược lý Lâm sàng', score: '25.80+', desc: 'Chuyên ngành đào tạo dược sĩ lâm sàng, tư vấn sử dụng thuốc an toàn, hợp lý trong bệnh viện và cơ sở y tế.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800', icon: BookOpen },
    { id: 'ktduoc', title: 'Kỹ thuật Dược', score: '24.50+', desc: 'Đào tạo kỹ sư dược phẩm, sản xuất và kiểm tra chất lượng thuốc, vận hành thiết bị trong nhà máy dược phẩm hiện đại.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', icon: TrendingUp },
    { id: 'cnshduoc', title: 'Công nghệ Sinh học Dược', score: '24.00+', desc: 'Nghiên cứu và ứng dụng công nghệ sinh học trong sản xuất dược phẩm sinh học, vaccine và các sản phẩm y sinh.', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800', icon: BarChart },
  ];

  const stats = [
    { value: 'Top 1', label: 'Dược Việt Nam' },
    { value: '98%', label: 'Có việc làm sau ra trường' },
    { value: '80+', label: 'Bệnh viện đối tác' },
    { value: '5.000+', label: 'Sinh viên đang học' },
  ];

  const parseScore = (raw: string) => {
    // score formats like "27.20+"
    const n = parseFloat(raw.replace(/[^\d.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  };

  const filteredMajors = majors.filter((m) => {
    const s = parseScore(m.score);
    const q = query.trim().toLowerCase();

    const passQuery = !q || m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q);

    const passScore =
      scoreFilter === 'all' ? true : scoreFilter === 'ge27' ? s >= 27 : scoreFilter === 'ge25' ? s >= 25 : s < 25;

    return passQuery && passScore;
  });

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1B5E20] text-white py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4"><span>Sinh viên</span><span>Cựu sinh viên</span><span>Cán bộ - Giảng viên</span></div>
          <div className="flex space-x-4"><span className="flex items-center gap-1"><Globe size={12} /> EN</span><span>Cổng thông tin đào tạo</span></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F39C12] shadow-md bg-white">
                <img
                  src="https://navigates.vn/wp-content/uploads/2023/06/dai-hoc-duoc-ha-noi.jpg"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1B5E20] font-bold text-lg leading-none uppercase">Đại học Dược Hà Nội</span>
                <span className="text-[#4CAF50] text-xs font-bold uppercase tracking-wider">Hanoi University of Pharmacy</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => {
                const href =
                  item === 'Giới thiệu' ? '#highlights' :
                    item === 'Tuyển sinh' ? '#admissions' :
                      item === 'Đào tạo' ? '#program-finder' :
                        item === 'Nghiên cứu' ? '#highlights' :
                          '#consultation-form';
                return (
                  <a
                    key={item}
                    href={href}
                    className="text-slate-700 hover:text-[#1B5E20] font-semibold transition-colors uppercase text-sm"
                  >
                    {item}
                  </a>
                );
              })}
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold hover:opacity-90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2"
              >
                Đăng ký tư vấn
              </button>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1B5E20] p-2 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 py-2 space-y-1">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => {
                const href =
                  item === 'Giới thiệu' ? '#highlights' :
                    item === 'Tuyển sinh' ? '#admissions' :
                      item === 'Đào tạo' ? '#program-finder' :
                        item === 'Nghiên cứu' ? '#highlights' :
                          '#consultation-form';
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
                  className="w-full bg-[#1B5E20] text-white py-3 rounded font-bold hover:opacity-95 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2"
                >
                  Đăng ký tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* gradient tạo chiều sâu */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f44]/95 via-[#1A5276]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 text-[#4CAF50] fill-[#4CAF50]" />Tuyển sinh Đại học chính quy 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">Nghề cao quý <br /><span className="text-[#4CAF50]">Chăm sóc sức khỏe cộng đồng</span></h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light border-l-4 border-[#4CAF50] pl-6">Trường Đại học Dược Hà Nội, cơ sở đào tạo dược sĩ hàng đầu Việt Nam, tiên phong trong nghiên cứu khoa học dược và phát triển thuốc phục vụ sức khỏe cộng đồng.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('program-finder')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-br from-red-500 to-orange-600 hover:opacity-90 text-white font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Khám phá ngành học <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-br from-orange-400 to-teal-600 hover:bg-white/10 border border-white/70 text-white font-bold rounded transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              >
                <GraduationCap size={20} /> Tư vấn tuyển sinh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl grid grid-cols-2 md:grid-cols-4 p-8 md:p-12 gap-8 border-t-4 border-[#1B5E20]">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group rounded-xl p-2">
              <div className="text-3xl md:text-4xl font-extrabold text-[#1B5E20] mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="h-1 w-12 bg-[#4CAF50] mx-auto mb-3 rounded-full"></div>
              <div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions Timeline */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1B5E20]/15">
              <ClipboardCheck className="w-4 h-4" />
              Quy trình tuyển sinh
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Từ tìm hiểu đến nhập học</h2>
            <p className="text-slate-600">Lộ trình rõ ràng giúp bạn chủ động chuẩn bị hồ sơ và tăng cơ hội trúng tuyển.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tìm hiểu chương trình', desc: 'Xem ngành học, điểm chuẩn và thông tin tuyển sinh cập nhật.', icon: BookOpen },
              { title: 'Đăng ký xét tuyển', desc: 'Điền thông tin để đội ngũ tư vấn hỗ trợ chọn ngành phù hợp.', icon: Users },
              { title: 'Chuẩn bị hồ sơ', desc: 'Rà soát giấy tờ và chuẩn bị minh chứng theo quy định.', icon: FileText },
              { title: 'Xét tuyển & nhập học', desc: 'Theo dõi kết quả và hoàn tất thủ tục nhập học đúng thời hạn.', icon: CheckCircle2 },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#1B5E20]/15 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#1B5E20]" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Finder */}
      <section id="program-finder" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] uppercase tracking-tight mb-4">
              Chương trình phù hợp <span className="text-[#4CAF50]">theo điểm chuẩn</span>
            </h2>
            <div className="w-24 h-1 bg-[#1B5E20] mx-auto rounded mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-600">
              Tìm theo ngành bạn quan tâm và lọc nhanh theo ngưỡng điểm chuẩn dự kiến.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Tìm theo ngành</label>
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="VD: Dược học, Dược lý, Dược phẩm..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/20 focus:border-[#1B5E20] transition-all"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Điểm chuẩn</label>
              <select
                value={scoreFilter}
                onChange={(e) => setScoreFilter(e.target.value as typeof scoreFilter)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/20 focus:border-[#1B5E20] transition-all"
              >
                <option value="all">Tất cả</option>
                <option value="ge27">27.00+</option>
                <option value="ge25">25.00+</option>
                <option value="lt25">Dưới 25.00</option>
              </select>
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
                    <div className="absolute inset-0 bg-[#1B5E20]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        className="px-6 py-2 border border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-[#1B5E20] transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 border border-white/40 rounded-full px-3 py-1 text-xs font-bold text-[#1B5E20] shadow-sm">
                      {major.score}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <major.icon className="w-10 h-10 text-[#1B5E20] mb-3 group-hover:text-[#4CAF50] transition-colors" />
                    <h3 className="text-xl font-extrabold text-[#1B5E20] mb-2">{major.title}</h3>
                    <div className="w-12 h-0.5 bg-slate-200 mb-3"></div>

                    {isActive ? (
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">{major.desc}</p>
                    ) : (
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">{major.desc}</p>
                    )}

                    <div className="mt-auto pt-4 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveMajorId(isActive ? null : major.id)}
                        className="w-full px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/20 focus:ring-offset-2"
                      >
                        {isActive ? 'Thu gọn' : 'Mở rộng'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMajorId(major.id);
                          document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full px-4 py-2 rounded-xl bg-[#1B5E20] hover:bg-[#185126] text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/30 focus:ring-offset-2"
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

      {/* Why Choose */}
      <section id="highlights" className="py-24 bg-gradient-to-br from-yellow-400 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border-2 border-white/10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-2 border-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 rounded-full border border-white/20">
                Vì sao chọn HUP?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nơi nuôi dưỡng chuyên môn dược bền vững</h2>
              <p className="text-slate-200/95 text-lg mb-8 leading-relaxed">
                HUP tập trung đào tạo dược sĩ chuyên sâu, kết hợp thực hành tại hệ thống bệnh viện và hoạt động nghiên cứu khoa học dược hiện đại.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/15">
                    <Users className="text-[#4CAF50]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Đội ngũ giảng viên chuyên gia</h4>
                    <p className="text-slate-300/90 text-sm">
                      Hơn 200 giảng viên và chuyên gia có kinh nghiệm trực tiếp tại bệnh viện, nhà thuốc và doanh nghiệp dược.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/15">
                    <Briefcase className="text-[#4CAF50]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Thực hành gắn với thực tiễn</h4>
                    <p className="text-slate-300/90 text-sm">
                      Sinh viên được thực tập tại mạng lưới đối tác và môi trường chuyên môn, hỗ trợ hình thành năng lực nghề nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
                  className="rounded-2xl shadow-xl translate-y-8 object-cover h-64 w-full border border-white/10"
                  alt="Campus"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                  className="rounded-2xl shadow-xl object-cover h-64 w-full border border-white/10"
                  alt="Students"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-5/12 p-10 bg-[#1B5E20] text-black flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Đăng ký Tư vấn</h3>
                <p className="text-green-100 mb-8">Để lại thông tin, đội ngũ tư vấn sẽ liên hệ ngay.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><Phone size={20} className="text-[#4CAF50]" /><span className="font-medium">024 3933 5435</span></div>
                  <div className="flex items-center gap-3"><Mail size={20} className="text-[#4CAF50]" /><span className="font-medium">ts@hup.edu.vn</span></div>
                  <div className="flex items-center gap-3"><MapPin size={20} className="text-[#4CAF50]" /><span className="font-medium">13-15 Lê Thánh Tông, Hoàn Kiếm, Hà Nội</span></div>
                </div>
              </div>
              <div className="mt-12 relative z-10">
                <p className="text-xs text-green-300 uppercase tracking-widest font-bold mb-2">Follow us</p>
                <div className="flex gap-4"><Facebook className="hover:text-[#4CAF50] cursor-pointer transition-colors" /><Youtube className="hover:text-[#4CAF50] cursor-pointer transition-colors" /><Linkedin className="hover:text-[#4CAF50] cursor-pointer transition-colors" /></div>
              </div>
            </div>
            <div className="md:w-7/12 p-10">
              {submitted ? (
                <div
                  className="h-full min-h-[260px] flex flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Đăng ký thành công!</h4>
                  <p className="text-slate-600 text-sm mb-6">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ sớm nhất.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[#1B5E20] font-semibold text-sm hover:underline"
                  >
                    Gửi đăng ký khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1B5E20] mb-2">Họ và tên</label>
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/20 outline-none transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1B5E20] mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/20 outline-none transition-all"
                        placeholder="09xx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1B5E20] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/20 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1B5E20] mb-2">Ngành quan tâm</label>
                    <select
                      name="school"
                      required
                      autoComplete="organization"
                      value={formData.school}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/20 outline-none text-slate-700 transition-all"
                    >
                      <option value="">Chọn ngành học...</option>
                      {majors.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1B5E20] mb-2">Câu hỏi</label>
                    <textarea
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/20 outline-none h-24 resize-none transition-all"
                      placeholder="Bạn cần tư vấn về điều gì?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black hover:from-green-600 hover:to-green-700 font-bold py-4 rounded shadow-lg transition-all uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/30 focus:ring-offset-2"
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

export default HUPLandingPage;
