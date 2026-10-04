import React from 'react';

interface SiteFooterProps {
  onNavigate?: (path: string, sectionId?: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(path, sectionId);
    } else {
      if (path === '/') {
        window.location.href = sectionId ? `/#${sectionId}` : '/';
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <footer className="bg-[#123524] text-slate-300 py-12 lg:py-16 border-t border-[#091f15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand info */}
          <div className="space-y-2 max-w-sm">
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center justify-center md:justify-start gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
                <img
                  src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
                  alt="Huy Hiệu Cô Hoàn AI"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[18px] sm:text-[19px] font-extrabold text-white tracking-wide">
                CÔ HOÀN AI
              </span>
            </button>
            <p className="text-[13px] sm:text-[13.5px] text-emerald-100/75 font-normal leading-[1.5]">
              Hệ sinh thái Dạy &amp; Học Sinh học THCS kết hợp công nghệ AI giáo dục.
            </p>
          </div>

          {/* Links specified by user */}
          <div className="flex flex-wrap justify-center gap-6 text-[13.5px] sm:text-[14px] font-semibold text-slate-200">
            <button
              onClick={() => handleLinkClick('/')}
              className="hover:text-[#F4A900] transition cursor-pointer"
            >
              Trang chủ
            </button>
            <button
              onClick={() => handleLinkClick('/ve-co-hoan')}
              className="hover:text-[#F4A900] transition cursor-pointer"
            >
              Về cô Hoàn
            </button>
            <button
              onClick={() => handleLinkClick('/', 'learning-materials')}
              className="hover:text-[#F4A900] transition cursor-pointer"
            >
              Học liệu
            </button>
            <button
              onClick={() => handleLinkClick('/', 'ai-education')}
              className="hover:text-[#F4A900] transition cursor-pointer"
            >
              AI giáo dục
            </button>
            <button
              onClick={() => handleLinkClick('/', 'stem-steam')}
              className="hover:text-[#F4A900] transition cursor-pointer"
            >
              STEM/STEAM
            </button>
            <button
              onClick={() => handleLinkClick('/', 'contact')}
              className="hover:text-[#F4A900] transition cursor-pointer"
            >
              Liên hệ
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] sm:text-[12.5px] text-emerald-100/70 font-normal">
          <p>© 2025 CÔ HOÀN AI • Nguyễn Hoàn – Giáo viên Sinh học THCS.</p>
          <div className="flex items-center gap-2 text-emerald-100/80">
            <span>Hotline/Zalo: 0355.886.190</span>
            <span>•</span>
            <span>Hưng Yên</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
