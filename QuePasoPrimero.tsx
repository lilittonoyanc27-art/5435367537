import React, { useState } from 'react';
import { QUE_PASO_PRIMERO_QUESTIONS } from './activities';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Clock } from 'lucide-react';
import { sounds } from './audio';

interface QuePasoPrimeroProps {
  onScoreIncrement: () => void;
}

export const QuePasoPrimero: React.FC<QuePasoPrimeroProps> = ({ onScoreIncrement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUE_PASO_PRIMERO_QUESTIONS[currentIndex];

  const handleSelect = (choice: 'A' | 'B') => {
    if (isAnswered) return;
    setSelectedOption(choice);
    setIsAnswered(true);

    if (choice === currentQ.correctOption) {
      sounds.playSuccess();
      setScore(prev => prev + 1);
      onScoreIncrement();
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < QUE_PASO_PRIMERO_QUESTIONS.length - 1) {
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
          ¿Qué pasó primero? — Արդյունք
        </h3>
        <p className="text-lg font-semibold text-[#1C1917] mb-1">
          {score} / {QUE_PASO_PRIMERO_QUESTIONS.length} ճիշտ որոշված հերթականություն
        </p>
        <p className="text-sm text-[#78716C] font-armenian mb-6">
          Դուք հիանալի պատկերացնում եք տեսանյութի իրադարձությունների ժամանակագրությունը։
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

  const isCorrect = selectedOption === currentQ.correctOption;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-[#C2410C] uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#C2410C]" />
          <span>¿Qué pasó primero? — Ի՞նչ տեղի ունեցավ առաջինը</span>
        </span>
        <span className="text-xs font-bold text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7DFD5]">
          {currentIndex + 1} / {QUE_PASO_PRIMERO_QUESTIONS.length}
        </span>
      </div>

      {/* Question context */}
      <div className="mb-6 text-center">
        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1C1917] mb-1 font-armenian">
          {currentQ.situationArm}
        </h3>
        <p className="text-xs text-[#78716C] uppercase tracking-wider font-semibold">
          Համեմատեք երկու իրադարձությունները և ընտրեք այն, որն ավելի շուտ է եղել.
        </p>
      </div>

      {/* Event A vs Event B Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Option A */}
        <button
          onClick={() => handleSelect('A')}
          disabled={isAnswered}
          className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer disabled:cursor-default ${
            isAnswered
              ? currentQ.correctOption === 'A'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500'
                : selectedOption === 'A'
                ? 'bg-rose-50 border-rose-400 opacity-80'
                : 'opacity-50 border-[#E7DFD5] bg-[#FAF7F2]'
              : 'border-[#E7DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#800020] hover:shadow-md'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-[#800020] text-white flex items-center justify-center font-bold text-xs">
              A
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Իրադարձություն A
            </span>
          </div>
          <p className="text-base font-bold text-[#1C1917] mb-1">
            {currentQ.optionA.esp}
          </p>
          <p className="text-xs font-medium text-[#57534E] font-armenian">
            {currentQ.optionA.arm}
          </p>
        </button>

        {/* Option B */}
        <button
          onClick={() => handleSelect('B')}
          disabled={isAnswered}
          className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer disabled:cursor-default ${
            isAnswered
              ? currentQ.correctOption === 'B'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500'
                : selectedOption === 'B'
                ? 'bg-rose-50 border-rose-400 opacity-80'
                : 'opacity-50 border-[#E7DFD5] bg-[#FAF7F2]'
              : 'border-[#E7DFD5] bg-[#FAF7F2] hover:bg-white hover:border-[#C2410C] hover:shadow-md'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-[#C2410C] text-white flex items-center justify-center font-bold text-xs">
              B
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              Իրադարձություն B
            </span>
          </div>
          <p className="text-base font-bold text-[#1C1917] mb-1">
            {currentQ.optionB.esp}
          </p>
          <p className="text-xs font-medium text-[#57534E] font-armenian">
            {currentQ.optionB.arm}
          </p>
        </button>
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
                <span className="text-emerald-800">
                  ✅ Ճիշտ է! Առաջինը տեղի է ունեցել տարբերակ {currentQ.correctOption}-ը
                </span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span className="text-rose-800">
                  ❌ Սխալ ընտրություն. առաջինը տեղի է ունեցել տարբերակ {currentQ.correctOption}-ը
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
            <span>{currentIndex < QUE_PASO_PRIMERO_QUESTIONS.length - 1 ? 'Siguiente par' : 'Ver resultado'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
