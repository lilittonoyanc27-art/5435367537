import React, { useState } from 'react';
import { SUBTITLES, SubtitleLine, ARGENTINE_GLOSSARY, SlangTerm } from './dialogue';
import { ChevronDown, ChevronUp, Eye, EyeOff, Sparkles, User, HelpCircle } from 'lucide-react';
import { sounds } from './audio';

interface SubtitlesSectionProps {
  onSelectSlang: (term: SlangTerm) => void;
}

export const SubtitlesSection: React.FC<SubtitlesSectionProps> = ({ onSelectSlang }) => {
  // Set of opened subtitle line IDs (initially empty so only Spanish is visible!)
  const [openedLineIds, setOpenedLineIds] = useState<Set<number>>(new Set());
  const [speakerFilter, setSpeakerFilter] = useState<'all' | 'Monita' | 'Martín'>('all');

  const toggleLine = (id: number) => {
    sounds.playClick();
    setOpenedLineIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleShowAll = () => {
    sounds.playClick();
    const allIds = new Set(SUBTITLES.map(s => s.id));
    setOpenedLineIds(allIds);
  };

  const handleHideAll = () => {
    sounds.playClick();
    setOpenedLineIds(new Set());
  };

  const filteredSubtitles = SUBTITLES.filter(sub => {
    if (speakerFilter === 'all') return true;
    return sub.speaker === speakerFilter;
  });

  // Render text highlighting slang terms
  const renderInteractiveSpanish = (line: SubtitleLine) => {
    const text = line.spanish;
    const slangKeys = Object.keys(ARGENTINE_GLOSSARY);

    // Find any slang occurrences in this text
    const foundKeywords = slangKeys.filter(key => {
      const regex = new RegExp(`\\b${key}\\b`, 'i');
      return regex.test(text);
    });

    if (foundKeywords.length === 0) {
      return <span>{text}</span>;
    }

    // Sort keywords by length descending so longer phrases match first
    foundKeywords.sort((a, b) => b.length - a.length);

    // Build regex with capturing groups
    const pattern = new RegExp(`(${foundKeywords.map(k => `\\b${k}\\b`).join('|')})`, 'gi');
    const parts = text.split(pattern);

    return (
      <span className="text-black">
        {parts.map((part, index) => {
          const lower = part.toLowerCase();
          const matchedTerm = ARGENTINE_GLOSSARY[lower];
          if (matchedTerm) {
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  sounds.playClick();
                  onSelectSlang(matchedTerm);
                }}
                title="Սեղմեք՝ արգենտինական այս բառի բացատրությունը տեսնելու համար"
                className="inline-flex items-center gap-0.5 px-1.5 py-0.5 mx-0.5 bg-amber-100 hover:bg-amber-200 text-black border-b-2 border-amber-500 rounded font-bold text-inherit transition-all hover:scale-105 cursor-pointer"
              >
                <span className="text-black font-bold">{part}</span>
                <HelpCircle className="w-3.5 h-3.5 text-[#DC2626] opacity-90" />
              </button>
            );
          }
          return <span key={index} className="text-black font-bold">{part}</span>;
        })}
      </span>
    );
  };

  return (
    <section id="subtitles-section" className="py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Title as requested */}
      <div className="text-center mb-8">
        <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C] bg-clip-text text-transparent mb-2">
          Subtítulos — Ենթագրեր
        </h2>
        <p className="text-sm sm:text-base text-[#1C1917] font-medium max-w-2xl mx-auto mb-1">
          Սուբտիտրերը նախապես իսպաներեն են։ <span className="font-bold text-[#701A24]">Սեղմեք ցանկացած ռեպլիկի վրա</span>՝ հայերեն բնական թարգմանությունը տեսնելու համար։
        </p>
        <p className="text-xs text-[#701A24] font-armenian font-semibold">
          Ընդգծված բառերի վրա սեղմելով՝ կբացվի արգենտինական սլենգի բացատրությունը։
        </p>
      </div>

      {/* Control bar */}
      <div 
        style={{ backgroundColor: '#ffffff' }}
        className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 p-3 bg-white rounded-2xl border-2 border-gray-200 shadow-sm"
      >
        {/* Speaker filter */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-[#701A24] uppercase mr-1">Խոսող.</span>
          <button
            onClick={() => setSpeakerFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              speakerFilter === 'all'
                ? 'bg-gradient-to-r from-[#701A24] to-[#DC2626] text-white shadow-xs'
                : 'text-[#701A24] hover:bg-[#FFE4E6]'
            }`}
          >
            Բոլորը ({SUBTITLES.length})
          </button>
          <button
            onClick={() => setSpeakerFilter('Monita')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              speakerFilter === 'Monita'
                ? 'bg-gradient-to-r from-[#DC2626] to-[#EA580C] text-white shadow-xs'
                : 'text-[#701A24] hover:bg-[#FFE4E6]'
            }`}
          >
            Monita (Ella)
          </button>
          <button
            onClick={() => setSpeakerFilter('Martín')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              speakerFilter === 'Martín'
                ? 'bg-gradient-to-r from-[#701A24] to-[#991B1B] text-white shadow-xs'
                : 'text-[#701A24] hover:bg-[#FFE4E6]'
            }`}
          >
            Martín (Él)
          </button>
        </div>

        {/* Global Reveal / Hide Toggles */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleShowAll}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#C2410C] hover:bg-[#FFF7ED] border border-[#FDBA74] rounded-xl transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Բացել բոլորը</span>
          </button>
          <button
            onClick={handleHideAll}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#78716C] hover:bg-[#FAF7F2] border border-[#FED7AA] rounded-xl transition-colors cursor-pointer"
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>Թաքցնել թարգմանությունները</span>
          </button>
        </div>
      </div>

      {/* Subtitles list */}
      <div className="space-y-4">
        {filteredSubtitles.map((line) => {
          const isOpen = openedLineIds.has(line.id);
          const isMonita = line.speaker === 'Monita';

          return (
            <div
              key={line.id}
              onClick={() => toggleLine(line.id)}
              style={{ backgroundColor: '#ffffff' }}
              className={`rounded-2xl border-2 transition-all cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md ${
                isOpen
                  ? 'border-[#DC2626] ring-2 ring-[#701A24]/20'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <div 
                style={{ backgroundColor: '#ffffff' }}
                className="p-4 sm:p-5 flex items-start gap-3 sm:gap-4 bg-white"
              >
                {/* Speaker Avatar / Badge */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs shadow-xs ${
                    isMonita
                      ? 'bg-gradient-to-br from-[#EA580C] to-[#DC2626] text-white'
                      : 'bg-gradient-to-br from-[#701A24] to-[#991B1B] text-white'
                  }`}
                  title={line.speakerLabel}
                >
                  {isMonita ? 'M' : 'F'}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Speaker name & Timestamp */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-black">
                        {line.speakerLabel}
                      </span>
                      <span className="text-[11px] font-mono text-black bg-gray-100 px-2 py-0.5 rounded border border-gray-300 font-bold">
                        {line.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      {isOpen ? (
                        <span className="text-[11px] font-bold text-[#701A24] flex items-center gap-0.5">
                          Փակել <ChevronUp className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-[#DC2626] flex items-center gap-0.5">
                          Թարգմանել <ChevronDown className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subtitle text area: 100% Solid white square box with pure black text */}
                  <div 
                    style={{ backgroundColor: '#ffffff' }}
                    className="bg-white rounded-xl border-2 border-gray-200 p-4 sm:p-5 my-2 shadow-xs"
                  >
                    {/* Spanish Line (Pure black text on white square box) */}
                    <p className="text-base sm:text-lg font-bold text-black leading-relaxed">
                      {renderInteractiveSpanish(line)}
                    </p>

                    {/* Armenian Translation (Pure black text) */}
                    {isOpen ? (
                      <div className="mt-3.5 pt-3.5 border-t border-gray-200 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-black font-armenian shrink-0 mt-0.5 uppercase tracking-wide">
                            Հայերեն.
                          </span>
                          <p className="text-base sm:text-lg font-bold text-black font-armenian leading-relaxed">
                            {line.armenian}
                          </p>
                        </div>

                        {/* Optional Grammar/Culture tip inside subtitle card */}
                        {line.grammarNote && (
                          <div 
                            style={{ backgroundColor: '#ffffff' }}
                            className="mt-3 text-xs bg-white p-3 rounded-lg border-2 border-gray-200 text-black shadow-2xs"
                          >
                            <span className="font-bold text-black">💡 {line.grammarNote.term}: </span>
                            <span className="font-armenian font-semibold text-black">{line.grammarNote.noteArm}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-[11px] text-gray-500 mt-1.5 font-armenian font-medium">
                        (Սեղմեք՝ հայերեն թարգմանությունը տեսնելու համար)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
