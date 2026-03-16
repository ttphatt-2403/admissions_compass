import React, { useState } from 'react';
import {
  Menu, X, Search, ChevronRight, Beaker, Cpu,
  Code, Cog, Users, Trophy, BookOpen, MapPin,
  Phone, Mail, Facebook, Linkedin, Youtube, Globe,
  ArrowRight, Award, Zap, Network, Radio, Briefcase, Building, Server
} from 'lucide-react';

export default function PTITLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programs = [
    {
      id: 'it',
      category: 'Nhóm Công nghệ thông tin',
      title: 'CNTT, Khoa học Máy tính & AI',
      desc: 'Công nghệ thông tin, Khoa học máy tính, Trí tuệ nhân tạo, An toàn thông tin.',
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MzQ4MDYyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Code,
      score: '25-26.5+'
    },
    {
      id: 'telecom',
      category: 'Nhóm Điện - Điện tử - Viễn thông',
      title: 'Kỹ thuật Điện tử Viễn thông',
      desc: 'Kỹ thuật điện tử viễn thông, Công nghệ kỹ thuật điện - điện tử.',
      image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzczNDg2NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Radio,
      score: '24-25.5+'
    },
    {
      id: 'media',
      category: 'Nhóm Truyền thông - Kinh doanh số',
      title: 'Truyền thông Đa phương tiện',
      desc: 'Truyền thông đa phương tiện, Quan hệ công chúng, Marketing số.',
      image: 'https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwbWVkaWF8ZW58MXx8fHwxNzczNDg2NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Globe,
      score: '24-26+'
    }
  ];

  const overviews = [
    { label: 'Thành lập', value: '1997', icon: Trophy },
    { label: 'Cơ quan chủ quản', value: 'Bộ TT&TT', icon: Building },
    { label: 'Cơ sở đào tạo', value: 'Hà Nội & TP.HCM', icon: MapPin },
    { label: 'Quy mô', value: '20,000+ SV', icon: Users }
  ];

  const facilities = [
    { title: 'Phòng lab AI và Data', icon: Cpu },
    { title: 'Trung tâm nghiên cứu vi mạch', icon: Server },
    { title: 'Phòng thực hành viễn thông', icon: Network },
    { title: 'Thư viện công nghệ số', icon: BookOpen }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* Top Bar */}
      <div className="bg-[#E51B24] text-white py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="cursor-pointer hover:text-white/80 transition-colors">Sinh viên</span>
            <span className="cursor-pointer hover:text-white/80 transition-colors">Cán bộ Giảng viên</span>
            <span className="cursor-pointer hover:text-white/80 transition-colors">Cựu sinh viên</span>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center gap-1 cursor-pointer hover:text-white/80 transition-colors"><Globe size={12} /> EN</span>
            <span className="cursor-pointer hover:text-white/80 transition-colors">Liên hệ</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E51B24] rounded-full flex items-center justify-center text-white font-black text-xl shadow-md border-2 border-white ring-2 ring-[#E51B24]">
                PTIT
              </div>
              <div className="flex flex-col">
                <span className="text-[#E51B24] font-bold text-lg leading-none">HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</span>
                <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider mt-1">Posts and Telecommunications Institute of Technology</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Tổng quan', 'Tuyển sinh', 'Ngành học', 'Cơ sở vật chất', 'Việc làm'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-slate-700 hover:text-[#E51B24] font-semibold transition-colors uppercase text-sm tracking-wide">
                  {item}
                </a>
              ))}
              <div className="w-px h-6 bg-slate-200"></div>
              <button
                onClick={() => document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#E51B24] text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 hover:-translate-y-0.5"
              >
                Nhận tư vấn
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl">
            <div className="px-4 py-2 space-y-1">
              {['Tổng quan', 'Tuyển sinh', 'Ngành học', 'Cơ sở vật chất', 'Việc làm'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-red-50 hover:text-[#E51B24] border-b border-slate-50 last:border-0">
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-4">
                <button
                  onClick={() => {
                    document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#E51B24] text-white py-3 rounded-xl font-bold"
                >
                  Nhận tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Abstract network background */}
          <svg className="absolute w-[800px] h-[800px] -right-40 -top-40 text-slate-200/50 opacity-50 animate-[spin_120s_linear_infinite]" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 15" />
            <circle cx="400" cy="400" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 text-[#E51B24] font-bold text-xs uppercase tracking-wider mb-6">
                <Zap size={14} fill="currentColor" /> Trực thuộc Bộ Thông tin & Truyền thông
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                Trung tâm đào tạo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E51B24] to-red-800">
                  công nghệ hàng đầu
                </span> <br />
                Việt Nam
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Nơi đào tạo thế hệ kỹ sư công nghệ, chuyên gia an toàn thông tin, trí tuệ nhân tạo và truyền thông số. Lựa chọn hàng đầu của học sinh yêu thích lĩnh vực công nghệ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('nganh-hoc')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#E51B24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Khám phá ngành học
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-[#E51B24] hover:text-[#E51B24] transition-all flex items-center justify-center gap-2"
                >
                  Nhận tư vấn tuyển sinh
                </button>
              </div>
            </div>

            {/* Image/Visuals */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-fade-in-up delay-200">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white z-10">
                <img
                  src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNDU2MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="PTIT Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 animate-float">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-[#E51B24]">
                  <Trophy size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">Top 5</div>
                  <div className="text-sm font-medium text-slate-500">ĐH Công nghệ tại VN</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Building size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">VNPT</div>
                  <div className="text-sm font-medium text-slate-500">Đối tác chiến lược</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="tong-quan" className="py-20 bg-white relative z-20 -mt-10 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {overviews.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#E51B24] shadow-sm group-hover:bg-[#E51B24] group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <div className="text-slate-500 text-sm font-medium mb-1">{item.label}</div>
                <div className="text-xl md:text-2xl font-bold text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tổng Quan Về Học Viện</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PTIT là một trong những trường đại học hàng đầu Việt Nam trong lĩnh vực công nghệ thông tin, viễn thông và truyền thông đa phương tiện. Với chương trình đào tạo hiện đại, gắn liền với doanh nghiệp công nghệ lớn như Viettel, VNPT, FPT.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="nganh-hoc" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E51B24] font-bold uppercase tracking-wider text-sm mb-2 block">Chương trình đào tạo</span>
            <h2 className="text-4xl font-black text-slate-900">Các Ngành Đào Tạo Nổi Bật</h2>
            <div className="w-20 h-1 bg-[#E51B24] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-3 py-1 bg-[#E51B24]/90 backdrop-blur rounded text-xs font-bold uppercase mb-2">
                      {prog.category}
                    </span>
                    <h3 className="text-xl font-bold leading-tight">{prog.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                    <prog.icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {prog.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="block text-xs text-slate-400 font-medium uppercase mb-1">Điểm chuẩn tham khảo</span>
                      <span className="font-bold text-[#E51B24] text-lg">{prog.score}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#E51B24] group-hover:text-white transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions & Scores */}
      <section id="tuyen-sinh" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background for tech feel */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Admissions Methods */}
            <div>
              <h2 className="text-3xl font-black mb-8 text-white">Phương Thức Tuyển Sinh</h2>
              <div className="space-y-4">
                {[
                  { title: 'Xét điểm thi tốt nghiệp THPT', desc: 'Phương thức truyền thống dựa trên kết quả kỳ thi THPT Quốc gia.' },
                  { title: 'Xét tuyển kết hợp chứng chỉ quốc tế', desc: 'Kết hợp chứng chỉ IELTS/TOEFL với kết quả học tập THPT.' },
                  { title: 'Xét tuyển tài năng', desc: 'Dành cho thí sinh đạt giải học sinh giỏi cấp tỉnh, quốc gia.' },
                  { title: 'Xét học bạ (một số chương trình)', desc: 'Áp dụng cho một số chương trình liên kết hoặc định hướng ứng dụng.' }
                ].map((method, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#E51B24]/20 text-[#E51B24] flex items-center justify-center shrink-0">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{method.title}</h4>
                      <p className="text-slate-400 text-sm">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-[#E51B24] rounded-2xl border border-red-500 flex items-center gap-4">
                <BookOpen size={24} className="text-white" />
                <div>
                  <div className="text-red-200 text-sm font-medium">Tổ hợp môn phổ biến</div>
                  <div className="text-xl font-bold">A00, A01, D01</div>
                </div>
              </div>
            </div>

            {/* Reference Scores */}
            <div>
              <h2 className="text-3xl font-black mb-8 text-white">Điểm Chuẩn Tham Khảo</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/10 text-slate-300 text-sm uppercase font-bold">
                    <tr>
                      <th className="px-6 py-4">Ngành Đào Tạo</th>
                      <th className="px-6 py-4 text-right">Điểm Chuẩn</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-6 py-4 font-medium">Công nghệ thông tin</td>
                      <td className="px-6 py-4 text-right font-bold text-[#E51B24]">26+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Khoa học máy tính & AI</td>
                      <td className="px-6 py-4 text-right font-bold text-[#E51B24]">26+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">An toàn thông tin</td>
                      <td className="px-6 py-4 text-right font-bold text-[#E51B24]">25+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Kỹ thuật Điện tử Viễn thông</td>
                      <td className="px-6 py-4 text-right font-bold text-[#E51B24]">24.5+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Truyền thông đa phương tiện</td>
                      <td className="px-6 py-4 text-right font-bold text-[#E51B24]">24+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Marketing số</td>
                      <td className="px-6 py-4 text-right font-bold text-[#E51B24]">24+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities and Career */}
      <section id="co-so-vat-chat" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Facilities */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Cơ Sở Vật Chất Hiện Đại</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Hệ thống phòng thí nghiệm và trung tâm nghiên cứu được đầu tư bài bản, đáp ứng nhu cầu thực hành và nghiên cứu chuyên sâu của sinh viên và giảng viên.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-200 hover:bg-red-50 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#E51B24] shadow-sm group-hover:scale-110 transition-transform">
                      <fac.icon size={24} />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{fac.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div className="relative">
              <div className="absolute inset-0 bg-slate-900 rounded-[32px] transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-[#E51B24] rounded-[32px] p-8 md:p-10 text-white">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <Briefcase size={28} />
                  Cơ Hội Nghề Nghiệp
                </h3>

                <div className="mb-8">
                  <h4 className="text-red-200 text-sm font-bold uppercase tracking-wider mb-4">Doanh nghiệp tuyển dụng</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Viettel', 'VNPT', 'FPT Software', 'Samsung', 'MobiFone', 'Startup Công nghệ'].map((company, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-red-200 text-sm font-bold uppercase tracking-wider mb-4">Vị trí phổ biến</h4>
                  <ul className="space-y-3">
                    {[
                      'Software Engineer',
                      'Cyber Security Engineer',
                      'Data Analyst / Data Scientist',
                      'AI Engineer',
                      'Telecommunication Engineer'
                    ].map((pos, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="font-medium">{pos}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="tu-van" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Bắt đầu hành trình trở thành <br /><span className="text-[#E51B24]">kỹ sư công nghệ tương lai</span> tại PTIT</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Để lại thông tin để được đội ngũ tuyển sinh của học viện tư vấn chi tiết về ngành học, lộ trình và cơ hội học bổng.
          </p>

          <form className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên</label>
                <input type="text" placeholder="Nhập họ tên của bạn" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E51B24] focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                <input type="tel" placeholder="Nhập số điện thoại" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E51B24] focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ngành quan tâm</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E51B24] focus:border-transparent transition-all bg-white">
                  <option>Công nghệ thông tin</option>
                  <option>Kỹ thuật Viễn thông</option>
                  <option>Truyền thông Đa phương tiện</option>
                  <option>An toàn thông tin</option>
                </select>
              </div>
              <button type="button" className="w-full py-4 bg-[#E51B24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 hover:-translate-y-0.5 mt-2">
                Đăng ký nhận tư vấn
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E51B24] rounded-full flex items-center justify-center text-white font-black text-sm">PTIT</div>
              <div>
                <div className="text-white font-bold">Học viện Công nghệ Bưu chính Viễn thông</div>
                <div className="text-sm">Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E51B24] hover:text-white cursor-pointer transition-colors"><Facebook size={20} /></div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E51B24] hover:text-white cursor-pointer transition-colors"><Youtube size={20} /></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
