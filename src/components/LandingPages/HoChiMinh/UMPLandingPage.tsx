import React, { useState } from 'react';
import {
  Menu, X, Search, ChevronRight, TrendingUp, DollarSign,
  BarChart, Briefcase, Users, Globe, Award, BookOpen,
  Phone, Mail, MapPin, Facebook, Linkedin, Youtube,
  ArrowRight, Star, GraduationCap
} from 'lucide-react';

const UMPLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 1,
      title: 'Y khoa',
      score: '28.70+',
      desc: 'Đào tạo bác sĩ đa khoa với kiến thức y học toàn diện và kỹ năng lâm sàng xuất sắc.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      icon: <Award size={20} />,
    },
    {
      id: 2,
      title: 'Răng - Hàm - Mặt',
      score: '28.50+',
      desc: 'Chương trình nha khoa chuyên sâu, đào tạo bác sĩ răng hàm mặt tay nghề cao.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      icon: <BookOpen size={20} />,
    },
    {
      id: 3,
      title: 'Dược học',
      score: '27.50+',
      desc: 'Đào tạo dược sĩ lâm sàng và nghiên cứu phát triển dược phẩm tiên tiến.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      icon: <TrendingUp size={20} />,
    },
    {
      id: 4,
      title: 'Y học dự phòng',
      score: '25.80+',
      desc: 'Phòng chống dịch bệnh, kiểm soát môi trường và bảo vệ sức khỏe cộng đồng.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      icon: <Globe size={20} />,
    },
  ];

  const stats = [
    { value: 'Top 1', label: 'Y Dược HCM' },
    { value: '100%', label: 'Có việc làm' },
    { value: '80+', label: 'Bệnh viện đối tác' },
    { value: '10.000+', label: 'Sinh viên' },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#004B8D] text-white py-1 px-4 text-xs font-medium hidden md:block">
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
            <div className="w-12 h-12 bg-[#004B8D] rounded-full flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[#004B8D] text-lg leading-tight">UMP</div>
              <div className="text-xs text-slate-500">Đại học Y Dược TP.HCM</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-[#004B8D]">Giới thiệu</a>
            <a href="#" className="hover:text-[#004B8D]">Ngành học</a>
            <a href="#" className="hover:text-[#004B8D]">Tuyển sinh</a>
            <a href="#" className="hover:text-[#004B8D]">Nghiên cứu</a>
            <a href="#" className="hover:text-[#004B8D]">Tin tức</a>
            <button className="bg-[#E31837] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-red-700 transition">
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#004B8D] opacity-75" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 bg-[#E31837] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
            <Star size={12} /> Top 1 Y Dược TP.HCM
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Thầy thuốc tận tâm
            <br />
            <span className="text-[#E31837]">Bảo vệ sức khỏe nhân dân</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Đại học Y Dược TP.HCM – ngôi trường y danh tiếng nhất miền Nam, nơi đào tạo thế hệ thầy thuốc tài năng và y đức.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E31837] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition">
              Khám phá ngành học <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#004B8D] transition">
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
              <div className="text-3xl font-extrabold text-[#004B8D]">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Majors */}
      <div className="max-w-7xl mx-auto px-4 py-20 mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#004B8D]">Ngành học nổi bật</h2>
          <p className="text-slate-500 mt-2">Chương trình đào tạo y khoa chuẩn quốc tế</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((m) => (
            <div key={m.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute top-3 right-3 bg-[#E31837] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {m.score}
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center gap-2 text-[#004B8D] font-bold mb-2">
                  {m.icon}
                  <span>{m.title}</span>
                </div>
                <p className="text-slate-500 text-sm">{m.desc}</p>
                <button className="mt-4 text-[#004B8D] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Tìm hiểu thêm <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-[#004B8D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12">Tại sao chọn UMP?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E31837] rounded-full flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Trường y danh tiếng nhất miền Nam</h3>
                <p className="text-blue-100 text-sm">Hơn 70 năm đào tạo y khoa, UMP là địa chỉ uy tín nhất miền Nam Việt Nam, đào tạo đội ngũ bác sĩ, dược sĩ hàng đầu cho cả nước.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E31837] rounded-full flex items-center justify-center shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Thực hành lâm sàng chuyên sâu</h3>
                <p className="text-blue-100 text-sm">80+ bệnh viện đối tác, sinh viên được thực tập tại các bệnh viện lớn nhất TP.HCM ngay từ năm đầu tiên với trang thiết bị y tế hiện đại.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E31837] rounded-full flex items-center justify-center shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Nghiên cứu y học tiên phong</h3>
                <p className="text-blue-100 text-sm">Hàng trăm nghiên cứu y học được công bố quốc tế, ứng dụng các kỹ thuật y khoa tiên tiến nhất trong chẩn đoán và điều trị.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E31837] rounded-full flex items-center justify-center shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">100% sinh viên có việc làm</h3>
                <p className="text-blue-100 text-sm">Tỷ lệ có việc làm đạt 100%, bác sĩ và dược sĩ UMP được các bệnh viện, công ty dược lớn tranh nhau tuyển dụng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#004B8D] mb-4">Đăng ký tư vấn tuyển sinh</h2>
            <p className="text-slate-500 mb-6">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí về chương trình đào tạo và cơ hội học bổng.</p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-[#004B8D]" /> 217 Hồng Bàng, Q.5, TP.HCM</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-[#004B8D]" /> 028 3855 4269</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-[#004B8D]" /> ts@ump.edu.vn</div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Youtube size={16} /></a>
              <a href="#" className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80"><Linkedin size={16} /></a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B8D]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B8D]" />
              <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B8D]" />
              <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B8D] text-slate-500">
                <option value="">Chọn ngành quan tâm</option>
                {majors.map((m) => <option key={m.id} value={m.title}>{m.title}</option>)}
              </select>
              <textarea placeholder="Câu hỏi của bạn" rows={3} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B8D]" />
              <button type="submit" className="w-full bg-[#004B8D] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition flex items-center justify-center gap-2">
                Gửi đăng ký <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-slate-400 text-center py-6 text-xs">
        © 2025 Đại học Y Dược TP.HCM (UMP) – Tất cả quyền được bảo lưu.
      </div>
    </div>
  );
};

export default UMPLandingPage;
