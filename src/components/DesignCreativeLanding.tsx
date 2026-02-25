import { useState, useEffect, useRef } from 'react';
import {
  Palette, Pencil, Video, Zap, Star, CheckCircle2, Award, Briefcase, DollarSign,
  ArrowRight, Heart, MapPin, Code, Figma, Lightbulb, Users, Target, Rocket
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

export function DesignCreativeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 text-slate-900 overflow-hidden pt-20">
        {/* Floating decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-300/10 rounded-full blur-[120px]"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-200/60 to-pink-200/60 border border-purple-300 text-purple-700 text-xs font-bold mb-6 backdrop-blur">
                <Palette size={14} /> Ngành Sáng Tạo & Hiện Đại
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-slate-900">
                Khám phá thế giới<br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">sáng tạo –</span><br />
                Làm chủ ý tưởng & thị giác!
              </h1>

              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-xl">
                UI/UX, Graphic Design, Motion Design – cơ hội vàng!<br />
                <span className="font-bold text-purple-600">2.100+</span> vị trí tuyển dụng mỗi tháng.<br />
                Lương khởi điểm từ <span className="font-bold text-pink-600">15–35 triệu đồng</span>.
              </p>

              <p className="text-base text-slate-600 mb-8">Xây dựng thương hiệu cá nhân và doanh nghiệp theo cách độc đáo của riêng bạn.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 group">
                  <Palette size={20} />
                  Tìm hiểu ngay lĩnh vực này
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-teal-500 text-teal-700 hover:bg-teal-50 font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2 group">
                  <Figma size={20} />
                  Xem hướng dẫn chi tiết
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 mt-12 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-600" />
                  Miễn phí 100%
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  4.9/5 từ 5K+ học sinh
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual Elements */}
            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-3xl blur-xl"></div>
                <div className="relative p-12 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl border-2 border-white/80">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Palette, label: 'Graphic', color: 'from-purple-500 to-pink-500' },
                      { icon: Code, label: 'UI/UX', color: 'from-pink-500 to-orange-500' },
                      { icon: Video, label: 'Motion', color: 'from-orange-500 to-teal-500' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transition-all hover:scale-110 flex flex-col items-center justify-center gap-2 cursor-pointer group`}>
                          <Icon size={28} className="text-white group-hover:scale-125 transition-transform" />
                          <span className="text-white text-xs font-bold">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8 pt-8 border-t border-purple-200/40">
                    <p className="text-center text-slate-600 text-sm font-semibold">Nơi ý tưởng trở thành hiện thực</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              💡 Vì sao chọn ngành <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Design & Creative?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ngành sáng tạo không chỉ là nghệ thuật mà còn là cầu nối giữa ý tưởng và khách hàng. Một môi trường năng động, đòi hỏi sự kết hợp tinh tế giữa kỹ thuật và trí tưởng tượng.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'UI/UX Design',
                desc: 'Thiết kế giao diện ứng dụng trên nền tảng số',
                items: ['Thiết kế giao diện Web & App', 'Nghiên cứu trải nghiệm người dùng', 'Công cụ: Figma, Sketch, Adobe XD'],
                color: 'from-purple-500/30 to-purple-600/30 border-purple-300'
              },
              {
                icon: Pencil,
                title: 'Graphic Design',
                desc: 'Sáng tạo visual cho mọi nền tảng',
                items: ['Logo, Poster, Branding', 'Illustration & Infographics', 'Công cụ: Photoshop, Illustrator, Canva'],
                color: 'from-pink-500/30 to-pink-600/30 border-pink-300'
              },
              {
                icon: Video,
                title: 'Motion Design',
                desc: 'Tạo dựng chuyển động cho nội dung số',
                items: ['Quảng cáo video & intro', 'Giao diện động', 'Công cụ: After Effects, Cinema 4D, Blender'],
                color: 'from-orange-500/30 to-orange-600/30 border-orange-300'
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`group p-8 rounded-3xl bg-gradient-to-br ${card.color} border-2 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4 backdrop-blur-sm`}>
                    <div className={`w-16 h-16 ${idx === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : idx === 1 ? 'bg-gradient-to-br from-pink-500 to-pink-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-700 mb-6">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
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

      {/* SECTION 3: ROADMAP */}
      <section className="py-24 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Hành trình 4 năm từ<br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">người mới đến chuyên gia</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: 'Năm 1',
                title: 'Khám Phá Cơ Bản',
                icon: Lightbulb,
                color: 'from-purple-500 to-purple-600',
                items: ['Tổng quan ngành design', 'Cách trình bày ý tưởng', 'Photoshop & Illustrator']
              },
              {
                year: 'Năm 2',
                title: 'Chuyên Sâu Cơ Bản',
                icon: Code,
                color: 'from-pink-500 to-pink-600',
                items: ['Digital Design & UI/UX', 'Typography & Branding', 'Collaboration skills']
              },
              {
                year: 'Năm 3',
                title: 'Tăng Cường Cá Nhân',
                icon: Award,
                color: 'from-orange-500 to-orange-600',
                items: ['Portfolio cá nhân', 'UX Research', 'Motion Design basics']
              },
              {
                year: 'Năm 4',
                title: 'Ứng Dụng Thực Tế',
                icon: Rocket,
                color: 'from-teal-500 to-teal-600',
                items: ['Xây dựng thương hiệu', 'Case study thực tế', 'Đồ án tốt nghiệp']
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group p-6 rounded-3xl bg-white/70 backdrop-blur border-2 border-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 hover:border-purple-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 uppercase">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
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

      {/* SECTION 4: SALARY */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Nghề sáng tạo –<br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Thu nhập đáng mơ ước</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Junior Graphic Designer', exp: '0–1 năm', salary: 15, max: 25 },
              { role: 'UI/UX Designer', exp: '1–3 năm', salary: 20, max: 50 },
              { role: 'Motion Designer', exp: '1–2 năm', salary: 20, max: 60 },
              { role: 'Brand Identity Manager', exp: '5+ năm', salary: 45, max: 120 },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-pink-300 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900">{item.role}</h4>
                      <p className="text-sm text-slate-600">{item.exp}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {item.salary}-{item.max}M₫
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-3 rounded-full transition-all shadow-lg"
                      style={{ width: `${(item.max / 120) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-purple-100/50 border-2 border-purple-200">
            <p className="text-center text-slate-700 text-sm">💡 <span className="font-bold">Nguồn số liệu:</span> ITviec, TopDev – năm 2024</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRAINING PLACES */}
      <section className="py-24 bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-orange-100/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Nơi đào tạo tốt nhất<br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">cho tinh hoa sáng tạo</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: '🏛️ Trường Học Hàng Đầu',
                title: 'Các Trường Đại Học Uy Tín',
                items: ['ĐH Kiến Trúc Hà Nội: Đồ họa & Thiết kế Nội thất', 'RMIT Việt Nam: Đồ họa & Đa phương tiện', 'Arena Multimedia: Đa phương tiện & Motion'],
                color: 'from-purple-500/20 border-purple-300'
              },
              {
                badge: '💻 Khóa Học Online',
                title: 'Các Nền Tảng Quốc Tế',
                items: ['Coursera: UI/UX Design', 'LinkedIn Learning: Motion Graphics', 'Udemy: Adobe After Effects'],
                color: 'from-pink-500/20 border-pink-300'
              },
              {
                badge: '🎓 Chứng Chỉ HOT',
                title: 'Các Chứng Chỉ Quốc Tế',
                items: ['Adobe Certified Professional (ACP)', 'Google UX Design Certificate', 'Adobe XD Masterclass (Skillshare)'],
                color: 'from-orange-500/20 border-orange-300'
              }
            ].map((group, idx) => {
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`p-8 rounded-3xl bg-gradient-to-br ${group.color} border-2 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 backdrop-blur-sm bg-white/40`}>
                    <div className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                      {group.badge}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">{group.title}</h3>
                    <ul className="space-y-3">
                      {group.items.map((school, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i + 1}</div>
                          <span className="text-sm">{school}</span>
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

      {/* SECTION 6: JOB OPPORTUNITIES */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              💼 Cơ Hộ<span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">i Việc Làm</span><br />
              <span className="text-lg font-semibold text-slate-600">trong ngành thiết kế</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'UI/UX Designer', desc: 'Công ty phát triển phần mềm, công ty công nghệ', icon: Code },
              { title: 'Graphic Designer', desc: 'Agency quảng cáo, startup, công ty thương mại', icon: Palette },
              { title: 'Motion Designer', desc: 'Biên tập video sáng tạo, web animations', icon: Video },
              { title: 'Product Designer', desc: 'Sản xuất thiết kế sản phẩm, bao bì, đồ họa in ấn', icon: Target },
              { title: 'Brand Designer', desc: 'Xây dựng nhận diện thương hiệu cho doanh nghiệp', icon: Briefcase },
              { title: 'Web Designer', desc: 'Thiết kế website, landing page, portfolios', icon: Figma },
            ].map((job, idx) => {
              const Icon = job.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 50}>
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 hover:border-pink-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{job.title}</h3>
                    <p className="text-slate-700 text-sm">{job.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
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
              Bước Đi Sáng Tạo –<br />
              <span className="text-yellow-200">Thành Công Chói Lóa</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Học tại RMIT giúp tôi tự tin hơn với khả năng của mình. Giờ đây, tôi đã là UI/UX Designer tại Google với mức lương đáng mơ ước.',
                author: 'Nguyễn Minh Phương',
                role: 'UI/UX Designer @ Google',
                age: '26 tuổi'
              },
              {
                quote: 'Khóa học của Arena Multimedia giúp tôi làm chủ After Effects nhanh chóng, nhờ thế trở thành Motion Graphic Designer. Bây giờ tôi đang làm việc tại Shopee.',
                author: 'Đặng Thế Vinh',
                role: 'Motion Designer @ Shopee',
                age: '25 tuổi'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border-2 border-white/30 hover:border-white/60 transition-all hover:shadow-2xl hover:shadow-white/20 shadow-xl relative group">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 rounded-t-3xl"></div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <p className="text-white mb-6 leading-relaxed italic font-medium">"{item.quote}"</p>
                  <div className="border-t border-white/30 pt-4">
                    <p className="font-bold text-yellow-200 text-lg">{item.author}</p>
                    <p className="text-sm text-teal-100 font-semibold">{item.role}</p>
                    <p className="text-xs text-pink-100 mt-1">{item.age}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Câu Hỏi <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Thường Gặp</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'Có cần sáng tạo để làm Design?',
                a: 'Không nhất thiết! Design cần sự tập trung học, thực hành. Bạn sẽ phát triển sáng tạo qua thời gian.'
              },
              {
                q: 'Các công cụ cần thiết?',
                a: 'Adobe Photoshop, Illustrator, Figma, After Effects là những công cụ cơ bản. Tuy nhiên, có rất nhiều lựa chọn khác.'
              },
              {
                q: 'Thị trường việc làm ngành này ra sao?',
                a: 'Mở rộng ở mức quốc tế, đặc biệt mạnh với lĩnh vực UI/UX. Nhu cầu tuyệt đối cao từ startup đến enterprise.'
              }
            ].map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-pink-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-lg text-purple-600">❓</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-700 flex items-start gap-2">
                    <span className="text-lg text-teal-600 mt-0.5">✅</span>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden border-t-4 border-purple-400">
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
              Sẵn Sàng Tỏa Sáng<br />
              <span className="text-yellow-200">Với Design & Creative?</span>
            </h2>

            <p className="text-xl text-yellow-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tham gia ngay để mở rộng cơ hội nghề nghiệp và bắt đầu hành trình sáng tạo của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-white text-purple-600 hover:bg-yellow-50 font-bold text-lg rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-white/50 flex items-center justify-center gap-2 group">
                <Palette size={24} />
                Xem Lộ Trình Học
              </button>
              <button className="px-10 py-5 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                <Star size={24} />
                Tư Vấn Miễn Phí
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
                ⭐ 4.9/5 từ 5.000+ học sinh
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30">
                <MapPin size={16} className="text-yellow-200" />
                🌍 Cập nhật 2025
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white mb-2 font-bold">© 2025 EduPath Vietnam</p>
              <p className="text-yellow-100 text-sm">"Khai Phá Ý Tưởng – Sáng Tương Lai!"</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
