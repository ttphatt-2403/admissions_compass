import { useState, useEffect } from 'react';
import {
  Sparkles, Star, RotateCcw, Calendar, ArrowRight,
  Heart, Briefcase, Brain, Zap, BookOpen, Shield, ChevronRight,
  User, Sun, Moon, TrendingUp, AlertTriangle, Users,
  MessageCircle, Activity, Compass, Map, Building2,
  GraduationCap, Wallet, Target, Eye, Gift, Lightbulb,
  Baby, Flame, Link2, ChevronDown,
} from 'lucide-react';
import {
  NUMEROLOGY_PROFILES,
  calcLifePath,
  calcBirthdayNumber,
  calcAttitudeNumber,
  calcDestinyNumber,
  calcSoulUrgeNumber,
  calcPersonalityNumber,
  NumerologyProfile,
} from '../data/numerology/profiles';

type Phase = 'intro' | 'input' | 'result';
type ResultSubPhase = 'loading' | 'hero' | 'detail';
type TabId = 'overview' | 'psychology' | 'love' | 'career' | 'spiritual';

interface NumerologyResult {
  lifePath: NumerologyProfile;
  birthday: NumerologyProfile;
  attitude: NumerologyProfile;
  destiny: NumerologyProfile;
  soulUrge: NumerologyProfile;
  personality: NumerologyProfile;
  lifePathNum: number;
  birthdayNum: number;
  attitudeNum: number;
  destinyNum: number;
  soulUrgeNum: number;
  personalityNum: number;
  dob: string;
  fullName: string;
}

function gradientStyle(from: string, to: string) {
  return { background: `linear-gradient(135deg, ${from}, ${to})` };
}

/* ─── CSS Animations (injected once) ─── */
const ANIM_STYLES = `
  @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes float-y { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
  @keyframes pulse-glow { 0%,100% { opacity:0.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.05); } }
  @keyframes reveal-hero { from { opacity:0; transform:scale(0.6) translateY(30px); } to { opacity:1; transform:scale(1) translateY(0); } }
  @keyframes fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
  @keyframes loading-dots { 0%,80%,100%{opacity:0;transform:scale(0.8)} 40%{opacity:1;transform:scale(1)} }
  @keyframes ring-pulse { 0%,100%{opacity:0.15} 50%{opacity:0.35} }
`;

/* ─── InfoSection ─── */
function InfoSection({ icon, title, children, bg, borderColor }: {
  icon: React.ReactNode; title: string; children: React.ReactNode; bg: string; borderColor?: string;
}) {
  return (
    <div className={`${bg} rounded-2xl p-4 border ${borderColor ?? 'border-transparent'}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="flex-shrink-0">{icon}</span>
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 leading-tight">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* ─── INDEX_CONTEXT ─── */
const INDEX_CONTEXT: Record<string, { title: string; desc: string; color: string }> = {
  lifepath:    { title: 'Số Đường Đời',  desc: 'Tấm bản đồ chính của cuộc đời — bản chất thực sự, định hướng cốt lõi, thử thách trọng tâm và cơ hội sẽ đến. Đây là chỉ số quan trọng nhất.', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
  birthday:    { title: 'Số Ngày Sinh',  desc: 'Món quà tự nhiên, tài năng bẩm sinh mà bạn được Vũ trụ trang bị khi chào đời để hỗ trợ Đường Đời.', color: 'bg-sky-50 border-sky-200 text-sky-800' },
  attitude:    { title: 'Số Thái Độ',    desc: 'Lăng kính bạn dùng để nhìn nhận thế giới và cách bạn đối mặt, giải quyết các rắc rối — cũng là ấn tượng đầu tiên người khác có về bạn.', color: 'bg-violet-50 border-violet-200 text-violet-800' },
  destiny:     { title: 'Số Sứ Mệnh',    desc: 'Nhiệm vụ lớn mà cuộc đời đã giao phó — tính từ Họ và Tên đầy đủ. Đây là vai trò bạn sinh ra để đóng.', color: 'bg-amber-50 border-amber-200 text-amber-800' },
  soul:        { title: 'Số Linh Hồn',   desc: 'Khát khao, động lực và nhu cầu tận cùng của trái tim — tính từ các nguyên âm trong tên. Bạn chỉ hạnh phúc khi sống trọn với bản chất này.', color: 'bg-rose-50 border-rose-200 text-rose-800' },
  personality: { title: 'Số Nhân Cách',  desc: 'Chiếc "mặt nạ" bạn đeo ra xã hội — tính từ các phụ âm trong tên. Cách thế giới nhìn nhận bạn trước khi thực sự hiểu bạn.', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
};

/* ─── NumberCard ─── */
function NumberCard({ number, label, labelIcon, profile, indexType }: {
  number: number; label: string; labelIcon: React.ReactNode; profile: NumerologyProfile; indexType: string;
}) {
  const [tab, setTab] = useState<TabId>('overview');
  const grad = gradientStyle(profile.colorFrom, profile.colorTo);
  const ctx = INDEX_CONTEXT[indexType];

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'overview',   label: 'Tổng quan',   icon: <Brain size={12} /> },
    { id: 'psychology', label: 'Tâm lý',       icon: <Zap size={12} /> },
    { id: 'love',       label: 'Quan hệ',      icon: <Heart size={12} /> },
    { id: 'career',     label: 'Nghề nghiệp',  icon: <Briefcase size={12} /> },
    { id: 'spiritual',  label: 'Tâm linh',     icon: <Compass size={12} /> },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-6 text-white relative overflow-hidden" style={grad}>
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-10 bg-white" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10 bg-white" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="opacity-80 flex-shrink-0">{labelIcon}</span>
            <span className="text-xs font-bold tracking-widest uppercase opacity-80">{label}</span>
          </div>
          <div className="flex items-end justify-between gap-2 flex-wrap">
            <div className="flex items-end gap-2 sm:gap-3 min-w-0">
              <span className="text-5xl sm:text-7xl font-black leading-none tracking-tighter flex-shrink-0">{number}</span>
              <div className="pb-1 min-w-0">
                <p className="font-black text-base sm:text-lg leading-tight">{profile.name}</p>
                <p className="text-xs opacity-75 leading-relaxed line-clamp-2 sm:max-w-[220px]">{profile.keyword}</p>
              </div>
            </div>
            <div className="text-right text-xs opacity-70 space-y-0.5 pb-1 flex-shrink-0">
              <p className="font-semibold">{profile.planet}</p>
              <p>{profile.element}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Context banner */}
      {ctx && (
        <div className={`px-4 sm:px-5 py-3 border-b ${ctx.color} border-l-4`} style={{ borderLeftColor: profile.colorFrom }}>
          <p className="text-xs font-black uppercase tracking-wide mb-0.5 opacity-70">{ctx.title}</p>
          <p className="text-xs leading-relaxed">{ctx.desc}</p>
        </div>
      )}

      {/* Essence */}
      <div className="px-4 sm:px-5 py-4 bg-slate-50 border-b border-slate-100">
        <p className="text-slate-700 text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900">Năng lực cốt lõi — </span>{profile.essence}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-slate-100 bg-white">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-all duration-200 flex-shrink-0 cursor-pointer ${
              tab === t.id ? 'border-purple-500 text-purple-700 bg-purple-50/60' : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}>
            {t.icon}<span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 sm:p-5 space-y-3 bg-white">

        {tab === 'overview' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoSection icon={<Sun size={14} className="text-amber-500"/>} title="Góc Sáng" bg="bg-amber-50" borderColor="border-amber-100">
                <p className="text-sm text-amber-900 leading-relaxed">{profile.lightSide}</p>
              </InfoSection>
              <InfoSection icon={<Moon size={14} className="text-slate-500"/>} title="Góc Tối" bg="bg-slate-100" borderColor="border-slate-200">
                <p className="text-sm text-slate-700 leading-relaxed">{profile.darkSide}</p>
              </InfoSection>
            </div>
            {profile.giftToWorld && (
              <InfoSection icon={<Gift size={14} className="text-emerald-600"/>} title="Món Quà Cho Thế Giới" bg="bg-emerald-50" borderColor="border-emerald-100">
                <p className="text-sm text-emerald-900 leading-relaxed font-medium">{profile.giftToWorld}</p>
              </InfoSection>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoSection icon={<TrendingUp size={14} className="text-green-600"/>} title="Ưu Điểm" bg="bg-green-50" borderColor="border-green-100">
                <ul className="space-y-2">{profile.strengths.map((s,i)=>(
                  <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                    <ChevronRight size={13} className="text-green-500 flex-shrink-0 mt-0.5"/><span>{s}</span>
                  </li>))}</ul>
              </InfoSection>
              <InfoSection icon={<AlertTriangle size={14} className="text-red-500"/>} title="Nhược Điểm" bg="bg-red-50" borderColor="border-red-100">
                <ul className="space-y-2">{profile.weaknesses.map((w,i)=>(
                  <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                    <ChevronRight size={13} className="text-red-400 flex-shrink-0 mt-0.5"/><span>{w}</span>
                  </li>))}</ul>
              </InfoSection>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <InfoSection icon={<Users size={14} className="text-blue-500"/>} title="Hợp với số" bg="bg-blue-50" borderColor="border-blue-100">
                <div className="flex flex-wrap gap-2 mt-1">{profile.compatible.map(n=>(
                  <span key={n} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white flex items-center justify-center text-xs sm:text-sm font-black shadow-sm" style={grad}>{n}</span>
                ))}</div>
              </InfoSection>
              <InfoSection icon={<Zap size={14} className="text-orange-500"/>} title="Thách thức" bg="bg-orange-50" borderColor="border-orange-100">
                <div className="flex flex-wrap gap-2 mt-1">{profile.challenging.map(n=>(
                  <span key={n} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white flex items-center justify-center text-xs sm:text-sm font-black shadow-sm" style={{background:'linear-gradient(135deg,#fb923c,#ef4444)'}}>{n}</span>
                ))}</div>
              </InfoSection>
            </div>
          </>
        )}

        {tab === 'psychology' && (
          <>
            <InfoSection icon={<Brain size={14} className="text-purple-500"/>} title="Phân Tích Tâm Lý Chuyên Sâu" bg="bg-purple-50" borderColor="border-purple-100">
              <ul className="space-y-3 mt-1">{profile.deepAnalysis.map((item,i)=>(
                <li key={i} className="flex gap-3 text-sm text-purple-900 leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-200 text-purple-700 text-xs font-black flex items-center justify-center mt-0.5">{i+1}</span>
                  <span>{item}</span>
                </li>))}</ul>
            </InfoSection>
            {profile.childhood && <InfoSection icon={<Baby size={14} className="text-teal-600"/>} title="Dấu Ấn Tuổi Thơ" bg="bg-teal-50" borderColor="border-teal-100"><p className="text-sm text-teal-900 leading-relaxed">{profile.childhood}</p></InfoSection>}
            {profile.mindset && <InfoSection icon={<Lightbulb size={14} className="text-sky-500"/>} title="Mô Thức Tư Duy" bg="bg-sky-50" borderColor="border-sky-100"><p className="text-sm text-sky-900 leading-relaxed">{profile.mindset}</p></InfoSection>}
            {profile.stressResponse && <InfoSection icon={<Zap size={14} className="text-orange-500"/>} title="Phản Ứng Khi Căng Thẳng" bg="bg-orange-50" borderColor="border-orange-100"><p className="text-sm text-orange-900 leading-relaxed">{profile.stressResponse}</p></InfoSection>}
            {profile.shadowWork && <InfoSection icon={<Shield size={14} className="text-slate-600"/>} title="Góc Khuất Cần Chữa Lành (Shadow Work)" bg="bg-slate-100" borderColor="border-slate-200"><p className="text-sm text-slate-800 leading-relaxed italic">{profile.shadowWork}</p></InfoSection>}
          </>
        )}

        {tab === 'love' && (
          <>
            <InfoSection icon={<Heart size={14} className="text-rose-500"/>} title="Phong Cách Tình Yêu" bg="bg-rose-50" borderColor="border-rose-100"><p className="text-sm text-rose-900 leading-relaxed">{profile.loveStyle}</p></InfoSection>
            {profile.relationshipDynamics && <InfoSection icon={<Link2 size={14} className="text-pink-500"/>} title="Động Lực Trong Các Mối Quan Hệ" bg="bg-pink-50" borderColor="border-pink-100"><p className="text-sm text-pink-900 leading-relaxed">{profile.relationshipDynamics}</p></InfoSection>}
            {profile.communicationStyle && <InfoSection icon={<MessageCircle size={14} className="text-blue-500"/>} title="Phong Cách Giao Tiếp" bg="bg-blue-50" borderColor="border-blue-100"><p className="text-sm text-blue-900 leading-relaxed">{profile.communicationStyle}</p></InfoSection>}
            <InfoSection icon={<Activity size={14} className="text-teal-600"/>} title="Sức Khỏe Cần Chú Ý" bg="bg-teal-50" borderColor="border-teal-100"><p className="text-sm text-teal-900 leading-relaxed">{profile.healthFocus}</p></InfoSection>
          </>
        )}

        {tab === 'career' && (
          <>
            <InfoSection icon={<Target size={14} className="text-indigo-600"/>} title="Phong Cách Làm Việc" bg="bg-indigo-50" borderColor="border-indigo-100"><p className="text-sm text-indigo-900 leading-relaxed">{profile.workStyle}</p></InfoSection>
            <InfoSection icon={<Building2 size={14} className="text-blue-600"/>} title="Môi Trường Làm Việc Lý Tưởng" bg="bg-blue-50" borderColor="border-blue-100"><p className="text-sm text-blue-900 leading-relaxed">{profile.workEnv}</p></InfoSection>
            <InfoSection icon={<Users size={14} className="text-violet-600"/>} title="Phong Cách Lãnh Đạo" bg="bg-violet-50" borderColor="border-violet-100"><p className="text-sm text-violet-900 leading-relaxed">{profile.leadershipStyle}</p></InfoSection>
            {profile.majors?.length > 0 && (
              <InfoSection icon={<GraduationCap size={14} className="text-purple-600"/>} title="Gợi Ý Ngành Học" bg="bg-purple-50" borderColor="border-purple-100">
                <div className="flex flex-wrap gap-2 mt-1">{profile.majors.map((m,i)=>(
                  <span key={i} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-purple-800 border border-purple-200 shadow-sm">{m}</span>
                ))}</div>
              </InfoSection>
            )}
            <InfoSection icon={<Briefcase size={14} className="text-slate-600"/>} title="Gợi Ý Nghề Nghiệp" bg="bg-slate-50" borderColor="border-slate-200">
              <div className="flex flex-wrap gap-2 mt-1">{profile.careers.map((c,i)=>(
                <span key={i} className="px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm" style={grad}>{c}</span>
              ))}</div>
            </InfoSection>
            <InfoSection icon={<Lightbulb size={14} className="text-amber-600"/>} title="Lời Khuyên Phát Triển Sự Nghiệp" bg="bg-amber-50" borderColor="border-amber-100"><p className="text-sm text-amber-900 leading-relaxed">{profile.careerAdvice}</p></InfoSection>
            <InfoSection icon={<Wallet size={14} className="text-green-600"/>} title="Phong Cách Tài Chính" bg="bg-green-50" borderColor="border-green-100"><p className="text-sm text-green-900 leading-relaxed">{profile.moneyStyle}</p></InfoSection>
          </>
        )}

        {tab === 'spiritual' && (
          <>
            <InfoSection icon={<Compass size={14} className="text-violet-600"/>} title="Con Đường Tâm Linh" bg="bg-violet-50" borderColor="border-violet-100"><p className="text-sm text-violet-900 leading-relaxed">{profile.spiritualPath}</p></InfoSection>
            <InfoSection icon={<BookOpen size={14} className="text-purple-600"/>} title="Bài Học Cuộc Đời" bg="bg-purple-50" borderColor="border-purple-100"><p className="text-sm text-purple-900 leading-relaxed italic">"{profile.lesson}"</p></InfoSection>
            {profile.karmicLesson && <InfoSection icon={<Shield size={14} className="text-indigo-600"/>} title="Bài Học Nghiệp (Karmic Lesson)" bg="bg-indigo-50" borderColor="border-indigo-100"><p className="text-sm text-indigo-900 leading-relaxed">{profile.karmicLesson}</p></InfoSection>}
            {profile.lifeThemes?.length > 0 && (
              <InfoSection icon={<Map size={14} className="text-amber-600"/>} title="Các Chủ Đề Lớn Của Cuộc Đời" bg="bg-amber-50" borderColor="border-amber-100">
                <ul className="space-y-2 mt-1">{profile.lifeThemes.map((theme,i)=>(
                  <li key={i} className="flex gap-2 text-sm text-amber-900">
                    <ChevronRight size={13} className="text-amber-500 flex-shrink-0 mt-0.5"/><span>{theme}</span>
                  </li>))}</ul>
              </InfoSection>
            )}
            {profile.affirmations?.length > 0 && (
              <InfoSection icon={<Sparkles size={14} className="text-fuchsia-600"/>} title="Khẳng Định Tích Cực" bg="bg-fuchsia-50" borderColor="border-fuchsia-100">
                <div className="space-y-2 mt-1">{profile.affirmations.map((aff,i)=>(
                  <p key={i} className="text-sm font-semibold text-fuchsia-800 italic bg-white p-3 rounded-xl border border-fuchsia-100 leading-relaxed">"{aff}"</p>
                ))}</div>
              </InfoSection>
            )}
            <InfoSection icon={<Flame size={14} className="text-yellow-600"/>} title="Lời Khuyên Thực Tế" bg="bg-yellow-50" borderColor="border-yellow-100"><p className="text-sm text-yellow-900 leading-relaxed italic">"{profile.advice}"</p></InfoSection>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Orbital Visual (Intro right column) ─── */
function OrbitalVisual() {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const r1 = 105; // inner ring
  const r2 = 148; // outer ring

  // Inner ring: numbers 1,3,5,7,9 (5 items at 72° apart)
  const inner = [1, 3, 5, 7, 9];
  // Outer ring: numbers 2,4,6,8,11,22 (6 items at 60° apart)
  const outer = [2, 4, 6, 8, 11, 22];

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      {/* Decorative rotating rings */}
      <div className="absolute inset-0 rounded-full border border-white/10"
        style={{ animation: 'spin-slow 40s linear infinite' }} />
      <div className="absolute rounded-full border border-white/8"
        style={{ inset: 20, animation: 'spin-reverse 28s linear infinite' }} />

      {/* Glow orb center */}
      <div className="absolute rounded-full"
        style={{
          width: 90, height: 90,
          left: cx - 45, top: cy - 45,
          background: 'radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(99,102,241,0.6) 50%, transparent 80%)',
          animation: 'pulse-glow 3s ease-in-out infinite',
          boxShadow: '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(99,102,241,0.3)',
        }} />
      {/* Center symbol */}
      <div className="absolute flex items-center justify-center"
        style={{ width: 90, height: 90, left: cx - 45, top: cy - 45 }}>
        <Sparkles size={28} className="text-white/90" />
      </div>

      {/* Ring 1 radius guide (invisible) */}
      <div className="absolute rounded-full border border-white/5"
        style={{ width: r1*2, height: r1*2, left: cx-r1, top: cy-r1 }} />

      {/* Ring 2 radius guide */}
      <div className="absolute rounded-full border border-white/5"
        style={{ width: r2*2, height: r2*2, left: cx-r2, top: cy-r2 }} />

      {/* Inner ring numbers */}
      {inner.map((num, i) => {
        const angle = (i * (360 / inner.length) - 90) * (Math.PI / 180);
        const x = cx + r1 * Math.cos(angle);
        const y = cy + r1 * Math.sin(angle);
        const p = NUMEROLOGY_PROFILES[num];
        if (!p) return null;
        return (
          <div key={num}
            className="absolute flex items-center justify-center rounded-full font-black text-white shadow-lg"
            style={{
              width: 36, height: 36,
              left: x - 18, top: y - 18,
              background: `linear-gradient(135deg, ${p.colorFrom}, ${p.colorTo})`,
              fontSize: 13,
              boxShadow: `0 0 12px ${p.colorFrom}66`,
              border: '2px solid rgba(255,255,255,0.2)',
            }}>
            {num}
          </div>
        );
      })}

      {/* Outer ring numbers */}
      {outer.map((num, i) => {
        const angle = (i * (360 / outer.length) - 90) * (Math.PI / 180);
        const x = cx + r2 * Math.cos(angle);
        const y = cy + r2 * Math.sin(angle);
        const p = NUMEROLOGY_PROFILES[num];
        if (!p) return null;
        return (
          <div key={num}
            className="absolute flex items-center justify-center rounded-full font-black text-white shadow-lg"
            style={{
              width: num > 9 ? 44 : 38, height: num > 9 ? 44 : 38,
              left: x - (num > 9 ? 22 : 19), top: y - (num > 9 ? 22 : 19),
              background: `linear-gradient(135deg, ${p.colorFrom}, ${p.colorTo})`,
              fontSize: num > 9 ? 11 : 13,
              boxShadow: `0 0 12px ${p.colorFrom}66`,
              border: '2px solid rgba(255,255,255,0.2)',
            }}>
            {num}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main Component ─── */
export default function NumerologyTest() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [resultSubPhase, setResultSubPhase] = useState<ResultSubPhase>('loading');
  const [fullName, setFullName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<NumerologyResult | null>(null);

  const validate = (): boolean => {
    const d = parseInt(day), m = parseInt(month), y = parseInt(year);
    if (!fullName.trim()) { setError('Vui lòng nhập Họ và Tên của bạn.'); return false; }
    if (!day || !month || !year) { setError('Vui lòng nhập đầy đủ ngày sinh.'); return false; }
    if (isNaN(d) || d < 1 || d > 31) { setError('Ngày sinh không hợp lệ.'); return false; }
    if (isNaN(m) || m < 1 || m > 12) { setError('Tháng sinh không hợp lệ.'); return false; }
    if (isNaN(y) || y < 1900 || y > new Date().getFullYear()) { setError('Năm sinh không hợp lệ.'); return false; }
    if (new Date(y, m-1, d).getMonth() !== m-1) { setError('Ngày tháng không hợp lệ.'); return false; }
    setError('');
    return true;
  };

  const handleCalculate = () => {
    if (!validate()) return;
    const d = parseInt(day), m = parseInt(month), y = parseInt(year);
    const lifePathNum    = calcLifePath(d, m, y);
    const birthdayNum    = calcBirthdayNumber(d);
    const attitudeNum    = calcAttitudeNumber(d, m);
    const destinyNum     = calcDestinyNumber(fullName);
    const soulUrgeNum    = calcSoulUrgeNumber(fullName);
    const personalityNum = calcPersonalityNumber(fullName);
    setResult({
      lifePath: NUMEROLOGY_PROFILES[lifePathNum], birthday: NUMEROLOGY_PROFILES[birthdayNum],
      attitude: NUMEROLOGY_PROFILES[attitudeNum], destiny: NUMEROLOGY_PROFILES[destinyNum],
      soulUrge: NUMEROLOGY_PROFILES[soulUrgeNum], personality: NUMEROLOGY_PROFILES[personalityNum],
      lifePathNum, birthdayNum, attitudeNum, destinyNum, soulUrgeNum, personalityNum,
      dob: `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${y}`,
      fullName: fullName.trim().toUpperCase(),
    });
    setResultSubPhase('loading');
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-advance from loading → hero
  useEffect(() => {
    if (phase === 'result' && resultSubPhase === 'loading') {
      const t = setTimeout(() => setResultSubPhase('hero'), 2000);
      return () => clearTimeout(t);
    }
  }, [phase, resultSubPhase]);

  const handleReset = () => {
    setPhase('intro'); setResultSubPhase('loading');
    setFullName(''); setDay(''); setMonth(''); setYear('');
    setError(''); setResult(null);
  };

  const DARK_BG = 'linear-gradient(145deg,#06040f 0%,#0e0627 40%,#1a0a3d 70%,#0b1033 100%)';

  /* ══════════════════════════════════════════
     INTRO
  ══════════════════════════════════════════ */
  if (phase === 'intro') {
    const bullets = [
      { icon: <Calendar size={16}/>, text: '3 chỉ số từ Ngày Sinh', sub: 'Đường Đời · Ngày Sinh · Thái Độ' },
      { icon: <User size={16}/>,     text: '3 chỉ số từ Họ & Tên',  sub: 'Sứ Mệnh · Linh Hồn · Nhân Cách' },
      { icon: <Brain size={16}/>,    text: 'Phân tích 5 chiều sâu', sub: 'Tâm lý · Nghề nghiệp · Tình cảm · Tâm linh' },
    ];

    return (
      <div className="min-h-screen relative overflow-x-hidden" style={{ background: DARK_BG }}>
        <style>{ANIM_STYLES}</style>

        {/* Glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[10%] rounded-full" style={{ width:'min(600px,90vw)', height:'min(600px,90vw)', background:'radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 65%)' }}/>
          <div className="absolute bottom-[0%] right-[-5%] rounded-full" style={{ width:'min(500px,80vw)', height:'min(500px,80vw)', background:'radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 65%)' }}/>
        </div>

        {/* Star field */}
        {[...Array(70)].map((_,i) => (
          <div key={i} className="absolute rounded-full bg-white pointer-events-none"
            style={{ width: i%7===0?2.5:i%3===0?1.5:1, height: i%7===0?2.5:i%3===0?1.5:1,
              opacity: 0.06+(i%9)*0.04, top:`${(i*11+7)%100}%`, left:`${(i*17+3)%96}%` }}/>
        ))}

        {/* ── 2-column layout ── */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* Left column */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-purple-200 text-xs font-bold mb-6 tracking-widest uppercase"
                  style={{ background:'rgba(139,92,246,0.15)', border:'1px solid rgba(139,92,246,0.35)', boxShadow:'0 0 20px rgba(139,92,246,0.2)' }}>
                  <Sparkles size={13}/> <span className="text-white">Pythagoras · 570 TCN</span>
                </div>

                {/* Headline */}
                <h1 className="font-black leading-[1.1] tracking-tight mb-5"
                  style={{ fontSize:'clamp(2.2rem,5vw,4rem)' }}>
                  <span className="text-white block">Thần Số Học</span>
                  <span style={{ background:'linear-gradient(90deg,#c084fc,#818cf8,#38bdf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', display:'inline-block' }}>
                    Toàn Diện & Chuyên Sâu
                  </span>
                </h1>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                  Giải mã <span className="text-white font-bold">6 chỉ số cốt lõi</span> từ Họ Tên và Ngày Sinh.
                  Khám phá bản chất thực sự và con đường vũ trụ dành riêng cho bạn.
                </p>

                {/* Bullet points */}
                <div className="space-y-3 mb-10 max-w-md mx-auto lg:mx-0">
                  {bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl text-left"
                      style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background:'rgba(139,92,246,0.25)', color:'#c084fc' }}>
                        {b.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{b.text}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{b.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                  <button
                    onClick={() => setPhase('input')}
                    className="group inline-flex items-center gap-3 px-8 py-4 font-black text-white rounded-2xl text-base transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden w-full sm:w-auto justify-center"
                    style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow:'0 0 30px rgba(124,58,237,0.5)' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background:'linear-gradient(135deg,#8b5cf6,#6366f1)' }}/>
                    <Sparkles size={18} className="relative z-10 flex-shrink-0"/>
                    <span className="relative z-10">Khám phá ngay</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"/>
                  </button>
                  <p className="text-slate-600 text-xs flex items-center gap-1.5">
                    <Shield size={11} className="flex-shrink-0"/> Miễn phí · Không cần tài khoản
                  </p>
                </div>
              </div>

              {/* Right column — Orbital (hidden on mobile) */}
              <div className="hidden lg:flex flex-shrink-0 items-center justify-center"
                style={{ animation:'float-y 6s ease-in-out infinite' }}>
                <OrbitalVisual />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════
     INPUT
  ══════════════════════════════════════════ */
  if (phase === 'input') {
    return (
      <div className="min-h-screen relative overflow-x-hidden" style={{ background: DARK_BG }}>
        <style>{ANIM_STYLES}</style>

        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 rounded-full"
            style={{ width:'min(500px,90vw)', height:'min(500px,90vw)', background:'radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 65%)' }}/>
        </div>

        <div className="relative z-10 min-h-screen flex items-start sm:items-center justify-center px-4 py-10 sm:py-16">
          <div className="w-full max-w-md mx-auto">

            {/* Step header */}
            <div className="text-center mb-8">
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>1</div>
                  <span className="text-white text-xs font-semibold">Thông tin</span>
                </div>
                <div className="flex-1 h-px max-w-[40px]" style={{ background:'rgba(139,92,246,0.3)' }}/>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black border"
                    style={{ borderColor:'rgba(139,92,246,0.4)', color:'rgba(139,92,246,0.5)' }}>2</div>
                  <span className="text-slate-600 text-xs font-semibold">Kết quả</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Nhập Thông Tin Của Bạn
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Dùng tên đầy đủ như trên CCCD/hộ chiếu để kết quả chính xác nhất.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl"
              style={{ background:'rgba(255,255,255,0.05)', backdropFilter:'blur(20px)' }}>

              {/* Name input */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-white text-xs font-bold mb-2.5 uppercase tracking-widest">
                  <User size={12}/> Họ và Tên đầy đủ
                </label>
                <input type="text" placeholder="VD: NGUYEN THI BICH NGOC" value={fullName}
                  onChange={e => setFullName(e.target.value.toUpperCase())}
                  className="w-full rounded-xl px-4 py-3.5 text-white font-bold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border text-sm sm:text-base uppercase"
                  style={{ background:'rgba(255,255,255,0.07)', borderColor:'rgba(255,255,255,0.12)' }}/>
              </div>

              {/* Date inputs */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-white text-xs font-bold mb-2.5 uppercase tracking-widest">
                  <Calendar size={12}/> Ngày tháng năm sinh
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { val: day,   set: setDay,   ph: 'Ngày',  hint: 'DD' },
                    { val: month, set: setMonth, ph: 'Tháng', hint: 'MM' },
                    { val: year,  set: setYear,  ph: 'Năm',   hint: 'YYYY' },
                  ].map(({ val, set, ph, hint }, i) => (
                    <div key={i}>
                      <p className="text-center text-[10px] text-white/60 font-bold mb-1">{hint}</p>
                      <input type="number" placeholder={ph} value={val} onChange={e => set(e.target.value)}
                        className="w-full rounded-xl px-2 py-3 text-white text-center font-bold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border text-sm"
                        style={{ background:'rgba(255,255,255,0.07)', borderColor:'rgba(255,255,255,0.12)' }}/>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-2 rounded-xl px-4 py-3 mb-4"
                  style={{ background:'rgba(239,68,68,0.12)', border:'1px solid rgba(239,68,68,0.3)' }}>
                  <AlertTriangle size={14} className="text-red-400 flex-shrink-0 mt-0.5"/>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              <button onClick={handleCalculate}
                className="w-full py-4 font-black rounded-xl text-white text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow:'0 0 20px rgba(124,58,237,0.4)' }}>
                <Sparkles size={17}/>
                Giải mã bản đồ của tôi
              </button>

              <button onClick={() => setPhase('intro')}
                className="mt-3 w-full py-3 text-white/50 hover:text-white text-sm font-semibold transition-colors cursor-pointer">
                ← Quay lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) return null;

  /* ══════════════════════════════════════════
     RESULT — LOADING
  ══════════════════════════════════════════ */
  if (resultSubPhase === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden"
        style={{ background: DARK_BG }}>
        <style>{ANIM_STYLES}</style>

        {/* Glow behind spinner */}
        <div className="absolute rounded-full pointer-events-none"
          style={{ width:'min(400px,80vw)', height:'min(400px,80vw)', background:'radial-gradient(circle,rgba(139,92,246,0.2) 0%,transparent 70%)', animation:'pulse-glow 2s ease-in-out infinite' }}/>

        <div className="relative z-10 text-center px-4">
          {/* Spinning ring */}
          <div className="relative mx-auto mb-8"
            style={{ width: 120, height: 120 }}>
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20"/>
            <div className="absolute inset-0 rounded-full border-t-2 border-purple-400"
              style={{ animation:'spin-slow 1.2s linear infinite' }}/>
            <div className="absolute inset-[12px] rounded-full border-t-2 border-indigo-400/60"
              style={{ animation:'spin-reverse 0.9s linear infinite' }}/>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-black text-white" style={{ animation:'pulse-glow 1.5s ease-in-out infinite' }}>
                {result.lifePathNum}
              </span>
            </div>
          </div>

          <p className="text-purple-200 font-bold text-base sm:text-lg mb-3">Đang giải mã vũ trụ của bạn...</p>
          <p className="text-slate-500 text-sm mb-6">Tính toán 6 chỉ số từ ngày sinh và tên của bạn</p>

          {/* Loading dots */}
          <div className="flex items-center justify-center gap-2">
            {[0,1,2].map(i => (
              <div key={i} className="w-2 h-2 rounded-full bg-purple-400"
                style={{ animation:`loading-dots 1.4s ease-in-out ${i*0.16}s infinite` }}/>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════
     RESULT — HERO (số đường đời lớn)
  ══════════════════════════════════════════ */
  if (resultSubPhase === 'hero') {
    const lp = result.lifePath;
    const grad = gradientStyle(lp.colorFrom, lp.colorTo);
    const others = [
      { num: result.destinyNum,     p: result.destiny,     label:'Sứ Mệnh' },
      { num: result.soulUrgeNum,    p: result.soulUrge,    label:'Linh Hồn' },
      { num: result.personalityNum, p: result.personality, label:'Nhân Cách' },
      { num: result.birthdayNum,    p: result.birthday,    label:'Ngày Sinh' },
      { num: result.attitudeNum,    p: result.attitude,    label:'Thái Độ' },
    ];

    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden px-4 py-16"
        style={{ background: DARK_BG }}>
        <style>{ANIM_STYLES}</style>

        {/* Ambient glow layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ width:'min(800px,130vw)', height:'min(800px,130vw)', background:`radial-gradient(circle, ${lp.colorFrom}22 0%, transparent 60%)` }}/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ width:'min(400px,70vw)', height:'min(400px,70vw)', background:`radial-gradient(circle, ${lp.colorFrom}35 0%, transparent 70%)` }}/>
        </div>

        {/* Star field */}
        {[...Array(50)].map((_,i) => (
          <div key={i} className="absolute rounded-full bg-white pointer-events-none"
            style={{ width:i%5===0?2:1, height:i%5===0?2:1, opacity:0.05+(i%7)*0.04,
              top:`${(i*13+5)%100}%`, left:`${(i*19+7)%97}%` }}/>
        ))}

        <div className="relative z-10 flex flex-col items-center w-full max-w-sm mx-auto"
          style={{ animation:'reveal-hero 0.9s cubic-bezier(0.16,1,0.3,1) forwards' }}>

          {/* Top info: name + dob */}
          <div className="text-center mb-8">
            <p className="text-white font-black text-base sm:text-lg tracking-widest uppercase mb-1">{result.fullName}</p>
            <p className="text-white/85 text-xs">Ngày sinh: <span className="text-amber-300 font-bold">{result.dob}</span></p>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-bold mb-6 tracking-widest uppercase"
            style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.18)' }}>
            <Sparkles size={11}/> Số Đường Đời của bạn
          </div>

          {/* Big number — perfectly centered */}
          <div className="relative flex items-center justify-center mb-8"
            style={{ width: 'min(240px,65vw)', height: 'min(240px,65vw)' }}>
            {/* Blur glow behind */}
            <div className="absolute inset-0 rounded-full"
              style={{ ...grad, opacity: 0.3, filter: 'blur(32px)', transform: 'scale(1.1)' }}/>
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border border-white/10"
              style={{ animation: 'spin-slow 20s linear infinite' }}/>
            {/* Dashed inner ring */}
            <div className="absolute rounded-full border border-dashed border-white/10"
              style={{ inset: 10, animation: 'spin-reverse 15s linear infinite' }}/>
            {/* Main filled circle */}
            <div className="absolute rounded-full flex items-center justify-center"
              style={{ inset: 18, ...grad, boxShadow: `0 0 40px ${lp.colorFrom}88, 0 8px 32px rgba(0,0,0,0.5)` }}>
              <span className="font-black text-white leading-none select-none"
                style={{ fontSize: 'clamp(4.5rem,18vw,7.5rem)', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
                {result.lifePathNum}
              </span>
            </div>
          </div>

          {/* Name & keyword */}
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight text-center">{lp.name}</h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 text-center max-w-xs">{lp.keyword}</p>

          {/* Divider */}
          <div className="w-full flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background:'rgba(255,255,255,0.15)' }}/>
            <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">5 chỉ số khác</span>
            <div className="flex-1 h-px" style={{ background:'rgba(255,255,255,0.15)' }}/>
          </div>

          {/* 5 other numbers — horizontal row */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 mb-10 w-full">
            {others.map(({ num, p, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="rounded-full flex items-center justify-center font-black text-white shadow-lg border border-white/10"
                  style={{ ...gradientStyle(p.colorFrom, p.colorTo), width: 44, height: 44, fontSize: 16 }}>{num}</div>
                <p className="text-white/65 text-[10px] font-semibold whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => { setResultSubPhase('detail'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-3 px-8 py-4 font-black text-white rounded-2xl text-base transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden w-full sm:w-auto justify-center"
            style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow:'0 0 30px rgba(124,58,237,0.5)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background:'linear-gradient(135deg,#8b5cf6,#6366f1)' }}/>
            <span className="relative z-10">Xem phân tích chi tiết</span>
            <ChevronDown size={18} className="relative z-10 group-hover:translate-y-0.5 transition-transform duration-200 flex-shrink-0"/>
          </button>

          <p className="text-white/40 text-xs mt-4">Phân tích 6 chỉ số · 5 chiều sâu mỗi chỉ số</p>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════
     RESULT — DETAIL (6 cards đầy đủ)
  ══════════════════════════════════════════ */
  const summaryItems = [
    { icon: <Map size={14}/>,      label: 'Đường Đời', num: result.lifePathNum,    p: result.lifePath,    main: true  },
    { icon: <Target size={14}/>,   label: 'Sứ Mệnh',   num: result.destinyNum,     p: result.destiny,     main: false },
    { icon: <Heart size={14}/>,    label: 'Linh Hồn',  num: result.soulUrgeNum,    p: result.soulUrge,    main: false },
    { icon: <User size={14}/>,     label: 'Nhân Cách', num: result.personalityNum, p: result.personality, main: false },
    { icon: <Calendar size={14}/>, label: 'Ngày Sinh', num: result.birthdayNum,    p: result.birthday,    main: false },
    { icon: <Eye size={14}/>,      label: 'Thái Độ',   num: result.attitudeNum,    p: result.attitude,    main: false },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background:'#f1f5f9' }}>
      <style>{ANIM_STYLES}</style>

      {/* ── Hero summary bar ── */}
      <div className="pb-8 sm:pb-10 pt-8 sm:pt-10 px-4 sm:px-6"
        style={{ background:'linear-gradient(160deg,#0f0c29,#302b63,#24243e)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-purple-200 text-xs font-semibold mb-4 border border-purple-400/30"
            style={{ background:'rgba(139,92,246,0.2)' }}>
            <Sparkles size={12}/> Bản Đồ Thần Số Học
          </div>
          <h1 className="font-black text-white mb-1 tracking-tight uppercase leading-tight"
            style={{ fontSize:'clamp(1.1rem,3.5vw,2rem)' }}>
            {result.fullName}
          </h1>
          <p className="text-purple-300/70 text-xs sm:text-sm mb-6">
            Ngày sinh: <span className="font-bold text-amber-400">{result.dob}</span>
          </p>

          {/* 6 tiles */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-xs sm:max-w-3xl mx-auto">
            {summaryItems.map(({ icon, label, num, p, main }, i) => (
              <div key={i}
                className={`rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1.5 sm:px-2 text-white text-center shadow-lg border border-white/10 ${main ? 'ring-2 ring-amber-400/60' : ''}`}
                style={gradientStyle(p.colorFrom, p.colorTo)}>
                <div className="flex justify-center mb-1 opacity-80">{icon}</div>
                <p className={`font-black leading-none ${main ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{num}</p>
                <p className="text-[10px] sm:text-xs font-semibold opacity-80 mt-1 leading-tight">{label}</p>
                {main && <p className="text-[9px] opacity-60 mt-0.5 font-medium">Core</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 space-y-8 sm:space-y-10">

        <section className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 sm:h-8 rounded-full flex-shrink-0" style={{ background:'linear-gradient(#6366f1,#8b5cf6)' }}/>
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-800">Nhóm Ngày Sinh</h2>
              <p className="text-slate-500 text-xs">Thiên hướng tự nhiên · Con đường sống · Tài năng bẩm sinh</p>
            </div>
          </div>
          <NumberCard number={result.lifePathNum} label="Số Đường Đời — Core"  labelIcon={<Map size={14}/>}      profile={result.lifePath}  indexType="lifepath"/>
          <NumberCard number={result.birthdayNum} label="Số Ngày Sinh"          labelIcon={<Calendar size={14}/>} profile={result.birthday}  indexType="birthday"/>
          <NumberCard number={result.attitudeNum} label="Số Thái Độ"             labelIcon={<Eye size={14}/>}      profile={result.attitude}  indexType="attitude"/>
        </section>

        <section className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 sm:h-8 rounded-full flex-shrink-0" style={{ background:'linear-gradient(#f59e0b,#ef4444)' }}/>
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-800">Nhóm Họ Tên</h2>
              <p className="text-slate-500 text-xs">Khát vọng sâu thẳm · Vai trò cuộc đời · Vỏ bọc xã hội</p>
            </div>
          </div>
          <NumberCard number={result.destinyNum}     label="Số Sứ Mệnh (Biểu Đạt)" labelIcon={<Target size={14}/>} profile={result.destiny}     indexType="destiny"/>
          <NumberCard number={result.soulUrgeNum}    label="Số Linh Hồn"             labelIcon={<Heart size={14}/>}  profile={result.soulUrge}    indexType="soul"/>
          <NumberCard number={result.personalityNum} label="Số Nhân Cách"            labelIcon={<User size={14}/>}   profile={result.personality} indexType="personality"/>
        </section>

        {/* Reset */}
        <div className="text-center py-4 sm:py-6 border-t border-slate-200">
          <p className="text-slate-400 text-sm mb-4">Muốn xem lại con số chính?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => { setResultSubPhase('hero'); window.scrollTo({ top:0, behavior:'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-2xl transition-all duration-200 cursor-pointer text-sm"
              style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
              <Star size={14}/> Xem số đường đời
            </button>
            <button onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-sm">
              <RotateCcw size={14}/> Tính lại từ đầu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
