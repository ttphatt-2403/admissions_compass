import { useState, useEffect } from 'react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts';
import {
  Eye, Users, Clock, TrendingUp, RefreshCw, Monitor, Smartphone, Tablet,
} from 'lucide-react';
import { collection, doc, getDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

const ADMIN_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;600&display=swap');
`;

const CHART_COLORS = ['#c084fc', '#38bdf8', '#4ade80', '#fbbf24', '#fb7185', '#a78bfa', '#34d399'];

// Map page key to display name
const PAGE_LABELS: Record<string, string> = {
  home: 'Trang Chủ', documents: 'Tài Liệu', universities: 'Điểm Chuẩn',
  calculator: 'Tính Điểm', community: 'Cộng Đồng', riasec: 'RIASEC',
  numerology: 'Thần Số Học', chatbot: 'AI Tư Vấn',
};
function pageLabel(key: string) {
  return PAGE_LABELS[key] ?? key.replace(/-landing$/, '').toUpperCase();
}

const WEEKDAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

interface Overview { totalViews: number; totalSessions: number }
interface DailyDoc  { views: number; sessions: number; hours?: Record<string, number>; weekdays?: Record<string, number>; pages?: Record<string, number>; devices?: Record<string, number> }
interface PageDoc   { views: number; sessions: number }

function StatCard({ icon, label, value, sub, color }: { icon: React.ReactNode; label: string; value: string | number; sub?: string; color: string }) {
  return (
    <div className="rounded-2xl p-5 border flex items-center gap-4"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}22` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(196,181,253,0.5)' }}>{label}</p>
        <p className="text-2xl font-black mt-0.5" style={{ color: '#e2d9f3', fontFamily: "'Cinzel',serif" }}>{value}</p>
        {sub && <p className="text-xs mt-0.5" style={{ color: 'rgba(196,181,253,0.4)' }}>{sub}</p>}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-wider mb-4"
      style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>{children}</h2>
  );
}

const TOOLTIP_STYLE = {
  backgroundColor: 'rgba(15,12,41,0.95)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#e2d9f3',
  fontSize: 12,
};

export default function AdminTrafficDashboard() {
  const { user, isAdmin } = useAuth();
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [range, setRange]         = useState<7 | 30>(7);

  const [overview, setOverview]   = useState<Overview>({ totalViews: 0, totalSessions: 0 });
  const [dailyData, setDailyData] = useState<{ date: string; views: number; sessions: number }[]>([]);
  const [hourData, setHourData]   = useState<{ hour: string; views: number }[]>([]);
  const [weekdayData, setWeekdayData] = useState<{ day: string; views: number }[]>([]);
  const [pageData, setPageData]   = useState<{ page: string; views: number; sessions: number }[]>([]);
  const [deviceData, setDeviceData] = useState<{ name: string; value: number }[]>([]);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      // Overview
      const ovSnap = await getDoc(doc(db, 'siteStats', 'overview'));
      const ov = (ovSnap.data() ?? {}) as Partial<Overview>;
      setOverview({ totalViews: ov.totalViews ?? 0, totalSessions: ov.totalSessions ?? 0 });

      // Daily — last `range` days
      const days: string[] = [];
      const now = new Date(Date.now() + 7 * 3600 * 1000); // VN time
      for (let i = range - 1; i >= 0; i--) {
        const d = new Date(now.getTime() - i * 86400000);
        days.push(d.toISOString().slice(0, 10));
      }

      const dailySnaps = await Promise.all(
        days.map(d => getDoc(doc(db, 'siteStats', 'daily', d)))
      );

      const daily: typeof dailyData = [];
      const hourAgg: Record<number, number> = {};
      const weekdayAgg: Record<number, number> = {};
      const pageAgg: Record<string, { views: number; sessions: number }> = {};
      const deviceAgg: Record<string, number> = {};

      dailySnaps.forEach((snap, idx) => {
        const d = (snap.data() ?? {}) as Partial<DailyDoc>;
        daily.push({
          date: days[idx].slice(5), // MM-DD
          views: d.views ?? 0,
          sessions: d.sessions ?? 0,
        });

        if (d.hours) Object.entries(d.hours).forEach(([k, v]) => {
          const h = parseInt(k.replace('h', ''));
          hourAgg[h] = (hourAgg[h] ?? 0) + v;
        });
        if (d.weekdays) Object.entries(d.weekdays).forEach(([k, v]) => {
          const w = parseInt(k.replace('d', ''));
          weekdayAgg[w] = (weekdayAgg[w] ?? 0) + v;
        });
        if (d.pages) Object.entries(d.pages).forEach(([k, v]) => {
          pageAgg[k] = pageAgg[k] ?? { views: 0, sessions: 0 };
          pageAgg[k].views += v;
        });
        if (d.devices) Object.entries(d.devices).forEach(([k, v]) => {
          deviceAgg[k] = (deviceAgg[k] ?? 0) + v;
        });
      });

      setDailyData(daily);
      setHourData(Array.from({ length: 24 }, (_, h) => ({ hour: `${h}h`, views: hourAgg[h] ?? 0 })));
      setWeekdayData(WEEKDAYS.map((day, i) => ({ day, views: weekdayAgg[i] ?? 0 })));

      // Merge with per-page totals from pages collection
      const pagesSnap = await getDocs(collection(db, 'siteStats', 'pages'));
      pagesSnap.forEach(snap => {
        const pd = snap.data() as Partial<PageDoc>;
        const k = snap.id;
        if (!pageAgg[k]) pageAgg[k] = { views: 0, sessions: 0 };
        // use daily-aggregated views (more accurate for range), sessions from page doc
        pageAgg[k].sessions = pd.sessions ?? 0;
      });

      setPageData(
        Object.entries(pageAgg)
          .map(([k, v]) => ({ page: pageLabel(k), views: v.views, sessions: v.sessions }))
          .sort((a, b) => b.views - a.views)
          .slice(0, 12)
      );

      setDeviceData([
        { name: 'Desktop', value: deviceAgg['desktop'] ?? 0 },
        { name: 'Mobile',  value: deviceAgg['mobile']  ?? 0 },
        { name: 'Tablet',  value: deviceAgg['tablet']  ?? 0 },
      ].filter(d => d.value > 0));

    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Lỗi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { if (isAdmin) load(); }, [isAdmin, range]);

  const refresh = async () => { setRefreshing(true); await load(); setRefreshing(false); };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(160deg,#06040f,#0e0627,#0b1033)' }}>
        <p style={{ color: 'rgba(251,113,133,0.8)', fontFamily: "'Cinzel',serif" }}>Không có quyền truy cập</p>
      </div>
    );
  }

  const totalViewsInRange = dailyData.reduce((s, d) => s + d.views, 0);
  const totalSessionsInRange = dailyData.reduce((s, d) => s + d.sessions, 0);

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
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[.25em] uppercase mb-0.5"
              style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Admin · Traffic Analytics</p>
            <h1 className="font-black" style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.1rem' }}>
              Lượng Truy Cập Website
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Range selector */}
            <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              {([7, 30] as const).map(r => (
                <button key={r} onClick={() => setRange(r)}
                  className="px-3 py-1.5 text-xs font-bold transition-all cursor-pointer"
                  style={{
                    background: range === r ? 'rgba(192,132,252,0.2)' : 'transparent',
                    color: range === r ? '#c084fc' : 'rgba(196,181,253,0.5)',
                  }}>
                  {r} ngày
                </button>
              ))}
            </div>
            <span className="text-xs hidden sm:block" style={{ color: 'rgba(196,181,253,0.5)' }}>{user?.email}</span>
            <button onClick={refresh} disabled={refreshing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(196,181,253,0.7)' }}>
              <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} /> Làm mới
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 space-y-8">

        {loading ? (
          <div className="text-center py-24" style={{ color: 'rgba(196,181,253,0.4)' }}>Đang tải dữ liệu...</div>
        ) : error ? (
          <div className="text-center py-24 space-y-2">
            <p style={{ color: '#fb7185', fontWeight: 600 }}>Lỗi tải dữ liệu</p>
            <p style={{ color: 'rgba(196,181,253,0.5)', fontSize: '.8rem' }}>{error}</p>
            <p style={{ color: 'rgba(196,181,253,0.4)', fontSize: '.75rem' }}>Kiểm tra Firestore Rules đã được publish chưa</p>
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard icon={<Eye size={20} />}        label={`Lượt xem (${range}n)`} value={totalViewsInRange.toLocaleString('vi')}   color="#c084fc" />
              <StatCard icon={<Users size={20} />}      label={`Sessions (${range}n)`}  value={totalSessionsInRange.toLocaleString('vi')} color="#38bdf8" />
              <StatCard icon={<TrendingUp size={20} />} label="Tổng lượt xem"  value={overview.totalViews.toLocaleString('vi')}    color="#4ade80" />
              <StatCard icon={<Clock size={20} />}      label="Tổng sessions"  value={overview.totalSessions.toLocaleString('vi')} color="#fbbf24" />
            </div>

            {/* Daily chart */}
            <div className="rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
              <SectionTitle>Lượt xem theo ngày</SectionTitle>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={dailyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 11 }} />
                  <YAxis tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 11 }} allowDecimals={false} />
                  <Tooltip contentStyle={TOOLTIP_STYLE} />
                  <Legend wrapperStyle={{ color: 'rgba(196,181,253,0.6)', fontSize: 12 }} />
                  <Line type="monotone" dataKey="views"    stroke="#c084fc" strokeWidth={2} dot={false} name="Lượt xem" />
                  <Line type="monotone" dataKey="sessions" stroke="#38bdf8" strokeWidth={2} dot={false} name="Sessions" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Hour + Weekday */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Lượt xem theo giờ (giờ VN)</SectionTitle>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={hourData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="hour" tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} interval={3} />
                    <YAxis tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} allowDecimals={false} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Bar dataKey="views" fill="#c084fc" radius={[3, 3, 0, 0]} name="Lượt xem" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Lượt xem theo thứ</SectionTitle>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={weekdayData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="day" tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 12 }} />
                    <YAxis tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} allowDecimals={false} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Bar dataKey="views" fill="#4ade80" radius={[3, 3, 0, 0]} name="Lượt xem" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top pages + Device */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Top pages bar */}
              <div className="md:col-span-2 rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Top trang phổ biến</SectionTitle>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={pageData} layout="vertical" margin={{ top: 0, right: 10, left: 60, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis type="number" tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} allowDecimals={false} />
                    <YAxis type="category" dataKey="page" tick={{ fill: 'rgba(196,181,253,0.6)', fontSize: 11 }} width={60} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Bar dataKey="views" fill="#fbbf24" radius={[0, 3, 3, 0]} name="Lượt xem" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Device pie */}
              <div className="rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Thiết bị</SectionTitle>
                {deviceData.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-40 gap-4" style={{ color: 'rgba(196,181,253,0.35)' }}>
                    <div className="flex gap-4">
                      <Monitor size={28} style={{ opacity: 0.3 }} />
                      <Smartphone size={28} style={{ opacity: 0.3 }} />
                      <Tablet size={28} style={{ opacity: 0.3 }} />
                    </div>
                    <p style={{ fontSize: '.8rem' }}>Chưa có dữ liệu</p>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}
                        style={{ fontSize: 11, fill: '#e2d9f3' }}>
                        {deviceData.map((_, i) => (
                          <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={TOOLTIP_STYLE} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Page table */}
            <div className="rounded-2xl border overflow-hidden" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <SectionTitle>Bảng chi tiết trang</SectionTitle>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {['Trang', 'Lượt xem', 'Sessions'].map(h => (
                        <th key={h} className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider"
                          style={{ color: 'rgba(196,181,253,0.4)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pageData.length === 0 ? (
                      <tr><td colSpan={3} className="px-5 py-8 text-center" style={{ color: 'rgba(196,181,253,0.3)' }}>Chưa có dữ liệu</td></tr>
                    ) : pageData.map((p, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                        className="hover:bg-white/[.02] transition-colors">
                        <td className="px-5 py-3 font-medium" style={{ color: '#e2d9f3' }}>{p.page}</td>
                        <td className="px-5 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: 'rgba(192,132,252,0.15)', color: '#c084fc' }}>
                            {p.views.toLocaleString('vi')}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8' }}>
                            {p.sessions.toLocaleString('vi')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
