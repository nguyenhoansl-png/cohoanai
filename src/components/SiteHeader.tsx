import React, { useState } from 'react';
import { UserRole } from '../types';

interface SiteHeaderProps {
  currentPath: string;
  onNavigate: (path: string, sectionId?: string) => void;
  onStartLearning: () => void;
  onOpenTeacherDash: () => void;
  onOpenLoginModal: () => void;
  loggedInUser: { name: string; role: UserRole; className?: string } | null;
  onLogout: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentPath,
  onNavigate,
  onStartLearning,
  onOpenTeacherDash,
  onOpenLoginModal,
  loggedInUser,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: { label: string; path?: string; sectionId?: string }[] = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Về cô Hoàn', path: '/ve-co-hoan' },
    { label: 'Sinh học THCS', path: '/', sectionId: 'khtn-bio' },
    { label: 'Học liệu', path: '/', sectionId: 'learning-materials' },
    { label: 'Thử thách', path: '/', sectionId: 'challenges' },
    { label: 'AI giáo dục', path: '/', sectionId: 'ai-education' },
    { label: 'STEM/STEAM', path: '/', sectionId: 'stem-steam' },
    { label: 'Góc chia sẻ', path: '/', sectionId: 'community' },
    { label: 'Liên hệ', path: '/', sectionId: 'contact' },
  ];

  const handleMenuClick = (item: { label: string; path?: string; sectionId?: string }) => {
    setMobileMenuOpen(false);
    if (item.path === '/ve-co-hoan') {
      onNavigate('/ve-co-hoan');
    } else {
      onNavigate('/', item.sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#DDE9E1] shadow-xs transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo & Brand on the left */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-3 shrink-0 group text-left cursor-pointer"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF8F0] border border-[#DDE9E1] p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition">
            <img
              src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
              alt="Huy Hiệu Cô Hoàn AI"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-[18px] sm:text-[20px] font-extrabold text-[#087A43] tracking-tight block font-sans leading-tight">
              CÔ HOÀN AI
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-medium text-[#52635A] tracking-normal block mt-0.5">
              Sinh Học THCS &amp; AI Giáo Dục
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2 text-[13.5px] 2xl:text-[14px] font-semibold text-[#123524]">
          {menuItems.map((item) => {
            const isActive =
              (item.path === '/ve-co-hoan' && currentPath === '/ve-co-hoan') ||
              (item.path === '/' && !item.sectionId && currentPath === '/');

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleMenuClick(item)}
                className={`px-2.5 py-1.5 rounded-lg transition whitespace-nowrap cursor-pointer tracking-normal ${
                  isActive
                    ? 'text-[#087A43] bg-[#EAF8F0] font-bold ring-1 ring-[#087A43]/20 shadow-2xs'
                    : 'hover:text-[#087A43] hover:bg-[#EAF8F0]/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA and User Area */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {loggedInUser ? (
            <div className="flex items-center gap-2">
              <button
                onClick={loggedInUser.role === 'teacher' ? onOpenTeacherDash : onStartLearning}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1] text-[12px] font-semibold hover:bg-[#EAF8F0]/80 transition cursor-pointer"
              >
                <span>{loggedInUser.role === 'teacher' ? '👩‍🏫 Cô Hoàn' : `🎒 ${loggedInUser.name}`}</span>
              </button>
              <button
                onClick={onLogout}
                title="Đăng xuất"
                className="p-2 text-[#52635A] hover:text-[#123524] rounded-xl hover:bg-slate-100 transition text-xs cursor-pointer"
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLoginModal}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[#52635A] hover:text-[#087A43] text-[13px] font-semibold hover:bg-[#EAF8F0]/60 transition cursor-pointer"
            >
              <i className="fa-solid fa-user-circle text-sm text-[#087A43]"></i>
              <span>Đăng nhập</span>
            </button>
          )}

          {/* Nút nổi bật BẮT ĐẦU HỌC */}
          <button
            onClick={onStartLearning}
            className="px-4 sm:px-5 py-2.5 rounded-full bg-[#087A43] hover:bg-[#056B3A] text-white font-bold text-[13px] sm:text-[14px] tracking-normal shadow-md shadow-emerald-700/20 hover:shadow-lg transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>BẮT ĐẦU HỌC</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl text-[#123524] hover:bg-slate-100 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] border-b border-[#DDE9E1] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-1.5 text-[13.5px] font-semibold">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleMenuClick(item)}
                className={`p-2.5 rounded-xl text-left transition cursor-pointer ${
                  (item.path === '/ve-co-hoan' && currentPath === '/ve-co-hoan') ||
                  (item.path === '/' && !item.sectionId && currentPath === '/')
                    ? 'bg-[#EAF8F0] text-[#087A43] font-bold'
                    : 'text-[#123524] hover:bg-[#EAF8F0] hover:text-[#087A43]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#DDE9E1] flex flex-col gap-2">
            {!loggedInUser && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full py-2.5 rounded-xl border border-[#DDE9E1] text-[#123524] font-semibold text-[13px] flex items-center justify-center gap-1.5 hover:bg-slate-50 cursor-pointer"
              >
                <i className="fa-solid fa-user-circle text-[#087A43]"></i>
                <span>Đăng nhập hệ thống</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartLearning();
              }}
              className="w-full py-2.5 rounded-xl bg-[#087A43] hover:bg-[#056B3A] text-white font-bold text-[13px] sm:text-[14px] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>BẮT ĐẦU HỌC NGAY</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
