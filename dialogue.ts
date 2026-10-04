export interface SubtitleLine {
  id: number;
  time: string;
  timeSeconds: number;
  speaker: 'Martín' | 'Monita';
  speakerLabel: string;
  spanish: string;
  armenian: string;
  colloquialTerms?: string[];
  grammarNote?: {
    term: string;
    noteArm: string;
    noteEsp: string;
  };
}

export interface SlangTerm {
  word: string;
  literal: string;
  meaningArm: string;
  meaningEsp: string;
  standardSpanish: string;
  example: string;
}

export const ARGENTINE_GLOSSARY: Record<string, SlangTerm> = {
  'vos': {
    word: 'vos',
    literal: 'դու (արգենտինական դերանուն)',
    meaningArm: 'Արգենտինայում (և Ուրուգվայում) «tú»-ի փոխարեն գործածվում է «vos» (voseo): Ունի բայերի սեփական խոնարհում (tú quieres → vos querés, tú hablas → vos hablás):',
    meaningEsp: 'Pronombre de segunda persona singular que reemplaza a "tú" en el español rioplatense.',
    standardSpanish: 'tú',
    example: 'Vos curás de todos los males (Այո՛, իսկ դու բուժում ես բոլոր ցավերից):',
  },
  'querés': {
    word: 'querés',
    literal: 'ուզում ես (խոնարհում vos-ի համար)',
    meaningArm: '«Querer» բայի խոնարհումը «vos»-ով (շեշտը վերջին վանկի վրա)։ Չեզոք իսպաներենում՝ «tú quieres»։',
    meaningEsp: 'Forma verbal del voseo para la segunda persona singular de "querer". Equivalente a "tú quieres".',
    standardSpanish: 'quieres (tú quieres)',
    example: '¿Te querés casar conmigo? (Կուզե՞ս ամուսնանալ ինձ հետ):',
  },
  'pará': {
    word: 'pará',
    literal: 'սպասի՛ր, կանգնի՛ր (հրամայական vos-ի համար)',
    meaningArm: '«Parar» (կանգնել/դադարել) բայի հրամայական ձևը՝ շեշտը վերջին վանկի վրա։ Նշանակում է՝ «սպասի՛ր», «կա՛նգ առ»։',
    meaningEsp: 'Forma imperativa del verbo parar para "vos" (con acento en la última sílaba). Significa "espera" o "detente".',
    standardSpanish: 'para / espera (tú)',
    example: 'Pará, pará, pará... te quiero decir una cosa (Սպասի՛ր, սպասի՛ր... ուզում եմ քեզ մի բան ասել):',
  },
  'pucho': {
    word: 'pucho',
    literal: 'սիգարետ / ծխախոտ',
    meaningArm: 'Արգենտինական լունֆարդոյում (խոսակցական ժարգոն)՝ սիգարետ կամ ծխուկ։ «Darle al pucho» նշանակում է սկսել ծխել։',
    meaningEsp: 'Palabra coloquial rioplatense para referirse al cigarrillo o tabaco.',
    standardSpanish: 'cigarrillo / tabaco',
    example: 'No se le dé por el pucho y la bebida (Մտքով չանցնի ծխելուն ու խմելուն տրվել):',
  },
  're mal': {
    word: 're mal',
    literal: 'շատ վատ / ահավոր վատ',
    meaningArm: '«Re-» նախածանցը արգենտինական խոսակցականում նշանակում է «շատ», «անչափ» (re lindo, re difícil, re mal): Այստեղ՝ «ահավոր վատ/անհանգիստ զգացի»։',
    meaningEsp: 'El prefijo "re-" intensifica al adjetivo o adverbio ("muy", "súper"). "Re mal" significa "muy mal" o sumamente afectado.',
    standardSpanish: 'muy mal / terriblemente preocupado',
    example: 'Me quedé re mal (Շատ վատ զգացի / սարսափելի անհանգստացա):',
  },
  'agarrada': {
    word: 'agarrada',
    literal: 'վիճաբանություն / ընդհարում / կռիվ',
    meaningArm: 'Արգենտինական խոսակցական արտահայտություն՝ բուռն լեզվակռիվ, բախում կամ վիճաբանություն (մասնավորապես զուգընկերների միջև)։',
    meaningEsp: 'Discusión fuerte, pelea o altercado verbal entre dos personas.',
    standardSpanish: 'discusión fuerte / pelea',
    example: 'Tuve una agarrada muy fuerte con Constance (Շատ ուժեղ վիճաբանություն ունեցա Կոնստանսի հետ):',
  },
  'moría por': {
    word: 'moría por...',
    literal: 'մեռնում էի ... համար (անչափ շատ էի ցանկանում)',
    meaningArm: 'Իսպաներեն հուզական դարձվածք՝ «ինչ-որ բան չափազանց շատ ուզել կամ կարոտել» (անգլերեն "dying for a coffee"):',
    meaningEsp: 'Expresión afectiva o enfática que denota desear intensamente algo.',
    standardSpanish: 'deseaba con muchas ansias / tenía muchas ganas de',
    example: 'Moría por un café (Մեռնում էի սուրճի համար / չափազանց շատ սուրճ էի ուզում):',
  },
  'morita': {
    word: 'morita',
    literal: 'թուխիկս / իմ սիրելիս (փաղաքշական)',
    meaningArm: 'Մարտինի կողմից Մոնիտային տրված քնքուշ մականունը (նրա մականունը՝ La Monita, որից նաև Morita փաղաքշականը)։',
    meaningEsp: 'Apodo cariñoso y diminutivo que Martín le da a Esperanza (la Monita).',
    standardSpanish: 'morenita / querida mía',
    example: 'Eh, morita, pará, pará (Է՜յ, մորիտա՛, սպասի՛ր, սպասի՛ր):',
  },
  'nenita': {
    word: 'nenita',
    literal: 'փոքրիկս / աղջնակս (քնքշանք)',
    meaningArm: 'Քնքուշ, մտերմիկ դիմելաձև արգենտինական իսպաներենում՝ սիրելի կնոջը կամ աղջկան։',
    meaningEsp: 'Tratamiento cariñoso para expresar ternura hacia la mujer amada.',
    standardSpanish: 'pequeña mía / cariño',
    example: 'Nenita... ¿Te querés casar conmigo? (Փոքրի՛կս... Կամուսնանա՞ս ինձ հետ):',
  },
  'office': {
    word: 'office',
    literal: 'գրասենյակային խոհանոց / ծառայողական հատված',
    meaningArm: 'Արգենտինական գրասենյակներում «office» (կամ «el office») անվանում են աշխատակիցների համար նախատեսված թեյի/սուրճի և հանգստի փոքրիկ սենյակը։',
    meaningEsp: 'Zona de descanso o pequeña cocina de una oficina donde se prepara café o té.',
    standardSpanish: 'cocina de oficina / área de café',
    example: 'Me voy para el office (Գնում եմ գրասենյակի խոհանոց):',
  },
  'curás': {
    word: 'curás',
    literal: 'բուժում ես (vos-ով խոնարհում)',
    meaningArm: '«Curar» (բուժել) բայի voseo ձևը (vos curás՝ tú curas-ի փոխարեն)։',
    meaningEsp: 'Forma del verbo curar conjugada para vos (acento en la última sílaba).',
    standardSpanish: 'curas (tú)',
    example: 'Vos curás de todos los males (Այո՛, իսկ դու բուժում ես բոլոր ցավերից):',
  }
};

export const SUBTITLES: SubtitleLine[] = [
  {
    id: 1,
    time: '0:07',
    timeSeconds: 7,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Hola, hola, buen día. Llegó el cappuccino.',
    armenian: 'Ողջո՜ւյն, բարի լույս։ Կապուչինոն եկավ։',
  },
  {
    id: 2,
    time: '0:10',
    timeSeconds: 10,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Gracias, bonita. Moría por un café.',
    armenian: 'Շնորհակալ եմ, գեղեցկուհիս։ Մեռնում էի սուրճի համար (չափազանց շատ էի ուզում)։',
    colloquialTerms: ['moría por'],
    grammarNote: {
      term: 'moría por',
      noteArm: '«Morir por...» նշանակում է ինչ-որ բան չափազանց շատ տենչալ, կարոտել կամ ուզել։',
      noteEsp: 'Desear intensamente algo con muchas ganas.'
    }
  },
  {
    id: 3,
    time: '0:13',
    timeSeconds: 13,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¿Y por verme, a mí no moría?',
    armenian: 'Իսկ ինձ տեսնելո՞ւ համար... ինձ համար չէի՞ք մեռնում (չէի՞ք կարոտել)։',
    colloquialTerms: ['moría por'],
    grammarNote: {
      term: '¿a mí no moría?',
      noteArm: 'Մոնիտան Մարտինին դիմում է հարգալից «Դուք»-ով (usted), այդ պատճառով ասում է «moría», ոչ թե «morías»։',
      noteEsp: 'Tratamiento de respeto indirecto (usted).'
    }
  },
  {
    id: 4,
    time: '0:15',
    timeSeconds: 15,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Siempre.',
    armenian: 'Միշտ։',
  },
  {
    id: 5,
    time: '0:17',
    timeSeconds: 17,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¿Cómo se siente?',
    armenian: 'Ինչպե՞ս եք ձեզ զգում։',
  },
  {
    id: 6,
    time: '0:18',
    timeSeconds: 18,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Bien.',
    armenian: 'Լավ։',
  },
  {
    id: 7,
    time: '0:19',
    timeSeconds: 19,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Anoche lo sentí tan preocupado que le juro me quedé re mal.',
    armenian: 'Երեկ գիշեր ձեզ այնքան մտահոգ զգացի, որ երդվում եմ՝ ես էլ ահավոր վատ զգացի (խիստ անհանգստացա)։',
    colloquialTerms: ['re mal'],
    grammarNote: {
      term: 're mal',
      noteArm: '«Re-» նախածանցը Արգենտինայում գործածվում է «շատ/գեր-» իմաստով (re mal = շատ վատ)։',
      noteEsp: 'Prefijo intensificador típicamente argentino (re bueno, re mal, re lindo).'
    }
  },
  {
    id: 8,
    time: '0:21',
    timeSeconds: 21,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'No, pero ahora me siento mucho mejor.',
    armenian: 'Ո՛չ, բայց հիմա ինձ շատ ավելի լավ եմ զգում։',
  },
  {
    id: 9,
    time: '0:23',
    timeSeconds: 23,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¿Sí?',
    armenian: 'Իսկապե՞ս։',
  },
  {
    id: 10,
    time: '0:23',
    timeSeconds: 23,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Sí, tuve una agarrada muy fuerte con Constance.',
    armenian: 'Այո, Կոնստանսի հետ շատ ուժեղ վիճաբանություն (բախում) ունեցա։',
    colloquialTerms: ['agarrada'],
    grammarNote: {
      term: 'agarrada',
      noteArm: 'Խոսակցական արտահայտություն՝ «սուր վեճ, կռիվ, լեզվակռիվ»։',
      noteEsp: 'Pelea o discusión verbal violenta.'
    }
  },
  {
    id: 11,
    time: '0:26',
    timeSeconds: 26,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Bueno, no se preocupe porque ahora yo estoy acá para cuidar.',
    armenian: 'Դե, մի՛ անհանգստացեք, որովհետև հիմա ես այստեղ եմ՝ [ձեզ] խնամելու (հոգ տանելու) համար։',
  },
  {
    id: 12,
    time: '0:29',
    timeSeconds: 29,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Sí, y vos curás de todos los males.',
    armenian: 'Այո՛, իսկ դու բուժում ես բոլոր ցավերից',
    colloquialTerms: ['vos', 'curás'],
    grammarNote: {
      term: 'vos curás',
      noteArm: 'Արգենտինական voseo՝ «vos» դերանուն և «curás» խոնարհում (շեշտը վերջում)։',
      noteEsp: 'Voseo rioplatense: vos curás en vez de tú curas.'
    }
  },
  {
    id: 13,
    time: '0:30',
    timeSeconds: 30,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¿Ah, sí?',
    armenian: 'Այդպե՞ս, հա՞։',
  },
  {
    id: 14,
    time: '0:31',
    timeSeconds: 31,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Sí.',
    armenian: 'Այո։',
  },
  {
    id: 15,
    time: '0:33',
    timeSeconds: 33,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Lo único que le pido es que no se le dé por el pucho y la bebida porque me va a terminar muy mal usted.',
    armenian: 'Միակ բանը, որ ձեզնից խնդրում եմ՝ չսկսեք ծխախոտ քաշել ու խմել, այլապես շատ վատ կավարտվի ձեր վիճակը։',
    colloquialTerms: ['pucho'],
    grammarNote: {
      term: 'el pucho',
      noteArm: '«Pucho»՝ արգենտինական խոսակցական բառ սիգարետի համար։',
      noteEsp: 'Cigarrillo en lunfardo/habla rioplatense.'
    }
  },
  {
    id: 16,
    time: '0:37',
    timeSeconds: 37,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: '¿Por qué? Yo no tomo y no pienso volver a fumar además.',
    armenian: 'Ինչո՞ւ։ Ես չեմ խմում և առավել ևս չեմ պատրաստվում նորից ծխել։',
  },
  {
    id: 17,
    time: '0:40',
    timeSeconds: 40,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¡Bua!',
    armenian: 'Հը՜հ (թերահավատության ձայնարկություն՝ «դե իհարկե»)։',
  },
  {
    id: 18,
    time: '0:41',
    timeSeconds: 41,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: '¿Bua qué?',
    armenian: 'Ի՞նչ «հըհ»։',
  },
  {
    id: 19,
    time: '0:41',
    timeSeconds: 41,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Tampoco es un pecado tan grande.',
    armenian: 'Այդքան էլ մեծ մեղք չէ [երբեմն]։',
  },
  {
    id: 20,
    time: '0:45',
    timeSeconds: 45,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: '¿Qué te pasa?',
    armenian: 'Ի՞նչ է պատահել քեզ։',
  },
  {
    id: 21,
    time: '0:48',
    timeSeconds: 48,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Nada, déjelo.',
    armenian: 'Ոչինչ, մոռացե՛ք (թողե՛ք այդ թեման)։',
  },
  {
    id: 22,
    time: '0:49',
    timeSeconds: 49,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Bueno, me voy para el office porque parece que hoy hay algo en general.',
    armenian: 'Լավ, ես գնում եմ օֆիս (գրասենյակի խոհանոց), որովհետև կարծես այսօր ընդհանուր ժողով կա։',
    colloquialTerms: ['office'],
  },
  {
    id: 23,
    time: '0:51',
    timeSeconds: 51,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'No vino la Kimberly, no vino la Yara y Alfredo está aquí.',
    armenian: 'Քիմբերլին չեկավ, Յարան չեկավ, իսկ Ալֆրեդոն այստեղ է։',
  },
  {
    id: 24,
    time: '0:54',
    timeSeconds: 54,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: 'Permiso.',
    armenian: 'Թույլ տվեք [հեռանամ] / ներողություն։',
  },
  {
    id: 25,
    time: '0:54',
    timeSeconds: 54,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Eh, morita, pará, pará, pará.',
    armenian: 'Է՜յ, մորիտա՛ (իմ թուխիկ), սպասի՛ր, սպասի՛ր, սպասի՛ր։',
    colloquialTerms: ['morita', 'pará'],
    grammarNote: {
      term: 'pará',
      noteArm: '«Parar» բայի voseo հրամայականը՝ «սպասի՛ր, կա՛նգ առ»։',
      noteEsp: 'Imperativo rioplatense para el pronombre vos.'
    }
  },
  {
    id: 26,
    time: '0:55',
    timeSeconds: 55,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Te quiero decir una cosa.',
    armenian: 'Ուզում եմ քեզ մի բան ասել։',
  },
  {
    id: 27,
    time: '0:56',
    timeSeconds: 56,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¿Qué?',
    armenian: 'Ի՞նչ։',
  },
  {
    id: 28,
    time: '0:57',
    timeSeconds: 57,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Te quiero pedir algo porque no puedo aguantar más.',
    armenian: 'Ուզում եմ քեզ մի բան խնդրել, որովհետև էլ չեմ կարողանում դիմանալ։',
  },
  {
    id: 29,
    time: '1:01',
    timeSeconds: 61,
    speaker: 'Monita',
    speakerLabel: 'Ella (Monita)',
    spanish: '¿Qué?',
    armenian: 'Ի՞նչ։',
  },
  {
    id: 30,
    time: '1:04',
    timeSeconds: 64,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: 'Nenita...',
    armenian: 'Փոքրի՛կս (սիրելի՛ս)...',
    colloquialTerms: ['nenita'],
  },
  {
    id: 31,
    time: '1:08',
    timeSeconds: 68,
    speaker: 'Martín',
    speakerLabel: 'Él (Martín)',
    spanish: '¿Te querés casar conmigo?',
    armenian: 'Կամուսնանա՞ս ինձ հետ։',
    colloquialTerms: ['querés'],
    grammarNote: {
      term: '¿Te querés casar...?',
      noteArm: 'Արգենտինայում՝ «querés» (vos-ով), իսկ չեզոք իսպաներենում՝ «¿Te quieres casar...?»։',
      noteEsp: 'Pregunta matrimonial en dialecto porteño/rioplatense.'
    }
  }
];
