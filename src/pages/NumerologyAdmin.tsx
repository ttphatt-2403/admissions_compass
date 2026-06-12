/**
 * NumerologyAdmin — trang dành riêng cho ADMIN_EMAILS
 * Hiển thị danh sách users, credits, và lịch sử giao dịch
 */
import { useState, useEffect } from 'react';
import { Users, Zap, CreditCard, RefreshCw, ChevronDown, ChevronUp, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getAllUsers, getUserTransactions, addCredits, UserCredit, Transaction } from '../lib/numerologyCredits';

const ADMIN_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;600&display=swap');
`;

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  return (
    <div className="rounded-2xl p-5 border flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}22` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(196,181,253,0.5)' }}>{label}</p>
        <p className="text-2xl font-black mt-0.5" style={{ color: '#e2d9f3', fontFamily: "'Cinzel',serif" }}>{value}</p>
      </div>
    </div>
  );
}

function UserRow({ u, onGrant }: { u: UserCredit; onGrant: (uid: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [txs, setTxs] = useState<Transaction[] | null>(null);
  const [loadingTx, setLoadingTx] = useState(false);

  const toggle = async () => {
    if (!expanded && txs === null) {
      setLoadingTx(true);
      const data = await getUserTransactions(u.uid);
      setTxs(data);
      setLoadingTx(false);
    }
    setExpanded(v => !v);
  };

  return (
    <div className="rounded-2xl border overflow-hidden transition-all duration-200" style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-white/5 transition-colors" onClick={toggle}>
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>
          {(u.displayName ?? u.email ?? '?')[0].toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate" style={{ color: '#e2d9f3' }}>{u.displayName}</p>
          <p className="text-xs truncate" style={{ color: 'rgba(196,181,253,0.5)' }}>{u.email}</p>
        </div>
        {/* Credits badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0" style={{ background: u.credits > 0 ? 'rgba(74,222,128,0.1)' : 'rgba(251,113,133,0.1)', border: `1px solid ${u.credits > 0 ? 'rgba(74,222,128,0.3)' : 'rgba(251,113,133,0.3)'}` }}>
          <Zap size={12} style={{ color: u.credits > 0 ? '#4ade80' : '#fb7185' }} />
          <span className="text-xs font-bold" style={{ color: u.credits > 0 ? '#4ade80' : '#fb7185' }}>{u.credits} lượt</span>
        </div>
        {/* Grant button */}
        <button onClick={e => { e.stopPropagation(); onGrant(u.uid); }}
          className="px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer flex-shrink-0 transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg,rgba(201,168,76,0.2),rgba(251,191,36,0.15))', border: '1px solid rgba(201,168,76,0.35)', color: '#fbbf24' }}>
          +3 credits
        </button>
        {expanded ? <ChevronUp size={14} style={{ color: 'rgba(196,181,253,0.4)', flexShrink: 0 }} /> : <ChevronDown size={14} style={{ color: 'rgba(196,181,253,0.4)', flexShrink: 0 }} />}
      </div>

      {expanded && (
        <div className="px-5 pb-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs font-bold uppercase tracking-wider mt-3 mb-2" style={{ color: 'rgba(196,181,253,0.4)' }}>Lịch sử giao dịch</p>
          {loadingTx ? (
            <p style={{ color: 'rgba(196,181,253,0.4)', fontSize: '.8rem' }}>Đang tải...</p>
          ) : txs && txs.length > 0 ? (
            <div className="space-y-2">
              {txs.map(tx => (
                <div key={tx.id} className="flex items-center justify-between text-xs rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>+{tx.credits} credits</span>
                  <span className="px-2 py-0.5 rounded-full" style={{ background: 'rgba(139,92,246,0.15)', color: '#c084fc' }}>{tx.method}</span>
                  <span style={{ color: 'rgba(196,181,253,0.45)' }}>{tx.priceVnd > 0 ? `${tx.priceVnd.toLocaleString('vi')}₫` : 'Demo'}</span>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'rgba(196,181,253,0.35)', fontSize: '.8rem' }}>Chưa có giao dịch nào.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function NumerologyAdmin() {
  const { user, isAdmin, logout } = useAuth();
  const [users, setUsers] = useState<UserCredit[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getAllUsers();
      setUsers(data.sort((a, b) => b.totalPurchased - a.totalPurchased));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Lỗi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleGrant = async (uid: string) => {
    await addCredits(uid, 3, 'demo', 0);
    setUsers(prev => prev.map(u => u.uid === uid ? { ...u, credits: u.credits + 3, totalPurchased: u.totalPurchased + 3 } : u));
  };

  const refresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(160deg,#06040f,#0e0627,#0b1033)' }}>
        <div className="text-center">
          <p style={{ color: 'rgba(251,113,133,0.8)', fontFamily: "'Cinzel',serif", fontSize: '1.1rem' }}>Không có quyền truy cập</p>
          <p style={{ color: 'rgba(196,181,253,0.5)', fontFamily: "'Raleway',sans-serif", fontSize: '.85rem', marginTop: 8 }}>
            Chỉ dành cho admin · {user?.email}
          </p>
        </div>
      </div>
    );
  }

  const totalCredits = users.reduce((s, u) => s + u.credits, 0);
  const totalPurchased = users.reduce((s, u) => s + u.totalPurchased, 0);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(160deg,#06040f 0%,#0e0627 35%,#140a35 65%,#0b1033 100%)' }}>
      <style>{ADMIN_STYLES}</style>

      {/* Star field */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(50)].map((_,i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{ width:i%5===0?2:1, height:i%5===0?2:1, opacity:0.03+(i%7)*0.04, top:`${(i*13+5)%100}%`, left:`${(i*17+7)%100}%` }} />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(15,12,41,0.8)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[.25em] uppercase mb-0.5" style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Admin Dashboard</p>
            <h1 className="font-black" style={{ fontFamily: "'Cinzel',serif", color: '#e2d9f3', fontSize: '1.1rem' }}>Thần Số Học · Quản Lý</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: 'rgba(196,181,253,0.5)' }}>{user?.email}</span>
            <button onClick={logout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-all hover:scale-105"
              style={{ background: 'rgba(251,113,133,0.1)', border: '1px solid rgba(251,113,133,0.2)', color: '#fb7185' }}>
              <LogOut size={12} /> Đăng xuất
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard icon={<Users size={20} />} label="Tổng users" value={users.length} color="#c084fc" />
          <StatCard icon={<Zap size={20} />} label="Credits còn lại" value={totalCredits} color="#4ade80" />
          <StatCard icon={<CreditCard size={20} />} label="Tổng đã mua" value={totalPurchased} color="#fbbf24" />
          <StatCard icon={<Users size={20} />} label="Users có credits" value={users.filter(u => u.credits > 0).length} color="#38bdf8" />
        </div>

        {/* User list */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "'Cinzel',serif", color: '#c9a84c' }}>Danh sách người dùng</h2>
            <button onClick={refresh} disabled={refreshing} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(196,181,253,0.7)' }}>
              <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} /> Làm mới
            </button>
          </div>

          {loading ? (
            <div className="text-center py-16" style={{ color: 'rgba(196,181,253,0.4)' }}>Đang tải...</div>
          ) : error ? (
            <div className="text-center py-16 space-y-2">
              <p style={{ color: '#fb7185', fontSize: '.9rem', fontWeight: 600 }}>Lỗi tải dữ liệu</p>
              <p style={{ color: 'rgba(196,181,253,0.5)', fontSize: '.8rem' }}>{error}</p>
              <p style={{ color: 'rgba(196,181,253,0.4)', fontSize: '.75rem' }}>Kiểm tra Firestore Rules đã được publish chưa</p>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-16" style={{ color: 'rgba(196,181,253,0.35)' }}>Chưa có người dùng nào.</div>
          ) : (
            <div className="space-y-3">
              {users.map(u => <UserRow key={u.uid} u={u} onGrant={handleGrant} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
