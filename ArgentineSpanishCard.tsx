import React, { useState } from 'react';
import { Sparkles, Check, ChevronRight } from 'lucide-react';
import { sounds } from './audio';

export const ArgentineSpanishCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voseo' | 'lexico' | 'fonetica'>('voseo');

  return (
    <section id="argentina-section" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="bg-white/98 backdrop-blur-sm rounded-2xl border-2 border-[#FECDD3] shadow-xl shadow-rose-950/10 overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C] p-6 text-white">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
            <span>🇦🇷</span>
            <span>Español rioplatense · Buenos Aires</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold mb-2 text-white">
            Español de Argentina — Արգենտինական իսպաներեն
          </h2>
          <p className="text-sm sm:text-base text-rose-100 font-armenian font-medium">
            Իսպաներենի առանձնահատկությունները տեսանյութում. voseo, լունֆարդո ժարգոն և արտասանություն։
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#FECDD3] bg-[#FFF5F2]">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('voseo');
            }}
            className={`flex-1 py-3 px-4 text-center font-bold text-xs sm:text-sm transition-colors cursor-pointer border-b-2 ${
              activeTab === 'voseo'
                ? 'border-[#701A24] text-[#701A24] bg-white'
                : 'border-transparent text-[#701A24]/75 hover:text-[#DC2626]'
            }`}
          >
            1. El Voseo (vos փոխարեն tú)
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('lexico');
            }}
            className={`flex-1 py-3 px-4 text-center font-bold text-xs sm:text-sm transition-colors cursor-pointer border-b-2 ${
              activeTab === 'lexico'
                ? 'border-[#DC2626] text-[#DC2626] bg-white'
                : 'border-transparent text-[#701A24]/75 hover:text-[#DC2626]'
            }`}
          >
            2. Բառապաշար (Pará, Pucho, Re mal)
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('fonetica');
            }}
            className={`flex-1 py-3 px-4 text-center font-bold text-xs sm:text-sm transition-colors cursor-pointer border-b-2 ${
              activeTab === 'fonetica'
                ? 'border-[#EA580C] text-[#EA580C] bg-white'
                : 'border-transparent text-[#701A24]/75 hover:text-[#DC2626]'
            }`}
          >
            3. Արտասանություն (Yeísmo)
          </button>
        </div>

        {/* Tab 1: Voseo */}
        {activeTab === 'voseo' && (
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FBECEF] text-[#800020] text-xs flex items-center justify-center font-bold">1</span>
                <span>«vos» փոխարեն «tú» (Դերանուն և բայական խոնարհում)</span>
              </h3>
              <p className="text-sm text-[#57534E] font-armenian leading-relaxed">
                Արգենտինայում (և Ուրուգվայում) ընկերական և մտերմիկ միջավայրում «tú»-ի փոխարեն օգտագործվում է <b>«vos»</b> դերանունը։ Բայերի ներկա ժամանակի շեշտը ընկնում է վերջին վանկի վրա։
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E7DFD5]">
                <div className="text-xs text-[#78716C] mb-1">Չեզոք (España / México):</div>
                <div className="font-mono text-sm text-[#78716C] line-through">tú quieres</div>
                <div className="mt-2 text-xs font-semibold text-[#800020]">Արգենտինական (Voseo):</div>
                <div className="font-bold text-base text-[#800020]">vos querés</div>
                <div className="text-xs text-[#57534E] font-armenian mt-1">դու ուզում ես</div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E7DFD5]">
                <div className="text-xs text-[#78716C] mb-1">Չեզոք (España / México):</div>
                <div className="font-mono text-sm text-[#78716C] line-through">tú puedes</div>
                <div className="mt-2 text-xs font-semibold text-[#800020]">Արգենտինական (Voseo):</div>
                <div className="font-bold text-base text-[#800020]">vos podés</div>
                <div className="text-xs text-[#57534E] font-armenian mt-1">դու կարող ես</div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E7DFD5]">
                <div className="text-xs text-[#78716C] mb-1">Չեզոք (España / México):</div>
                <div className="font-mono text-sm text-[#78716C] line-through">tú tienes</div>
                <div className="mt-2 text-xs font-semibold text-[#800020]">Արգենտինական (Voseo):</div>
                <div className="font-bold text-base text-[#800020]">vos tenés</div>
                <div className="text-xs text-[#57534E] font-armenian mt-1">դու ունես</div>
              </div>
            </div>

            {/* Video Climax highlight */}
            <div className="p-5 bg-gradient-to-r from-[#FFF5F6] to-[#FFF9F3] rounded-2xl border-2 border-[#F3C4CC]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#800020] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#800020]" />
                <span>Տեսանյութի գլխավոր առաջարկը</span>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#800020]">
                    ¿Te querés casar conmigo?
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#800020] text-white rounded-md w-fit">
                    🇦🇷 Argentina (Voseo)
                  </span>
                </div>
                <div className="text-xs text-[#78716C]">
                  Չեզոք իսպաներենում՝ <span className="font-mono font-semibold text-[#1C1917]">¿Te quieres casar conmigo?</span>
                </div>
                <div className="text-sm font-semibold text-[#781229] font-armenian pt-1">
                  Հայերեն թարգմանություն. «Կամուսնանա՞ս ինձ հետ (կուզե՞ս ամուսնանալ ինձ հետ)»
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Lexicon */}
        {activeTab === 'lexico' && (
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#1C1917] mb-2">
              Հատուկ խոսակցական բառեր տեսանյութից
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pará */}
              <div className="p-4 rounded-xl border border-[#E7DFD5] bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-lg text-[#800020]">Pará</span>
                  <span className="text-xs text-[#78716C] bg-white px-2 py-0.5 rounded border border-[#E7DFD5]">
                    Հրամայական vos
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1C1917] font-armenian mb-1">
                  Սպասի՛ր / կա՛նգ առ (подожди / остановись)
                </p>
                <p className="text-xs text-[#57534E] font-armenian">
                  «Parar» (կանգնել) բայի հրամայականն է՝ վերջին «-á» վանկի շեշտադրմամբ։ Օրինակ՝ «Eh, morita, pará, pará»։
                </p>
              </div>

              {/* Pucho */}
              <div className="p-4 rounded-xl border border-[#E7DFD5] bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-lg text-[#C2410C]">Pucho</span>
                  <span className="text-xs text-[#78716C] bg-white px-2 py-0.5 rounded border border-[#E7DFD5]">
                    Լունֆարդո ժարգոն
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1C1917] font-armenian mb-1">
                  Սիգարետ / ծխախոտ (сигарета)
                </p>
                <p className="text-xs text-[#57534E] font-armenian">
                  Արգենտինայում «darle al pucho» նշանակում է սկսել ծխել։ Օրինակ՝ «que no se le dé por el pucho y la bebida»։
                </p>
              </div>

              {/* Re mal */}
              <div className="p-4 rounded-xl border border-[#E7DFD5] bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-lg text-[#800020]">Re mal</span>
                  <span className="text-xs text-[#78716C] bg-white px-2 py-0.5 rounded border border-[#E7DFD5]">
                    Ուժեղացուցիչ «re-»
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1C1917] font-armenian mb-1">
                  Շատ վատ / ահավոր վատ (очень плохо)
                </p>
                <p className="text-xs text-[#57534E] font-armenian">
                  «Re-» նախածանցը Արգենտինայում նշանակում է «շատ / անչափ» (re lindo = շատ գեղեցիկ, re mal = շատ վատ)։
                </p>
              </div>

              {/* Agarrada */}
              <div className="p-4 rounded-xl border border-[#E7DFD5] bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-lg text-[#C2410C]">Agarrada</span>
                  <span className="text-xs text-[#78716C] bg-white px-2 py-0.5 rounded border border-[#E7DFD5]">
                    Խոսակցական
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1C1917] font-armenian mb-1">
                  Սուր վիճաբանություն / ընդհարում (ссора, стычка)
                </p>
                <p className="text-xs text-[#57534E] font-armenian">
                  Բուռն լեզվակռիվ զուգընկերների միջև։ Օրինակ՝ «Tuve una agarrada muy fuerte con Constance»։
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Phonetics */}
        {activeTab === 'fonetica' && (
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#1C1917] mb-2">
              Yeísmo rehilado (Արգենտինական յուրահատուկ արտասանություն)
            </h3>
            <p className="text-sm text-[#57534E] font-armenian leading-relaxed">
              Բուենոս Այրեսում և Ռիո դե լա Պլատայի տարածաշրջանում <b>«ll»</b> և <b>«y»</b> տառերը արտասանվում են ոչ թե «յ», այլ փափուկ «ժ» կամ «շ» հնչյունով (ինչպես ֆրանսերեն «j»-ն կամ անգլերեն «sh»-ն)։
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7DFD5] flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-[#1C1917]">Llegó el cappuccino</span>
                  <div className="text-xs text-[#78716C] font-mono">Լսվում է՝ [Ժեգո՛ / Շեգո՛ էլ կապուչինո]</div>
                </div>
                <span className="text-xs px-2 py-1 bg-white rounded border border-[#E7DFD5] font-armenian">ll → ժ / շ</span>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E7DFD5] flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-[#1C1917]">Yo no tomo y no pienso...</span>
                  <div className="text-xs text-[#78716C] font-mono">Լսվում է՝ [Ժո / Շո նո տոմո...]</div>
                </div>
                <span className="text-xs px-2 py-1 bg-white rounded border border-[#E7DFD5] font-armenian">yo → ժո / շո</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
