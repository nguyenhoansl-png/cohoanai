import React, { useState } from 'react';
import { UserRole } from '../types';

interface AuthModalProps {
  onClose: () => void;
  onLoginTeacher: () => void;
  onLoginStudent: (name: string, className: string) => void;
  initialRole?: UserRole;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  onClose,
  onLoginTeacher,
  onLoginStudent,
  initialRole = 'teacher',
}) => {
  const [role, setRole] = useState<UserRole>(initialRole);
  const [teacherUser, setTeacherUser] = useState('cohoan.ai');
  const [teacherPass, setTeacherPass] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);

  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('7A3');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'teacher') {
      onLoginTeacher();
      onClose();
    } else {
      if (studentName.trim()) {
        onLoginStudent(studentName.trim(), studentClass);
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="text-center space-y-1.5 mb-5">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-1 flex items-center justify-center shadow-xs">
            <img
              src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-[18px] sm:text-[19px] font-bold text-[#123524] font-sans">
            ĐĂNG NHẬP HỆ THỐNG
          </h3>
          <p className="text-[12px] text-[#52635A] font-normal">
            Hệ sinh thái Dạy &amp; Học Sinh học THCS – Cô Hoàn AI
          </p>
        </div>

        {/* Role toggle */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            type="button"
            onClick={() => setRole('teacher')}
            className={`py-2.5 rounded-2xl font-bold text-[13px] transition cursor-pointer flex items-center justify-center gap-1.5 ${
              role === 'teacher'
                ? 'bg-[#087A43] text-white shadow-sm'
                : 'bg-slate-100 text-[#52635A] hover:bg-slate-200'
            }`}
          >
            <span>👩‍🏫</span> Giáo Viên
          </button>
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`py-2.5 rounded-2xl font-bold text-[13px] transition cursor-pointer flex items-center justify-center gap-1.5 ${
              role === 'student'
                ? 'bg-[#087A43] text-white shadow-sm'
                : 'bg-slate-100 text-[#52635A] hover:bg-slate-200'
            }`}
          >
            <span>🎒</span> Học Sinh
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {role === 'teacher' ? (
            <>
              <div>
                <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                  Tên đăng nhập:
                </label>
                <input
                  type="text"
                  value={teacherUser}
                  onChange={(e) => setTeacherUser(e.target.value)}
                  placeholder="cohoan.ai"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
                />
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                  Mật khẩu:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={teacherPass}
                    onChange={(e) => setTeacherPass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} text-xs`}></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                  Họ và tên con:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
                />
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                  Lớp:
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
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
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#087A43] hover:bg-[#056B3A] text-white font-bold rounded-2xl text-[13.5px] sm:text-[14px] transition cursor-pointer shadow-md mt-2 tracking-normal"
          >
            {role === 'teacher' ? 'ĐĂNG NHẬP CỔNG QUẢN LÝ' : 'BẮT ĐẦU HỌC TẬP'}
          </button>
        </form>
      </div>
    </div>
  );
};
