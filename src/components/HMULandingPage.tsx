import React, { useState } from 'react';
import { 
  Stethoscope, Activity, Heart, UserPlus, Microscope, 
  Building2, GraduationCap, Phone, Mail, MapPin, 
  Menu, X, ChevronRight, CheckCircle2, FlaskConical, 
  Pill, Syringe, Brain, Baby, ArrowRight 
} from 'lucide-react';

const HMULandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faculties = [
    {
      id: 'y-khoa',
      title: 'Y Khoa',
      score: '28.0+',
      desc: 'Đào tạo Bác sĩ đa khoa với kiến thức y học cơ sở và lâm sàng vững chắc. Thời gian đào tạo: 6 năm.',
      icon: Stethoscope,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'duoc-hoc',
      title: 'Dược Học',
      score: '27.5+',
      desc: 'Nghiên cứu về thuốc, bào chế và quản lý dược. Đào tạo Dược sĩ đại học chất lượng cao. Thời gian đào tạo: 5 năm.',
      icon: Pill,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'rhm',
      title: 'Răng Hàm Mặt',
      score: '27.8+',
      desc: 'Chuyên sâu về nha khoa, chỉnh nha và phẫu thuật hàm mặt. Cơ sở thực hành nha khoa hiện đại.',
      icon: Brain, // Using Brain as placeholder for specialized medical field
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'dieu-duong',
      title: 'Điều Dưỡng',
      score: '25.0+',
      desc: 'Chăm sóc sức khỏe người bệnh chuyên nghiệp. Đào tạo cử nhân Điều dưỡng tiên tiến.',
      icon: Heart,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'ytcc',
      title: 'Y Tế Công Cộng',
      score: '24.5+',
      desc: 'Quản lý y tế, phòng chống dịch bệnh và nâng cao sức khỏe cộng đồng.',
      icon: Activity,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'ky-thuat-y',
      title: 'Kỹ Thuật Y Học',
      score: '26.0+',
      desc: 'Xét nghiệm y học, chẩn đoán hình ảnh và phục hồi chức năng.',
      icon: Microscope,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  const highlights = [
    {
      title: 'Cơ sở Thực hành Hiện đại',
      desc: 'Hệ thống Bệnh viện Đại học Y Hà Nội và các bệnh viện trung ương là cơ sở thực hành lâm sàng hàng đầu.',
      icon: Building2
    },
    {
      title: 'Đội ngũ Giảng viên Đầu ngành',
      desc: 'Nơi quy tụ các Giáo sư, Phó Giáo sư, Tiến sĩ y khoa uy tín nhất Việt Nam trực tiếp giảng dạy.',
      icon: GraduationCap
    },
    {
      title: 'Nghiên cứu Khoa học',
      desc: 'Tiên phong trong các công trình nghiên cứu y học, ứng dụng công nghệ mới trong chẩn đoán và điều trị.',
      icon: FlaskConical
    }
  ];

  return (
    <div className="font-sans text-slate-700 bg-slate-50 pb-12">
      {/* Top Bar */}
      <div className="bg-sky-700 text-white py-2 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1"><Phone size={14} /> (024) 3852 3798</span>
            <span className="flex items-center gap-1"><Mail size={14} /> tuyensinh@hmu.edu.vn</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-sky-200 transition-colors">Cổng thông tin sinh viên</a>
            <span className="hidden md:inline text-sky-400">|</span>
            <a href="#" className="hover:text-sky-200 transition-colors">Thư viện số</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                 {/* Placeholder for HMU Logo - Using a specialized icon composition */}
                 <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-sky-700 rounded-full opacity-10"></div>
                    <Stethoscope className="w-10 h-10 text-sky-700 p-1" />
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sky-800 font-bold text-lg leading-none uppercase tracking-wide">Đại học Y Hà Nội</span>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">Hanoi Medical University</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Trang chủ', 'Giới thiệu', 'Đào tạo', 'Tuyển sinh', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                <a key={item} href="#" className="text-slate-600 hover:text-sky-700 font-semibold transition-colors text-sm uppercase">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg text-sm flex items-center gap-2"
              >
                <UserPlus size={16} /> Đăng ký tư vấn
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-sky-800">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60] bg-white">
            <div className="flex flex-col h-full">
               <div className="flex justify-between items-center px-4 h-20 border-b border-sky-100">
                  <span className="text-sky-900 font-bold text-lg uppercase">Danh mục</span>
                  <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 hover:text-red-500">
                     <X size={28} />
                  </button>
               </div>
               <div className="px-4 py-6 space-y-4 overflow-y-auto">
                  {['Trang chủ', 'Giới thiệu', 'Đào tạo', 'Tuyển sinh', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-3 text-lg font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-700 border-b border-slate-50 rounded-lg transition-colors">
                      {item}
                    </a>
                  ))}
                  <div className="pt-8 px-4">
                    <button 
                      onClick={() => { setIsMenuOpen(false); document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold uppercase shadow-lg text-lg"
                    >
                      Đăng ký tư vấn
                    </button>
                  </div>
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1758691461513-88a0aef72160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudHMlMjBob3NwaXRhbCUyMHByYWN0aWNlJTIwZG9jdG9yJTIwd2hpdGUlMjBjb2F0fGVufDF8fHx8MTc3MTQ4MjM2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical Students Practice" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider">Tuyển sinh Đại học Chính quy 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
              Vững Chuyên Môn <br/>
              <span className="text-sky-300">Sáng Y Đức</span>
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-10 font-light leading-relaxed max-w-xl">
              Cái nôi đào tạo cán bộ y tế hàng đầu Việt Nam. Nơi ươm mầm những tài năng y khoa với sứ mệnh chăm sóc và bảo vệ sức khỏe nhân dân.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg shadow-lg shadow-sky-900/20 transition-all flex items-center justify-center gap-2">
                Thông tin Tuyển sinh <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white text-sky-800 font-bold rounded-lg shadow-lg hover:bg-sky-50 transition-all">
                Tìm hiểu các ngành
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-b-4 border-sky-500">
          <div className="text-center md:border-r border-slate-100 last:border-0">
            <div className="text-3xl font-bold text-sky-600 mb-1">120+</div>
            <div className="text-sm text-slate-500 font-medium">Năm hình thành & phát triển</div>
          </div>
          <div className="text-center md:border-r border-slate-100 last:border-0">
            <div className="text-3xl font-bold text-sky-600 mb-1">100%</div>
            <div className="text-sm text-slate-500 font-medium">Giảng viên trình độ sau ĐH</div>
          </div>
          <div className="text-center md:border-r border-slate-100 last:border-0">
            <div className="text-3xl font-bold text-sky-600 mb-1">Top 1</div>
            <div className="text-sm text-slate-500 font-medium">Đào tạo Y khoa miền Bắc</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-600 mb-1">10+</div>
            <div className="text-sm text-slate-500 font-medium">Bệnh viện thực hành lớn</div>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Chương trình Đào tạo</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Đa dạng các ngành đào tạo thuộc khối sức khỏe, kết hợp chặt chẽ giữa lý thuyết và thực hành lâm sàng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty) => (
              <div key={faculty.id} className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${faculty.color} bg-opacity-20`}>
                    <faculty.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">{faculty.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded">Điểm chuẩn: {faculty.score}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {faculty.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-sky-600 font-bold text-sm hover:underline">
                    Xem chi tiết <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HMU */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-100/30 skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1761106082516-61d4c6883f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNoJTIwbWljcm9zY29wZXxlbnwxfHx8fDE3NzE0ODE2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Laboratory Research" 
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-800">Kiểm định chất lượng</span>
                </div>
                <p className="text-xs text-slate-500">
                  Đạt chuẩn kiểm định chất lượng giáo dục trong nước và quốc tế (AUN-QA).
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 leading-tight">
                Tại sao chọn <br/>
                <span className="text-sky-600">Đại học Y Hà Nội?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                HMU không chỉ là nơi truyền thụ kiến thức, mà còn là môi trường rèn luyện y đức, kỹ năng lâm sàng và tư duy nghiên cứu khoa học.
              </p>

              <div className="space-y-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                        <item.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-20 bg-sky-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-sky-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-sky-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Học bổng & Hỗ trợ Tài chính</h3>
                <p className="text-sky-100 mb-8 leading-relaxed">
                  Nhà trường dành hàng tỷ đồng mỗi năm cho quỹ học bổng khuyến khích học tập, học bổng tài trợ từ doanh nghiệp và các chính sách hỗ trợ sinh viên có hoàn cảnh khó khăn.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-400" />
                    <span>Học bổng Vallet, Odon Vallet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-400" />
                    <span>Học bổng Mitsubishi, Daewoong</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-400" />
                    <span>Miễn giảm học phí cho sinh viên nghèo vượt khó</span>
                  </li>
                </ul>
                <button className="bg-white text-sky-900 px-6 py-3 rounded-lg font-bold hover:bg-sky-50 transition-colors">
                  Xem chính sách học bổng
                </button>
              </div>
              <div className="hidden md:block relative">
                 <img 
                   src="https://images.unsplash.com/photo-1615462696310-09736533dbb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb25zdWx0YXRpb24lMjBwYXRpZW50JTIwZnJpZW5kbHl8ZW58MXx8fHwxNzcxNDgyMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Doctor" 
                   className="rounded-xl shadow-2xl border-4 border-sky-700/50"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Đăng ký Tư vấn Tuyển sinh</h2>
            <p className="text-slate-500">
              Nhận thông tin chi tiết về phương thức tuyển sinh, điểm chuẩn và tư vấn chọn ngành phù hợp.
            </p>
          </div>

          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Họ và tên</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="Nguyễn Văn A" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Số điện thoại</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="09xxxxxxx" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="email@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Ngành quan tâm</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-slate-600">
                <option>Y Khoa (Bác sĩ đa khoa)</option>
                <option>Y học cổ truyền</option>
                <option>Răng - Hàm - Mặt</option>
                <option>Dược học</option>
                <option>Điều dưỡng</option>
                <option>Khúc xạ nhãn khoa</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nội dung cần tư vấn</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="Đặt câu hỏi cho ban tư vấn..."></textarea>
            </div>

            <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg">
              Gửi đăng ký tư vấn
            </button>
          </form>
        </div>
      </section>

      {/* Footer
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl">
                <Stethoscope className="text-sky-500" /> ĐẠI HỌC Y HÀ NỘI
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-sky-500" />
                  <span>Số 01 Tôn Thất Tùng, Đống Đa, Hà Nội</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-sky-500" />
                  <span>(024) 3852 3798</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-sky-500" />
                  <span>daihocyhanoi@hmu.edu.vn</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên kết nhanh</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-sky-500 cursor-pointer transition-colors">Bệnh viện Đại học Y Hà Nội</li>
                <li className="hover:text-sky-500 cursor-pointer transition-colors">Viện Đào tạo Răng Hàm Mặt</li>
                <li className="hover:text-sky-500 cursor-pointer transition-colors">Viện Đào tạo Y học Dự phòng</li>
                <li className="hover:text-sky-500 cursor-pointer transition-colors">Trung tâm Khảo thí & Đảm bảo CLGD</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Đăng ký nhận tin</h4>
              <p className="text-xs mb-4">Nhận thông báo mới nhất về tuyển sinh và các sự kiện y khoa.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email của bạn" className="bg-slate-800 border-none rounded px-3 py-2 text-sm flex-1 focus:ring-1 focus:ring-sky-500 text-white" />
                <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded text-sm font-bold">Gửi</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            &copy; 2026 Hanoi Medical University. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HMULandingPage;
