import React, { useRef, useEffect, useState } from 'react';
import { Quote, Star, MessageCircle, Heart, ThumbsUp, Sparkles, Users, TrendingUp, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thùy Linh',
    role: 'Sinh viên ĐH Ngoại Thương',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'Nhờ website này mà mình đã tìm được đúng ngành học yêu thích và trúng tuyển vào Ngoại Thương. Các bài thi thử rất sát với đề thi thật! Giao diện cũng rất đẹp và dễ sử dụng.',
    rating: 5,
    likes: 124
  },
  {
    id: 2,
    name: 'Trần Minh Tuấn',
    role: 'Tân sinh viên Bách Khoa',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'Công cụ tính điểm và gợi ý nguyện vọng cực kỳ hữu ích. Mình đã tránh được việc đặt nguyện vọng sai lầm nhờ sự tư vấn từ hệ thống. Cảm ơn đội ngũ admin rất nhiều!',
    rating: 5,
    likes: 89
  },
  {
    id: 3,
    name: 'Lê Bảo Châu',
    role: 'Học sinh THPT Chuyên Sư Phạm',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'Kho tài liệu miễn phí khổng lồ giúp mình tiết kiệm rất nhiều chi phí đi học thêm. Đặc biệt là các đề thi thử có lời giải chi tiết, giúp mình tự học hiệu quả hơn hẳn.',
    rating: 5,
    likes: 215
  },
  {
    id: 4,
    name: 'Hoàng Văn Nam',
    role: 'Sinh viên ĐH FPT',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'Mình rất thích phần lộ trình ôn thi cá nhân hóa. Nó giúp mình biết mình đang yếu ở đâu và cần tập trung vào phần nào. Rất đáng để thử nhé các bạn 2k8!',
    rating: 4,
    likes: 56
  },
  {
    id: 5,
    name: 'Phạm Thu Hà',
    role: 'Học sinh THPT Yên Hòa',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'Giao diện đẹp, mượt mà. Thích nhất là tính năng thi thử online có bấm giờ y như thật. Giúp mình rèn luyện tâm lý phòng thi rất tốt.',
    rating: 5,
    likes: 102
  },
  {
    id: 6,
    name: 'Đặng Quang Huy',
    role: 'Sinh viên ĐH Kinh Tế Quốc Dân',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    content: 'Một nền tảng tuyệt vời cho học sinh cấp 3. Đầy đủ mọi thứ từ tài liệu, tin tức đến tư vấn chọn trường. 10 điểm không có nhưng!',
    rating: 5,
    likes: 178
  }
];

export function TestimonialsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-300 rounded-full blur-[150px] -translate-x-1/2 opacity-40 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[150px] translate-x-1/2 opacity-40 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-pink-100/30 to-blue-100/30 rounded-full blur-[200px] opacity-50"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 right-10 w-32 h-32 border-2 border-dashed border-slate-200 rounded-full animate-spin opacity-20" style={{ animationDuration: '20s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 font-bold text-xs uppercase tracking-wider mb-4 shadow-lg shadow-orange-100/50 border border-orange-200/50">
            <Heart className="w-4 h-4 animate-pulse" fill="currentColor" /> Wall of Love
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Được Tin Dùng Bởi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_auto]">500,000+</span> Học Sinh
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Hàng nghìn câu chuyện thành công đã được viết nên từ đây. Hãy để chúng tôi đồng hành cùng bạn trên con đường chinh phục cánh cổng đại học.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { icon: <Users size={20} />, value: '500K+', label: 'Học sinh' },
              { icon: <Award size={20} />, value: '98%', label: 'Hài lòng' },
              { icon: <TrendingUp size={20} />, value: '85%', label: 'Đỗ NV1' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white/80 backdrop-blur-sm p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-[0.5deg] relative overflow-hidden flex flex-col ${index === 3 || index === 0 ? 'lg:row-span-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 50}ms` }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/30 group-hover:to-pink-50/50 transition-all duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full -mr-10 -mt-10 opacity-30 group-hover:scale-150 group-hover:opacity-50 transition-all duration-700"></div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)', backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }}></div>

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white p-0.5 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-blue-100 to-purple-100">
                    <ImageWithFallback src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-700 transition-colors">{item.name}</h4>
                    <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wide mt-1">{item.role}</p>
                  </div>
                </div>
                <Quote className="text-slate-200 w-12 h-12 group-hover:text-blue-200 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 transition-all duration-300 ${i < item.rating ? 'text-yellow-400 fill-yellow-400 group-hover:scale-125' : 'text-slate-200'}`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-base mb-6 flex-1 italic relative z-10 group-hover:text-slate-700 transition-colors">
                "{item.content}"
              </p>

              <div className="mt-auto flex items-center gap-6 text-sm text-slate-400 font-medium relative z-10 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5 hover:text-red-500 transition-all cursor-pointer hover:scale-110 group/like">
                  <Heart className="w-4 h-4 group-hover/like:animate-ping" /> {item.likes}
                </span>
                <span className="flex items-center gap-1.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110">
                  <ThumbsUp className="w-4 h-4" /> Hữu ích
                </span>
                <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 font-bold flex items-center gap-1">
                  <Sparkles size={12} /> Xác thực
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Logos Marquee */}
        <div className="mt-24 border-t border-slate-200 pt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent pointer-events-none"></div>
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-10 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-slate-200"></span>
            Được nhắc đến trên
            <span className="w-12 h-px bg-slate-200"></span>
          </p>
          <div className="flex justify-center gap-16 flex-wrap">
            {[
              { name: 'VTV7', href: 'https://vtv.vn/video/thuc-day-cung-vtv7-31-12-2019-413625.htm' },
              { name: 'Dantri', href: 'https://dantri.com.vn/' },
              { name: 'VnExpress', href: 'https://vnexpress.net/' },
              { name: 'Kenh14', href: 'https://kenh14.vn/' },
              { name: 'TuoiTre', href: 'https://tuoitre.vn/' }
            ].map((brand, i) => (
              <a
                key={i}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black text-blue-900 hover:text-blue hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}