import { useState, useEffect, useRef } from 'react';
import {
  Ship, TrendingUp, Package, Globe, BookOpen, Briefcase, DollarSign,
  ArrowRight, Sparkles, CheckCircle2, MapPin, Star, Target, Rocket, Heart, Anchor, Truck, Plane, BarChart3
} from 'lucide-react';

// Custom Hooks
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) { setIsInView(true); return; }
    setIsInView(false);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); }
    }, { threshold: 0.1, ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || (isInView && !hasAnimated.current)) {
      hasAnimated.current = true;
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, startOnView]);

  return { count, ref };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export function LogisticsSupplyChainLanding() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-orange-500 selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden pt-20">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px]"></div>

        {/* Floating elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-teal-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-white text-orange-300 text-xs font-bold mb-6">
                <TrendingUp size={14} className="animate-bounce-soft" /> Ngành Ổn Định & Triển Vọng
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-white">
                Khám Phá Logistics<br />
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">& Supply Chain</span><br />
                Kết Nối Thế Giới!
              </h1>

              <p className="text-xl text-white mb-8 leading-relaxed max-w-xl">
                Lựa chọn để kết nối hàng hóa toàn cầu.<br />
                <span className="font-bold text-orange-400">2.900+</span> vị trí tuyển dụng mỗi tháng.<br />
                Lương khởi điểm từ <span className="font-bold text-cyan-400">20–45 triệu đồng</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center gap-2 group">
                  <Rocket size={20} />
                  Bắt đầu sự nghiệp Logistics
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-cyan-400 hover:bg-cyan-400/10 font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2 group">
                  <BarChart3 size={20} />
                  Xem lộ trình lương
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 mt-12 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Miễn phí 100%
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  4.9/5 từ 7K+ học sinh
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Animated Container Graphic */}
            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
                <div className="relative p-8 rounded-3xl bg-slate-800/80 shadow-2xl border-2 border-orange-500/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Hành Trình Hàng Hóa</h3>
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Route visualization */}
                  <div className="space-y-6">
                    {[
                      { icon: Anchor, location: 'Cảng Sài Gòn', status: 'Khởi hành', time: '2 ngày', color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
                      { icon: Ship, location: 'Tàu Biển', status: 'Vận chuyển', time: '15 ngày', color: 'bg-gradient-to-r from-cyan-400 to-cyan-500' },
                      { icon: Truck, location: 'Cảng Đích', status: 'Nhập cảng', time: '3 ngày', color: 'bg-gradient-to-r from-blue-500 to-blue-500' },
                      { icon: Package, location: 'Kho bãi', status: 'Kiểm hàng', time: '1 ngày', color: 'bg-gradient-to-r from-pink-500 to-pink-500' },
                    ].map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <div key={i} className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                            <Icon size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-white text-sm">{step.location}</p>
                            <p className="text-xs text-cyan-300 font-semibold">{step.status}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-orange-400 text-sm">{step.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-850 to-slate-800 border-y border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, number: 2900, label: 'Vị trí/tháng', suffix: '+', color: 'from-orange-500 to-red-600' },
              { icon: DollarSign, number: 20, label: 'Lương khởi (triệu)', suffix: '-45M', color: 'from-cyan-400 to-cyan-500' },
              { icon: TrendingUp, number: 32, label: 'Tăng trưởng/năm', suffix: '%', color: 'from-blue-400 to-blue-500' },
              { icon: Globe, number: 120, label: 'Quốc gia hợp tác', suffix: '+', color: 'from-yellow-400 to-orange-500' },
            ].map((stat, idx) => {
              const { count, ref } = useCounter(stat.number, 2000);
              const Icon = stat.icon;

              return (
                <AnimatedSection key={idx} delay={idx * 50}>
                  <div ref={ref} className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/20`}>
                    <Icon className="text-white mb-3" size={32} />
                    <div className="text-3xl font-black text-white">
                      {count}{stat.suffix}
                    </div>
                    <div className="text-sm text-white/80 mt-2">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: TẠI SAO CHỌN LOGISTICS & SUPPLY CHAIN */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Tại Sao Chọn <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Logistics & Supply Chain?</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Ngành này là trái tim của nền kinh tế – nơi dòng chảy hàng hóa không bao giờ ngừng
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: 'Vận Tải Quốc Tế',
                desc: 'Chuỗi cung ứng kết nối xuyên quốc gia',
                items: ['Quản lý vận tải đa phương thức', 'Air/Sea freight optimization', 'Logistics thương mại toàn cầu']
              },
              {
                icon: Package,
                title: 'Quản Lý Kho Bãi',
                desc: 'Tối ưu hóa sắp xếp & kiểm soát hàng',
                items: ['WMS, RFID & barcode systems', 'Automation & AI trong kho', 'Kiểm soát tồn kho chính xác']
              },
              {
                icon: Globe,
                title: 'Xuất Nhập Khẩu',
                desc: 'Thương mại quốc tế chiến lược',
                items: ['Chính sách thương mại toàn cầu', 'Thủ tục hải quan & giấy tờ', 'Hợp đồng thương mại quốc tế']
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              const colors = ['from-orange-500/30 to-orange-600/30 border-yellow-400', 'from-cyan-500/30 to-cyan-600/30 border-yellow-400', 'from-emerald-500/30 to-emerald-600/30 border-yellow-400'];
              const iconColors = ['from-orange-500 to-yellow-600', 'from-cyan-400 to-cyan-500', 'from-orange-400 to-red-500'];
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`group p-8 rounded-3xl bg-gradient-to-br ${colors[idx]} border-2 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${iconColors[idx]} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-white mb-6">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white">
                          <CheckCircle2 size={16} className="text-lime-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: LỘ TRÌNH HỌC TẬP */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Từ Nền Tảng –<br />
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">Đến Đỉnh Cao Quản Lý Chuỗi Cung Ứng</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: 'Năm 1', title: 'Nền Tảng', icon: BookOpen, color: 'from-orange-500 to-orange-600', items: ['Logistics cơ bản', '4PL, 3PL, vận tải', 'Excel & WMS'] },
              { year: 'Năm 2', title: 'Chuyên Sâu', icon: Package, color: 'from-cyan-400 to-cyan-500', items: ['Kho bãi & vận hành', 'Xuất nhập khẩu', 'SAP & Tableau'] },
              { year: 'Năm 3', title: 'Công Nghệ', icon: Truck, color: 'from-orange-400 to-yellow-500', items: ['AI & Big Data', 'IoT & Blockchain', 'Tối ưu chi phí'] },
              { year: 'Năm 4', title: 'Sẵn Sàng', icon: Rocket, color: 'from-red-700 to-red-700', items: ['Toàn cầu hóa', 'Dự báo thị trường', 'Portfolio ready'] }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group p-6 rounded-3xl bg-slate-800/80 border-2 border-slate-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-xs font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-1 uppercase">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i, idx) => (
                        <li key={idx} className="flex items-center text-white gap-2 text-sm text-lime-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                          <CheckCircle2 size={16} className="text-lime-400 flex-shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: MỨC LƯƠNG */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Đầu Tư Hôm Nay –<br />
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">Lợi Nhuận Tương Lai</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Nhân Viên Vận Hành', exp: '0–1 năm', salary: 20, max: 30 },
              { role: 'Chuyên Viên Xuất Nhập Khẩu', exp: '2–3 năm', salary: 25, max: 35 },
              { role: 'Quản Lý Kho Bãi', exp: '3–5 năm', salary: 35, max: 45 },
              { role: 'Supply Chain Executive', exp: '5+ năm', salary: 45, max: 70 },
              { role: 'Logistics Manager', exp: '7+ năm', salary: 70, max: 120 },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.role}</h4>
                      <p className="text-sm text-orange-300 font-semibold">{item.exp}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black bg-gradient-to-r text-white bg-clip-text text-transparent">
                        {item.salary}-{item.max}M₫
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-orange-500 via-cyan-400 to-lime-400 h-3 rounded-full transition-all shadow-lg shadow-orange-500/50"
                      style={{ width: `${(item.max / 120) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TRƯỜNG ĐÀO TẠO */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Lựa Chọn Đúng Trường –<br />
              <span className="bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">Tương Lai Chắc Chắn</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: '🏆 Top School',
                title: 'Nhóm Top Đầu',
                schools: ['ĐH Kinh Tế Quốc Dân (NEU)', 'ĐH Ngoại Thương (FTU)', 'ĐH Quốc Tế (IU)']
              },
              {
                badge: '🌍 Chuyên Ngành',
                title: 'Trường Chuyên Logistics',
                schools: ['ĐH Giao Thông Vận Tải', 'ĐH Hàng Hải Việt Nam', 'ĐH Tài Chính Marketing']
              },
              {
                badge: '🌐 Quốc Tế',
                title: 'Chứng Chỉ Quốc Tế',
                schools: ['APICS CPIM/CSCP', 'FIATA Diploma', 'Coursera Supply Chain']
              }
            ].map((group, idx) => {
              const badgeColors = ['from-orange-500 to-orange-600 border-orange-500', 'from-cyan-500 to-cyan-600 border-cyan-500', 'from-red-500 to-red-600 border-emerald-500'];
              const iconColors = ['text-orange-400', 'text-cyan-400', 'text-emerald-400'];
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`p-8 rounded-3xl bg-slate-800/80 border-2 border-slate-700 hover:border-orange-500/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${badgeColors[idx]} border text-xs font-bold mb-4`}>
                      {group.badge}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
                    <ul className="space-y-3">
                      {group.schools.map((school, i) => (
                        <li key={i} className="flex items-center gap-3 text-white">
                          <MapPin size={16} className={`${iconColors[idx]} flex-shrink-0`} />
                          {school}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 bg-teal-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-yellow-300">
              Hành Trình Thành Công –<br />
              <span className="text-orange-300">Bạn Có Thể Là Người Tiếp Theo!</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Nhờ ngành Logistics tại NEU mà tôi chuyển đến làm Distribution Manager tại Úc. Mức lương hàng năm là 90.000 AUD.',
                author: 'Nguyễn Đức Minh',
                role: 'Distribution Manager @ Sydney',
                age: '28 tuổi'
              },
              {
                quote: 'Sau khi hoàn thành CPIM quốc tế, tôi nhận lời mời từ công ty vận tải 360 tại Hà Lan!',
                author: 'Lê Quốc Hùng',
                role: 'Supply Chain Specialist',
                age: '26 tuổi'
              },
              {
                quote: 'Tôi là Logistics Planner tại DHL Express. Sau 4 năm chăm chỉ, thu nhập tôi đạt 50 triệu/tháng.',
                author: 'Nguyễn Văn Hùng',
                role: 'Logistics Planner @ DHL',
                age: '27 tuổi'
              },
              {
                quote: 'Khoá học Chuỗi cung ứng thay đổi cuộc đời tôi. Giờ quản lý hệ thống lớn nhất tại Shopee!',
                author: 'Lê Minh Trí',
                role: 'E-commerce Manager @ Shopee',
                age: '25 tuổi'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-slate-800 border-3 border-yellow-400 hover:border-yellow-300 transition-all hover:shadow-2xl hover:shadow-yellow-400/60 shadow-xl shadow-yellow-400/30 relative group">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-orange-400 rounded-t-3xl"></div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white mb-6 leading-relaxed italic font-medium">"{item.quote}"</p>
                  <div className="border-t border-yellow-400/50 pt-4">
                    <p className="font-bold text-yellow-300 text-lg">{item.author}</p>
                    <p className="text-sm text-white font-semibold">{item.role}</p>
                    <p className="text-xs text-white mt-1">{item.age}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Các Câu Hỏi <span className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text ">Thường Gặp</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'Logistics có khác Sales không?',
                a: 'Có sự khác nhau! Logistics tập trung vào quản lý dòng hàng hóa, còn Sales là bán hàng. Logistics ổn định, cần sự tỉ mỉ.'
              },
              {
                q: 'Cần tiếng Anh không?',
                a: 'Rất cần! Bạn sẽ làm việc với đối tác quốc tế. Tiếng Anh là yêu cầu cơ bản để thành công.'
              },
              {
                q: 'Các công cụ nào quan trọng?',
                a: 'WMS, SAP, Tableau, Excel nâng cao, và các giải pháp logistics như Oracle SCM. IoT & Blockchain là tương lai.'
              },
              {
                q: 'Logistics có tương lai không?',
                a: 'Tuyệt vời! Với e-commerce bùng nổ và toàn cầu hóa, nhu cầu logistics không bao giờ giảm. Tương lai đầy hứa hẹn!'
              }
            ].map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-slate-800/80 border-2 border-slate-700 hover:border-cyan-500/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:shadow-cyan-500/20">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-lg text-orange-400">❓</span>
                    {faq.q}
                  </h4>
                  <p className="text-white flex items-start gap-2">
                    <span className="text-lg text-lime-400 mt-0.5">✅</span>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900 text-white relative overflow-hidden border-t border-orange-500/30">
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Bắt Đầu Sự Nghiệp<br />
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">Logistics Của Bạn?</span>
            </h2>

            <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              Logistics & Supply Chain là cơ hội để kết nối thế giới.<br />
              <span className="font-bold text-white">Hãy bắt đầu hành trình ngay bây giờ!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-gradient-to-r border-2 border-white from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-bold text-white rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2 group text-lg">
                <Target size={24} />
                Xem Lộ Trình Học
              </button>
              <button className="px-10 py-5 border-2 border-white text-cyan-400 hover:bg-cyan-400/10 font-bold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group text-lg">
                <Heart size={24} />
                Tham Gia Ngay
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <CheckCircle2 size={16} className="text-lime-400" />
                ✨ Miễn phí 100%
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                ⭐ 4.9/5 từ 7.000+ học sinh
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <MapPin size={16} className="text-cyan-400" />
                🌍 Cập nhật 2025
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}