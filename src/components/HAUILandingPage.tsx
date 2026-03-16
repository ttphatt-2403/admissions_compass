import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Cog,
  Car,
  Briefcase,
  Building2,
  Users,
  BookOpen,
  MapPin,
  Calendar,
  Trophy,
  Sparkles,
  Zap,
  Bot,
  GraduationCap,
  Wrench,
  Factory,
  BarChart3,
} from 'lucide-react';

const HAUILandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const reasons = [
    {
      title: 'Chương trình đào tạo gắn với thực hành',
      desc: 'Sinh viên được thực hành tại các phòng lab, xưởng kỹ thuật và trung tâm nghiên cứu.',
      icon: Wrench,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Hợp tác doanh nghiệp rộng',
      desc: 'Trường hợp tác với nhiều doanh nghiệp lớn trong và ngoài nước như Samsung, Canon, Toyota, Foxconn.',
      icon: Factory,
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: 'Cơ hội việc làm cao',
      desc: 'Sinh viên tốt nghiệp có cơ hội làm việc tại các tập đoàn công nghệ và nhà máy sản xuất lớn.',
      icon: Briefcase,
      color: 'from-orange-500 to-rose-500',
    },
  ];

  const groups = [
    {
      title: 'Nhóm Công nghệ thông tin',
      icon: Cpu,
      color: 'bg-cyan-100 text-cyan-700',
      items: ['Công nghệ thông tin', 'Khoa học máy tính', 'Hệ thống thông tin', 'Kỹ thuật phần mềm'],
    },
    {
      title: 'Nhóm Cơ khí - tự động hóa',
      icon: Cog,
      color: 'bg-indigo-100 text-indigo-700',
      items: ['Công nghệ kỹ thuật cơ khí', 'Cơ điện tử', 'Tự động hóa', 'Robot và hệ thống thông minh'],
    },
    {
      title: 'Nhóm Điện - điện tử',
      icon: Zap,
      color: 'bg-amber-100 text-amber-700',
      items: ['Công nghệ kỹ thuật điện', 'Công nghệ kỹ thuật điện tử - viễn thông'],
    },
    {
      title: 'Nhóm Công nghệ ô tô',
      icon: Car,
      color: 'bg-rose-100 text-rose-700',
      items: ['Công nghệ kỹ thuật ô tô', 'Kỹ thuật cơ khí động lực'],
    },
    {
      title: 'Nhóm Kinh tế - quản trị',
      icon: BarChart3,
      color: 'bg-emerald-100 text-emerald-700',
      items: ['Quản trị kinh doanh', 'Marketing', 'Kế toán', 'Tài chính ngân hàng'],
    },
  ];

  const featuredMajors = [
    {
      title: 'Công nghệ thông tin',
      desc: 'Đào tạo lập trình, phát triển phần mềm, hệ thống thông tin và trí tuệ nhân tạo.',
      score: '~26',
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Cơ điện tử',
      desc: 'Ngành học kết hợp cơ khí, điện tử và lập trình để phát triển hệ thống tự động.',
      score: '~25',
      icon: Bot,
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Công nghệ ô tô',
      desc: 'Sinh viên được đào tạo về thiết kế, vận hành và bảo trì các hệ thống ô tô hiện đại.',
      score: '~25',
      icon: Car,
      gradient: 'from-orange-500 to-rose-600',
    },
  ];

  const admissions = [
    'Xét điểm thi tốt nghiệp THPT',
    'Xét học bạ THPT',
    'Xét tuyển kết hợp chứng chỉ quốc tế',
    'Tuyển thẳng theo quy định của Bộ GD&ĐT',
  ];

  const facilities = [
    { title: 'Phòng lab robot', icon: Bot },
    { title: 'Trung tâm thực hành ô tô', icon: Car },
    { title: 'Xưởng cơ khí', icon: Cog },
    { title: 'Phòng lab công nghệ thông tin', icon: Cpu },
  ];

  const employers = ['Samsung', 'Canon', 'LG', 'Toyota', 'FPT Software'];

  return (
    <div className="font-sans bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes floatBlob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.08); }
          66% { transform: translate(-18px, 16px) scale(0.94); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .blob-1 { animation: floatBlob 12s ease-in-out infinite; }
        .blob-2 { animation: floatBlob 14s ease-in-out infinite reverse; }
        .blob-3 { animation: floatBlob 16s ease-in-out infinite; }
        .animated-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
      `}</style>

      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white font-black flex items-center justify-center shadow-lg">HAUI</div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">ĐẠI HỌC CÔNG NGHIỆP HÀ NỘI</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Hanoi University of Industry</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a href="#overview" className="hover:text-cyan-600 transition-colors">Tổng quan</a>
            <a href="#majors" className="hover:text-cyan-600 transition-colors">Ngành học</a>
            <a href="#admissions" className="hover:text-cyan-600 transition-colors">Tuyển sinh</a>
            <a href="#career" className="hover:text-cyan-600 transition-colors">Nghề nghiệp</a>
            <button
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
            >
              Đăng ký tư vấn
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-3">
            {['overview', 'majors', 'admissions', 'career'].map((target) => (
              <button
                key={target}
                onClick={() => {
                  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-3 border-b border-slate-100 font-medium capitalize"
              >
                {target === 'overview' ? 'Tổng quan' : target === 'majors' ? 'Ngành học' : target === 'admissions' ? 'Tuyển sinh' : 'Nghề nghiệp'}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-cyan-700/40 via-blue-800/35 to-fuchsia-700/35"></div>
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-cyan-500/30 blur-3xl blob-1"></div>
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-fuchsia-500/30 blur-3xl blob-2"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-orange-500/30 blur-3xl blob-3"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> Tuyển sinh 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Đại học Công nghiệp Hà Nội - Nơi đào tạo kỹ sư và chuyên gia công nghệ tương lai
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-10">
              Đại học Công nghiệp Hà Nội là một trong những trường đại học kỹ thuật - công nghệ lớn nhất Việt Nam, đào tạo hàng chục nghìn sinh viên mỗi năm trong các lĩnh vực công nghệ, kỹ thuật và kinh tế.
              Trường nổi bật với chương trình đào tạo gắn liền với thực hành và doanh nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Khám phá ngành học <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 font-bold text-lg transition-colors"
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Tổng quan về trường</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Đại học Công nghiệp Hà Nội là trường đại học công lập trực thuộc Bộ Công Thương. Trường có lịch sử phát triển lâu đời và là một trong những trung tâm đào tạo kỹ thuật - công nghệ lớn của Việt Nam.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Trường đào tạo đa ngành, đặc biệt mạnh về kỹ thuật, công nghệ và công nghiệp.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100">
                <p className="text-sm text-slate-500">Thành lập (tiền thân)</p>
                <p className="text-2xl font-black text-cyan-700 mt-1">1898</p>
              </div>
              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
                <p className="text-sm text-slate-500">Loại hình</p>
                <p className="text-2xl font-black text-indigo-700 mt-1">Đại học công lập</p>
              </div>
              <div className="p-5 rounded-2xl bg-fuchsia-50 border border-fuchsia-100">
                <p className="text-sm text-slate-500">Quy mô</p>
                <p className="text-2xl font-black text-fuchsia-700 mt-1">30.000+ sinh viên</p>
              </div>
              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                <p className="text-sm text-slate-500">Cơ sở chính</p>
                <p className="text-xl font-black text-orange-700 mt-1">Bắc Từ Liêm, Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Vì sao nên chọn Đại học Công nghiệp Hà Nội</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${reason.color} text-white flex items-center justify-center mb-4`}>
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {['Samsung', 'Canon', 'Toyota', 'Foxconn'].map((name) => (
              <span key={name} className="px-4 py-2 rounded-full bg-white border border-slate-200 font-semibold text-slate-700 shadow-sm">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="majors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Các nhóm ngành đào tạo</h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Đại học Công nghiệp Hà Nội đào tạo nhiều nhóm ngành quan trọng trong lĩnh vực kỹ thuật và kinh tế.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg transition-all">
                <div className={`w-11 h-11 rounded-lg ${group.color} flex items-center justify-center mb-4`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{group.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Ngành học nổi bật</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredMajors.map((major) => (
              <div key={major.title} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${major.gradient} flex items-center justify-center mb-4`}>
                  <major.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{major.title}</h3>
                <p className="text-slate-200 mb-4 leading-relaxed">{major.desc}</p>
                <span className="inline-flex px-3 py-1 rounded-full bg-white/15 text-cyan-100 font-semibold text-sm">Điểm chuẩn tham khảo: {major.score}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Phương thức tuyển sinh</h2>
            <ul className="space-y-3 text-slate-700">
              {admissions.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-2xl border border-slate-200 bg-white overflow-x-auto">
            <h3 className="text-2xl font-extrabold mb-5">Tổ hợp xét tuyển phổ biến</h3>
            <table className="w-full min-w-[340px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm uppercase">
                  <th className="py-2">Tổ hợp</th>
                  <th className="py-2">Môn</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                <tr className="border-b border-slate-100"><td className="py-3 font-bold text-cyan-700">A00</td><td>Toán - Vật lý - Hóa học</td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 font-bold text-cyan-700">A01</td><td>Toán - Vật lý - Tiếng Anh</td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 font-bold text-cyan-700">D01</td><td>Toán - Văn - Tiếng Anh</td></tr>
                <tr><td className="py-3 font-bold text-cyan-700">C01</td><td>Toán - Văn - Vật lý</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Điểm chuẩn tham khảo</h2>
          <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm uppercase text-slate-500">
                  <th className="py-3 px-5">Ngành</th>
                  <th className="py-3 px-5">Điểm chuẩn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100"><td className="py-4 px-5 font-semibold">Công nghệ thông tin</td><td className="py-4 px-5 font-bold text-cyan-700">~26</td></tr>
                <tr className="border-b border-slate-100"><td className="py-4 px-5 font-semibold">Công nghệ kỹ thuật ô tô</td><td className="py-4 px-5 font-bold text-cyan-700">~25</td></tr>
                <tr className="border-b border-slate-100"><td className="py-4 px-5 font-semibold">Cơ điện tử</td><td className="py-4 px-5 font-bold text-cyan-700">~25</td></tr>
                <tr><td className="py-4 px-5 font-semibold">Marketing</td><td className="py-4 px-5 font-bold text-cyan-700">~25</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 mt-4">Các ngành công nghệ thường có điểm chuẩn cao hơn.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 border border-slate-200 bg-slate-50">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Chương trình đào tạo</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-600" />Kết hợp lý thuyết và thực hành</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-600" />Gắn với nhu cầu doanh nghiệp</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-600" />Cập nhật công nghệ mới</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 border border-slate-200 bg-slate-50">
            <h3 className="text-2xl font-extrabold mb-4">Kỹ năng sinh viên được học</h3>
            <div className="flex flex-wrap gap-2">
              {['Lập trình', 'Thiết kế kỹ thuật', 'Quản lý dự án', 'Phân tích dữ liệu'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 font-semibold text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-950 via-blue-950 to-cyan-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Cơ sở vật chất</h2>
          <p className="text-slate-200 max-w-3xl mb-8">Trường sở hữu nhiều phòng thí nghiệm và trung tâm nghiên cứu hiện đại, giúp sinh viên có môi trường học tập thực tế.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                <item.icon className="w-8 h-8 text-cyan-200 mb-3" />
                <h3 className="font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Hoạt động sinh viên</h2>
            <p className="text-slate-600 text-lg mb-6">Sinh viên Đại học Công nghiệp Hà Nội tham gia nhiều hoạt động ngoại khóa và câu lạc bộ.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {['CLB Robotics', 'CLB Lập trình', 'CLB Khởi nghiệp', 'CLB Ngoại ngữ'].map((club) => (
                <div key={club} className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-semibold">{club}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold mb-4">Sự kiện nổi bật</h3>
            <ul className="space-y-3">
              {['Hội trại sinh viên', 'Cuộc thi sáng tạo kỹ thuật', 'Ngày hội việc làm'].map((event) => (
                <li key={event} className="p-4 rounded-xl border border-cyan-100 bg-cyan-50 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-700" />
                  <span className="font-medium">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="career" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Cơ hội nghề nghiệp</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-xl font-bold mb-4">Công nghệ thông tin</h3>
              <ul className="space-y-2 text-slate-700"><li>• Software Engineer</li><li>• Web Developer</li><li>• Data Analyst</li></ul>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-xl font-bold mb-4">Kỹ thuật</h3>
              <ul className="space-y-2 text-slate-700"><li>• Kỹ sư cơ khí</li><li>• Kỹ sư tự động hóa</li><li>• Kỹ sư ô tô</li></ul>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="text-xl font-bold mb-4">Kinh tế</h3>
              <ul className="space-y-2 text-slate-700"><li>• Chuyên viên marketing</li><li>• Quản trị doanh nghiệp</li><li>• Kế toán</li></ul>
            </div>
          </div>

          <h3 className="text-2xl font-extrabold mb-4">Doanh nghiệp tuyển dụng</h3>
          <div className="flex flex-wrap gap-3">
            {employers.map((name) => (
              <span key={name} className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm font-semibold">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="py-20 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Bạn muốn trở thành kỹ sư, chuyên gia công nghệ hoặc nhà quản lý trong tương lai?
            </h2>
            <p className="text-cyan-100 text-lg leading-relaxed">
              Đại học Công nghiệp Hà Nội sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng để thành công trong sự nghiệp.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-5">Đăng ký nhận tư vấn tuyển sinh</h3>
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
                Đăng ký thành công. Nhà trường sẽ liên hệ với bạn sớm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="Họ và tên" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
                <input required type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
                <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-white">
                  <option value="">Ngành quan tâm</option>
                  <option>Công nghệ thông tin</option>
                  <option>Cơ điện tử</option>
                  <option>Công nghệ ô tô</option>
                  <option>Marketing</option>
                </select>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:opacity-95 transition-opacity">
                    Đăng ký nhận tư vấn tuyển sinh
                  </button>
                  <button
                    type="button"
                    onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-5 py-3 rounded-lg border border-slate-300 font-semibold hover:bg-slate-50"
                  >
                    Tìm hiểu chi tiết ngành học
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

export default HAUILandingPage;
