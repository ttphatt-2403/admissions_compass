import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import { 
  Menu, X, Search, ChevronRight, TrendingUp, DollarSign, 
  BarChart, Briefcase, Users, Globe, Award, BookOpen, 
  Phone, Mail, MapPin, Facebook, Linkedin, Youtube, 
  ArrowRight, Star, GraduationCap
} from 'lucide-react';

const NEULandingPage = () => {
  usePageAnalytics('NEU', 'Đại học Kinh tế Quốc dân');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 'econ',
      title: 'Kinh tế học',
      score: '27.5+',
      desc: 'Nền tảng tư duy kinh tế vững chắc, phân tích chính sách và dự báo xu hướng thị trường.',
      image: 'https://images.unsplash.com/photo-1666243035395-9b7853cecc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMGVjb25vbWljcyUyMHVuaXZlcnNpdHklMjB2aWV0bmFtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxNDc5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: TrendingUp
    },
    {
      id: 'finance',
      title: 'Tài chính - Ngân hàng',
      score: '28.0+',
      desc: 'Đào tạo chuyên gia tài chính, ngân hàng, đầu tư với khả năng quản trị rủi ro vượt trội.',
      image: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbnRlcm5zaGlwJTIwb2ZmaWNlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNDc5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: DollarSign
    },
    {
      id: 'marketing',
      title: 'Marketing',
      score: '28.0+',
      desc: 'Sáng tạo và dẫn dắt thị trường với các chiến lược Marketing hiện đại trong kỷ nguyên số.',
      image: 'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnRzJTIwcHJlc2VudGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTQ3OTcyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: BarChart
    },
    {
      id: 'ba',
      title: 'Quản trị Kinh doanh',
      score: '27.8+',
      desc: 'Đào tạo nhà quản trị toàn năng, sẵn sàng điều hành doanh nghiệp trong môi trường quốc tế.',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE0Nzk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Briefcase
    }
  ];

  const stats = [
    { value: "Top 1", label: "Đại học Kinh tế tại Việt Nam" },
    { value: "98%", label: "Sinh viên có việc làm ngay khi tốt nghiệp" },
    { value: "500+", label: "Đối tác doanh nghiệp lớn" },
    { value: "45.000+", label: "Cộng đồng sinh viên năng động" }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span>Sinh viên</span>
            <span>Cựu sinh viên</span>
            <span>Cán bộ - Giảng viên</span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center gap-1"><Globe size={12}/> EN</span>
            <span>Cổng thông tin đào tạo</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-[#C5A065]">
                NEU
              </div>
              <div className="flex flex-col">
                <span className="text-[#003366] font-bold text-lg leading-none uppercase">Đại học Kinh tế Quốc dân</span>
                <span className="text-[#C5A065] text-xs font-bold uppercase tracking-wider">National Economics University</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                <a key={item} href="#" className="text-slate-700 hover:text-[#003366] font-semibold transition-colors uppercase text-sm">
                  {item}
                </a>
              ))}
              <Search className="w-5 h-5 text-slate-500 cursor-pointer hover:text-[#003366]" />
              <button 
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-[#003366] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-900 transition-colors shadow-lg border border-[#C5A065]"
              >
                Đăng ký xét tuyển
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#003366]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 py-2 space-y-1">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                <a key={item} href="#" className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#003366] border-b border-slate-100 last:border-0">
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <button 
                  onClick={() => {
                    document.getElementById('consultation-form')?.scrollIntoView({behavior: 'smooth'});
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#003366] text-white py-3 rounded font-bold"
                >
                  Đăng ký tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE0Nzk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="NEU Lecture Hall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-in slide-in-from-left duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 text-[#C5A065] fill-[#C5A065]" />
              Tuyển sinh Đại học chính quy 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Dẫn đầu tư duy <br/>
              <span className="text-[#C5A065]">Kiến tạo tương lai</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light border-l-4 border-[#C5A065] pl-6">
              Đại học Kinh tế Quốc dân - Cái nôi đào tạo những nhà lãnh đạo, doanh nhân và chuyên gia kinh tế hàng đầu Việt Nam. Nơi tri thức hội tụ và lan tỏa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('majors')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 bg-[#C5A065] hover:bg-[#b08d55] text-[#003366] font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Khám phá Ngành học <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold rounded transition-all flex items-center justify-center gap-2">
                <GraduationCap size={20} /> Thông tin Tuyển sinh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl grid grid-cols-2 md:grid-cols-4 p-8 md:p-12 gap-8 border-t-4 border-[#003366]">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="h-1 w-12 bg-[#C5A065] mx-auto mb-3 rounded-full"></div>
              <div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Majors Grid */}
      <section id="majors" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] uppercase tracking-tight mb-4">
              Các Ngành <span className="text-[#C5A065]">Mũi Nhọn</span>
            </h2>
            <div className="w-24 h-1 bg-[#003366] mx-auto rounded mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-600">
              Chương trình đào tạo tiên tiến, cập nhật theo chuẩn quốc tế, trang bị kiến thức và kỹ năng toàn diện cho sinh viên.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majors.map((major) => (
              <div key={major.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img src={major.image} alt={major.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#003366]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 border border-white text-white font-bold rounded-full hover:bg-white hover:text-[#003366] transition-colors">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <major.icon className="w-10 h-10 text-[#003366] mb-3 group-hover:text-[#C5A065] transition-colors" />
                    <h3 className="text-xl font-bold text-[#003366] mb-2 group-hover:text-[#C5A065] transition-colors">{major.title}</h3>
                    <div className="w-12 h-0.5 bg-slate-200 mb-3"></div>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">{major.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-500">Điểm chuẩn:</span>
                    <span className="font-bold text-[#C5A065]">{major.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-[#003366] text-[#003366] font-bold hover:bg-[#003366] hover:text-white transition-colors rounded shadow-sm uppercase tracking-wide text-sm">
              Xem toàn bộ 30+ Ngành học <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose NEU */}
      <section className="py-24 bg-[#003366] text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border-2 border-white/10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-2 border-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-[#C5A065] text-[#003366] text-xs font-bold uppercase tracking-wider mb-4 rounded">Tại sao chọn NEU?</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Bệ phóng vững chắc cho <br/> sự nghiệp thành công</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                NEU không chỉ cung cấp kiến thức, chúng tôi xây dựng mạng lưới kết nối giá trị. Sinh viên được tiếp cận với các doanh nghiệp hàng đầu ngay từ năm nhất qua các chương trình Company Visit, Internship và Mentoring.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-[#C5A065]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Mạng lưới Alumni quyền lực</h4>
                    <p className="text-slate-400 text-sm">Kết nối với hơn 100.000 cựu sinh viên thành đạt, nhiều người là CEO, lãnh đạo cấp cao.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Briefcase className="text-[#C5A065]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Cơ hội thực tập & Việc làm</h4>
                    <p className="text-slate-400 text-sm">Hợp tác chiến lược với Big4, các ngân hàng và tập đoàn đa quốc gia. 98% sinh viên có việc làm ngay.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                    src="https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBhbHVtbmklMjBncmFkdWF0aW9ufGVufDF8fHx8MTc3MTQ3OTcyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    className="rounded-lg shadow-xl translate-y-8 object-cover h-64 w-full" 
                    alt="Alumni"
                />
                <img 
                    src="https://images.unsplash.com/photo-1754531976838-436a70636c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbnRlcm5zaGlwJTIwb2ZmaWNlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNDc5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    className="rounded-lg shadow-xl object-cover h-64 w-full" 
                    alt="Internship"
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-[#C5A065] p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                <p className="text-[#003366] font-bold italic text-lg leading-snug">"NEU là nơi tôi rèn luyện bản lĩnh và tư duy để khởi nghiệp thành công."</p>
                <div className="mt-4 flex items-center gap-3">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#003366]">A</div>
                   <div>
                       <div className="font-bold text-[#003366] text-sm">Nguyễn Văn A</div>
                       <div className="text-[#003366]/80 text-xs">CEO Tech Corp - Alumni K50</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-2xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                        <Award className="text-[#C5A065]" /> Phương thức Xét tuyển 2026
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                            <div>
                                <strong className="block text-slate-800">Xét tuyển thẳng</strong>
                                <span className="text-slate-600 text-sm">Theo quy chế của Bộ GD&ĐT và Đề án của trường.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                            <div>
                                <strong className="block text-slate-800">Xét tuyển kết hợp</strong>
                                <span className="text-slate-600 text-sm">Kết hợp chứng chỉ quốc tế (IELTS/SAT/ACT) và điểm thi THPT/ĐGNL.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                            <div>
                                <strong className="block text-slate-800">Xét tuyển theo kết quả thi THPT</strong>
                                <span className="text-slate-600 text-sm">Dựa trên tổ hợp môn xét tuyển truyền thống (A00, A01, D01, D07...)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-[#003366] to-[#004080] p-8 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <DollarSign size={120} />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                        <Star className="text-[#C5A065] fill-[#C5A065]" /> Học bổng & Hỗ trợ
                    </h3>
                    <div className="space-y-6 relative z-10">
                        <div>
                            <h4 className="font-bold text-[#C5A065] text-lg mb-1">Học bổng Thủ khoa</h4>
                            <p className="text-blue-100 text-sm">Miễn 100% học phí toàn khóa cho Thủ khoa đầu vào và các thí sinh đạt giải Quốc tế.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#C5A065] text-lg mb-1">Học bổng Khuyến khích học tập</h4>
                            <p className="text-blue-100 text-sm">Xét duyệt theo từng kỳ học dành cho sinh viên có thành tích xuất sắc nhất.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#C5A065] text-lg mb-1">Học bổng Doanh nghiệp</h4>
                            <p className="text-blue-100 text-sm">Hơn 500 suất học bổng tài trợ từ các đối tác doanh nghiệp hàng năm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-5/12 p-10 bg-[#003366] text-white flex flex-col justify-between relative overflow-hidden">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold mb-4">Đăng ký Tư vấn</h3>
                 <p className="text-blue-100 mb-8">Bạn cần tư vấn về chọn ngành, phương thức xét tuyển hay học bổng? Hãy để lại thông tin, đội ngũ tư vấn NEU sẽ liên hệ ngay.</p>
                 
                 <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <Phone size={20} className="text-[#C5A065]"/>
                     <span className="font-medium">024 3628 0280</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <Mail size={20} className="text-[#C5A065]"/>
                     <span className="font-medium">tuyensinh@neu.edu.vn</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <MapPin size={20} className="text-[#C5A065]"/>
                     <span className="font-medium">207 Giải Phóng, Đồng Tâm, Hà Nội</span>
                   </div>
                 </div>
               </div>
               
               <div className="mt-12 relative z-10">
                   <p className="text-xs text-blue-300 uppercase tracking-widest font-bold mb-2">Follow us</p>
                   <div className="flex gap-4">
                       <Facebook className="hover:text-[#C5A065] cursor-pointer transition-colors" />
                       <Youtube className="hover:text-[#C5A065] cursor-pointer transition-colors" />
                       <Linkedin className="hover:text-[#C5A065] cursor-pointer transition-colors" />
                   </div>
               </div>
            </div>
            
            <div className="md:w-7/12 p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#003366] mb-2">Họ và tên</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#003366] mb-2">Số điện thoại</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all" placeholder="09xx xxx xxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003366] mb-2">Email liên hệ</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003366] mb-2">Ngành quan tâm</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all text-slate-700">
                    <option value="">Chọn ngành học...</option>
                    <option value="econ">Kinh tế học</option>
                    <option value="finance">Tài chính - Ngân hàng</option>
                    <option value="marketing">Marketing</option>
                    <option value="ba">Quản trị Kinh doanh</option>
                    <option value="acco">Kế toán - Kiểm toán</option>
                    <option value="ib">Kinh doanh Quốc tế</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#003366] mb-2">Câu hỏi của bạn</label>
                  <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all h-24 resize-none" placeholder="Bạn cần tư vấn thêm về điều gì?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#003366] hover:bg-blue-900 text-white font-bold py-4 rounded shadow-lg transition-all uppercase tracking-wide border-b-4 border-blue-900 active:border-0 active:translate-y-1">
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-[#003366] text-slate-300 py-12 border-t border-[#004080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#003366] font-bold shadow border-2 border-[#C5A065]">N</div>
                <span className="text-white font-bold text-lg uppercase">Trường Đại học Kinh tế Quốc dân</span>
              </div>
              <p className="text-sm text-slate-400 mb-6 max-w-sm">
                Đơn vị hàng đầu trong đào tạo nguồn nhân lực chất lượng cao về kinh tế, quản lý và quản trị kinh doanh tại Việt Nam.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#004080] rounded flex items-center justify-center hover:bg-[#C5A065] hover:text-[#003366] transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#004080] rounded flex items-center justify-center hover:bg-[#C5A065] hover:text-[#003366] transition-all"><Youtube size={18} /></a>
                <a href="#" className="w-10 h-10 bg-[#004080] rounded flex items-center justify-center hover:bg-[#C5A065] hover:text-[#003366] transition-all"><Linkedin size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6 border-b border-[#C5A065] inline-block pb-1">Liên kết</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#C5A065] transition-colors">Cổng thông tin tuyển sinh</a></li>
                <li><a href="#" className="hover:text-[#C5A065] transition-colors">Chương trình đào tạo</a></li>
                <li><a href="#" className="hover:text-[#C5A065] transition-colors">Học bổng & Hỗ trợ</a></li>
                <li><a href="#" className="hover:text-[#C5A065] transition-colors">Cựu sinh viên</a></li>
                <li><a href="#" className="hover:text-[#C5A065] transition-colors">Hợp tác quốc tế</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6 border-b border-[#C5A065] inline-block pb-1">Liên hệ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-[#C5A065] shrink-0" />
                  <span>207 Giải Phóng, Đồng Tâm, Quận Hai Bà Trưng, Hà Nội</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C5A065] shrink-0" />
                  <span>(84)24 3628 0280</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C5A065] shrink-0" />
                  <span>tuyensinh@neu.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#004080] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2026 National Economics University. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default NEULandingPage;
