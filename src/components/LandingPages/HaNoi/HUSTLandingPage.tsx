import React, { useState } from 'react';
import {
  Menu, X, Search, ChevronRight, Beaker, Cpu,
  Code, Cog, Users, Trophy, BookOpen, MapPin,
  Phone, Mail, Facebook, Linkedin, Youtube, Globe,
  ArrowRight, Award, Zap
} from 'lucide-react';

const HUSTLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('programs');

  const programs = [
    {
      id: 'it',
      title: 'CNTT & Khoa học máy tính',
      score: '28.5+',
      desc: 'Chương trình đào tạo hàng đầu về AI, Khoa học dữ liệu, An toàn thông tin và Công nghệ phần mềm.',
      image: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3NzE0Nzg5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Code
    },
    {
      id: 'mech',
      title: 'Kỹ thuật Cơ khí & Chế tạo',
      score: '26.0+',
      desc: 'Cái nôi của các kỹ sư chế tạo máy, cơ điện tử và kỹ thuật ô tô với hệ thống xưởng thực hành hiện đại.',
      image: 'https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBzdHVkZW50cyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTQ3ODkyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Cog
    },
    {
      id: 'elec',
      title: 'Điện - Điện tử & Tự động hóa',
      score: '27.5+',
      desc: 'Dẫn đầu xu hướng chuyển đổi số công nghiệp, điều khiển tự động và hệ thống điện thông minh.',
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3RvcnklMjBtb2Rlcm58ZW58MXx8fHwxNzcxNDc4OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Zap
    },
    {
      id: 'chem',
      title: 'Kỹ thuật Hóa học & Vật liệu',
      score: '25.0+',
      desc: 'Nghiên cứu phát triển vật liệu mới, công nghệ thực phẩm và kỹ thuật sinh học ứng dụng.',
      image: 'https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZW5naW5lZXJpbmclMjBsYWJvcmF0b3J5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNDc4OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Beaker
    }
  ];

  const stats = [
    { value: "Top 1", label: "Đại học Kỹ thuật tại Việt Nam" },
    { value: "98%", label: "Sinh viên có việc làm sau 6 tháng" },
    { value: "200+", label: "Phòng thí nghiệm hiện đại" },
    { value: "35.000+", label: "Sinh viên đang theo học" }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#B90000] text-white py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span>Sinh viên</span>
            <span>Cựu sinh viên</span>
            <span>Cán bộ</span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center gap-1"><Globe size={12} /> EN</span>
            <span>Liên hệ</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 overflow-hidden rounded-lg bg-white shadow-md border border-white/20">
                  <img
                    src="https://th.bing.com/th/id/OIP.4T34kjDeYNWtgzmi35h1FAHaLI?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    alt="ULIS"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="font-bold text-[#1A5276]">ULIS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#B90000] font-bold text-lg leading-none">ĐẠI HỌC BÁCH KHOA HÀ NỘI</span>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Hanoi University of Science and Technology</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác đối ngoại'].map((item) => (
                <a key={item} href="#" className="text-slate-700 hover:text-[#B90000] font-semibold transition-colors uppercase text-sm">
                  {item}
                </a>
              ))}
              <Search className="w-5 h-5 text-slate-500 cursor-pointer hover:text-[#B90000]" />
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#B90000] text-white px-5 py-2 rounded font-bold hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
              >
                Đăng ký ngay
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 py-2 space-y-1">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác đối ngoại', 'Sinh viên'].map((item) => (
                <a key={item} href="#" className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#B90000] border-b border-slate-100 last:border-0">
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <button
                  onClick={() => {
                    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#B90000] text-white py-3 rounded font-bold"
                >
                  Đăng ký tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620205048559-a32b47f42e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5vaSUyMHVuaXZlcnNpdHklMjBvZiUyMHNjaWVuY2UlMjBhbmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTQ3ODkyMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="HUST Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>

          {/* Decorative tech grid overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-[#B90000] rounded-full"></span>
              Tuyển sinh Đại học chính quy 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 uppercase tracking-tight">
              Ngôi nhà của những <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B90000] to-orange-500 bg-white">
                Kỹ sư tương lai
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Đại học Bách khoa Hà Nội - Tiên phong trong đào tạo, nghiên cứu khoa học và chuyển giao công nghệ, nơi khởi nguồn của những đổi mới sáng tạo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#B90000] hover:bg-red-800 text-white font-bold rounded shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-2"
              >
                Khám phá Ngành học <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold rounded transition-all flex items-center justify-center gap-2">
                Thông tin Tuyển sinh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="bg-white rounded-lg shadow-xl grid grid-cols-2 md:grid-cols-4 p-8 gap-8 border-b-4 border-[#B90000]">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-extrabold text-[#B90000] mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-20 md:py-28 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">
              Chương trình Đào tạo <span className="text-[#B90000]">Tiên tiến</span>
            </h2>
            <div className="w-24 h-1 bg-[#B90000] mx-auto rounded mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-600">
              Đa dạng ngành học đáp ứng nhu cầu nhân lực chất lượng cao trong kỷ nguyên công nghiệp 4.0
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-2xl hover:border-[#B90000]/30 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    <div className="p-2 bg-[#B90000] rounded">
                      <program.icon size={20} />
                    </div>
                    <span className="font-bold text-lg">{program.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Mã ngành: {program.id.toUpperCase()}</span>
                    <span className="text-[#B90000] font-bold text-sm">Điểm chuẩn: {program.score}</span>
                  </div>
                  <p className="text-slate-600 mb-6 line-clamp-2">{program.desc}</p>
                  <a href="#" className="inline-flex items-center font-bold text-[#B90000] hover:underline group-hover:gap-2 transition-all">
                    Xem chi tiết chương trình <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors rounded uppercase tracking-wide text-sm">
              Xem toàn bộ 60+ Ngành học
            </a>
          </div>
        </div>
      </section>

      {/* Innovation & Research */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-[#B90000] text-xs font-bold uppercase tracking-wider mb-4 rounded">Nghiên cứu & Sáng tạo</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Tiên phong công nghệ <br /> Kiến tạo tương lai</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Tại Bách Khoa, sinh viên được tham gia các dự án nghiên cứu thực tế ngay từ năm thứ 2. Hệ thống phòng thí nghiệm trọng điểm và trung tâm đổi mới sáng tạo BK-Holdings là nơi ươm mầm cho những startup công nghệ hàng đầu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded border border-slate-700 hover:border-[#B90000] transition-colors">
                  <Cpu className="text-[#B90000] mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">BK.AI Research</h4>
                  <p className="text-slate-500 text-sm">Trung tâm nghiên cứu trí tuệ nhân tạo top đầu khu vực.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded border border-slate-700 hover:border-[#B90000] transition-colors">
                  <Beaker className="text-[#B90000] mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">Smart Materials</h4>
                  <p className="text-slate-500 text-sm">Nghiên cứu vật liệu tiên tiến ứng dụng trong y sinh và năng lượng.</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#B90000]/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcm9ib3RpY3MlMjBjb21wZXRpdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTQ3ODkyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Robot Research"
                className="relative rounded-lg shadow-2xl border border-slate-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-lg text-slate-900 max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="text-[#B90000]" size={20} />
                  <span className="font-bold uppercase text-sm">Thành tích nổi bật</span>
                </div>
                <p className="text-sm font-medium">Đội tuyển BK-Robocon vô địch Châu Á - Thái Bình Dương 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">
              Sức trẻ <span className="text-[#B90000]">Bách Khoa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1743327584769-d5d13093b624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NzE0Nzg5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Graduation" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">Lễ tốt nghiệp</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Khoảnh khắc tự hào của tân kỹ sư</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3NzE0Nzg5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hackathon" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">Hackathon & Techday</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Sân chơi công nghệ đỉnh cao</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZW5naW5lZXJpbmclMjBsYWJvcmF0b3J5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNDc4OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Lab" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">Nghiên cứu khoa học</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Đam mê sáng tạo không giới hạn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 p-10 bg-[#B90000] text-white flex flex-col justify-between relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Tư vấn Tuyển sinh</h3>
                <p className="text-red-100 mb-8">Để lại thông tin để được các chuyên gia tư vấn về ngành học, điểm chuẩn và quy chế tuyển sinh mới nhất.</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-red-200" />
                    <span className="font-medium">024 3869 4242</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-red-200" />
                    <span className="font-medium">tuyensinh@hust.edu.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-red-200" />
                    <span className="font-medium">Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-7/12 p-10 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#B90000] focus:ring-1 focus:ring-[#B90000] outline-none transition-all" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#B90000] focus:ring-1 focus:ring-[#B90000] outline-none transition-all" placeholder="09xx xxx xxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email liên hệ</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#B90000] focus:ring-1 focus:ring-[#B90000] outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nhóm ngành quan tâm</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#B90000] focus:ring-1 focus:ring-[#B90000] outline-none transition-all text-slate-700">
                    <option value="">Chọn nhóm ngành...</option>
                    <option value="it">Công nghệ thông tin (IT)</option>
                    <option value="mech">Cơ khí - Cơ điện tử</option>
                    <option value="elec">Điện - Điện tử</option>
                    <option value="chem">Hóa học - Sinh học - Thực phẩm</option>
                    <option value="econ">Kinh tế & Quản lý</option>
                    <option value="lang">Ngôn ngữ Anh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nội dung cần tư vấn</label>
                  <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#B90000] focus:ring-1 focus:ring-[#B90000] outline-none transition-all h-24 resize-none" placeholder="Bạn có thắc mắc gì về chương trình học?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#B90000] hover:bg-red-800 text-white font-bold py-4 rounded shadow-lg transition-all uppercase tracking-wide">
                  Gửi đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#B90000] rounded flex items-center justify-center text-white font-bold shadow">BK</div>
                <span className="text-white font-bold text-lg uppercase">Đại học Bách khoa Hà Nội</span>
              </div>
              <p className="text-sm text-slate-400 mb-6 max-w-sm">
                Đơn vị đào tạo kỹ thuật đa ngành hàng đầu, nòng cốt trong hệ thống giáo dục đại học Việt Nam.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-[#B90000] hover:text-white transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-[#B90000] hover:text-white transition-all"><Youtube size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-[#B90000] hover:text-white transition-all"><Linkedin size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Liên kết nhanh</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#B90000] transition-colors">Cổng thông tin tuyển sinh</a></li>
                <li><a href="#" className="hover:text-[#B90000] transition-colors">Đào tạo Đại học</a></li>
                <li><a href="#" className="hover:text-[#B90000] transition-colors">Đào tạo Sau đại học</a></li>
                <li><a href="#" className="hover:text-[#B90000] transition-colors">Hợp tác quốc tế</a></li>
                <li><a href="#" className="hover:text-[#B90000] transition-colors">Văn bản pháp quy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Liên hệ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-[#B90000] shrink-0" />
                  <span>Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#B90000] shrink-0" />
                  <span>(+84) 24 3869 4242</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#B90000] shrink-0" />
                  <span>hust@hust.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2026 Hanoi University of Science and Technology.</p>
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

export default HUSTLandingPage;
