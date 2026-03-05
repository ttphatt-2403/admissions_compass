import { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Target, 
  Globe, 
  Award,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Zap,
  Megaphone,
  FileText,
  Video,
  Briefcase,
  Building2,
  GraduationCap,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  Clock,
  Shield,
  Star,
  TrendingDown,
  ChevronRight,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as ReBarChart, Bar } from 'recharts';

export function B2BLanding() {
  const [formData, setFormData] = useState({
    organization: '',
    representative: '',
    email: '',
    phone: '',
    website: '',
    cooperationType: '',
    message: '',
    agreePolicy: false
  });

  // Data for charts
  const userDemographics = [
    { name: 'Học sinh lớp 12', value: 70, color: '#1E5EFF' },
    { name: 'Học sinh lớp 11', value: 20, color: '#0F2B5B' },
    { name: 'Phụ huynh & Khác', value: 10, color: '#FF6B35' }
  ];

  const trafficGrowth = [
    { month: 'T1', users: 35000 },
    { month: 'T2', users: 42000 },
    { month: 'T3', users: 48000 },
    { month: 'T4', users: 55000 },
    { month: 'T5', users: 62000 },
    { month: 'T6', users: 70000 },
    { month: 'T7', users: 80000 },
    { month: 'T8', users: 95000 },
    { month: 'T9', users: 110000 },
    { month: 'T10', users: 125000 },
    { month: 'T11', users: 142000 },
    { month: 'T12', users: 160000 }
  ];

  const regionDistribution = [
    { region: 'Miền Bắc', value: 45 },
    { region: 'Miền Trung', value: 20 },
    { region: 'Miền Nam', value: 35 }
  ];

  const cooperationTypes = [
    { id: 'banner', name: 'Quảng cáo Banner', icon: <Megaphone size={32} />, color: 'from-blue-500 to-blue-600' },
    { id: 'pr', name: 'Bài viết PR', icon: <FileText size={32} />, color: 'from-purple-500 to-purple-600' },
    { id: 'landing', name: 'Landing Page riêng', icon: <Globe size={32} />, color: 'from-red-500 to-red-600' },
    { id: 'webinar', name: 'Webinar/Livestream', icon: <Video size={32} />, color: 'from-orange-500 to-orange-600' },
    { id: 'email', name: 'Email Marketing', icon: <Mail size={32} />, color: 'from-yellow-500 to-yellow-500' }
  ];

  const partners = [
    { name: 'ĐH Bách Khoa HN', logo: 'B', color: 'bg-red-600' },
    { name: 'ĐH Kinh tế Quốc dân', logo: 'N', color: 'bg-blue-700' },
    { name: 'ĐH FPT', logo: 'F', color: 'bg-orange-500' },
    { name: 'RMIT Vietnam', logo: 'R', color: 'bg-red-600' },
    { name: 'ĐH CNTT', logo: 'U', color: 'bg-cyan-600' },
    { name: 'ĐH Ngoại thương', logo: 'F', color: 'bg-red-800' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ trong vòng 24h.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(30, 94, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(30, 94, 255, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="relative bg-white overflow-hidden pt-20 pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                <Star size={16} fill="currentColor" />
                Nền tảng EdTech hàng đầu Việt Nam
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Kết nối trực tiếp với{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                  500.000+ học sinh
                </span>{' '}
                mỗi năm
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Nền tảng ôn thi THPT với hệ thống lộ trình học tập bài bản, thu hút học sinh lớp 12 trên toàn quốc.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <span className="text-slate-700 font-bold">100.000+ tài khoản đăng ký</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <span className="text-slate-700 font-bold">70% là học sinh lớp 12</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <span className="text-slate-700 font-bold">Tăng trưởng 30% mỗi năm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <span className="text-slate-700 font-bold">Thời gian onsite TB: 8 phút</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 group"
                >
                  Đề xuất hợp tác
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2">
                  <FileText size={20} />
                  Tải hồ sơ năng lực
                </button>
              </div>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Tăng trưởng người dùng</h3>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <TrendingUp size={16} />
                    <span>+30%</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={trafficGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#1E5EFF" 
                      strokeWidth={3}
                      dot={{ fill: '#1E5EFF', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">160K</div>
                    <div className="text-sm text-slate-500">Người dùng/tháng</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">8.2min</div>
                    <div className="text-sm text-slate-500">Thời gian onsite</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.5</div>
                    <div className="text-sm text-slate-500">Trang/phiên</div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 shadow-xl text-white max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500K+</div>
                    <div className="text-sm opacity-90">Lượt truy cập/năm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VỀ NỀN TẢNG */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Giới thiệu</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3">Về nền tảng của chúng tôi</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sứ mệnh</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Đồng hành cùng học sinh Việt Nam trên con đường chinh phục ước mơ đại học thông qua nền tảng công nghệ giáo dục tiên tiến.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Tầm nhìn</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Trở thành nền tảng hỗ trợ tuyển sinh và định hướng nghề nghiệp hàng đầu tại Việt Nam, kết nối học sinh và các trường đại học.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Định vị</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nền tảng EdTech toàn diện với hệ sinh thái tài liệu, công cụ tính điểm, lộ trình học tập và thông tin tuyển sinh cập nhật 24/7.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>
              
              <div className="space-y-8">
                {[
                  { year: '2020', title: 'Ra mắt nền tảng', users: '5K users' },
                  { year: '2021', title: 'Mở rộng tính năng', users: '25K users' },
                  { year: '2022', title: 'Hợp tác 10+ trường ĐH', users: '80K users' },
                  { year: '2023', title: 'Ứng dụng Mobile', users: '200K users' },
                  { year: '2024', title: 'AI Learning Path', users: '350K users' },
                  { year: '2025', title: 'Mở rộng toàn quốc', users: '500K+ users' }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                      {item.year}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 shadow-md border border-slate-200">
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.users}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHÂN DUNG NGƯỜI DÙNG */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Đối tượng người dùng</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3">Chân dung người dùng</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: User Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0">
                    12
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Học sinh lớp 12 (70%)</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-blue-600" />
                        Đang chuẩn bị thi THPT Quốc gia
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-blue-600" />
                        Quan tâm tuyển sinh đại học
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-blue-600" />
                        Tìm kiếm lộ trình ôn tập hiệu quả
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0">
                    11
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Học sinh lớp 11 (20%)</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-600" />
                        Định hướng ngành nghề sớm
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-600" />
                        Tìm hiểu thông tin các trường đại học
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phụ huynh & Khác (10%)</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-orange-600" />
                        Quan tâm con đường học vấn của con
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-orange-600" />
                        Tìm kiếm thông tin tuyển sinh đáng tin cậy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Charts */}
            <div className="space-y-8">
              {/* Pie Chart */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Phân bố đối tượng</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userDemographics}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {userDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {userDemographics.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-slate-600">{item.name}</span>
                      </div>
                      <span className="font-bold text-slate-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Distribution */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Phân bố địa lý</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <ReBarChart data={regionDistribution}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" stroke="#64748b" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Bar dataKey="value" fill="#1E5EFF" radius={[8, 8, 0, 0]} />
                  </ReBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GIÁ TRỊ DÀNH CHO ĐỐI TÁC */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">Lợi ích hợp tác</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-3">Giá trị dành cho đối tác</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Truyền thông chính xác & có định hướng</h3>
              <p className="text-slate-300 leading-relaxed">
                Dữ liệu người dùng phong phú giúp cá nhân hóa chiến dịch truyền thông theo vùng miền, khối thi, ngành học quan tâm.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Landing tuyển sinh riêng biệt</h3>
              <p className="text-slate-300 leading-relaxed">
                Xây dựng trang landing chuyên nghiệp, tích hợp form đăng ký, chatbot tư vấn, giúp tăng conversion rate đến 40%.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thu thập lead có chọn lọc</h3>
              <p className="text-slate-300 leading-relaxed">
                Hệ thống thu thập thông tin người dùng quan tâm (với sự đồng ý), tuân thủ chính sách bảo mật, giúp tối ưu tỷ lệ chuyển đổi.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Đo lường hiệu quả minh bạch</h3>
              <p className="text-slate-300 leading-relaxed">
                Báo cáo chi tiết về lượt xem, tương tác, lead thu được, ROI rõ ràng giúp đánh giá hiệu quả chiến dịch.
              </p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-black mb-3">Tối ưu chi phí tuyển sinh – Tiếp cận đúng đối tượng</h3>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                Chi phí quảng cáo hiệu quả hơn 3-5 lần so với các kênh truyền thống nhờ targeting chính xác
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HÌNH THỨC HỢP TÁC */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Dịch vụ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3">Hình thức hợp tác</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cooperationTypes.map((type, idx) => (
              <div 
                key={type.id}
                className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-400 transition-all hover:shadow-xl cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {type.id === 'banner' && 'Hiển thị banner quảng cáo nổi bật trên trang chủ và các trang chuyên mục, tiếp cận hàng nghìn lượt xem mỗi ngày.'}
                  {type.id === 'pr' && 'Bài viết PR chuyên sâu về trường, ngành học, cơ hội học bổng, được biên tập chuyên nghiệp và SEO tối ưu.'}
                  {type.id === 'landing' && 'Xây dựng landing page riêng cho trường với thiết kế chuyên nghiệp, tích hợp form đăng ký và chatbot tư vấn.'}
                  {type.id === 'webinar' && 'Tổ chức webinar/livestream tư vấn tuyển sinh trực tiếp với học sinh, phụ huynh quan tâm.'}
                  {type.id === 'email' && 'Gửi email marketing đến người dùng đã đăng ký nhận thông tin, phân khúc theo khối thi và vùng miền.'}
                </p>
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Tìm hiểu thêm
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}

            {/* Custom Package Card */}
            <div className="group bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 border-2 border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer text-white md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <Briefcase size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Gói hợp tác tùy chỉnh</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Kết hợp nhiều hình thức truyền thông, thiết kế gói riêng phù hợp với ngân sách và mục tiêu của đối tác. Tư vấn 1-1 từ đội ngũ chuyên gia.
                  </p>
                </div>
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  Liên hệ tư vấn
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CASE STUDY / SOCIAL PROOF */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Khách hàng tin dùng</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3">Đối tác đồng hành</h2>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {partners.map((partner, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className={`w-16 h-16 ${partner.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                  {partner.logo}
                </div>
                <span className="text-sm font-semibold text-slate-700 text-center">{partner.name}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border-2 border-blue-200">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1758599543129-5269a8f29e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwbW9kZXJufGVufDF8fHx8MTc3MjMzNjYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Partnership"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <blockquote className="text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed mb-6">
                  "Sau chiến dịch hợp tác với nền tảng, chúng tôi đã nhận được hơn 3.000 lượt đăng ký quan tâm và 500 hồ sơ xét tuyển chất lượng. Chi phí mỗi lead chỉ bằng 1/3 so với quảng cáo Facebook."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    F
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">ThS. Nguyễn Văn A</div>
                    <div className="text-slate-600">Trưởng phòng Tuyển sinh - Đại học FPT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200">
              <div className="text-5xl font-black text-blue-600 mb-2">15+</div>
              <div className="text-slate-600 font-semibold">Đối tác trường ĐH</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200">
              <div className="text-5xl font-black text-indigo-600 mb-2">50K+</div>
              <div className="text-slate-600 font-semibold">Lead chất lượng/năm</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200">
              <div className="text-5xl font-black text-purple-600 mb-2">95%</div>
              <div className="text-slate-600 font-semibold">Tỷ lệ hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: QUY TRÌNH HỢP TÁC */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Đơn giản & Nhanh chóng</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3">Quy trình hợp tác</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Liên hệ & Đề xuất',
                  description: 'Gửi thông tin qua form hoặc email. Chúng tôi phản hồi trong 24h.',
                  icon: <MessageSquare size={28} />,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  step: '02',
                  title: 'Trao đổi Phương án',
                  description: 'Tư vấn chi tiết về gói hợp tác, ngân sách và timeline phù hợp.',
                  icon: <Briefcase size={28} />,
                  color: 'from-red-500 to-red-600'
                },
                {
                  step: '03',
                  title: 'Ký kết Hợp tác',
                  description: 'Hoàn thiện hợp đồng, thỏa thuận điều khoản rõ ràng, minh bạch.',
                  icon: <FileText size={28} />,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  step: '04',
                  title: 'Triển khai & Đo lường',
                  description: 'Thực hiện chiến dịch, theo dõi KPI và báo cáo định kỳ.',
                  icon: <BarChart3 size={28} />,
                  color: 'from-orange-500 to-orange-600'
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all hover:shadow-xl text-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-100 rounded-full border-2 border-green-300">
              <Clock className="text-green-700" size={24} />
              <span className="text-green-900 font-bold">Thời gian triển khai: Chỉ từ 3-5 ngày làm việc</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FORM LIÊN HỆ */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info */}
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Liên hệ ngay</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3 mb-6">
                Sẵn sàng hợp tác cùng chúng tôi?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Điền thông tin bên dưới, đội ngũ của chúng tôi sẽ liên hệ tư vấn chi tiết trong vòng 24 giờ.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email hợp tác</h3>
                    <a href="mailto:partnership@admissioninfo.vn" className="text-blue-600 hover:underline">
                      partnership@admissioninfo.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Hotline</h3>
                    <a href="tel:0901234567" className="text-blue-600 hover:underline">
                      090 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Văn phòng</h3>
                    <p className="text-slate-600">
                      Tầng 5, Tòa nhà Innovation<br />
                      Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                    <Linkedin className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      linkedin.com/company/admissioninfo
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Tên tổ chức <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="VD: Đại học Bách Khoa Hà Nội"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Người đại diện <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.representative}
                    onChange={(e) => setFormData({ ...formData, representative: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Họ và tên"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="090 xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Nhu cầu hợp tác <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.cooperationType}
                    onChange={(e) => setFormData({ ...formData, cooperationType: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Chọn hình thức hợp tác</option>
                    <option value="banner">Banner quảng cáo</option>
                    <option value="pr">Bài viết PR</option>
                    <option value="landing">Landing page riêng</option>
                    <option value="webinar">Webinar/Livestream</option>
                    <option value="email">Email Marketing</option>
                    <option value="custom">Gói tùy chỉnh</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Nội dung thêm</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Mô tả chi tiết nhu cầu hợp tác của bạn..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    checked={formData.agreePolicy}
                    onChange={(e) => setFormData({ ...formData, agreePolicy: e.target.checked })}
                    className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="agree" className="text-sm text-slate-600">
                    Tôi đồng ý với{' '}
                    <a href="#" className="text-blue-600 hover:underline">chính sách bảo mật</a>
                    {' '}và{' '}
                    <a href="#" className="text-blue-600 hover:underline">điều khoản sử dụng</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <Send size={20} />
                  Gửi đề xuất hợp tác
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
