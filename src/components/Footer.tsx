import { GraduationCap, Mail, Phone, MapPin, Facebook, Youtube, Instagram, Twitter, ArrowRight, Heart, Sparkles, ExternalLink, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-green-700 text-slate-300 border-t border-blue-900 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]"></div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 text-white group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/50 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <GraduationCap className="text-white" size={26} />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight block">Tuyển Sinh 2026</span>
                <span className="text-xs text-slate-500">Định hướng tương lai</span>
              </div>
            </div>
            <p className="text-gray-200 text-base leading-relaxed mb-8 max-w-sm">
              Nền tảng ôn thi và tư vấn tuyển sinh số 1 Việt Nam. Đồng hành cùng <span className="text-black font-extrabold text-2xl">500,000+</span> học sinh THPT trên con đường chinh phục cánh cổng đại học mơ ước.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-500/30' },
                { Icon: Youtube, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-500/30' },
                { Icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600', shadow: 'hover:shadow-purple-500/30' },
                { Icon: Twitter, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-500/30' },
              ].map(({ Icon, color, shadow }, i) => (
                <a key={i} href="#" className={`w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center ${color} hover:text-white hover:border-transparent hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg ${shadow}`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 rounded-full border border-slate-800">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium text-yellow-400">Hoạt động 24/7</span>
            </div>
          </div>

          {/* Links Column 1 - Enhanced */}
          <div>
            <h3 className="font-bold text-blue mb-6 uppercase tracking-wider text-lg flex items-center gap-2">
              <Sparkles size={20} className="text-blue-400" /> Về Chúng Tôi
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {['Giới thiệu', 'Đội ngũ chuyên gia', 'Đối tác chiến lược', 'Tuyển dụng'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition-all flex items-center gap-2 group hover:translate-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"></span>
                    {item}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 - Enhanced */}
          <div>
            <h3 className="font-bold text-blue mb-6 uppercase tracking-wider text-lg flex items-center gap-2">
              <Zap size={20} className="text-yellow-400" /> Hỗ Trợ
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {['Trung tâm trợ giúp', 'Điều khoản sử dụng', 'Chính sách bảo mật', 'Báo cáo lỗi'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition-all flex items-center gap-2 group hover:translate-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"></span>
                    {item}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column - Enhanced */}
          <div>
            <h3 className="font-bold text-blue mb-6 uppercase tracking-wider text-lg flex items-center gap-2">
              <Mail size={20} className="text-purple-400" /> Đăng Ký Bản Tin
            </h3>
            <p className="text-xs text-gray-200 mb-4 leading-relaxed">
              Nhận thông báo mới nhất về lịch thi, điểm chuẩn và các bí kíp ôn thi độc quyền.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="w-full h-12 bg-slate-900 border border-slate-700 rounded-xl pl-4 pr-14 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg flex items-center justify-center transition-all hover:scale-105 shadow-md"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-gray-200 hover:text-slate-300 transition-colors cursor-pointer group">
                <Phone size={17} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span>1800 1234 (Miễn phí)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-200 hover:text-slate-300 transition-colors cursor-pointer group">
                <Mail size={17} className="text-purple-500 group-hover:scale-110 transition-transform" />
                <span>Support@tuyensinh2026.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            &copy; 2026 Tuyển Sinh 2026. All rights reserved.
          </p>
          <div className="flex items-center gap-1 group">
            Made with
            <Heart size={12} className="text-red-500 fill-red-500 group-hover:scale-125 group-hover:animate-pulse transition-transform" />
            in <span className="text-white text-lg font-semibold ml-1">Vietnam</span>
            <span className="ml-2 text-2xl  group-hover:animate-bounce" style={{ animationDuration: '1s' }}>🇻🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}