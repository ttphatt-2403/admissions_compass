import React, { useState } from 'react';
import { 
  Menu, X, Globe, BookOpen, Briefcase, Award, 
  Users, Plane, TrendingUp, Search, Phone, 
  MapPin, Mail, ArrowRight, Star, ChevronRight 
} from 'lucide-react';

const FTULandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 'ktdn',
      title: 'Kinh tế Đối ngoại',
      score: '28.5+',
      desc: 'Ngành học danh giá nhất với chương trình chuẩn quốc tế, đào tạo chuyên gia xuất nhập khẩu và thương mại toàn cầu.',
      image: 'https://images.unsplash.com/photo-1760428579157-a2d0ad2827a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMHxvZ2lzdGljcyUyMHNoaXBwaW5nfGVufDF8fHx8MTc3MTQ4MjA3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Globe
    },
    {
      id: 'qtkd',
      title: 'Quản trị Kinh doanh',
      score: '28.2+',
      desc: 'Trang bị tư duy lãnh đạo, kỹ năng quản lý và khởi nghiệp. Môi trường học tập năng động, thực tiễn.',
      image: 'https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnRzJTIwcHJlc2VudGF0aW9uJTIwc3VpdHxlbnwxfHx8fDE3NzE0ODIwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Briefcase
    },
    {
      id: 'tcnn',
      title: 'Tài chính Quốc tế',
      score: '28.0+',
      desc: 'Chuyên sâu về tài chính đa quốc gia, đầu tư và ngân hàng. Cơ hội làm việc tại các định chế tài chính lớn.',
      image: 'https://images.unsplash.com/photo-1641760378661-6f290a50a62d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBza3lzY3JhcGVyJTIwbW9kZXJufGVufDF8fHx8MTc3MTQ4MjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: TrendingUp
    },
    {
      id: 'nna',
      title: 'Ngôn ngữ Anh TM',
      score: '27.8+',
      desc: 'Kết hợp tiếng Anh chuyên ngành và kiến thức kinh tế thương mại. Cầu nối ngôn ngữ trong kinh doanh quốc tế.',
      image: 'https://images.unsplash.com/photo-1544002176-eacb96b939c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMG1vZGVybiUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzE0ODIwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: BookOpen
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Top Bar */}
      <div className="bg-[#990000] text-white py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-1"><Phone size={12}/> (024) 3259 5158</span>
            <span className="flex items-center gap-1"><Mail size={12}/> tuyensinh@ftu.edu.vn</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Sinh viên</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Cựu sinh viên</a>
            <span className="border-l border-white/30 pl-4">EN | VN</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#990000] text-white flex items-center justify-center font-bold text-xl border-2 border-[#D4AF37]">
                FTU
              </div>
              <div className="flex flex-col">
                <span className="text-[#990000] font-bold text-lg leading-none uppercase tracking-wide">Đại học Ngoại Thương</span>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">Foreign Trade University</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Hợp tác quốc tế', 'Sinh viên'].map((item) => (
                <a key={item} href="#" className="text-slate-600 hover:text-[#990000] font-semibold transition-colors uppercase text-sm tracking-wide">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => document.getElementById('register-form')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-[#990000] text-white px-6 py-2.5 rounded-sm font-bold hover:bg-red-800 transition-colors uppercase text-xs tracking-wider shadow-md"
              >
                Đăng ký xét tuyển
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#990000]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl h-screen z-50">
            <div className="px-4 py-4 space-y-2">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Hợp tác quốc tế', 'Sinh viên'].map((item) => (
                <a key={item} href="#" className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-red-50 hover:text-[#990000] border-b border-slate-50">
                  {item}
                </a>
              ))}
              <div className="pt-6">
                <button 
                   onClick={() => {
                    document.getElementById('register-form')?.scrollIntoView({behavior: 'smooth'});
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#990000] text-white py-4 rounded font-bold uppercase"
                >
                  Đăng ký xét tuyển
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1660182922635-713da2867c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBkaXZlcnNlJTIwaW50ZXJuYXRpb25hbCUyMGdyb3VwJTIwc21pbGluZ3xlbnwxfHx8fDE3NzE0ODIwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="FTU Students" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Bản lĩnh <br/>
              Trí tuệ <br/>
              <span className="text-[#D4AF37]">Hội nhập</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 font-light leading-relaxed">
              Cái nôi đào tạo nhân tài đất Việt, nơi hội tụ những sinh viên ưu tú nhất. Môi trường giáo dục đẳng cấp quốc tế, khai phóng tiềm năng lãnh đạo.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-[#990000] hover:bg-red-800 text-white font-bold rounded-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2">
                Khám phá FTU <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-bold rounded-sm uppercase tracking-wider transition-all">
                Thông tin tuyển sinh
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats Card (Desktop only) */}
        <div className="hidden md:block absolute bottom-10 right-10 lg:right-20 bg-white/95 backdrop-blur p-8 max-w-sm shadow-2xl border-l-4 border-[#990000]">
          <h3 className="text-[#990000] font-bold text-xl mb-4 uppercase">Tại sao chọn FTU?</h3>
          <ul className="space-y-4">
             <li className="flex items-start gap-3">
               <Award className="text-[#D4AF37] shrink-0" size={20} />
               <div>
                 <strong className="block text-sm text-slate-800">Top 1 Khối ngành Kinh tế</strong>
                 <span className="text-xs text-slate-500">Thương hiệu giáo dục uy tín hàng đầu.</span>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <Plane className="text-[#D4AF37] shrink-0" size={20} />
               <div>
                 <strong className="block text-sm text-slate-800">Cơ hội trao đổi quốc tế</strong>
                 <span className="text-xs text-slate-500">Hợp tác với 200+ đại học trên thế giới.</span>
               </div>
             </li>
          </ul>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 hover:border-[#990000]/30 hover:shadow-xl transition-all group">
              <Globe className="w-12 h-12 text-[#990000] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Tiêu chuẩn Quốc tế</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Chương trình đào tạo tiên tiến, giáo trình cập nhật từ các trường đại học danh tiếng thế giới (Harvard, LSE). Giảng dạy bằng tiếng Anh.
              </p>
            </div>
            <div className="p-8 border border-slate-100 hover:border-[#990000]/30 hover:shadow-xl transition-all group bg-slate-50">
              <Users className="w-12 h-12 text-[#990000] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Môi trường Năng động</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Nơi sinh viên được tự do sáng tạo với hơn 40 CLB đội nhóm. Rèn luyện bản lĩnh qua các cuộc thi quy mô lớn.
              </p>
            </div>
            <div className="p-8 border border-slate-100 hover:border-[#990000]/30 hover:shadow-xl transition-all group">
              <Briefcase className="w-12 h-12 text-[#990000] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Cơ hội Nghề nghiệp</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                99% sinh viên có việc làm ngay khi tốt nghiệp. Mạng lưới kết nối doanh nghiệp rộng lớn và cộng đồng cựu sinh viên thành đạt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Majors Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-[#990000] font-bold text-sm uppercase tracking-widest mb-2 block">Chương trình Đào tạo</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Các Ngành Tiêu Biểu</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-[#990000] font-bold hover:underline">
              Xem tất cả ngành học <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majors.map((major) => (
              <div key={major.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#990000]/20 z-10 group-hover:bg-transparent transition-colors"></div>
                  <img src={major.image} alt={major.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 bg-white px-4 py-2 text-[#990000] font-bold text-sm z-20 flex items-center gap-2 rounded-tr-lg">
                    <major.icon size={14} /> Điểm chuẩn: {major.score}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#990000] transition-colors">{major.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {major.desc}
                  </p>
                  <button className="text-[#990000] font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                    Chi tiết <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Vươn ra Biển lớn cùng <br/>
                <span className="text-[#D4AF37]">FTU Global</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Sinh viên FTU không chỉ học tập tại Việt Nam. Với mạng lưới đối tác rộng khắp, bạn có cơ hội tham gia các chương trình trao đổi (Exchange), chuyển tiếp (Transfer) và nhận bằng quốc tế.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                   <div className="text-4xl font-bold text-[#D4AF37] mb-2">200+</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider">Đối tác Quốc tế</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-[#D4AF37] mb-2">15+</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider">Chương trình Liên kết</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider">Sinh viên đạt B2 Anh ngữ</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4AF37] rounded-full blur-[80px] opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1525853794195-b8e523e4d459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRyYXZlbCUyMHN0dWR5JTIwYWJyb2FkJTIwZ2xvYmV8ZW58MXx8fHwxNzcxNDgyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Study" 
                className="rounded-lg shadow-2xl relative z-10 border border-slate-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission/CTA Section */}
      <section id="register-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#990000] -mr-16 -mt-16 rounded-full opacity-10"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#990000] mb-4">Đăng ký Tư vấn Tuyển sinh</h2>
              <p className="text-slate-600">
                Để lại thông tin để nhận tư vấn chi tiết về lộ trình học, học bổng và phương thức xét tuyển mới nhất năm 2026.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên thí sinh</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:border-[#990000] focus:ring-1 focus:ring-[#990000] outline-none transition-all" placeholder="Nhập họ tên" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:border-[#990000] focus:ring-1 focus:ring-[#990000] outline-none transition-all" placeholder="Nhập số điện thoại" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:border-[#990000] focus:ring-1 focus:ring-[#990000] outline-none transition-all" placeholder="Nhập email" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ngành quan tâm</label>
                  <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:border-[#990000] focus:ring-1 focus:ring-[#990000] outline-none transition-all">
                    <option>Kinh tế Đối ngoại</option>
                    <option>Quản trị Kinh doanh</option>
                    <option>Tài chính Quốc tế</option>
                    <option>Ngôn ngữ Anh</option>
                    <option>Luật Thương mại Quốc tế</option>
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-[#990000] hover:bg-red-800 text-white font-bold py-4 rounded-sm shadow-lg uppercase tracking-wider transition-all">
                  Gửi đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t-4 border-[#990000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <div className="w-16 h-16 rounded-full bg-[#990000] flex items-center justify-center font-bold text-2xl border-2 border-[#D4AF37] mb-6">FTU</div>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Trường Đại học Ngoại thương - Đơn vị tiên phong trong đào tạo nguồn nhân lực chất lượng cao về kinh tế và kinh doanh quốc tế.
               </p>
            </div>
            
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold uppercase text-[#D4AF37] mb-6 text-sm tracking-wider">Trụ sở chính</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-1 shrink-0 text-slate-500" />
                    <span>91 Chùa Láng, Đống Đa, Hà Nội</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0 text-slate-500" />
                    <span>(024) 3259 5158</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="shrink-0 text-slate-500" />
                    <span>tuyensinh@ftu.edu.vn</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-[#D4AF37] mb-6 text-sm tracking-wider">Cơ sở</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li>Cơ sở II: TP. Hồ Chí Minh</li>
                  <li>Cơ sở Quảng Ninh</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase text-[#D4AF37] mb-6 text-sm tracking-wider">Kết nối</h4>
              <div className="flex gap-4">
                 {/* Social Icons placeholders */}
                 <div className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-[#990000] transition-colors cursor-pointer">F</div>
                 <div className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-[#990000] transition-colors cursor-pointer">Y</div>
                 <div className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-[#990000] transition-colors cursor-pointer">L</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
            <p>&copy; 2026 Foreign Trade University. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FTULandingPage;
