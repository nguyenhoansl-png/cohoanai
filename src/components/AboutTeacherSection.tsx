import React from 'react';

export const AboutTeacherSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#DDE9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-2 mb-10">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Người Sáng Lập
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              VỀ CÔ HOÀN
            </h2>
          </div>

          <div className="bg-[#FFFDF3] rounded-3xl p-6 sm:p-9 border border-[#DDE9E1] shadow-xs flex flex-col md:flex-row items-center gap-7">
            {/* Portrait Image Container */}
            <div className="shrink-0 text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-[#FFFFFF] p-2.5 shadow-md border-2 border-[#087A43]/40 mx-auto flex items-center justify-center relative">
                <img
                  src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
                  alt="Huy Hiệu Cô Hoàn AI Sinh Học"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-2.5">
                <span className="inline-block px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1]">
                  Cô Hoàn AI
                </span>
              </div>
            </div>

            {/* Content text */}
            <div className="space-y-3.5 text-center md:text-left">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#123524] font-sans leading-snug break-words">
                  Nguyễn Hoàn – Giáo viên Sinh học THCS.
                </h3>
                <p className="text-[14px] font-semibold text-[#087A43] mt-1">
                  Định hướng: Hệ sinh thái Dạy &amp; Học Sinh học THCS kết hợp AI giáo dục
                </p>
              </div>

              <p className="text-[15px] sm:text-[15.5px] text-[#52635A] font-normal leading-[1.65] break-words">
                “Quan tâm đến đổi mới phương pháp dạy học, thiết kế học liệu trực quan, STEM/STEAM và ứng dụng AI trong giáo dục.”
              </p>

              <div className="pt-1 flex flex-wrap gap-2 justify-center md:justify-start text-[12.5px] font-semibold">
                <span className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#DDE9E1] text-[#123524] shadow-2xs">
                  🌱 Sinh học THCS
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#DDE9E1] text-[#123524] shadow-2xs">
                  🤖 AI Giáo Dục
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#DDE9E1] text-[#123524] shadow-2xs">
                  🔬 STEM/STEAM
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#DDE9E1] text-[#123524] shadow-2xs">
                  📑 Học liệu trực quan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
