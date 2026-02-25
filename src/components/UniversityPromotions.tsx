import React, { useState, useRef, useEffect } from 'react';
import {
  GraduationCap,
  Trophy,
  Users,
  ArrowRight,
  Star,
  CheckCircle2,
  Globe,
  Briefcase,
  Zap,
  BookOpen,
  X,
  Calendar,
  Phone,
  MapPin,
  Search,
  Building2,
  Award,
  Sparkles,
  TrendingUp,
  Play
} from 'lucide-react';
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

// --- Types & Data ---

export type TabType = 'home' | 'documents' | 'universities' | 'calculator' | 'studypath' | 'news' | 'fpt-landing' | 'vnu-landing' | 'rmit-landing' | 'hust-landing' | 'neu-landing' | 'uit-landing' | 'ftu-landing' | 'hmu-landing' | 'hnue-landing' | 'vlu-landing' | 'hsu-landing' | 'uef-landing' | 'hutech-landing' | 'gdu-landing';

interface UniversityPromo {
  id: string;
  tabId?: TabType;
  name: string;
  slogan: string;
  description: string;
  fullDescription?: string;
  logoUrl?: string;
  imageUrl: string;
  colorFrom: string;
  colorTo: string;
  features: string[];
  stats: { label: string; value: string }[];
  ctaText: string;
  tags: string[];
  deadline: string;
  gallery?: string[];
}

const FEATURED_UNIVERSITIES: UniversityPromo[] = [
  {
    id: 'rmit',
    tabId: 'rmit-landing',
    name: 'RMIT University Vietnam',
    slogan: 'Sẵn sàng cho sự nghiệp toàn cầu',
    description: 'Trải nghiệm nền giáo dục đẳng cấp quốc tế ngay tại Việt Nam. Cơ sở vật chất chuẩn Úc và mạng lưới kết nối doanh nghiệp rộng khắp.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxMzM1MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-red-600',
    colorTo: 'to-pink-600',
    features: ['Bằng cấp chuẩn Úc', 'Môi trường 100% Tiếng Anh', 'Trao đổi sinh viên toàn cầu'],
    stats: [
      { label: 'Việc làm', value: '96%' },
      { label: 'Quốc gia', value: '50+' },
      { label: 'Ranking', value: 'Top 1%' },
    ],
    ctaText: 'Khám phá RMIT',
    tags: ['Quốc tế', 'Thiết kế', 'Kinh doanh'],
    deadline: '30/08/2026',
    gallery: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'hust',
    tabId: 'hust-landing',
    name: 'Đại học Bách khoa Hà Nội',
    slogan: 'Ngôi nhà của những Kỹ sư tương lai',
    description: 'Cái nôi đào tạo kỹ thuật hàng đầu Việt Nam. Tiên phong trong nghiên cứu khoa học, đổi mới sáng tạo và chuyển giao công nghệ.',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTMzNTIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-red-700',
    colorTo: 'to-orange-700',
    features: ['Đào tạo Kỹ sư chất lượng cao', 'Hợp tác doanh nghiệp chặt chẽ', 'Phòng Lab hiện đại'],
    stats: [
      { label: 'Việc làm', value: '98%' },
      { label: 'Nghiên cứu', value: '#1 VN' },
      { label: 'Đối tác', value: '200+' },
    ],
    ctaText: 'Trở thành Kỹ sư BK',
    tags: ['Kỹ thuật', 'Công nghệ', 'Nghiên cứu'],
    deadline: '15/07/2026',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'neu',
    tabId: 'neu-landing',
    name: 'Đại học Kinh tế Quốc dân',
    slogan: 'Dẫn đầu tư duy - Kiến tạo tương lai',
    description: 'Trường đại học trọng điểm quốc gia về đào tạo kinh tế, quản lý và quản trị kinh doanh. Môi trường năng động, hội nhập quốc tế.',
    imageUrl: 'https://images.unsplash.com/photo-1666243035395-9b7853cecc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMGVjb25vbWljcyUyMHVuaXZlcnNpdHklMjB2aWV0bmFtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxNDc5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-blue-800',
    colorTo: 'to-indigo-900',
    features: ['Top 1 đào tạo Kinh tế', 'Mạng lưới Alumni quyền lực', 'Cơ sở vật chất hiện đại'],
    stats: [
      { label: 'Việc làm', value: '98%' },
      { label: 'Doanh nghiệp', value: '500+' },
      { label: 'Ranking', value: '#1 Kinh tế' },
    ],
    ctaText: 'Trở thành SV NEU',
    tags: ['Kinh tế', 'Quản trị', 'Tài chính'],
    deadline: '20/07/2026',
    gallery: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'uit',
    tabId: 'uit-landing',
    name: 'Đại học Công nghệ Thông tin',
    slogan: 'Bứt phá trong kỷ nguyên số',
    description: 'Trường đại học trọng điểm về đào tạo CNTT và Truyền thông. Môi trường học tập năng động, sáng tạo với hệ sinh thái công nghệ chuẩn quốc tế.',
    imageUrl: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwZGFyayUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzcxNDgwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-cyan-600',
    colorTo: 'to-blue-700',
    features: ['Chuyên sâu về AI & Security', 'Đối tác của Google, Microsoft', 'Thực tập ngay từ năm nhất'],
    stats: [
      { label: 'Việc làm', value: '100%' },
      { label: 'Lương KĐ', value: '$1000+' },
      { label: 'Giải thưởng', value: 'Top 1' },
    ],
    ctaText: 'Trở thành SV UIT',
    tags: ['Công nghệ', 'AI', 'Cyber Security'],
    deadline: '25/07/2026',
    gallery: [
      'https://images.unsplash.com/photo-1565687981296-535f09db714e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'fpt',
    tabId: 'fpt-landing',
    name: 'Đại học FPT',
    slogan: 'Khát vọng đổi thay',
    description: 'Trường đại học tiên phong đào tạo Kỹ sư CNTT theo chuẩn quốc tế. Chú trọng ngoại ngữ, kỹ năng mềm và thực tiễn doanh nghiệp.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c54be3852f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTMzNTIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-orange-500',
    colorTo: 'to-orange-600',
    features: ['Thực tập tại doanh nghiệp (OJT)', 'Giáo trình chuẩn quốc tế', 'Campus xanh hiện đại'],
    stats: [
      { label: 'Việc làm', value: '100%' },
      { label: 'Quốc tế', value: '15%' },
      { label: 'Lương KĐ', value: '$$$' },
    ],
    ctaText: 'Săn học bổng FPT',
    tags: ['CNTT', 'Kinh tế', 'Ngôn ngữ'],
    deadline: '20/08/2026',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'vnu',
    tabId: 'vnu-landing',
    name: 'Đại học Quốc gia Hà Nội',
    slogan: 'Đạt đỉnh cao tri thức',
    description: 'Trung tâm đào tạo, nghiên cứu khoa học và chuyển giao công nghệ đa ngành, đa lĩnh vực chất lượng cao hàng đầu đất nước.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwdmlldG5hbXxlbnwxfHx8fDE3NzEzMzUyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    colorFrom: 'from-blue-700',
    colorTo: 'to-indigo-800',
    features: ['Đa ngành đa lĩnh vực', 'Đội ngũ GS, PGS đầu ngành', 'Cơ hội nghiên cứu chuyên sâu'],
    stats: [
      { label: 'Ranking', value: '#1 VN' },
      { label: 'Ngành học', value: '100+' },
      { label: 'Nghiên cứu', value: 'Top 1' },
    ],
    ctaText: 'Khám phá VNU',
    tags: ['Đa ngành', 'Hàn lâm', 'Uy tín'],
    deadline: '10/08/2026',
    gallery: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];

// --- Helpers ---

const getIconColorClass = (colorFrom: string) => {
  if (colorFrom.includes('blue')) return 'text-blue-500';
  if (colorFrom.includes('slate')) return 'text-slate-500';
  if (colorFrom.includes('purple')) return 'text-purple-500';
  if (colorFrom.includes('red')) return 'text-red-500';
  if (colorFrom.includes('orange')) return 'text-orange-500';
  return 'text-blue-500';
};

// --- Sub-components ---

const UniversityModal = ({ uni, onClose, onNavigate }: { uni: UniversityPromo; onClose: () => void; onNavigate: (tab: TabType) => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95 slide-in-from-bottom-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Visuals (40%) */}
        <div className="md:w-2/5 relative h-64 md:h-auto min-h-[400px]">
          <div className={`absolute inset-0 bg-gradient-to-br ${uni.colorFrom} ${uni.colorTo} opacity-40 mix-blend-multiply z-10`} />
          <ImageWithFallback src={uni.imageUrl} alt={uni.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-3 border border-white/30 uppercase tracking-widest">
              Tuyển sinh 2026
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-2 text-white">{uni.name}</h2>
            <p className="text-white/90 italic text-sm border-l-2 border-white/50 pl-3">{uni.slogan}</p>
          </div>
        </div>

        {/* Right Side: Content (60%) */}
        <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto bg-white">
          <div className="flex flex-wrap gap-2 mb-6">
            {uni.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" /> Giới thiệu chung
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {uni.fullDescription || uni.description}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {uni.stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100 group hover:border-blue-100 hover:shadow-md transition-all">
                <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${uni.colorFrom} ${uni.colorTo}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase font-bold mt-1 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Admission Info */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100/50">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" /> Thông tin tuyển sinh
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-blue-200/50">
                <span className="text-slate-600 font-medium">Hạn nộp hồ sơ</span>
                <span className="font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">{uni.deadline}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Hình thức xét tuyển</span>
                <span className="font-bold text-slate-800">Học bạ & Điểm thi THPT & ĐGNL</span>
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                if (uni.tabId) {
                  onNavigate(uni.tabId);
                  onClose();
                }
              }}
              className={`flex-1 py-4 rounded-xl bg-gradient-to-r ${uni.colorFrom} ${uni.colorTo} text-white font-bold text-base shadow-xl shadow-blue-200 hover:shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1`}
            >
              <Zap className="w-5 h-5" /> {uni.ctaText}
            </button>
            <button className="px-6 py-4 rounded-xl border-2 border-slate-100 hover:bg-slate-50 font-bold text-base text-slate-600 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Nhận tư vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UniversityCard = ({ uni, index, onOpen, onNavigate }: { uni: UniversityPromo; index: number; onOpen: (uni: UniversityPromo) => void; onNavigate: (tab: TabType) => void }) => {
  return (
    <div
      className="group relative bg-white/90 backdrop-blur-sm rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-slate-100 hover:border-blue-200 h-full flex flex-col cursor-pointer transform hover:-translate-y-3 hover:rotate-[0.5deg]"
      onClick={() => onOpen(uni)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] -z-10 blur-sm"></div>

      {/* Image Header */}
      <div className="relative h-56 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${uni.colorFrom} ${uni.colorTo} opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10 mix-blend-overlay`} />
        <ImageWithFallback
          src={uni.imageUrl}
          alt={uni.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

        {/* Floating badge with animation */}
        <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider group-hover:scale-110 transition-transform">
          <GraduationCap className="w-3 h-3 text-blue-600 animate-pulse" />
          Tuyển sinh 2026
        </div>

        {/* Stats overlay on hover */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {uni.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs shadow-lg">
              <span className="font-bold text-slate-900">{stat.value}</span>
              <span className="text-slate-500 ml-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 flex-1 flex flex-col relative bg-white">
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(59,130,246,0.05) 50%, transparent 75%)', backgroundSize: '200% 100%', animation: 'shimmer 3s infinite' }}></div>

        {/* Floating Logo Placeholder - in real app would be actual logo */}
        <div className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${uni.colorFrom} ${uni.colorTo} shadow-xl flex items-center justify-center text-white font-bold text-xl border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          {uni.name.charAt(0)}
        </div>

        <div className="mt-6 mb-2 relative z-10">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all line-clamp-1">
            {uni.name}
          </h3>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1 flex items-center gap-2">
            <Sparkles size={10} className="text-yellow-500" />
            {uni.tags.join(' • ')}
          </p>
        </div>

        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed relative z-10">
          {uni.description}
        </p>

        {/* Key Features List - Enhanced */}
        <div className="space-y-3 mb-8 relative z-10">
          {uni.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium group/feat hover:translate-x-2 transition-transform">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${uni.colorFrom.replace('from-', 'from-').replace('-600', '-100').replace('-700', '-100').replace('-800', '-100')} ${uni.colorTo.replace('to-', 'to-').replace('-600', '-100').replace('-700', '-100').replace('-800', '-100')} flex items-center justify-center shrink-0 group-hover/feat:scale-110 transition-transform`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${getIconColorClass(uni.colorFrom)}`} />
              </div>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* CTA - Enhanced */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
          <span className="text-xs font-bold text-red-500 bg-gradient-to-r from-red-50 to-orange-50 px-3 py-1.5 rounded-full border border-red-100 flex items-center gap-1">
            <Calendar size={10} /> Hạn: {uni.deadline}
          </span>
          <button
            className={`w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-blue-300/50 group-hover:scale-110 group-hover:rotate-[-15deg]`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSpotlight = ({ onOpen, onNavigate }: { onOpen: (uni: UniversityPromo) => void; onNavigate: (tab: TabType) => void }) => {
  const spotlightUni = FEATURED_UNIVERSITIES[0]; // RMIT

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden mb-24 shadow-2xl group cursor-pointer border-2 border-slate-200 hover:border-blue-300 transition-colors">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={spotlightUni.imageUrl}
          alt={spotlightUni.name}
          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />

        {/* Animated particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-40" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-30" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-5 py-2 rounded-full text-xs font-bold mb-8 shadow-xl shadow-red-900/50 uppercase tracking-widest group-hover:scale-110 transition-transform"
          >
            <Trophy className="w-4 h-4 animate-pulse" />
            Đối tác chiến lược
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">
            RMIT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 animate-gradient bg-[length:200%_auto]">University</span>
          </h2>

          <p className="text-slate-300 text-xl mb-10 max-w-xl leading-relaxed font-light">
            Tiên phong giáo dục chuẩn Úc tại Việt Nam. Trang bị tư duy toàn cầu cho thế hệ lãnh đạo tương lai.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (spotlightUni.tabId) onNavigate(spotlightUni.tabId);
              }}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-500 hover:to-pink-500 transition-all shadow-xl shadow-red-900/30 flex items-center gap-2 hover:-translate-y-2 hover:shadow-2xl group/btn"
            >
              <Zap className="w-5 h-5 group-hover/btn:animate-pulse" /> Khám phá ngay
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen(spotlightUni);
              }}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2 hover:-translate-y-1 group/btn2"
            >
              <Play size={18} className="group-hover/btn2:scale-110 transition-transform" /> Xem chi tiết
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-slate-300 text-sm font-medium border-t border-white/10 pt-8 max-w-lg">
            {[
              { value: '96%', label: 'Có việc làm' },
              { value: '50+', label: 'Quốc gia' },
              { value: 'Top 1%', label: 'Thế giới' },
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col gap-1 group/stat hover:scale-110 transition-transform cursor-default">
                  <span className="text-3xl font-bold text-white group-hover/stat:text-red-400 transition-colors">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</span>
                </div>
                {i < 2 && <div className="w-px h-10 bg-white/20"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Export ---

interface UniversityPromotionsProps {
  setActiveTab: (tab: TabType) => void;
}

export const UniversityPromotions = ({ setActiveTab }: UniversityPromotionsProps) => {
  const [selectedUni, setSelectedUni] = useState<UniversityPromo | null>(null);
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

      {/* Decorative shapes */}
      <div className="absolute top-40 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-60 right-40 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-30" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

      {/* Rotating ring */}
      <div className="absolute top-1/2 right-20 w-40 h-40 border-2 border-dashed border-blue-200 rounded-full animate-spin opacity-20" style={{ animationDuration: '25s' }}></div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto relative z-10"
      >

        {/* Section Header - Enhanced */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 shadow-lg shadow-blue-100/50 border border-blue-200/50">
            <Globe className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} /> Mạng lưới giáo dục
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Đối Tác <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_auto]">Chiến Lược</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kết nối trực tiếp với 200+ trường đại học hàng đầu, mang đến cơ hội học bổng và thông tin tuyển sinh chính xác nhất.
          </p>

          {/* Quick stats */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { icon: <Building2 size={18} />, value: '200+', label: 'Trường đối tác' },
              { icon: <Award size={18} />, value: '50+', label: 'Học bổng' },
              { icon: <TrendingUp size={18} />, value: '$500M', label: 'Giá trị HB' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-lg font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Spotlight */}
        <HeroSpotlight onOpen={setSelectedUni} onNavigate={setActiveTab} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_UNIVERSITIES.slice(1).map((uni, index) => (
            <UniversityCard
              key={uni.id}
              uni={uni}
              index={index}
              onOpen={setSelectedUni}
              onNavigate={setActiveTab}
            />
          ))}
        </div>

        {/* CTA Banner - Enhanced */}
        <div className="mt-32 relative rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-12 md:p-20 text-center group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center group-hover:opacity-15 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>

          {/* Animated shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-bold mb-6 text-blue-300 group-hover:scale-110 transition-transform">
              <Award size={16} className="animate-pulse" /> Tư vấn miễn phí 100%
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Bạn đang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">băn khoăn</span> chọn trường?</h3>
            <p className="text-slate-300 mb-10 text-xl max-w-2xl mx-auto">
              Để lại thông tin để được chuyên gia tư vấn lộ trình ôn thi và xét tuyển phù hợp nhất với năng lực của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1 group/input">
                <input
                  type="text"
                  placeholder="Nhập số điện thoại của bạn..."
                  className="w-full px-6 py-4 rounded-2xl text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/50 pl-12 bg-white shadow-xl"
                />
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-focus-within/input:opacity-20 transition-opacity pointer-events-none"></div>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/50 hover:-translate-y-1 hover:shadow-2xl whitespace-nowrap flex items-center gap-2 group/btn">
                <Sparkles size={18} className="group-hover/btn:animate-spin" style={{ animationDuration: '1s' }} />
                Đăng ký ngay
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> Bảo mật thông tin</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> Phản hồi trong 24h</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> 100% miễn phí</span>
            </div>
          </div>
        </div>

        {/* Modal Overlay */}
        {selectedUni && (
          <UniversityModal uni={selectedUni} onClose={() => setSelectedUni(null)} onNavigate={setActiveTab} />
        )}

      </div>
    </section>
  );
};