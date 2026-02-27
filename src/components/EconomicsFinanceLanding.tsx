import { useState, useEffect, useRef } from 'react';
import {
  TrendingUp, BarChart3, DollarSign, Briefcase, CheckCircle2, Award,
  ArrowRight, Heart, MapPin, Zap, Target, Rocket, Star, Building2, PieChart
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

export function EconomicsFinanceLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-green-50 font-sans selection:bg-red-200 selection:text-red-900">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-green-50 text-slate-900 overflow-hidden pt-20">
        {/* Floating decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-300/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-green-300/15 rounded-full blur-[120px]"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-200/60 to-orange-200/60 border border-red-400 text-red-700 text-xs font-bold mb-6 backdrop-blur">
                <Zap size={14} /> 🔥 Luôn cần – Ngành nghề thiết yếu
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-slate-900">
                Quản Lý Tài Chính<br />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Thông Minh</span><br />
                Kiến Tạo Tương Lai Phồn Thịnh!
              </h1>

              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-xl">
                Ngành học luôn luôn cần thiết, góp phần xây dựng nền kinh tế vững mạnh.<br />
                <span className="font-bold text-red-600">4.100+</span> vị trí tuyển dụng mỗi tháng.<br />
                Lương khởi điểm từ <span className="font-bold text-green-600">22–48 triệu đồng/tháng</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 flex items-center gap-2 group">
                  <Briefcase size={20} />
                  Xem cơ hội nghề nghiệp
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2 group">
                  <BarChart3 size={20} />
                  Xem lộ trình lương
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 mt-12 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Miễn phí 100%
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  4.9/5 từ 8K+ học sinh
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual Elements */}
            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-300/20 to-green-300/20 rounded-3xl blur-xl"></div>
                <div className="relative p-12 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl border-2 border-white/80">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: DollarSign, label: 'Tài chính', color: 'from-red-500 to-orange-500' },
                      { icon: BarChart3, label: 'Đầu tư', color: 'from-yellow-500 to-red-600' },
                      { icon: Building2, label: 'Ngân hàng', color: 'from-red-500 to-pink-600' },
                      { icon: PieChart, label: 'Kế toán', color: 'from-purple-500 to-blue-500' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transition-all hover:scale-110 flex flex-col items-center justify-center gap-2 cursor-pointer group`}>
                          <Icon size={28} className="text-white group-hover:scale-125 transition-transform" />
                          <span className="text-white text-xs font-bold text-center">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8 pt-8 border-t border-red-200/40">
                    <p className="text-center text-slate-600 text-sm font-semibold">Nơi ý tưởng tài chính trở thành hành động</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              💡 Tại sao chọn ngành <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">Kinh Tế & Tài Chính?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ngành nghề không bao giờ lỗi thời – Nền tảng của nền kinh tế hiện đại.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Luôn Luôn Cần Nguồn Nhân Lực',
                desc: 'Tất cả doanh nghiệp đều cần Kế toán, Tài chính hoặc chuyên gia Ngân hàng',
                color: 'from-red-500 to-blue-600 border-red-300'
              },
              {
                icon: Target,
                title: 'Đa Dạng Cơ Hội Ứng Dụng',
                desc: 'Chuyên ngành rộng, ứng dụng trong mọi lĩnh vực kinh doanh',
                color: 'from-orange-500 to-yellow-400 border-orange-300'
              },
              {
                icon: TrendingUp,
                title: 'Lộ Trình Tăng Trưởng Nhanh',
                desc: 'Tăng thu nhập qua các vị trí từ phân tích → quản lý quỹ → CFO',
                color: 'from-red-500 to-purple-600 border-purple-300'
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`group p-8 rounded-3xl bg-gradient-to-br ${card.color.replace('/30', '/60')} border-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4 backdrop-blur-md`}>
                    <div className={`w-16 h-16 ${idx === 0 ? 'bg-gradient-to-br from-red-500 to-red-600' : idx === 1 ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-green-500 to-green-600'} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 mb-3">{card.title}</h3>
                    <p className="text-slate-800 font-semibold">{card.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS */}
      <section className="py-16 bg-gradient-to-r from-red-100  to-green-100 border-y border-red-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, number: 4100, label: 'Vị trí/tháng', suffix: '+', color: 'from-red-500 to-red-600' },
              { icon: DollarSign, number: 22, label: 'Lương khởi (triệu)', suffix: '-48M', color: 'from-orange-500 to-orange-600' },
              { icon: TrendingUp, number: 85, label: 'Tăng cơ hội (%)', suffix: '', color: 'from-yellow-500 to-yellow-500' },
              { icon: Building2, number: 500, label: 'Doanh nghiệp', suffix: '+', color: 'from-teal-900 to-teal-600' },
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

      {/* SECTION 4: ROADMAP */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Hành trình 4 năm từ<br />
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">Zero đến CFO</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: 'Năm 1',
                title: 'Kiến Thức Cơ Bản',
                items: ['Kế toán tài chính cơ bản', 'Excel & MISA', 'Phân tích báo cáo tài chính'],
                color: 'from-red-500 to-red-500',
              },
              {
                year: 'Năm 2',
                title: 'Chuyên Sâu Kế Toán',
                items: ['Quản lý thu chi', 'SAP & QuickBooks', 'Lập kế hoạch ngân sách'],
                color: 'from-orange-500 to-orange-500',
              },
              {
                year: 'Năm 3',
                title: 'Phân Tích Chuyên Nghiệp',
                items: ['Phân tích tài chính nâng cao', 'Phân tích thị trường vốn', 'Danh mục đầu tư'],
                color: 'from-purple-500 to-purple-500',
              },
              {
                year: 'Năm 4',
                title: 'Quản Lý Chiến Lược',
                items: ['Lập dự toán chi tiêu', 'Tối ưu vốn', 'Quản lý tài chính toàn diện'],
                color: 'from-yellow-500 to-teal-600',
              }
            ].map((item, idx) => {
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`group p-6 rounded-3xl bg-gradient-to-br ${item.color.replace('to-', 'via-').split(' ').slice(0, -1).join(' ')} to-white/30 border-3 border-white/60 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 backdrop-blur-sm`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <BarChart3 size={24} />
                    </div>
                    <div className="text-xs font-black bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-1 uppercase tracking-wider">{item.year}</div>
                    <h3 className="text-2xl font-black text-slate-950 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <div className="w-2 h-2 rounded-full bg-red-600"></div>
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

      {/* SECTION 5: SALARY */}
      <section className="py-24 bg-gradient-to-r from-red-100/30 via-orange-100/30 to-green-100/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Mức lương trong ngành –<br />
              <span className="bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent">Thu nhập đáng mơ ước</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Nhân viên kế toán', exp: '0–1 năm', salary: 22, max: 40 },
              { role: 'Chuyên viên kiểm toán', exp: '2–4 năm', salary: 30, max: 60 },
              { role: 'Nhân viên ngân hàng (Credit)', exp: '2–4 năm', salary: 25, max: 50 },
              { role: 'Quản lý tài chính (CFO)', exp: '5+ năm', salary: 50, max: 150 },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-red-50 border-3 border-red-300 hover:border-green-400 transition-all hover:shadow-2xl hover:from-red-50 hover:to-green-50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-black text-slate-950 text-lg">{item.role}</h4>
                      <p className="text-sm font-semibold text-slate-700">{item.exp}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
                        {item.salary}-{item.max}M₫
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-300 rounded-full h-4 shadow-md">
                    <div
                      className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-4 rounded-full transition-all shadow-lg drop-shadow-md"
                      style={{ width: `${(item.max / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TRAINING */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Nơi đào tạo tốt nhất<br />
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">cho tài chính hàng đầu</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: '🏆 Trường Đại Học',
                items: ['ĐH Kinh tế Quốc dân (NEU)', 'Học viện Ngân hàng (BA)', 'ĐH Ngoại thương (FTU)'],
                color: 'from-red-500/20 border-red-300'
              },
              {
                badge: '🎓 Chứng Chỉ Quốc Tế',
                items: ['CFA - Chartered Financial Analyst', 'ACCA - Association of Chartered Certified', 'CPA - Certified Public Accountant'],
                color: 'from-orange-500/20 border-orange-300'
              },
              {
                badge: '💼 Chuyên Ngành',
                items: ['FRM - Financial Risk Manager', 'CFP - Certified Financial Planner', 'CIA - Certified Internal Auditor'],
                color: 'from-green-500/20 border-green-300'
              }
            ].map((group, idx) => {
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`p-8 rounded-3xl bg-gradient-to-br ${group.color.replace('/20', '/50')} border-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 backdrop-blur-md relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-sm font-black text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-wide">
                      {group.badge}
                    </div>
                    <ul className="space-y-3 relative z-10">
                      {group.items.map((school, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-900 font-semibold">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md">{i + 1}</div>
                          <span className="text-sm font-semibold my-0.5">{school}</span>
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
      <section className="py-24 bg-gradient-to-r from-red-600 via-orange-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Hành Trình Thành Công<br />
              <span className="text-yellow-200">Tài Chính Của Tôi!</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Từ một sinh viên tại ĐH Kinh tế Quốc dân, giờ đây tôi đã là chuyên viên phân tích tài chính tại một tập đoàn đầu tư nước ngoài, với thu nhập 85 triệu/tháng.',
                author: 'Nguyễn Hoàng Vân',
                role: 'Financial Analyst @ Investment Group',
                age: '28 tuổi'
              },
              {
                quote: 'Khóa học CFA quốc tế đem lại cho tôi cơ hội trở thành Quản lý Tài chính tại Ngân hàng Quốc tế HSBC với mức lương 50 triệu/tháng.',
                author: 'Lê Minh Huy',
                role: 'Finance Manager @ HSBC',
                age: '27 tuổi'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border-2 border-white/30 hover:border-white/60 transition-all hover:shadow-2xl hover:shadow-white/20 shadow-xl relative group">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300 rounded-t-3xl"></div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <p className="text-black mb-6 leading-relaxed italic font-medium">"{item.quote}"</p>
                  <div className="border-t border-white/30 pt-4">
                    <p className="font-bold text-yellow-200 text-lg">{item.author}</p>
                    <p className="text-sm text-teal-100 font-semibold">{item.role}</p>
                    <p className="text-xs mt-1">{item.age}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-red-600 via-orange-600 to-green-600 text-white relative overflow-hidden border-t-4 border-red-400">
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
              Sẵn Sàng Làm Chủ<br />
              <span className="text-yellow-200">Tương Lai Tài Chính?</span>
            </h2>

            <p className="text-xl text-yellow-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tham gia ngay hôm nay để nhận lộ trình học tập và cơ hội lớn trong ngành Tài chính – Kinh tế!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-white text-red-600 hover:bg-yellow-50 font-bold text-lg rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-white/50 flex items-center justify-center gap-2 group">
                <Rocket size={24} />
                Xem Lộ Trình Học Tập
              </button>
              <button className="px-10 py-5 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                <TrendingUp size={24} />
                Nhận Tư Vấn Miễn Phí
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30">
                <CheckCircle2 size={16} className="text-yellow-200" />
                ✨ Miễn phí 100%
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30">
                <Star size={16} className="text-yellow-200 fill-yellow-200" />
                ⭐ 4.9/5 từ 8.000+ học sinh
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30">
                <MapPin size={16} className="text-yellow-200" />
                🌍 Cập nhật 2025
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
