import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // flip this flag to true if you want the AI‑chatbot tab to appear again
  const ENABLE_CHATBOT = false;

  const navItems = [
    { id: 'home' as TabType, label: 'Trang Chủ' },
    { id: 'documents' as TabType, label: 'Tài Liệu' },
    { id: 'universities' as TabType, label: 'Điểm Chuẩn' },
    { id: 'calculator' as TabType, label: 'Tính Điểm' },
    { id: 'studypath' as TabType, label: 'Lộ Trình' },
    { id: 'news' as TabType, label: 'Tin Tức' },
    // the chatbot item is kept here for reference but filtered out below when
    // the feature is disabled
    { id: 'chatbot' as TabType, label: 'AI Tư Vấn' },
    { id: 'community' as TabType, label: 'Cộng Đồng' },
    { id: 'riasec' as TabType, label: 'Trắc Nghiệm RIASEC' },
    { id: 'b2b-landing' as TabType, label: 'Hợp Tác B2B', highlight: true },
  ];

  // hide chatbot item when the flag is false
  const visibleNavItems = navItems.filter(
    (item) => item.id !== 'chatbot' || ENABLE_CHATBOT
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            <img 
              src="/logo.png" 
              alt="La bàn Tuyển sinh" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2 py-1 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-100 px-3 py-2 text-blue-600 font-semibold shadow-sm'
                    : item.highlight
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 animate-pulse'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-600 font-semibold shadow-sm border-l-4 border-blue-500'
                    : item.highlight
                    ? 'text-red-500 font-semibold hover:bg-red-50'
                    : 'text-gray-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
