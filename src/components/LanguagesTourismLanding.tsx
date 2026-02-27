import { useState, useEffect, useRef } from 'react';
import {
  Globe, Plane, MapPin, Users, CheckCircle2, Award,
  ArrowRight, Star, Briefcase, TrendingUp, Building2, Languages, Compass, Heart
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

export function LanguagesTourismLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-cyan-50 font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 text-slate-900 overflow-hidden pt-20">
        {/* Floating decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-300/15 rounded-full blur-[120px]"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-200/60 to-pink-200/60 border border-purple-400 text-purple-700 text-xs font-bold mb-6 backdrop-blur">
                <Star size={14} /> 🌟 Phục hồi mạnh mẽ – Nhiều cơ hội phát triển
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-slate-900">
                Cánh Cửa Ngôn Ngữ<br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 bg-clip-text text-transparent">Mở Ra</span><br />
                Con Đường Du Lịch Bắt Đầu!
              </h1>

              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-xl">
                Ngành nghề hồi phục mạnh mẽ và ưa chuộng hiện nay!<br />
                <span className="font-bold text-purple-600">1.800+</span> vị trí tuyển dụng hàng tháng.<br />
                Lương khởi điểm từ <span className="font-bold text-cyan-600">16–38 triệu đồng/tháng</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 group">
                  <Plane size={20} />
                  Định hướng sự nghiệp ngay hôm nay
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2 group">
                  <TrendingUp size={20} />
                  Tiềm năng thu nhập
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 mt-12 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-600" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-cyan-300/20 rounded-3xl blur-xl"></div>
                <div className="relative p-12 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl border-2 border-white/80">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Globe, label: 'Ngôn Ngữ', color: 'from-purple-500 to-pink-500' },
                      { icon: Plane, label: 'Du Lịch', color: 'from-cyan-500 to-teal-500' },
                      { icon: Users, label: 'Giao Tiếp', color: 'from-red-500 to-blue-500' },
                      { icon: Compass, label: 'Khám Phá', color: 'from-yellow-500 to-orange-600' },
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
                  <div className="mt-8 pt-8 border-t border-purple-200/40">
                    <p className="text-center text-slate-600 text-sm font-semibold">Nơi ngôn ngữ kết nối con người, du lịch kết nối thế giới</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              💡 Ngành Ngoại Ngữ & Du Lịch:<br />
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Hành trình xuyên biên giới – Cơ hội không giới hạn
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tại sao chọn ngành học này?
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: '🎯 Kĩ Năng Cần Thiết, Luôn Được Săn Đón',
                desc: 'Ngôn ngữ và du lịch là ngành không bao giờ lỗi thời – mọi doanh nghiệp, tổ chức cần nhân lực thành thạo ít nhất 1 ngoại ngữ.',
                color: 'from-purple-500/60 to-purple-600/60 border-purple-300'
              },
              {
                icon: TrendingUp,
                title: '📈 Phục Hồi Mạnh Mẽ Sau Đại Dịch',
                desc: 'Với sự phục hồi của ngành du lịch toàn cầu, nhu cầu nhân tài trong ngành lại tăng cao.',
                color: 'from-pink-500/60 to-pink-600/60 border-pink-300'
              },
              {
                icon: Globe,
                title: '🌍 Nền Tảng Đa Dạng & Cơ Hội Quốc Tế',
                desc: 'Ngành học phù hợp cho mọi người, từ chuyên ngành ngôn ngữ đến người muốn chuyển ngành mới.',
                color: 'from-cyan-500/60 to-cyan-600/60 border-cyan-300'
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`group p-8 rounded-3xl bg-gradient-to-br ${card.color} border-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4 backdrop-blur-md`}>
                    <div className={`w-16 h-16 ${idx === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : idx === 1 ? 'bg-gradient-to-br from-pink-500 to-pink-600' : 'bg-gradient-to-br from-cyan-500 to-cyan-600'} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all shadow-lg`}>
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

      {/* SECTION 3: TYPICAL JOBS */}
      <section className="py-24 bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-cyan-100/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              💼 Các Công Việc Tiêu Biểu
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Khám phá các vị trí công việc hấp dẫn trong ngành
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '🌐 Phiên Dịch Viên & Biên Dịch Viên',
                company: 'Tập đoàn đa quốc gia, tổ chức phi lợi nhuận',
                description: 'Tương tác giao tiếp đa văn hóa, tập trung dịch hội thoại/biên dịch chuyên ngành.',
                color: 'from-purple-500/30 to-purple-600/30 border-purple-400'
              },
              {
                title: '✈️ Hướng Dẫn Viên Du Lịch Quốc Tế',
                company: 'Các công ty du lịch, Klook, Vietravel',
                description: 'Là cầu nối giữa du khách và điểm đến, xây dựng các tuyến đường nổi tiếng, tạo trải nghiệm không thể nào quên.',
                color: 'from-pink-500/30 to-pink-600/30 border-pink-400'
              },
              {
                title: '🏨 Chuyên Viên Lễ Tân & Quản Lý Khách Sạn',
                company: 'Khách sạn, resort, tập đoàn du lịch quốc tế',
                description: 'Quản lý dịch vụ văn phòng lễ tân/đón tiếp, đảm bảo trải nghiệm tuyệt vời cho khách hàng.',
                color: 'from-cyan-500/30 to-cyan-600/30 border-cyan-400'
              },
              {
                title: '🎯 Chuyên Viên Phát Triển Sản Phẩm Du Lịch',
                company: 'Công ty du lịch, tour operator, OTA',
                description: 'Xây dựng chiến lược phát triển sản phẩm du lịch, tối ưu chi phí và trải nghiệm khách hàng.',
                color: 'from-purple-500/30 to-pink-600/30 border-purple-400'
              }
            ].map((job, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className={`group p-8 rounded-3xl bg-gradient-to-br ${job.color} border-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3`}>
                  <h3 className="text-2xl font-black text-slate-950 mb-2">{job.title}</h3>
                  <p className="text-sm font-semibold text-slate-700 mb-4">{job.company}</p>
                  <p className="text-slate-800 font-semibold leading-relaxed">{job.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ROADMAP */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Hành trình 4 năm từ<br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Cơ Bản Đến Chuyên Gia
              </span>
            </h2>
            <p className="text-lg text-slate-600">Bắt đầu hành trình chạm tới thành công</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: 'Năm 1',
                title: 'Nền Tảng Kiến Thức',
                items: ['Ngữ pháp & phát âm chuẩn', 'Văn hóa & phong tục', 'Dự án nhóm'],
                color: 'from-purple-500 to-purple-600',
              },
              {
                year: 'Năm 2',
                title: 'Đào Sâu Du Lịch',
                items: ['Giao tiếp thương mại', 'Tổ chức tour', 'Thiết kế tuyến đường'],
                color: 'from-pink-500 to-pink-600',
              },
              {
                year: 'Năm 3',
                title: 'Chuyên Sâu Về Nghề',
                items: ['Phiên – biên dịch', 'Quản lý dịch vụ', 'Phần mềm tour'],
                color: 'from-cyan-500 to-cyan-600',
              },
              {
                year: 'Năm 4',
                title: 'Thực Tập & Ứng Dụng',
                items: ['Thực tập tại doanh nghiệp', 'Dự án tốt nghiệp', 'Portfolio & job offer'],
                color: 'from-purple-500 to-cyan-500',
              }
            ].map((item, idx) => {
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`group p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-cyan-50 border-3 border-purple-200 hover:border-cyan-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Briefcase size={24} />
                    </div>
                    <div className="text-xs font-black bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-1 uppercase tracking-wider">{item.year}</div>
                    <h3 className="text-2xl font-black text-slate-950 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
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

      {/* SECTION 5: SALARY & CAREER */}
      <section className="py-24 bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-cyan-100/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              💰 Tiềm Năng Nghề Nghiệp –<br />
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Sự Nghiệp Rực Rỡ Chờ Đón</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Phiên dịch viên', exp: '1–3 năm', salary: 18, max: 30 },
              { role: 'Hướng dẫn viên du lịch quốc tế', exp: '2–5 năm', salary: 20, max: 35 },
              { role: 'Quản lý lễ tân (Resort/Hotel)', exp: '3–6 năm', salary: 30, max: 45 },
              { role: 'Nhà phát triển sản phẩm du lịch', exp: '3–6 năm', salary: 30, max: 50 },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50 border-3 border-purple-300 hover:border-cyan-400 transition-all hover:shadow-2xl hover:from-purple-50 hover:to-cyan-50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-black text-slate-950 text-lg">{item.role}</h4>
                      <p className="text-sm font-semibold text-slate-700">{item.exp}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                        {item.salary}-{item.max}M₫
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-300 rounded-full h-4 shadow-md">
                    <div
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-4 rounded-full transition-all shadow-lg drop-shadow-md"
                      style={{ width: `${(item.max / 50) * 100}%` }}
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              🏛️ Địa Điểm Đào Tạo Hàng Đầu<br />
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                và Chứng Chỉ Quốc Tế
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: '🏫 Trường Đại Học',
                items: ['ĐH Ngoại Ngữ – ĐHQG Hà Nội', 'ĐH Khoa Học Xã Hội & Nhân Văn (TP.HCM)', 'ĐH Hà Nội – Ngôn Ngữ & Du Lịch Quốc Tế'],
                color: 'from-purple-500/50 border-purple-300'
              },
              {
                badge: '🌍 Chứng Chỉ Ngôn Ngữ',
                items: ['IELTS, TOEIC, TOEFL – Anh Văn', 'TOPIK (Hàn), JLPT (Nhật)', 'DELF, DELE – Pháp, Tây Ban Nha'],
                color: 'from-pink-500/50 border-pink-300'
              },
              {
                badge: '✈️ Chứng Chỉ Du Lịch',
                items: ['IATA – International Air Transport', 'UNWTO – Tourism Certification', 'Guide Profession – Chứng Chỉ Hướng Dẫn'],
                color: 'from-cyan-500/50 border-cyan-300'
              }
            ].map((group, idx) => {
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className={`p-8 rounded-3xl bg-gradient-to-br ${group.color} border-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 backdrop-blur-md relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-sm font-black text-slate-950 mb-4 flex items-center gap-2 uppercase tracking-wide">
                      {group.badge}
                    </div>
                    <ul className="space-y-3 relative z-10">
                      {group.items.map((school, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-950 font-semibold">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md">{i + 1}</div>
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
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white relative overflow-hidden">
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
              🌟 Những Câu Chuyện Thành Công<br />
              <span className="text-yellow-200">Truyền Cảm Hứng!</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Khóa học đã giúp tôi trau dồi khả năng ngoại ngữ cũng như sự tự tin để tiếp xúc với khách quốc tế. Bây giờ, tôi là hướng dẫn viên tại Klook với thu nhập 35 triệu/tháng!',
                author: 'Trần Văn Khôi',
                role: 'Tour Guide @ Klook',
                age: '26 tuổi'
              },
              {
                quote: 'Chọn học tại ĐH Ngoại Ngữ là quyết định đúng đắn. Hiện tại, tôi chịu trách nhiệm lên kế hoạch và quản lý tour toàn khu vực Đông Nam Á với hơn 50 triệu/tháng!',
                author: 'Nguyễn Ngọc Bích',
                role: 'Tour Manager @ Vietravel',
                age: '28 tuổi'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border-2 border-white/30 hover:border-white/60 transition-all hover:shadow-2xl hover:shadow-white/20 shadow-xl relative group">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 rounded-t-3xl"></div>

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

      {/* SECTION 8: FINAL CTA */}
      <section className="min-h-screen flex items-center  bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 text-white relative overflow-hidden border-t-4 border-purple-400">
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
              Khám Phá Thế Giới,<br />
              <span className="text-yellow-200">Mở Cánh Cửa Tới Tương Lai!</span>
            </h2>

            <p className="text-xl text-yellow-50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Bắt đầu học Ngoại Ngữ & Du Lịch để xây dựng sự nghiệp mơ ước. Tham gia ngay hôm nay!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-white text-purple-600 hover:bg-yellow-50 font-bold text-lg rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-white/50 flex items-center justify-center gap-2 group">
                <Plane size={24} />
                Tìm Hiểu Lộ Trình Học
              </button>
              <button className="px-10 py-5 border-2 border-white text-white hover:bg-white/10 font-bold text-lg rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                <Heart size={24} />
                Đăng Ký Tư Vấn Miễn Phí
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
                <Globe size={16} className="text-yellow-200" />
                🌍 Cập nhật 2025
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
