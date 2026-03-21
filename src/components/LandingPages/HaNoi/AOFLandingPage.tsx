import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  Menu, X, Search, ChevronRight, TrendingUp, DollarSign,
  BarChart, Briefcase, Users, Globe, Award, BookOpen,
  Phone, Mail, MapPin, Facebook, Linkedin, Youtube,
  ArrowRight, Star, GraduationCap
} from 'lucide-react';

const AOFLandingPage = () => {
  usePageAnalytics('AOF', 'Học viện Tài chính');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    { id: 'kiemtoan', title: 'Kiểm toán', score: '26.60+', desc: 'Đào tạo kiểm toán viên chuyên nghiệp, thành thạo chuẩn mực kiểm toán quốc tế ISA, IFRS và đáp ứng yêu cầu chứng chỉ ACCA, CPA.', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800', icon: BarChart },
    { id: 'tcnh', title: 'Tài chính – Ngân hàng', score: '26.31+', desc: 'Chương trình đào tạo chuyên gia tài chính ngân hàng, am hiểu thị trường vốn, quản trị rủi ro và phân tích đầu tư tài chính.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800', icon: DollarSign },
    { id: 'marketing', title: 'Marketing', score: '26.23+', desc: 'Đào tạo chuyên gia marketing chiến lược, digital marketing, quản trị thương hiệu và phát triển thị trường trong bối cảnh kinh tế số.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800', icon: TrendingUp },
    { id: 'nhqt', title: 'Ngân hàng Quốc tế', score: '26.00+', desc: 'Chuyên ngành ngân hàng quốc tế, đào tạo chuyên gia am hiểu hệ thống tài chính toàn cầu, tín dụng quốc tế và thanh toán quốc tế.', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800', icon: Globe },
  ];

  const stats = [
    { value: 'Top 2', label: 'Tài chính Việt Nam' },
    { value: '97%', label: 'Có việc làm sau ra trường' },
    { value: '300+', label: 'Đối tác ngân hàng & doanh nghiệp' },
    { value: '20.000+', label: 'Sinh viên đang học' },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#004D40] text-white py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4"><span>Sinh viên</span><span>Cựu sinh viên</span><span>Cán bộ - Giảng viên</span></div>
          <div className="flex space-x-4"><span className="flex items-center gap-1"><Globe size={12} /> EN</span><span>Cổng thông tin đào tạo</span></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#004D40] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-[#FFD700]">
                AOF
              </div>
              <div className="flex flex-col">
                <span className="text-[#004D40] font-bold text-lg leading-none uppercase">Học viện Tài chính</span>
                <span className="text-[#FFD700] text-xs font-bold uppercase tracking-wider">Academy of Finance</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                <a key={item} href="#" className="text-slate-700 hover:text-[#004D40] font-semibold transition-colors uppercase text-sm">{item}</a>
              ))}
              <button onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#004D40] text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-colors shadow-lg">Đăng ký xét tuyển</button>
            </div>
            <div className="lg:hidden"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#004D40]">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button></div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 py-2 space-y-1">
              {['Giới thiệu', 'Tuyển sinh', 'Đào tạo', 'Nghiên cứu', 'Hợp tác'].map((item) => (
                <a key={item} href="#" className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 border-b border-slate-100 last:border-0">{item}</a>
              ))}
              <div className="pt-4 pb-2"><button onClick={() => { document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="w-full bg-[#004D40] text-white py-3 rounded font-bold">Đăng ký tư vấn</button></div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D40]/90 via-[#004D40]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 text-[#FFD700] fill-[#FFD700]" />Tuyển sinh Đại học chính quy 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">Tài chính vững mạnh <br /><span className="text-[#FFD700]">Kiến tạo thịnh vượng</span></h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light border-l-4 border-[#FFD700] pl-6">Học viện Tài chính, trường đại học hàng đầu về tài chính – kế toán – ngân hàng tại Việt Nam, đào tạo chuyên gia tài chính đẳng cấp quốc tế phục vụ nền kinh tế đất nước.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-[#FFD700] hover:opacity-90 text-slate-900 font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2">Khám phá Ngành học <ArrowRight size={20} /></button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold rounded transition-all flex items-center justify-center gap-2"><GraduationCap size={20} /> Thông tin Tuyển sinh</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl grid grid-cols-2 md:grid-cols-4 p-8 md:p-12 gap-8 border-t-4 border-[#004D40]">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-[#004D40] mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="h-1 w-12 bg-[#FFD700] mx-auto mb-3 rounded-full"></div>
              <div className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Majors */}
      <section id="majors" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004D40] uppercase tracking-tight mb-4">Các Ngành <span className="text-[#FFD700]">Mũi Nhọn</span></h2>
            <div className="w-24 h-1 bg-[#004D40] mx-auto rounded mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-600">Chương trình đào tạo tiên tiến, cập nhật theo chuẩn quốc tế.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majors.map((major) => (
              <div key={major.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img src={major.image} alt={major.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#004D40]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 border border-white text-white font-bold rounded-full hover:bg-white hover:text-[#004D40] transition-colors">Xem chi tiết</button>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <major.icon className="w-10 h-10 text-[#004D40] mb-3 group-hover:text-[#FFD700] transition-colors" />
                  <h3 className="text-xl font-bold text-[#004D40] mb-2">{major.title}</h3>
                  <div className="w-12 h-0.5 bg-slate-200 mb-3"></div>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">{major.desc}</p>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-500">Điểm chuẩn:</span>
                    <span className="font-bold text-[#FFD700]">{major.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-[#004D40] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border-2 border-white/10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-2 border-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-[#FFD700] text-slate-900 text-xs font-bold uppercase tracking-wider mb-4 rounded">Tại sao chọn AOF?</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Học viện hàng đầu đào tạo chuyên gia tài chính</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">Học viện Tài chính với hơn 55 năm phát triển là địa chỉ đào tạo chuyên gia tài chính, kế toán, ngân hàng uy tín nhất Việt Nam, kết nối chặt chẽ với ngành ngân hàng và doanh nghiệp.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0"><Users className="text-[#FFD700]" size={24} /></div>
                  <div><h4 className="text-xl font-bold mb-1">Chứng chỉ quốc tế được công nhận</h4><p className="text-slate-400 text-sm">Chương trình đào tạo tích hợp chứng chỉ ACCA, CPA, CFA giúp sinh viên có lợi thế cạnh tranh vượt trội trên thị trường lao động.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0"><Briefcase className="text-[#FFD700]" size={24} /></div>
                  <div><h4 className="text-xl font-bold mb-1">Hệ sinh thái đối tác ngân hàng dày đặc</h4><p className="text-slate-400 text-sm">Hơn 300 ngân hàng, công ty tài chính và doanh nghiệp như Vietcombank, BIDV, MB Bank thường xuyên tuyển dụng và hợp tác với học viện.</p></div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" className="rounded-lg shadow-xl translate-y-8 object-cover h-64 w-full" alt="Campus" />
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" className="rounded-lg shadow-xl object-cover h-64 w-full" alt="Students" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-5/12 p-10 bg-[#004D40] text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Đăng ký Tư vấn</h3>
                <p className="text-teal-100 mb-8">Để lại thông tin, đội ngũ tư vấn sẽ liên hệ ngay.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><Phone size={20} className="text-[#FFD700]" /><span className="font-medium">024 3836 3764</span></div>
                  <div className="flex items-center gap-3"><Mail size={20} className="text-[#FFD700]" /><span className="font-medium">ts@hvtc.edu.vn</span></div>
                  <div className="flex items-center gap-3"><MapPin size={20} className="text-[#FFD700]" /><span className="font-medium">Số 58 Lê Văn Hiến, Bắc Từ Liêm, Hà Nội</span></div>
                </div>
              </div>
              <div className="mt-12 relative z-10">
                <p className="text-xs text-teal-300 uppercase tracking-widest font-bold mb-2">Follow us</p>
                <div className="flex gap-4"><Facebook className="hover:text-[#FFD700] cursor-pointer transition-colors" /><Youtube className="hover:text-[#FFD700] cursor-pointer transition-colors" /><Linkedin className="hover:text-[#FFD700] cursor-pointer transition-colors" /></div>
              </div>
            </div>
            <div className="md:w-7/12 p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-bold text-[#004D40] mb-2">Họ và tên</label><input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#004D40] outline-none" placeholder="Nguyễn Văn A" /></div>
                  <div><label className="block text-sm font-bold text-[#004D40] mb-2">Số điện thoại</label><input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#004D40] outline-none" placeholder="09xx xxx xxx" /></div>
                </div>
                <div><label className="block text-sm font-bold text-[#004D40] mb-2">Email</label><input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#004D40] outline-none" placeholder="email@example.com" /></div>
                <div><label className="block text-sm font-bold text-[#004D40] mb-2">Ngành quan tâm</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#004D40] outline-none text-slate-700">
                    <option value="">Chọn ngành học...</option>
                    <option value="kiemtoan">Kiểm toán</option>
                    <option value="tcnh">Tài chính – Ngân hàng</option>
                    <option value="marketing">Marketing</option>
                    <option value="nhqt">Ngân hàng Quốc tế</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold text-[#004D40] mb-2">Câu hỏi</label><textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#004D40] outline-none h-24 resize-none" placeholder="Bạn cần tư vấn về điều gì?"></textarea></div>
                <button type="submit" className="w-full bg-[#004D40] hover:opacity-90 text-white font-bold py-4 rounded shadow-lg transition-all uppercase tracking-wide">Đăng ký ngay</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AOFLandingPage;
