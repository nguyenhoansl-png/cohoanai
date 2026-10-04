import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BIOLOGY_QUESTIONS } from '../data/quizData';
import { QuizQuestion, Student } from '../types';

interface QuizModalProps {
  onClose: () => void;
  onAddStudentScore: (newStudent: Partial<Student>) => void;
  currentStudentName?: string;
  currentClassName?: string;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  onClose,
  onAddStudentScore,
  currentStudentName = '',
  currentClassName = '7A3',
}) => {
  const [selectedGrade, setSelectedGrade] = useState<number>(0); // 0 = all
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Student info for leaderboard submission
  const [studentName, setStudentName] = useState(currentStudentName || 'Học sinh chăm chỉ');
  const [studentClass, setStudentClass] = useState(currentClassName || '7A3');
  const [submittedToLeaderboard, setSubmittedToLeaderboard] = useState(false);

  const questions = selectedGrade === 0
    ? BIOLOGY_QUESTIONS
    : BIOLOGY_QUESTIONS.filter((q) => q.grade === selectedGrade);

  const currentQ: QuizQuestion | undefined = questions[currentIndex] || questions[0];

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setHasAnswered(true);

    if (index === currentQ.correctIndex) {
      setScoreCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setShowHint(false);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    }
  };

  const finalScoreOutOfTen = questions.length > 0
    ? Math.round((scoreCount / questions.length) * 10 * 10) / 10
    : 10;

  const handleSaveToLeaderboard = () => {
    if (!studentName.trim()) return;
    onAddStudentScore({
      name: studentName.trim(),
      className: studentClass,
      score: Math.min(10, finalScoreOutOfTen),
      submissionsCount: 1,
      quote: `Đạt ${finalScoreOutOfTen}/10 thử thách Sinh học tuần này cùng Cô Hoàn AI!`,
    });
    setSubmittedToLeaderboard(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border-2 border-emerald-500/30 text-slate-800">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-800 to-[#0d8a43] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-bold shadow-md">
              ⚡
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-300">
                Nhiệm vụ Sinh học tuần này
              </span>
              <h3 className="text-base sm:text-lg font-black leading-tight">
                Thử Thách Sinh Học &amp; Khám Phá Cùng AI
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {!isCompleted ? (
            <>
              {/* Grade filter */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-500">Khối lớp:</span>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {[
                    { label: 'Tất cả khối', val: 0 },
                    { label: 'Lớp 6', val: 6 },
                    { label: 'Lớp 7', val: 7 },
                    { label: 'Lớp 8', val: 8 },
                    { label: 'Lớp 9', val: 9 },
                  ].map((g) => (
                    <button
                      key={g.val}
                      onClick={() => {
                        setSelectedGrade(g.val);
                        setCurrentIndex(0);
                        setSelectedAnswer(null);
                        setHasAnswered(false);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                        selectedGrade === g.val
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress and topic */}
              <div className="flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <i className="fa-solid fa-seedling text-emerald-600"></i> Chủ đề: {currentQ.topic} (Sinh học {currentQ.grade})
                </span>
                <span className="font-extrabold text-slate-500">
                  Câu hỏi {currentIndex + 1} / {questions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question box */}
              <div className="p-4 sm:p-5 bg-amber-50/60 rounded-2xl border border-amber-200/80">
                <h4 className="text-[16px] sm:text-[17px] font-bold text-slate-900 leading-[1.4]">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let optionStyle = 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-slate-50';
                  if (hasAnswered) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isSelected) {
                      optionStyle = 'bg-rose-100 border-rose-400 text-rose-950';
                    } else {
                      optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  const alphabet = ['A', 'B', 'C', 'D'][idx];

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border-2 transition flex items-center justify-between cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                            isSelected || (hasAnswered && isCorrect)
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {alphabet}
                        </span>
                        <span className="text-[14px] sm:text-[14.5px] font-medium leading-[1.45]">{option}</span>
                      </div>

                      {hasAnswered && isCorrect && (
                        <i className="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <i className="fa-solid fa-circle-xmark text-rose-500 text-lg"></i>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Cô Hoàn AI Explanation after answering */}
              {hasAnswered && (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 animate-fadeIn space-y-2">
                  <div className="flex items-center gap-2 text-[12px] font-bold text-emerald-800 uppercase tracking-wide">
                    <span className="text-base">👩‍🏫</span> Lời giảng từ Cô Hoàn AI:
                  </div>
                  <p className="text-[14px] sm:text-[14.5px] text-slate-700 font-normal leading-[1.6]">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Hint button */}
              {!hasAnswered && currentQ.hint && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <i className="fa-regular fa-lightbulb text-amber-500"></i>
                    {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý từ Cô Hoàn'}
                  </button>
                  {showHint && (
                    <p className="mt-2 text-xs bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-900 italic">
                      💡 {currentQ.hint}
                    </p>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Completed Screen */
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 border-4 border-amber-400 flex items-center justify-center text-4xl shadow-md">
                🎉
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-600">
                  Hoàn thành thử thách xuất sắc!
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Chúc Mừng Con Đã Hoàn Thành!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Con đã trả lời đúng {scoreCount} / {questions.length} câu hỏi Sinh học.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl border border-amber-300 max-w-sm mx-auto">
                <span className="text-xs font-bold text-slate-600 block mb-1">
                  Điểm tổng kết nhiệm vụ tuần:
                </span>
                <div className="text-3xl font-black text-amber-600">
                  {finalScoreOutOfTen.toFixed(1)} <span className="text-base text-slate-400 font-normal">/ 10</span>
                </div>
                <p className="text-xs font-bold text-emerald-800 mt-2">
                  {finalScoreOutOfTen >= 9
                    ? '🌟 Xuất sắc! Con xứng đáng lọt vào Bảng Vàng vinh danh tuần này!'
                    : '🌱 Rất tốt! Tiếp tục phát huy và ôn lại kiến thức nhé!'}
                </p>
              </div>

              {/* Submit to leaderboard */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left max-w-sm mx-auto space-y-3">
                <h5 className="text-xs font-black text-slate-800 uppercase flex items-center gap-1.5">
                  <i className="fa-solid fa-trophy text-amber-500"></i> Ghi danh vào Bảng Vàng:
                </h5>

                {submittedToLeaderboard ? (
                  <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold text-center">
                    ✓ Đã lưu kết quả của con lên Bảng Vàng tuần này!
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 block mb-1">Họ tên con:</label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Nhập tên con..."
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 block mb-1">Lớp:</label>
                      <select
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                      >
                        <option value="6A3">6A3</option>
                        <option value="6B3">6B3</option>
                        <option value="7A3">7A3</option>
                        <option value="7B3">7B3</option>
                        <option value="8A3">8A3</option>
                        <option value="8B3">8B3</option>
                        <option value="9A3">9A3</option>
                        <option value="9B3">9B3</option>
                      </select>
                    </div>

                    <button
                      onClick={handleSaveToLeaderboard}
                      className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs transition cursor-pointer shadow-sm"
                    >
                      Lưu điểm vào Bảng Vàng
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          {!isCompleted ? (
            <>
              <div className="text-xs font-bold text-slate-500">
                Đúng: <strong className="text-emerald-700">{scoreCount}</strong> câu
              </div>
              <button
                disabled={!hasAnswered}
                onClick={handleNextQuestion}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setIsCompleted(false);
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setHasAnswered(false);
                  setScoreCount(0);
                  setSubmittedToLeaderboard(false);
                }}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Làm lại từ đầu
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-sm"
              >
                Quay lại Bảng Vàng
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
