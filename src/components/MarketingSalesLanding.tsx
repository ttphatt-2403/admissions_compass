import { useState, useEffect, useRef } from 'react';
import {
  BarChart3, TrendingUp, Users, Zap, BookOpen, Briefcase, DollarSign,
  ArrowRight, Sparkles, CheckCircle2, MapPin, Star, Target, Rocket, Heart
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

export function MarketingSalesLanding() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-white text-slate-900 overflow-hidden pt-20">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-200/10 rounded-full blur-[120px]"></div>

        {/* Floating elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-6">
                <TrendingUp size={14} className="animate-bounce-soft" /> Đang tăng trưởng nhanh
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Vượt Mọi Giới Hạn –<br />
                <span className="text-orange-500">Trở Thành Chuyên Gia</span><br />
                Marketing & Sales!
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Ngành nghề bứt phá trong kỷ nguyên chuyển đổi số.<br />
                <span className="font-bold text-orange-600">3.800+</span> vị trí tuyển dụng mỗi tháng.<br />
                Lương khởi điểm từ <span className="font-bold text-emerald-600">18–40 triệu đồng</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-rose-700 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-orange-600/50 flex items-center gap-2 group">
                  <Sparkles size={20} />
                  Khám phá ngành ngay
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2 group">
                  <BarChart3 size={20} />
                  Xem lộ trình lương
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 mt-12 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  Miễn phí 100%
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  4.9/5 từ 8K+ học sinh
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Animated Chart */}
            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-3xl blur-xl"></div>
                <div className="relative p-8 rounded-3xl bg-white shadow-2xl border-2 border-orange-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-slate-900">Doanh Thu</h3>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Q1', value: 45, color: 'from-orange-400 to-orange-500' },
                      { label: 'Q2', value: 62, color: 'from-orange-500 to-rose-500' },
                      { label: 'Q3', value: 88, color: 'from-rose-500 to-red-600' },
                      { label: 'Q4', value: 120, color: 'from-red-600 to-rose-700' },
                    ].map((q, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-600 w-8">{q.label}</span>
                        <div className="flex-1 h-6 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${q.color} transition-all`}
                            style={{ width: `${(q.value / 120) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-900">{q.value}M</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="py-16 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, number: 3800, label: 'Vị trí/tháng', suffix: '+' },
              { icon: DollarSign, number: 18, label: 'Lương khởi (triệu)', suffix: '-40M' },
              { icon: TrendingUp, number: 45, label: 'Tăng trưởng/năm', suffix: '%' },
              { icon: Users, number: 8, label: 'Tập đoàn hàng đầu', suffix: '+' },
            ].map((stat, idx) => {
              const { count, ref } = useCounter(stat.number, 2000);
              const Icon = stat.icon;

              return (
                <AnimatedSection key={idx} delay={idx * 50}>
                  <div ref={ref} className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-orange-200">
                    <Icon className="text-orange-600 mb-3" size={32} />
                    <div className="text-3xl font-black text-slate-900">
                      {count}{stat.suffix}
                    </div>
                    <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: TẠI SAO CHỌN MARKETING & SALES */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Tại Sao Chọn <span className="text-orange-600">Marketing & Sales?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ngành nghề không chỉ là xu hướng – mà còn là công cụ dẫn dắt tương lai toàn cầu
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Digital Marketing',
                desc: 'Làm chủ chiến lược trên Google Ads, Facebook Ads',
                items: ['Content Marketing & SEO/SEM', 'Google Analytics & Meta Ads Manager', 'Phân tích dữ liệu tối ưu doanh thu']
              },
              {
                icon: Zap,
                title: 'E-commerce Leadership',
                desc: 'Xây dựng và quản trị cửa hàng trực tuyến',
                items: ['Shopee, Lazada, Amazon management', 'Tối ưu chiến lược giá & multi-channel', 'Big Data & AI customer insights']
              },
              {
                icon: Users,
                title: 'Sales Mastery',
                desc: 'Thành thạo kỹ thuật chốt sale & thương lượng',
                items: ['Omnichannel sales strategies', 'Customer relationship management', 'Solution-based consultative selling']
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group p-8 rounded-3xl bg-white border-2 border-orange-200 hover:border-orange-500/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4 hover:shadow-orange-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 mb-6">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Bắt Đầu Từ Zero –<br />
              <span className="text-orange-600">Trở Thành Chuyên Gia Chỉ Sau 4 Năm</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: 'Năm 1', title: 'Nền Tảng', icon: BookOpen, color: 'from-yellow-500 to-orange-600', items: ['Marketing cơ bản (4P)', 'SEO & Content Marketing', 'Sales Basics'] },
              { year: 'Năm 2', title: 'Chuyên Sâu', icon: BarChart3, color: 'from-red-600 to-orange-500', items: ['Analytics & KPIs', 'Google/FB Ads', 'CRM & Chatbot'] },
              { year: 'Năm 3', title: 'Thực Chiến', icon: Zap, color: 'from-orange-500 to-orange-600', items: ['Chọn chuyên môn', 'Dự án thực tế', 'Multi-channel campaigns'] },
              { year: 'Năm 4', title: 'Chuyên Nghiệp', icon: Rocket, color: 'from-orange-600 to-blue-700', items: ['Sales Funnels', 'Đồ án tốt nghiệp', 'Portfolio ready'] }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group p-6 rounded-3xl bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-xs font-bold text-orange-600 mb-1 uppercase">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
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
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Dẫn Đầu Cuộc Chơi –<br />
              <span className="text-emerald-600">Thu Nhập Bứt Phá</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Marketing Executive', exp: '0–1 năm', salary: 18, max: 25 },
              { role: 'Digital Marketer', exp: '1–3 năm', salary: 25, max: 40 },
              { role: 'E-commerce Manager', exp: '2–5 năm', salary: 30, max: 50 },
              { role: 'Sales Manager', exp: '3–6 năm', salary: 40, max: 80 },
              { role: 'Marketing Director', exp: '5+ năm', salary: 80, max: 150 },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-rose-50 border border-orange-200 hover:border-orange-500/50 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900">{item.role}</h4>
                      <p className="text-sm text-slate-600">{item.exp}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-emerald-600">
                        {item.salary}-{item.max}M₫
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${(item.max / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600 mt-8">
            💡 Đỉnh cao ngành nghề: Có thể đạt mức thu nhập 9 chữ số nếu trở thành CMO hoặc Marketing Consultant
          </p>
        </div>
      </section>

      {/* SECTION 6: TRƯỜNG ĐÀO TẠO */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Lựa Chọn Ngôi Trường Chuẩn –<br />
              <span className="text-orange-600">Bệ Phóng Tương Lai Vững Chắc</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: '🏆 Top School',
                title: 'Nhóm Hàng Đầu',
                schools: ['ĐH Kinh Tế Quốc Dân (NEU)', 'ĐH Ngoại Thương (FTU)', 'RMIT Việt Nam']
              },
              {
                badge: '📊 Đa Ngành',
                title: 'Nhóm Chất Lượng Cao',
                schools: ['ĐH Thương Mại', 'ĐH Kinh Tế Tài Chính', 'ĐH Tôn Đức Thắng']
              },
              {
                badge: '🌐 Quốc Tế',
                title: 'Nhóm Chuyên Marketing',
                schools: ['Google Digital Garage', 'Meta Blueprint', 'HubSpot Inbound']
              }
            ].map((group, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-rose-50 border-2 border-orange-200 hover:border-orange-500/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-200 text-orange-700 text-xs font-bold mb-4">
                    {group.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.schools.map((school, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <MapPin size={16} className="text-orange-600 flex-shrink-0" />
                        {school}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-orange-400 to-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl text-black font-black mb-4">
              Thành Công Từ Sự Bứt Phá –<br />
              <span className="text-orange-100">Bạn Có Thể Là Người Tiếp Theo!</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Từ sinh viên ngành Anh, nhờ học Digital Marketing, tôi trở thành chuyên gia Google Ads với lương 80M/tháng.',
                author: 'Nguyễn Thanh Tâm',
                role: 'Chuyên viên Quảng cáo @ Google',
                age: '26 tuổi'
              },
              {
                quote: 'Năm 2 đại học, tôi khởi nghiệp shop Shopee đạt 300M/tháng. Giờ vận hành 2 doanh nghiệp trên Amazon & Shopee.',
                author: 'Lê Thị Minh Ngọc',
                role: 'CEO & E-commerce Consultant',
                age: '24 tuổi'
              },
              {
                quote: 'Đào tạo sâu về kỹ năng Sale, tôi quản lý đội kinh doanh miền Nam với lương 50M+.',
                author: 'Trương Hoàng Nam',
                role: 'Sales Manager @ Tập Đoàn',
                age: '25 tuổi'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border border-white/20 hover:border-orange-300/50 transition-all hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <p className="text-orange-50 mb-6 leading-relaxed text-white italic">"{item.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-bold text-black">{item.author}</p>
                    <p className="text-sm text-orange-200">{item.role}</p>
                    <p className="text-xs text-orange-100/70 mt-1">{item.age}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Các Câu Hỏi <span className="text-orange-600">Thường Gặp</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'Marketing có yêu cầu Tiếng Anh không?',
                a: 'Cần thiết! Bạn sẽ tiếp cận tài liệu & công cụ quốc tế. Tiếng Anh là chìa khóa thành công.'
              },
              {
                q: 'Marketing & Sales phù hợp với ai?',
                a: 'Người đam mê sáng tạo nội dung, hiểu tâm lý khách hàng, hoặc yêu thích bán hàng.'
              },
              {
                q: 'Các công cụ nào quan trọng trong Marketing?',
                a: 'Google Analytics, HubSpot, Meta Ads Manager, Canva, SEMrush, Email Tools.'
              },
              {
                q: 'Có thể học Marketing khi không am hiểu kỹ thuật không?',
                a: 'Hoàn toàn được! Marketing thiên vào ý tưởng & sáng tạo. Kỹ thuật có thể học dần.'
              }
            ].map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-white border-2 border-orange-200 hover:border-orange-500/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-lg text-orange-600">❓</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 flex items-start gap-2">
                    <span className="text-lg text-emerald-500 mt-0.5">✅</span>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-500 via-rose-500 to-red-600 text-white relative overflow-hidden">
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
              Sẵn Sàng Bắt Đầu<br />
              <span className="text-orange-100">Hành Trình Của Bạn?</span>
            </h2>

            <p className="text-xl text-orange-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Marketing & Sales chính là cơ hội dẫn bạn đến mơ ước.<br />
              <span className="font-bold text-white">Hãy đưa ra bước đi đầu tiên ngay bây giờ!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-white text-orange-600 hover:bg-orange-50 font-bold text-black rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-orange-600/50 flex items-center justify-center gap-2 group text-lg">
                <Rocket size={24} />
                Khám Phá Lộ Trình Học
              </button>
              <button className="px-10 py-5 border-2 border-white text-white hover:bg-white/10 font-bold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group text-lg">
                <Heart size={24} />
                Tư Vấn Ngay
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <CheckCircle2 size={16} className="text-emerald-300" />
                ✨ Miễn phí 100%
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Star size={16} className="text-yellow-300 fill-yellow-300" />
                ⭐ 4.9/5 từ 8.000+ học sinh
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Target size={16} className="text-orange-200" />
                🎯 Cập nhật 2025
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}