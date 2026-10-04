import React from 'react';
import { X, Sparkles, BookOpen } from 'lucide-react';
import { SlangTerm } from './dialogue';

interface SlangModalProps {
  term: SlangTerm | null;
  onClose: () => void;
}

export const SlangModal: React.FC<SlangModalProps> = ({ term, onClose }) => {
  if (!term) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl border-2 border-[#E7DFD5] shadow-2xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#F5EFE6] rounded-full transition-colors cursor-pointer"
          aria-label="Փակել"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#800020] uppercase tracking-wider mb-2">
          <span>🇦🇷</span>
          <span>Արգենտինական խոսակցական բառապաշար</span>
        </div>

        <div className="flex items-baseline gap-3 mb-4">
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#800020]">
            {term.word}
          </h3>
          <span className="text-sm font-medium text-[#78716C] italic font-armenian">
            ({term.literal})
          </span>
        </div>

        {/* Armenian Explanation Card */}
        <div className="mb-4 p-4 bg-[#FFF9F3] border border-[#FDE6D2] rounded-xl">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] mb-1 font-armenian">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Նշանակությունը հայերենով.</span>
          </div>
          <p className="text-sm text-[#44403C] font-armenian leading-relaxed">
            {term.meaningArm}
          </p>
        </div>

        {/* Neutral Spanish equivalent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
          <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E7DFD5]">
            <span className="text-[#78716C] block mb-0.5">Չեզոք իսպաներենով (Estándar):</span>
            <span className="font-semibold text-[#1C1917] text-sm">{term.standardSpanish}</span>
          </div>
          <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E7DFD5]">
            <span className="text-[#78716C] block mb-0.5">Իսպաներեն բացատրություն:</span>
            <span className="text-[#44403C] italic">{term.meaningEsp}</span>
          </div>
        </div>

        {/* Example in dialogue */}
        <div className="p-3.5 bg-[#FAF0E6]/50 rounded-xl border border-[#F5DFCC] mb-5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#800020] mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Օրինակ տեսանյութի երկխոսությունից.</span>
          </div>
          <p className="text-sm font-semibold text-[#1C1917]">
            «{term.example}»
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-[#701A24] to-[#DC2626] hover:from-[#500713] hover:to-[#B91C1C] text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md"
        >
          Հասկացա (Entendido)
        </button>
      </div>
    </div>
  );
};
