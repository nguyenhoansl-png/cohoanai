import React, { useRef } from 'react';
import { Student, ClassFilter } from '../types';

interface LeaderboardSectionProps {
  students: Student[];
  selectedClass: ClassFilter;
  onSelectClass: (cls: ClassFilter) => void;
  onSelectStudent: (student: Student) => void;
  onOpenFullLeaderboard: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  students,
  selectedClass,
  onSelectClass,
  onSelectStudent,
  onOpenFullLeaderboard,
}) => {
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const filteredStudents = selectedClass === 'all'
    ? students
    : students.filter((s) => s.className === selectedClass);

  const top1 = filteredStudents[0];
  const top2 = filteredStudents[1];
  const top3 = filteredStudents[2];
  const outstandingStudents = filteredStudents.slice(3, 9);

  const classFiltersList: { id: ClassFilter; label: string; count: number }[] = [
    { id: 'all', label: 'Tất cả (128 bài)', count: 128 },
    { id: '6A3', label: '6A3', count: 16 },
    { id: '6B3', label: '6B3', count: 18 },
    { id: '7A3', label: '7A3', count: 15 },
    { id: '7B3', label: '7B3', count: 17 },
    { id: '8A3', label: '8A3', count: 19 },
    { id: '8B3', label: '8B3', count: 15 },
    { id: '9A3', label: '9A3', count: 14 },
    { id: '9B3', label: '9B3', count: 14 },
  ];

  const scrollFilters = (direction: 'left' | 'right') => {
    if (filterScrollRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      filterScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="leaderboard" className="py-16 lg:py-20 bg-[#FFFDF3] border-b border-[#DDE9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-2 border-b border-[#DDE9E1]">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1] text-[12px] font-semibold tracking-normal">
              <span>👑</span> VINH DANH HỌC TẬP
            </div>
            <h2 className="text-[24px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#123524] tracking-tight leading-[1.25] font-sans">
              🏆 BẢNG VÀNG HỌC TẬP
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#52635A] font-normal max-w-2xl leading-[1.6]">
              “Tuyên dương những học sinh chăm chỉ, tiến bộ và tích cực học tập cùng Cô Hoàn AI.”
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenFullLeaderboard}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#087A43] hover:text-white text-[#087A43] font-bold text-[13px] sm:text-[13.5px] border border-[#087A43] shadow-xs transition transform active:scale-95 flex items-center gap-2 cursor-pointer shrink-0 tracking-normal"
          >
            <span>XEM BẢNG VÀNG</span>
            <span>→</span>
          </button>
        </div>

        {/* Filter Bar: Surface #FFFFFF */}
        <div className="flex items-center gap-3 overflow-hidden py-2 px-3 bg-[#FFFFFF] rounded-2xl border border-[#DDE9E1] shadow-xs">
          <span className="text-[12px] font-semibold text-[#123524] shrink-0 flex items-center gap-1">
            <i className="fa-solid fa-filter text-[#F4A900] text-[11px]"></i> Lọc theo lớp:
          </span>

          <button
            type="button"
            onClick={() => scrollFilters('left')}
            className="text-slate-400 hover:text-[#123524] text-xs px-1.5 py-1 rounded-lg hover:bg-slate-100 transition shrink-0 cursor-pointer"
            aria-label="Scroll left"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div
            ref={filterScrollRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth"
          >
            {classFiltersList.map((item) => {
              const isActive = selectedClass === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectClass(item.id)}
                  className={`px-3 py-1.5 rounded-full font-semibold text-[12px] whitespace-nowrap transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#F4A900] hover:bg-[#e09b00] text-slate-950 shadow-sm ring-1 ring-amber-300'
                      : 'bg-[#FFFDF3] hover:bg-white text-[#52635A] border border-[#DDE9E1]'
                  }`}
                >
                  {item.id === 'all' && <span>⭐</span>}
                  <span>{item.label}</span>
                  {item.id !== 'all' && (
                    <span
                      className={`text-[11px] font-medium px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/50 text-slate-950' : 'bg-slate-200/80 text-[#52635A]'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollFilters('right')}
            className="text-slate-400 hover:text-[#123524] text-xs px-1.5 py-1 rounded-lg hover:bg-slate-100 transition shrink-0 cursor-pointer"
            aria-label="Scroll right"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Podium Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end pt-2">
          {/* Card Top 2 */}
          {top2 && (
            <div
              onClick={() => onSelectStudent(top2)}
              className="order-2 md:order-1 bg-[#FFFFFF] rounded-3xl border border-[#DDE9E1] p-5 sm:p-6 text-center shadow-xs relative hover:shadow-xl hover:border-slate-400 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5c6b84] text-white text-[11px] font-bold uppercase px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                <span>🥈</span> TOP 2
              </div>
              <div className="w-14 h-14 mx-auto mt-2 mb-2.5 rounded-full bg-[#e9eef7] border-3 border-[#cbd5e1] flex items-center justify-center text-xl shadow-inner">
                🥈
              </div>
              <h3 className="font-bold text-[#123524] text-[16px] sm:text-[17px] hover:text-[#087A43] transition">
                {top2.name}
              </h3>
              <p className="text-[12.5px] font-medium text-[#52635A] mb-2.5">
                Lớp {top2.className} • THCS Bắc Đông Quan
              </p>
              <div className="inline-block bg-[#f1f5f9] text-[#123524] font-bold px-3.5 py-1 rounded-full text-[14px] border border-[#DDE9E1]">
                {top2.score.toFixed(1)} <span className="text-[#52635A] text-[12px] font-normal">/10</span>
              </div>
              <p className="text-[14px] italic text-[#52635A] mt-2.5 font-normal line-clamp-2 leading-[1.55]">
                "{top2.quote || 'Chăm chỉ làm bài tập Sinh học & tích cực khám phá khoa học'}"
              </p>
              <div className="mt-3 pt-2.5 border-t border-[#DDE9E1] text-[13px] font-semibold text-[#087A43] flex items-center justify-center gap-1">
                <i className="fa-solid fa-award"></i> Xem giấy khen vinh danh
              </div>
            </div>
          )}

          {/* Card Top 1 */}
          {top1 && (
            <div
              onClick={() => onSelectStudent(top1)}
              className="order-1 md:order-2 bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 text-center shadow-md relative md:-translate-y-2 ring-3 ring-[#F4A900]/30 border-2 border-[#F4A900] hover:shadow-xl transition cursor-pointer transform hover:-translate-y-2.5"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F4A900] text-slate-950 text-[11.5px] font-bold uppercase px-3.5 py-0.5 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1.5">
                <span>👑</span> TOP 1 XUẤT SẮC <span>👑</span>
              </div>
              <div className="w-16 h-16 mx-auto mt-2 mb-2.5 rounded-full bg-gradient-to-tr from-[#F4A900] to-yellow-300 border-3 border-white flex items-center justify-center text-2xl shadow-md relative">
                🥇
                <span className="absolute -top-1 -right-1 text-xs">✨</span>
              </div>
              <h3 className="font-bold text-[#123524] text-[17px] sm:text-[18px] hover:text-[#087A43] transition">
                {top1.name}
              </h3>
              <p className="text-[12.5px] font-semibold text-[#087A43] mb-2.5">
                Lớp {top1.className} • {top1.honorTitle || 'Ngôi sao sáng nhất'}
              </p>
              <div className="inline-block bg-[#F4A900] text-slate-950 font-bold px-4 py-1.5 rounded-full text-[15px] sm:text-[16px] shadow-2xs">
                {top1.score.toFixed(1)} <span className="text-slate-800 text-[12px] font-semibold">/10</span>
              </div>
              <p className="text-[14px] font-medium text-[#123524] mt-2.5 leading-[1.55]">
                🌟 "{top1.quote || 'Con là một ngôi sao sáng chăm chỉ nhất lớp Cô Hoàn!'}"
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-[#DDE9E1] text-[13px] font-bold text-[#087A43] flex items-center justify-center gap-1">
                <i className="fa-solid fa-crown text-[#F4A900]"></i> Xem Bằng Khen Danh Dự
              </div>
            </div>
          )}

          {/* Card Top 3 */}
          {top3 && (
            <div
              onClick={() => onSelectStudent(top3)}
              className="order-3 md:order-3 bg-[#FFFFFF] rounded-3xl border border-[#DDE9E1] p-5 sm:p-6 text-center shadow-xs relative hover:shadow-xl hover:border-amber-400 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b45309] text-white text-[11px] font-bold uppercase px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                <span>🥉</span> TOP 3
              </div>
              <div className="w-14 h-14 mx-auto mt-2 mb-2.5 rounded-full bg-[#fbf3ea] border-3 border-[#e2a875] flex items-center justify-center text-xl shadow-inner">
                🥉
              </div>
              <h3 className="font-bold text-[#123524] text-[16px] sm:text-[17px] hover:text-[#087A43] transition">
                {top3.name}
              </h3>
              <p className="text-[12.5px] font-medium text-[#52635A] mb-2.5">
                Lớp {top3.className} • THCS Bắc Đông Quan
              </p>
              <div className="inline-block bg-[#FFF8E8] text-amber-900 font-bold px-3.5 py-1 rounded-full text-[14px] border border-amber-200">
                {top3.score.toFixed(1)} <span className="text-[#52635A] text-[12px] font-normal">/10</span>
              </div>
              <p className="text-[14px] italic text-[#52635A] mt-2.5 font-normal line-clamp-2 leading-[1.55]">
                "{top3.quote || 'Rất tích cực luyện tập hội thoại tương tác cùng Cô Hoàn AI'}"
              </p>
              <div className="mt-3 pt-2.5 border-t border-[#DDE9E1] text-[13px] font-semibold text-[#087A43] flex items-center justify-center gap-1">
                <i className="fa-solid fa-award"></i> Xem giấy khen vinh danh
              </div>
            </div>
          )}
        </div>

        {/* Outstanding Grid (#4 to #9) */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#123524] flex items-center gap-2">
              <span className="text-[#F4A900]">✨</span> CÁC BẠN CHĂM CHỈ ĐẠT ĐIỂM GIỎI TIÊU BIỂU:
            </h4>
            <span className="text-[12.5px] text-[#52635A] font-normal">
              Nhấp vào từng bạn để xem giấy khen
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {outstandingStudents.map((st) => (
              <div
                key={st.id}
                onClick={() => onSelectStudent(st)}
                className="bg-[#FFFFFF] rounded-2xl p-3.5 border border-[#DDE9E1] shadow-2xs hover:shadow-md hover:border-[#087A43]/40 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-[#EAF8F0] text-[#087A43] font-bold text-[12px] flex items-center justify-center group-hover:bg-[#087A43] group-hover:text-white transition">
                    #{st.rank}
                  </span>
                  <div>
                    <h5 className="text-[15px] sm:text-[15.5px] font-bold text-[#123524] leading-snug group-hover:text-[#087A43] transition">
                      {st.name}
                    </h5>
                    <p className="text-[12.5px] text-[#52635A] font-normal mt-0.5">
                      Lớp {st.className} • {st.submissionsCount} bài nộp
                    </p>
                  </div>
                </div>

                <div className="bg-[#FFF8E8] text-amber-900 font-bold text-[13px] px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                  {st.score.toFixed(1)} đ <span className="text-[#F4A900] text-[11px]">⭐</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-3">
            <button
              type="button"
              onClick={onOpenFullLeaderboard}
              className="text-[13px] sm:text-[13.5px] font-semibold text-[#123524] hover:text-white hover:bg-[#087A43] bg-[#FFFFFF] border border-[#DDE9E1] px-5 py-2.5 rounded-full transition shadow-2xs inline-flex items-center gap-2 cursor-pointer active:scale-95 tracking-normal"
            >
              <span>Xem toàn bộ bảng xếp hạng ({students.length} học sinh)</span>
              <span className="text-[#087A43] group-hover:text-white font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
