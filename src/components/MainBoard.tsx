import React, { useRef } from 'react';
import { Student, ClassFilter } from '../types';

interface MainBoardProps {
  students: Student[];
  selectedClass: ClassFilter;
  onSelectClass: (cls: ClassFilter) => void;
  onSelectStudent: (student: Student) => void;
  onOpenQuiz: () => void;
  onOpenLeaderboard: () => void;
}

export const MainBoard: React.FC<MainBoardProps> = ({
  students,
  selectedClass,
  onSelectClass,
  onSelectStudent,
  onOpenQuiz,
  onOpenLeaderboard,
}) => {
  const filterScrollRef = useRef<HTMLDivElement>(null);

  // Filter students based on selected class
  const filteredStudents = selectedClass === 'all'
    ? students
    : students.filter((s) => s.className === selectedClass);

  // Top 3 for the podium
  const top1 = filteredStudents[0];
  const top2 = filteredStudents[1];
  const top3 = filteredStudents[2];

  // Outstanding list (#4 to #9)
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
    <main
      className="flex-1 bg-[#faf8f5] p-3.5 sm:p-6 lg:p-8 overflow-y-auto"
      data-purpose="right-content"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        {/* ================= Banner Vàng Cam Rực Rỡ ================= */}
        <div
          className="bg-gradient-to-r from-[#f59e0b] via-[#f7931e] to-[#ea580c] rounded-3xl p-6 sm:p-8 text-center text-white shadow-xl relative overflow-hidden"
          data-purpose="hall-of-fame-banner"
        >
          {/* Subtle decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-300/20 rounded-full blur-2xl pointer-events-none"></div>

          {/* Sub-tag vương miện nhỏ */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider mb-2.5 shadow-sm">
            <span>👑</span> BẢNG VÀNG THÀNH TÍCH TUẦN <span>👑</span>
          </div>

          {/* Tiêu đề lớn in hoa trắng chuẩn style mrsdung */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black uppercase tracking-tight leading-snug drop-shadow-sm font-sans">
            BẢNG DANH SÁCH THÀNH TÍCH HỌC SINH
            <br className="hidden sm:inline" /> CHĂM CHỈ ĐANG DẪN ĐẦU ĐIỂM CAO NHẤT
          </h2>

          {/* Dòng mô tả */}
          <p className="text-xs sm:text-sm text-white/95 font-medium mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Tuyên dương các con nỗ lực làm bài tập về nhà chăm chỉ, tích cực ứng dụng công cụ AI học
            tập và đạt điểm số cao nhất lớp Cô Hoàn!
          </p>
        </div>

        {/* ================= Thanh Lọc Theo Lớp ================= */}
        <div
          className="flex items-center gap-3 overflow-hidden py-1 px-1 bg-white/60 p-2 rounded-2xl border border-slate-200/60"
          data-purpose="class-filters"
        >
          <span className="text-xs font-extrabold text-slate-600 shrink-0 flex items-center gap-1">
            <i className="fa-solid fa-filter text-amber-500 text-[10px]"></i> Lọc theo lớp:
          </span>

          <button
            onClick={() => scrollFilters('left')}
            className="text-slate-400 hover:text-slate-700 text-xs px-1.5 py-1 rounded-lg hover:bg-slate-100 transition shrink-0 cursor-pointer"
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
                  className={`px-3.5 py-1.5 rounded-full font-bold text-xs whitespace-nowrap transition cursor-pointer shrink-0 flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#f59e0b] hover:bg-[#ea8c00] text-white shadow-md shadow-amber-500/20 ring-2 ring-amber-300'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-sm'
                  }`}
                >
                  {item.id === 'all' && <span>⭐</span>}
                  <span>{item.id === 'all' ? item.label : item.label}</span>
                  {item.id !== 'all' && (
                    <span
                      className={`text-[10px] font-semibold ml-0.5 px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/30 text-white' : 'bg-slate-100 text-slate-500'
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
            onClick={() => scrollFilters('right')}
            className="text-slate-400 hover:text-slate-700 text-xs px-1.5 py-1 rounded-lg hover:bg-slate-100 transition shrink-0 cursor-pointer"
            aria-label="Scroll right"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* ================= Bục Vinh Danh TOP 3 ================= */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-end pt-2"
          data-purpose="podium-top-3"
        >
          {/* CARD TOP 2 */}
          {top2 ? (
            <div
              onClick={() => onSelectStudent(top2)}
              className="order-2 md:order-1 bg-white rounded-3xl border-2 border-blue-100/90 p-5 text-center shadow-md relative hover:shadow-xl hover:border-blue-300 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5c6b84] text-white text-[11px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <span>🥈</span> TOP 2
              </div>
              <div className="w-16 h-16 mx-auto mt-2 mb-3 rounded-full bg-[#e9eef7] border-4 border-[#cbd5e1] flex items-center justify-center text-2xl shadow-inner">
                🥈
              </div>
              <h3 className="font-black text-slate-900 text-base sm:text-lg hover:text-emerald-700 transition">
                {top2.name}
              </h3>
              <p className="text-xs font-bold text-slate-400 mb-3">
                {top2.className} • {top2.school}
              </p>
              <div className="inline-block bg-[#f1f5f9] text-slate-800 font-black px-4 py-1 rounded-full text-sm border border-slate-200/80">
                {top2.score.toFixed(1)} <span className="text-slate-400 text-xs font-normal">/10</span>
              </div>
              <p className="text-[11px] italic text-slate-500 mt-3 font-medium line-clamp-2">
                "{top2.quote || 'Chăm chỉ làm bài tập Sinh học & tích cực khám phá khoa học'}"
              </p>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-blue-600 flex items-center justify-center gap-1">
                <i className="fa-solid fa-award"></i> Xem giấy khen vinh danh
              </div>
            </div>
          ) : (
            <div className="order-2 md:order-1 bg-white rounded-3xl p-5 text-center text-slate-400 text-xs">
              Chưa có dữ liệu Top 2
            </div>
          )}

          {/* CARD TOP 1 (Ở Giữa: Nổi bật nhất) */}
          {top1 ? (
            <div
              onClick={() => onSelectStudent(top1)}
              className="order-1 md:order-2 bg-[#fffcf4] rounded-3xl p-6 text-center shadow-xl shadow-amber-500/15 relative md:-translate-y-2.5 ring-4 ring-amber-300/40 border-[3px] border-[#f59e0b] hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-3"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white text-xs font-black uppercase px-4 py-1 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5">
                <span>👑</span> TOP 1 XUẤT SẮC <span>👑</span>
              </div>
              <div className="w-20 h-20 mx-auto mt-2 mb-3 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-4 border-white flex items-center justify-center text-3xl shadow-md relative animate-bounce-slow">
                🥇
                <span className="absolute -top-1 -right-1 text-xs animate-spin-slow">✨</span>
              </div>
              <h3 className="font-black text-slate-900 text-lg sm:text-xl hover:text-amber-700 transition">
                {top1.name}
              </h3>
              <p className="text-xs font-bold text-amber-600 mb-3.5">
                {top1.className} • {top1.honorTitle || 'Ngôi sao sáng nhất'}
              </p>
              <div className="inline-block bg-[#f59e0b] text-white font-black px-5 py-1.5 rounded-full text-base shadow-md shadow-amber-500/30">
                {top1.score.toFixed(1)} <span className="text-amber-200 text-xs font-bold">/10</span>
              </div>
              <p className="text-xs font-bold text-amber-900 mt-3.5 leading-snug">
                🌟 "{top1.quote || 'Con là một ngôi sao sáng chăm chỉ nhất lớp Cô Hoàn!'}"
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-amber-200/60 text-xs font-black text-amber-700 flex items-center justify-center gap-1">
                <i className="fa-solid fa-crown text-amber-500"></i> Xem Bằng Khen Danh Dự
              </div>
            </div>
          ) : (
            <div className="order-1 md:order-2 bg-white rounded-3xl p-5 text-center text-slate-400 text-xs">
              Chưa có dữ liệu Top 1
            </div>
          )}

          {/* CARD TOP 3 */}
          {top3 ? (
            <div
              onClick={() => onSelectStudent(top3)}
              className="order-3 md:order-3 bg-white rounded-3xl border-2 border-amber-200/90 p-5 text-center shadow-md relative hover:shadow-xl hover:border-amber-400 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b45309] text-white text-[11px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <span>🥉</span> TOP 3
              </div>
              <div className="w-16 h-16 mx-auto mt-2 mb-3 rounded-full bg-[#fbf3ea] border-4 border-[#e2a875] flex items-center justify-center text-2xl shadow-inner">
                🥉
              </div>
              <h3 className="font-black text-slate-900 text-base sm:text-lg hover:text-emerald-700 transition">
                {top3.name}
              </h3>
              <p className="text-xs font-bold text-slate-400 mb-3">
                {top3.className} • {top3.school}
              </p>
              <div className="inline-block bg-[#fff5ea] text-amber-800 font-black px-4 py-1 rounded-full text-sm border border-amber-200">
                {top3.score.toFixed(1)} <span className="text-amber-500 text-xs font-normal">/10</span>
              </div>
              <p className="text-[11px] italic text-slate-500 mt-3 font-medium line-clamp-2">
                "{top3.quote || 'Rất tích cực luyện tập hội thoại tương tác cùng Cô Hoàn AI'}"
              </p>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-amber-700 flex items-center justify-center gap-1">
                <i className="fa-solid fa-award"></i> Xem giấy khen vinh danh
              </div>
            </div>
          ) : (
            <div className="order-3 md:order-3 bg-white rounded-3xl p-5 text-center text-slate-400 text-xs">
              Chưa có dữ liệu Top 3
            </div>
          )}
        </div>

        {/* ================= Danh Sách Học Sinh Điểm Giỏi Tiêu Biểu (#4 to #9) ================= */}
        <div className="pt-4" data-purpose="honor-roll-section">
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-slate-800 flex items-center gap-2">
              <span className="text-amber-500">✨</span> CÁC BẠN CHĂM CHỈ ĐẠT ĐIỂM GIỎI TIÊU BIỂU
              (TỪ 8.0 ĐIỂM TRỞ LÊN):
            </h4>
            <span className="text-xs text-slate-500 font-bold hidden sm:inline">
              Hiển thị top tiêu biểu
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            data-purpose="student-cards-grid"
          >
            {outstandingStudents.map((st) => {
              const isTen = st.score >= 10.0;
              const isGood = st.score >= 9.0;
              return (
                <div
                  key={st.id}
                  onClick={() => onSelectStudent(st)}
                  className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-between hover:border-amber-300 hover:shadow-md transition cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-[#fef3c7] text-amber-800 font-black text-xs px-2.5 py-1 rounded-lg group-hover:bg-amber-200 transition">
                      #{st.rank}
                    </span>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition">
                        {st.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 font-medium">
                        Lớp {st.className} • {st.submissionsCount} bài nộp
                      </p>
                    </div>
                  </div>

                  {isTen ? (
                    <div className="bg-[#fffbeb] text-amber-700 font-black text-xs px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1 shadow-xs">
                      10.0 đ <span className="text-amber-500 text-[10px]">⭐</span>
                    </div>
                  ) : isGood ? (
                    <div className="bg-emerald-50 text-emerald-700 font-black text-xs px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1 shadow-xs">
                      {st.score.toFixed(1)} đ <span className="text-emerald-500 text-[10px]">✓</span>
                    </div>
                  ) : (
                    <div className="bg-slate-100 text-slate-700 font-black text-xs px-3 py-1 rounded-full border border-slate-200">
                      {st.score.toFixed(1)} đ
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={onOpenLeaderboard}
              className="text-xs font-bold text-slate-600 hover:text-emerald-800 bg-white hover:bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-full transition shadow-sm inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Xem toàn bộ bảng xếp hạng ({students.length} học sinh)</span>
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        </div>

        {/* ================= Khối CTA Nhiệm Vụ Tuần (Đáy Cột Phải) ================= */}
        <div
          className="bg-gradient-to-r from-emerald-800 to-[#0d8a43] rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden"
          data-purpose="homework-cta"
          id="quick-task"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1 text-[11px] font-black bg-amber-400 text-slate-900 px-3 py-0.5 rounded-full uppercase shadow-xs">
              ⚡ NHIỆM VỤ TUẦN NÀY
            </div>
            <h3 className="text-lg sm:text-xl font-black">
              Thử Thách Sinh Học &amp; Khám Phá Cùng AI
            </h3>
            <p className="text-xs text-emerald-100 max-w-xl leading-relaxed">
              Luyện tập câu hỏi Sinh học tương tác cùng trợ lý AI thông minh. Chấm điểm &amp; sửa bài
              tức thì chỉ sau 3 giây!
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenQuiz}
              className="px-5 py-2.5 rounded-full bg-[#f59e0b] hover:bg-[#ea8c00] text-slate-950 font-black text-xs sm:text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              ⚡ VÀO LÀM BÀI NGAY
            </button>
            <a
              href="tel:0355886190"
              className="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition flex items-center justify-center gap-1.5"
            >
              📞 Gọi Cô Hoàn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
