import React from 'react';

interface KhtnBioSectionProps {
  onSelectGrade: (grade: number) => void;
}

export const KhtnBioSection: React.FC<KhtnBioSectionProps> = ({ onSelectGrade }) => {
  const grades = [
    {
      grade: 6,
      title: 'KHTN 6 – Mạch Sinh học',
      subtitle: 'Tế bào & Đa dạng thế giới sống',
      tag: 'Lớp 6',
      icon: '🌿',
      description: 'Khám phá đơn vị cấu trúc của sự sống – từ tế bào đến các nhóm sinh vật trong tự nhiên.',
    },
    {
      grade: 7,
      title: 'KHTN 7 – Mạch Sinh học',
      subtitle: 'Trao đổi chất & Cảm ứng sinh vật',
      tag: 'Lớp 7',
      icon: '🦋',
      description: 'Tìm hiểu quá trình quang hợp, hô hấp, tuần hoàn, sinh trưởng và cảm ứng ở sinh vật.',
    },
    {
      grade: 8,
      title: 'KHTN 8 – Mạch Sinh học',
      subtitle: 'Cơ thể người & Sức khỏe sinh thái',
      tag: 'Lớp 8',
      icon: '🫀',
      description: 'Nghiên cứu các hệ cơ quan trong cơ thể người, vệ sinh học đường và cân bằng sinh thái.',
    },
    {
      grade: 9,
      title: 'KHTN 9 – Mạch Sinh học',
      subtitle: 'Di truyền, Biến dị & Tiến hóa',
      tag: 'Lớp 9',
      icon: '🧬',
      description: 'Quy luật Men-đen, ADN, nhiễm sắc thể, đột biến gen và ứng dụng công nghệ sinh học.',
    },
  ];

  return (
    <section id="khtn-bio" className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#DDE9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF8F0] text-[#087A43] text-[12px] font-semibold tracking-normal border border-[#DDE9E1]">
            <span>🌱</span> Chương Trình Giáo Dục Phổ Thông
          </div>
          <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] leading-[1.25] tracking-tight font-sans">
            KHÁM PHÁ SINH HỌC THCS
          </h2>
          <p className="text-[15px] sm:text-[15.5px] text-[#52635A] font-normal leading-[1.6]">
            Mạch kiến thức Sinh học trong môn Khoa học tự nhiên (KHTN) từ lớp 6 đến lớp 9 được xây dựng trực quan, sinh động kết hợp cùng công nghệ AI.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {grades.map((item) => (
            <div
              key={item.grade}
              className="p-5 sm:p-6 rounded-3xl bg-[#FFFDF3] border border-[#DDE9E1] shadow-xs hover:shadow-md hover:border-[#087A43]/50 transition duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11.5px] font-bold bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1]">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#123524] font-sans leading-[1.3] break-words">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-semibold text-[#087A43] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal leading-[1.55] break-words">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectGrade(item.grade)}
                className="w-full py-2.5 px-4 rounded-2xl bg-[#FFFFFF] border border-[#DDE9E1] hover:bg-[#087A43] hover:text-white text-[#123524] font-bold text-[13px] sm:text-[13.5px] transition flex items-center justify-center gap-2 cursor-pointer group shadow-2xs tracking-normal"
              >
                <span>KHÁM PHÁ</span>
                <span className="transform group-hover:translate-x-1 transition text-[#087A43] group-hover:text-white font-black">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
