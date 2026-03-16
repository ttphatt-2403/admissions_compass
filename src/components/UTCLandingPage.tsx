import React, { useState } from 'react';
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  CircleDot,
  GraduationCap,
  HardHat,
  Landmark,
  Lightbulb,
  MapPin,
  Menu,
  Package,
  Route,
  Ruler,
  Truck,
  Trophy,
  Users,
  X,
} from 'lucide-react';

const majorGroups = {
  engineering: {
    label: 'Engineering',
    title: 'Nhóm xây dựng hạ tầng',
    items: [
      'Kỹ thuật xây dựng cầu đường',
      'Kỹ thuật xây dựng công trình giao thông',
      'Kỹ thuật hạ tầng đô thị',
    ],
    icon: HardHat,
  },
  transportation: {
    label: 'Transportation',
    title: 'Nhóm cơ khí',
    items: ['Kỹ thuật cơ khí', 'Kỹ thuật ô tô'],
    icon: Car,
  },
  logistics: {
    label: 'Logistics',
    title: 'Nhóm logistics',
    items: ['Logistics và quản lý chuỗi cung ứng', 'Kinh tế vận tải'],
    icon: Package,
  },
};

type MajorTab = keyof typeof majorGroups;

const UTCLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MajorTab>('engineering');
  const [submitted, setSubmitted] = useState(false);

  const activeGroup = majorGroups[activeTab];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const featureMajors = [
    {
      title: 'Kỹ thuật xây dựng cầu đường',
      desc: 'Ngành đào tạo kỹ sư thiết kế, thi công và quản lý các công trình giao thông.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
      icon: Route,
    },
    {
      title: 'Logistics và chuỗi cung ứng',
      desc: 'Ngành học đang phát triển mạnh trong thương mại và vận tải quốc tế.',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
      icon: Truck,
    },
    {
      title: 'Kỹ thuật ô tô',
      desc: 'Đào tạo kỹ sư thiết kế và bảo trì các hệ thống ô tô hiện đại.',
      image:
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
      icon: Car,
    },
  ];

  const facilities = [
    {
      title: 'Phòng lab kết cấu cầu',
      image:
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Phòng mô phỏng giao thông',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Xưởng cơ khí',
      image:
        'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Trung tâm nghiên cứu giao thông',
      image:
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  const studentActivities = ['CLB kỹ thuật cầu đường', 'CLB robotics', 'CLB khởi nghiệp', 'CLB ngoại ngữ'];

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen overflow-x-hidden">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#003A8F] text-white font-black flex items-center justify-center shadow-lg">UTC</div>
            <div>
              <p className="font-bold text-[#003A8F] leading-tight">ĐẠI HỌC GIAO THÔNG VẬN TẢI</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">University of Transport and Communications</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a href="#overview" className="hover:text-blue-700 transition-colors">Tổng quan</a>
            <a href="#majors" className="hover:text-blue-700 transition-colors">Ngành đào tạo</a>
            <a href="#admissions" className="hover:text-blue-700 transition-colors">Tuyển sinh</a>
            <a href="#career" className="hover:text-blue-700 transition-colors">Nghề nghiệp</a>
            <button
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2.5 rounded-xl bg-[#003A8F] text-white hover:bg-blue-800 transition-colors"
            >
              Nhận tư vấn tuyển sinh
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-blue-100 px-4 py-3">
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'majors', label: 'Ngành đào tạo' },
              { id: 'admissions', label: 'Tuyển sinh' },
              { id: 'career', label: 'Nghề nghiệp' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-3 border-b border-slate-100 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#003A8F] via-blue-700 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1800')",
          }}
        ></div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Đại học Giao thông Vận tải - Nơi đào tạo kỹ sư xây dựng hạ tầng giao thông hàng đầu Việt Nam
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-9">
              Đại học Giao thông Vận tải là trường đại học kỹ thuật lâu đời tại Việt Nam, chuyên đào tạo kỹ sư và chuyên gia trong các lĩnh vực xây dựng hạ tầng giao thông, cơ khí, logistics và công nghệ vận tải.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-white text-[#003A8F] font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Khám phá ngành học
              </button>
              <button
                onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-yellow-300 text-blue-900 font-bold text-lg hover:bg-yellow-200 transition-colors"
              >
                Nhận tư vấn tuyển sinh
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-4 border-white/25 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1400"
              alt="UTC campus"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="overview" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Landmark, label: 'Thành lập', value: '1945' },
              { icon: MapPin, label: 'Cơ sở', value: 'Hà Nội & TP.HCM' },
              { icon: Users, label: 'Quy mô', value: '20.000+ sinh viên' },
              { icon: GraduationCap, label: 'Ngành đào tạo', value: '50+ ngành' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:-translate-y-1 transition-all">
                <item.icon className="w-8 h-8 text-[#003A8F] mb-4" />
                <p className="text-slate-500 text-sm">{item.label}</p>
                <p className="text-3xl font-black text-[#003A8F] mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Vì sao nên chọn trường</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Trophy,
                title: 'Trường kỹ thuật hàng đầu',
                desc: 'UTC là nơi đào tạo nhiều thế hệ kỹ sư xây dựng hạ tầng giao thông của Việt Nam.',
              },
              {
                icon: Ruler,
                title: 'Cơ hội tham gia dự án thực tế',
                desc: 'Sinh viên có cơ hội tham gia các dự án lớn: cao tốc Bắc Nam, metro, cầu vượt, đường sắt.',
              },
              {
                icon: Building2,
                title: 'Hợp tác doanh nghiệp',
                desc: 'Sinh viên được thực tập tại nhiều doanh nghiệp lớn và có lộ trình nghề nghiệp rõ ràng.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50 hover:scale-105 transition-transform">
                <item.icon className="w-12 h-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="majors" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Các nhóm ngành đào tạo</h2>

          <div className="flex flex-wrap gap-6 justify-center border-b border-slate-200 mb-8">
            {(Object.keys(majorGroups) as MajorTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-semibold transition-colors ${
                  activeTab === tab ? 'text-blue-700 border-b-[3px] border-blue-700' : 'text-slate-500 hover:text-blue-700'
                }`}
              >
                {majorGroups[tab].label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <activeGroup.icon className="w-8 h-8 text-blue-700" />
              <h3 className="text-2xl font-bold">{activeGroup.title}</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
              {activeGroup.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 mt-1 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Ngành học nổi bật</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featureMajors.map((major) => (
              <div key={major.title} className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden hover:-translate-y-1.5 transition-transform">
                <div className="h-52 overflow-hidden">
                  <img src={major.image} alt={major.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <major.icon className="w-8 h-8 text-blue-700 mb-3" />
                  <h3 className="text-xl font-bold mb-3">{major.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{major.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Phương thức tuyển sinh</h2>
            <div className="space-y-6">
              {[
                'Xét điểm thi tốt nghiệp THPT',
                'Xét học bạ',
                'Xét tuyển kết hợp chứng chỉ quốc tế',
              ].map((item, idx) => (
                <div key={item} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-4 h-4 rounded-full bg-blue-700"></div>
                    {idx !== 2 && <div className="w-[2px] h-12 bg-slate-300 mt-2"></div>}
                  </div>
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm overflow-x-auto">
            <h3 className="text-2xl font-extrabold mb-5">Tổ hợp xét tuyển</h3>
            <table className="w-full min-w-[340px] text-left rounded-lg overflow-hidden">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="py-3 px-4">Tổ hợp</th>
                  <th className="py-3 px-4">Môn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100"><td className="py-3 px-4 font-bold text-blue-700">A00</td><td className="py-3 px-4">Toán - Lý - Hóa</td></tr>
                <tr className="border-b border-slate-100"><td className="py-3 px-4 font-bold text-blue-700">A01</td><td className="py-3 px-4">Toán - Lý - Anh</td></tr>
                <tr><td className="py-3 px-4 font-bold text-blue-700">D01</td><td className="py-3 px-4">Toán - Văn - Anh</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="career" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Cơ hội nghề nghiệp</h2>
          <p className="text-slate-600 mb-6">Sinh viên tốt nghiệp có thể làm việc tại công ty xây dựng, tập đoàn hạ tầng, công ty logistics và doanh nghiệp vận tải.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Samsung', 'Canon', 'LG', 'Toyota', 'FPT Software'].map((company) => (
              <div key={company} className="rounded-xl bg-white border border-slate-200 p-4 text-center font-bold text-slate-700 shadow-sm">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="py-20 bg-gradient-to-r from-[#003A8F] via-blue-700 to-cyan-600 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Bạn muốn trở thành kỹ sư xây dựng hạ tầng giao thông trong tương lai?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Đại học Giao thông Vận tải sẽ giúp bạn xây dựng nền tảng kiến thức và kỹ năng để phát triển sự nghiệp.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-5">Đăng ký nhận tư vấn tuyển sinh</h3>
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
                Đăng ký thành công. Trường sẽ liên hệ với bạn sớm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="Họ và tên" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                <input required type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white">
                  <option value="">Ngành quan tâm</option>
                  <option>Kỹ thuật xây dựng cầu đường</option>
                  <option>Logistics và chuỗi cung ứng</option>
                  <option>Kỹ thuật ô tô</option>
                </select>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="px-5 py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors">
                    Đăng ký nhận tư vấn tuyển sinh
                  </button>
                  <button
                    type="button"
                    onClick={() => document.getElementById('majors')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-5 py-3 rounded-xl bg-yellow-300 text-blue-900 font-bold hover:bg-yellow-200 transition-colors"
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

export default UTCLandingPage;
