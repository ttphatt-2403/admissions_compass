import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  Menu, X, Search, ChevronRight, TrendingUp, DollarSign,
  BarChart, Briefcase, Users, Globe, Award, BookOpen,
  Phone, Mail, MapPin, Facebook, Linkedin, Youtube,
  ArrowRight, Star, GraduationCap
} from 'lucide-react';

const UEHLandingPage = () => {
  usePageAnalytics('UEH', 'Đại học Kinh tế TP.HCM');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 1,
      title: 'Logistics',
      score: '27.50+',
      desc: 'Quản lý chuỗi cung ứng và logistics toàn cầu, đáp ứng xu hướng thương mại quốc tế.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      icon: <Globe size={20} />,
    },
    {
      id: 2,
      title: 'Kinh doanh quốc tế',
      score: '27.20+',
      desc: 'Chương trình đào tạo chuyên sâu về thương mại và đầu tư quốc tế.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      icon: <Briefcase size={20} />,
    },
    {
      id: 3,
      title: 'Marketing',
      score: '27.00+',
      desc: 'Đào tạo chuyên gia marketing hiện đại với tư duy sáng tạo và kỹ năng số.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      icon: <TrendingUp size={20} />,
    },
    {
      id: 4,
      title: 'Kinh tế quốc tế',
      score: '26.90+',
      desc: 'Phân tích kinh tế vĩ mô, chính sách thương mại và hội nhập kinh tế quốc tế.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
      icon: <BarChart size={20} />,
    },
  ];

  const stats = [
    { value: 'Top 1', label: 'Kinh tế HCM' },
    { value: '96%', label: 'Có việc làm' },
    { value: '600+', label: 'Đối tác doanh nghiệp' },
    { value: '50.000+', label: 'Sinh viên' },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#1A3A5C] text-white py-1 px-4 text-xs font-medium hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span>Sinh viên</span>
            <span>Cựu sinh viên</span>
            <span>Cán bộ - Giảng viên</span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center gap-1"><Globe size={12} /> EN</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1A3A5C] rounded-full flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[#1A3A5C] text-lg leading-tight">UEH</div>
              <div className="text-xs text-slate-500">Đại học Kinh tế TP.HCM</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-[#1A3A5C]">Giới thiệu</a>
            <a href="#" className="hover:text-[#1A3A5C]">Ngành học</a>
            <a href="#" className="hover:text-[#1A3A5C]">Tuyển sinh</a>
            <a href="#" className="hover:text-[#1A3A5C]">Nghiên cứu</a>
            <a href="#" className="hover:text-[#1A3A5C]">Tin tức</a>
            <button className="bg-[#E8A020] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-yellow-600 transition">
              Đăng ký tư vấn
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-3 space-y-2 text-sm">
            <a href="#" className="block py-1">Giới thiệu</a>
            <a href="#" className="block py-1">Ngành học</a>
            <a href="#" className="block py-1">Tuyển sinh</a>
            <a href="#" className="block py-1">Nghiên cứu</a>
            <a href="#" className="block py-1">Tin tức</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <div
        className="relative h-[650px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1A3A5C] opacity-75" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 bg-[#E8A020] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
            <Star size={12} /> Top 1 Kinh tế TP.HCM
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Kinh tế dẫn đầu
            <br />
            <span className="text-[#E8A020]">Phát triển bền vững</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Đại học Kinh tế TP.HCM – trung tâm đào tạo kinh doanh hàng đầu Đông Nam Á, nơi kiến tạo các nhà lãnh đạo kinh tế tương lai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E8A020] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
              Khám phá ngành học <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1A3A5C] transition">
              Thông tin tuyển sinh
            </button>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0">
          {stats.map((s, i) => (
            <div key={i} className="p-6 text-center">
              <div className="text-3xl font-extrabold text-[#1A3A5C]">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Majors */}
      <div className="max-w-7xl mx-auto px-4 py-20 mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1A3A5C]">Ngành học nổi bật</h2>
          <p className="text-slate-500 mt-2">Chương trình đào tạo chất lượng cao, chuẩn quốc tế</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((m) => (
            <div key={m.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute top-3 right-3 bg-[#E8A020] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {m.score}
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center gap-2 text-[#1A3A5C] font-bold mb-2">
                  {m.icon}
                  <span>{m.title}</span>
                </div>
                <p className="text-slate-500 text-sm">{m.desc}</p>
                <button className="mt-4 text-[#1A3A5C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Tìm hiểu thêm <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-[#1A3A5C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12">Tại sao chọn UEH?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8A020] rounded-full flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Uy tín số 1 về kinh tế</h3>
                <p className="text-blue-100 text-sm">Kiểm định AACSB – danh hiệu uy tín nhất thế giới cho các trường kinh doanh. Chương trình đào tạo chuẩn quốc tế, được công nhận toàn cầu.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8A020] rounded-full flex items-center justify-center shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Mạng lưới doanh nghiệp rộng lớn</h3>
                <p className="text-blue-100 text-sm">600+ đối tác doanh nghiệp, cơ hội thực tập và việc làm tại các tập đoàn đa quốc gia, ngân hàng lớn và công ty Fortune 500.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8A020] rounded-full flex items-center justify-center shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Cộng đồng alumni hùng mạnh</h3>
                <p className="text-blue-100 text-sm">50.000+ cựu sinh viên đang giữ các vị trí lãnh đạo tại các tổ chức, doanh nghiệp hàng đầu trong và ngoài nước.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8A020] rounded-full flex items-center justify-center shrink-0">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Hợp tác quốc tế toàn diện</h3>
                <p className="text-blue-100 text-sm">Chương trình liên kết với các đại học danh tiếng tại Mỹ, Pháp, Úc. Cơ hội học bổng và trao đổi sinh viên quốc tế.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1A3A5C] mb-4">Đăng ký tư vấn tuyển sinh</h2>
            <p className="text-slate-500 mb-6">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí về chương trình đào tạo và cơ hội học bổng.</p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-[#1A3A5C]" /> 59C Nguyễn Đình Chiểu, Q.3, TP.HCM</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-[#1A3A5C]" /> 028 3829 8360</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-[#1A3A5C]" /> ts@ueh.edu.vn</div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Youtube size={16} /></a>
              <a href="#" className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80"><Linkedin size={16} /></a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
              <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
              <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] text-slate-500">
                <option value="">Chọn ngành quan tâm</option>
                {majors.map((m) => <option key={m.id} value={m.title}>{m.title}</option>)}
              </select>
              <textarea placeholder="Câu hỏi của bạn" rows={3} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
              <button type="submit" className="w-full bg-[#1A3A5C] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition flex items-center justify-center gap-2">
                Gửi đăng ký <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-slate-400 text-center py-6 text-xs">
        © 2025 Đại học Kinh tế TP.HCM (UEH) – Tất cả quyền được bảo lưu.
      </div>
    </div>
  );
};

export default UEHLandingPage;
