import React, { useState } from 'react';
import { Student } from '../types';

interface TeacherDashboardModalProps {
  onClose: () => void;
  students: Student[];
  onAddStudent: (newStudent: Partial<Student>) => void;
}

export const TeacherDashboardModal: React.FC<TeacherDashboardModalProps> = ({
  onClose,
  students,
  onAddStudent,
}) => {
  const [activeTab, setActiveTab] = useState<'addScore' | 'stats' | 'createTask'>('addScore');

  // Form states for adding/updating student
  const [name, setName] = useState('');
  const [className, setClassName] = useState('7A3');
  const [score, setScore] = useState<number>(10.0);
  const [submissionsCount, setSubmissionsCount] = useState<number>(12);
  const [quote, setQuote] = useState('Chăm chỉ làm bài tập Sinh học & tích cực khám phá khoa học');
  const [honorTitle, setHonorTitle] = useState('Ngôi sao sáng');
  const [message, setMessage] = useState<string | null>(null);

  // Form states for weekly task
  const [taskTitle, setTaskTitle] = useState('Thử thách Di truyền & Đột biến ADN (Sinh học 9)');
  const [taskClass, setTaskClass] = useState('Tất cả các lớp');
  const [taskNotice, setTaskNotice] = useState<string | null>(null);

  const handleSubmitScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddStudent({
      name: name.trim(),
      className,
      score: Number(score),
      submissionsCount: Number(submissionsCount),
      quote: quote.trim(),
      honorTitle: honorTitle.trim(),
      school: 'THCS Bắc Đông Quan',
    });

    setMessage(`Đã cập nhật học sinh "${name}" vào Bảng Vàng thành tích thành công!`);
    setName('');
    setTimeout(() => setMessage(null), 3500);
  };

  const handlePublishTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTaskNotice(`Đã phát động nhiệm vụ tuần "${taskTitle}" tới học sinh ${taskClass}!`);
    setTimeout(() => setTaskNotice(null), 3500);
  };

  // Compute quick stats
  const totalStudents = students.length;
  const excellentStudents = students.filter((s) => s.score >= 9.0).length;
  const avgScore = totalStudents > 0
    ? (students.reduce((acc, s) => acc + s.score, 0) / totalStudents).toFixed(1)
    : '0';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-slate-800">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-800 to-[#0d8a43] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-2xl font-black shadow-md">
              👩‍🏫
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-amber-300 tracking-wider">
                Hệ Thống Dành Riêng Cho Giáo Viên
              </span>
              <h3 className="text-[17px] sm:text-[18px] font-bold">
                Cổng Quản Trị – Cô Nguyễn Hoàn (THCS Bắc Đông Quan)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 text-[12.5px] font-bold shrink-0">
          <button
            onClick={() => setActiveTab('addScore')}
            className={`py-2.5 px-4 rounded-t-xl transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'addScore'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-star text-amber-500"></i> Khen thưởng &amp; Thêm điểm
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`py-2.5 px-4 rounded-t-xl transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'stats'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-chart-pie text-emerald-600"></i> Thống kê các lớp
          </button>
          <button
            onClick={() => setActiveTab('createTask')}
            className={`py-2.5 px-4 rounded-t-xl transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'createTask'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-plus-circle text-blue-600"></i> Giao nhiệm vụ tuần
          </button>
        </div>

        {/* Modal content body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {activeTab === 'addScore' && (
            <div className="space-y-4">
              <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-[13px] text-amber-950 font-normal leading-[1.5]">
                💡 <strong>Cô Hoàn lưu ý:</strong> Khi cô thêm học sinh hoặc cập nhật điểm số, hệ
                thống sẽ tự động tính toán lại thứ hạng và cập nhật ngay lên Bảng Vàng vinh danh
                trên trang chủ!
              </div>

              {message && (
                <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl text-[13px] font-bold animate-fadeIn">
                  ✓ {message}
                </div>
              )}

              <form onSubmit={handleSubmitScore} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                      Họ và tên học sinh:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Hoàng Minh Quân"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                      Lớp học:
                    </label>
                    <select
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                      Điểm số (thang 10):
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="10"
                      value={score}
                      onChange={(e) => setScore(parseFloat(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-bold text-amber-700 focus:ring-2 focus:ring-[#087A43] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                      Số bài nộp tuần:
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={submissionsCount}
                      onChange={(e) => setSubmissionsCount(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-bold text-emerald-700 focus:ring-2 focus:ring-[#087A43] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                      Danh hiệu vinh danh:
                    </label>
                    <input
                      type="text"
                      value={honorTitle}
                      onChange={(e) => setHonorTitle(e.target.value)}
                      placeholder="Ngôi sao sáng, ..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12.5px] font-semibold text-slate-700 mb-1">
                    Lời nhận xét / Lời khen của Cô Hoàn:
                  </label>
                  <textarea
                    rows={2}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#087A43] hover:bg-[#056B3A] text-white rounded-xl text-[13px] sm:text-[13.5px] font-bold transition cursor-pointer shadow-sm flex items-center gap-2 tracking-normal"
                >
                  <i className="fa-solid fa-check"></i> Lưu vào Bảng Vàng vinh danh
                </button>
              </form>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                  <span className="text-xs text-slate-500 font-bold block mb-1">Tổng học sinh tham gia</span>
                  <span className="text-2xl font-black text-emerald-800">{totalStudents}</span>
                </div>
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-center">
                  <span className="text-xs text-slate-500 font-bold block mb-1">Học sinh giỏi (≥ 9.0đ)</span>
                  <span className="text-2xl font-black text-amber-700">{excellentStudents}</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-center">
                  <span className="text-xs text-slate-500 font-bold block mb-1">Điểm trung bình toàn khối</span>
                  <span className="text-2xl font-black text-blue-700">{avgScore} / 10</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-600 font-black uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Lớp</th>
                      <th className="p-3">Sĩ số nộp</th>
                      <th className="p-3">Điểm cao nhất</th>
                      <th className="p-3">Tỷ lệ xuất sắc</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {['6A3', '6B3', '7A3', '7B3', '8A3', '8B3', '9A3', '9B3'].map((cls) => {
                      const classStudents = students.filter((s) => s.className === cls);
                      const maxScore = classStudents.length > 0 ? Math.max(...classStudents.map((s) => s.score)) : 0;
                      const countExcellent = classStudents.filter((s) => s.score >= 9.0).length;
                      const percent = classStudents.length > 0 ? Math.round((countExcellent / classStudents.length) * 100) : 0;
                      return (
                        <tr key={cls} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">{cls}</td>
                          <td className="p-3 text-slate-700">{classStudents.length} học sinh</td>
                          <td className="p-3 font-bold text-amber-600">{maxScore.toFixed(1)} đ</td>
                          <td className="p-3">
                            <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold text-[10px]">
                              {percent}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'createTask' && (
            <div className="space-y-4">
              {taskNotice && (
                <div className="p-3 bg-blue-100 text-blue-900 rounded-xl text-xs font-bold animate-fadeIn">
                  ✓ {taskNotice}
                </div>
              )}

              <form onSubmit={handlePublishTask} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tiêu đề thử thách tuần mới:
                  </label>
                  <input
                    type="text"
                    required
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Áp dụng cho khối / lớp:
                    </label>
                    <select
                      value={taskClass}
                      onChange={(e) => setTaskClass(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option value="Tất cả các lớp">Tất cả các lớp (Khối 6, 7, 8, 9)</option>
                      <option value="Khối 6 (6A3, 6B3)">Khối 6 (6A3, 6B3)</option>
                      <option value="Khối 7 (7A3, 7B3)">Khối 7 (7A3, 7B3)</option>
                      <option value="Khối 8 (8A3, 8B3)">Khối 8 (8A3, 8B3)</option>
                      <option value="Khối 9 (9A3, 9B3)">Khối 9 (9A3, 9B3)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hạn hoàn thành:
                    </label>
                    <input
                      type="text"
                      defaultValue="Chủ nhật tuần này (23:59)"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-extrabold transition cursor-pointer shadow-sm flex items-center gap-2"
                >
                  <i className="fa-solid fa-paper-plane"></i> Phát động nhiệm vụ tuần
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Đóng bảng quản lý
          </button>
        </div>
      </div>
    </div>
  );
};
