import React from 'react';
import { 
  HelpCircle, 
  Users, 
  BookOpen, 
  Languages, 
  PenTool, 
  Clock, 
  Lightbulb, 
  MessagesSquare, 
  Globe2, 
  Trophy 
} from 'lucide-react';
import { sounds } from './audio';

export type ActivityId = 
  | 'comprension'
  | 'quien'
  | 'significa'
  | 'traduce'
  | 'completa'
  | 'primero'
  | 'reflexion'
  | 'dialogos'
  | 'argentina'
  | 'reto';

interface ActivityNavProps {
  currentActivity: ActivityId;
  onSelectActivity: (id: ActivityId) => void;
}

interface NavItem {
  id: ActivityId;
  titleEsp: string;
  titleArm: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'comprension',
    titleEsp: 'Comprensión del vídeo',
    titleArm: 'Տեսանյութի ըմբռնում',
    badge: '14 հարց',
    icon: HelpCircle
  },
  {
    id: 'quien',
    titleEsp: '¿Quién lo dijo?',
    titleArm: 'Ո՞վ ասաց դա',
    badge: '10 հարց',
    icon: Users
  },
  {
    id: 'significa',
    titleEsp: '¿Qué significa?',
    titleArm: 'Ի՞նչ է նշանակում (Léxico)',
    badge: '8 հարց',
    icon: BookOpen
  },
  {
    id: 'traduce',
    titleEsp: 'Traduce al español',
    titleArm: 'Թարգմանի՛ր իսպաներեն',
    badge: '14 հարց',
    icon: Languages
  },
  {
    id: 'completa',
    titleEsp: 'Completa la frase',
    titleArm: 'Ավարտի՛ր նախադասությունը',
    badge: '10 հարց',
    icon: PenTool
  },
  {
    id: 'primero',
    titleEsp: '¿Qué pasó primero?',
    titleArm: 'Ի՞նչ տեղի ունեցավ առաջինը',
    badge: '8 հարց',
    icon: Clock
  },
  {
    id: 'reflexion',
    titleEsp: 'Preguntas de reflexión',
    titleArm: 'Իմաստային հարցեր',
    badge: '6 հարց',
    icon: Lightbulb
  },
  {
    id: 'dialogos',
    titleEsp: 'Mini-diálogos',
    titleArm: 'Մինի երկխոսություններ',
    badge: '6 հարց',
    icon: MessagesSquare
  },
  {
    id: 'argentina',
    titleEsp: 'Español de Argentina',
    titleArm: 'Արգենտինական իսպաներեն',
    badge: 'Voseo & Slang',
    icon: Globe2
  },
  {
    id: 'reto',
    titleEsp: 'Reto final',
    titleArm: 'Վերջնական փորձություն',
    badge: '10 հարց',
    icon: Trophy
  }
];

export const ActivityNav: React.FC<ActivityNavProps> = ({
  currentActivity,
  onSelectActivity
}) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#701A24] via-[#DC2626] to-[#EA580C] bg-clip-text text-transparent mb-1">
          Actividades prácticas · Ինտերակտիվ վարժություններ
        </h2>
        <p className="text-sm font-semibold text-[#4C0519] font-armenian">
          Ընտրեք ցանկացած վարժություն կամ անցեք դրանք հերթականությամբ
        </p>
      </div>

      {/* Grid of Activity Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {NAV_ITEMS.map((item) => {
          const isActive = currentActivity === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playClick();
                onSelectActivity(item.id);
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-gradient-to-br from-[#701A24] via-[#DC2626] to-[#EA580C] text-white border-transparent shadow-lg shadow-rose-950/20 ring-2 ring-[#DC2626]'
                  : 'bg-white/98 hover:bg-white text-[#1C1917] border-[#FECDD3] hover:border-[#DC2626] shadow-xs hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-[#701A24]'}`} />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md font-armenian ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#FFF1F2] text-[#701A24] border border-[#FECDD3]'
                  }`}
                >
                  {item.badge}
                </span>
              </div>

              <div>
                <span className={`block text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-[#1C1917]'}`}>
                  {item.titleEsp}
                </span>
                <span className={`block text-[11px] font-armenian mt-0.5 truncate font-medium ${isActive ? 'text-amber-100' : 'text-[#701A24]'}`}>
                  {item.titleArm}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
