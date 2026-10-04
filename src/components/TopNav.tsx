import React from 'react';

interface TopNavProps {
  onOpenQuiz: () => void;
  onOpenAiChat: () => void;
  onOpenTeacherDash: () => void;
  onOpenLeaderboard: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenQuiz,
  onOpenAiChat,
  onOpenTeacherDash,
  onOpenLeaderboard,
}) => {
  return (
    <header className="bg-[#095e2d] text-white/95 text-xs py-2 px-3 sm:px-6 font-semibold border-b border-white/10 shadow-sm sticky top-0 z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        {/* News tag & slogan */}
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <img
            src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
            alt="Logo Cô Hoàn"
            className="w-5 h-5 object-contain shrink-0 drop-shadow-xs"
          />
          <span className="bg-amber-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider shrink-0 shadow-sm animate-pulse">
            TIN MỚI
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-emerald-50 truncate">
            Học tập thông minh - Bứt phá môn Sinh học cùng Cô Hoàn AI • THCS Bắc Đông Quan
          </span>
        </div>

        {/* Action quick links & Hotline */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-xs">
          <button
            onClick={onOpenQuiz}
            className="hidden md:inline-flex items-center gap-1 text-emerald-200 hover:text-amber-300 transition font-bold"
          >
            <i className="fa-solid fa-bolt text-amber-400"></i> Bài tập tuần
          </button>

          <button
            onClick={onOpenAiChat}
            className="hidden lg:inline-flex items-center gap-1 text-emerald-200 hover:text-amber-300 transition font-bold"
          >
            <i className="fa-solid fa-robot text-teal-300"></i> Hỏi đáp Sinh học AI
          </button>

          <button
            onClick={onOpenTeacherDash}
            className="hidden sm:inline-flex items-center gap-1 text-emerald-200 hover:text-amber-300 transition font-bold bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-full border border-white/15"
          >
            <i className="fa-solid fa-chalkboard-user text-amber-300"></i> Cổng Giáo viên
          </button>

          <span className="text-white/30 hidden sm:inline">|</span>

          <a
            href="tel:0355886190"
            className="hover:text-amber-300 transition flex items-center gap-1.5 text-xs text-white"
          >
            <i className="fa-solid fa-phone text-amber-400"></i>
            <span className="hidden xs:inline">Hotline/Zalo:</span>
            <strong className="text-amber-300 tracking-wide font-black">0355.886.190</strong>
          </a>

          <span className="text-white/30 hidden md:inline">|</span>

          <span className="text-emerald-100 text-xs hidden md:flex items-center gap-1">
            <i className="fa-solid fa-location-dot text-amber-400"></i>
            Hưng Yên
          </span>
        </div>
      </div>
    </header>
  );
};
