import { useState, useEffect, useRef } from 'react';
import {
  Code2, Cpu, Cloud, Zap, TrendingUp, Users, Award, Globe, CheckCircle2,
  ArrowRight, Sparkles, BookOpen, Briefcase, DollarSign, Rocket, Heart, MessageCircle,
  Star, MapPin, Calendar, Target
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

export function CNITAILanding() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ai'>('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* ===================== SECTION 1: HERO ===================== */}
      {/* FIX: "Công nghệ" và "Tương lai" dùng text màu sáng rõ trên nền dark */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

        {/* Particle network */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: `${(i * 37 + 13) % 100}%`,
                top: `${(i * 53 + 7) % 100}%`,
                animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${(i % 3) * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-6 backdrop-blur border border-blue-400/30">
                <Zap size={14} /> Phát triển nhanh
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Làm chủ{' '}
                {/* FIX: đổi từ text-cyan-100 (quá nhạt) → text-cyan-300 (rõ trên nền dark) */}
                <span className="text-cyan-300 font-black">Công nghệ</span> –{' '}
                <br className="hidden md:block" />
                Định hình{' '}
                {/* FIX: đổi từ text-rose-100 (quá nhạt) → text-rose-300 */}
                <span className="text-rose-300 font-black">Tương lai</span>{' '}
                với CNTT & AI
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Ngành phát triển nhanh nhất thập kỷ.<br />
                <span className="font-bold text-white">5.200+</span> vị trí tuyển dụng mỗi tháng.<br />
                {/* FIX: giữ text-cyan-300 – đã rõ trên nền dark */}
                Lương khởi điểm từ <span className="font-bold text-cyan-300">25–50 triệu đồng</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 flex items-center gap-2 group">
                  <Rocket size={20} />
                  Khám phá lộ trình học
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2">
                  <DollarSign size={20} />
                  Xem mức lương chi tiết
                </button>
              </div>

              <div className="flex gap-6 mt-12 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Miễn phí 100%
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  4.9/5 từ 10K+ học sinh
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Animated Code Editor */}
            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative p-6 rounded-3xl bg-slate-800/80 backdrop-blur border border-blue-400/30 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-500 ml-4">cnit-ai-future.py</span>
                  </div>
                  <pre className="text-sm text-cyan-300 font-mono overflow-hidden">
                    {`const future = {
  salary: "25-50M",
  jobs: "5200+/month",
  growth: "35%/year",
  future: "BRIGHT" 
}

console.log("Ready?");
// 🚀 START YOUR JOURNEY`}
                  </pre>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: STATS BAR ===================== */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Briefcase, number: 5200, label: 'Vị trí/tháng', suffix: '+' },
              { icon: DollarSign, number: 25, label: 'Lương khởi (triệu)', suffix: '-50M' },
              { icon: TrendingUp, number: 35, label: 'Tăng trưởng/năm', suffix: '%' },
              { icon: BookOpen, number: 120, label: 'Trường đào tạo', suffix: '+' },
              { icon: Globe, number: 3, label: 'Top Đông Nam Á', suffix: '' },
            ].map((stat, idx) => {
              const { count, ref } = useCounter(stat.number, 2000);
              const Icon = stat.icon;

              return (
                <AnimatedSection key={idx} delay={idx * 50}>
                  <div ref={ref} className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <Icon className="text-blue-600 mb-3" size={32} />
                    {/* FIX: text-slate-900 rõ trên nền trắng */}
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

      {/* ===================== SECTION 3: TẠI SAO CHỌN CNTT & AI ===================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Ngành Học{' '}
              {/* FIX: nền sáng → dùng gradient text thay vì text-blue-100 */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-black">
                Của Thế Kỷ 21
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Không phải xu hướng – đây là tương lai
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Lập trình & Phát triển',
                desc: 'Cơ hội việc làm tại 100+ công ty công nghệ lớn',
                items: ['Làm việc remote toàn cầu', 'Junior→Senior trong 5 năm', 'Python, JS, Java, React, Node.js']
              },
              {
                icon: Cpu,
                title: 'AI & Machine Learning',
                desc: 'Tăng trưởng 40%/năm tại Việt Nam',
                items: ['Ứng dụng: y tế, tài chính, giáo dục', 'ML Engineer → AI Researcher', 'Python, TensorFlow, PyTorch, LLM']
              },
              {
                icon: Cloud,
                title: 'Cloud & DevOps',
                desc: 'Nhu cầu tuyển dụng tăng 60% sau dịch',
                items: ['Hạ tầng công nghệ toàn cầu', 'Chứng chỉ: AWS, GCP, Azure', 'SysAdmin → Cloud Architect']
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-blue-500/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4 hover:shadow-blue-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 mb-6">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
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

      {/* ===================== SECTION 4: LỘ TRÌNH HỌC TẬP ===================== */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Từ Zero đến{' '}
              {/* FIX: nền sáng → dùng gradient text thay vì text-blue-100 */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-black">
                Hero
              </span>{' '}
              trong 4 năm
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: 'Năm 1', title: 'Nền Tảng', icon: BookOpen, color: 'from-blue-500 to-cyan-500', items: ['Toán cao cấp', 'Lập trình cơ bản', 'Thuật toán'] },
              { year: 'Năm 2', title: 'Chuyên Sâu', icon: Code2, color: 'from-purple-500 to-blue-500', items: ['Cơ sở dữ liệu', 'Web development', 'OOP'] },
              { year: 'Năm 3', title: 'Chuyên Ngành', icon: Cpu, color: 'from-pink-500 to-purple-500', items: ['Chọn track: AI/Web', 'Framework', 'Thực tập'] },
              { year: 'Năm 4', title: 'Sẵn Sàng', icon: Rocket, color: 'from-orange-500 to-red-500', items: ['Đồ án tốt nghiệp', 'Chứng chỉ', 'Portfolio'] }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-xs font-bold text-blue-600 mb-1 uppercase">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
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

      {/* ===================== SECTION 5: MỨC LƯƠNG ===================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Đầu tư cho tương lai –<br />
              {/* FIX: đổi text-emerald-100 (quá nhạt trên nền trắng) → gradient text emerald */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 font-black">
                Thu hoạch xứng đáng
              </span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { role: 'Junior Developer', exp: '0–1 năm', salary: 15, max: 25, emoji: '👨‍💻' },
              { role: 'Mid Developer', exp: '2–3 năm', salary: 25, max: 45, emoji: '💻' },
              { role: 'Senior Developer', exp: '4–6 năm', salary: 45, max: 80, emoji: '🚀' },
              { role: 'AI/ML Engineer', exp: '3–5 năm', salary: 50, max: 100, emoji: '🤖' },
              { role: 'Cloud Architect', exp: '5+ năm', salary: 80, max: 150, emoji: '☁️' },
              { role: 'Tech Lead / CTO', exp: '7+ năm', salary: 100, max: 200, emoji: '👔' },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-emerald-50 border border-slate-200 hover:border-emerald-400/60 transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.role}</h4>
                        <p className="text-sm text-slate-500">{item.exp}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {/* FIX: đổi từ text-emerald-100 → text-emerald-600 (rõ trên nền sáng) */}
                      <div className="text-2xl font-black text-emerald-600">
                        {item.salary}–{item.max}M₫
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${(item.max / 200) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            💡 Số liệu tổng hợp từ TopDev, ITviec, VietnamWorks – 2024
          </p>
        </div>
      </section>

      {/* ===================== SECTION 6: TRƯỜNG ĐÀO TẠO ===================== */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Chọn đúng trường –<br />
              {/* FIX: đổi text-blue-100 → gradient text */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-black">
                Đúng hướng đi
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: '🏆 Top Tier',
                title: 'Nhóm Top (Cạnh tranh cao)',
                badgeColor: 'bg-amber-100 text-amber-700',
                schools: ['Bách Khoa Hà Nội', 'UIT – ĐHQGHN', 'ĐHKHTN TP.HCM', 'Bách Khoa TP.HCM']
              },
              {
                badge: '🎯 Chất lượng cao',
                title: 'Nhóm Chất lượng',
                badgeColor: 'bg-blue-100 text-blue-700',
                schools: ['FPT University', 'RMIT Việt Nam', 'Tôn Đức Thắng', 'Duy Tân']
              },
              {
                badge: '🌟 Đặc thù AI',
                title: 'Nhóm AI/Data',
                badgeColor: 'bg-purple-100 text-purple-700',
                schools: ['VinUniversity', 'NEU (Data Science)', 'Ngoại Thương (Digital)', 'Kinh tế Sài Gòn']
              }
            ].map((group, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white border-2 border-slate-200 hover:border-blue-500/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${group.badgeColor}`}>
                    {group.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.schools.map((school, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <MapPin size={16} className="text-blue-500 flex-shrink-0" />
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

      {/* ===================== SECTION 7: TESTIMONIALS ===================== */}
      {/* Nền dark → text sáng OK, giữ nguyên các màu này */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Họ đã thành công –<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Bạn thì sao?
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Từ sinh viên không biết gì về code, sau 4 năm tôi đang làm AI Engineer tại VinAI với mức lương 60M/tháng.',
                author: 'Nguyễn Minh Khôi',
                role: 'AI Engineer @ VinAI',
                age: '26 tuổi'
              },
              {
                quote: 'Tốt nghiệp Bách Khoa 2022, nhận offer từ 3 công ty trước khi ra trường. Hiện làm Senior Backend tại Shopee Singapore.',
                author: 'Trần Thu Hà',
                role: 'Backend Developer @ Shopee',
                age: '25 tuổi'
              },
              {
                quote: 'Cloud Computing là tương lai. Lấy chứng chỉ AWS năm 3 đại học, được tuyển vào FPT Software lương 35M.',
                author: 'Lê Hoàng Nam',
                role: 'Cloud Engineer @ FPT',
                age: '26 tuổi'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur border border-white/20 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-100 mb-6 leading-relaxed italic">"{item.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-bold text-white">{item.author}</p>
                    <p className="text-sm text-cyan-300">{item.role}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.age}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 8: SO SÁNH ===================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Tại sao CNTT & AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                Vượt Trội?
              </span>
            </h2>
          </AnimatedSection>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <th className="px-6 py-4 text-left font-bold text-slate-900 border-b-2 border-blue-200">Tiêu chí</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-600 border-b-2 border-blue-400 bg-blue-50/60">⚡ CNTT & AI</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-600 border-b-2 border-slate-200">Kỹ thuật khác</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-600 border-b-2 border-slate-200">Kinh tế</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criteria: 'Lương khởi điểm', cnit: '25–50M₫ 🏆', other: '8–15M₫', business: '8–12M₫' },
                  { criteria: 'Remote job', cnit: '⭐⭐⭐⭐⭐', other: '⭐⭐', business: '⭐⭐⭐' },
                  { criteria: 'Nhu cầu tuyển', cnit: '5.200+/tháng 🏆', other: '500+/tháng', business: '1.000+/tháng' },
                  { criteria: 'Cơ hội nước ngoài', cnit: '⭐⭐⭐⭐⭐', other: '⭐⭐⭐', business: '⭐⭐⭐' },
                  { criteria: 'Tốc độ tăng lương', cnit: '35%/năm 🏆', other: '10%/năm', business: '12%/năm' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.criteria}</td>
                    {/* FIX: thêm bg-blue-50/40 để phân biệt cột CNTT & AI */}
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50/40">{row.cnit}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row.other}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row.business}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 9: FAQ ===================== */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Các câu hỏi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Thường Gặp
              </span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'Tôi không giỏi Toán có học CNTT được không?',
                a: 'Được! Toán quan trọng nhưng không phải rào cản. Tư duy logic và kiên trì quan trọng hơn.'
              },
              {
                q: 'CNTT có cần học tiếng Anh không?',
                a: 'Rất cần! Tiếng Anh là công cụ thiết yếu – tài liệu, công việc, giao tiếp đều dùng tiếng Anh.'
              },
              {
                q: 'Học CNTT xong làm được những nghề gì?',
                a: 'Developer, AI Engineer, Data Scientist, Cloud Architect, Cybersecurity, UX/UI Designer, Product Manager...'
              },
              {
                q: 'Bao lâu để tìm được việc sau tốt nghiệp?',
                a: 'Trung bình 1–3 tháng nếu có portfolio tốt. Nhiều sinh viên nhận offer trước khi tốt nghiệp.'
              }
            ].map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <span className="text-lg text-blue-500 flex-shrink-0">❓</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 flex items-start gap-2">
                    <span className="text-lg text-green-500 flex-shrink-0">✅</span>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 10: CTA FINAL ===================== */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${(i * 31 + 17) % 100}%`,
                top: `${(i * 47 + 11) % 100}%`,
                animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.4}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Bắt đầu hành trình<br />
              {/* FIX: nền dark → text-cyan-300 thay vì text-cyan-100 */}
              <span className="text-cyan-300 font-black">công nghệ</span> của bạn<br />
              ngay hôm nay
            </h2>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Hàng nghìn sinh viên đã chọn CNTT & AI<br />
              và đang xây dựng sự nghiệp mơ ước.<br />
              <span className="font-bold text-white">Lượt tiếp theo là bạn.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-bold text-white rounded-2xl transition-all hover:scale-110 hover:shadow-2xl hover:shadow-blue-600/50 flex items-center justify-center gap-2 group text-lg">
                <Rocket size={24} />
                Xem lộ trình học ngay
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 font-bold rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg">
                <Heart size={24} />
                Tư vấn miễn phí
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <CheckCircle2 size={16} className="text-green-400" />
                🔒 Miễn phí 100%
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                ⭐ 4.9/5 từ 10.000+ học sinh
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Target size={16} className="text-blue-300" />
                🎯 Cập nhật chương trình 2025
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}