import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  size?: 'normal' | 'large';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className = '',
  size = 'large',
}) => {
  // TODO: Replace with real portrait of Nguyen Hoan
  // This placeholder presents the official branding emblem and portrait frame
  // until the verified official personal photo of teacher Nguyen Hoan is uploaded.

  return (
    <div className={`relative ${className}`}>
      {/* Decorative gradient glow backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>

      <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-4 overflow-hidden">
        {/* Decorative corner leaves */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-50 rounded-full flex items-end justify-start p-3 text-emerald-300 pointer-events-none">
          <i className="fa-solid fa-leaf text-2xl rotate-45"></i>
        </div>

        {/* Emblem frame */}
        <div className={`${size === 'large' ? 'w-36 h-36 sm:w-44 sm:h-44' : 'w-28 h-28'} rounded-3xl bg-gradient-to-b from-emerald-50 to-white p-3 shadow-md border-2 border-emerald-400/80 flex items-center justify-center relative`}>
          <img
            src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
            alt="Chân dung & Huy hiệu Cô Hoàn AI Sinh Học"
            className="w-full h-full object-contain drop-shadow-xs"
          />
          <span className="absolute -bottom-2 -right-2 bg-amber-400 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
            AI
          </span>
        </div>

        {/* Caption */}
        <div className="space-y-1">
          <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight">
            Nguyễn Hoàn
          </h4>
          <p className="text-sm font-bold text-emerald-700">
            Giáo viên Sinh học THCS
          </p>
          <p className="text-xs text-slate-400 font-medium">
            Người sáng lập Cô Hoàn AI
          </p>
        </div>

        {/* Placeholder notice pill */}
        <div className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-bold inline-flex items-center gap-1.5">
          <i className="fa-regular fa-image text-emerald-600"></i>
          <span>Ảnh chân dung chính thức</span>
        </div>
      </div>
    </div>
  );
};
