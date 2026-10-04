import { QuizQuestion } from '../types';

export const BIOLOGY_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    grade: 6,
    topic: 'Tế bào thực vật',
    question: 'Bộ phận nào của tế bào thực vật chứa chất di truyền và điều khiển mọi hoạt động sống của tế bào?',
    options: [
      'Màng tế bào',
      'Nhân tế bào',
      'Lục lạp',
      'Không bào lớn'
    ],
    correctIndex: 1,
    explanation: 'Cô Hoàn AI giải thích: Nhân tế bào chứa vật chất di truyền (ADN) và có chức năng điều khiển toàn bộ các hoạt động sống của tế bào!',
    hint: 'Đây là "trung tâm chỉ huy" nằm ở giữa tế bào.'
  },
  {
    id: 2,
    grade: 6,
    topic: 'Quang hợp & Hô hấp',
    question: 'Khí nào được lá cây hấp thụ chủ yếu trong quá trình quang hợp dưới ánh sáng mặt trời?',
    options: [
      'Khí Ôxi (O₂)',
      'Khí Carbon dioxide (CO₂)',
      'Khí Nitơ (N₂)',
      'Khí Hydro (H₂)'
    ],
    correctIndex: 1,
    explanation: 'Cô Hoàn AI giải thích: Quá trình quang hợp hấp thu khí CO₂ và nước nhờ năng lượng ánh sáng để tạo ra chất hữu cơ và giải phóng khí Oxi.',
    hint: 'Khí này do người và động vật thở ra.'
  },
  {
    id: 3,
    grade: 7,
    topic: 'Thế giới động vật',
    question: 'Động vật nào sau đây thuộc lớp Thú nhưng lại đẻ trứng?',
    options: [
      'Thú mỏ vịt',
      'Cá voi xanh',
      'Dơi ăn quả',
      'Kanguru (Chuột túi)'
    ],
    correctIndex: 0,
    explanation: 'Cô Hoàn AI giải thích: Thú mỏ vịt và thú mỏ nhím là các loài thú nguyên thủy bậc thấp vẫn còn giữ tập tính đẻ trứng nhưng nuôi con bằng sữa mẹ!',
    hint: 'Loài thú đặc hữu của nước Úc, có mỏ giống loài vịt.'
  },
  {
    id: 4,
    grade: 7,
    topic: 'Tiêu hóa ở động vật',
    question: 'Dạ dày của trâu, bò (động vật nhai lại) gồm có bao nhiêu ngăn?',
    options: [
      '2 ngăn',
      '3 ngăn',
      '4 ngăn',
      '5 ngăn'
    ],
    correctIndex: 2,
    explanation: 'Cô Hoàn AI giải thích: Dạ dày trâu bò có 4 ngăn: Dạ cỏ, dạ tổ ong, dạ lá sách và dạ múi khế (dạ dày chính thức).',
    hint: 'Gồm dạ cỏ, dạ tổ ong, dạ lá sách và dạ múi khế.'
  },
  {
    id: 5,
    grade: 8,
    topic: 'Hệ tuần hoàn máu ở người',
    question: 'Nhóm máu nào được gọi là "nhóm máu chuyên cho" trong hệ nhóm máu ABO vì hồng cầu không có kháng nguyên A và B?',
    options: [
      'Nhóm máu A',
      'Nhóm máu B',
      'Nhóm máu AB',
      'Nhóm máu O'
    ],
    correctIndex: 3,
    explanation: 'Cô Hoàn AI giải thích: Nhóm máu O có thể truyền cho tất cả các nhóm máu khác vì màng hồng cầu không chứa kháng nguyên A hoặc B, tránh hiện tượng ngưng kết hồng cầu.',
    hint: 'Nhóm máu này rất phổ biến ở người Việt Nam.'
  },
  {
    id: 6,
    grade: 8,
    topic: 'Hệ bài tiết & Thận',
    question: 'Đơn vị chức năng cấu tạo nên quả thận của con người gọi là gì?',
    options: [
      'Nephron (Cầu thận và ống thận)',
      'Nơ-ron',
      'Alveoli (Phế nang)',
      'Tiểu cầu'
    ],
    correctIndex: 0,
    explanation: 'Cô Hoàn AI giải thích: Mỗi quả thận chứa khoảng 1 triệu nephron (đơn vị chức năng của thận) làm nhiệm vụ lọc máu và tạo thành nước tiểu.',
    hint: 'Bắt đầu bằng chữ N, đừng nhầm với nơ-ron thần kinh nhé.'
  },
  {
    id: 7,
    grade: 9,
    topic: 'Di truyền học Men-đen',
    question: 'Khi lai hai dòng đậu Hà Lan thuần chủng hoa đỏ và hoa trắng, ở thế hệ F1 thu được 100% hoa đỏ. Tính trạng hoa đỏ là tính trạng gì?',
    options: [
      'Tính trạng lặn',
      'Tính trạng trội',
      'Tính trạng trung gian',
      'Tính trạng đồng trội'
    ],
    correctIndex: 1,
    explanation: 'Cô Hoàn AI giải thích: Tính trạng biểu hiện ngay ở F1 khi lai hai cơ thể bố mẹ thuần chủng tương phản được gọi là tính trạng trội!',
    hint: 'Tính trạng này lấn át hoàn toàn tính trạng còn lại.'
  },
  {
    id: 8,
    grade: 9,
    topic: 'Cấu trúc ADN & Gen',
    question: 'Theo nguyên tắc bổ sung trong cấu trúc phân tử ADN mạch kép, bazơ nitơ Adenin (A) liên kết với bazơ nitơ nào bằng 2 liên kết hiđrô?',
    options: [
      'Guanin (G)',
      'Xitôzin (X)',
      'Timin (T)',
      'Uraxin (U)'
    ],
    correctIndex: 2,
    explanation: 'Cô Hoàn AI giải thích: A liên kết với T bằng 2 liên kết hiđrô (A = T), G liên kết với X bằng 3 liên kết hiđrô (G ≡ X).',
    hint: 'Chữ cái viết tắt là T.'
  }
];

export const BIOLOGY_QA_KNOWLEDGE: { question: string; answer: string; tag: string }[] = [
  {
    question: 'Quang hợp là gì và diễn ra ở đâu?',
    answer: 'Quang hợp là quá trình lá cây sử dụng chất diệp lục hấp thu năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ (tinh bột) từ nước (H₂O) và khí carbon dioxide (CO₂), đồng thời giải phóng khí oxi (O₂). Quá trình này diễn ra chủ yếu ở bào quan lục lạp trong tế bào thịt lá.',
    tag: 'Sinh học 6-7'
  },
  {
    question: 'Sự khác biệt giữa tế bào động vật và tế bào thực vật là gì?',
    answer: 'Tế bào thực vật có thêm 3 đặc điểm quan trọng mà tế bào động vật không có: (1) Thành tế bào làm bằng cellulose tạo khung cứng vững; (2) Bào quan lục lạp chứa diệp lục để quang hợp; (3) Không bào trung tâm rất lớn chứa dịch tế bào.',
    tag: 'Tế bào học'
  },
  {
    question: 'Quy luật phân ly của Men-đen được phát biểu thế nào?',
    answer: 'Trong quá trình phát sinh giao tử, mỗi nhân tố di truyền trong cặp nhân tố di truyền phân ly về một giao tử và giữ nguyên bản chất như ở cơ thể thuần chủng của P mà không hòa lẫn vào nhau.',
    tag: 'Sinh học 9'
  },
  {
    question: 'Tại sao tim người có thể đập liên tục suốt đời mà không mệt mỏi?',
    answer: 'Tim hoạt động theo chu kỳ (khoảng 0.8 giây/chu kỳ). Trong đó: pha co tâm nhĩ kéo dài 0.1s (nghỉ 0.7s), pha co tâm thất kéo dài 0.3s (nghỉ 0.5s), pha giãn chung kéo dài 0.4s. Như vậy thời gian nghỉ ngơi của tim trong một chu kỳ là 0.4s, bằng đúng thời gian làm việc nên cơ tim hồi phục nhanh và không bị mỏi!',
    tag: 'Sinh học 8'
  }
];
