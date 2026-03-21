import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import { 
  ArrowRight, 
  Globe, 
  Briefcase, 
  Cpu, 
  Palette, 
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  GraduationCap,
  PlayCircle,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const RMITLandingPage = () => {
  usePageAnalytics('RMIT', 'Đại học RMIT Việt Nam');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programs = [
    {
      title: "Kinh doanh & Quản trị",
      desc: "Phát triển tư duy lãnh đạo và kỹ năng quản lý trong môi trường kinh doanh toàn cầu.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1660182922635-713da2867c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBvZiUyMGludGVybmF0aW9uYWwlMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTQzMTU3NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Thiết kế & Sáng tạo",
      desc: "Khơi nguồn sáng tạo với cơ sở vật chất hiện đại và các dự án thực tế.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1686545232398-2cef6411fbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwZmFzaGlvbiUyMGRlc2lnbiUyMHN0dWRpbyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTQzMTU3NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Công nghệ & Kỹ thuật",
      desc: "Nắm bắt công nghệ tiên tiến, đón đầu xu hướng chuyển đổi số.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB3b3JraW5nJTIwb24lMjB0ZWNobm9sb2d5JTIwbGFwdG9wc3xlbnwxfHx8fDE3NzE0MzE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const stats = [
    { value: "96%", label: "Sinh viên có việc làm sau tốt nghiệp" },
    { value: "200+", label: "Đối tác doanh nghiệp toàn cầu" },
    { value: "50+", label: "Câu lạc bộ sinh viên năng động" },
    { value: "Top 1%", label: "Các trường đại học xuất sắc nhất thế giới" }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-red-600 text-white font-bold text-2xl px-3 py-1 tracking-tighter">RMIT</div>
              <div className="hidden sm:block text-slate-900 font-bold text-lg tracking-tight border-l border-slate-300 pl-3 leading-none">
                UNIVERSITY <br/><span className="text-xs font-normal text-slate-500">VIETNAM</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-800 font-medium hover:text-red-600 transition-colors">Chương trình học</a>
              <a href="#" className="text-slate-800 font-medium hover:text-red-600 transition-colors">Tuyển sinh</a>
              <a href="#" className="text-slate-800 font-medium hover:text-red-600 transition-colors">Đời sống sinh viên</a>
              <a href="#" className="text-slate-800 font-medium hover:text-red-600 transition-colors">Học bổng</a>
              <button 
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 font-bold transition-all shadow-lg hover:shadow-red-600/30 flex items-center gap-2"
              >
                Đăng ký tư vấn <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 hover:text-red-600">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Chương trình học', 'Tuyển sinh', 'Đời sống sinh viên', 'Học bổng'].map((item) => (
                <a key={item} href="#" className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-red-600 border-b border-slate-100">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-red-600 text-white px-3 py-4 font-bold text-center hover:bg-red-700 transition-colors"
              >
                Đăng ký tư vấn ngay
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1716969407323-d4b04d2d0a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSTUlUJTIwdW5pdmVyc2l0eSUyMHZpZXRuYW0lMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzE0MzE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="RMIT Students" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-6">
              Admission Open 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight">
              Sẵn sàng cho <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Sự nghiệp Toàn cầu
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Trải nghiệm môi trường giáo dục chuẩn Úc ngay tại Việt Nam. Kết nối với mạng lưới doanh nghiệp toàn cầu và mở ra cơ hội nghề nghiệp không giới hạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Nhận tư vấn 1:1
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Khám phá Campus
              </button>
            </div>
          </div>
        </div>

        {/* Floating Social Sidebar */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 bg-white p-3 rounded-l-lg shadow-lg">
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Bằng cấp chuẩn Úc",
                desc: "Nhận bằng cử nhân quốc tế từ Đại học RMIT Melbourne, được công nhận trên toàn thế giới."
              },
              {
                icon: Briefcase,
                title: "Kết nối doanh nghiệp",
                desc: "Cơ hội thực tập và làm việc tại các tập đoàn đa quốc gia ngay trong quá trình học."
              },
              {
                icon: GraduationCap,
                title: "Môi trường Tiếng Anh",
                desc: "Học tập hoàn toàn bằng tiếng Anh, rèn luyện tư duy phản biện và kỹ năng giao tiếp toàn cầu."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 border-b-4 border-transparent hover:border-red-600 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-100 group-hover:bg-red-50 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Chương trình đào tạo</h4>
              <h2 className="text-4xl font-extrabold text-slate-900">Đa dạng ngành học xu hướng</h2>
              <p className="text-slate-500 mt-4 text-lg">Thiết kế chương trình học linh hoạt, cập nhật liên tục theo nhu cầu thực tế của thị trường lao động quốc tế.</p>
            </div>
            <a href="#" className="text-slate-900 font-bold border-b-2 border-red-600 hover:text-red-600 transition-colors pb-1 inline-flex items-center gap-1 shrink-0">
              Xem tất cả ngành học <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg cursor-pointer h-[500px]">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {program.desc}
                  </p>
                  <span className="inline-flex items-center text-white font-bold text-sm uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Vibes - Bento Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Trải nghiệm RMIT</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Không gian học tập sáng tạo, cơ sở vật chất 5 sao và đời sống sinh viên sôi động.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1761492190275-129cf71ff124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbGlicmFyeSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTQzMTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Library" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Thư viện hiện đại</h3>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1687709645238-0470ff08a6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FmZXRlcmlhJTIwbW9kZXJuJTIwZm9vZCUyMGNvdXJ0JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNDMxOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cafeteria" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">Food Court</span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1741940513798-4ce04b95ffda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGJhc2tldGJhbGwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NzE0MzE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sports" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">Sports Hall</span>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1651454424342-c9bc62f815cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZmFzaGlvbiUyMHNob3clMjBydW53YXklMjBzdHVkZW50fGVufDF8fHx8MTc3MTQzMTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Fashion Show" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Sự kiện & Nghệ thuật</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Parallax */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
                  {stat.value}
                </div>
                <div className="w-12 h-1 bg-red-600 mx-auto mb-4"></div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life / Exchange */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-600/20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1747836131482-3c099f825892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwaGFwcHklMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE0MzE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Student Exchange" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded z-20 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Student" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Minh Anh</div>
                    <div className="text-xs text-slate-500">Trao đổi sinh viên tại Melbourne</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">"Một học kỳ tại Úc đã thay đổi hoàn toàn tư duy và tầm nhìn của mình về sự nghiệp tương lai."</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Trải nghiệm không giới hạn</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Tại RMIT, việc học không chỉ diễn ra trong lớp. Bạn sẽ được tham gia vào các dự án thực tế, các cuộc thi quốc tế và cơ hội trao đổi đến hơn 200 trường đối tác trên toàn cầu.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Chương trình Trao đổi Sinh viên", content: "Cơ hội học tập từ 1-2 học kỳ tại RMIT Melbourne hoặc các trường đối tác tại Mỹ, Anh, Pháp, Nhật Bản..." },
                  { title: "Thực tập Doanh nghiệp", content: "Kỳ thực tập bắt buộc tại các tập đoàn lớn giúp bạn tích lũy kinh nghiệm và mở rộng mối quan hệ." },
                  { title: "Hoạt động Ngoại khóa", content: "Hơn 50 CLB từ thể thao, nghệ thuật đến học thuật giúp bạn phát triển kỹ năng mềm toàn diện." }
                ].map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex justify-between items-center p-4 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {item.title}
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === idx ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
                    </button>
                    {activeAccordion === idx && (
                      <div className="p-4 pt-0 bg-slate-50 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Dấu ấn Cựu sinh viên</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Cộng đồng cựu sinh viên RMIT thành công và có tầm ảnh hưởng trên toàn cầu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="group relative overflow-hidden rounded-xl bg-slate-100 flex flex-col md:flex-row items-center border border-slate-200 hover:shadow-2xl transition-all duration-300">
               <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1758873268238-0b93e41fdcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzJTIwd29tYW4lMjBjcmVhdGl2ZSUyMG9mZmljZSUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzE0MzE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Alumni 1" />
               </div>
               <div className="p-8 md:w-1/2">
                 <div className="text-red-600 font-bold text-sm uppercase tracking-wide mb-2">Marketing Manager @Unilever</div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Lê Thị Thanh Mai</h3>
                 <p className="text-slate-600 italic mb-6">"Tư duy chiến lược và kỹ năng làm việc nhóm tại RMIT đã giúp tôi tự tin dẫn dắt các dự án lớn ngay khi ra trường."</p>
                 <a href="#" className="text-slate-900 font-bold text-sm border-b border-slate-300 hover:border-red-600 transition-colors inline-block">Xem hồ sơ</a>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-xl bg-slate-100 flex flex-col md:flex-row items-center border border-slate-200 hover:shadow-2xl transition-all duration-300">
               <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1741064687318-7205a52695c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXIlMjBnb29nbGUlMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTQzMTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Alumni 2" />
               </div>
               <div className="p-8 md:w-1/2">
                 <div className="text-red-600 font-bold text-sm uppercase tracking-wide mb-2">Software Engineer @Google</div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Nguyễn Văn Nam</h3>
                 <p className="text-slate-600 italic mb-6">"Chương trình học sát với thực tế và các dự án capstone là bước đệm hoàn hảo để tôi gia nhập môi trường công nghệ quốc tế."</p>
                 <a href="#" className="text-slate-900 font-bold text-sm border-b border-slate-300 hover:border-red-600 transition-colors inline-block">Xem hồ sơ</a>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="register-form" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 skew-y-3 transform origin-top-left -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">Bắt đầu hành trình của bạn</h2>
              <p className="text-slate-400 mb-8 relative z-10">
                Điền thông tin để nhận tư vấn chi tiết về ngành học, học bổng và quy trình tuyển sinh năm 2026.
              </p>
              <ul className="space-y-4 text-slate-300 relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span>Tư vấn 1:1 miễn phí</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span>Thông tin học bổng lên đến 100%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span>Tham quan Campus Tour</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-white p-10 md:p-12">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1 uppercase tracking-wide">Họ và tên</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all" placeholder="Nhập họ tên của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1 uppercase tracking-wide">Số điện thoại</label>
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all" placeholder="Nhập số điện thoại" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all" placeholder="Nhập email của bạn" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1 uppercase tracking-wide">Ngành quan tâm</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all text-slate-600">
                    <option>Chọn ngành học...</option>
                    <option>Kinh doanh & Quản trị</option>
                    <option>Truyền thông & Thiết kế</option>
                    <option>Khoa học & Công nghệ</option>
                    <option>Tiếng Anh & Chuyển tiếp</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 shadow-lg hover:shadow-red-600/20 transition-all uppercase tracking-wider text-sm mt-4">
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer
      <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-600 text-white font-bold text-xl px-2 py-0.5">RMIT</div>
                <span className="text-white font-bold text-slate-900">UNIVERSITY VIETNAM</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>702 Nguyễn Văn Linh, Quận 7, TP.HCM</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>521 Kim Mã, Ba Đình, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(+84) 28 3776 1300</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>enquiries@rmit.edu.vn</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-slate-900 mb-4 uppercase text-lg tracking-wider">Khám phá</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-red-600 transition-colors">Về RMIT</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Cựu sinh viên</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Cơ hội nghề nghiệp</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Tin tức & Sự kiện</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-slate-900 mb-4 uppercase text-lg tracking-wider">Kết nối</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>&copy; 2026 RMIT University Vietnam. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Use</a>
              <a href="#" className="hover:text-slate-600">Sitemap</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default RMITLandingPage;
