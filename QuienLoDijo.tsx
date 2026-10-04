import React, { useState } from 'react';
import { QUIEN_LO_DIJO_QUESTIONS } from './activities';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Quote, User } from 'lucide-react';
import { sounds } from './audio';

interface QuienLoDijoProps {
  onScoreIncrement: () => void;
}

export const QuienLoDijo: React.FC<QuienLoDijoProps> = ({ onScoreIncrement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSpeaker, setSelectedSpeaker] = useState<'Martín' | 'Monita' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIEN_LO_DIJO_QUESTIONS[currentIndex];

  const handleSelectSpeaker = (speaker: 'Martín' | 'Monita') => {
    if (isAnswered) return;
    setSelectedSpeaker(speaker);
    setIsAnswered(true);

    if (speaker === currentQ.correctSpeaker) {
      sounds.playSuccess();
      setScore(prev => prev + 1);
      onScoreIncrement();
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < QUIEN_LO_DIJO_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedSpeaker(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedSpeaker(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] p-8 text-center max-w-2xl mx-auto shadow-md">
        <h3 className="font-serif-display text-2xl font-bold text-[#800020] mb-2">
          ¿Quién lo dijo? — Արդյունք
        </h3>
        <p className="text-lg font-semibold text-[#1C1917] mb-1">
          {score} / {QUIEN_LO_DIJO_QUESTIONS.length} ճիշտ պատասխան
        </p>
        <p className="text-sm text-[#78716C] font-armenian mb-6">
          Դուք շատ լավ հիշում եք կերպարների ռեպլիկները։
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

  const isCorrect = selectedSpeaker === currentQ.correctSpeaker;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-[#800020] uppercase tracking-wider">
          ¿Quién lo dijo? — Ո՞վ ասաց դա
        </span>
        <span className="text-xs font-bold text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7DFD5]">
          {currentIndex + 1} / {QUIEN_LO_DIJO_QUESTIONS.length}
        </span>
      </div>

      {/* Quote Display Card: White square box with pure black text */}
      <div className="relative p-6 sm:p-8 bg-white rounded-xl border-2 border-gray-200 mb-8 text-center shadow-xs">
        <Quote className="w-10 h-10 text-gray-300 mx-auto mb-2" />
        <blockquote className="font-serif-display text-xl sm:text-2xl md:text-3xl font-bold text-black leading-snug mb-3">
          “{currentQ.quoteEsp}”
        </blockquote>
        <p className="text-base font-bold text-black font-armenian">
          «{currentQ.quoteArm}»
        </p>
      </div>

      <div className="text-center mb-4 text-xs font-bold uppercase tracking-wider text-[#78716C]">
        Ընտրեք, թե ով է ասում այս արտահայտությունը.
      </div>

      {/* Two tactile buttons: Él vs Ella */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Martín (Él) */}
        <button
          onClick={() => handleSelectSpeaker('Martín')}
          disabled={isAnswered}
          className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer disabled:cursor-default ${
            isAnswered
              ? currentQ.correctSpeaker === 'Martín'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500'
                : selectedSpeaker === 'Martín'
                ? 'bg-rose-50 border-rose-400 opacity-80'
                : 'opacity-50 border-[#E7DFD5] bg-[#FAF7F2]'
              : 'border-[#E7DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#800020] hover:shadow-md'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#800020] to-[#5C0017] text-white flex items-center justify-center font-bold text-lg shadow-xs">
            M
          </div>
          <div className="text-center">
            <span className="font-serif-display font-bold text-lg text-[#1C1917] block">
              Él (Martín)
            </span>
            <span className="text-xs text-[#78716C] font-armenian">
              Մարտին Կեսադա (նա)
            </span>
          </div>
        </button>

        {/* Monita (Ella) */}
        <button
          onClick={() => handleSelectSpeaker('Monita')}
          disabled={isAnswered}
          className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer disabled:cursor-default ${
            isAnswered
              ? currentQ.correctSpeaker === 'Monita'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500'
                : selectedSpeaker === 'Monita'
                ? 'bg-rose-50 border-rose-400 opacity-80'
                : 'opacity-50 border-[#E7DFD5] bg-[#FAF7F2]'
              : 'border-[#E7DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#C2410C] hover:shadow-md'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white flex items-center justify-center font-bold text-lg shadow-xs">
            F
          </div>
          <div className="text-center">
            <span className="font-serif-display font-bold text-lg text-[#1C1917] block">
              Ella (Monita)
            </span>
            <span className="text-xs text-[#78716C] font-armenian">
              Մոնիտա / Էսպերանսա (նա)
            </span>
          </div>
        </button>
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <div className={`p-4 rounded-xl border mb-6 animate-in fade-in duration-200 ${
          isCorrect ? 'bg-emerald-50/80 border-emerald-300' : 'bg-rose-50/80 border-rose-300'
        }`}>
          <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800">
                  ✅ Correcto · Ճիշտ է! Ասել է {currentQ.correctSpeaker === 'Martín' ? 'Él (Martín-ը)' : 'Ella (Monita-ն)'}
                </span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800">
                  ❌ Ոչ, ճիշտ պատասխանն էր՝ {currentQ.correctSpeaker === 'Martín' ? 'Él (Martín-ը)' : 'Ella (Monita-ն)'}
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-[#1C1917] mb-1">
            {currentQ.explanationEsp}
          </p>
          <p className="text-xs text-[#57534E] font-armenian">
            {currentQ.explanationArm}
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
            <span>{currentIndex < QUIEN_LO_DIJO_QUESTIONS.length - 1 ? 'Siguiente frase' : 'Ver resultado'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
