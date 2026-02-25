import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MessageSquare, Search, Sparkles, HelpCircle, ArrowRight, Zap, Mail, Phone, Star, CheckCircle } from 'lucide-react';

// Custom hook for scroll animation
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isAlreadyVisible) {
      setIsInView(true);
      return;
    }

    setIsInView(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

const faqs = [
  {
    category: 'Tuyển sinh',
    question: 'Khi nào có lịch thi THPT Quốc gia 2026 chính thức?',
    answer: 'Hiện tại Bộ GD&ĐT chưa công bố lịch chính thức, nhưng dự kiến kỳ thi sẽ diễn ra vào cuối tháng 6/2026. Chúng tôi sẽ cập nhật ngay khi có thông báo mới nhất tại mục Tin Tức.'
  },
  {
    category: 'Hồ sơ',
    question: 'Tôi có thể đăng ký bao nhiêu nguyện vọng xét tuyển?',
    answer: 'Theo quy chế hiện hành, thí sinh được đăng ký không giới hạn số lượng nguyện vọng. Các nguyện vọng được xếp theo thứ tự ưu tiên từ cao xuống thấp (nguyện vọng 1 là ưu tiên cao nhất).'
  },
  {
    category: 'Công cụ',
    question: 'Làm thế nào để biết mình đủ điểm vào trường nào?',
    answer: 'Bạn hãy sử dụng tính năng "Tính điểm & Gợi ý" trên website. Chỉ cần nhập điểm thi thử hoặc điểm học bạ, hệ thống AI sẽ phân tích và gợi ý các trường phù hợp với tỷ lệ đỗ cao nhất.'
  },
  {
    category: 'Tài liệu',
    question: 'Tài liệu ôn thi trên website có miễn phí không?',
    answer: 'Có! 100% tài liệu, đề thi thử và video bài giảng trên website đều hoàn toàn miễn phí. Chúng tôi cam kết hỗ trợ cộng đồng học sinh ôn thi hiệu quả nhất.'
  },
  {
    category: 'Tài khoản',
    question: 'Làm sao để lưu lại kết quả thi thử?',
    answer: 'Bạn cần đăng ký tài khoản thành viên (miễn phí). Sau khi đăng nhập, mọi kết quả làm bài và lịch sử ôn tập sẽ được lưu tự động vào "Hồ sơ cá nhân".'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const { ref: sectionRef, isInView } = useInView();

  const filteredFaqs = faqs.filter(f =>
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[150px] opacity-40 -translate-x-1/2 translate-y-1/2"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column: Sticky Header & Search */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4 shadow-lg shadow-blue-100/50 border border-blue-200/50">
              <HelpCircle className="w-4 h-4 animate-pulse" /> Help Center
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Câu hỏi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">thường gặp</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Bạn có thắc mắc? Chúng tôi ở đây để giải đáp mọi vấn đề của bạn về tuyển sinh và ôn thi.
            </p>

            <div className="relative mb-8 group">
              <input
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all text-slate-900 shadow-lg group-hover:shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none"></div>
            </div>

            {/* Enhanced Chat CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 group-hover:scale-150 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-xl -translate-x-1/2 translate-y-1/2"></div>

              {/* Animated pattern */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)', backgroundSize: '200% 100%', animation: 'shimmer 3s infinite' }}></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Chưa tìm thấy câu trả lời?</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn 24/7.
                </p>
                <button className="flex items-center gap-2 font-bold text-sm bg-white text-blue-700 px-5 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group/btn">
                  Chat ngay <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Online indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs text-blue-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>5 tư vấn viên online</span>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <Phone className="w-5 h-5 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xs text-slate-500">Hotline</div>
                <div className="text-sm font-bold text-slate-800">1800 1234</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <Mail className="w-5 h-5 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xs text-slate-500">Email</div>
                <div className="text-sm font-bold text-slate-800">support@...</div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`group rounded-3xl border-2 transition-all duration-500 hover:-translate-y-1 ${isOpen
                        ? 'bg-white border-blue-300 shadow-xl shadow-blue-100/50'
                        : 'bg-white/80 backdrop-blur-sm border-slate-100 hover:border-blue-200 hover:shadow-lg'
                        }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <button
                        className="w-full flex justify-between items-start p-6 text-left"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <div className="flex-1 pr-8">
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                            }`}>
                            <CheckCircle size={10} /> {faq.category}
                          </span>
                          <h3 className={`text-lg font-bold transition-all duration-300 ${isOpen ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${isOpen ? 'bg-gradient-to-br from-blue-500 to-purple-600 rotate-180' : 'bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-purple-100'
                          }`}>
                          <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-500 group-hover:text-blue-600'}`} />
                        </div>
                      </button>

                      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <div className="px-6 pb-8 pt-0 text-slate-600 leading-relaxed text-base border-t border-dashed border-slate-200 mt-2 pt-6">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border border-blue-100/50">
                              {faq.answer}
                            </div>
                            <div className="mt-4 flex items-center gap-4 text-sm">
                              <span className="text-slate-400">Câu trả lời này hữu ích?</span>
                              <button className="flex items-center gap-1 text-slate-500 hover:text-green-500 transition-colors px-3 py-1 rounded-full hover:bg-green-50">
                                <CheckCircle size={14} /> Có
                              </button>
                              <button className="flex items-center gap-1 text-slate-500 hover:text-red-500 transition-colors px-3 py-1 rounded-full hover:bg-red-50">
                                <Star size={14} /> Cần cải thiện
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-dashed border-slate-200 shadow-inner">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-slate-400" />
                  </div>
                  <p className="text-slate-500 font-bold text-lg mb-2">Không tìm thấy kết quả nào</p>
                  <p className="text-slate-400 text-sm">Thử tìm kiếm với từ khóa khác</p>
                </div>
              )}
            </div>

            {/* FAQ stats */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100/50 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">50+ câu hỏi</div>
                  <div className="text-sm text-slate-500">Được trả lời chi tiết</div>
                </div>
              </div>
              <button className="px-6 py-3 bg-white rounded-xl text-sm font-bold text-blue-600 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Xem tất cả FAQ <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}