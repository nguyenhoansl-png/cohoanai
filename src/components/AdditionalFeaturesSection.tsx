import React from 'react';

interface AdditionalFeaturesSectionProps {
  onOpenAiAssistant: () => void;
  onOpenQuiz: () => void;
}

export const AdditionalFeaturesSection: React.FC<AdditionalFeaturesSectionProps> = ({
  onOpenAiAssistant,
  onOpenQuiz,
}) => {
  return (
    <>
      {/* ================= AI GIÁO DỤC ================= */}
      <section id="ai-education" className="py-16 lg:py-20 bg-[#EAF8F0] border-b border-[#DDE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-[12px] font-semibold text-[#087A43] bg-white px-3.5 py-1 rounded-full border border-[#DDE9E1] shadow-2xs tracking-normal">
                Công Nghệ Trong Giảng Dạy
              </span>
              <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
                ỨNG DỤNG AI TRONG DẠY VÀ HỌC SINH HỌC
              </h2>
              <p className="text-[15px] sm:text-[15.5px] text-[#52635A] font-normal leading-[1.6]">
                Trợ lý Cô Hoàn AI được xây dựng nhằm hỗ trợ học sinh giải đáp kiến thức, minh họa sơ đồ sinh học và hỗ trợ tự học mọi lúc mọi nơi.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAiAssistant}
                  className="px-6 py-3 rounded-full bg-[#087A43] hover:bg-[#056B3A] text-white font-bold text-[13.5px] sm:text-[14px] shadow-md transition transform active:scale-95 flex items-center gap-2 mx-auto lg:mx-0 cursor-pointer tracking-normal"
                >
                  <i className="fa-solid fa-robot text-[#F4A900]"></i>
                  <span>HỎI ĐÁP CÙNG TRỢ LÝ CÔ HOÀN AI</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FFFFFF] rounded-3xl border border-[#DDE9E1] shadow-xs space-y-2">
                <span className="text-2xl">⚡</span>
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Giải thích tức thì</h4>
                <p className="text-[14px] text-[#52635A] font-normal leading-[1.55]">Hỗ trợ trả lời các thắc mắc về di truyền, tế bào, hệ sinh thái trong chương trình THCS.</p>
              </div>
              <div className="p-5 bg-[#FFFFFF] rounded-3xl border border-[#DDE9E1] shadow-xs space-y-2">
                <span className="text-2xl">🎯</span>
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Chấm &amp; sửa bài</h4>
                <p className="text-[14px] text-[#52635A] font-normal leading-[1.55]">Gợi ý phương pháp tư duy và giải thích nguyên nhân đáp án đúng sai.</p>
              </div>
              <div className="p-5 bg-[#FFFFFF] rounded-3xl border border-[#DDE9E1] shadow-xs space-y-2">
                <span className="text-2xl">📈</span>
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Lộ trình thích ứng</h4>
                <p className="text-[14px] text-[#52635A] font-normal leading-[1.55]">Theo dõi sự chăm chỉ và tiến bộ của học sinh qua từng tuần học tập.</p>
              </div>
              <div className="p-5 bg-[#FFFFFF] rounded-3xl border border-[#DDE9E1] shadow-xs space-y-2">
                <span className="text-2xl">💡</span>
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Gợi ý trực quan</h4>
                <p className="text-[14px] text-[#52635A] font-normal leading-[1.55]">Cung cấp sơ đồ tư duy và liên hệ thực tiễn sự sống dễ nhớ, dễ hiểu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HỌC LIỆU & STEM/STEAM ================= */}
      <section id="learning-materials" className="py-16 lg:py-20 bg-[#FFF8E8] border-b border-[#DDE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-[12px] font-semibold text-[#087A43] bg-white px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Hệ Thống Tri Thức
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              HỌC LIỆU &amp; TRẢI NGHIỆM STEM/STEAM
            </h2>
            <p className="text-[15px] sm:text-[15.5px] text-[#52635A] font-normal leading-[1.6]">
              Học liệu Sinh học THCS được tổ chức khoa học kết hợp trải nghiệm thực tế để phát triển năng lực khoa học cho học sinh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-3xl">📊</span>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Sơ đồ tư duy Sinh học</h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55]">
                  Tổng hợp các chuỗi kiến thức trọng tâm theo mạch KHTN 6, 7, 8, 9 dưới dạng mindmap cô đọng.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenQuiz}
                className="text-[13px] sm:text-[13.5px] font-bold text-[#087A43] hover:text-[#056B3A] flex items-center gap-1 cursor-pointer tracking-normal"
              >
                <span>Ôn tập với câu hỏi</span> →
              </button>
            </div>

            <div id="stem-steam" className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-3xl">🌱</span>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Dự án STEM/STEAM</h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55]">
                  Gắn liền kiến thức sinh học với mô hình thực tế: làm tiêu bản, trồng cây thủy canh, phân tích sinh thái.
                </p>
              </div>
              <span className="text-[12px] font-bold text-[#b45309]">
                Khám phá thực tế
              </span>
            </div>

            <div id="community" className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-3xl">💬</span>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] leading-[1.3]">Góc chia sẻ phương pháp</h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55]">
                  Chia sẻ kinh nghiệm giảng dạy, thiết kế bài học trực quan và ứng dụng công nghệ thông tin trong lớp học.
                </p>
              </div>
              <a
                href="#contact"
                className="text-[13px] sm:text-[13.5px] font-bold text-[#087A43] hover:text-[#056B3A] flex items-center gap-1 tracking-normal"
              >
                <span>Kết nối trao đổi</span> →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIÊN HỆ ================= */}
      <section id="contact" className="py-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#DDE9E1] shadow-xs text-center space-y-5">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Kết Nối &amp; Hỗ Trợ
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              LIÊN HỆ CÙNG CÔ HOÀN AI
            </h2>
            <p className="text-[15px] sm:text-[15.5px] text-[#52635A] font-normal max-w-xl mx-auto leading-[1.6]">
              Mọi thắc mắc về bài học, tài liệu hoặc đăng ký học tập môn Sinh học THCS, quý phụ huynh và các con học sinh có thể liên hệ trực tiếp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="https://zalo.me/0355886190"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-[#EAF8F0] hover:bg-[#d8f2e2] text-[#087A43] border border-[#DDE9E1] transition font-bold text-[13.5px] sm:text-[14px] flex items-center justify-center gap-2 tracking-normal"
              >
                <i className="fa-solid fa-comments text-[#087A43] text-lg"></i>
                <span>Zalo: 0355.886.190</span>
              </a>

              <a
                href="tel:0355886190"
                className="p-3.5 rounded-2xl bg-[#FFF8E8] hover:bg-amber-100 text-amber-950 border border-amber-200 transition font-bold text-[13.5px] sm:text-[14px] flex items-center justify-center gap-2 tracking-normal"
              >
                <i className="fa-solid fa-phone text-[#F4A900] text-lg"></i>
                <span>Hotline: 0355.886.190</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
