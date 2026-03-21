import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import { 
  BookOpen, GraduationCap, Users, Lightbulb, 
  Menu, X, Phone, Mail, MapPin, ArrowRight, 
  Award, Heart, PenTool, Globe, Music, 
  Palette, Calculator, Smile, ChevronRight, CheckCircle2 
} from 'lucide-react';

const HNUELandingPage = () => {
  usePageAnalytics('HNUE', 'Đại học Sư phạm Hà Nội');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programs = [
    {
      id: 'sp-toan',
      title: 'Sư phạm Toán',
      score: '28.0+',
      desc: 'Đào tạo giáo viên Toán học chất lượng cao, có tư duy logic sắc bén và phương pháp sư phạm hiện đại.',
      icon: Calculator,
      color: 'text-blue-600 bg-blue-50',
      accentColor: 'bg-blue-600'
    },
    {
      id: 'sp-van',
      title: 'Sư phạm Ngữ Văn',
      score: '27.8+',
      desc: 'Nơi nuôi dưỡng tâm hồn và tình yêu văn học. Đào tạo những người thầy truyền lửa đam mê ngôn ngữ.',
      icon: PenTool,
      color: 'text-pink-600 bg-pink-50',
      accentColor: 'bg-pink-600'
    },
    {
      id: 'sp-anh',
      title: 'Sư phạm Tiếng Anh',
      score: '27.5+',
      desc: 'Chương trình chuẩn quốc tế, trang bị năng lực ngoại ngữ xuất sắc và kỹ năng giảng dạy hội nhập.',
      icon: Globe,
      color: 'text-indigo-600 bg-indigo-50',
      accentColor: 'bg-indigo-600'
    },
    {
      id: 'gd-tieu-hoc',
      title: 'Giáo dục Tiểu học',
      score: '26.5+',
      desc: 'Đào tạo giáo viên tiểu học toàn diện, yêu trẻ, yêu nghề và vững vàng kỹ năng sư phạm.',
      icon: Smile,
      color: 'text-orange-600 bg-orange-50',
      accentColor: 'bg-orange-600'
    },
    {
      id: 'gd-mam-non',
      title: 'Giáo dục Mầm non',
      score: '25.0+',
      desc: 'Ươm mầm những búp măng non. Đào tạo giáo viên mầm non tận tâm, sáng tạo và giàu lòng yêu thương.',
      icon: Heart,
      color: 'text-red-600 bg-red-50',
      accentColor: 'bg-red-600'
    },
    {
      id: 'tam-ly',
      title: 'Tâm lý học Giáo dục',
      score: '26.0+',
      desc: 'Nghiên cứu tâm lý học đường, tham vấn và hỗ trợ sức khỏe tinh thần cho học sinh.',
      icon: Lightbulb,
      color: 'text-yellow-600 bg-yellow-50',
      accentColor: 'bg-yellow-600'
    }
  ];

  const values = [
    {
      title: 'Truyền thống Lâu đời',
      desc: 'Hơn 70 năm xây dựng và phát triển, là cái nôi đào tạo giáo viên hàng đầu của cả nước.',
      icon: Award
    },
    {
      title: 'Môi trường Nhân văn',
      desc: 'Đề cao giá trị con người, tôn sư trọng đạo và tình yêu thương trong giáo dục.',
      icon: Heart
    },
    {
      title: 'Thực hành Sư phạm',
      desc: 'Hệ thống trường thực hành đa cấp học giúp sinh viên rèn luyện kỹ năng nghề nghiệp từ sớm.',
      icon: Users
    }
  ];

  return (
    <div className="font-sans text-slate-700 bg-orange-50/20 pb-12">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> (024) 3754 7823</span>
            <span className="flex items-center gap-2"><Mail size={14} /> p.hcth@hnue.edu.vn</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-300 transition-colors">Sinh viên</a>
            <span className="text-blue-500">|</span>
            <a href="#" className="hover:text-orange-300 transition-colors">Cựu sinh viên</a>
            <span className="text-blue-500">|</span>
            <a href="#" className="hover:text-orange-300 transition-colors">Cán bộ</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white border-2 border-orange-400">
                <BookOpen size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-900 font-bold text-lg leading-none uppercase tracking-wide">Đại học Sư phạm Hà Nội</span>
                <span className="text-orange-600 text-xs font-bold uppercase tracking-widest mt-1">Hanoi National University of Education</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                <a key={item} href="#" className="text-slate-600 hover:text-blue-900 font-bold transition-colors text-sm uppercase tracking-wide">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md text-sm flex items-center gap-2"
              >
                Đăng ký xét tuyển
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-900">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60] bg-white">
            <div className="flex flex-col h-full">
               <div className="flex justify-between items-center px-4 h-20 border-b border-orange-100">
                  <span className="text-blue-900 font-bold text-lg uppercase">Menu</span>
                  <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 hover:text-red-500">
                     <X size={28} />
                  </button>
               </div>
               <div className="px-4 py-6 space-y-4 overflow-y-auto">
                  {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-3 text-lg font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 border-b border-slate-50 rounded-lg transition-colors">
                      {item}
                    </a>
                  ))}
                  <div className="pt-8 px-4">
                    <button 
                      onClick={() => { setIsMenuOpen(false); document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold uppercase shadow-lg text-lg"
                    >
                      Đăng ký xét tuyển
                    </button>
                  </div>
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1758270705657-f28eec1a5694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGhhcHB5fGVufDF8fHx8MTc3MTQ4MjczMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Teaching Environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-500/90 rounded-full mb-6 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider">Tuyển sinh 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Ươm mầm <span className="text-orange-400">Tri thức</span> <br/>
              Kiến tạo <span className="text-orange-400">Tương lai</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 font-light leading-relaxed">
              Tự hào là trường Đại học trọng điểm quốc gia, nơi đào tạo những người thầy mẫu mực, tận tâm cống hiến cho sự nghiệp trồng người của đất nước.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide">
                Tìm hiểu thêm <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-bold rounded-sm transition-all uppercase tracking-wide">
                Xem ngành đào tạo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-16 bg-white border-b border-orange-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-orange-500 mb-6 flex justify-center">
            <GraduationCap size={48} />
          </div>
          <h2 className="text-2xl md:text-3xl italic text-slate-600 leading-relaxed mb-6 font-serif">
            "Nghề dạy học là nghề cao quý nhất trong những nghề cao quý, nghề sáng tạo nhất trong những nghề sáng tạo."
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-bold uppercase tracking-wider text-sm">- Cố Thủ tướng Phạm Văn Đồng -</p>
        </div>
      </section>

      {/* Values & Tradition */}
      <section className="py-20 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-orange-300 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1671468158345-6eeb48162da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBjbGFzc2ljJTIwYXJjaGl0ZWN0dXJlJTIwdmlldG5hbXxlbnwxfHx8fDE3NzE0ODI3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="HNUE Campus" 
                className="relative rounded-lg shadow-xl z-10 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-lg z-20 max-w-xs">
                 <div className="text-4xl font-bold text-orange-400 mb-1">70+</div>
                 <div className="text-sm font-medium uppercase tracking-wide">Năm cống hiến & trưởng thành</div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Di sản Giáo dục <br/>
                <span className="text-orange-600">Vững bền cùng Năm tháng</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Trường Đại học Sư phạm Hà Nội không chỉ là nơi truyền thụ kiến thức, mà còn là cái nôi nuôi dưỡng những giá trị nhân văn cao đẹp. Mỗi sinh viên tốt nghiệp từ mái trường này đều mang trong mình sứ mệnh "trồng người" thiêng liêng.
              </p>

              <div className="space-y-6 pt-4">
                {values.map((val, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <val.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">{val.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-2 block">Chương trình Đào tạo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Các Ngành Sư Phạm Mũi Nhọn</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Đa dạng các ngành đào tạo từ bậc Mầm non đến Phổ thông trung học, đáp ứng nhu cầu đổi mới căn bản và toàn diện nền giáo dục.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <div key={prog.id} className="group bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 p-8 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-transform group-hover:scale-150 ${prog.accentColor}`}></div>
                
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${prog.color} bg-opacity-20`}>
                   <prog.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-900 transition-colors">{prog.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">Điểm chuẩn: {prog.score}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 border-b border-dashed border-slate-200 pb-6">
                  {prog.desc}
                </p>
                
                <a href="#" className="inline-flex items-center text-orange-600 font-bold text-sm hover:gap-2 transition-all group-hover:text-orange-700">
                  Chi tiết ngành học <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-blue-900 font-bold border-b-2 border-blue-900 hover:text-orange-600 hover:border-orange-600 transition-all pb-1 uppercase text-sm tracking-wide">
              Xem tất cả 40+ mã ngành đào tạo <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Internship & Environment */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Môi trường Thực học <br/>
                 <span className="text-orange-400">Thực nghiệp</span>
               </h2>
               <p className="text-blue-100 text-lg leading-relaxed">
                 Sinh viên Đại học Sư phạm Hà Nội được tham gia kiến tập, thực tập sư phạm ngay từ những năm đầu tại hệ thống các trường thực hành chất lượng cao (Trường THPT Chuyên ĐHSP, Trường THCS & THPT Nguyễn Tất Thành...).
               </p>
               
               <ul className="space-y-4">
                 <li className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-orange-400 font-bold border border-blue-700">1</div>
                   <span className="font-medium">Rèn luyện nghiệp vụ sư phạm thường xuyên</span>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-orange-400 font-bold border border-blue-700">2</div>
                   <span className="font-medium">Tham gia các dự án giáo dục cộng đồng</span>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-orange-400 font-bold border border-blue-700">3</div>
                   <span className="font-medium">Cơ hội việc làm rộng mở sau tốt nghiệp</span>
                 </li>
               </ul>
             </div>
             
             <div className="relative">
               <div className="absolute -inset-4 bg-orange-500 rounded-full blur-[60px] opacity-20"></div>
               <img 
                 src="https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMG1lbnRvcmluZyUyMGRpdmVyc2V8ZW58MXx8fHwxNzcxNDgyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="Mentoring" 
                 className="rounded-lg shadow-2xl border-4 border-blue-800 relative z-10"
               />
               <div className="absolute -bottom-8 -left-8 bg-white text-blue-900 p-6 rounded shadow-lg z-20 hidden md:block border-l-4 border-orange-500">
                 <p className="font-serif italic text-lg mb-2">"Thầy tốt thì trò ngoan"</p>
                 <p className="text-xs font-bold uppercase text-slate-500">Triết lý giáo dục</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Admission/Contact Form */}
      <section id="admission-form" className="py-24 bg-orange-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-blue-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 rounded-full blur-[60px] opacity-30 -mr-10 -mt-10"></div>
               
               <div>
                 <h3 className="text-2xl font-bold mb-4">Liên hệ Tư vấn</h3>
                 <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                   Để lại thông tin để được các thầy cô tư vấn chi tiết về quy chế tuyển sinh và định hướng nghề nghiệp.
                 </p>
                 <ul className="space-y-4 text-sm">
                   <li className="flex items-center gap-3">
                     <Phone size={16} className="text-orange-400" />
                     <span>(024) 3754 7823</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Mail size={16} className="text-orange-400" />
                     <span>p.hcth@hnue.edu.vn</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <MapPin size={16} className="text-orange-400 mt-1" />
                     <span>136 Xuân Thủy, Cầu Giấy, Hà Nội</span>
                   </li>
                 </ul>
               </div>

               <div className="mt-10 pt-10 border-t border-blue-800">
                 <div className="flex gap-4">
                   <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer text-white">f</div>
                   <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer text-white">Z</div>
                 </div>
               </div>
            </div>

            <div className="md:w-3/5 p-10">
              <form className="space-y-5">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Đăng ký Xét tuyển Trực tuyến</h3>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên thí sinh</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email liên hệ</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ngành đăng ký (Dự kiến)</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all">
                    <option>Sư phạm Toán học</option>
                    <option>Sư phạm Ngữ văn</option>
                    <option>Sư phạm Tiếng Anh</option>
                    <option>Giáo dục Tiểu học</option>
                    <option>Giáo dục Mầm non</option>
                    <option>Tâm lý học Giáo dục</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded shadow-lg uppercase tracking-wider transition-all">
                    Gửi hồ sơ đăng ký
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-4">
                    * Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng cho mục đích tư vấn tuyển sinh.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-6 text-blue-900 font-bold text-xl uppercase tracking-wider">
                  <BookOpen size={24} className="text-orange-500" /> HNUE
               </div>
               <p className="text-white text-sm leading-relaxed mb-6">
                 Trường Đại học Sư phạm Hà Nội - Cái nôi của ngành sư phạm cả nước, nơi khơi nguồn tri thức và kiến tạo tương lai cho thế hệ trẻ Việt Nam.
               </p>
               <img src="https://images.unsplash.com/photo-1767595789539-cd012af80914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTQ4MjczMXww&ixlib=rb-4.1.0&q=80&w=1080" className="h-24 w-full object-cover rounded opacity-80" alt="Graduation" />
            </div>
            
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-blue-900 mb-6 text-sm uppercase tracking-wider border-b-2 border-orange-200 inline-block pb-1">Về Nhà trường</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Lịch sử phát triển</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Ban Giám hiệu</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Đội ngũ giảng viên</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Cơ sở vật chất</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Công khai giáo dục</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-6 text-sm uppercase tracking-wider border-b-2 border-orange-200 inline-block pb-1">Tin tức & Sự kiện</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Tin hoạt động</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Tin đào tạo</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Hợp tác quốc tế</li>
                  <li className="text-white hover:text-orange-600 cursor-pointer transition-colors">Thông báo chung</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-blue-900 mb-6 text-sm uppercase tracking-wider border-b-2 border-orange-200 inline-block pb-1">Thống kê</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                    <span className="text-white">Giảng viên</span>
                    <span className="font-bold text-orange-500">800+</span>
                 </div>
                 <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                    <span className="text-white">Sinh viên</span>
                    <span className="font-bold text-orange-500">20.000+</span>
                 </div>
                 <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                    <span className="text-white">Tiến sĩ/GS/PGS</span>
                    <span className="font-bold text-orange-500">300+</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-xs">
            <p>&copy; 2026 Hanoi National University of Education. All Rights Reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HNUELandingPage;
