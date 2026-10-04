import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Student } from '../types';

interface StudentCertificateModalProps {
  student: Student | null;
  onClose: () => void;
}

export const StudentCertificateModal: React.FC<StudentCertificateModalProps> = ({
  student,
  onClose,
}) => {
  useEffect(() => {
    if (student) {
      // Fire celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [student]);

  if (!student) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-4 sm:p-7 shadow-2xl relative border-4 border-amber-400 overflow-hidden text-slate-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer z-10"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Certificate Golden Border Layout */}
        <div className="border-2 border-dashed border-amber-300 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-amber-50/70 via-white to-amber-50/50 text-center relative">
          {/* Header */}
          <div className="space-y-1 mb-4">
            <div className="w-14 h-14 mx-auto mb-1.5 bg-white rounded-2xl p-1 shadow-xs border border-amber-300">
              <img
                src="https://i.postimg.cc/rmXMdghC/Huy-Hieu-Co-Hoan-AI-Sinh-Hoc.png"
                alt="Huy Hiệu Cô Hoàn AI"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2 text-amber-600 text-xs font-black uppercase tracking-widest">
              <span>★</span> THCS BẮC ĐÔNG QUAN • HƯNG YÊN <span>★</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-amber-700 uppercase tracking-wide font-sans">
              GIẤY KHEN DANH DỰ
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              BẢNG VÀNG THÀNH TÍCH MÔN SINH HỌC CÙNG CÔ HOÀN AI
            </p>
          </div>

          {/* Student Profile Info */}
          <div className="my-5 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase">Tuyên dương con:</p>
            <h2 className="text-2xl sm:text-3xl font-black text-emerald-800 tracking-tight">
              {student.name}
            </h2>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-extrabold">
              <span>Lớp: {student.className}</span>
              <span>•</span>
              <span>Xếp hạng: #{student.rank} Toàn trường</span>
            </div>
          </div>

          {/* Achievement stats badge */}
          <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto my-4 text-center">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-amber-200">
              <span className="text-[11px] text-slate-500 font-bold block">Điểm số tuần</span>
              <span className="text-xl font-black text-amber-600">{student.score.toFixed(1)} / 10</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-xs border border-amber-200">
              <span className="text-[11px] text-slate-500 font-bold block">Số bài nộp chăm chỉ</span>
              <span className="text-xl font-black text-emerald-700">{student.submissionsCount} bài</span>
            </div>
          </div>

          {/* Teacher's praise remark */}
          <div className="bg-amber-100/60 p-3.5 rounded-xl border border-amber-300/60 text-[13.5px] sm:text-[14px] italic text-amber-950 font-medium my-4 leading-[1.5]">
            "{student.quote || 'Con là tấm gương chăm chỉ làm bài tập Sinh học và tích cực ứng dụng công nghệ!'}"
          </div>

          {/* Footer signature */}
          <div className="flex items-end justify-between pt-4 mt-4 border-t border-slate-200 text-xs">
            <div className="text-left space-y-1">
              <div className="text-[12px] text-slate-400">Ngày ghi nhận:</div>
              <div className="font-bold text-slate-700 text-[13px]">Tuần thi đua học tập 2025</div>
              <div className="text-[11px] text-emerald-700 font-bold tracking-normal">HỆ THỐNG CÔ HOÀN AI CHỨNG NHẬN</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-[12px] text-slate-400">Giáo viên phụ trách</div>
              <div className="w-16 h-12 mx-auto flex items-center justify-center text-amber-600 font-serif italic text-lg select-none opacity-80">
                Nguyễn Hoàn
              </div>
              <div className="font-bold text-slate-900 text-[13px]">Cô Nguyễn Hoàn</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={handlePrint}
            className="px-4.5 py-2.5 bg-[#087A43] hover:bg-[#056B3A] text-white rounded-xl text-[13px] font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm tracking-normal"
          >
            <i className="fa-solid fa-print"></i> In / Tải giấy khen
          </button>
          <button
            onClick={onClose}
            className="px-4.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[13px] font-bold transition cursor-pointer tracking-normal"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  );
};
