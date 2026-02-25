import { ArrowRight, Search } from 'lucide-react';

type TabType = 'home' | 'documents' | 'universities' | 'calculator' | 'studypath' | 'news';

interface HeroSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export function HeroSection({ setActiveTab }: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1628887590815-2860da1c2900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY5MzU1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <span className="animate-pulse">🔥</span>
                Mùa tuyển sinh 2026
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Định Hướng
              <span className="block text-yellow-400 mt-2">Tương Lai Rực Rỡ</span>
            </h2>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Hệ thống thông tin tuyển sinh đại học toàn diện nhất Việt Nam. 
              Tra cứu điểm chuẩn, tài liệu ôn luyện miễn phí và công cụ gợi ý ngành học 
              thông minh giúp bạn tự tin bước vào đại học.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => setActiveTab('calculator')}
                className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                Tính Điểm & Gợi Ý Ngành
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setActiveTab('universities')}
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Tra Điểm Chuẩn
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Cập nhật 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">100% Miễn phí</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">200+ Trường ĐH</span>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-1">
                <div className="text-5xl mb-3">🎓</div>
                <div className="text-3xl font-bold mb-1">200+</div>
                <div className="text-blue-200 text-sm">Trường Đại Học</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-1 mt-8">
                <div className="text-5xl mb-3">📚</div>
                <div className="text-3xl font-bold mb-1">10K+</div>
                <div className="text-blue-200 text-sm">Tài Liệu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-1 -mt-4">
                <div className="text-5xl mb-3">🎯</div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-blue-200 text-sm">Ngành Học</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-1 mt-4">
                <div className="text-5xl mb-3">👥</div>
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-blue-200 text-sm">Học Sinh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </div>
  );
}