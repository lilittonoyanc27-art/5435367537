import React, { useState } from 'react';
import { PREGUNTAS_REFLEXION } from './activities';
import { ArrowRight, RotateCcw, Lightbulb, MessageSquareQuote } from 'lucide-react';
import { sounds } from './audio';

export const ReflexionQuestions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = PREGUNTAS_REFLEXION[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    sounds.playSuccess();
    setSelectedIndex(idx);
    setIsAnswered(true);
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex < PREGUNTAS_REFLEXION.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedIndex(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] p-8 text-center max-w-2xl mx-auto shadow-md">
        <div className="w-16 h-16 rounded-full bg-[#FAF0E6] text-[#800020] flex items-center justify-center mx-auto mb-4">
          <Lightbulb className="w-8 h-8 text-[#C2410C]" />
        </div>
        <h3 className="font-serif-display text-2xl font-bold text-[#800020] mb-2">
          ¡Reflexión completada!
        </h3>
        <p className="text-sm text-[#57534E] font-armenian mb-6">
          Դուք դիտարկեցիք տեսարանի բոլոր հոգեբանական նրբերանգներն ու կերպարների շարժառիթները։
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#800020] hover:bg-[#6b001a] text-white font-semibold rounded-xl transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Կրկնել խորհրդածությունը (Repetir)</span>
        </button>
      </div>
    );
  }

  const selectedOpt = selectedIndex !== null ? currentQ.options[selectedIndex] : null;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E7DFD5] shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-[#800020] uppercase tracking-wider flex items-center gap-1.5">
          <MessageSquareQuote className="w-4 h-4 text-[#800020]" />
          <span>Preguntas de reflexión — Իմաստային հարցեր</span>
        </span>
        <span className="text-xs font-bold text-[#78716C] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E7DFD5]">
          {currentIndex + 1} / {PREGUNTAS_REFLEXION.length}
        </span>
      </div>

      <div className="p-3 bg-[#FFF9F3] border border-[#FDE6D2] rounded-xl text-xs text-[#C2410C] font-armenian mb-6">
        💡 Այս բաժնում չկան «սխալ» պատասխաններ։ Յուրաքանչյուր կարծիք ունի իր հիմնավորումը։ Ընտրեք ձեր տեսակետը։
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug mb-1.5">
          {currentQ.questionEsp}
        </h3>
        <p className="text-sm sm:text-base font-medium text-[#781229] font-armenian">
          {currentQ.questionArm}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {currentQ.options.map((option, idx) => {
          let btnStyle = 'bg-[#FAF7F2] hover:bg-[#F5EFE6] border-[#E7DFD5] text-[#1C1917]';
          let letterStyle = 'bg-white border-[#E7DFD5] text-[#57534E]';

          if (isAnswered) {
            if (idx === selectedIndex) {
              btnStyle = 'bg-[#FDF2F4] border-[#800020] text-[#800020] ring-1 ring-[#800020]';
              letterStyle = 'bg-[#800020] text-white border-[#800020]';
            } else {
              btnStyle = 'opacity-65 bg-[#FAF7F2] border-[#E7DFD5] text-[#78716C]';
            }
          }

          return (
            <button
              key={option.letter}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              <span className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${letterStyle}`}>
                {option.letter}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-base font-semibold leading-snug mb-1">
                  {option.esp}
                </div>
                <div className="text-xs font-normal text-[#57534E] font-armenian leading-relaxed">
                  {option.arm}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Constructive feedback requested: "Buena respuesta. Ahora compara con otra posibilidad." */}
      {isAnswered && selectedOpt && (
        <div className="p-5 rounded-xl border border-amber-300 bg-amber-50/80 mb-6 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 mb-2 font-bold text-sm text-amber-900">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <span>Buena respuesta. Ahora compara con otra posibilidad.</span>
          </div>

          <div className="space-y-2 text-sm text-[#1C1917]">
            <p className="font-semibold text-[#800020]">
              Ձեր ընտրած տեսակետի վերլուծությունը.
            </p>
            <p className="italic text-[#44403C]">
              {selectedOpt.insightEsp}
            </p>
            <p className="text-xs text-[#57534E] font-armenian">
              {selectedOpt.insightArm}
            </p>
          </div>
        </div>
      )}

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-[#800020] hover:bg-[#6b001a] text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
          >
            <span>{currentIndex < PREGUNTAS_REFLEXION.length - 1 ? 'Siguiente pregunta' : 'Finalizar reflexión'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
