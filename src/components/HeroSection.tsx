import React from 'react';

interface HeroSectionProps {
  onExploreBio: () => void;
  onExploreAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreBio,
  onExploreAi,
}) => {
  return (
    <section
      id="home"
      className="relative pt-8 sm:pt-10 pb-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1] overflow-visible"
    >
      {/* Decorative background shapes safely isolated so they never clip text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF8F0]/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF8E8]/70 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand, Headline, Intro, Buttons */}
          <div className="lg:col-span-7 min-w-0 flex-1 space-y-5 text-center lg:text-left overflow-visible">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF8F0] border border-[#DDE9E1] text-[#087A43] text-[12px] font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#087A43] animate-pulse"></span>
              <span>Hệ sinh thái Dạy &amp; Học Sinh học THCS</span>
            </div>

            {/* Main Brand Title: Desktop 38–44px, Mobile 32–36px, font-weight 700-800, line-height 1.15-1.2 */}
            <h1 className="pt-1.5 sm:pt-2 pb-1 text-[32px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#123524] leading-[1.18] tracking-tight font-sans overflow-visible box-border break-words">
              <span className="text-[#087A43]">CÔ HOÀN AI</span>
            </h1>

            {/* Tagline: Desktop 18–21px, font-weight 600, line-height 1.45, max-w 700px */}
            <div className="w-full max-w-[700px] mx-auto lg:mx-0 overflow-visible">
              <p className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#123524] italic leading-[1.45] break-words [overflow-wrap:break-word] [word-break:normal]">
                “Khơi dậy niềm say mê khoa học – Khám phá sự sống cùng Cô Hoàn AI.”
              </p>
            </div>

            {/* Intro paragraph: 15.5–16px, line-height 1.65 */}
            <div className="w-full max-w-[680px] mx-auto lg:mx-0 pt-0.5">
              <p className="text-[15.5px] sm:text-[16px] text-[#52635A] font-normal sm:font-medium leading-[1.65] break-words [overflow-wrap:break-word]">
                Tôi là Nguyễn Hoàn, giáo viên Sinh học THCS. Tôi xây dựng Cô Hoàn AI với mong muốn kết hợp kiến thức Sinh học, học liệu trực quan và công nghệ AI để tạo ra những trải nghiệm học tập khoa học, gần gũi và hiệu quả cho học sinh.
              </p>
            </div>

            {/* Action Buttons: 13-14px, font-weight 600-700 */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onExploreBio}
                className="px-6 sm:px-6.5 py-3 rounded-full bg-[#087A43] hover:bg-[#056B3A] text-white font-bold text-[13.5px] sm:text-[14px] tracking-normal shadow-md shadow-[#087A43]/20 hover:shadow-lg transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>KHÁM PHÁ SINH HỌC</span>
                <i className="fa-solid fa-leaf text-emerald-200"></i>
              </button>

              <button
                type="button"
                onClick={onExploreAi}
                className="px-6 sm:px-6.5 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#FFFDF3] text-[#123524] font-bold text-[13.5px] sm:text-[14px] tracking-normal border border-[#DDE9E1] hover:border-[#087A43] shadow-2xs transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>KHÁM PHÁ CÔ HOÀN AI</span>
                <i className="fa-solid fa-robot text-[#087A43]"></i>
              </button>
            </div>
          </div>

          {/* Right Column: Teacher Portrait Area */}
          <div className="lg:col-span-5 flex justify-center w-full min-w-0 pt-4 lg:pt-0">
            <div className="relative w-full max-w-md">
              {/* Decorative background border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#087A43] to-teal-500 rounded-3xl transform rotate-2 shadow-xl opacity-90"></div>

              {/* Portrait Presentation Card: White surface #FFFFFF */}
              <div className="relative bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#DDE9E1] space-y-5 text-center transform -rotate-1 hover:rotate-0 transition duration-300">
                {/* Emblem Badge */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-b from-[#FFFDF3] to-[#FFFFFF] rounded-3xl p-2.5 shadow-md border-2 border-[#087A43]/60 flex items-center justify-center relative">
                  <img
                    src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
                    alt="Cô Hoàn AI Sinh Học"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute -bottom-1.5 -right-1.5 bg-[#F4A900] text-slate-900 text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-md">
                    AI
                  </span>
                </div>

                {/* Identity Info without fabricated data */}
                <div className="space-y-0.5">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#123524] leading-snug">
                    Nguyễn Hoàn
                  </h3>
                  <p className="text-[14px] font-semibold text-[#087A43]">
                    Giáo viên Sinh học THCS
                  </p>
                  <p className="text-[12.5px] font-medium text-[#52635A]">
                    Sáng lập nền tảng Cô Hoàn AI
                  </p>
                </div>

                {/* Focus badges */}
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full text-[12px] font-semibold bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1]">
                    🌱 Sinh học thực nghiệm
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-semibold bg-[#FFF8E8] text-amber-900 border border-amber-200">
                    🤖 AI trong dạy &amp; học
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                    🔬 STEM / STEAM
                  </span>
                </div>

                {/* Message pill */}
                <div className="p-2.5 bg-[#FFFDF3] rounded-2xl border border-[#DDE9E1] text-[13px] italic text-[#52635A] font-medium leading-relaxed">
                  "Học cùng công nghệ – Khám phá bằng đam mê"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
