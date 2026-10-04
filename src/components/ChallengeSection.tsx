import React from 'react';

interface ChallengeSectionProps {
  onStartChallenge: () => void;
  onViewAllChallenges: () => void;
}

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  onStartChallenge,
  onViewAllChallenges,
}) => {
  return (
    <section id="challenges" className="py-16 lg:py-20 bg-gradient-to-r from-emerald-900 via-[#0d8a43] to-teal-900 text-white relative overflow-visible">
      {/* Background glowing decorations safely isolated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[#F4A900] text-[12px] font-semibold tracking-normal">
            <span>⚡</span> HOẠT ĐỘNG TƯƠNG TÁC TUẦN
          </div>

          <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight leading-[1.25] font-sans break-words text-white">
            🔬 THỬ THÁCH SINH HỌC CÙNG CÔ HOÀN AI
          </h2>

          <p className="text-[16px] sm:text-[17.5px] text-emerald-100 font-semibold leading-[1.5] break-words">
            “Quan sát – suy luận – khám phá – chinh phục những câu hỏi thú vị về thế giới sự sống.”
          </p>

          <p className="text-[14px] sm:text-[14.5px] text-emerald-100/90 max-w-xl mx-auto leading-[1.6] break-words font-normal">
            Học sinh được tương tác với câu hỏi trắc nghiệm thông minh, nhận phản hồi và lời giảng tức thì từ trợ lý Cô Hoàn AI để tích lũy điểm thi đua Bảng Vàng.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <button
              type="button"
              onClick={onStartChallenge}
              className="px-6 sm:px-7 py-3 rounded-full bg-[#F4A900] hover:bg-[#e09b00] text-slate-950 font-bold text-[13.5px] sm:text-[14px] tracking-normal shadow-xl transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>THỬ THÁCH NGAY</span>
              <i className="fa-solid fa-bolt text-slate-900 text-xs"></i>
            </button>

            <button
              type="button"
              onClick={onViewAllChallenges}
              className="px-6 sm:px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-[13.5px] sm:text-[14px] tracking-normal backdrop-blur-sm border border-white/30 transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>XEM CÁC THỬ THÁCH</span>
              <i className="fa-solid fa-arrow-down text-emerald-200 text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
