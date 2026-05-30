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

const DOB_DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const DOB_MONTHS = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
const DOB_YEARS = Array.from({ length: 80 }, (_, i) => String(2005 - i));

/* ─── CSS Animations (injected once) ─── */
const ANIM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;600&display=swap');
  @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes float-y { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
  @keyframes pulse-glow { 0%,100% { opacity:0.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.05); } }
  @keyframes reveal-hero { from { opacity:0; transform:scale(0.6) translateY(30px); } to { opacity:1; transform:scale(1) translateY(0); } }
  @keyframes fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
  @keyframes loading-dots { 0%,80%,100%{opacity:0;transform:scale(0.8)} 40%{opacity:1;transform:scale(1)} }
  @keyframes ring-pulse { 0%,100%{opacity:0.15} 50%{opacity:0.35} }
  @keyframes streak {
    0% { transform: rotate(var(--a,15deg)) translateX(-120%); opacity:0; }
    10% { opacity:1; }
    90% { opacity:1; }
    100% { transform: rotate(var(--a,15deg)) translateX(220%); opacity:0; }
  }
  @keyframes ripple-out {
    0% { transform:scale(1); opacity:0.4; }
    100% { transform:scale(2.2); opacity:0; }
  }
  .gold-text { background:linear-gradient(135deg,#c9a84c,#f59e0b,#fbbf24); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .violet-text { background:linear-gradient(135deg,#c4b5fd,#818cf8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .glass { background:rgba(255,255,255,0.04); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.08); }
  .glass-gold { background:rgba(201,168,76,0.06); backdrop-filter:blur(12px); border:1px solid rgba(201,168,76,0.15); }
  .cs-fade-up { animation:fade-up 0.8s ease-out both; }
  .cs-float { animation:float-y 6s ease-in-out infinite; }
  .cs-float2 { animation:float-y 8s ease-in-out 1s infinite; }
  .cs-spin-slow { animation:spin-slow 40s linear infinite; }
  .cs-spin-rev { animation:spin-reverse 28s linear infinite; }
  .cs-spin-med { animation:spin-slow 20s linear infinite; }
  .cs-pulse-glow { animation:pulse-glow 3s ease-in-out infinite; }
  @keyframes orbit-glow { 0%,100%{box-shadow:0 0 8px rgba(251,191,36,0.3),0 0 0 1px rgba(201,168,76,0.2)} 50%{box-shadow:0 0 22px rgba(251,191,36,0.9),0 0 0 2.5px rgba(201,168,76,0.7)} }
  @keyframes badge-ring { 0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,0.5),inset 0 0 10px rgba(201,168,76,0.05)} 50%{box-shadow:0 0 0 8px rgba(201,168,76,0),inset 0 0 20px rgba(201,168,76,0.15)} }
  @keyframes big-num-glow { 0%,100%{text-shadow:0 0 20px rgba(255,255,255,0.25),0 4px 24px rgba(0,0,0,0.5)} 50%{text-shadow:0 0 50px rgba(255,255,255,0.8),0 0 90px rgba(255,255,255,0.3),0 4px 24px rgba(0,0,0,0.5)} }
  @keyframes num-shimmer { 0%{left:-80%} 100%{left:130%} }
  @keyframes insight-pop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
  .cs-orbit-glow { animation:orbit-glow 2.5s ease-in-out infinite; }
  .cs-badge-ring { animation:badge-ring 2s ease-in-out infinite; }
  .cs-big-num { animation:big-num-glow 3s ease-in-out infinite; }
  .cs-insight-num { animation:insight-pop 4s ease-in-out infinite; }
  @keyframes aurora-shift { 0%,100%{opacity:0.6;transform:scale(1) translate(0,0)} 33%{opacity:0.8;transform:scale(1.08) translate(-2%,1%)} 66%{opacity:0.5;transform:scale(0.95) translate(2%,-1%)} }
  @keyframes card-shimmer { 0%{left:-100%} 100%{left:200%} }
  .aurora-1 { animation:aurora-shift 12s ease-in-out infinite; }
  .aurora-2 { animation:aurora-shift 16s ease-in-out 4s infinite; }
  .aurora-3 { animation:aurora-shift 20s ease-in-out 8s infinite; }
  .form-field-label { font-family:'Cinzel',serif; font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase; color:#c9a84c; margin-bottom:0.65rem; display:block; text-shadow:0 0 16px rgba(201,168,76,0.45); }
  .cosmic-input { width:100%; background:rgba(15,8,32,0.6); border:1px solid rgba(124,58,237,0.4); border-radius:12px; padding:15px 20px; color:#e2d9f3; font-family:'Raleway',sans-serif; font-size:1rem; font-weight:400; transition:border-color 0.2s,box-shadow 0.2s,background 0.2s; caret-color:#c9a84c; outline:none; box-shadow:inset 0 1px 0 rgba(255,255,255,0.05),0 2px 8px rgba(0,0,0,0.3); }
  .cosmic-input::placeholder { color:rgba(167,139,250,0.3); font-weight:300; }
  .cosmic-input:focus { border-color:rgba(201,168,76,0.7); box-shadow:0 0 0 3px rgba(201,168,76,0.12),0 0 28px rgba(201,168,76,0.18),inset 0 1px 0 rgba(255,255,255,0.06); background:rgba(20,8,45,0.7); }
  .cosmic-input:hover:not(:focus) { border-color:rgba(167,139,250,0.55); }
  .cosmic-select { appearance:none; -webkit-appearance:none; background:rgba(15,8,32,0.6) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='rgba(201,168,76,0.8)' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right 14px center; border:1px solid rgba(124,58,237,0.4); border-radius:12px; padding:15px 36px 15px 16px; color:#e2d9f3; font-family:'Raleway',sans-serif; font-size:0.92rem; font-weight:400; transition:border-color 0.2s,box-shadow 0.2s; outline:none; cursor:pointer; width:100%; box-shadow:inset 0 1px 0 rgba(255,255,255,0.05),0 2px 8px rgba(0,0,0,0.3); }
  .cosmic-select:focus { border-color:rgba(201,168,76,0.7); box-shadow:0 0 0 3px rgba(201,168,76,0.12),0 0 28px rgba(201,168,76,0.18); background-color:rgba(20,8,45,0.7); }
  .cosmic-select:hover:not(:focus) { border-color:rgba(167,139,250,0.55); }
  .cosmic-select option { background:#0f0820; color:#e2d9f3; }
  .form-card { background:rgba(10,4,28,0.75); backdrop-filter:blur(40px); -webkit-backdrop-filter:blur(40px); border:1px solid rgba(124,58,237,0.2); border-radius:24px; box-shadow:0 40px 100px rgba(0,0,0,0.65),0 0 0 1px rgba(255,255,255,0.04) inset,0 1px 0 rgba(255,255,255,0.07) inset; }
  .submit-btn { width:100%; padding:17px; border-radius:12px; background:linear-gradient(135deg,#5b21b6 0%,#4338ca 50%,#3730a3 100%); border:1px solid rgba(167,139,250,0.5); color:#e2d9f3; font-family:'Cinzel',serif; font-size:0.8rem; letter-spacing:0.22em; text-transform:uppercase; cursor:pointer; transition:all 0.25s cubic-bezier(0.23,1,0.32,1); position:relative; overflow:hidden; box-shadow:0 0 24px rgba(124,58,237,0.35),0 4px 16px rgba(0,0,0,0.4); }
  .submit-btn::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent); transform:skewX(-20deg); transition:none; }
  .submit-btn:not(:disabled):hover::after { animation:card-shimmer 0.6s ease-out forwards; }
  .submit-btn:not(:disabled):hover { border-color:rgba(201,168,76,0.6); box-shadow:0 0 48px rgba(124,58,237,0.5),0 0 80px rgba(201,168,76,0.12),0 4px 20px rgba(0,0,0,0.4); transform:translateY(-2px); color:#fde68a; background:linear-gradient(135deg,#6d28d9 0%,#4f46e5 50%,#4338ca 100%); }
  .submit-btn:not(:disabled):active { transform:translateY(0); }
  .submit-btn:disabled { opacity:0.3; cursor:not-allowed; box-shadow:none; }
  .divider-line { height:1px; background:linear-gradient(90deg,transparent,rgba(124,58,237,0.35),rgba(201,168,76,0.25),transparent); margin:4px 0; }
  .field-icon { position:absolute; left:15px; top:50%; transform:translateY(-50%); color:rgba(201,168,76,0.5); pointer-events:none; font-size:0.85rem; transition:color 0.2s; }
  .cosmic-input:focus ~ .field-icon, .has-icon:focus + .field-icon { color:rgba(201,168,76,0.9); }
  .has-icon { padding-left:42px !important; }
  .select-label { font-family:'Cinzel',serif; font-size:0.58rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(201,168,76,0.5); margin-bottom:0.35rem; display:block; }
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

/* ─── Cosmic Helper Components ─── */
function SacredRings({ size = 400, gold = false }: { size?: number; gold?: boolean }) {
  const c = size / 2;
  const stroke = gold ? 'rgba(201,168,76,0.35)' : 'rgba(124,58,237,0.25)';
  const r22 = size * 0.22;
  const r42 = size * 0.42;
  const petals = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60) * Math.PI / 180;
    return { x: c + Math.cos(a) * r22, y: c + Math.sin(a) * r22 };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {[0.12, 0.22, 0.32, 0.42, 0.48].map((f, i) => (
        <circle key={i} cx={c} cy={c} r={size * f} stroke={stroke} strokeWidth={0.8} />
      ))}
      {petals.map((p, i) => (
        <circle key={`p${i}`} cx={p.x} cy={p.y} r={r22} stroke={stroke} strokeWidth={0.5} />
      ))}
      {Array.from({ length: 6 }, (_, i) => {
        const a1 = (i * 60) * Math.PI / 180;
        const a2 = ((i + 3) * 60) * Math.PI / 180;
        return <line key={`l${i}`} x1={c + Math.cos(a1) * r42} y1={c + Math.sin(a1) * r42} x2={c + Math.cos(a2) * r42} y2={c + Math.sin(a2) * r42} stroke={stroke} strokeWidth={0.5} />;
      })}
    </svg>
  );
}

function GoldParticles({ count = 12 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none cs-pulse-glow"
          style={{
            width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
            background: '#c9a84c', opacity: 0.25 + (i % 5) * 0.1,
            top: `${(i * 37 + 13) % 86 + 7}%`, left: `${(i * 53 + 7) % 86 + 7}%`,
            boxShadow: '0 0 6px rgba(201,168,76,0.7)',
            animationDelay: `${i * 0.3}s`,
          }} />
      ))}
    </>
  );
}

function ImageWithFallback({ src, alt, className, style }: { src?: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return (
      <div className={className} style={{ ...style, background: 'linear-gradient(135deg, rgba(124,58,237,0.5) 0%, rgba(201,168,76,0.3) 50%, rgba(59,130,246,0.4) 100%)' }} />
    );
  }
  return <img src={src} alt={alt} className={className} style={style} onError={() => setErr(true)} />;
}

function CosmicButton({ onClick, children, size = 'md', variant = 'violet' }: {
  onClick?: () => void; children: React.ReactNode; size?: 'sm' | 'md' | 'lg'; variant?: 'gold' | 'violet';
}) {
  const pad = size === 'lg' ? 'px-9 py-4' : size === 'sm' ? 'px-4 py-2' : 'px-6 py-3';
  const fs = size === 'lg' ? 'text-sm' : size === 'sm' ? 'text-xs' : 'text-sm';
  const bg = variant === 'gold' ? 'linear-gradient(135deg,#c9a84c,#f59e0b)' : 'rgba(124,58,237,0.25)';
  const border = variant === 'gold' ? 'rgba(201,168,76,0.7)' : 'rgba(124,58,237,0.45)';
  const color = variant === 'gold' ? '#0a0617' : '#c4b5fd';
  const shadow = variant === 'gold' ? '0 0 28px rgba(201,168,76,0.4)' : '0 0 20px rgba(124,58,237,0.3)';
  return (
    <button onClick={onClick} className={`${pad} ${fs} font-semibold rounded-full tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap`}
      style={{ background: bg, border: `1px solid ${border}`, color, boxShadow: shadow, fontFamily: "'Cinzel', serif" }}>
      {children}
    </button>
  );
}

/* ─── Landing Sections ─── */
function LandingHero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: 64 }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full"
          style={{ background: 'radial-gradient(ellipse at 15% 40%, rgba(124,58,237,0.18) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3"
          style={{ background: 'radial-gradient(ellipse at 85% 75%, rgba(59,130,246,0.14) 0%, transparent 60%)' }} />
      </div>
      {[15, 25, 45].map((angle, i) => (
        <div key={i} className="absolute h-px pointer-events-none"
          style={{
            top: `${20 + i * 25}%`, left: '-10%', width: '60%',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
            transform: `rotate(${angle}deg)`,
            animation: `streak ${8 + i * 3}s linear ${i * 2}s infinite`,
            ['--a' as string]: `${angle}deg`,
          }} />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="cs-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>
              Thần Số Học AI
            </span>
          </div>
          <h1 className="mb-6" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 700, lineHeight: 1.1 }}>
            <span className="block" style={{ color: '#e2d9f3' }}>Thần Số Học</span>
            <span className="block gold-text">Toàn Diện</span>
            <span className="block" style={{ color: '#c4b5fd' }}>&amp; Chuyên Sâu</span>
          </h1>
          <p className="mb-10 leading-relaxed max-w-lg" style={{ fontFamily: "'Raleway', sans-serif", fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', color: 'rgba(196,181,253,0.75)', fontWeight: 300 }}>
            Hệ thống AI giải mã bản đồ số học của bạn từ ngày sinh và họ tên — khám phá sứ mệnh tâm hồn, con đường định mệnh và mật mã vũ trụ ẩn giấu.
          </p>
          <div className="flex flex-row items-center gap-3 flex-wrap">
            <CosmicButton onClick={onStart} size="md" variant="gold">Bắt Đầu Hành Trình</CosmicButton>
            <CosmicButton size="md" variant="violet">Khám Phá Thêm</CosmicButton>
          </div>
          <div className="mt-14 flex gap-10">
            {[['9', 'Chỉ số phân tích'], ['5', 'Chiều sâu tâm linh'], ['∞', 'Hành trình số phận']].map(([n, l]) => (
              <div key={l}>
                <div className="gold-text text-3xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>{n}</div>
                <div className="text-xs mt-1 tracking-wider" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.5)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <div className="relative cs-float" style={{ width: 'clamp(300px,40vw,480px)', height: 'clamp(300px,40vw,480px)' }}>
            <div className="absolute inset-0 cs-spin-slow"><SacredRings size={480} gold /></div>
            <div className="absolute inset-[40px] cs-spin-rev"><SacredRings size={400} /></div>
            <div className="absolute inset-[80px] rounded-full overflow-hidden"
              style={{ boxShadow: '0 0 60px rgba(201,168,76,0.3), 0 0 120px rgba(124,58,237,0.2)' }}>
              <ImageWithFallback alt="Sacred numerology wheel" className="w-full h-full object-cover" />
            </div>
            {[1,2,3,4,5,6,7,8,9].map((n, i) => {
              const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
              const r = 47;
              const palette = ['#fbbf24','#a78bfa','#60a5fa','#34d399','#f87171','#fb923c','#c084fc','#38bdf8','#facc15'];
              const col = palette[i];
              return (
                <div key={n} className="absolute flex items-center justify-center rounded-full cs-orbit-glow"
                  style={{
                    left: `${50 + Math.cos(angle) * r}%`, top: `${50 + Math.sin(angle) * r}%`,
                    transform: 'translate(-50%,-50%)', width: 40, height: 40,
                    background: `radial-gradient(circle at 35% 35%, ${col}22 0%, rgba(0,0,0,0.35) 100%)`,
                    border: `1.5px solid ${col}70`,
                    fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 900, color: col,
                    textShadow: `0 0 14px ${col}dd, 0 0 30px ${col}66`,
                    animationDelay: `${i * 0.28}s`,
                  }}>
                  {n}
                </div>
              );
            })}
            {[1,2,3].map(i => (
              <div key={i} className="absolute inset-0 rounded-full pointer-events-none"
                style={{ border: '1px solid rgba(124,58,237,0.2)', animation: `ripple-out 3s ease-out ${i}s infinite` }} />
            ))}
            <GoldParticles count={16} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(180deg, #c9a84c, transparent)' }} />
      </div>
    </section>
  );
}

function LandingAwakening() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="relative flex-shrink-0 cs-float2" style={{ width: 300, height: 360 }}>
          <div className="absolute -inset-8 cs-spin-slow opacity-30"><SacredRings size={460} gold /></div>
          <div className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(201,168,76,0.15), 0 30px 60px rgba(0,0,0,0.6)', height: 360 }}>
            <ImageWithFallback alt="Sacred numerology book" className="w-full h-full object-cover" style={{ height: 360 }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.12) 60%, transparent 80%)' }} />
          </div>
          <GoldParticles count={18} />
        </div>
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>Thức Tỉnh</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)' }} />
          </div>
          <h2 className="mb-6" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.15, color: '#e2d9f3' }}>
            Cuốn Sách Cổ Đại<br /><span className="gold-text">Đã Chờ Đợi Bạn</span>
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.7)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300, marginBottom: '2rem' }}>
            Từ hàng nghìn năm trước, các nền văn minh vĩ đại đã sử dụng con số như ngôn ngữ vũ trụ. Mỗi con số mang trong mình một tần số rung động riêng biệt — và bản đồ số học của bạn là chữ ký duy nhất của linh hồn.
          </p>
          <div className="space-y-4">
            {[
              { n: '11', label: 'Số Chủ — Con đường khai sáng', col: '#fbbf24' },
              { n: '7',  label: 'Số Linh Hồn — Trí tuệ bí ẩn', col: '#c084fc' },
              { n: '33', label: 'Số Sứ Mệnh — Thầy của thầy', col: '#60a5fa' },
            ].map(({ n, label, col }, idx) => (
              <div key={n} className="flex items-center gap-4 glass rounded-xl px-5 py-3 group transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative flex-shrink-0 flex items-center justify-center cs-badge-ring rounded-full"
                  style={{ width: 48, height: 48, background: `radial-gradient(circle, ${col}18, transparent 70%)`, animationDelay: `${idx * 0.7}s` }}>
                  <span className="font-black text-lg relative z-10" style={{ fontFamily: "'Cinzel', serif", color: col, textShadow: `0 0 12px ${col}cc, 0 0 24px ${col}55` }}>{n}</span>
                </div>
                <span className="text-sm" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingCosmicEngine() {
  const SIZE = 480;
  const C = SIZE / 2;
  const LABEL_R = 260;
  const labels = [
    { label: 'Ngày Sinh', angle: 0 },
    { label: 'Linh Hồn', angle: 72 },
    { label: 'Sứ Mệnh', angle: 144 },
    { label: 'Biểu Hiện', angle: 216 },
    { label: 'Nhân Cách', angle: 288 },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.1) 0%, transparent 60%)' }} />
      <div className="relative z-10 text-center mb-16 px-6">
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 700, color: '#e2d9f3', marginBottom: '1rem' }}>
          Cỗ Máy <span className="violet-text">Vũ Trụ</span>
        </h2>
        <p style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', maxWidth: 540, margin: '0 auto', fontWeight: 300 }}>
          Hệ thống số học thần thánh hoạt động như một vòng quay thiên cầu, mã hoá mọi khía cạnh con người.
        </p>
      </div>
      <div className="flex items-center justify-center" style={{ height: SIZE + 40 }}>
        <div className="relative" style={{ width: SIZE, height: SIZE }}>
          {/* Outer ring */}
          <div className="absolute inset-0 cs-spin-slow"><SacredRings size={SIZE} /></div>
          {/* Inner ring */}
          <div className="absolute cs-spin-rev" style={{ inset: 60 }}><SacredRings size={SIZE - 120} gold /></div>
          {/* Center image */}
          <div className="absolute rounded-full overflow-hidden"
            style={{ inset: 120, boxShadow: '0 0 80px rgba(124,58,237,0.5), 0 0 160px rgba(59,130,246,0.2)' }}>
            <div className="w-full h-full cs-spin-med">
              <ImageWithFallback alt="Numerology wheel" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Center glow */}
          <div className="absolute cs-pulse-glow"
            style={{ width: 48, height: 48, left: C - 24, top: C - 24, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.9), rgba(124,58,237,0.4))', filter: 'blur(4px)' }} />
          {/* Orbital labels - positioned inside the SIZE×SIZE container */}
          {labels.map(({ label, angle }) => {
            const rad = (angle - 90) * Math.PI / 180;
            return (
              <div key={label} className="absolute glass rounded-full px-3 py-1.5 text-xs tracking-wider"
                style={{
                  left: C + Math.cos(rad) * LABEL_R,
                  top: C + Math.sin(rad) * LABEL_R,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: "'Cinzel', serif",
                  color: '#c9a84c',
                  whiteSpace: 'nowrap',
                  fontSize: 11,
                }}>
                {label}
              </div>
            );
          })}
          <GoldParticles count={16} />
        </div>
      </div>
    </section>
  );
}

function LandingAnalysis() {
  const cards = [
    { icon: '①', title: 'Số Đường Đời', desc: 'Tính từ ngày tháng năm sinh — chỉ số cốt lõi định nghĩa hành trình và sứ mệnh của bạn.' },
    { icon: '②', title: 'Số Linh Hồn', desc: 'Rút ra từ nguyên âm trong tên — ước muốn sâu thẳm nhất của tâm hồn bạn.' },
    { icon: '③', title: 'Số Biểu Hiện', desc: 'Từ toàn bộ tên đầy đủ — tài năng thiên bẩm và năng lực tiềm ẩn chờ được khai mở.' },
    { icon: '④', title: 'Phân Tích 5 Chiều', desc: 'Khám phá tình yêu, sự nghiệp, tài chính, sức khỏe và tâm linh qua lăng kính số học.' },
    { icon: '⑤', title: 'Chu Kỳ Cá Nhân', desc: 'Dự đoán các giai đoạn quan trọng trong cuộc sống theo vòng quay số học 9 năm.' },
    { icon: '⑥', title: 'AI Giải Mã', desc: 'Trí tuệ nhân tạo phân tích bản đồ hoàn chỉnh và tạo ra bản tường giải cá nhân hóa sâu sắc.' },
  ];
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>Phân Tích Chuyên Sâu</span>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, color: '#e2d9f3' }}>
            Hệ Thống <span className="gold-text">9 Chỉ Số</span> Toàn Diện
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div key={i} className="glass rounded-2xl p-7 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.3)', borderColor: i % 2 === 0 ? 'rgba(124,58,237,0.2)' : 'rgba(201,168,76,0.15)' }}>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)' }} />
              <div className="mb-4 text-3xl gold-text" style={{ fontFamily: "'Cinzel', serif" }}>{card.icon}</div>
              <h3 className="mb-3 font-semibold" style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', color: '#e2d9f3', letterSpacing: '0.05em' }}>{card.title}</h3>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(196,181,253,0.65)', fontWeight: 300 }}>{card.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingInsights() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, color: '#e2d9f3' }}>
            Thư <span className="violet-text">Viện Số Học</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridAutoRows: 160 }}>
          <div className="glass-gold rounded-2xl p-6 row-span-2 col-span-1 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-14 h-14 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.25), transparent 70%)' }} />
              <div className="text-5xl gold-text font-black cs-insight-num relative z-10" style={{ fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.6))' }}>1</div>
            </div>
            <div><h4 className="font-semibold mb-2 text-sm" style={{ fontFamily: "'Cinzel', serif", color: '#fbbf24' }}>Người Tiên Phong</h4>
              <p className="text-xs leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.65)', fontWeight: 300 }}>Lãnh đạo bẩm sinh, ý chí sắt đá — không gì ngăn cản được hành trình chinh phục.</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 col-span-2 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.15), transparent 70%)' }} />
            <div className="text-4xl violet-text font-black cs-insight-num relative z-10" style={{ fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 10px rgba(196,181,253,0.5))', animationDelay: '0.5s' }}>7</div>
            <div><h4 className="font-semibold mb-1 text-sm" style={{ fontFamily: "'Cinzel', serif", color: '#c4b5fd' }}>Người Tìm Kiếm Chân Lý</h4>
              <p className="text-xs" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.55)', fontWeight: 300 }}>Trực giác huyền bí, tâm trí phân tích, kết nối với chiều sâu vũ trụ.</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="text-3xl gold-text font-black cs-insight-num" style={{ fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.5))', animationDelay: '1s' }}>3</div>
            <p className="text-xs" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontWeight: 300 }}>Sáng tạo &amp; biểu đạt.</p>
          </div>
          <div className="glass rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="text-3xl font-black cs-insight-num" style={{ color: '#60a5fa', fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 8px rgba(96,165,250,0.6))', animationDelay: '1.5s' }}>9</div>
            <p className="text-xs" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontWeight: 300 }}>Trí tuệ nhân loại.</p>
          </div>
          <div className="glass-gold rounded-2xl p-6 col-span-2 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>Năm 2026</div>
            <div><h4 className="font-semibold mb-1 text-sm" style={{ fontFamily: "'Cinzel', serif", color: '#fbbf24' }}>Chu Kỳ Số 9</h4>
              <p className="text-xs" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontWeight: 300 }}>Năm hoàn kết — buông bỏ, chuyển hóa và chuẩn bị cho vòng sinh mới.</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 row-span-2 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.12), transparent 70%)' }} />
            <div className="text-5xl violet-text font-black cs-insight-num relative z-10" style={{ fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 14px rgba(196,181,253,0.7))', animationDelay: '2s' }}>11</div>
            <div><h4 className="font-semibold mb-2 text-sm" style={{ fontFamily: "'Cinzel', serif", color: '#c4b5fd' }}>Số Chủ</h4>
              <p className="text-xs leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontWeight: 300 }}>Trực giác thiên tài, kết nối tâm linh, sứ mệnh khai sáng nhân loại.</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="text-3xl gold-text font-black cs-insight-num" style={{ fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.5))', animationDelay: '2.5s' }}>5</div>
            <p className="text-xs" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontWeight: 300 }}>Tự do &amp; phiêu lưu.</p>
          </div>
          <div className="glass rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="text-3xl font-black cs-insight-num" style={{ color: '#34d399', fontFamily: "'Cinzel', serif", filter: 'drop-shadow(0 0 10px rgba(52,211,153,0.6))', animationDelay: '3s' }}>22</div>
            <p className="text-xs" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontWeight: 300 }}>Kiến trúc sư vũ trụ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingCTA({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 75%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.08) 0%, transparent 50%)' }} />
      </div>
      <div className="relative z-10 mb-12" style={{ width: 240, height: 240 }}>
        <div className="absolute inset-0 cs-spin-slow"><SacredRings size={240} gold /></div>
        <div className="absolute inset-0 cs-spin-rev"><SacredRings size={240} /></div>
        <div className="absolute inset-[40px] rounded-full cs-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.6) 0%, rgba(124,58,237,0.4) 40%, rgba(59,130,246,0.2) 70%, transparent 100%)', filter: 'blur(2px)', boxShadow: '0 0 80px rgba(201,168,76,0.4), 0 0 160px rgba(124,58,237,0.3)' }} />
        {[1,2,3].map(i => (
          <div key={i} className="absolute inset-0 rounded-full pointer-events-none"
            style={{ border: '1px solid rgba(201,168,76,0.15)', animation: `ripple-out 4s ease-out ${i * 1.2}s infinite` }} />
        ))}
        <GoldParticles count={20} />
      </div>
      <div className="relative z-10">
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>Vũ Trụ Đang Chờ Đợi</p>
        <h2 className="mb-4" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#e2d9f3', lineHeight: 1.1 }}>
          Unlock Your<br /><span className="gold-text">Cosmic Blueprint</span>
        </h2>
        <p className="mb-10 max-w-lg mx-auto" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.65)', lineHeight: 1.8, fontWeight: 300 }}>
          Hệ thống AI của chúng tôi sẽ giải mã bản đồ số học hoàn chỉnh của bạn và tiết lộ những bí ẩn sâu thẳm nhất của linh hồn.
        </p>
        <CosmicButton onClick={onStart} size="lg" variant="gold">Bắt Đầu Hành Trình</CosmicButton>
      </div>
    </section>
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
              <span className="text-5xl sm:text-7xl font-black leading-none tracking-tighter flex-shrink-0"
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.4), 0 4px 20px rgba(0,0,0,0.3)' }}>{number}</span>
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
    if (!day || !month || !year) { setError('Vui lòng chọn đầy đủ ngày tháng năm sinh.'); return false; }
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
    const goToInput = () => setPhase('input');
    return (
      <div style={{ background: '#070312' }} className="overflow-x-hidden">
        <style>{ANIM_STYLES}</style>
        {/* Stars */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {[...Array(90)].map((_,i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: i%7===0?2.5:i%3===0?1.5:1, height: i%7===0?2.5:i%3===0?1.5:1,
                opacity: 0.04+(i%9)*0.04, top:`${(i*11+7)%100}%`, left:`${(i*17+3)%100}%` }} />
          ))}
        </div>
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 sm:px-8 py-4">
          <div className="glass rounded-full px-5 py-2">
            <span className="gold-text font-semibold text-sm tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>✦ Thần Số Học</span>
          </div>
          <CosmicButton onClick={goToInput} size="sm" variant="gold">Bắt Đầu</CosmicButton>
        </nav>

        <LandingHero onStart={goToInput} />
        <LandingAwakening />
        <LandingCosmicEngine />
        <LandingAnalysis />
        <LandingInsights />
        <LandingCTA onStart={goToInput} />
      </div>
    );
  }

  /* ══════════════════════════════════════════
     INPUT
  ══════════════════════════════════════════ */
  if (phase === 'input') {
    const isComplete = fullName.trim() && day && month && year;
    return (
      <div className="min-h-screen flex flex-col overflow-hidden relative" style={{ background: '#070312' }}>
        <style>{ANIM_STYLES}</style>

        {/* Aurora mesh background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="aurora-1 absolute rounded-full" style={{ width: '70vw', height: '70vw', top: '-20%', left: '-10%', background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)' }} />
          <div className="aurora-2 absolute rounded-full" style={{ width: '60vw', height: '60vw', bottom: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)' }} />
          <div className="aurora-3 absolute rounded-full" style={{ width: '50vw', height: '50vw', top: '30%', right: '10%', background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(91,33,182,0.1) 0%, transparent 70%)' }} />
        </div>

        {/* Sacred rings background */}
        <div className="absolute pointer-events-none" style={{ width: 800, height: 800, opacity: 0.055, left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
          <div className="w-full h-full cs-spin-slow"><SacredRings size={800} gold /></div>
        </div>
        <div className="absolute pointer-events-none" style={{ width: 560, height: 560, opacity: 0.04, left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
          <div className="w-full h-full cs-spin-rev"><SacredRings size={560} /></div>
        </div>

        {/* Stars */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {[...Array(80)].map((_,i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: i%9===0?2.5:i%4===0?1.5:1, height: i%9===0?2.5:i%4===0?1.5:1, opacity: 0.03+(i%8)*0.04, top:`${(i*13+5)%100}%`, left:`${(i*17+3)%100}%` }} />
          ))}
        </div>

        {/* Back button — top left */}
        <button onClick={() => setPhase('intro')}
          className="absolute top-7 left-7 z-30 flex items-center gap-2 transition-all duration-300 group"
          style={{ fontFamily: "'Cinzel', serif", color: 'rgba(201,168,76,0.55)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="group-hover:opacity-100 transition-opacity duration-300" style={{ opacity: 0.8 }}>Quay Lại</span>
        </button>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-lg mx-auto px-6 py-6 cs-fade-up" style={{ animationDelay: '0.1s' }}>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <div className="relative" style={{ width: 64, height: 64 }}>
                <div className="absolute inset-0 cs-spin-slow opacity-70"><SacredRings size={64} gold /></div>
                <div className="absolute inset-[10px] rounded-full cs-pulse-glow"
                  style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.6), rgba(124,58,237,0.4))', filter: 'blur(2px)' }} />
                <div className="absolute inset-0 flex items-center justify-center" style={{ color: '#fbbf24', fontSize: '1.1rem' }}>✦</div>
              </div>
            </div>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c', textShadow: '0 0 20px rgba(201,168,76,0.5)' }}>
              Giải Mã Vũ Trụ
            </p>
            <h1 className="whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', fontWeight: 700, color: '#e2d9f3', textShadow: '0 0 40px rgba(226,217,243,0.3)' }}>
              Nhập Thông Tin <span className="gold-text">Của Bạn</span>
            </h1>
            <p className="mt-3" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.6)', fontSize: '0.88rem', fontWeight: 300 }}>
              Chúng tôi sẽ tạo bản đồ số học cá nhân hóa dành riêng cho bạn
            </p>
          </div>

          {/* Form card */}
          <div className="form-card p-8 relative overflow-hidden">
            {/* Card inner glow corners */}
            <div className="absolute -top-16 -left-16 w-52 h-52 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }} />
            <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.14), transparent 70%)' }} />
            {/* Top border glow */}
            <div className="absolute top-0 left-8 right-8 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), rgba(124,58,237,0.3), transparent)' }} />

            <div className="space-y-5 relative z-10">
              {/* Full Name */}
              <div>
                <label className="form-field-label">Họ Và Tên Đầy Đủ</label>
                <div className="relative">
                  <span className="field-icon">✦</span>
                  <input type="text" value={fullName} onChange={e => { setFullName(e.target.value); setError(''); }}
                    placeholder="Nguyễn Văn An" className="cosmic-input has-icon" />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="form-field-label">Ngày Tháng Năm Sinh</label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <span className="select-label">Ngày</span>
                    <select value={day} onChange={e => { setDay(e.target.value); setError(''); }}
                      className="cosmic-select" style={{ color: day ? '#e2d9f3' : 'rgba(167,139,250,0.3)' }}>
                      <option value="" disabled>--</option>
                      {DOB_DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <span className="select-label">Tháng</span>
                    <select value={month} onChange={e => { setMonth(e.target.value); setError(''); }}
                      className="cosmic-select" style={{ color: month ? '#e2d9f3' : 'rgba(167,139,250,0.3)' }}>
                      <option value="" disabled>--</option>
                      {DOB_MONTHS.map((m, i) => <option key={i} value={String(i + 1).padStart(2, '0')}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <span className="select-label">Năm</span>
                    <select value={year} onChange={e => { setYear(e.target.value); setError(''); }}
                      className="cosmic-select" style={{ color: year ? '#e2d9f3' : 'rgba(167,139,250,0.3)' }}>
                      <option value="" disabled>--</option>
                      {DOB_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
                  <AlertTriangle size={13} className="text-red-400 flex-shrink-0" />
                  <p className="text-xs" style={{ color: 'rgba(252,165,165,0.9)', fontFamily: "'Raleway', sans-serif" }}>{error}</p>
                </div>
              )}

              <div className="divider-line" />

              {/* Submit */}
              <button onClick={handleCalculate} className="submit-btn" disabled={!isComplete}>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Star size={13} style={{ color: 'rgba(253,230,138,0.7)' }} />
                  Giải Mã Bản Đồ Của Tôi
                  <Star size={13} style={{ color: 'rgba(253,230,138,0.7)' }} />
                </span>
              </button>

              <p className="text-center" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(196,181,253,0.28)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                Thông tin của bạn được bảo mật tuyệt đối · Không chia sẻ bên thứ ba
              </p>
            </div>
          </div>

          {/* Number indicators */}
          <div className="flex justify-center gap-6 mt-8">
            {['①','②','③','④','⑤'].map((n, i) => (
              <div key={i} className="cs-pulse-glow text-sm"
                style={{ fontFamily: "'Cinzel', serif", color: i < 3 ? 'rgba(201,168,76,0.5)' : 'rgba(124,58,237,0.3)', animationDelay: `${i * 0.4}s` }}>
                {n}
              </div>
            ))}
          </div>
        </div>
        </div>

        <GoldParticles count={18} />
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
            <div className="absolute rounded-full flex items-center justify-center overflow-hidden"
              style={{ inset: 18, ...grad, boxShadow: `0 0 40px ${lp.colorFrom}88, 0 0 80px ${lp.colorFrom}44, 0 8px 32px rgba(0,0,0,0.5)` }}>
              {/* Shimmer streak */}
              <div className="absolute pointer-events-none"
                style={{ width: '40%', height: '150%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', transform: 'skewX(-20deg)', animation: 'num-shimmer 4s ease-in-out 1s infinite' }} />
              <span className="font-black text-white leading-none select-none cs-big-num relative z-10"
                style={{ fontSize: 'clamp(4.5rem,18vw,7.5rem)' }}>
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
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full cs-pulse-glow"
                    style={{ background: `radial-gradient(circle, ${p.colorFrom}40, transparent 70%)`, transform: 'scale(1.5)', animationDelay: `${i * 0.4}s` }} />
                  <div className="rounded-full flex items-center justify-center font-black text-white shadow-lg border border-white/15 relative z-10"
                    style={{ ...gradientStyle(p.colorFrom, p.colorTo), width: 46, height: 46, fontSize: 16, boxShadow: `0 0 16px ${p.colorFrom}66, 0 4px 12px rgba(0,0,0,0.4)` }}>{num}</div>
                </div>
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
                className={`rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1.5 sm:px-2 text-white text-center shadow-lg border border-white/10 relative overflow-hidden ${main ? 'ring-2 ring-amber-400/60' : ''}`}
                style={{ ...gradientStyle(p.colorFrom, p.colorTo), boxShadow: `0 0 20px ${p.colorFrom}55` }}>
                <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), transparent)' }} />
                <div className="flex justify-center mb-1 opacity-80">{icon}</div>
                <p className={`font-black leading-none ${main ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}>{num}</p>
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
