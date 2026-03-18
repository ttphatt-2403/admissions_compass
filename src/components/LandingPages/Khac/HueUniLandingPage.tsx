import React, { useState } from 'react';
import {
  Menu, X, Search, ChevronRight, TrendingUp, DollarSign,
  BarChart, Briefcase, Users, Globe, Award, BookOpen,
  Phone, Mail, MapPin, Facebook, Linkedin, Youtube,
  ArrowRight, Star, GraduationCap
} from 'lucide-react';

const HueUniLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 1,
      title: 'Y khoa',
      score: '27.00+',
      desc: 'Đào tạo bác sĩ đa khoa với kiến thức y học toàn diện và kỹ năng lâm sàng xuất sắc.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      icon: <Award size={20} />,
    },
    {
      id: 2,
      title: 'Công nghệ thông tin',
      score: '25.50+',
      desc: 'Đào tạo kỹ sư CNTT đáp ứng nhu cầu chuyển đổi số và phát triển kinh tế miền Trung.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      icon: <BarChart size={20} />,
    },
    {
      id: 3,
      title: 'Sư phạm Toán',
      score: '26.00+',
      desc: 'Đào tạo giáo viên toán học chuyên nghiệp với phương pháp giảng dạy tiên tiến.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      icon: <BookOpen size={20} />,
    },
    {
      id: 4,
      title: 'Luật',
      score: '25.00+',
      desc: 'Chương trình luật toàn diện, đào tạo chuyên gia pháp lý cho khu vực miền Trung.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      icon: <Globe size={20} />,
    },
  ];

  const stats = [
    { value: 'ĐH Vùng', label: 'Lớn nhất Miền Trung' },
    { value: '91%', label: 'Có việc làm' },
    { value: '200+', label: 'Đối tác doanh nghiệp' },
    { value: '45.000+', label: 'Sinh viên' },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-[#4A148C] text-white py-1 px-4 text-xs font-medium hidden md:block">
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
            <div className="w-12 h-12 bg-[#4A148C] rounded-full flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[#4A148C] text-lg leading-tight">ĐHH</div>
              <div className="text-xs text-slate-500">Đại học Huế</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-[#4A148C]">Giới thiệu</a>
            <a href="#" className="hover:text-[#4A148C]">Ngành học</a>
            <a href="#" className="hover:text-[#4A148C]">Tuyển sinh</a>
            <a href="#" className="hover:text-[#4A148C]">Nghiên cứu</a>
            <a href="#" className="hover:text-[#4A148C]">Tin tức</a>
            <button className="bg-[#F9A825] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-yellow-600 transition">
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
        <div className="absolute inset-0 bg-[#4A148C] opacity-75" />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 bg-[#F9A825] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
            <Star size={12} /> Đại học Vùng lớn nhất Miền Trung
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Cố đô học vấn
            <br />
            <span className="text-[#F9A825]">Tương lai rạng ngời</span>
          </h1>
          <p className="text-lg text-purple-100 mb-8">
            Đại học Huế – đại học vùng lớn nhất miền Trung Việt Nam, mang trong mình di sản văn hóa cố đô và khát vọng vươn tầm quốc tế.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F9A825] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
              Khám phá ngành học <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#4A148C] transition">
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
              <div className="text-3xl font-extrabold text-[#4A148C]">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Majors */}
      <div className="max-w-7xl mx-auto px-4 py-20 mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#4A148C]">Ngành học nổi bật</h2>
          <p className="text-slate-500 mt-2">Chương trình đào tạo đa ngành, chuẩn quốc tế</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((m) => (
            <div key={m.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute top-3 right-3 bg-[#F9A825] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {m.score}
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center gap-2 text-[#4A148C] font-bold mb-2">
                  {m.icon}
                  <span>{m.title}</span>
                </div>
                <p className="text-slate-500 text-sm">{m.desc}</p>
                <button className="mt-4 text-[#4A148C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Tìm hiểu thêm <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-[#4A148C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12">Tại sao chọn Đại học Huế?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F9A825] rounded-full flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Đại học Vùng lớn nhất miền Trung</h3>
                <p className="text-purple-100 text-sm">Đại học Huế là đại học vùng với 8 trường đại học thành viên, đào tạo đa ngành từ y tế, kỹ thuật đến khoa học xã hội, phục vụ toàn khu vực miền Trung - Tây Nguyên.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F9A825] rounded-full flex items-center justify-center shrink-0">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Di sản văn hóa và học thuật</h3>
                <p className="text-purple-100 text-sm">Tọa lạc tại cố đô Huế - di sản thế giới UNESCO, đại học mang trong mình tinh hoa văn hóa và truyền thống học thuật lâu đời của đất nước.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F9A825] rounded-full flex items-center justify-center shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Cơ hội việc làm toàn quốc</h3>
                <p className="text-purple-100 text-sm">200+ đối tác doanh nghiệp và tổ chức trong và ngoài nước. Mạng lưới cựu sinh viên rộng lớn hỗ trợ tìm việc làm tại các tỉnh thành trên cả nước.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F9A825] rounded-full flex items-center justify-center shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Học phí hợp lý, học bổng phong phú</h3>
                <p className="text-purple-100 text-sm">Học phí cạnh tranh so với các đại học lớn, nhiều chương trình học bổng từ nhà nước, doanh nghiệp và tổ chức quốc tế dành cho sinh viên xuất sắc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#4A148C] mb-4">Đăng ký tư vấn tuyển sinh</h2>
            <p className="text-slate-500 mb-6">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí về chương trình đào tạo và cơ hội học bổng.</p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-[#4A148C]" /> 03 Lê Lợi, TP.Huế, Thừa Thiên Huế</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-[#4A148C]" /> 0234 3823 291</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-[#4A148C]" /> ts@hueuni.edu.vn</div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80"><Youtube size={16} /></a>
              <a href="#" className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80"><Linkedin size={16} /></a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A148C]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A148C]" />
              <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A148C]" />
              <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A148C] text-slate-500">
                <option value="">Chọn ngành quan tâm</option>
                {majors.map((m) => <option key={m.id} value={m.title}>{m.title}</option>)}
              </select>
              <textarea placeholder="Câu hỏi của bạn" rows={3} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A148C]" />
              <button type="submit" className="w-full bg-[#4A148C] text-white py-3 rounded-lg font-semibold hover:bg-purple-900 transition flex items-center justify-center gap-2">
                Gửi đăng ký <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-slate-400 text-center py-6 text-xs">
        © 2025 Đại học Huế – Tất cả quyền được bảo lưu.
      </div>
    </div>
  );
};

export default HueUniLandingPage;
