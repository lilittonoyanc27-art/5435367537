import React, { useState } from 'react';
import { RETO_FINAL_QUESTIONS } from './activities';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Sparkles, Film } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from './audio';

interface RetoFinalProps {
  onReturnToVideo: () => void;
  onScoreIncrement: () => void;
}

export const RetoFinal: React.FC<RetoFinalProps> = ({ onReturnToVideo, onScoreIncrement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = RETO_FINAL_QUESTIONS[currentIndex];

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
    if (currentIndex < RETO_FINAL_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      if (score >= 7) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      }
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
    let title = `${score}/10 — ¡Buen intento!`;
    let subtitleArm = 'Դուք կարող եք կրկնել տեսանյութը և նորից փորձել։';

    if (score === 10) {
      title = '10/10 — ¡Excelente! Entendiste muy bien el diálogo.';
      subtitleArm = 'Կատարյալ արդյունք։ Դուք հիանալի հասկացաք ողջ երկխոսությունն ու արգենտինական լեզվական նրբությունները։';
    } else if (score >= 8) {
      title = `${score}/10 — ¡Muy bien!`;
      subtitleArm = 'Շատ լավ արդյունք։ Դուք գերազանց տիրապետում եք երկխոսության բովանդակությանն ու բառապաշարին։';
    } else if (score >= 6) {
      title = `${score}/10 — ¡Bien hecho!`;
      subtitleArm = 'Լավ աշխատանք։ Եվս մեկ անգամ դիտելով տեսանյութը՝ կհասնեք առավելագույն միավորի։';
    }

    return (
      <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] p-8 text-center max-w-2xl mx-auto shadow-xl animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#800020] via-[#C2410C] to-[#EAB308] text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
          <Trophy className="w-10 h-10" />
        </div>

        <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#800020] mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-base text-[#57534E] font-armenian mb-8 max-w-md mx-auto leading-relaxed">
          {subtitleArm}
        </p>

        {/* Buttons as requested: Repetir & Volver al vídeo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#800020] font-semibold text-sm border-2 border-[#800020] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir (Կրկնել թեստը)</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onReturnToVideo();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#800020] to-[#C2410C] hover:from-[#6b001a] hover:to-[#a33508] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Film className="w-4 h-4" />
            <span>Volver al vídeo (Վերադառնալ տեսանյութին)</span>
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQ.correctIndex;

  return (
    <div id="reto-section" style={{ backgroundColor: '#ffffff' }} className="bg-white rounded-2xl border-2 border-gray-200 shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#DC2626]" />
          <div>
            <h3 className="text-xs font-bold text-[#701A24] uppercase tracking-wider">
              Reto final — Վերջնական փորձություն
            </h3>
            <span className="text-[11px] text-black font-semibold">
              Բաժին՝ {currentQ.categoryLabel}
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-black bg-gray-100 px-2.5 py-1 rounded-full border border-gray-300">
          Հարց {currentIndex + 1} / {RETO_FINAL_QUESTIONS.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6 border border-gray-200">
        <div
          className="h-full bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C] transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / RETO_FINAL_QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
        <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-black leading-snug mb-1.5">
          {currentQ.questionEsp}
        </h4>
        <p className="text-base font-bold text-black font-armenian">
          {currentQ.questionArm}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {currentQ.options.map((option, idx) => {
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
              className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3.5 cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              <span className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 ${letterStyle}`}>
                {letters[idx]}
              </span>
              <span className="text-base font-semibold leading-normal">
                {option}
              </span>
            </button>
          );
        })}
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
            <span>{currentIndex < RETO_FINAL_QUESTIONS.length - 1 ? 'Siguiente pregunta' : 'Ver resultado final'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
