import { Student } from '../types';

export const INITIAL_STUDENTS: Student[] = [
  // Top 1 - 3
  {
    id: 's-1',
    rank: 1,
    name: 'Nguyễn Minh Châu',
    className: '7A3',
    school: 'THCS Bắc Đông Quan',
    score: 10.0,
    submissionsCount: 15,
    honorTitle: 'Ngôi sao sáng nhất',
    quote: 'Con là một ngôi sao sáng chăm chỉ nhất lớp Cô Hoàn!',
    badge: '👑 TOP 1 XUẤT SẮC',
    avatar: '👩‍🎓',
    achievements: ['Hoàn thành 100% nhiệm vụ tuần', 'Điểm 10 tuyệt đối 5 tuần liên tiếp', 'Học sinh truyền cảm hứng'],
    lastActive: '10 phút trước',
  },
  {
    id: 's-2',
    rank: 2,
    name: 'Trần Tuấn Khang',
    className: '8A3',
    school: 'THCS Bắc Đông Quan',
    score: 9.8,
    submissionsCount: 14,
    honorTitle: 'Nhà sinh học nhí tài ba',
    quote: 'Chăm chỉ làm bài tập Sinh học & tích cực khám phá khoa học',
    badge: '🥈 TOP 2',
    avatar: '🧑‍🎓',
    achievements: ['Chuyên cần làm bài tập về nhà', 'Giải nhanh thử thách di truyền', 'Top 3 liên tục'],
    lastActive: '25 phút trước',
  },
  {
    id: 's-3',
    rank: 3,
    name: 'Lê Quỳnh Mai',
    className: '6B3',
    school: 'THCS Bắc Đông Quan',
    score: 9.5,
    submissionsCount: 13,
    honorTitle: 'Búp măng chăm học',
    quote: 'Rất tích cực luyện tập hội thoại tương tác cùng Cô Hoàn AI',
    badge: '🥉 TOP 3',
    avatar: '👧',
    achievements: ['Tương tác AI xuất sắc nhất', 'Nộp bài sớm nhất tuần', 'Tiến bộ vượt bậc'],
    lastActive: '1 giờ trước',
  },
  // Top 4 - 9 matching screenshot
  {
    id: 's-4',
    rank: 4,
    name: 'Hoàng Đặng Diệu Linh',
    className: '6A3',
    school: 'THCS Bắc Đông Quan',
    score: 10.0,
    submissionsCount: 10,
    quote: 'Em rất yêu thích môn Sinh học của Cô Hoàn!',
    badge: '⭐ Điểm 10',
    avatar: '🌸',
    achievements: ['10 bài nộp đạt điểm tối đa', 'Thành viên tích cực'],
  },
  {
    id: 's-5',
    rank: 5,
    name: 'Đào Ngọc Lan Anh',
    className: '7B3',
    school: 'THCS Bắc Đông Quan',
    score: 10.0,
    submissionsCount: 12,
    quote: 'Công nghệ AI giúp em hiểu bài nhanh hơn nhiều.',
    badge: '⭐ Điểm 10',
    avatar: '🌷',
    achievements: ['12 bài nộp hoàn thành', 'Học giỏi toàn diện'],
  },
  {
    id: 's-6',
    rank: 6,
    name: 'Trần Bảo Yến',
    className: '8B3',
    school: 'THCS Bắc Đông Quan',
    score: 10.0,
    submissionsCount: 9,
    quote: 'Mỗi bài giảng Sinh học như một chuyến phiêu lưu thiên nhiên.',
    badge: '⭐ Điểm 10',
    avatar: '🦋',
    achievements: ['9 bài nộp xuất sắc', 'Chăm chỉ nộp bài đúng hạn'],
  },
  {
    id: 's-7',
    rank: 7,
    name: 'Vũ Ngọc Ánh',
    className: '7A3',
    school: 'THCS Bắc Đông Quan',
    score: 10.0,
    submissionsCount: 11,
    quote: 'Cảm ơn Cô Hoàn đã luôn động viên và chỉ dạy tận tâm.',
    badge: '⭐ Điểm 10',
    avatar: '🌻',
    achievements: ['11 bài nộp điểm 10', 'Ngôi sao chăm chỉ'],
  },
  {
    id: 's-8',
    rank: 8,
    name: 'Phạm Gia Huy',
    className: '9A3',
    school: 'THCS Bắc Đông Quan',
    score: 9.5,
    submissionsCount: 8,
    quote: 'Luyện đề trắc nghiệm Sinh học 9 cùng AI rất hiệu quả!',
    badge: '✓ Điểm giỏi',
    avatar: '🚀',
    achievements: ['8 bài nộp điểm giỏi', 'Tập trung ôn thi vào 10'],
  },
  {
    id: 's-9',
    rank: 9,
    name: 'Bùi Minh Khôi',
    className: '9B3',
    school: 'THCS Bắc Đông Quan',
    score: 9.0,
    submissionsCount: 8,
    quote: 'Sinh học lớp 9 phần Men-đen và ADN rất thú vị.',
    badge: '✓ Điểm giỏi',
    avatar: '🔬',
    achievements: ['8 bài nộp chăm chỉ', 'Kiến thức vững chắc'],
  },
];

// Helper to generate remaining students up to 128 matching class distribution
const classTargets: Record<string, number> = {
  '6A3': 16,
  '6B3': 18,
  '7A3': 15,
  '7B3': 17,
  '8A3': 19,
  '8B3': 15,
  '9A3': 14,
  '9B3': 14,
};

const vietnameseNames = [
  'Đặng Đình Quân', 'Võ Thị Thanh Thảo', 'Lê Hoàng Nam', 'Nguyễn Phương Linh',
  'Trịnh Thu Trang', 'Phan Văn Hưng', 'Dương Thùy Dương', 'Lương Đức Trọng',
  'Ngô Bảo Châu', 'Tạ Minh Đức', 'Cao Thị Bích Ngọc', 'Đinh Hải Yến',
  'Hà Quốc Anh', 'Mai Thảo My', 'Đoàn Nhật Minh', 'Phùng Khánh Huyền',
  'Bùi Tuấn Kiệt', 'Lâm Gia Bảo', 'Trương Ánh Tuyết', 'Huỳnh Tấn Phát',
  'Chu Minh Hoàng', 'Đỗ Quỳnh Chi', 'Nghiêm Đức Thắng', 'Thái Kim Ngân',
  'Hoàng Trọng Nghĩa', 'Vũ Tuyết Mai', 'Nguyễn Đình Phong', 'Trần Thúy Hằng',
  'Lê Tiến Đạt', 'Phạm Như Quỳnh', 'Võ Trọng Phúc', 'Nguyễn Khánh Linh',
  'Đào Văn Quyết', 'Trần Thị Mỹ Duyên', 'Bùi Đức Anh', 'Lê Thị Thu Hà',
  'Phan Thế Hiển', 'Vũ Thị Ngọc Hà', 'Ngô Hoàng Long', 'Trịnh Cẩm Tú'
];

function generateRemainingStudents(): Student[] {
  const currentCounts: Record<string, number> = {};
  for (const c of Object.keys(classTargets)) {
    currentCounts[c] = INITIAL_STUDENTS.filter(s => s.className === c).length;
  }

  const result: Student[] = [...INITIAL_STUDENTS];
  let rankCounter = 10;
  let nameIndex = 0;

  for (const [cls, target] of Object.entries(classTargets)) {
    while (currentCounts[cls] < target) {
      const name = vietnameseNames[nameIndex % vietnameseNames.length] + ` (${cls})`;
      nameIndex++;
      const score = Math.round((8.0 + Math.random() * 1.8) * 10) / 10;
      const submissions = Math.floor(6 + Math.random() * 7);

      result.push({
        id: `s-${rankCounter}`,
        rank: rankCounter,
        name: name.replace(` (${cls})`, ''),
        className: cls,
        school: 'THCS Bắc Đông Quan',
        score: Math.min(10, score),
        submissionsCount: submissions,
        quote: 'Chăm chỉ nỗ lực mỗi ngày cùng Cô Hoàn AI.',
        badge: score >= 9.5 ? '⭐ Điểm 10' : score >= 8.5 ? '✓ Điểm giỏi' : '✓ Khá giỏi',
        achievements: [`${submissions} bài nộp`, 'Tích cực tương tác'],
      });

      currentCounts[cls]++;
      rankCounter++;
    }
  }

  // Sort by score desc, then submissionsCount desc
  result.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.submissionsCount - a.submissionsCount;
  });

  // Re-assign ranks 1..128
  return result.map((s, idx) => ({
    ...s,
    rank: idx + 1,
  }));
}

export const ALL_STUDENTS = generateRemainingStudents();
