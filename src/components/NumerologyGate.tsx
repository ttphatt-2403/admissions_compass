/**
 * NumerologyGate
 *
 * Renders as a modal overlay on top of the blurred result page.
 * Flow:
 *   1. Not logged in  → AuthModal (login / register)
 *   2. Logged in, 0 credits → PaywallModal (buy credits)
 *   3. Logged in, credits ≥ 1 → calls onUnlock() to deduct & show detail
 */
import { useState, useEffect } from 'react';
import { Sparkles, X, Eye, EyeOff, Star, Zap, CheckCircle2, Loader2, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getCredits, addCredits, consumeCredit, CREDIT_PACKAGES } from '../lib/numerologyCredits';

/* ── CSS injected once ── */
const GATE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;600&display=swap');
  .gate-overlay { position:fixed; inset:0; z-index:999; display:flex; align-items:center; justify-content:center; padding:16px; background:rgba(6,4,15,0.82); backdrop-filter:blur(6px); }
  .gate-card { background:linear-gradient(145deg,#0f0c29,#1a1040,#0f1033); border:1px solid rgba(139,92,246,0.25); border-radius:24px; width:100%; max-width:420px; overflow:hidden; box-shadow:0 40px 80px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.04) inset; }
  .gate-input { width:100%; background:rgba(15,8,32,0.7); border:1px solid rgba(124,58,237,0.35); border-radius:10px; padding:13px 16px; color:#e2d9f3; font-family:'Raleway',sans-serif; font-size:0.95rem; outline:none; transition:border-color .2s,box-shadow .2s; }
  .gate-input:focus { border-color:rgba(201,168,76,0.65); box-shadow:0 0 0 3px rgba(201,168,76,0.1); }
  .gate-input::placeholder { color:rgba(167,139,250,0.3); }
  .gate-btn-primary { width:100%; padding:14px; border-radius:10px; background:linear-gradient(135deg,#7c3aed,#4f46e5); border:1px solid rgba(167,139,250,0.4); color:#fff; font-family:'Cinzel',serif; font-size:0.78rem; letter-spacing:.2em; text-transform:uppercase; cursor:pointer; transition:all .25s; }
  .gate-btn-primary:hover:not(:disabled) { background:linear-gradient(135deg,#8b5cf6,#6366f1); transform:translateY(-1px); box-shadow:0 0 24px rgba(124,58,237,0.4); }
  .gate-btn-primary:disabled { opacity:.4; cursor:not-allowed; }
  .gate-btn-google { width:100%; padding:13px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); color:#e2d9f3; font-family:'Raleway',sans-serif; font-size:.9rem; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px; transition:all .2s; }
  .gate-btn-google:hover { background:rgba(255,255,255,0.09); border-color:rgba(255,255,255,0.2); }
  .gate-divider { display:flex; align-items:center; gap:12px; }
  .gate-divider::before,.gate-divider::after { content:''; flex:1; height:1px; background:rgba(255,255,255,0.08); }
  .gate-error { background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.25); border-radius:8px; padding:10px 14px; color:rgba(252,165,165,.9); font-family:'Raleway',sans-serif; font-size:.82rem; }
  .pkg-card { border-radius:16px; border:1px solid rgba(255,255,255,0.08); padding:16px; cursor:pointer; transition:all .2s; background:rgba(255,255,255,0.03); position:relative; }
  .pkg-card.selected { border-color:rgba(201,168,76,0.6); background:rgba(201,168,76,0.07); box-shadow:0 0 20px rgba(201,168,76,0.15); }
  .pkg-card:hover:not(.selected) { border-color:rgba(139,92,246,0.4); background:rgba(139,92,246,0.05); }
`;

/* ── Google SVG icon ── */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
  </svg>
);

/* ══════════════ AUTH MODAL ══════════════ */
function AuthModal({ onClose }: { onClose?: () => void }) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmail = async () => {
    setError('');
    if (!email || !password) { setError('Vui lòng điền đầy đủ thông tin.'); return; }
    if (mode === 'register' && !name.trim()) { setError('Vui lòng nhập tên hiển thị.'); return; }
    if (password.length < 6) { setError('Mật khẩu tối thiểu 6 ký tự.'); return; }
    setLoading(true);
    try {
      if (mode === 'login') await signInWithEmail(email, password);
      else await signUpWithEmail(email, password, name.trim());
    } catch (e: unknown) {
      const msg = (e as { code?: string }).code;
      if (msg === 'auth/user-not-found' || msg === 'auth/wrong-password' || msg === 'auth/invalid-credential')
        setError('Email hoặc mật khẩu không đúng.');
      else if (msg === 'auth/email-already-in-use') setError('Email đã được sử dụng.');
      else setError('Đã có lỗi xảy ra. Vui lòng thử lại.');
    } finally { setLoading(false); }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try { await signInWithGoogle(); } catch { setError('Đăng nhập Google thất bại.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="gate-overlay">
      <style>{GATE_STYLES}</style>
      <div className="gate-card" style={{ animation: 'fade-up .4s ease-out' }}>
        {/* Header */}
        <div className="relative p-6 text-center" style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.25),rgba(219,39,119,0.15))' }}>
          {onClose && (
            <button onClick={onClose} className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-white/10">
              <X size={16} style={{ color: 'rgba(196,181,253,0.6)' }} />
            </button>
          )}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle,rgba(201,168,76,0.5),rgba(124,58,237,0.3))' }}>
              <Sparkles size={22} style={{ color: '#fbbf24' }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.2rem', fontWeight: 700 }}>
            {mode === 'login' ? 'Đăng Nhập' : 'Tạo Tài Khoản'}
          </h2>
          <p style={{ fontFamily: "'Raleway',sans-serif", color: 'rgba(196,181,253,0.6)', fontSize: '.85rem', marginTop: 6 }}>
            {mode === 'login' ? 'Đăng nhập để mở khóa bản đồ linh hồn' : 'Tham gia hành trình thần số học'}
          </p>
        </div>

        <div className="p-6 space-y-4">
          {/* Google */}
          <button onClick={handleGoogle} disabled={loading} className="gate-btn-google">
            <GoogleIcon /> Tiếp tục với Google
          </button>

          <div className="gate-divider"><span style={{ color: 'rgba(196,181,253,0.4)', fontSize: '.75rem' }}>hoặc</span></div>

          {/* Name (register only) */}
          {mode === 'register' && (
            <input className="gate-input" placeholder="Tên hiển thị" value={name} onChange={e => setName(e.target.value)} />
          )}

          {/* Email */}
          <input className="gate-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleEmail()} />

          {/* Password */}
          <div className="relative">
            <input className="gate-input" type={showPw ? 'text' : 'password'} placeholder="Mật khẩu"
              value={password} onChange={e => setPassword(e.target.value)} style={{ paddingRight: 44 }}
              onKeyDown={e => e.key === 'Enter' && handleEmail()} />
            <button type="button" onClick={() => setShowPw(v => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              style={{ color: 'rgba(167,139,250,0.5)' }}>
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && <div className="gate-error">{error}</div>}

          <button onClick={handleEmail} disabled={loading} className="gate-btn-primary">
            {loading ? <Loader2 size={16} className="animate-spin inline mr-2" /> : null}
            {mode === 'login' ? 'Đăng Nhập' : 'Tạo Tài Khoản'}
          </button>

          <p style={{ textAlign: 'center', fontFamily: "'Raleway',sans-serif", color: 'rgba(196,181,253,0.5)', fontSize: '.82rem' }}>
            {mode === 'login' ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
            <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}
              style={{ color: '#c9a84c', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none' }}>
              {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════ PAYWALL MODAL ══════════════ */
function PaywallModal({ credits, onUnlock, onClose }: { credits: number; onUnlock: () => void; onClose?: () => void }) {
  const { user, logout } = useAuth();
  const [selected, setSelected] = useState(CREDIT_PACKAGES[0].id);
  const [paying, setPaying] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDemoPay = async () => {
    if (!user) return;
    const pkg = CREDIT_PACKAGES.find(p => p.id === selected)!;
    setPaying(true);
    try {
      await new Promise(r => setTimeout(r, 1800)); // simulate network
      await addCredits(user.uid, pkg.credits, 'demo', pkg.priceVnd);
      setSuccess(true);
      setTimeout(() => onUnlock(), 1200);
    } catch { /* noop */ }
    finally { setPaying(false); }
  };

  return (
    <div className="gate-overlay">
      <style>{GATE_STYLES}</style>
      <div className="gate-card" style={{ maxWidth: 460, animation: 'fade-up .4s ease-out' }}>
        {/* Header */}
        <div className="relative p-6 text-center" style={{ background: 'linear-gradient(135deg,rgba(201,168,76,0.2),rgba(124,58,237,0.2))' }}>
          {onClose && !success && (
            <button onClick={onClose} className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10">
              <X size={16} style={{ color: 'rgba(196,181,253,0.6)' }} />
            </button>
          )}
          <div className="flex justify-center mb-3">
            {success
              ? <CheckCircle2 size={40} style={{ color: '#4ade80' }} />
              : <Star size={36} style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 12px #fbbf24)' }} />}
          </div>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.15rem', fontWeight: 700 }}>
            {success ? 'Thanh Toán Thành Công!' : 'Mở Khóa Bản Đồ Linh Hồn'}
          </h2>
          <p style={{ fontFamily: "'Raleway',sans-serif", color: 'rgba(196,181,253,0.65)', fontSize: '.84rem', marginTop: 6 }}>
            {success
              ? 'Credits đã được cộng vào tài khoản. Đang mở...'
              : `Bạn đang đăng nhập với ${user?.email ?? ''}`}
          </p>
          {credits > 0 && !success && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)' }}>
              <Zap size={13} style={{ color: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '.78rem', fontWeight: 600 }}>Bạn còn {credits} lượt xem</span>
            </div>
          )}
        </div>

        {!success && (
          <div className="p-6 space-y-4">
            {/* Feature list */}
            <div className="space-y-2 mb-2">
              {['Phân tích 6 chỉ số chuyên sâu', 'Tâm lý · Tình yêu · Nghề nghiệp · Tâm linh', 'Biểu đồ năng lượng cá nhân', 'Tóm tắt bản đồ linh hồn riêng'].map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} style={{ color: '#4ade80', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Raleway',sans-serif", color: 'rgba(196,181,253,0.8)', fontSize: '.84rem' }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Package picker */}
            <p style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 8 }}>Chọn gói lượt xem</p>
            <div className="grid grid-cols-3 gap-3">
              {CREDIT_PACKAGES.map(pkg => (
                <div key={pkg.id} className={`pkg-card ${selected === pkg.id ? 'selected' : ''}`} onClick={() => setSelected(pkg.id)}>
                  {pkg.badge && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: 'linear-gradient(135deg,#ec4899,#8b5cf6)', color: '#fff' }}>{pkg.badge}</span>
                  )}
                  <div style={{ fontFamily: "'Cinzel',serif", color: '#fbbf24', fontSize: '1.4rem', fontWeight: 900, textAlign: 'center' }}>{pkg.credits}</div>
                  <div style={{ textAlign: 'center', color: 'rgba(196,181,253,0.6)', fontSize: '.72rem', marginTop: 2 }}>lượt</div>
                  <div style={{ textAlign: 'center', color: '#e2d9f3', fontSize: '.85rem', fontWeight: 700, marginTop: 6 }}>{pkg.label}</div>
                </div>
              ))}
            </div>

            {/* Demo notice */}
            <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <Zap size={14} style={{ color: '#fbbf24', flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: "'Raleway',sans-serif", color: 'rgba(253,230,138,0.8)', fontSize: '.78rem', lineHeight: 1.5 }}>
                <strong>Demo mode:</strong> Nhấn "Thanh Toán Demo" để nhận credits miễn phí. Tích hợp VNPay / MoMo thật sẽ được cập nhật sau.
              </p>
            </div>

            {/* Pay button */}
            <button onClick={handleDemoPay} disabled={paying} className="gate-btn-primary" style={{ background: 'linear-gradient(135deg,#c9a84c,#f59e0b)', borderColor: 'rgba(201,168,76,0.6)', color: '#0a0617' }}>
              {paying
                ? <><Loader2 size={15} className="animate-spin inline mr-2" />Đang xử lý...</>
                : <>Thanh Toán Demo · {CREDIT_PACKAGES.find(p => p.id === selected)?.label}</>}
            </button>

            {/* Logout */}
            <button onClick={logout} style={{ width: '100%', background: 'none', border: 'none', color: 'rgba(196,181,253,0.35)', fontFamily: "'Raleway',sans-serif", fontSize: '.78rem', cursor: 'pointer', marginTop: 4 }}>
              Đăng xuất ({user?.email})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════ MAIN GATE ══════════════ */
interface NumerologyGateProps {
  /** Called when user is authenticated and has credits — gate deducts 1 credit then calls this */
  onUnlock: () => void;
  /** Show a small "Login" button in-page instead of full-screen overlay (for the hero CTA) */
  inline?: boolean;
}

export default function NumerologyGate({ onUnlock, inline }: NumerologyGateProps) {
  const { user, loading } = useAuth();
  const [credits, setCredits] = useState<number | null>(null);
  const [step, setStep] = useState<'auth' | 'paywall' | 'ready' | 'idle'>('idle');

  // Fetch credits whenever user changes
  useEffect(() => {
    if (!user) { setCredits(null); return; }
    getCredits(user.uid).then(setCredits);
  }, [user]);

  // Decide which step to show
  useEffect(() => {
    if (loading) return;
    if (!user) setStep('auth');
    else if (credits === null) setStep('idle'); // still loading credits
    else if (credits < 1) setStep('paywall');
    else setStep('ready');
  }, [user, credits, loading]);

  const handleTrigger = async () => {
    if (!user) { setStep('auth'); return; }
    const fresh = await getCredits(user.uid);
    setCredits(fresh);
    if (fresh < 1) { setStep('paywall'); return; }
    // has credits — consume 1 and unlock
    const ok = await consumeCredit(user.uid);
    if (ok) { setCredits(fresh - 1); onUnlock(); }
  };

  const handleUnlockAfterPay = async () => {
    if (!user) return;
    const fresh = await getCredits(user.uid);
    setCredits(fresh);
    const ok = await consumeCredit(user.uid);
    if (ok) onUnlock();
  };

  if (inline) {
    if (loading) return null;
    return (
      <>
        <button onClick={handleTrigger}
          className="group inline-flex items-center gap-3 px-8 py-4 font-black text-white rounded-2xl text-base transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden w-full sm:w-auto justify-center"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}>
          {user ? <Zap size={18} className="relative z-10 flex-shrink-0" /> : <LogIn size={18} className="relative z-10 flex-shrink-0" />}
          <span className="relative z-10">
            {user
              ? credits !== null && credits > 0 ? `Xem phân tích chi tiết (${credits} lượt)` : 'Mở khóa phân tích chi tiết'
              : 'Đăng nhập để xem chi tiết'}
          </span>
        </button>

        {step === 'auth' && <AuthModal onClose={() => setStep('idle')} />}
        {step === 'paywall' && credits !== null && (
          <PaywallModal credits={credits} onUnlock={handleUnlockAfterPay} onClose={() => setStep('idle')} />
        )}
      </>
    );
  }

  // Full-screen mode (not used currently but kept for flexibility)
  if (step === 'auth') return <AuthModal />;
  if (step === 'paywall' && credits !== null) return <PaywallModal credits={credits} onUnlock={handleUnlockAfterPay} />;
  return null;
}
