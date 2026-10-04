import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenQuiz: () => void;
  onExploreLearning: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenQuiz,
  onExploreLearning,
}) => {
  const scrollToWhySection = () => {
    const el = document.getElementById('why-co-hoan-ai');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#FFFDF3] text-[#123524] animate-fadeIn overflow-x-hidden">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FFFFFF] border-b border-[#DDE9E1] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[12.5px] font-semibold text-[#52635A]">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#087A43] transition flex items-center gap-1 cursor-pointer"
          >
            <i className="fa-solid fa-house text-[#087A43]"></i>
            <span>Trang chủ</span>
          </button>
          <span>/</span>
          <span className="text-[#087A43] font-bold">Về cô Hoàn</span>
        </div>
      </div>

      {/* ================= 2. HERO TRANG VỀ CÔ HOÀN ================= */}
      <section className="relative pt-8 sm:pt-10 pb-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1] overflow-visible">
        {/* Background shapes isolated in zero-overflow wrapper */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF8F0]/70 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF8E8]/70 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bio Details */}
            <div className="lg:col-span-7 min-w-0 flex-1 space-y-5 text-center lg:text-left overflow-visible">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF8F0] text-[#087A43] text-[12px] font-semibold tracking-normal border border-[#DDE9E1] shadow-2xs">
                <span>🌱</span> VỀ CÔ HOÀN
              </div>

              {/* Title CÔ HOÀN AI (Desktop 34-40px, max 44px, line-height 1.18) */}
              <div className="overflow-visible box-border">
                <h1 className="pt-1.5 sm:pt-2 pb-1 text-[30px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#123524] leading-[1.18] tracking-tight font-sans overflow-visible box-border break-words">
                  <span className="text-[#087A43]">CÔ HOÀN AI</span>
                </h1>
                <p className="text-[16px] sm:text-[17px] font-bold text-[#123524] tracking-normal mt-1">
                  NGUYỄN HOÀN – <span className="text-[#087A43]">Giáo viên Sinh học THCS</span>
                </p>
              </div>

              {/* Tagline: Full width up to 700px, 18-20px, font-weight 600, line-height 1.45 */}
              <div className="w-full max-w-[700px] mx-auto lg:mx-0 overflow-visible">
                <p className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#123524] italic leading-[1.45] break-words [overflow-wrap:break-word] [word-break:normal]">
                  “Khơi dậy niềm say mê khoa học – Khám phá sự sống cùng Cô Hoàn AI.”
                </p>
              </div>

              {/* Câu giới thiệu nổi bật (Quote: 16-18px) */}
              <div className="w-full max-w-[700px] mx-auto lg:mx-0 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#DDE9E1] border-l-4 border-l-[#087A43] shadow-xs">
                <p className="text-[16px] sm:text-[17px] font-semibold text-[#123524] leading-[1.6] break-words [overflow-wrap:break-word]">
                  “Đưa khoa học đến gần học sinh hơn bằng sự gần gũi, trực quan và công nghệ.”
                </p>
              </div>

              {/* Đoạn mô tả chi tiết: 15-16px, line-height 1.65 */}
              <div className="w-full max-w-[680px] mx-auto lg:mx-0">
                <p className="text-[15px] sm:text-[15.5px] text-[#52635A] font-normal leading-[1.65] break-words [overflow-wrap:break-word]">
                  Tôi là Nguyễn Hoàn, giáo viên Sinh học THCS. Tôi yêu thích việc biến những kiến thức
                  về sự sống thành những bài học gần gũi, trực quan và dễ khám phá đối với học sinh.
                </p>
              </div>

              {/* Nút hành động: 13-14px */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={scrollToWhySection}
                  className="px-6 sm:px-6.5 py-3 rounded-full bg-[#087A43] hover:bg-[#056B3A] text-white font-bold text-[13.5px] sm:text-[14px] tracking-normal shadow-md shadow-[#087A43]/20 hover:shadow-lg transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>KHÁM PHÁ CÔ HOÀN AI</span>
                  <i className="fa-solid fa-arrow-down text-emerald-200"></i>
                </button>

                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="px-6 sm:px-6.5 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#FFFDF3] text-[#123524] font-bold text-[13.5px] sm:text-[14px] tracking-normal border border-[#DDE9E1] shadow-2xs transition cursor-pointer"
                >
                  Quay lại Trang chủ
                </button>
              </div>
            </div>

            {/* Right Column: Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center w-full min-w-0 pt-4 lg:pt-0">
              <div className="w-full max-w-sm sm:max-w-md">
                <ImagePlaceholder size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. CÂU CHUYỆN CỦA TÔI ================= */}
      <section className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#DDE9E1] overflow-visible">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Tâm Huyết Nghề Giáo
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              CÂU CHUYỆN CỦA TÔI
            </h2>
          </div>

          <div className="space-y-6 text-[15px] sm:text-[16px] text-[#123524] font-normal leading-[1.7] bg-[#FFFDF3] p-6 sm:p-10 rounded-3xl border border-[#DDE9E1] shadow-xs relative">
            <div className="text-[#087A43]/20 text-4xl font-black leading-none absolute top-4 left-6 select-none">
              “
            </div>

            <p className="relative z-10 pl-6 sm:pl-8 break-words [overflow-wrap:break-word]">
              “Dạy Sinh học không chỉ là giúp học sinh nhớ tên một cơ quan, một quá trình hay một
              khái niệm. Điều tôi mong muốn hơn là giúp các em biết quan sát, biết đặt câu hỏi và
              biết tìm lời giải thích cho thế giới sự sống xung quanh mình.”
            </p>

            <p className="relative z-10 pl-6 sm:pl-8 border-t border-[#DDE9E1] pt-6 text-[#52635A] break-words [overflow-wrap:break-word]">
              “Từ những giờ học trên lớp, những câu hỏi của học sinh và mong muốn tạo ra những học
              liệu trực quan, tôi từng bước xây dựng Cô Hoàn AI – một không gian kết nối giữa Sinh
              học, giáo dục và công nghệ.”
            </p>
          </div>
        </div>
      </section>

      {/* ================= 4. QUAN ĐIỂM DẠY HỌC ================= */}
      <section className="py-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1] overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Phương Châm Sư Phạm
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              QUAN ĐIỂM DẠY HỌC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs hover:shadow-md hover:border-[#087A43]/50 transition duration-200 space-y-3 flex flex-col justify-between">
              <span className="text-2xl font-black text-[#087A43] font-sans">01</span>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] font-sans leading-[1.3] break-words">
                  HỌC ĐỂ HIỂU
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal mt-2 leading-[1.55] break-words">
                  Không chỉ ghi nhớ kiến thức mà phải hiểu bản chất.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs hover:shadow-md hover:border-[#087A43]/50 transition duration-200 space-y-3 flex flex-col justify-between">
              <span className="text-2xl font-black text-[#056B3A] font-sans">02</span>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] font-sans leading-[1.3] break-words">
                  HỌC QUA KHÁM PHÁ
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal mt-2 leading-[1.55] break-words">
                  Khuyến khích học sinh quan sát, đặt câu hỏi và tự tìm lời giải.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs hover:shadow-md hover:border-[#087A43]/50 transition duration-200 space-y-3 flex flex-col justify-between">
              <span className="text-2xl font-black text-[#F4A900] font-sans">03</span>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] font-sans leading-[1.3] break-words">
                  HỌC GẮN VỚI THỰC TIỄN
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal mt-2 leading-[1.55] break-words">
                  Kết nối kiến thức Sinh học với cơ thể, môi trường và cuộc sống.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs hover:shadow-md hover:border-[#087A43]/50 transition duration-200 space-y-3 flex flex-col justify-between">
              <span className="text-2xl font-black text-[#087A43] font-sans">04</span>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] font-sans leading-[1.3] break-words">
                  CÔNG NGHỆ HỖ TRỢ CON NGƯỜI
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal mt-2 leading-[1.55] break-words">
                  AI là công cụ hỗ trợ giáo viên và học sinh, không thay thế vai trò của người thầy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. LĨNH VỰC CHUYÊN MÔN ================= */}
      <section className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#DDE9E1] overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Chuyên Môn &amp; Hướng Tiếp Cận
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              LĨNH VỰC TÔI QUAN TÂM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF3] border border-[#DDE9E1] shadow-xs space-y-3">
              <span className="text-3xl">🧬</span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#087A43] font-sans leading-[1.3] break-words">
                SINH HỌC THCS
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55] break-words">
                Kiến thức và học liệu Sinh học trong chương trình Khoa học tự nhiên THCS.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF3] border border-[#DDE9E1] shadow-xs space-y-3">
              <span className="text-3xl">🌱</span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#056B3A] font-sans leading-[1.3] break-words">
                STEM/STEAM
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55] break-words">
                Thiết kế các hoạt động học tập gắn với thực tiễn.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF3] border border-[#DDE9E1] shadow-xs space-y-3">
              <span className="text-3xl">🤖</span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] font-sans leading-[1.3] break-words">
                AI TRONG GIÁO DỤC
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55] break-words">
                Ứng dụng AI để hỗ trợ dạy học và xây dựng học liệu.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF3] border border-[#DDE9E1] shadow-xs space-y-3">
              <span className="text-3xl">📚</span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#087A43] font-sans leading-[1.3] break-words">
                HỌC LIỆU SỐ
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55] break-words">
                Thiết kế tài nguyên trực quan phục vụ học sinh và giáo viên.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF3] border border-[#DDE9E1] shadow-xs space-y-3 md:col-span-2 lg:col-span-1">
              <span className="text-3xl">🔬</span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#056B3A] font-sans leading-[1.3] break-words">
                HỌC TẬP QUA KHÁM PHÁ
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55] break-words">
                Khuyến khích quan sát, thực hành, suy luận và đặt câu hỏi khoa học.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. CÔ HOÀN AI RA ĐỜI VÌ ĐIỀU GÌ? ================= */}
      <section
        id="why-co-hoan-ai"
        className="py-16 lg:py-20 bg-gradient-to-r from-[#056B3A] via-[#087A43] to-[#04522c] text-white relative overflow-visible"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-[#F4A900] text-[12px] font-semibold tracking-normal">
            <span>💡</span> SỨ MỆNH KHỞI NGUYÊN
          </div>

          <h2 className="text-[26px] sm:text-[28px] lg:text-[30px] font-extrabold tracking-tight leading-[1.25] font-sans break-words text-white">
            VÌ SAO CÓ CÔ HOÀN AI?
          </h2>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-emerald-100 font-normal max-w-3xl mx-auto leading-[1.7]">
            <p className="break-words [overflow-wrap:break-word]">
              “Cô Hoàn AI được xây dựng từ một mong muốn rất giản dị: làm cho việc học Khoa học trở nên
              gần gũi, trực quan và thú vị hơn.”
            </p>

            <p className="break-words [overflow-wrap:break-word]">
              “Công nghệ có thể giúp người thầy tạo ra nhiều học liệu hơn, cá nhân hóa việc học và mở
              thêm những cách tiếp cận kiến thức mới. Nhưng phía sau công nghệ vẫn luôn cần sự định
              hướng, tình yêu nghề và trách nhiệm của người thầy.”
            </p>
          </div>

          {/* Câu nổi bật được thiết kế trang trọng */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="p-5 sm:p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 shadow-2xl space-y-2">
              <span className="text-[#F4A900] text-2xl block mb-1">✨</span>
              <p className="text-[17px] sm:text-[19px] font-bold text-white leading-snug break-words [overflow-wrap:break-word]">
                “AI có thể hỗ trợ việc dạy và học.<br className="hidden sm:inline" />
                Nhưng sự tò mò, niềm tin và cảm hứng học tập vẫn bắt đầu từ con người.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. GIÁ TRỊ CÔ HOÀN AI ================= */}
      <section className="py-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1] overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Giá Trị Đem Lại
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              GIÁ TRỊ CÔ HOÀN AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cột 1: DÀNH CHO HỌC SINH */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1] flex items-center justify-center text-xl shadow-2xs">
                🎒
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#123524] font-sans">
                DÀNH CHO HỌC SINH
              </h3>
              <ul className="space-y-2.5 text-[14px] sm:text-[14.5px] text-[#52635A] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Học dễ hiểu hơn</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Khám phá khoa học</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Luyện tập chủ động</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Ghi nhận sự tiến bộ</span>
                </li>
              </ul>
            </div>

            {/* Cột 2: DÀNH CHO GIÁO VIÊN */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8E8] text-[#123524] border border-amber-200 flex items-center justify-center text-xl shadow-2xs">
                👩‍🏫
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#123524] font-sans">
                DÀNH CHO GIÁO VIÊN
              </h3>
              <ul className="space-y-2.5 text-[14px] sm:text-[14.5px] text-[#52635A] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FFF8E8] text-amber-900 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Học liệu</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FFF8E8] text-amber-900 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Giáo án</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FFF8E8] text-amber-900 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Câu hỏi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FFF8E8] text-amber-900 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Đề kiểm tra</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FFF8E8] text-amber-900 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>STEM/STEAM</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FFF8E8] text-amber-900 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Công cụ AI</span>
                </li>
              </ul>
            </div>

            {/* Cột 3: DÀNH CHO GIÁO DỤC */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1] flex items-center justify-center text-xl shadow-2xs">
                🌱
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#123524] font-sans">
                DÀNH CHO GIÁO DỤC
              </h3>
              <ul className="space-y-2.5 text-[14px] sm:text-[14.5px] text-[#52635A] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Đổi mới phương pháp</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Học tập trực quan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Công nghệ phục vụ con người</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF8F0] text-[#087A43] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>Lan tỏa tình yêu khoa học</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. DẤU ẤN CÁ NHÂN ================= */}
      <section className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#DDE9E1] overflow-visible">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[12px] font-semibold text-[#087A43] bg-[#EAF8F0] px-3.5 py-1 rounded-full border border-[#DDE9E1] tracking-normal">
              Hồ Sơ Chuyên Môn
            </span>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              MỘT NGƯỜI THẦY – MỘT HÀNH TRÌNH
            </h2>
            <p className="text-[13px] text-[#52635A] font-normal">
              Không tự bịa dữ liệu – Các thông tin được cập nhật theo xác thực chính thức từ giáo viên
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFFDF3] border border-dashed border-[#DDE9E1] text-center space-y-1.5">
              <span className="text-2xl text-[#087A43] block">🏛️</span>
              <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#123524]">[Bổ sung hành trình nghề nghiệp]</h4>
              <p className="text-[12.5px] text-[#52635A] font-normal">Đang cập nhật các mốc thời gian giảng dạy</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF3] border border-dashed border-[#DDE9E1] text-center space-y-1.5">
              <span className="text-2xl text-[#F4A900] block">🏆</span>
              <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#123524]">[Bổ sung thành tích]</h4>
              <p className="text-[12.5px] text-[#52635A] font-normal">Đang cập nhật thành tích dạy học</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF3] border border-dashed border-[#DDE9E1] text-center space-y-1.5">
              <span className="text-2xl text-[#087A43] block">📜</span>
              <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#123524]">[Bổ sung chứng nhận]</h4>
              <p className="text-[12.5px] text-[#52635A] font-normal">Đang cập nhật các văn bằng và chứng chỉ chuyên môn</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF3] border border-dashed border-[#DDE9E1] text-center space-y-1.5">
              <span className="text-2xl text-[#056B3A] block">🔬</span>
              <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#123524]">[Bổ sung hoạt động chuyên môn]</h4>
              <p className="text-[12.5px] text-[#52635A] font-normal">Đang cập nhật các dự án STEM và hội thảo khoa học</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. CÂU NÓI THƯƠNG HIỆU ================= */}
      <section className="py-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1] text-center overflow-visible">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-7 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs relative">
            <span className="w-12 h-12 rounded-2xl bg-[#EAF8F0] text-[#087A43] text-xl font-bold flex items-center justify-center mx-auto mb-3.5 border border-[#DDE9E1]">
              🌿
            </span>
            <p className="text-[20px] sm:text-[23px] lg:text-[25px] font-bold text-[#123524] leading-snug tracking-tight break-words [overflow-wrap:break-word]">
              “Khơi dậy niềm say mê khoa học –<br className="hidden sm:inline" />
              Khám phá sự sống cùng Cô Hoàn AI.”
            </p>
            <p className="text-[12px] font-bold text-[#087A43] uppercase tracking-wider mt-3.5">
              CÔ HOÀN AI • HỆ SINH THÁI DẠY &amp; HỌC SINH HỌC THCS
            </p>
          </div>
        </div>
      </section>

      {/* ================= 10. CTA CUỐI TRANG ================= */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#056B3A] to-[#087A43] text-white text-center overflow-visible">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight font-sans leading-[1.25] break-words text-white">
            CÙNG CÔ HOÀN AI KHÁM PHÁ THẾ GIỚI SỰ SỐNG
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-emerald-100 max-w-xl mx-auto font-normal break-words leading-[1.6]">
            Bắt đầu hành trình học tập môn Sinh học THCS với các thử thách tương tác và học liệu số trực quan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={onExploreLearning}
              className="px-6 sm:px-6.5 py-3 rounded-full bg-white hover:bg-slate-100 text-[#123524] font-bold text-[13.5px] sm:text-[14px] tracking-normal shadow-md transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>KHÁM PHÁ HỌC LIỆU</span>
              <i className="fa-solid fa-book-open text-[#087A43]"></i>
            </button>

            <button
              type="button"
              onClick={onOpenQuiz}
              className="px-6 sm:px-6.5 py-3 rounded-full bg-[#F4A900] hover:bg-[#e09b00] text-slate-950 font-bold text-[13.5px] sm:text-[14px] tracking-normal shadow-md transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>THỬ THÁCH SINH HỌC</span>
              <i className="fa-solid fa-bolt text-slate-950"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
