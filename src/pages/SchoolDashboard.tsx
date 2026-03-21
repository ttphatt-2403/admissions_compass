import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { getSchoolByEmail, SchoolAccount } from "../config/schoolAccounts";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

interface DailyStats  { date: string; views: number; totalTimeSeconds: number; sessions: number }
interface HourlyStats { hour: string; views: number }
interface WeekdayStats { day: string; views: number }
interface OverallStats {
  totalViews: number; totalSessions: number; totalTimeSeconds: number;
  schoolName: string; lastVisited?: string;
}

const WEEKDAY_LABELS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

export default function SchoolDashboard({ schoolId }: { schoolId: string }) {
  const [school, setSchool] = useState<SchoolAccount | null>(null);
  const [overall, setOverall] = useState<OverallStats | null>(null);
  const [dailyData, setDailyData] = useState<DailyStats[]>([]);
  const [hourlyData, setHourlyData] = useState<HourlyStats[]>([]);
  const [weekdayData, setWeekdayData] = useState<WeekdayStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [range, setRange] = useState<7 | 14 | 30>(30);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) { window.location.href = "/school-login"; return; }
      const found = getSchoolByEmail(user.email ?? "");
      if (!found || found.schoolId !== schoolId) { window.location.href = "/school-login"; return; }
      setSchool(found);
      setAuthChecked(true);
    });
    return () => unsub();
  }, [schoolId]);

  useEffect(() => {
    if (!authChecked) return;
    const load = async () => {
      try {
        // Overall
        const snap = await getDoc(doc(db, "pageStats", schoolId));
        if (snap.exists()) {
          const d = snap.data();
          setOverall({
            totalViews: d.totalViews ?? 0,
            totalSessions: d.totalSessions ?? 0,
            totalTimeSeconds: d.totalTimeSeconds ?? 0,
            schoolName: d.schoolName ?? schoolId,
            lastVisited: d.lastVisited?.toDate?.()?.toLocaleString("vi-VN") ?? "—",
          });
        } else {
          setOverall({ totalViews: 0, totalSessions: 0, totalTimeSeconds: 0, schoolName: schoolId });
        }

        // Daily
        const dailySnap = await getDocs(collection(db, "pageStats", schoolId, "daily"));
        const raw: DailyStats[] = [];
        dailySnap.forEach((d) => {
          const v = d.data();
          raw.push({ date: d.id, views: v.views ?? 0, totalTimeSeconds: v.totalTimeSeconds ?? 0, sessions: v.sessions ?? 0 });
        });
        raw.sort((a, b) => a.date.localeCompare(b.date));
        setDailyData(raw);

        // Hourly
        const hourlySnap = await getDocs(collection(db, "pageStats", schoolId, "hourly"));
        const hourlyRaw: HourlyStats[] = Array.from({ length: 24 }, (_, i) => ({
          hour: i.toString().padStart(2, "0"),
          views: 0,
        }));
        hourlySnap.forEach((d) => {
          const idx = parseInt(d.id);
          if (idx >= 0 && idx < 24) hourlyRaw[idx].views = d.data().views ?? 0;
        });
        setHourlyData(hourlyRaw);

        // Weekday
        const wdSnap = await getDocs(collection(db, "pageStats", schoolId, "weekday"));
        const wdRaw: WeekdayStats[] = Array.from({ length: 7 }, (_, i) => ({
          day: WEEKDAY_LABELS[i], views: 0,
        }));
        wdSnap.forEach((d) => {
          const idx = parseInt(d.id);
          if (idx >= 0 && idx < 7) wdRaw[idx].views = d.data().views ?? 0;
        });
        setWeekdayData(wdRaw);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [authChecked, schoolId]);

  const handleLogout = async () => { await signOut(auth); window.location.href = "/school-login"; };

  const color = school?.logoColor ?? "#3b82f6";
  const today = new Date().toISOString().split("T")[0];
  const rangedData = dailyData.slice(-range);
  const prevRangedData = dailyData.slice(-range * 2, -range);
  const todayD = dailyData.find((d) => d.date === today);

  const totalViewsRange = rangedData.reduce((s, d) => s + d.views, 0);
  const totalViewsPrev = prevRangedData.reduce((s, d) => s + d.views, 0);
  const totalTimeRange = rangedData.reduce((s, d) => s + d.totalTimeSeconds, 0);
  const totalSessionsRange = rangedData.reduce((s, d) => s + d.sessions, 0);
  const avgTimeSec = totalSessionsRange > 0 ? Math.round(totalTimeRange / totalSessionsRange) : 0;
  const growthPct = totalViewsPrev > 0 ? Math.round(((totalViewsRange - totalViewsPrev) / totalViewsPrev) * 100) : null;

  const peakHour = [...hourlyData].sort((a, b) => b.views - a.views)[0];
  const peakDay = [...weekdayData].sort((a, b) => b.views - a.views)[0];

  const avgTimeStr = (s: number) => {
    if (s === 0) return "—";
    if (s < 60) return `${s}s`;
    return `${Math.floor(s / 60)}p${s % 60 > 0 ? ` ${s % 60}s` : ""}`;
  };

  // Enrich daily với avgTime
  const chartData = rangedData.map((d) => ({
    ...d,
    label: d.date.slice(5),
    avgTime: d.sessions > 0 ? Math.round(d.totalTimeSeconds / d.sessions) : 0,
  }));

  if (!authChecked || loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 text-sm">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: color }}>
            {schoolId.slice(0, 2)}
          </div>
          <div>
            <h1 className="font-bold text-slate-900">{school?.schoolName}</h1>
            <p className="text-xs text-slate-400">Cập nhật lần cuối: {overall?.lastVisited ?? "—"}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Range picker */}
          <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-medium">
            {([7, 14, 30] as const).map((r) => (
              <button key={r} onClick={() => setRange(r)}
                className={`px-3 py-1.5 rounded-md transition-colors ${range === r ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
                {r} ngày
              </button>
            ))}
          </div>
          <button onClick={handleLogout} className="text-sm text-slate-400 hover:text-slate-700 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Đăng xuất
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6 space-y-6">

        {/* Row 1: KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard label={`Lượt xem (${range} ngày)`} value={totalViewsRange.toLocaleString("vi-VN")} sub={growthPct !== null ? `${growthPct >= 0 ? "+" : ""}${growthPct}% so với kỳ trước` : "lượt xem"} color={color} trend={growthPct} />
          <KpiCard label="Hôm nay" value={(todayD?.views ?? 0).toLocaleString("vi-VN")} sub="lượt xem" color={color} />
          <KpiCard label="Tổng all-time" value={(overall?.totalViews ?? 0).toLocaleString("vi-VN")} sub="toàn thời gian" color={color} />
          <KpiCard label="Thời gian TB" value={avgTimeStr(avgTimeSec)} sub={`trong ${range} ngày qua`} color={color} />
        </div>

        {/* Row 2: Thông tin nhanh */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <InfoCard icon="👁" label="Sessions" value={totalSessionsRange.toLocaleString("vi-VN")} desc={`trong ${range} ngày`} />
          <InfoCard icon="🕐" label="Giờ cao điểm" value={peakHour ? `${peakHour.hour}:00` : "—"} desc={peakHour ? `${peakHour.views} lượt` : ""} />
          <InfoCard icon="📅" label="Ngày đông nhất" value={peakDay?.day ?? "—"} desc={peakDay ? `${peakDay.views} lượt` : ""} />
          <InfoCard icon="⏱" label="Tổng thời gian" value={avgTimeStr(totalTimeRange)} desc={`trong ${range} ngày`} />
        </div>

        {/* Row 3: Lượt xem + thời gian TB theo ngày */}
        <div className="grid md:grid-cols-2 gap-4">
          <ChartBox title={`Lượt xem theo ngày (${range} ngày)`}>
            {chartData.length === 0 ? <EmptyChart /> : (
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                      <stop offset="95%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} allowDecimals={false} />
                  <Tooltip formatter={(v: number) => [`${v} lượt`, "Lượt xem"]} labelFormatter={(l) => `Ngày ${l}`} />
                  <Area type="monotone" dataKey="views" stroke={color} strokeWidth={2} fill="url(#colorViews)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </ChartBox>

          <ChartBox title="Thời gian ở lại trung bình (giây)">
            {chartData.length === 0 ? <EmptyChart /> : (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} allowDecimals={false} />
                  <Tooltip formatter={(v: number) => [avgTimeStr(v), "TB / lượt"]} labelFormatter={(l) => `Ngày ${l}`} />
                  <Line type="monotone" dataKey="avgTime" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </ChartBox>
        </div>

        {/* Row 4: Theo giờ + theo thứ */}
        <div className="grid md:grid-cols-2 gap-4">
          <ChartBox title="Lượt xem theo giờ trong ngày">
            {hourlyData.every((h) => h.views === 0) ? <EmptyChart /> : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={hourlyData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="hour" tick={{ fontSize: 10, fill: "#94a3b8" }} tickFormatter={(v) => `${v}h`} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} allowDecimals={false} />
                  <Tooltip formatter={(v: number) => [`${v} lượt`, "Lượt xem"]} labelFormatter={(l) => `${l}:00`} />
                  <Bar dataKey="views" fill="#f59e0b" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </ChartBox>

          <ChartBox title="Lượt xem theo thứ trong tuần">
            {weekdayData.every((d) => d.views === 0) ? <EmptyChart /> : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={weekdayData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} allowDecimals={false} />
                  <Tooltip formatter={(v: number) => [`${v} lượt`, "Lượt xem"]} />
                  <Bar dataKey="views" fill="#10b981" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </ChartBox>
        </div>

        {/* Row 5: Bảng chi tiết */}
        {dailyData.length > 0 && (
          <ChartBox title="Chi tiết theo ngày">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-slate-100 text-xs uppercase tracking-wide">
                    <th className="pb-3 font-medium">Ngày</th>
                    <th className="pb-3 font-medium text-right">Lượt xem</th>
                    <th className="pb-3 font-medium text-right">Sessions</th>
                    <th className="pb-3 font-medium text-right">Tổng thời gian</th>
                    <th className="pb-3 font-medium text-right">TB / session</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[...dailyData].reverse().slice(0, 14).map((d) => {
                    const avg = d.sessions > 0 ? Math.round(d.totalTimeSeconds / d.sessions) : 0;
                    const isToday = d.date === today;
                    return (
                      <tr key={d.date} className={`text-slate-700 ${isToday ? "bg-blue-50" : ""}`}>
                        <td className="py-2.5 flex items-center gap-2">
                          {d.date}
                          {isToday && <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium">Hôm nay</span>}
                        </td>
                        <td className="py-2.5 text-right font-semibold">{d.views}</td>
                        <td className="py-2.5 text-right">{d.sessions}</td>
                        <td className="py-2.5 text-right">{avgTimeStr(d.totalTimeSeconds)}</td>
                        <td className="py-2.5 text-right">{avgTimeStr(avg)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ChartBox>
        )}

        <p className="text-center text-xs text-slate-400 pb-4">
          Dữ liệu được ghi real-time qua Firestore · GA4 Analytics đang hoạt động song song
        </p>
      </main>
    </div>
  );
}

// --- Sub-components ---

function KpiCard({ label, value, sub, color, trend }: {
  label: string; value: string; sub: string; color: string; trend?: number | null;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-1">
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className={`text-xs flex items-center gap-1 ${trend != null && trend >= 0 ? "text-emerald-500" : trend != null ? "text-red-400" : "text-slate-400"}`}>
        {trend != null && (trend >= 0 ? "▲" : "▼")} {sub}
      </p>
      <div className="h-1 rounded-full mt-2 opacity-40" style={{ backgroundColor: color }} />
    </div>
  );
}

function InfoCard({ icon, label, value, desc }: { icon: string; label: string; value: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="font-bold text-slate-800">{value}</p>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function ChartBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h2 className="font-semibold text-slate-800 mb-4 text-sm">{title}</h2>
      {children}
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="h-48 flex items-center justify-center text-slate-400 text-sm">
      Chưa có dữ liệu — hãy chờ người dùng truy cập landing page
    </div>
  );
}
