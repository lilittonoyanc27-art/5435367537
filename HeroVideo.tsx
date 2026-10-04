import React from 'react';
import { ArrowDown, Play, Heart, Coffee } from 'lucide-react';
import { sounds } from './audio';

interface HeroVideoProps {
  onStartActivities: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onStartActivities }) => {
  return (
    <section id="video-section" className="pt-8 pb-12 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Title & Subtitle as requested */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF1F2] border border-[#FECDD3] rounded-full text-xs font-bold text-[#701A24] mb-3 shadow-2xs">
          <Heart className="w-3.5 h-3.5 fill-[#DC2626] text-[#DC2626]" />
          <span>Diálogo real: Sos mi vida (Martín y la Monita) · Argentina</span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C] bg-clip-text text-transparent tracking-tight leading-tight mb-3">
          Aprende español con un diálogo
        </h1>
        
        <p className="text-lg sm:text-xl font-bold text-[#1C1917] mb-1.5">
          Mira el vídeo, entiende la conversación y practica.
        </p>

        <p className="text-sm sm:text-base font-medium text-[#4C0519] font-armenian">
          Դիտի՛ր տեսանյութը, հասկացի՛ր երկխոսությունը և կատարի՛ր վարժությունները։
        </p>
      </div>

      {/* Video Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FECDD3] bg-black aspect-video max-w-4xl mx-auto ring-4 ring-[#701A24]/10 group">
        <iframe
          src="https://www.youtube-nocookie.com/embed/UxBy3E-3xWs?rel=0&modestbranding=1"
          title="Aprende español con un diálogo - Martín y Monita"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Video Info Card & Primary Action */}
      <div className="mt-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-white/98 backdrop-blur-sm rounded-2xl border border-[#FECDD3] shadow-lg shadow-rose-950/5">
        <div className="flex items-center gap-3 text-sm text-[#57534E]">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6] flex items-center justify-center shrink-0 border border-[#FECDD3] shadow-xs">
            <Coffee className="w-5 h-5 text-[#701A24]" />
          </div>
          <div>
            <div className="font-bold text-[#1C1917] flex items-center gap-2">
              <span>Տեսարան. «Կապուչինոն և անսպասելի առաջարկը»</span>
            </div>
            <p className="text-xs text-[#701A24] font-medium mt-0.5">
              Տևողություն՝ 1:15 րոպե · Խոսակցական արգենտինական իսպաներեն (Voseo)
            </p>
          </div>
        </div>

        {/* The requested "Empezar actividades" button */}
        <button
          onClick={() => {
            sounds.playClick();
            onStartActivities();
          }}
          className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C] hover:from-[#500713] hover:via-[#B91C1C] hover:to-[#C2410C] text-white font-bold text-base rounded-xl shadow-md hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Empezar actividades</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>

      {/* Quick context note */}
      <div className="mt-4 max-w-4xl mx-auto px-2 text-xs text-[#78716C] flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span>💡 <b>Խորհուրդ.</b> Ուշադրություն դարձրեք «vos querés», «pará» և «pucho» բառերին:</span>
        <span>•</span>
        <span>Ստորև կարող եք կարդալ բոլոր սուբտիտրերը հայերեն թարգմանությամբ:</span>
      </div>
    </section>
  );
};
