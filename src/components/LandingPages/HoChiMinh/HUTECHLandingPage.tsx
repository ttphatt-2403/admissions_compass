import { useState } from 'react';
import { 
  Cpu, 
  Code, 
  Zap, 
  Settings, 
  Car, 
  Monitor, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  Lightbulb, 
  Rocket,
  Download,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export default function HUTECHLandingPage() {
  const [activeMajor, setActiveMajor] = useState<string>('it');

  const majors = {
    it: {
      title: 'Công Nghệ Thông Tin',
      desc: 'Đào tạo kỹ sư CNTT toàn diện, nắm vững các công nghệ mới nhất như Cloud Computing, Cyber Security. Sinh viên thực chiến với các dự án phần mềm quy mô lớn.',
      projects: ['Hệ thống quản lý trường học thông minh', 'Ứng dụng thương mại điện tử đa nền tảng', 'Game mobile giáo dục'],
      jobs: ['Software Engineer', 'System Admin', 'IT Consultant', 'Project Manager'],
      image: 'https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcHJvZ3JhbW1pbmclMjBhaSUyMGNvbXB1dGVyJTIwY29kZXxlbnwxfHx8fDE3NzE1MDE4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Code />
    },
    se: {
      title: 'Kỹ Thuật Phần Mềm',
      desc: 'Chuyên sâu về quy trình phát triển phần mềm chuẩn quốc tế. Trang bị kỹ năng làm việc nhóm (Scrum/Agile) và kiểm thử phần mềm tự động.',
      projects: ['Phần mềm quản lý chuỗi cung ứng', 'Hệ thống ERP doanh nghiệp', 'Công cụ kiểm thử tự động'],
      jobs: ['Full-stack Developer', 'DevOps Engineer', 'Quality Assurance (QA/QC)', 'Technical Lead'],
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1080',
      icon: <Monitor />
    },
    ai: {
      title: 'Trí Tuệ Nhân Tạo (AI)',
      desc: 'Tiên phong trong đào tạo AI, Machine Learning và Data Science. Sinh viên tiếp cận các phòng Lab hiện đại với hệ thống siêu máy tính.',
      projects: ['Chatbot tư vấn tự động', 'Hệ thống nhận diện khuôn mặt', 'Robot tự hành thông minh'],
      jobs: ['AI Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Robotics Specialist'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1080',
      icon: <Cpu />
    },
    ee: {
      title: 'Điện - Điện Tử',
      desc: 'Đào tạo kỹ sư thiết kế mạch, hệ thống điện thông minh và năng lượng tái tạo. Thực hành tại xưởng điện hiện đại bậc nhất khu vực.',
      projects: ['Hệ thống nhà thông minh (Smarthome)', 'Thiết kế trạm sạc xe điện', 'Robot dò đường'],
      jobs: ['Kỹ sư thiết kế mạch', 'Kỹ sư hệ thống điện', 'Kỹ sư bảo trì', 'Giám sát công trình điện'],
      image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBzdHVkZW50JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MTUwMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Zap />
    },
    auto: {
      title: 'Công Nghệ Ô Tô',
      desc: 'Cập nhật xu hướng ô tô điện và xe tự lái. Xưởng thực hành động cơ quy mô lớn với đầy đủ các dòng xe hiện đại để sinh viên "mổ xẻ".',
      projects: ['Cải tiến hiệu suất động cơ', 'Hệ thống chẩn đoán lỗi ô tô', 'Thiết kế xe đua tiết kiệm nhiên liệu'],
      jobs: ['Kỹ sư thiết kế ô tô', 'Kỹ sư vận hành dây chuyền lắp ráp', 'Cố vấn dịch vụ kỹ thuật', 'Chuyên gia đăng kiểm'],
      image: 'https://images.unsplash.com/photo-1609872209699-3e55dc7d90b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZW5naW5lZXJpbmclMjBzdHVkZW50JTIwY2FyJTIwZW5naW5lfGVufDF8fHx8MTc3MTUwMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Car />
    },
    automation: {
      title: 'Tự Động Hóa',
      desc: 'Làm chủ công nghệ điều khiển tự động, dây chuyền sản xuất công nghiệp và Robotics. Học tập trực tiếp trên các mô hình cánh tay robot công nghiệp.',
      projects: ['Hệ thống phân loại sản phẩm tự động', 'Dây chuyền đóng gói thông minh', 'Robot bốc xếp hàng hóa'],
      jobs: ['Kỹ sư lập trình PLC', 'Kỹ sư điều khiển tự động', 'Chuyên gia tích hợp hệ thống', 'Quản lý kỹ thuật nhà máy'],
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHJvYm90JTIwYXJtJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzE1MDE4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Settings />
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. Hero Section */}
      <div className="relative h-[700px] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1680264370818-659352fa16f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHJvYm90aWNzJTIwbGFifGVufDF8fHx8MTc3MTUwMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-6 py-2 border border-blue-400 text-blue-400 rounded-full font-bold text-sm mb-8 uppercase tracking-[0.2em] animate-fade-in">
            Đại học Công nghệ TP.HCM
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            CÔNG NGHỆ HÔM NAY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              THÀNH CÔNG NGÀY MAI
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            HUTECH - Cái nôi đào tạo nhân lực chất lượng cao hàng đầu Việt Nam. Nơi biến đam mê công nghệ thành sự nghiệp vững chắc.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <Rocket size={20} />
              Đăng Ký Xét Tuyển
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center gap-2">
              <Lightbulb size={20} />
              Khám Phá Ngành Học
            </button>
          </div>
        </div>
        
        {/* Animated Tech Elements */}
        <div className="absolute bottom-10 left-10 hidden md:block animate-bounce delay-700">
          <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-md rounded-2xl border border-blue-400/30 flex items-center justify-center text-blue-400">
            <Cpu size={32} />
          </div>
        </div>
        <div className="absolute top-40 right-10 hidden md:block animate-bounce delay-1000">
          <div className="w-16 h-16 bg-orange-600/20 backdrop-blur-md rounded-2xl border border-orange-400/30 flex items-center justify-center text-orange-400">
            <Zap size={32} />
          </div>
        </div>
      </div>

      {/* 2. Featured Majors */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase tracking-tight">Ngành Học Xu Hướng</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Đón đầu kỷ nguyên công nghệ số với các ngành học "hot" nhất hiện nay. Chương trình đào tạo chuẩn quốc tế, chú trọng thực hành.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2 sticky top-24">
                {Object.keys(majors).map((key) => {
                  const major = majors[key as keyof typeof majors];
                  const isActive = activeMajor === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveMajor(key)}
                      className={`w-full text-left px-5 py-4 rounded-xl font-bold transition-all flex items-center gap-4 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md transform scale-105' 
                          : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                      }`}
                    >
                      <div className={`${isActive ? 'text-orange-400' : 'text-gray-400'}`}>
                        {major.icon}
                      </div>
                      {major.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Display */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-80">
                  <img 
                    src={majors[activeMajor as keyof typeof majors].image} 
                    alt="Major Header" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-4xl font-bold mb-2 text-white">
                      {majors[activeMajor as keyof typeof majors].title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-orange-500 rounded text-xs font-bold uppercase">Hot Trend</span>
                      <span className="px-3 py-1 bg-blue-500 rounded text-xs font-bold uppercase">High Salary</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                  <p className="text-xl text-gray-700 mb-10 leading-relaxed font-light">
                    {majors[activeMajor as keyof typeof majors].desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                        <Cpu className="text-orange-500" /> Dự Án Thực Tế
                      </h4>
                      <ul className="space-y-3">
                        {majors[activeMajor as keyof typeof majors].projects.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                      <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2 text-lg">
                        <Briefcase className="text-blue-500" /> Cơ Hội Việc Làm
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {majors[activeMajor as keyof typeof majors].jobs.map((job, idx) => (
                          <span key={idx} className="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-bold shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Facilities Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-blue-900 mb-2">HỆ THỐNG THỰC HÀNH</h2>
              <p className="text-gray-500 text-lg">Đầu tư hàng trăm tỷ đồng cho hệ thống Lab, xưởng thực hành chuẩn quốc tế</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors">
              Xem tất cả hình ảnh <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080" 
                alt="Lab 1" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI & Robotics Lab</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Phòng thí nghiệm trí tuệ nhân tạo và Robot hiện đại bậc nhất với các thiết bị nhập khẩu từ Nhật Bản, Đức.
                </p>
              </div>
            </div>

            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg mt-0 md:-mt-8">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1080" 
                alt="Lab 2" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Software Center</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Trung tâm phát triển phần mềm mô phỏng môi trường làm việc thực tế tại các công ty công nghệ lớn (Google, Microsoft).
                </p>
              </div>
            </div>

            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080" 
                alt="Lab 3" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Settings size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Smart Factory</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Nhà máy thông minh thu nhỏ với dây chuyền sản xuất tự động hóa hoàn toàn, tích hợp IoT và Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Corporate Partners */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">MẠNG LƯỚI ĐỐI TÁC CHIẾN LƯỢC</h2>
          <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
            Hợp tác đào tạo và tuyển dụng với hơn 1000 doanh nghiệp hàng đầu trong và ngoài nước.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-80">
            {/* Logos placeholders */}
            {['Samsung', 'Intel', 'FPT Software', 'Bosch', 'Viettel', 'VinGroup'].map((name, i) => (
              <div key={i} className="h-24 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer backdrop-blur-sm border border-white/5 hover:scale-105">
                <span className="font-bold text-lg text-white/70">{name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
               <span className="text-5xl font-black text-orange-400">98%</span>
               <span className="text-sm font-medium uppercase tracking-wider text-blue-200">Sinh viên có việc làm ngay</span>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-700"></div>
            <div className="flex flex-col items-center md:items-start">
               <span className="text-5xl font-black text-orange-400">500+</span>
               <span className="text-sm font-medium uppercase tracking-wider text-blue-200">Doanh nghiệp ký kết hợp tác</span>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-700"></div>
            <div className="flex flex-col items-center md:items-start">
               <span className="text-5xl font-black text-orange-400">100%</span>
               <span className="text-sm font-medium uppercase tracking-wider text-blue-200">Được giới thiệu thực tập</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Exam Review & Consultation Form */}
      <div className="py-24 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full filter blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-blue-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">ĐĂNG KÝ NGAY</h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Nhận bộ đề thi thử THPT Quốc gia 2026 mới nhất và được chuyên gia tư vấn chọn ngành phù hợp với năng lực.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                      <Download size={16} />
                    </div>
                    <span className="font-medium">Bộ đề thi thử 5 môn (có đáp án)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                      <UserCheck size={16} />
                    </div>
                    <span className="font-medium">Tư vấn 1:1 cùng chuyên gia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                      <Building2 size={16} />
                    </div>
                    <span className="font-medium">Tham quan Campus thực tế ảo</span>
                  </li>
                </ul>
              </div>
              <div className="relative z-10 mt-10">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-400 mb-2">Hotline hỗ trợ 24/7</div>
                <div className="text-3xl font-black text-white">(028) 5445 7777</div>
              </div>
            </div>

            <div className="md:w-7/12 p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Thông Tin Đăng Ký</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Họ và tên</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Số điện thoại</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="0909 xxx xxx" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="example@gmail.com" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                   <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Điểm thi thử (ước tính)</label>
                    <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Ví dụ: 24.5" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Ngành quan tâm</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none text-gray-700">
                      <option>Công nghệ thông tin</option>
                      <option>Kỹ thuật phần mềm</option>
                      <option>Trí tuệ nhân tạo</option>
                      <option>Điện - Điện tử</option>
                      <option>Công nghệ ô tô</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 text-white font-black text-lg py-4 rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 mt-4">
                  NHẬN TƯ VẤN NGAY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center font-black text-xl shadow-lg">H</div>
                <span className="text-2xl font-black tracking-tight">HUTECH UNIVERSITY</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Trường Đại học Công nghệ TP.HCM (HUTECH) - Tiên phong trong giáo dục đại học, nơi khởi đầu những ước mơ công nghệ.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Youtube size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-wider text-orange-500">Thông Tin</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Giới thiệu chung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển sinh 2026</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đào tạo quốc tế</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Công tác sinh viên</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-wider text-orange-500">Liên Hệ</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-blue-500" />
                  <span>475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500" />
                  <span>(028) 5445 7777</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500" />
                  <span>tuyensinh@hutech.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-12 pt-8 text-center text-xs text-gray-600">
            © 2026 HUTECH University. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}

function UserCheck({ size, className }: { size?: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
    )
}