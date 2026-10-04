import React, { useState, useMemo } from 'react';
import { Student, ClassFilter } from '../types';

interface FullLeaderboardModalProps {
  students: Student[];
  onClose: () => void;
  onSelectStudent: (student: Student) => void;
}

export const FullLeaderboardModal: React.FC<FullLeaderboardModalProps> = ({
  students,
  onClose,
  onSelectStudent,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassFilter>('all');
  const [sortBy, setSortBy] = useState<'rank' | 'score' | 'submissions'>('rank');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const filteredAndSorted = useMemo(() => {
    return students
      .filter((s) => {
        const matchesClass = selectedClass === 'all' || s.className === selectedClass;
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.className.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesClass && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'score') return b.score - a.score;
        if (sortBy === 'submissions') return b.submissionsCount - a.submissionsCount;
        return a.rank - b.rank;
      });
  }, [students, selectedClass, searchTerm, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / pageSize) || 1;
  const currentStudents = filteredAndSorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const classes: { id: ClassFilter; label: string }[] = [
    { id: 'all', label: 'Tất cả các lớp' },
    { id: '6A3', label: '6A3' },
    { id: '6B3', label: '6B3' },
    { id: '7A3', label: '7A3' },
    { id: '7B3', label: '7B3' },
    { id: '8A3', label: '8A3' },
    { id: '8B3', label: '8B3' },
    { id: '9A3', label: '9A3' },
    { id: '9B3', label: '9B3' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFFFF] rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-[#DDE9E1] text-[#123524]">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#056B3A] to-[#087A43] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4A900] text-slate-950 flex items-center justify-center text-xl font-bold shadow-md">
              👑
            </div>
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold">
                Bảng Xếp Hạng Đầy Đủ ({students.length} Học Sinh)
              </h3>
              <p className="text-[12px] text-emerald-100 font-normal">
                Vinh danh học sinh chăm chỉ học tập môn Sinh học - THCS Bắc Đông Quan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-[#FFFDF3] border-b border-[#DDE9E1] space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <i className="fa-solid fa-magnifying-glass text-xs"></i>
              </span>
              <input
                type="text"
                placeholder="Tìm tên học sinh, lớp..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-[#DDE9E1] text-xs font-semibold focus:ring-2 focus:ring-[#087A43] outline-none"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
              <span className="text-[#52635A] font-bold shrink-0">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-1.5 px-3 bg-white border border-[#DDE9E1] rounded-xl font-bold text-xs text-[#123524] outline-none focus:ring-2 focus:ring-[#087A43]"
              >
                <option value="rank">Thứ hạng (Cao đến thấp)</option>
                <option value="score">Điểm số cao nhất</option>
                <option value="submissions">Số bài nộp nhiều nhất</option>
              </select>
            </div>
          </div>

          {/* Class Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {classes.map((cls) => (
              <button
                key={cls.id}
                type="button"
                onClick={() => {
                  setSelectedClass(cls.id);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedClass === cls.id
                    ? 'bg-[#087A43] text-white shadow-xs'
                    : 'bg-white text-[#52635A] border border-[#DDE9E1] hover:bg-[#FFFDF3]'
                }`}
              >
                {cls.label}
              </button>
            ))}
          </div>
        </div>

        {/* Students Table / Grid */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#FFFDF3]">
          {currentStudents.length === 0 ? (
            <div className="text-center py-12 text-[#52635A]">
              <i className="fa-solid fa-user-slash text-3xl mb-2 text-slate-300"></i>
              <p className="text-sm font-bold">Không tìm thấy học sinh phù hợp với từ khóa.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentStudents.map((st) => {
                const isTop3 = st.rank <= 3;
                return (
                  <div
                    key={st.id}
                    onClick={() => {
                      onSelectStudent(st);
                    }}
                    className={`p-3 rounded-2xl border transition flex items-center justify-between cursor-pointer hover:shadow-md ${
                      isTop3
                        ? 'bg-[#FFFFFF] border-[#F4A900] ring-1 ring-[#F4A900]/30 shadow-xs'
                        : 'bg-[#FFFFFF] border-[#DDE9E1] hover:border-[#087A43]/50 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                          st.rank === 1
                            ? 'bg-[#F4A900] text-slate-950 shadow-sm'
                            : st.rank === 2
                            ? 'bg-slate-200 text-slate-800'
                            : st.rank === 3
                            ? 'bg-amber-700 text-white'
                            : 'bg-[#EAF8F0] text-[#087A43]'
                        }`}
                      >
                        #{st.rank}
                      </div>

                      <div>
                        <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#123524] leading-tight">
                          {st.name}
                        </h4>
                        <p className="text-[12px] text-[#52635A] font-normal">
                          Lớp <strong className="text-[#087A43]">{st.className}</strong> • {st.submissionsCount} bài nộp
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[12.5px] font-bold px-2.5 py-1 rounded-full ${
                          st.score >= 10.0
                            ? 'bg-[#FFF8E8] text-amber-900 border border-amber-300'
                            : st.score >= 9.0
                            ? 'bg-[#EAF8F0] text-[#087A43] border border-[#DDE9E1]'
                            : 'bg-slate-100 text-[#52635A] border border-[#DDE9E1]'
                        }`}
                      >
                        {st.score.toFixed(1)} đ
                      </span>

                      <button
                        title="Xem bằng khen"
                        className="w-7 h-7 rounded-lg bg-[#EAF8F0] text-[#087A43] hover:bg-[#087A43] hover:text-white flex items-center justify-center text-xs transition cursor-pointer"
                      >
                        <i className="fa-solid fa-award"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer with Pagination */}
        <div className="p-3 sm:p-4 bg-[#FFFDF3] border-t border-[#DDE9E1] flex items-center justify-between text-xs shrink-0">
          <div className="text-[#52635A] font-medium">
            Hiển thị {currentStudents.length} / {filteredAndSorted.length} học sinh (Trang {currentPage}/{totalPages})
          </div>

          <div className="flex items-center gap-1.5">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-[#DDE9E1] bg-white text-[#123524] font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left mr-1"></i> Trước
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-[#DDE9E1] bg-white text-[#123524] font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
            >
              Sau <i className="fa-solid fa-chevron-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
