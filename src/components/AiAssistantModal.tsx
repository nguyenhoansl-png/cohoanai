import React, { useState } from 'react';
import { BIOLOGY_QA_KNOWLEDGE } from '../data/quizData';

interface AiAssistantModalProps {
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'teacher_ai';
  text: string;
  time: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'teacher_ai',
      text: 'Chào con! Cô là trợ lý Cô Hoàn AI môn Sinh học THCS. Con đang gặp khó khăn hay cần giải đáp câu hỏi nào trong bài học Sinh học lớp 6, 7, 8 hay 9? Hãy gõ câu hỏi cho cô nhé!',
      time: 'Vừa xong',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'Quang hợp là gì và diễn ra ở đâu?',
    'Sự khác biệt giữa tế bào động vật và tế bào thực vật là gì?',
    'Quy luật phân ly của Men-đen được phát biểu thế nào?',
    'Tại sao tim người có thể đập liên tục suốt đời mà không mệt mỏi?',
  ];

  const handleSend = (textToSend?: string) => {
    const question = textToSend || inputValue;
    if (!question.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: question.trim(),
      time: 'Vừa xong',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      // Find matching knowledge or craft intelligent pedagogical answer
      const found = BIOLOGY_QA_KNOWLEDGE.find(
        (k) =>
          question.toLowerCase().includes(k.question.toLowerCase().slice(0, 15)) ||
          k.question.toLowerCase().includes(question.toLowerCase().slice(0, 15))
      );

      let reply = '';
      if (found) {
        reply = found.answer;
      } else {
        reply = `Cô Hoàn AI khen ngợi tinh thần ham học hỏi của con! Về câu hỏi "${question.trim()}": \n\nTrong chương trình Sinh học THCS, đây là một nội dung rất quan trọng. Con hãy chú ý ghi nhớ các đặc điểm bản chất về mặt cấu tạo và chức năng sinh học thích nghi của sinh vật. Nếu con muốn luyện tập thêm dạng câu hỏi trắc nghiệm về phần này, hãy ấn nút "Làm bài tập tuần" ở góc nhé!`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'teacher_ai',
        text: reply,
        time: 'Vừa xong',
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-emerald-500/30 text-slate-800">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-emerald-800 to-[#0d8a43] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-black shadow-md">
              🤖
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-amber-300 tracking-wider">
                Trí Tuệ Nhân Tạo THCS Bắc Đông Quan
              </span>
              <h3 className="text-[17px] sm:text-[18px] font-bold leading-tight">
                Trợ Lý Sinh Học Cô Hoàn AI
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

        {/* Quick prompt suggestions */}
        <div className="p-2.5 bg-emerald-50/70 border-b border-emerald-100 overflow-x-auto no-scrollbar flex items-center gap-2 shrink-0">
          <span className="text-[12px] font-bold text-emerald-900 whitespace-nowrap">Gợi ý hỏi:</span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[12px] font-medium bg-white border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full whitespace-nowrap hover:bg-emerald-100 transition cursor-pointer shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat message history */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
          {messages.map((m) => {
            const isAi = m.sender === 'teacher_ai';
            return (
              <div
                key={m.id}
                className={`flex gap-2.5 max-w-[85%] ${isAi ? 'self-start' : 'ml-auto flex-row-reverse'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 shadow-xs ${
                    isAi ? 'bg-amber-100 border border-amber-300' : 'bg-emerald-600 text-white'
                  }`}
                >
                  {isAi ? '👩‍🏫' : '🎒'}
                </div>
                <div
                  className={`p-3.5 rounded-2xl text-[14px] sm:text-[14.5px] leading-[1.6] whitespace-pre-wrap ${
                    isAi
                      ? 'bg-white text-slate-800 border border-slate-200 shadow-xs'
                      : 'bg-[#087A43] text-white shadow-xs'
                  }`}
                >
                  {m.text}
                  <div
                    className={`text-[11px] mt-1 text-right font-normal ${
                      isAi ? 'text-slate-400' : 'text-emerald-200'
                    }`}
                  >
                    {m.time}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-2 items-center text-[13px] text-slate-400 italic">
              <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs">
                👩‍🏫
              </span>
              <span>Cô Hoàn AI đang soạn câu trả lời...</span>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
          <input
            type="text"
            placeholder="Hỏi cô điều gì về môn Sinh học (ví dụ: Men-đen, ADN, Quang hợp, Tuần hoàn máu)..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            className="flex-1 px-4 py-2.5 bg-slate-100 rounded-2xl border border-slate-200 text-[13.5px] sm:text-[14px] font-normal focus:ring-2 focus:ring-[#087A43] outline-none"
          />
          <button
            onClick={() => handleSend()}
            className="px-4 py-2.5 bg-[#087A43] hover:bg-[#056B3A] text-white rounded-2xl font-bold text-[13px] sm:text-[13.5px] transition cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>Gửi</span>
            <i className="fa-solid fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
