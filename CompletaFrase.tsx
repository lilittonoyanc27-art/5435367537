import React, { useState } from 'react';
import { COMPLETA_FRASE_QUESTIONS } from './activities';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, PenTool } from 'lucide-react';
import { sounds } from './audio';

interface CompletaFraseProps {
  onScoreIncrement: () => void;
}

export const CompletaFrase: React.FC<CompletaFraseProps> = ({ onScoreIncrement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = COMPLETA_FRASE_QUESTIONS[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      sounds.playSuccess();
      setScore(prev => prev + 1);
      onScoreIncrement();
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < COMPLETA_FRASE_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] p-8 text-center max-w-2xl mx-auto shadow-md">
        <h3 className="font-serif-display text-2xl font-bold text-[#800020] mb-2">
          Completa la frase — Արդյունք
        </h3>
        <p className="text-lg font-semibold text-[#1C1917] mb-1">
          {score} / {COMPLETA_FRASE_QUESTIONS.length} ճիշտ ավարտված նախադասություն
        </p>
        <p className="text-sm text-[#78716C] font-armenian mb-6">
          Դուք հիանալի տիրապետում եք երկխոսության նախադասությունների կառուցվածքին։
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#800020] hover:bg-[#6b001a] text-white font-semibold rounded-xl transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Կրկնել խաղը (Repetir)</span>
        </button>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQ.correctIndex;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-[#800020] uppercase tracking-wider flex items-center gap-1.5">
          <PenTool className="w-4 h-4 text-[#800020]" />
          <span>Completa la frase — Ավարտի՛ր նախադասությունը</span>
        </span>
        <span className="text-xs font-bold text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7DFD5]">
          {currentIndex + 1} / {COMPLETA_FRASE_QUESTIONS.length}
        </span>
      </div>

      {/* Phrase starter card: White square box with pure black text */}
      <div className="p-6 bg-white rounded-xl border-2 border-gray-200 mb-6 text-center shadow-xs">
        <div className="font-serif-display text-2xl sm:text-3xl font-bold text-black leading-snug mb-2">
          {currentQ.starterEsp}{' '}
          <span className="underline decoration-wavy decoration-[#DC2626] text-[#DC2626] font-extrabold">
            {isAnswered ? currentQ.options[currentQ.correctIndex] : '...'}
          </span>
        </div>
        <p className="text-base font-bold text-black font-armenian">
          {currentQ.starterArm}
        </p>
      </div>

      <div className="text-center mb-3 text-xs font-bold uppercase tracking-wider text-[#78716C]">
        Ընտրեք նախադասության ճիշտ շարունակությունը.
      </div>

      {/* 4 Choices */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {currentQ.options.map((option, idx) => {
          let btnStyle = 'bg-[#FAF7F2] hover:bg-[#F5EFE6] border-[#E7DFD5] text-[#1C1917]';

          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500';
            } else if (idx === selectedOption) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
            } else {
              btnStyle = 'opacity-60 bg-[#FAF7F2] border-[#E7DFD5] text-[#78716C]';
            }
          }

          const letters = ['A', 'B', 'C', 'D'];

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`p-4 rounded-xl border text-center font-bold text-lg transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              <span className="text-xs text-[#78716C] block font-mono font-normal mb-0.5">
                {letters[idx]}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {/* Completed Sentence Banner */}
      {isAnswered && (
        <div className={`p-4 rounded-xl border mb-6 animate-in fade-in duration-200 ${
          isCorrect ? 'bg-emerald-50/80 border-emerald-300' : 'bg-rose-50/80 border-rose-300'
        }`}>
          <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800">✅ ¡Correcto! Ամբողջական նախադասություն.</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800">❌ Ճիշտ շարունակությունն է՝</span>
              </>
            )}
          </div>

          <p className="text-base font-bold text-[#1C1917] mb-1">
            «{currentQ.fullSentenceEsp}»
          </p>
          <p className="text-xs text-[#57534E] font-armenian">
            Հայերեն թարգմանություն՝ «{currentQ.fullSentenceArm}»
          </p>
        </div>
      )}

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-[#800020] hover:bg-[#6b001a] text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
          >
            <span>{currentIndex < COMPLETA_FRASE_QUESTIONS.length - 1 ? 'Siguiente frase' : 'Ver resultado'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
