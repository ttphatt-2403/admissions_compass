/**
 * NumerologyGate
 * Flow:
 *   1. Not logged in  → AuthModal
 *   2. Logged in, 0 credits → PaywallModal → QRModal (PayOS real payment)
 *   3. Logged in, credits ≥ 1 → deduct 1 → onUnlock()
 */
import { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Eye, EyeOff, Star, Zap, CheckCircle2, Loader2, LogIn, ExternalLink, RefreshCw } from 'lucide-react';
import { doc, onSnapshot, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { getCredits, consumeCredit, addCredits, CREDIT_PACKAGES } from '../lib/numerologyCredits';

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

/* ══════════════ QR PAYMENT MODAL ══════════════ */
interface QRData { orderCode: number; qrCode: string; checkoutUrl: string; amount: number; credits: number }

function QRModal({ qrData, uid, onSuccess, onBack }: { qrData: QRData; uid: string; onSuccess: () => void; onBack: () => void }) {
  const [status, setStatus] = useState<'waiting' | 'paid' | 'expired'>('waiting');
  const [seconds, setSeconds] = useState(300);
  const [checking, setChecking] = useState(false);
  const unsubRef = useRef<(() => void) | null>(null);
  const statusRef = useRef(status);
  statusRef.current = status;

  const handlePaid = async (snapData: Record<string, unknown>) => {
    if (statusRef.current === 'paid') return;
    try {
      const ref = doc(db, 'payment_orders', String(qrData.orderCode));
      if (!snapData.credited) {
        await addCredits(uid, (snapData.credits as number) ?? qrData.credits, 'vnpay', (snapData.amount as number) ?? qrData.amount);
        await updateDoc(ref, { credited: true });
      }
    } catch (e) {
      console.error('addCredits error:', e);
    }
    setStatus('paid');
    setTimeout(onSuccess, 1500);
  };

  useEffect(() => {
    const ref = doc(db, 'payment_orders', String(qrData.orderCode));
    unsubRef.current = onSnapshot(ref, async snap => {
      const data = snap.data();
      if (snap.exists() && data?.status === 'PAID') handlePaid(data as Record<string, unknown>);
    });

    // Khi tab được focus lại (user từ tab PayOS quay về), check thủ công
    const onVisible = async () => {
      if (document.visibilityState !== 'visible' || statusRef.current === 'paid') return;
      const { getDoc } = await import('firebase/firestore');
      const snap = await getDoc(ref);
      const data = snap.data();
      if (snap.exists() && data?.status === 'PAID') handlePaid(data as Record<string, unknown>);
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      unsubRef.current?.();
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [qrData.orderCode]);

  const handleManualCheck = async () => {
    setChecking(true);
    try {
      const { getDoc } = await import('firebase/firestore');
      const ref = doc(db, 'payment_orders', String(qrData.orderCode));
      const snap = await getDoc(ref);
      const data = snap.data();
      if (snap.exists() && data?.status === 'PAID') {
        await handlePaid(data as Record<string, unknown>);
      }
    } catch (e) {
      console.error('manual check error:', e);
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    if (status !== 'waiting') return;
    const t = setInterval(() => setSeconds(s => {
      if (s <= 1) { setStatus('expired'); clearInterval(t); return 0; }
      return s - 1;
    }), 1000);
    return () => clearInterval(t);
  }, [status]);

  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(qrData.qrCode)}&bgcolor=ffffff&color=000000&margin=10`;

  if (status === 'paid') {
    return (
      <div className="gate-overlay">
        <style>{GATE_STYLES}</style>
        <div className="gate-card" style={{ maxWidth: 360, animation: 'fade-up .4s ease-out', textAlign: 'center', padding: 40 }}>
          <CheckCircle2 size={72} style={{ color: '#4ade80', margin: '0 auto 16px' }} />
          <h2 style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>
            Thanh Toán Thành Công!
          </h2>
          <p style={{ color: '#4ade80', fontSize: '.9rem' }}>+{qrData.credits} lượt xem đã được cộng</p>
          <p style={{ color: 'rgba(196,181,253,0.5)', fontSize: '.8rem', marginTop: 8 }}>Đang mở bản đồ linh hồn...</p>
        </div>
      </div>
    );
  }

  if (status === 'expired') {
    return (
      <div className="gate-overlay">
        <style>{GATE_STYLES}</style>
        <div className="gate-card" style={{ maxWidth: 360, animation: 'fade-up .4s ease-out', padding: 32, textAlign: 'center' }}>
          <p style={{ color: '#fb7185', fontSize: '1rem', marginBottom: 16 }}>Mã QR đã hết hạn</p>
          <button onClick={onBack} className="gate-btn-primary">Tạo mã QR mới</button>
        </div>
      </div>
    );
  }

  return (
    <div className="gate-overlay">
      <style>{GATE_STYLES}</style>
      <div className="gate-card" style={{ maxWidth: 380, animation: 'fade-up .4s ease-out' }}>

        {/* Header */}
        <div className="relative px-5 pt-5 pb-4 text-center" style={{ background: 'linear-gradient(135deg,rgba(201,168,76,0.15),rgba(124,58,237,0.12))' }}>
          <button onClick={onBack} className="absolute left-4 top-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10">
            <X size={15} style={{ color: 'rgba(196,181,253,0.5)' }} />
          </button>
          <p style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c', fontSize: '.68rem', letterSpacing: '.25em', textTransform: 'uppercase', marginBottom: 4 }}>
            Thanh toán qua VietQR
          </p>
          <div className="flex items-baseline justify-center gap-1">
            <span style={{ fontFamily: "'Cinzel',serif", color: '#fbbf24', fontSize: '1.8rem', fontWeight: 900 }}>
              {qrData.amount.toLocaleString('vi')}₫
            </span>
          </div>
          <p style={{ color: 'rgba(196,181,253,0.5)', fontSize: '.75rem', marginTop: 2 }}>
            {qrData.credits} lượt xem bản đồ thần số học
          </p>
        </div>

        <div className="p-5 flex flex-col items-center gap-4">

          {/* QR code */}
          <div className="relative">
            <div className="p-3 rounded-2xl" style={{ background: '#fff', boxShadow: '0 0 40px rgba(201,168,76,0.25), 0 8px 32px rgba(0,0,0,0.4)' }}>
              <img src={qrImgUrl} alt="QR thanh toán" width={240} height={240} style={{ display: 'block', borderRadius: 8 }} />
            </div>
            {/* Countdown badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: 'linear-gradient(135deg,#0f0c29,#1a1040)', border: '1px solid rgba(251,191,36,0.4)', whiteSpace: 'nowrap' }}>
              <RefreshCw size={10} style={{ color: '#fbbf24' }} className="animate-spin" />
              <span style={{ color: '#fbbf24', fontSize: '.75rem', fontFamily: 'monospace', fontWeight: 700 }}>
                {min}:{sec}
              </span>
            </div>
          </div>

          {/* Steps */}
          <div className="w-full mt-2 space-y-2">
            {[
              'Mở app ngân hàng bất kỳ',
              'Chọn "Quét QR" hoặc "Chuyển tiền"',
              'Quét mã và xác nhận thanh toán',
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.2)', color: '#fbbf24' }}>{i + 1}</span>
                <span style={{ color: 'rgba(196,181,253,0.75)', fontSize: '.82rem' }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Alternative: open PayOS page */}
          <a href={qrData.checkoutUrl} target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl transition-all hover:opacity-80"
            style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd', fontSize: '.82rem', textDecoration: 'none', fontWeight: 600 }}>
            <ExternalLink size={13} /> Hoặc mở trang thanh toán PayOS
          </a>

          {/* Manual check fallback */}
          <button onClick={handleManualCheck} disabled={checking}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all hover:opacity-80"
            style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', fontSize: '.82rem', fontWeight: 600, cursor: checking ? 'not-allowed' : 'pointer' }}>
            {checking ? <Loader2 size={13} className="animate-spin" /> : <CheckCircle2 size={13} />}
            {checking ? 'Đang kiểm tra...' : 'Tôi đã thanh toán xong'}
          </button>

          <p style={{ color: 'rgba(196,181,253,0.3)', fontSize: '.72rem', textAlign: 'center' }}>
            Trang sẽ tự động mở khóa sau khi thanh toán thành công
          </p>
        </div>
      </div>
    </div>
  );
}

const QR_SESSION_KEY = 'payos_pending_qr';

/* ══════════════ PAYWALL MODAL ══════════════ */
function PaywallModal({ credits, onUnlock, onClose }: { credits: number; onUnlock: () => void; onClose?: () => void }) {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Khôi phục QR từ sessionStorage nếu user reload giữa chừng
  const [qrData, setQrData] = useState<QRData | null>(() => {
    try {
      const saved = sessionStorage.getItem(QR_SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });

  const saveQR = (data: QRData) => {
    sessionStorage.setItem(QR_SESSION_KEY, JSON.stringify(data));
    setQrData(data);
  };
  const clearQR = () => {
    sessionStorage.removeItem(QR_SESSION_KEY);
    setQrData(null);
  };

  const handlePay = async () => {
    if (!user) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/pc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: user.uid, packageId: 'starter' }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Lỗi tạo thanh toán');

      await setDoc(doc(db, 'payment_orders', String(data.orderCode)), {
        uid: user.uid,
        packageId: 'starter',
        credits: data.credits,
        amount: data.amount,
        status: 'PENDING',
        createdAt: serverTimestamp(),
      });

      saveQR(data);
    } catch (e: unknown) {
      setError((e as Error).message || 'Có lỗi xảy ra, vui lòng thử lại');
    } finally {
      setLoading(false);
    }
  };

  const handleQRSuccess = async () => {
    clearQR();
    // User vừa trả tiền → unlock ngay, không gate qua credit check
    onUnlock();
    // Trừ 1 credit trong background (nếu có)
    consumeCredit(user!.uid).catch(() => {});
  };

  if (qrData) {
    return <QRModal qrData={qrData} uid={user!.uid} onSuccess={handleQRSuccess} onBack={clearQR} />;
  }

  return (
    <div className="gate-overlay">
      <style>{GATE_STYLES}</style>
      <div className="gate-card" style={{ maxWidth: 420, animation: 'fade-up .4s ease-out' }}>

        {/* Header */}
        <div className="relative p-6 text-center" style={{ background: 'linear-gradient(135deg,rgba(201,168,76,0.18),rgba(124,58,237,0.18))' }}>
          {onClose && (
            <button onClick={onClose} className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10">
              <X size={16} style={{ color: 'rgba(196,181,253,0.5)' }} />
            </button>
          )}
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'radial-gradient(circle,rgba(201,168,76,0.4),rgba(124,58,237,0.3))', boxShadow: '0 0 30px rgba(201,168,76,0.3)' }}>
              <Star size={28} style={{ color: '#fbbf24' }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.2rem', fontWeight: 700, marginBottom: 6 }}>
            Mở Khóa Bản Đồ Linh Hồn
          </h2>
          <p style={{ color: 'rgba(196,181,253,0.5)', fontSize: '.8rem' }}>{user?.email}</p>
        </div>

        <div className="p-6 space-y-5">

          {/* Offer card */}
          <div className="rounded-2xl p-5 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,rgba(201,168,76,0.1),rgba(124,58,237,0.08))', border: '1px solid rgba(201,168,76,0.3)' }}>
            <div style={{ fontFamily: "'Cinzel',serif", color: '#fbbf24', fontSize: '2.2rem', fontWeight: 900, lineHeight: 1 }}>
              3
            </div>
            <div style={{ color: 'rgba(196,181,253,0.7)', fontSize: '.8rem', margin: '4px 0 12px' }}>lượt xem phân tích chi tiết</div>
            <div className="flex items-center justify-center gap-2">
              <span style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.5rem', fontWeight: 900 }}>15.000₫</span>
            </div>
            <div style={{ color: 'rgba(196,181,253,0.4)', fontSize: '.72rem', marginTop: 4 }}>≈ 5.000₫ / lượt xem</div>
          </div>

          {/* What you get */}
          <div className="space-y-2">
            {[
              'Phân tích 6 chỉ số số học chuyên sâu',
              'Tâm lý · Tình yêu · Nghề nghiệp · Tâm linh',
              'Biểu đồ năng lượng số cá nhân',
              'Tóm tắt bản đồ linh hồn riêng của bạn',
            ].map(f => (
              <div key={f} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} style={{ color: '#4ade80', flexShrink: 0 }} />
                <span style={{ color: 'rgba(196,181,253,0.8)', fontSize: '.84rem' }}>{f}</span>
              </div>
            ))}
          </div>

          {error && <div className="gate-error">{error}</div>}

          {/* CTA */}
          <button onClick={handlePay} disabled={loading} className="gate-btn-primary"
            style={{ background: 'linear-gradient(135deg,#c9a84c,#f59e0b)', borderColor: 'rgba(201,168,76,0.5)', color: '#0a0617', fontWeight: 900 }}>
            {loading
              ? <><Loader2 size={15} className="animate-spin inline mr-2" />Đang tạo mã QR...</>
              : <>Thanh toán 15.000₫ · Nhận QR ngay</>}
          </button>

          <button onClick={logout}
            style={{ width: '100%', background: 'none', border: 'none', color: 'rgba(196,181,253,0.25)', fontSize: '.75rem', cursor: 'pointer' }}>
            Đăng xuất
          </button>
        </div>
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
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnError, setBtnError] = useState('');

  // Fetch credits whenever user changes
  useEffect(() => {
    if (!user) { setCredits(null); return; }
    getCredits(user.uid)
      .then(setCredits)
      .catch(() => setCredits(0));
  }, [user]);

  const handleTrigger = async () => {
    setBtnError('');
    if (!user) { setStep('auth'); return; }
    setBtnLoading(true);
    try {
      const fresh = await getCredits(user.uid);
      setCredits(fresh);
      if (fresh < 1) { setStep('paywall'); return; }
      const ok = await consumeCredit(user.uid);
      if (ok) { setCredits(fresh - 1); onUnlock(); }
    } catch (e: unknown) {
      console.error('NumerologyGate error:', e);
      setBtnError('Có lỗi xảy ra. Vui lòng thử lại.');
      setStep('auth'); // fallback: prompt login
    } finally {
      setBtnLoading(false);
    }
  };

  const handleUnlockAfterPay = async () => {
    if (!user) return;
    try {
      const fresh = await getCredits(user.uid);
      setCredits(fresh);
      const ok = await consumeCredit(user.uid);
      if (ok) onUnlock();
    } catch { /* noop */ }
  };

  if (inline) {
    if (loading) return null;
    return (
      <>
        {btnError && (
          <p style={{ color: '#fb7185', fontSize: '.8rem', textAlign: 'center', marginBottom: 8 }}>{btnError}</p>
        )}
        <button onClick={handleTrigger} disabled={btnLoading}
          className="group inline-flex items-center gap-3 px-8 py-4 font-black text-white rounded-2xl text-base transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden w-full sm:w-auto justify-center disabled:opacity-60"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}>
          {btnLoading
            ? <Loader2 size={18} className="relative z-10 flex-shrink-0 animate-spin" />
            : user ? <Zap size={18} className="relative z-10 flex-shrink-0" /> : <LogIn size={18} className="relative z-10 flex-shrink-0" />}
          <span className="relative z-10">
            {btnLoading ? 'Đang kiểm tra...'
              : user
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
