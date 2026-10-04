import React from 'react';
import { Volume2, VolumeX, Sparkles, Film, BookOpen, Trophy } from 'lucide-react';
import { sounds } from './audio';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  totalScore: number;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onNavigate,
  totalScore,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF5F2]/95 backdrop-blur-md border-b border-[#FECDD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('video-section')}
          className="text-left group flex items-center gap-2.5 cursor-pointer focus:outline-none"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#701A24] via-[#DC2626] to-[#EA580C] text-white flex items-center justify-center font-serif-display font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            E
          </span>
          <div>
            <span className="font-serif-display text-lg sm:text-xl font-bold text-[#701A24] group-hover:text-[#500713] transition-colors tracking-tight block leading-tight">
              Aprende español
            </span>
            <span className="text-[11px] text-[#9F1239] font-armenian hidden sm:block leading-tight font-medium">
              Իսպաներենի ինտերակտիվ դաս
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#4C0519]">
          <button
            onClick={() => onNavigate('video-section')}
            className="flex items-center gap-1.5 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <Film className="w-4 h-4 text-[#701A24]" />
            <span>Vídeo</span>
          </button>
          <button
            onClick={() => onNavigate('subtitles-section')}
            className="flex items-center gap-1.5 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#DC2626]" />
            <span>Subtítulos</span>
          </button>
          <button
            onClick={() => onNavigate('activities-section')}
            className="flex items-center gap-1.5 hover:text-[#EA580C] transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#EA580C]" />
            <span>Actividades</span>
          </button>
          <button
            onClick={() => onNavigate('argentina-section')}
            className="flex items-center gap-1.5 hover:text-[#701A24] transition-colors cursor-pointer"
          >
            <span>🇦🇷</span>
            <span>Español argentino</span>
          </button>
          <button
            onClick={() => onNavigate('reto-section')}
            className="flex items-center gap-1.5 hover:text-[#EA580C] transition-colors cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-[#EA580C]" />
            <span>Reto final</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Score */}
        <div className="flex items-center gap-3">
          {totalScore > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#FFF1F2] to-[#FFF7ED] border border-[#FECDD3] rounded-full text-xs font-bold text-[#701A24] tabular-nums shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>{totalScore} pts</span>
            </div>
          )}

          <button
            onClick={() => {
              onToggleSound();
              sounds.playClick();
            }}
            title={soundEnabled ? 'Silenciar sonidos' : 'Activar efectos de sonido'}
            className="p-2 text-[#701A24] hover:text-[#500713] hover:bg-[#FFE4E6] rounded-xl transition-colors cursor-pointer"
            aria-label="Alternar sonido"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
