export interface Student {
  id: string;
  rank: number;
  name: string;
  className: string;
  school: string;
  score: number;
  submissionsCount: number;
  quote?: string;
  badge?: string;
  avatar?: string;
  honorTitle?: string;
  achievements?: string[];
  lastActive?: string;
}

export type ClassFilter = 'all' | '6A3' | '6B3' | '7A3' | '7B3' | '8A3' | '8B3' | '9A3' | '9B3';

export type UserRole = 'student' | 'teacher';

export interface QuizQuestion {
  id: number;
  grade: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint?: string;
}

export interface WeeklyChallenge {
  id: string;
  title: string;
  description: string;
  deadline: string;
  totalSubmissions: number;
  gradeTarget: string;
}
