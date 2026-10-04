import React, { useState, useEffect } from 'react';
import { ALL_STUDENTS } from './data/studentsData';
import { Student, ClassFilter, UserRole } from './types';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { FourValuesSection } from './components/FourValuesSection';
import { KhtnBioSection } from './components/KhtnBioSection';
import { ChallengeSection } from './components/ChallengeSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { AboutTeacherSection } from './components/AboutTeacherSection';
import { AdditionalFeaturesSection } from './components/AdditionalFeaturesSection';
import { SiteFooter } from './components/SiteFooter';
import { AboutPage } from './pages/AboutPage';

import { StudentCertificateModal } from './components/StudentCertificateModal';
import { FullLeaderboardModal } from './components/FullLeaderboardModal';
import { QuizModal } from './components/QuizModal';
import { TeacherDashboardModal } from './components/TeacherDashboardModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [students, setStudents] = useState<Student[]>(ALL_STUDENTS);
  const [selectedClass, setSelectedClass] = useState<ClassFilter>('all');
  const [selectedStudentForCertificate, setSelectedStudentForCertificate] = useState<Student | null>(null);

  // Routing state for / and /ve-co-hoan
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/ve-co-hoan')) {
      return '/ve-co-hoan';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.startsWith('/ve-co-hoan')) {
        setCurrentPath('/ve-co-hoan');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string, sectionId?: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Modals state
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // User state
  const [loggedInUser, setLoggedInUser] = useState<{
    name: string;
    role: UserRole;
    className?: string;
  } | null>(null);

  const handleLoginTeacher = () => {
    setLoggedInUser({
      name: 'Cô Nguyễn Hoàn',
      role: 'teacher',
    });
    setShowTeacherModal(true);
  };

  const handleLoginStudent = (name: string, className: string) => {
    setLoggedInUser({
      name,
      role: 'student',
      className,
    });
    setShowQuizModal(true);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleAddStudentScore = (newRecord: Partial<Student>) => {
    setStudents((prev) => {
      const existingIndex = prev.findIndex(
        (s) => s.name.toLowerCase() === (newRecord.name || '').toLowerCase()
      );

      let updatedList: Student[];
      if (existingIndex >= 0) {
        const existing = prev[existingIndex];
        const updatedStudent: Student = {
          ...existing,
          ...newRecord,
          score: newRecord.score !== undefined ? newRecord.score : existing.score,
          submissionsCount:
            newRecord.submissionsCount !== undefined
              ? existing.submissionsCount + newRecord.submissionsCount
              : existing.submissionsCount,
        };
        updatedList = [...prev];
        updatedList[existingIndex] = updatedStudent;
      } else {
        const newStudent: Student = {
          id: `s-${Date.now()}`,
          rank: prev.length + 1,
          name: newRecord.name || 'Học sinh mới',
          className: newRecord.className || '7A3',
          school: newRecord.school || 'THCS Bắc Đông Quan',
          score: newRecord.score || 10.0,
          submissionsCount: newRecord.submissionsCount || 1,
          quote: newRecord.quote || 'Chăm chỉ nỗ lực học tập môn Sinh học!',
          honorTitle: newRecord.honorTitle || 'Học sinh gương mẫu',
          badge: (newRecord.score || 10) >= 10 ? '⭐ Điểm 10' : '✓ Điểm giỏi',
        };
        updatedList = [newStudent, ...prev];
      }

      updatedList.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.submissionsCount - a.submissionsCount;
      });

      return updatedList.map((st, idx) => ({
        ...st,
        rank: idx + 1,
      }));
    });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF3] text-[#123524] flex flex-col justify-between selection:bg-[#087A43] selection:text-white">
      {/* 2. Professional Header */}
      <SiteHeader
        currentPath={currentPath}
        onNavigate={navigateTo}
        onStartLearning={() => setShowQuizModal(true)}
        onOpenTeacherDash={() => setShowTeacherModal(true)}
        onOpenLoginModal={() => setShowAuthModal(true)}
        loggedInUser={loggedInUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPath === '/ve-co-hoan' ? (
          /* TRANG RIÊNG: VỀ CÔ HOÀN (/ve-co-hoan) */
          <AboutPage
            onNavigateHome={() => navigateTo('/')}
            onOpenQuiz={() => setShowQuizModal(true)}
            onExploreLearning={() => navigateTo('/', 'learning-materials')}
          />
        ) : (
          /* TRANG CHỦ (/) */
          <>
            {/* Hero Section */}
            <HeroSection
              onExploreBio={() => scrollToSection('khtn-bio')}
              onExploreAi={() => navigateTo('/ve-co-hoan')}
            />

            {/* 4 Giá Trị Nổi Bật */}
            <FourValuesSection />

            {/* Khối Sinh Học THCS (KHTN 6, 7, 8, 9 Mạch Sinh Học) */}
            <KhtnBioSection
              onSelectGrade={(grade) => {
                setShowQuizModal(true);
              }}
            />

            {/* Thử Thách Sinh Học Cùng Cô Hoàn AI */}
            <ChallengeSection
              onStartChallenge={() => setShowQuizModal(true)}
              onViewAllChallenges={() => scrollToSection('khtn-bio')}
            />

            {/* Bảng Vàng Học Tập */}
            <LeaderboardSection
              students={students}
              selectedClass={selectedClass}
              onSelectClass={setSelectedClass}
              onSelectStudent={(st) => setSelectedStudentForCertificate(st)}
              onOpenFullLeaderboard={() => setShowFullLeaderboard(true)}
            />

            {/* Giới Thiệu Cô Hoàn */}
            <AboutTeacherSection />

            {/* AI Giáo Dục, Học Liệu, STEM/STEAM, Góc Chia Sẻ, Liên Hệ */}
            <AdditionalFeaturesSection
              onOpenAiAssistant={() => setShowAiModal(true)}
              onOpenQuiz={() => setShowQuizModal(true)}
            />
          </>
        )}
      </main>

      {/* Professional Footer */}
      <SiteFooter onNavigate={navigateTo} />

      {/* Floating Action Button for Cô Hoàn AI assistant */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setShowAiModal(true)}
          className="bg-gradient-to-r from-[#087A43] to-[#056B3A] hover:from-[#056B3A] hover:to-[#04522c] text-white font-extrabold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs sm:text-sm transition transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/60"
          title="Trò chuyện cùng Cô Hoàn AI"
        >
          <span className="w-6 h-6 rounded-full bg-[#F4A900] text-slate-900 flex items-center justify-center text-xs">
            🤖
          </span>
          <span className="hidden xs:inline">Hỏi Cô Hoàn AI</span>
        </button>
      </div>

      {/* Modals & Portals */}
      {selectedStudentForCertificate && (
        <StudentCertificateModal
          student={selectedStudentForCertificate}
          onClose={() => setSelectedStudentForCertificate(null)}
        />
      )}

      {showFullLeaderboard && (
        <FullLeaderboardModal
          students={students}
          onClose={() => setShowFullLeaderboard(false)}
          onSelectStudent={(st) => {
            setShowFullLeaderboard(false);
            setSelectedStudentForCertificate(st);
          }}
        />
      )}

      {showQuizModal && (
        <QuizModal
          onClose={() => setShowQuizModal(false)}
          onAddStudentScore={handleAddStudentScore}
          currentStudentName={loggedInUser?.name}
          currentClassName={loggedInUser?.className}
        />
      )}

      {showTeacherModal && (
        <TeacherDashboardModal
          onClose={() => setShowTeacherModal(false)}
          students={students}
          onAddStudent={handleAddStudentScore}
        />
      )}

      {showAiModal && <AiAssistantModal onClose={() => setShowAiModal(false)} />}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLoginTeacher={handleLoginTeacher}
          onLoginStudent={handleLoginStudent}
        />
      )}
    </div>
  );
}
