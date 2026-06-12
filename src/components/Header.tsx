import { Menu, X, LogIn, LogOut, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { TabType } from '../types';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const { user, loading, isAdmin, signInWithGoogle, signInWithEmail, logout } = useAuth();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    try {
      await signInWithEmail(emailInput, passwordInput);
      setShowEmailLogin(false);
      setEmailInput('');
      setPasswordInput('');
    } catch {
      setLoginError('Email hoặc mật khẩu không đúng');
    } finally {
      setLoginLoading(false);
    }
  };

  // flip this flag to true if you want the AI‑chatbot tab to appear again
  const ENABLE_CHATBOT = false;

  const navItems = [
    { id: 'home' as TabType, label: 'Trang Chủ' },
    { id: 'documents' as TabType, label: 'Tài Liệu' },
    { id: 'universities' as TabType, label: 'Điểm Chuẩn' },
    // { id: 'calculator' as TabType, label: 'Tính Điểm' },
    // { id: 'studypath' as TabType, label: 'Lộ Trình' },
    // { id: 'news' as TabType, label: 'Tin Tức' },
    // the chatbot item is kept here for reference but filtered out below when
    // the feature is disabled
    { id: 'chatbot' as TabType, label: 'AI Tư Vấn' },
    { id: 'community' as TabType, label: 'Cộng Đồng' },
    { id: 'riasec' as TabType, label: 'Trắc Nghiệm RIASEC' },
    { id: 'numerology' as TabType, label: ' Thần Số Học' },
    { id: 'b2b-landing' as TabType, label: 'Hợp Tác Tuyển Sinh', highlight: true },
  ];

  // hide chatbot item when the flag is false
  const visibleNavItems = navItems.filter(
    (item) => item.id !== 'chatbot' || ENABLE_CHATBOT
  );

  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center py-4">
          {/* Left: Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            <img 
              src="/logo.png" 
              alt="La bàn Tuyển sinh" 
              className="h-12 w-auto"
            />
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 text-sm font-bold ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-600 font-extrabold'
                    : item.highlight
                    ? 'text-green-500 font-extrabold hover:bg-green-50 hover:text-green-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: Login/User Section */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-3">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            ) : user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt={user.displayName || 'User'}
                  className="w-7 h-7 rounded-full border-2 border-blue-500"
                />
                <span className="font-semibold text-gray-700 max-w-[120px] truncate">
                  {user.displayName?.split(' ')[0] || 'User'}
                </span>
                {isAdmin && (
                  <button
                    onClick={() => setActiveTab('numerology-admin' as TabType)}
                    title="Trang Admin"
                    className="px-2 py-1 text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-all flex items-center gap-1"
                  >
                    <ShieldCheck size={14} />
                    Admin
                  </button>
                )}
                <button
                  onClick={logout}
                  className="px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-1"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={signInWithGoogle}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <LogIn size={16} />
                  <span>Đăng nhập</span>
                </button>
                <button
                  onClick={() => setShowEmailLogin(true)}
                  className="px-3 py-2 text-xs font-semibold text-purple-600 border border-purple-200 hover:bg-purple-50 rounded-lg transition-all flex items-center gap-1"
                  title="Đăng nhập Admin"
                >
                  <ShieldCheck size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 font-bold ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-600 font-extrabold border-l-4 border-blue-500'
                    : item.highlight
                    ? 'text-green-500 font-extrabold hover:bg-green-50'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Login/User Section */}
            <div className="pt-2 border-t border-gray-100">
              {loading ? (
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              ) : user ? (
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.photoURL || '/default-avatar.png'}
                      alt={user.displayName || 'User'}
                      className="w-8 h-8 rounded-full border-2 border-blue-500"
                    />
                    <span className="font-semibold text-gray-700">
                      {user.displayName || 'User'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isAdmin && (
                      <button
                        onClick={() => {
                          setActiveTab('numerology-admin' as TabType);
                          setIsMobileMenuOpen(false);
                        }}
                        className="px-2 py-1 text-xs font-bold text-purple-600 bg-purple-50 border border-purple-200 rounded-lg flex items-center gap-1"
                      >
                        <ShieldCheck size={14} />
                        Admin
                      </button>
                    )}
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-2"
                    >
                      <LogOut size={18} />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    signInWithGoogle();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
                >
                  <LogIn size={18} />
                  <span>Đăng nhập với Google</span>
                </button>
              )}
            </div>
          </nav>
        )}
      </div>

      {/* Email login modal — inside header to inherit stacking context */}
      {showEmailLogin && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowEmailLogin(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-purple-600" />
                <h2 className="font-bold text-gray-800">Đăng nhập Admin</h2>
              </div>
              <button onClick={() => setShowEmailLogin(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleEmailLogin} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loginLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
