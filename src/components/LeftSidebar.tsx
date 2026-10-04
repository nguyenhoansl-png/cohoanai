import React, { useState } from 'react';
import { UserRole } from '../types';

interface LeftSidebarProps {
  onLoginTeacher: () => void;
  onLoginStudent: (name: string, className: string) => void;
  onOpenQuiz: () => void;
  onOpenAiAssistant: () => void;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  loggedInUser: { name: string; role: UserRole; className?: string } | null;
  onLogout: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  onLoginTeacher,
  onLoginStudent,
  onOpenQuiz,
  onOpenAiAssistant,
  currentRole,
  setCurrentRole,
  loggedInUser,
  onLogout,
}) => {
  const [teacherUsername, setTeacherUsername] = useState('cohoan.ai');
  const [teacherPassword, setTeacherPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);

  const [studentName, setStudentName] = useState('Nguyễn Minh Châu');
  const [studentClass, setStudentClass] = useState('7A3');
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentRole === 'teacher') {
      if (teacherUsername === 'cohoan.ai') {
        onLoginTeacher();
        setLoginMessage('Xin chào Cô Nguyễn Hoàn! Đang mở Cổng Quản lý...');
        setTimeout(() => setLoginMessage(null), 3000);
      } else {
        alert('Tên đăng nhập mặc định của giáo viên là cohoan.ai');
      }
    } else {
      if (studentName.trim()) {
        onLoginStudent(studentName.trim(), studentClass);
        setLoginMessage(`Chào em ${studentName} (Lớp ${studentClass})! Chúc em học tốt!`);
        setTimeout(() => setLoginMessage(null), 3500);
      }
    }
  };

  return (
    <aside
      className="w-full lg:w-[380px] xl:w-[410px] bg-[#0d8a43] p-4 sm:p-6 lg:p-7 shrink-0 flex flex-col justify-between space-y-6 text-slate-800"
      data-purpose="left-sidebar"
    >
      <div className="space-y-6">
        {/* Brand Logo & Header */}
        <div className="text-center pt-1" data-purpose="brand-header">
          <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-3xl p-2 shadow-xl flex items-center justify-center relative transform hover:scale-105 transition border-2 border-white/60">
            <img
              src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
              alt="Huy Hiệu Cô Hoàn AI Sinh Học"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <h1 className="text-2xl font-black text-white tracking-wide uppercase font-sans drop-shadow-sm">
            CÔ HOÀN AI
          </h1>
          <p className="text-xs font-bold text-emerald-100 tracking-wide mt-1 opacity-95">
            Hệ Thống Dạy &amp; Học Sinh Học Thông Minh
          </p>
        </div>

        {/* Card: Form Đăng Nhập / Thông tin đăng nhập */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl space-y-4 border border-white/60" data-purpose="login-card">
          {loggedInUser ? (
            <div className="text-center space-y-3 py-1">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 text-2xl shadow-inner">
                {loggedInUser.role === 'teacher' ? '👩‍🏫' : '🎒'}
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase bg-amber-100 text-amber-900 mb-1">
                  {loggedInUser.role === 'teacher' ? 'Giáo viên phụ trách' : `Học sinh Lớp ${loggedInUser.className}`}
                </span>
                <h3 className="text-base font-black text-slate-900">{loggedInUser.name}</h3>
                <p className="text-xs text-slate-500 font-medium">Đã đăng nhập thành công vào hệ thống</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {loggedInUser.role === 'teacher' ? (
                  <button
                    onClick={onLoginTeacher}
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-chart-line"></i> Quản lý điểm
                  </button>
                ) : (
                  <button
                    onClick={onOpenQuiz}
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-pen-nib"></i> Vào làm bài
                  </button>
                )}
                <button
                  onClick={onLogout}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-[11px] font-extrabold text-slate-400 tracking-wider uppercase mb-2">
                  1. CHỌN VAI TRÒ ĐĂNG NHẬP
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Role: Học Sinh */}
                  <button
                    type="button"
                    onClick={() => setCurrentRole('student')}
                    className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                      currentRole === 'student'
                        ? 'bg-white text-emerald-800 border-2 border-emerald-500 shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <span className="text-base">🎒</span> Học Sinh
                  </button>

                  {/* Role: Giáo Viên */}
                  <button
                    type="button"
                    onClick={() => setCurrentRole('teacher')}
                    className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                      currentRole === 'teacher'
                        ? 'bg-white text-emerald-800 border-2 border-emerald-500 shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <span className="text-base">👩‍🏫</span> Giáo Viên
                  </button>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3.5 pt-1">
                {currentRole === 'teacher' ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Tên đăng nhập Giáo Viên
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <span className="text-base">👩‍🏫</span>
                        </span>
                        <input
                          type="text"
                          value={teacherUsername}
                          onChange={(e) => setTeacherUsername(e.target.value)}
                          placeholder="cohoan.ai"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Mật khẩu Giáo Viên
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-500 text-sm">
                          <i className="fa-solid fa-lock"></i>
                        </span>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={teacherPassword}
                          onChange={(e) => setTeacherPassword(e.target.value)}
                          placeholder="Nhập mật khẩu..."
                          className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition tracking-widest"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                        >
                          <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} text-xs`}></i>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Họ và tên học sinh
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <i className="fa-solid fa-user-graduate"></i>
                        </span>
                        <input
                          type="text"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="Nhập họ tên của em..."
                          required
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">
                          Lớp học
                        </label>
                        <select
                          value={studentClass}
                          onChange={(e) => setStudentClass(e.target.value)}
                          className="w-full py-2.5 px-3 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
                        >
                          <option value="6A3">Lớp 6A3</option>
                          <option value="6B3">Lớp 6B3</option>
                          <option value="7A3">Lớp 7A3</option>
                          <option value="7B3">Lớp 7B3</option>
                          <option value="8A3">Lớp 8A3</option>
                          <option value="8B3">Lớp 8B3</option>
                          <option value="9A3">Lớp 9A3</option>
                          <option value="9B3">Lớp 9B3</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">
                          Mã truy cập
                        </label>
                        <input
                          type="text"
                          defaultValue="2025"
                          placeholder="2025"
                          className="w-full py-2.5 px-3 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Login button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#109149] hover:bg-[#0c7a3c] text-white font-extrabold rounded-2xl sm:rounded-full text-sm sm:text-base tracking-wide shadow-md shadow-emerald-700/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2 mt-1 cursor-pointer"
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <span>ĐĂNG NHẬP HỆ THỐNG</span>
                </button>
              </form>
            </>
          )}

          {loginMessage && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800 text-center animate-fadeIn">
              {loginMessage}
            </div>
          )}

          {/* Quick links */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
            <button
              type="button"
              onClick={onOpenQuiz}
              className="text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-pen-nib"></i> Bài tập tuần
            </button>
            <a
              href="https://zalo.me/0355886190"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <i className="fa-solid fa-comments"></i> Hỗ trợ Zalo
            </a>
          </div>
        </div>

        {/* Card: Khối thông tin Cô Hoàn */}
        <div
          className="bg-white rounded-3xl p-5 shadow-xl space-y-3.5 border border-white/50 text-slate-700"
          data-purpose="teacher-profile-card"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center shrink-0 shadow-sm p-1 overflow-hidden">
              <img
                src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
                alt="Cô Hoàn AI"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900 leading-tight">
                Cô Hoàn AI – Giáo viên Sinh học THCS
              </h2>
              <p className="text-xs font-bold text-emerald-700 mt-0.5">
                Trường THCS Bắc Đông Quan, tỉnh Hưng Yên
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs leading-relaxed">
            <p className="font-medium text-slate-700">
              Cô Nguyễn Hoàn với{' '}
              <strong className="text-emerald-800 font-extrabold">hơn 20 năm kinh nghiệm</strong> trong
              công tác giảng dạy và giáo dục học sinh môn Sinh học. Tiên phong ứng dụng mô phỏng số
              &amp; Trí tuệ nhân tạo (AI) giúp bài học trực quan, sinh động.
            </p>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/80 text-amber-950">
              <p className="font-bold text-[11px] text-amber-800 uppercase tracking-wide mb-1 flex items-center gap-1">
                🌱 Quan điểm giáo dục
              </p>
              <p className="italic text-[11px] leading-snug font-semibold">
                “Dạy học không chỉ là truyền đạt kiến thức, mà là khơi dậy sự tò mò, niềm yêu thích khám phá và khả năng tự học của mỗi học sinh.”
              </p>
            </div>

            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-emerald-950">
              <p className="font-bold text-[11px] text-emerald-800 uppercase tracking-wide mb-1 flex items-center gap-1">
                🎯 Sứ mệnh
              </p>
              <p className="text-[11px] leading-snug">
                Chia sẻ kiến thức – Đổi mới phương pháp – Ứng dụng công nghệ – Truyền cảm hứng học tập.
              </p>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl text-center border border-slate-200">
              <p className="text-[11px] font-black text-emerald-800 italic">
                “Cô Hoàn AI – Học cùng công nghệ, dạy bằng tâm huyết.”
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
            <div className="text-slate-600 flex items-center gap-1.5">
              <i className="fa-solid fa-phone text-amber-500"></i>
              <span>Zalo:</span>
              <a
                href="tel:0355886190"
                className="text-emerald-700 hover:underline font-extrabold"
              >
                0355.886.190
              </a>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Đang hoạt động
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar footer credit */}
      <div className="text-center text-[11px] text-emerald-100/80 pt-2 pb-1">
        © 2025 Cô Hoàn AI • THCS Bắc Đông Quan
      </div>
    </aside>
  );
};
