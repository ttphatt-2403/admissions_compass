import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { useState } from 'react';
import { TabType } from '../types';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading, signInWithGoogle, logout } = useAuth();

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
    { id: 'b2b-landing' as TabType, label: 'Hợp Tác Tuyển Sinh', highlight: true },
  ];

  // hide chatbot item when the flag is false
  const visibleNavItems = navItems.filter(
    (item) => item.id !== 'chatbot' || ENABLE_CHATBOT
  );

  return (
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
                    ? 'text-red-500 font-extrabold hover:bg-red-50 hover:text-red-600'
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
                <button
                  onClick={logout}
                  className="px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-1"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <LogIn size={16} />
                <span>Đăng nhập</span>
              </button>
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
                    ? 'text-red-500 font-extrabold hover:bg-red-50'
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
    </header>
  );
}
