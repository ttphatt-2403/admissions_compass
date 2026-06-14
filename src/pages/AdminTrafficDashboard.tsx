import { ExternalLink, BarChart2, Users, Eye, TrendingUp, MousePointerClick } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ADMIN_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;600&display=swap');
`;

const GA4_URL = 'https://analytics.google.com/analytics/web/#/p472895901/reports/intelligenthome';
const GA4_PROPERTY_ID = 'G-LBDF43ZRSD';

function LinkCard({
  icon, title, desc, href, color,
}: { icon: React.ReactNode; title: string; desc: string; href: string; color: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="rounded-2xl p-5 border flex items-start gap-4 transition-all hover:scale-[1.02] cursor-pointer group"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
        style={{ background: `${color}22` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-bold text-sm" style={{ color: '#e2d9f3' }}>{title}</p>
          <ExternalLink size={12} style={{ color: 'rgba(196,181,253,0.4)' }} />
        </div>
        <p className="text-xs mt-1" style={{ color: 'rgba(196,181,253,0.5)' }}>{desc}</p>
      </div>
    </a>
  );
}

export default function AdminTrafficDashboard() {
  const { user, isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(160deg,#06040f,#0e0627,#0b1033)' }}>
        <p style={{ color: 'rgba(251,113,133,0.8)', fontFamily: "'Cinzel',serif" }}>Không có quyền truy cập</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(160deg,#06040f 0%,#0e0627 35%,#140a35 65%,#0b1033 100%)' }}>
      <style>{ADMIN_STYLES}</style>

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{ width: i % 5 === 0 ? 2 : 1, height: i % 5 === 0 ? 2 : 1, opacity: 0.03 + (i % 7) * 0.04, top: `${(i * 13 + 5) % 100}%`, left: `${(i * 17 + 7) % 100}%` }} />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(15,12,41,0.8)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[.25em] uppercase mb-0.5"
              style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Admin · Traffic Analytics</p>
            <h1 className="font-black" style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.1rem' }}>
              Lượng Truy Cập Website
            </h1>
          </div>
          <span className="text-xs hidden sm:block" style={{ color: 'rgba(196,181,253,0.5)' }}>{user?.email}</span>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* GA4 Badge */}
        <div className="rounded-2xl p-6 border flex items-center gap-4"
          style={{ background: 'rgba(251,191,36,0.05)', borderColor: 'rgba(201,168,76,0.2)' }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(201,168,76,0.15)' }}>
            <BarChart2 size={24} style={{ color: '#fbbf24' }} />
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: '#fbbf24', fontFamily: "'Cinzel',serif" }}>
              Google Analytics 4 đang hoạt động
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(196,181,253,0.6)' }}>
              Measurement ID: <span className="font-mono font-bold" style={{ color: '#c084fc' }}>{GA4_PROPERTY_ID}</span>
              {' '}· Mỗi lần user đổi tab đều được ghi nhận tự động
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Xem báo cáo trên Google Analytics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LinkCard
              icon={<TrendingUp size={20} />}
              title="Tổng quan (Overview)"
              desc="Lượt xem, sessions, người dùng mới hôm nay và 7 ngày qua"
              href="https://analytics.google.com/analytics/web/#/p472895901/reports/intelligenthome"
              color="#4ade80"
            />
            <LinkCard
              icon={<Eye size={20} />}
              title="Trang phổ biến (Pages)"
              desc="Trang nào được xem nhiều nhất, thời gian ở lại trung bình"
              href="https://analytics.google.com/analytics/web/#/p472895901/reports/explorer?params=_u..nav%3Dmaui-landing-page"
              color="#c084fc"
            />
            <LinkCard
              icon={<Users size={20} />}
              title="Người dùng (Audience)"
              desc="Thiết bị, trình duyệt, vị trí địa lý, người dùng mới vs quay lại"
              href="https://analytics.google.com/analytics/web/#/p472895901/reports/explorer?params=_u..nav%3Dmaui-user-explorer"
              color="#38bdf8"
            />
            <LinkCard
              icon={<MousePointerClick size={20} />}
              title="Real-time"
              desc="Đang có bao nhiêu người truy cập ngay lúc này"
              href="https://analytics.google.com/analytics/web/#/p472895901/realtime/overview"
              color="#fb7185"
            />
          </div>
        </div>

        {/* Embed realtime report */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Mở Google Analytics Console</h2>
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold transition-all hover:scale-[1.01] cursor-pointer"
            style={{
              background: 'linear-gradient(135deg,rgba(201,168,76,0.2),rgba(251,191,36,0.1))',
              border: '1px solid rgba(201,168,76,0.35)',
              color: '#fbbf24',
              fontFamily: "'Cinzel',serif",
            }}>
            <ExternalLink size={18} />
            Mở Google Analytics Dashboard
          </a>
        </div>

        {/* Info box */}
        <div className="rounded-2xl p-5 border space-y-3"
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(196,181,253,0.4)' }}>
            Dữ liệu đang được thu thập
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs" style={{ color: 'rgba(196,181,253,0.6)' }}>
            {[
              'Lượt xem theo tab/trang',
              'Sessions & người dùng mới',
              'Thiết bị (mobile/desktop)',
              'Trình duyệt & OS',
              'Nguồn truy cập (referrer)',
              'UTM campaign/source',
              'Thời gian ở lại trang',
              'Tỉ lệ thoát (bounce rate)',
            ].map(item => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#4ade80' }} />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
