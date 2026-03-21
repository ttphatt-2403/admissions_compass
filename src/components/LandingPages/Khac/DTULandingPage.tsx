import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import {
  Menu, X, Search, ChevronRight, TrendingUp, DollarSign,
  BarChart, Briefcase, Users, Globe, Award, BookOpen,
  Phone, Mail, MapPin, Facebook, Linkedin, Youtube,
  ArrowRight, Star, GraduationCap
} from 'lucide-react';

const DTULandingPage = () => {
  usePageAnalytics('DTU', 'Đại học Duy Tân');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 1,
      title: 'Công nghệ thông tin',
      score: '23.50+',
      desc: 'Đào tạo kỹ sư CNTT với định hướng phát triển phần mềm, AI và chuyển đổi số.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      icon: <BarChart size={20} />,
    },
    {
      id: 2,
      title: 'Kỹ thuật phần mềm',
      score: '23.00+',
      desc: 'Chương trình kỹ thuật phần mềm hiện đại, đào tạo lập trình viên và kỹ sư phần mềm.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      icon: <TrendingUp size={20} />,
    },
    {
      id: 3,
      title: 'Quản trị kinh doanh',
      score: '22.50+',
      desc: 'Đào tạo nhà quản lý doanh nghiệp với tư duy đổi mới sáng tạo và hội nhập quốc tế.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      icon: <Briefcase size={20} />,
    },
    {
      id: 4,
      title: 'Ngôn ngữ Anh',
      score: '22.50+',
      desc: 'Đào tạo chuyên gia ngôn ngữ Anh với kỹ năng giao tiếp quốc tế và dịch thuật chuyên nghiệp.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      icon: <Globe size={20} />,
    },
  ];

  const stats = [
    { value: 'Top 5', label: 'ĐH Tư thục VN' },
    { value: '92%', label: 'Có việc làm' },
    { value: '200+', label: 'Đối tác QT' },
    { value: '20.000+', label: 'Sinh viên' },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#B71C1C] text-white py-1 px-4 text-xs font-medium hidden md:block">
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
            <div className="w-12 h-12 bg-[#B71C1C] rounded-full flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[#B71C1C] text-lg leading-tight">DTU</div>
              <div className="text-xs text-slate-500">Đại học Duy Tân</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-[#B71C1C]">Giới thiệu</a>
            <a href="#" className="hover:text-[#B71C1C]">Ngành học</a>
            <a href="#" className="hover:text-[#B71C1C]">Tuyển sinh</a>
            <a href="#" className="hover:text-[#B71C1C]">Nghiên cứu</a>
            <a href="#" className="hover:text-[#B71C1C]">Tin tức</a>
            <button className="bg-[#1565C0] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-blue-800 transition">
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#B71C1C] opacity-75" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 bg-[#1565C0] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
            <Star size={12} /> Top 5 ĐH Tư thục Việt Nam
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Đổi mới sáng tạo
            <br />
            <span className="text-[#1565C0]">Hội nhập toàn cầu</span>
          </h1>
          <p className="text-lg text-red-100 mb-8">
            Đại học Duy Tân – đại học tư thục hàng đầu miền Trung, tiên phong trong đổi mới giáo dục và hợp tác quốc tế, đào tạo nhân lực cho thời đại 4.0.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1565C0] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-800 transition">
              Khám phá ngành học <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#B71C1C] transition">
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
              <div className="text-3xl font-extrabold text-[#B71C1C]">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Majors */}
      <div className="max-w-7xl mx-auto px-4 py-20 mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#B71C1C]">Ngành học nổi bật</h2>
          <p className="text-slate-500 mt-2">Chương trình đào tạo gắn kết công nghệ và kinh doanh</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((m) => (
            <div key={m.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute top-3 right-3 bg-[#1565C0] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {m.score}
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center gap-2 text-[#B71C1C] font-bold mb-2">
                  {m.icon}
                  <span>{m.title}</span>
                </div>
                <p className="text-slate-500 text-sm">{m.desc}</p>
                <button className="mt-4 text-[#B71C1C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Tìm hiểu thêm <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-[#B71C1C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12">Tại sao chọn DTU?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Xếp hạng quốc tế uy tín</h3>
                <p className="text-red-100 text-sm">DTU nằm trong bảng xếp hạng THE Impact Rankings và QS Asia, là đại học tư thục đầu tiên tại miền Trung đạt các tiêu chuẩn kiểm định quốc tế.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">200+ đối tác quốc tế</h3>
                <p className="text-red-100 text-sm">Hợp tác với hơn 200 trường đại học và tổ chức quốc tế tại Mỹ, Anh, Nhật Bản, Hàn Quốc. Nhiều chương trình trao đổi sinh viên và học bổng quốc tế.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                <TrendingUp size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Tiên phong đổi mới giáo dục</h3>
                <p className="text-red-100 text-sm">Áp dụng phương pháp giảng dạy theo chuẩn quốc tế, chương trình học bằng tiếng Anh, và tích hợp công nghệ AI trong giảng dạy và học tập.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565C0] rounded-full flex items-center justify-center shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Nghiên cứu khoa học xuất sắc</h3>
                <p className="text-red-100 text-sm">Nhiều nhà khoa học DTU được vinh danh trong Top nhà khoa học ảnh hưởng nhất thế giới. Hàng trăm bài báo ISI/Scopus được công bố hàng năm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#B71C1C] mb-4">Đăng ký tư vấn tuyển sinh</h2>
            <p className="text-slate-500 mb-6">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí về chương trình đào tạo và cơ hội học bổng.</p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-[#B71C1C]" /> 254 Nguyễn Văn Linh, Thanh Khê, Đà Nẵng</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-[#B71C1C]" /> 0236 3650 403</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-[#B71C1C]" /> ts@duytan.edu.vn</div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Youtube size={16} /></a>
              <a href="#" className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80"><Linkedin size={16} /></a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B71C1C]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B71C1C]" />
              <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B71C1C]" />
              <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B71C1C] text-slate-500">
                <option value="">Chọn ngành quan tâm</option>
                {majors.map((m) => <option key={m.id} value={m.title}>{m.title}</option>)}
              </select>
              <textarea placeholder="Câu hỏi của bạn" rows={3} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B71C1C]" />
              <button type="submit" className="w-full bg-[#B71C1C] text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition flex items-center justify-center gap-2">
                Gửi đăng ký <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-slate-400 text-center py-6 text-xs">
        © 2025 Đại học Duy Tân (DTU) – Tất cả quyền được bảo lưu.
      </div>
    </div>
  );
};

export default DTULandingPage;
