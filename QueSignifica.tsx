import React, { useState } from 'react';
import { QUE_SIGNIFICA_QUESTIONS } from './activities';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, BookOpen } from 'lucide-react';
import { sounds } from './audio';

interface QueSignificaProps {
  onScoreIncrement: () => void;
}

export const QueSignifica: React.FC<QueSignificaProps> = ({ onScoreIncrement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUE_SIGNIFICA_QUESTIONS[currentIndex];

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
    if (currentIndex < QUE_SIGNIFICA_QUESTIONS.length - 1) {
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
          ¿Qué significa? — Լեքսիկայի արդյունք
        </h3>
        <p className="text-lg font-semibold text-[#1C1917] mb-1">
          {score} / {QUE_SIGNIFICA_QUESTIONS.length} ճիշտ պատասխան
        </p>
        <p className="text-sm text-[#78716C] font-armenian mb-6">
          Դուք սովորեցիք կարևորագույն խոսակցական արտահայտությունները։
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#800020] hover:bg-[#6b001a] text-white font-semibold rounded-xl transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Կրկնել վարժությունը (Repetir)</span>
        </button>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQ.correctIndex;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-[#C2410C] uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          <span>¿Qué significa? — Ի՞նչ է նշանակում (Léxico)</span>
        </span>
        <span className="text-xs font-bold text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7DFD5]">
          {currentIndex + 1} / {QUE_SIGNIFICA_QUESTIONS.length}
        </span>
      </div>

      {/* Target Expression Card: White square box with pure black text */}
      <div className="p-6 bg-white rounded-xl border-2 border-gray-200 mb-6 text-center shadow-xs">
        <span className="text-xs font-bold uppercase tracking-wider text-black block mb-1">
          Իսպաներեն արտահայտություն.
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-black mb-2">
          «{currentQ.expressionEsp}»
        </h3>
        <p className="text-sm font-bold text-black italic">
          Համատեքստը երկխոսությունում՝ «{currentQ.contextSentence}»
        </p>
      </div>

      <div className="text-center mb-3 text-xs font-bold uppercase tracking-wider text-[#78716C] font-armenian">
        Ընտրեք ճիշտ հայերեն իմաստը.
      </div>

      {/* 4 Armenian Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {currentQ.optionsArm.map((armOption, idx) => {
          let btnStyle = 'bg-[#FAF7F2] hover:bg-[#F5EFE6] border-[#E7DFD5] text-[#1C1917]';
          let letterStyle = 'bg-white border-[#E7DFD5] text-[#57534E]';

          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500';
              letterStyle = 'bg-emerald-600 text-white border-emerald-600';
            } else if (idx === selectedOption) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
              letterStyle = 'bg-rose-600 text-white border-rose-600';
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
              className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3.5 cursor-pointer disabled:cursor-default font-armenian ${btnStyle}`}
            >
              <span className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 ${letterStyle}`}>
                {letters[idx]}
              </span>
              <span className="text-base font-semibold leading-relaxed">
                {armOption}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {isAnswered && (
        <div className={`p-4 rounded-xl border mb-6 animate-in fade-in duration-200 ${
          isCorrect ? 'bg-emerald-50/80 border-emerald-300' : 'bg-rose-50/80 border-rose-300'
        }`}>
          <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800">✅ Correcto · Ճիշտ է</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800">❌ Inténtalo otra vez</span>
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
            <span>{currentIndex < QUE_SIGNIFICA_QUESTIONS.length - 1 ? 'Siguiente expresión' : 'Ver resultado'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
