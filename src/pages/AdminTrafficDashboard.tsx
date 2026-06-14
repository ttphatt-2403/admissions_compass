import { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { Eye, Users, Clock, TrendingUp, RefreshCw, MousePointerClick, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ADMIN_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;600&display=swap');
`;

const CHART_COLORS = ['#c084fc', '#38bdf8', '#4ade80', '#fbbf24', '#fb7185'];
const TOOLTIP_STYLE = {
  backgroundColor: 'rgba(15,12,41,0.95)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#e2d9f3',
  fontSize: 12,
};

function fmt(n: number) { return n.toLocaleString('vi-VN'); }
function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.round(s % 60);
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
}

function StatCard({ icon, label, value, sub, color }: {
  icon: React.ReactNode; label: string; value: string; sub?: string; color: string;
}) {
  return (
    <div className="rounded-2xl p-5 border flex items-center gap-4"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}22` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider"
          style={{ color: 'rgba(196,181,253,0.5)' }}>{label}</p>
        <p className="text-2xl font-black mt-0.5"
          style={{ color: '#e2d9f3', fontFamily: "'Cinzel',serif" }}>{value}</p>
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

interface GA4Data {
  overview: {
    pageViews: number; sessions: number; activeUsers: number;
    avgDuration: number; newUsers: number; bounceRate: number;
  };
  daily:    { date: string; views: number; sessions: number }[];
  pages:    { page: string; views: number; sessions: number; avgTime: number }[];
  devices:  { name: string; value: number }[];
  hours:    { hour: string; views: number }[];
  weekdays: { day: string; views: number }[];
}

export default function AdminTrafficDashboard() {
  const { user, isAdmin } = useAuth();
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [range, setRange]         = useState<7 | 30>(7);
  const [data, setData]           = useState<GA4Data | null>(null);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/ga4?range=${range}`);
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? 'Lỗi không xác định');
      setData(json);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e));
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

  return (
    <div className="min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(160deg,#06040f 0%,#0e0627 35%,#140a35 65%,#0b1033 100%)' }}>
      <style>{ADMIN_STYLES}</style>

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{ width: i % 5 === 0 ? 2 : 1, height: i % 5 === 0 ? 2 : 1,
              opacity: 0.03 + (i % 7) * 0.04,
              top: `${(i * 13 + 5) % 100}%`, left: `${(i * 17 + 7) % 100}%` }} />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(15,12,41,0.8)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[.25em] uppercase mb-0.5"
              style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Admin · Google Analytics 4</p>
            <h1 className="font-black"
              style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.1rem' }}>
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
          <div className="text-center py-24" style={{ color: 'rgba(196,181,253,0.4)' }}>
            <RefreshCw size={32} className="animate-spin mx-auto mb-4" style={{ color: '#c084fc' }} />
            <p>Đang tải dữ liệu từ Google Analytics...</p>
          </div>
        ) : error ? (
          <div className="text-center py-24 space-y-3">
            <p style={{ color: '#fb7185', fontWeight: 600, fontSize: '1rem' }}>Lỗi kết nối GA4</p>
            <p style={{ color: 'rgba(196,181,253,0.5)', fontSize: '.85rem' }}>{error}</p>
            <div className="rounded-xl p-4 mx-auto max-w-md text-left text-xs space-y-1"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(196,181,253,0.6)' }}>
              <p className="font-bold" style={{ color: '#fbbf24' }}>Cần kiểm tra:</p>
              <p>1. Vào GA4 Console → Admin → Account Access Management</p>
              <p>2. Thêm email: <span className="font-mono" style={{ color: '#c084fc' }}>firebase-adminsdk-fbsvc@exe-labantuyensinh.iam.gserviceaccount.com</span></p>
              <p>3. Role: <strong>Viewer</strong> → Save</p>
            </div>
            <button onClick={load}
              className="px-4 py-2 rounded-lg text-sm font-bold cursor-pointer"
              style={{ background: 'rgba(192,132,252,0.15)', border: '1px solid rgba(192,132,252,0.3)', color: '#c084fc' }}>
              Thử lại
            </button>
          </div>
        ) : data ? (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <StatCard icon={<Eye size={20} />}           label="Lượt xem"       value={fmt(data.overview.pageViews)}  color="#c084fc" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <StatCard icon={<MousePointerClick size={20} />} label="Sessions"   value={fmt(data.overview.sessions)}   color="#38bdf8" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <StatCard icon={<Users size={20} />}         label="Người dùng"     value={fmt(data.overview.activeUsers)} color="#4ade80" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <StatCard icon={<UserPlus size={20} />}      label="Người mới"      value={fmt(data.overview.newUsers)}   color="#fbbf24" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <StatCard icon={<Clock size={20} />}         label="Thời gian TB"   value={fmtTime(data.overview.avgDuration)} color="#fb7185" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <StatCard icon={<TrendingUp size={20} />}    label="Bounce Rate"    value={`${(data.overview.bounceRate * 100).toFixed(1)}%`} color="#a78bfa" />
              </div>
            </div>

            {/* Daily line chart */}
            <div className="rounded-2xl p-6 border"
              style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
              <SectionTitle>Lượt xem theo ngày ({range} ngày qua)</SectionTitle>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data.daily} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
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
              <div className="rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Lượt xem theo giờ (giờ Việt Nam)</SectionTitle>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={data.hours} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="hour" tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} interval={3} />
                    <YAxis tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} allowDecimals={false} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Bar dataKey="views" fill="#c084fc" radius={[3, 3, 0, 0]} name="Lượt xem" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Lượt xem theo thứ trong tuần</SectionTitle>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={data.weekdays} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
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
              <div className="md:col-span-2 rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Top trang phổ biến</SectionTitle>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart
                    data={data.pages.slice(0, 8)}
                    layout="vertical"
                    margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis type="number" tick={{ fill: 'rgba(196,181,253,0.5)', fontSize: 10 }} allowDecimals={false} />
                    <YAxis type="category" dataKey="page" tick={{ fill: 'rgba(196,181,253,0.6)', fontSize: 10 }} width={120}
                      tickFormatter={v => v.length > 18 ? v.slice(0, 18) + '…' : v} />
                    <Tooltip contentStyle={TOOLTIP_STYLE} />
                    <Bar dataKey="views" fill="#fbbf24" radius={[0, 3, 3, 0]} name="Lượt xem" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
                <SectionTitle>Thiết bị</SectionTitle>
                {data.devices.length === 0 ? (
                  <div className="flex items-center justify-center h-40"
                    style={{ color: 'rgba(196,181,253,0.35)', fontSize: '.8rem' }}>Chưa có dữ liệu</div>
                ) : (
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={data.devices} dataKey="value" nameKey="name"
                        cx="50%" cy="50%" outerRadius={70}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                        style={{ fontSize: 11, fill: '#e2d9f3' }}>
                        {data.devices.map((_, i) => (
                          <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={TOOLTIP_STYLE} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Pages table */}
            <div className="rounded-2xl border overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <SectionTitle>Bảng chi tiết trang</SectionTitle>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {['Trang', 'Lượt xem', 'Sessions', 'Thời gian TB'].map(h => (
                        <th key={h} className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider"
                          style={{ color: 'rgba(196,181,253,0.4)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.pages.map((p, i) => (
                      <tr key={i} className="hover:bg-white/[.02] transition-colors"
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td className="px-5 py-3 font-medium max-w-[200px] truncate" style={{ color: '#e2d9f3' }}>{p.page}</td>
                        <td className="px-5 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: 'rgba(192,132,252,0.15)', color: '#c084fc' }}>
                            {fmt(p.views)}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8' }}>
                            {fmt(p.sessions)}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs" style={{ color: 'rgba(196,181,253,0.6)' }}>
                          {fmtTime(p.avgTime)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
