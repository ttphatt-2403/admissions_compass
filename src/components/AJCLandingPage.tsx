import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Newspaper,
  Megaphone,
  Landmark,
  Users,
  Building2,
  MapPin,
  Calendar,
  GraduationCap,
  Camera,
  Mic,
  Video,
  Briefcase,
  CheckCircle2,
  Trophy,
  Sparkles,
} from 'lucide-react';

const AJCLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    major: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const menuItems = [
    { label: 'Tổng quan', target: 'overview' },
    { label: 'Ngành đào tạo', target: 'majors' },
    { label: 'Tuyển sinh', target: 'admissions' },
    { label: 'Cơ hội nghề nghiệp', target: 'career' },
  ];

  const trainingGroups = [
    {
      title: 'Nhóm Báo chí',
      icon: Newspaper,
      items: ['Báo in', 'Báo truyền hình', 'Báo phát thanh', 'Quay phim truyền hình'],
    },
    {
      title: 'Nhóm Truyền thông',
      icon: Megaphone,
      items: ['Truyền thông đa phương tiện', 'Quan hệ công chúng (PR)', 'Quảng cáo', 'Truyền thông marketing'],
    },
    {
      title: 'Nhóm Chính trị - lý luận',
      icon: Landmark,
      items: ['Chính trị học', 'Xây dựng Đảng và chính quyền nhà nước', 'Chủ nghĩa xã hội khoa học'],
    },
    {
      title: 'Nhóm Khoa học xã hội',
      icon: Users,
      items: ['Lịch sử', 'Xã hội học', 'Quan hệ quốc tế'],
    },
  ];

  const topMajors = [
    {
      title: 'Truyền thông đa phương tiện',
      desc: 'Ngành đào tạo kỹ năng sản xuất nội dung số, thiết kế truyền thông và phát triển các sản phẩm truyền thông đa nền tảng.',
      score: '~28',
      icon: Video,
    },
    {
      title: 'Quan hệ công chúng',
      desc: 'Ngành học đào tạo chuyên gia PR, quản lý hình ảnh thương hiệu và chiến lược truyền thông doanh nghiệp.',
      score: '~27',
      icon: Megaphone,
    },
    {
      title: 'Báo chí',
      desc: 'Sinh viên được đào tạo kỹ năng viết báo, sản xuất chương trình truyền hình và phát thanh.',
      score: '~27',
      icon: Newspaper,
    },
  ];

  const facilities = [
    { title: 'Studio truyền hình', icon: Video },
    { title: 'Phòng thu phát thanh', icon: Mic },
    { title: 'Phòng dựng phim', icon: Camera },
    { title: 'Phòng thực hành báo chí', icon: Newspaper },
  ];

  const employers = [
    'Đài Truyền hình Việt Nam (VTV)',
    'Đài Tiếng nói Việt Nam (VOV)',
    'Thông tấn xã Việt Nam',
    'Các agency truyền thông',
    'Doanh nghiệp marketing',
  ];

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-rose-700 text-white flex items-center justify-center font-bold text-lg">AJC</div>
              <div>
                <p className="font-bold text-rose-800 leading-tight">HỌC VIỆN BÁO CHÍ & TUYÊN TRUYỀN</p>
                <p className="text-xs text-slate-500 tracking-wider uppercase">Academy of Journalism and Communication</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-700 hover:text-rose-700 font-semibold text-sm uppercase tracking-wide transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 rounded-md font-bold text-sm transition-all shadow-lg shadow-rose-700/20"
              >
                Đăng ký tư vấn
              </button>
            </div>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-7 h-7 text-rose-800" /> : <Menu className="w-7 h-7 text-rose-800" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-rose-100 bg-white">
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => {
                    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-3 border-b border-slate-100 text-slate-700 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 bg-rose-700 text-white py-3 rounded-md font-bold"
              >
                Đăng ký tư vấn tuyển sinh
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600"
            alt="Sinh viên truyền thông"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-rose-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-400/30 text-rose-100 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Tuyển sinh 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Trở thành chuyên gia truyền thông và báo chí trong kỷ nguyên số
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10">
              Học viện Báo chí và Tuyên truyền là một trong những cơ sở đào tạo hàng đầu Việt Nam trong lĩnh vực báo chí,
              truyền thông, quan hệ công chúng và khoa học chính trị. Trường đào tạo nguồn nhân lực chất lượng cao cho các
              cơ quan báo chí, truyền thông, cơ quan nhà nước và doanh nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-4 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Khám phá ngành học <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-4 border border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all"
              >
                Đăng ký tư vấn tuyển sinh
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tổng quan về trường</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Học viện Báo chí và Tuyên truyền là trường đại học công lập trực thuộc Học viện Chính trị Quốc gia Hồ Chí Minh,
                được thành lập năm 1962. Trường có nhiệm vụ đào tạo và bồi dưỡng đội ngũ cán bộ báo chí, truyền thông,
                nghiên cứu chính trị và khoa học xã hội.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-rose-50 border border-rose-100">
                <p className="text-sm text-slate-500">Thành lập</p>
                <p className="text-2xl font-bold text-rose-800 mt-1">1962</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-500">Địa chỉ</p>
                <p className="text-base font-bold text-slate-800 mt-1">36 Xuân Thủy, Cầu Giấy, Hà Nội</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-500">Quy mô tuyển sinh</p>
                <p className="text-xl font-bold text-slate-800 mt-1">~2.000 sinh viên/năm</p>
              </div>
              <div className="p-5 rounded-xl bg-rose-50 border border-rose-100">
                <p className="text-sm text-slate-500">Hệ đào tạo</p>
                <p className="text-xl font-bold text-rose-800 mt-1">Đại học, Sau đại học</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vì sao nên chọn học viện</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Trophy className="w-10 h-10 text-rose-700 mb-4" />
              <h3 className="text-xl font-bold mb-3">Trường đào tạo báo chí hàng đầu Việt Nam</h3>
              <p className="text-slate-600 leading-relaxed">
                Nhiều nhà báo, biên tập viên và chuyên gia truyền thông lớn của Việt Nam tốt nghiệp từ học viện.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Users className="w-10 h-10 text-rose-700 mb-4" />
              <h3 className="text-xl font-bold mb-3">Môi trường học tập năng động</h3>
              <p className="text-slate-600 leading-relaxed">
                Sinh viên được tham gia các dự án truyền thông, sản xuất nội dung, chương trình truyền hình và sự kiện thực tế.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Building2 className="w-10 h-10 text-rose-700 mb-4" />
              <h3 className="text-xl font-bold mb-3">Liên kết thực tập rộng</h3>
              <p className="text-slate-600 leading-relaxed mb-3">Sinh viên có cơ hội thực tập tại các cơ quan báo chí lớn:</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-700" />VTV</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-700" />VOV</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-700" />Thông tấn xã Việt Nam</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-700" />Báo điện tử lớn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="majors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Các nhóm ngành đào tạo</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Học viện đào tạo nhiều nhóm ngành trong lĩnh vực báo chí, truyền thông, khoa học chính trị và xã hội.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {trainingGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <div className="w-11 h-11 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{group.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-rose-700 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ngành học được quan tâm nhất</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topMajors.map((major) => (
              <div key={major.title} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <major.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{major.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{major.desc}</p>
                <span className="inline-block text-sm font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700">
                  Điểm chuẩn tham khảo: {major.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Phương thức tuyển sinh</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Xét điểm thi tốt nghiệp THPT</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Xét học bạ</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Xét tuyển kết hợp chứng chỉ quốc tế</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Tuyển thẳng và ưu tiên xét tuyển</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-5">Tổ hợp xét tuyển phổ biến</h3>
              <table className="w-full min-w-[320px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wide">
                    <th className="py-2">Tổ hợp</th>
                    <th className="py-2">Môn</th>
                  </tr>
                </thead>
                <tbody className="text-slate-800">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-bold text-rose-700">C00</td>
                    <td className="py-3">Văn - Sử - Địa</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-bold text-rose-700">D01</td>
                    <td className="py-3">Toán - Văn - Anh</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-bold text-rose-700">D78</td>
                    <td className="py-3">Văn - Khoa học xã hội - Anh</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-rose-700">C15</td>
                    <td className="py-3">Văn - Toán - KHXH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Điểm chuẩn tham khảo</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <p className="text-slate-500">Thang điểm 30</p>
              <p className="text-3xl font-extrabold text-rose-700 mt-2">22,96 - 25,08 điểm</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <p className="text-slate-500">Thang điểm 40</p>
              <p className="text-3xl font-extrabold text-rose-700 mt-2">33,64 - 37,5 điểm</p>
            </div>
          </div>
          <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl">
            <table className="w-full min-w-[360px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm uppercase tracking-wide text-slate-500">
                  <th className="py-3 px-5">Ngành</th>
                  <th className="py-3 px-5">Điểm chuẩn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-5 font-semibold">Truyền thông đa phương tiện</td>
                  <td className="py-4 px-5 text-rose-700 font-bold">~28</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-5 font-semibold">Quan hệ công chúng</td>
                  <td className="py-4 px-5 text-rose-700 font-bold">~27</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold">Báo chí</td>
                  <td className="py-4 px-5 text-rose-700 font-bold">~27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Chương trình đào tạo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Nội dung cốt lõi</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Lý thuyết truyền thông</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Kỹ năng báo chí</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Thực hành sản xuất nội dung</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Phân tích truyền thông số</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Kỹ năng được rèn luyện</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Viết báo</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Quay phim</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Biên tập video</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-700" />Quản lý truyền thông</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Cơ sở vật chất</h2>
          <p className="text-slate-600 max-w-3xl mb-8">
            Học viện đầu tư nhiều hệ thống phòng học và studio phục vụ đào tạo, giúp sinh viên thực hành như trong môi trường làm việc thực tế.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hoạt động sinh viên</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Sinh viên học viện rất năng động với nhiều câu lạc bộ chuyên môn và sự kiện thực tế trong lĩnh vực báo chí, truyền thông.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['CLB Báo chí', 'CLB MC - Truyền hình', 'CLB Truyền thông sáng tạo', 'CLB Nhiếp ảnh'].map((club) => (
                <div key={club} className="p-4 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-800">
                  {club}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Sự kiện nổi bật</h3>
            <ul className="space-y-4">
              {['Festival báo chí', 'Cuộc thi sáng tạo truyền thông', 'Hội thảo nghề nghiệp'].map((event) => (
                <li key={event} className="p-4 rounded-xl border border-rose-100 bg-rose-50 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-rose-700" />
                  <span className="font-medium">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="career" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Cơ hội nghề nghiệp</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Báo chí</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Phóng viên</li>
                <li>• Biên tập viên</li>
                <li>• MC truyền hình</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Truyền thông</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Chuyên viên PR</li>
                <li>• Quản lý truyền thông</li>
                <li>• Content Creator</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Marketing</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Chuyên viên marketing</li>
                <li>• Quản lý thương hiệu</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Doanh nghiệp và cơ quan tuyển dụng</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {employers.map((employer) => (
              <div key={employer} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-rose-700" />
                <span className="font-medium text-slate-800">{employer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cuộc sống sinh viên</h2>
          <p className="text-slate-600 text-lg max-w-4xl leading-relaxed mb-8">
            Sinh viên học viện có môi trường học tập sáng tạo và năng động. Đây là môi trường giúp sinh viên phát triển kỹ năng truyền thông
            và tư duy sáng tạo thông qua các hoạt động thực tiễn mỗi tuần.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {['Tổ chức sự kiện', 'Sản xuất chương trình truyền hình', 'Sáng tạo nội dung mạng xã hội'].map((activity) => (
              <div key={activity} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <GraduationCap className="w-8 h-8 text-rose-700 mb-3" />
                <h3 className="font-bold text-lg">{activity}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation-form" className="py-20 bg-gradient-to-br from-rose-700 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Bạn muốn trở thành nhà báo, chuyên gia truyền thông hoặc chuyên viên PR trong tương lai?</h2>
            <p className="text-rose-100 text-lg leading-relaxed mb-6">
              Học viện Báo chí và Tuyên truyền sẽ là nơi giúp bạn phát triển kỹ năng và theo đuổi đam mê trong lĩnh vực truyền thông.
            </p>
            <div className="space-y-3 text-rose-100">
              <p className="flex items-center gap-2"><MapPin className="w-5 h-5" />36 Xuân Thủy, Cầu Giấy, Hà Nội</p>
              <p className="flex items-center gap-2"><Building2 className="w-5 h-5" />Hệ đào tạo: Đại học, Sau đại học</p>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-5">Đăng ký nhận tư vấn tuyển sinh</h3>
            {submitted ? (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium">
                Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
                <select
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                >
                  <option value="">Ngành bạn quan tâm</option>
                  <option value="multimedia">Truyền thông đa phương tiện</option>
                  <option value="pr">Quan hệ công chúng</option>
                  <option value="journalism">Báo chí</option>
                  <option value="other">Ngành khác</option>
                </select>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="submit" className="px-5 py-3 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold transition-colors">
                    Đăng ký nhận tư vấn tuyển sinh
                  </button>
                  <button
                    type="button"
                    onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-5 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Xem chi tiết ngành học
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AJCLandingPage;
