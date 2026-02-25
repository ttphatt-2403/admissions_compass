import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  Globe, 
  Code, 
  Palette, 
  TrendingUp, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const FPTLandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    major: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">F</div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">Đại học <span className="text-orange-500">FPT</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Trang chủ</a>
              <a href="#majors" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Ngành đào tạo</a>
              <a href="#scholarship" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Học bổng</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Tuyển sinh</a>
            </div>

            <button 
              onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-0.5"
            >
              Đăng ký ngay
              <ArrowRight className="w-4 h-4" />
            </button>

             {/* Mobile menu button placeholder */}
             <div className="md:hidden">
                <button className="text-slate-600 hover:text-orange-500 p-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1710153793328-4b427d6b2444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYXNpYW4lMjBzdHVkZW50cyUyMHdhbGtpbmclMjBvdXRzaWRlJTIwc3Vubnl8ZW58MXx8fHwxNzcxMzM4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="University Campus" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
              <Star className="w-4 h-4 fill-current" />
              <span>Tuyển sinh Đại học chính quy 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Chạm tới tương lai cùng <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Đại học FPT</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Môi trường học tập chuẩn quốc tế, cơ sở vật chất hiện đại và mạng lưới kết nối doanh nghiệp rộng lớn giúp bạn sẵn sàng cho sự nghiệp toàn cầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Đăng ký tư vấn ngay
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-bold text-lg border border-white/20 transition-all hover:-translate-y-1">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats Cards */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "Chuẩn Quốc Tế", desc: "Giáo trình bản quyền quốc tế, đào tạo song ngữ Anh - Việt." },
                { icon: Briefcase, title: "Việc Làm Đảm Bảo", desc: "98% sinh viên có việc làm ngay sau khi tốt nghiệp." },
                { icon: Users, title: "Kết Nối Doanh Nghiệp", desc: "Hợp tác với hơn 500 doanh nghiệp hàng đầu trong và ngoài nước." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-4 hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for floating cards */}
      <div className="h-32 hidden md:block"></div>

      {/* Featured Majors Section */}
      <section id="majors" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Chương trình đào tạo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Các ngành học xu hướng</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Đại học FPT đào tạo các nhóm ngành công nghệ, kinh tế, ngôn ngữ và thiết kế với phương pháp thực tiễn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Công nghệ thông tin", 
                icon: Code, 
                img: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBjb2RpbmclMjBzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwY29tcHV0ZXIlMjBsYWJ8ZW58MXx8fHwxNzcxMzM4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                desc: "Kỹ thuật phần mềm, An toàn thông tin, Trí tuệ nhân tạo (AI)."
              },
              { 
                title: "Quản trị kinh doanh", 
                icon: TrendingUp, 
                img: "https://images.unsplash.com/photo-1741529189563-5f3eb1253eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnRzJTIwcHJlc2VudGF0aW9uJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzEzMzg2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                desc: "Digital Marketing, Kinh doanh quốc tế, Quản trị khách sạn."
              },
              { 
                title: "Thiết kế đồ họa", 
                icon: Palette, 
                img: "https://images.unsplash.com/photo-1770003354577-82b2a2d09d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwc3R1ZGVudCUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTMzODY4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
                desc: "Thiết kế mỹ thuật số, Truyền thông đa phương tiện."
              },
              { 
                title: "Ngôn ngữ", 
                icon: MessageCircle, 
                img: "https://images.unsplash.com/photo-1721702754494-fdd7189f946c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjB0YWxraW5nJTIwZ3JvdXAlMjB1bml2ZXJzaXR5JTIwbGlicmFyeXxlbnwxfHx8fDE3NzEzMzg2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                desc: "Ngôn ngữ Anh, Ngôn ngữ Nhật, Ngôn ngữ Hàn Quốc."
              }
            ].map((major, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                  <img 
                    src={major.img} 
                    alt={major.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg text-orange-500 z-20 shadow-sm">
                    <major.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">{major.title}</h4>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{major.desc}</p>
                  <span className="text-orange-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Xem chi tiết <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FPT Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1653546496652-6bf7744992a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFzaWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwZ3JhZHVhdGlvbiUyMGdvd258ZW58MXx8fHwxNzcxMzM4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Sinh viên thành công" 
                 className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500"
               />
               <div className="absolute bottom-10 -left-4 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow hidden sm:block">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-green-100 rounded-full text-green-600">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-slate-900">Việc làm ngay</p>
                     <p className="text-xs text-slate-500">sau khi tốt nghiệp</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Cơ hội nghề nghiệp</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tự tin khởi nghiệp và làm việc toàn cầu</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Tại Đại học FPT, sinh viên không chỉ học lý thuyết mà còn được rèn luyện kỹ năng thực chiến thông qua các kỳ thực tập tại doanh nghiệp (OJT) ngay từ năm thứ 3.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "Sinh viên có việc làm sau tốt nghiệp", value: "98%" },
                  { label: "Mức lương khởi điểm trung bình", value: "15 Tr+" },
                  { label: "Sinh viên làm việc tại nước ngoài", value: "19%" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-700 font-medium">{stat.label}</span>
                    <span className="text-2xl font-bold text-orange-500">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex gap-4 items-start">
                  <div className="text-4xl text-orange-300 font-serif">"</div>
                  <div>
                    <p className="text-slate-700 italic text-lg">
                      "Môi trường năng động tại FPT đã giúp mình tự tin apply vào tập đoàn công nghệ lớn ngay khi chưa nhận bằng tốt nghiệp."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1653546496652-6bf7744992a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFzaWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwZ3JhZHVhdGlvbiUyMGdvd258ZW58MXx8fHwxNzcxMzM4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Nguyễn Văn A</p>
                        <p className="text-slate-500 text-xs">Cựu sinh viên K14 - Kỹ thuật phần mềm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions & Scholarship Section */}
      <section id="scholarship" className="py-20 bg-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Thông tin tuyển sinh 2026</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cơ hội học bổng & Phương thức xét tuyển</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             {/* Scholarship Card */}
             <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                      <Star className="w-6 h-6" />
                   </div>
                   <h4 className="text-2xl font-bold text-slate-900 mb-4">Học bổng tài năng</h4>
                   <p className="text-slate-600 mb-6">
                     Hàng ngàn suất học bổng trị giá 100%, 70%, 50% học phí toàn khóa học dành cho học sinh có thành tích xuất sắc.
                   </p>
                   <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Giải Nhất, Nhì, Ba kỳ thi HSG Quốc gia.</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Điểm thi THPT Quốc gia &gt; 27 điểm.</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Thành tích năng khiếu nổi bật.</span>
                      </li>
                   </ul>
                   <button className="text-orange-600 font-bold text-sm hover:underline">Xem chi tiết quy chế học bổng &rarr;</button>
                </div>
             </div>

             {/* Admission Methods Card */}
             <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                      <BookOpen className="w-6 h-6" />
                   </div>
                   <h4 className="text-2xl font-bold text-slate-900 mb-4">Phương thức xét tuyển</h4>
                   <div className="space-y-6">
                      <div>
                         <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">1</span>
                            Xét học bạ THPT
                         </h5>
                         <p className="text-sm text-slate-600 pl-8">Đạt Top 40 SchoolRank (Chứng nhận xếp hạng học sinh THPT).</p>
                      </div>
                      <div>
                         <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">2</span>
                            Điểm thi THPT Quốc gia
                         </h5>
                         <p className="text-sm text-slate-600 pl-8">Căn cứ theo ngưỡng chất lượng đầu vào của Đại học FPT.</p>
                      </div>
                      <div>
                         <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">3</span>
                            Xét tuyển thẳng
                         </h5>
                         <p className="text-sm text-slate-600 pl-8">Dành cho thí sinh có chứng chỉ tiếng Anh quốc tế (IELTS, TOEFL...).</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register-form" className="py-20 bg-orange-600 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Đăng ký tư vấn ngay</h3>
                <p className="text-slate-300 mb-8 text-sm">
                  Để lại thông tin để nhận tư vấn chi tiết về lộ trình học, học bổng và cơ hội việc làm.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium">024 7300 5588</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium">tuyensinh@fpt.edu.vn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium">Khu Công nghệ cao Hòa Lạc, Hà Nội</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Kết nối với chúng tôi</p>
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                     <Facebook className="w-4 h-4" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                     <Instagram className="w-4 h-4" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                     <Youtube className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </div>

            <div className="md:w-7/12 p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Đăng ký thành công!</h4>
                  <p className="text-slate-600">Cảm ơn bạn đã quan tâm. Bộ phận tư vấn sẽ liên hệ lại trong thời gian sớm nhất.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-orange-500 font-semibold hover:text-orange-600"
                  >
                    Gửi đăng ký khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        placeholder="0912..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="major" className="block text-sm font-medium text-slate-700 mb-1">Ngành quan tâm</label>
                    <select 
                      id="major"
                      name="major"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                      value={formData.major}
                      onChange={handleChange}
                    >
                      <option value="">Chọn ngành học...</option>
                      <option value="it">Công nghệ thông tin</option>
                      <option value="business">Quản trị kinh doanh</option>
                      <option value="design">Thiết kế đồ họa</option>
                      <option value="language">Ngôn ngữ</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 mt-4"
                  >
                    Gửi đăng ký
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Bằng việc đăng ký, bạn đồng ý với chính sách bảo mật của chúng tôi.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">F</div>
                <span className="font-bold text-xl text-white">Đại học FPT</span>
              </div>
              <p className="max-w-xs text-sm">
                Trường Đại học FPT phân hiệu Hà Nội <br/>
                Khu Giáo dục và Đào tạo – Khu Công nghệ cao Hòa Lạc – Km29 Đại lộ Thăng Long, H. Thạch Thất, TP. Hà Nội
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liên kết</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Tin tức</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Điều khoản sử dụng</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; 2026 FPT University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FPTLandingPage;
