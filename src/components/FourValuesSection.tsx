import React from 'react';

export const FourValuesSection: React.FC = () => {
  const values = [
    {
      icon: '🧬',
      title: 'SINH HỌC',
      description: 'Khám phá thế giới sự sống.',
      iconBg: 'bg-[#EAF8F0]',
      titleColor: 'text-[#087A43]',
    },
    {
      icon: '🤖',
      title: 'AI GIÁO DỤC',
      description: 'Ứng dụng AI trong dạy và học.',
      iconBg: 'bg-[#EAF8F0]',
      titleColor: 'text-[#056B3A]',
    },
    {
      icon: '📚',
      title: 'HỌC LIỆU',
      description: 'Học liệu Sinh học THCS được tổ chức khoa học.',
      iconBg: 'bg-[#FFF8E8]',
      titleColor: 'text-[#087A43]',
    },
    {
      icon: '🌱',
      title: 'STEM/STEAM',
      description: 'Học tập thông qua trải nghiệm và khám phá.',
      iconBg: 'bg-[#EAF8F0]',
      titleColor: 'text-[#087A43]',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#FFFDF3] border-b border-[#DDE9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE9E1] shadow-xs hover:shadow-md hover:border-[#087A43]/40 transition duration-200 flex flex-col justify-between space-y-4"
            >
              <div className={`w-14 h-14 rounded-2xl ${v.iconBg} border border-[#DDE9E1] shadow-2xs flex items-center justify-center text-3xl`}>
                {v.icon}
              </div>

              <div>
                <h3 className={`text-[16px] sm:text-[17px] font-bold tracking-normal leading-[1.3] ${v.titleColor} font-sans`}>
                  {v.title}
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#52635A] font-normal mt-1 leading-[1.55]">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
