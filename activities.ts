export interface QuizOption {
  id: string;
  text: string;
  subtextArm?: string;
}

export interface ComprensionQuestion {
  id: number;
  questionEsp: string;
  questionArm: string;
  options: QuizOption[];
  correctIndex: number; // 0, 1, 2, 3
  explanationEsp: string;
  explanationArm: string;
}

export interface QuienLoDijoQuestion {
  id: number;
  quoteEsp: string;
  quoteArm: string;
  correctSpeaker: 'Martín' | 'Monita';
  explanationEsp: string;
  explanationArm: string;
}

export interface QueSignificaQuestion {
  id: number;
  expressionEsp: string;
  contextSentence: string;
  optionsArm: string[];
  correctIndex: number;
  explanationEsp: string;
  explanationArm: string;
}

export interface TraduceQuestion {
  id: number;
  armenianSentence: string;
  optionsEsp: string[];
  correctIndex: number;
  explanationEsp: string;
  explanationArm: string;
}

export interface CompletaFraseQuestion {
  id: number;
  starterEsp: string;
  starterArm: string;
  options: string[];
  correctIndex: number;
  fullSentenceEsp: string;
  fullSentenceArm: string;
}

export interface QuePasoPrimeroQuestion {
  id: number;
  situationArm: string;
  optionA: { esp: string; arm: string };
  optionB: { esp: string; arm: string };
  correctOption: 'A' | 'B';
  explanationEsp: string;
  explanationArm: string;
}

export interface ReflexionQuestion {
  id: number;
  questionEsp: string;
  questionArm: string;
  options: {
    letter: string;
    esp: string;
    arm: string;
    insightEsp: string;
    insightArm: string;
  }[];
}

export interface MiniDialogoQuestion {
  id: number;
  situationEsp: string;
  situationArm: string;
  speakerPromptEsp: string;
  speakerPromptArm: string;
  optionsEsp: string[];
  correctIndex: number;
  explanationEsp: string;
  explanationArm: string;
}

export interface RetoFinalQuestion {
  id: number;
  category: 'comprension' | 'lexico' | 'traduccion' | 'argentino' | 'quien' | 'secuencia';
  categoryLabel: string;
  questionEsp: string;
  questionArm: string;
  options: string[];
  correctIndex: number;
  explanationEsp: string;
  explanationArm: string;
}

// 1. COMPRENSIÓN DEL VÍDEO (14 questions)
export const COMPRENSION_QUESTIONS: ComprensionQuestion[] = [
  {
    id: 1,
    questionEsp: '¿Qué trae la mujer al principio del diálogo?',
    questionArm: 'Ի՞նչ է բերում կինը երկխոսության սկզբում։',
    options: [
      { id: 'A', text: 'Un té', subtextArm: 'Թեյ' },
      { id: 'B', text: 'Un cappuccino', subtextArm: 'Կապուչինո' },
      { id: 'C', text: 'Un vaso de agua', subtextArm: 'Մեկ բաժակ ջուր' },
      { id: 'D', text: 'Un zumo de naranja', subtextArm: 'Նարնջի հյութ' }
    ],
    correctIndex: 1,
    explanationEsp: 'Ella entra diciendo con alegría: "Llegó el cappuccino".',
    explanationArm: 'Նա ներս է մտնում ուրախ ասելով. «Llegó el cappuccino» (Կապուչինոն եկավ)։'
  },
  {
    id: 2,
    questionEsp: '¿Por qué él dice que ahora se siente mucho mejor?',
    questionArm: 'Ինչո՞ւ է նա ասում, որ հիմա իրեն շատ ավելի լավ է զգում։',
    options: [
      { id: 'A', text: 'Porque ha dormido doce horas', subtextArm: 'Որովհետև 12 ժամ է քնել' },
      { id: 'B', text: 'Porque ha firmado un contrato', subtextArm: 'Որովհետև պայմանագիր է ստորագրել' },
      { id: 'C', text: 'Porque ahora ella está a su lado para cuidarlo', subtextArm: 'Որովհետև հիմա նա իր կողքին է՝ իրեն խնամելու համար' },
      { id: 'D', text: 'Porque ha salido temprano del trabajo', subtextArm: 'Որովհետև աշխատանքից շուտ է դուրս եկել' }
    ],
    correctIndex: 2,
    explanationEsp: 'Él se siente aliviado al verla y ella le dice que está allí para cuidarlo.',
    explanationArm: 'Նա իրեն հանգիստ է զգում նրան տեսնելիս, իսկ աղջիկն ասում է, որ այնտեղ է նրան խնամելու համար։'
  },
  {
    id: 3,
    questionEsp: '¿Qué problema tuvo él anoche?',
    questionArm: 'Ի՞նչ խնդիր էր նա ունեցել նախորդ գիշեր։',
    options: [
      { id: 'A', text: 'Tuvo una agarrada muy fuerte con Constance', subtextArm: 'Ուժեղ վիճաբանություն էր ունեցել Կոնստանսի հետ' },
      { id: 'B', text: 'Perdió las llaves de su coche', subtextArm: 'Կորցրել էր իր մեքենայի բանալիները' },
      { id: 'C', text: 'Se quedó sin dinero en el banco', subtextArm: 'Բանկում առանց գումար էր մնացել' },
      { id: 'D', text: 'Sufrió un dolor de cabeza insoportable', subtextArm: 'Գլխացավից էր տանջվել' }
    ],
    correctIndex: 0,
    explanationEsp: 'Él confiesa: "Sí, tuve una agarrada muy fuerte con Constance".',
    explanationArm: 'Նա խոստովանում է. «Sí, tuve una agarrada muy fuerte con Constance» (Ուժեղ վիճաբանություն ունեցա Կոնստանսի հետ)։'
  },
  {
    id: 4,
    questionEsp: '¿Qué le aconseja ella con insistencia?',
    questionArm: 'Ի՞նչ է նա համառորեն խորհուրդ տալիս տղամարդուն։',
    options: [
      { id: 'A', text: 'Que se vaya de vacaciones a la playa', subtextArm: 'Որ գնա արձակուրդ լողափում' },
      { id: 'B', text: 'Que no se le dé por el pucho y la bebida', subtextArm: 'Որ չսկսի ծխել և խմել' },
      { id: 'C', text: 'Que renuncie a su empresa hoy mismo', subtextArm: 'Որ հենց այսօր հրաժարական տա ընկերությունից' },
      { id: 'D', text: 'Que compre otro automóvil', subtextArm: 'Որ նոր ավտոմեքենա գնի' }
    ],
    correctIndex: 1,
    explanationEsp: 'Ella le pide: "Lo único que le pido es que no se le dé por el pucho y la bebida".',
    explanationArm: 'Աղջիկը խնդրում է. «Lo único que le pido es que no se le dé por el pucho y la bebida» (Միակ բանը՝ չտրվեք ծխախոտին ու խմիչքին)։'
  },
  {
    id: 5,
    questionEsp: '¿Qué responde él sobre el tabaco y el alcohol?',
    questionArm: 'Ի՞նչ է պատասխանում նա ծխախոտի ու ալկոհոլի մասին։',
    options: [
      { id: 'A', text: 'Que fuma tres cajetillas al día', subtextArm: 'Որ օրական երեք տուփ է ծխում' },
      { id: 'B', text: 'Que le gusta beber solo por las noches', subtextArm: 'Որ սիրում է խմել միայն գիշերները' },
      { id: 'C', text: 'Que él no toma y no piensa volver a fumar', subtextArm: 'Որ ինքը չի խմում և չի պատրաստվում նորից ծխել' },
      { id: 'D', text: 'Que ya compró una botella de vino', subtextArm: 'Որ արդեն մի շիշ գինի է գնել' }
    ],
    correctIndex: 2,
    explanationEsp: 'Él aclara: "Yo no tomo y no pienso volver a fumar además".',
    explanationArm: 'Նա հստակեցնում է. «Yo no tomo y no pienso volver a fumar además» (Ես չեմ խմում և չեմ մտածում նորից ծխել)։'
  },
  {
    id: 6,
    questionEsp: '¿A dónde dice ella que tiene que ir?',
    questionArm: 'Ո՞ւր է ասում աղջիկը, որ պետք է գնա։',
    options: [
      { id: 'A', text: 'A su casa a descansar', subtextArm: 'Իր տուն՝ հանգստանալու' },
      { id: 'B', text: 'Al office porque parece que hoy hay algo general', subtextArm: 'Գրասենյակի խոհանոց/սենյակ, որովհետև ընդհանուր ժողով կա' },
      { id: 'C', text: 'Al gimnasio de boxeo', subtextArm: 'Բռնցքամարտի մարզասրահ' },
      { id: 'D', text: 'Al aeropuerto a recibir a Constance', subtextArm: 'Օդանավակայան՝ Կոնստանսին դիմավորելու' }
    ],
    correctIndex: 1,
    explanationEsp: 'Ella dice: "Bueno, me voy para el office porque parece que hoy hay algo en general".',
    explanationArm: 'Նա ասում է. «Me voy para el office...» (Գնում եմ օֆիս/խոհանոց, որովհետև ընդհանուր բան կա)։'
  },
  {
    id: 7,
    questionEsp: '¿Quiénes no vinieron a trabajar según ella?',
    questionArm: 'Ովքե՞ր չէին եկել աշխատանքի ըստ նրա։',
    options: [
      { id: 'A', text: 'Constance y el chofer', subtextArm: 'Կոնստանսն ու վարորդը' },
      { id: 'B', text: 'La Kimberly y la Yara', subtextArm: 'Քիմբերլին և Յարան' },
      { id: 'C', text: 'El médico y la secretaria', subtextArm: 'Բժիշկն ու քարտուղարուհին' },
      { id: 'D', text: 'Martín y Alfredo', subtextArm: 'Մարտինն ու Ալֆրեդոն' }
    ],
    correctIndex: 1,
    explanationEsp: 'Ella menciona: "No vino la Kimberly, no vino la Yara y Alfredo está aquí".',
    explanationArm: 'Նա նշում է. «No vino la Kimberly, no vino la Yara y Alfredo está aquí»։'
  },
  {
    id: 8,
    questionEsp: '¿Cómo detiene él a ella cuando intenta marcharse?',
    questionArm: 'Ինչպե՞ս է նա կանգնեցնում աղջկան, երբ նա փորձում է հեռանալ։',
    options: [
      { id: 'A', text: 'Cerrando la puerta con llave', subtextArm: 'Դուռը բանալիով կողպելով' },
      { id: 'B', text: 'Diciendo: "Eh, morita, pará, pará, pará"', subtextArm: 'Ասելով. «Eh, morita, pará, pará, pará»' },
      { id: 'C', text: 'Tirando la taza de café al suelo', subtextArm: 'Սուրճի բաժակը գետնին գցելով' },
      { id: 'D', text: 'Llamando por teléfono a su secretaria', subtextArm: 'Քարտուղարուհուն հեռախոսով զանգելով' }
    ],
    correctIndex: 1,
    explanationEsp: 'Él la llama afectuosamente con su apodo y el imperativo voseo: "Eh, morita, pará, pará, pará".',
    explanationArm: 'Նա քնքշորեն կանչում է նրան իր մականունով և արգենտինական հրամայականով. «Morita, pará, pará, pará»։'
  },
  {
    id: 9,
    questionEsp: '¿Por qué él decide hablarle en ese preciso momento?',
    questionArm: 'Ինչո՞ւ է նա որոշում խոսել նրա հետ հենց այդ պահին։',
    options: [
      { id: 'A', text: 'Porque ya no puede aguantar más sus sentimientos', subtextArm: 'Որովհետև այլևս չի կարողանում դիմանալ իր զգացմունքներին' },
      { id: 'B', text: 'Porque tiene que salir de viaje de inmediato', subtextArm: 'Որովհետև անմիջապես պետք է ճամփորդության մեկնի' },
      { id: 'C', text: 'Porque Constance acaba de entrar al despacho', subtextArm: 'Որովհետև Կոնստանսը հենց նոր մտավ աշխատասենյակ' },
      { id: 'D', text: 'Porque se derramó el cappuccino', subtextArm: 'Որովհետև կապուչինոն թափվեց' }
    ],
    correctIndex: 0,
    explanationEsp: 'Él dice con el corazón abierto: "Te quiero pedir algo porque no puedo aguantar más".',
    explanationArm: 'Նա անկեղծորեն ասում է. «Te quiero pedir algo porque no puedo aguantar más» (Էլ չեմ դիմանում)։'
  },
  {
    id: 10,
    questionEsp: '¿Qué le propone él finalmente a ella?',
    questionArm: 'Ի՞նչ է նա վերջում առաջարկում աղջկան։',
    options: [
      { id: 'A', text: 'Que sea su socia en los negocios', subtextArm: 'Որ լինի իր գործընկերը բիզնեսում' },
      { id: 'B', text: 'Que se mude a otra ciudad', subtextArm: 'Որ տեղափոխվի այլ քաղաք' },
      { id: 'C', text: '¿Te querés casar conmigo? (Que se case con él)', subtextArm: 'Կամուսնանա՞ս ինձ հետ (առաջարկում է ամուսնանալ)' },
      { id: 'D', text: 'Que aprenda a preparar té frío', subtextArm: 'Որ սովորի սառը թեյ պատրաստել' }
    ],
    correctIndex: 2,
    explanationEsp: 'La escena culmina con la emotiva propuesta: "Nenita... ¿Te querés casar conmigo?".',
    explanationArm: 'Տեսարանն ավարտվում է հուզիչ առաջարկով. «Nenita... ¿Te querés casar conmigo?» (Փոքրի՛կս... Կամուսնանա՞ս ինձ հետ)։'
  },
  {
    id: 11,
    questionEsp: '¿Qué efecto sanador dice él que ella tiene sobre él?',
    questionArm: 'Ի՞նչ բուժիչ ազդեցություն ունի աղջիկը նրա վրա՝ ըստ իր խոսքերի։',
    options: [
      { id: 'A', text: 'Ella le prepara las mejores medicinas', subtextArm: 'Նա իր համար լավագույն դեղերն է պատրաստում' },
      { id: 'B', text: '"Vos curás de todos los males"', subtextArm: '«Այո՛, իսկ դու բուժում ես բոլոր ցավերից»' },
      { id: 'C', text: 'Ella lo hace entrenar deportes duros', subtextArm: 'Նա ստիպում է նրան ծանր սպորտով զբաղվել' },
      { id: 'D', text: 'Ella le ayuda a olvidar su trabajo', subtextArm: 'Նա օգնում է մոռանալ աշխատանքը' }
    ],
    correctIndex: 1,
    explanationEsp: 'Él le dedica una frase llena de ternura: "Sí, y vos curás de todos los males".',
    explanationArm: 'Նա քնքշանքով ասում է. «Sí, y vos curás de todos los males» (Այո՛, իսկ դու բուժում ես բոլոր ցավերից)։'
  },
  {
    id: 12,
    questionEsp: '¿Qué relación de tratamiento gramatical se percibe al inicio?',
    questionArm: 'Ինչպիսի՞ քերականական դիմելաձև է նկատվում սկզբում նրանց միջև։',
    options: [
      { id: 'A', text: 'Hablan en latín clásico', subtextArm: 'Խոսում են դասական լատիներենով' },
      { id: 'B', text: 'Ella le habla a él de "usted" y él le habla con confianza y ternura ("vos / te")', subtextArm: 'Աղջիկը նրան դիմում է «Դուք»-ով (usted), իսկ նա՝ մտերմիկ ու քնքուշ («vos / te»)' },
      { id: 'C', text: 'Se insultan mutuamente con frialdad', subtextArm: 'Սառնասրտորեն վիրավորում են միմյանց' },
      { id: 'D', text: 'Él le habla en inglés todo el tiempo', subtextArm: 'Տղամարդը ողջ ժամանակ խոսում է անգլերենով' }
    ],
    correctIndex: 1,
    explanationEsp: 'Ella usa fórmulas de respeto ("¿Cómo se siente?", "déjelo", "usted") mientras entre ambos hay una complicidad amorosa profunda.',
    explanationArm: 'Մոնիտան գործածում է հարգալից ձևեր («se siente», «usted»), սակայն նրանց միջև ակնհայտ է խոր մտերմությունն ու սերը։'
  },
  {
    id: 13,
    questionEsp: '¿Cuál es el tono general de la conversación en esta escena?',
    questionArm: 'Ո՞րն է այս տեսարանի ընդհանուր տրամադրությունն ու տոնը։',
    options: [
      { id: 'A', text: 'De terror y suspenso oscuro', subtextArm: 'Սարսափ և մութ լարվածություն' },
      { id: 'B', text: 'Cálido, cómplice, romántico y espontáneo', subtextArm: 'Ջերմ, մտերմիկ, ռոմանտիկ և անկեղծ' },
      { id: 'C', text: 'Estrictamente formal y burocrático', subtextArm: 'Խիստ պաշտոնական և բյուրոկրատական' },
      { id: 'D', text: 'Hostil y agresivo', subtextArm: 'Թշնամական և ագրեսիվ' }
    ],
    correctIndex: 1,
    explanationEsp: 'Es una escena íntima de telenovela donde el afecto y la ternura conducen al clímax de la propuesta de matrimonio.',
    explanationArm: 'Դա մտերմիկ տեսարան է, որտեղ քնքշությունն ու փոխադարձ հոգատարությունը հանգեցնում են ամուսնության առաջարկին։'
  },
  {
    id: 14,
    questionEsp: '¿A qué dialecto del español pertenecen palabras como "vos querés", "pará" y "pucho"?',
    questionArm: 'Իսպաներենի ո՞ր բարբառին են պատկանում «vos querés», «pará» և «pucho» բառերը։',
    options: [
      { id: 'A', text: 'Español de Castilla (España central)', subtextArm: 'Կաստիլիայի իսպաներենին (Իսպանիա)' },
      { id: 'B', text: 'Español rioplatense (Argentina y Uruguay)', subtextArm: 'Ռիոպլատական իսպաներենին (Արգենտինա և Ուրուգվայ)' },
      { id: 'C', text: 'Español del Caribe', subtextArm: 'Կարիբյան ավազանի իսպաներենին' },
      { id: 'D', text: 'Español andino tradicional', subtextArm: 'Ավանդական անդյան իսպաներենին' }
    ],
    correctIndex: 1,
    explanationEsp: 'Son rasgos distintivos del español rioplatense (voseo y lunfardo rioplatense).',
    explanationArm: 'Դրանք արգենտինական (ռիոպլատական) իսպաներենի բնորոշ գծերն են (voseo և lunfardo)։'
  }
];

// 2. ¿QUIÉN LO DIJO? (10 questions)
export const QUIEN_LO_DIJO_QUESTIONS: QuienLoDijoQuestion[] = [
  {
    id: 1,
    quoteEsp: 'Hola, hola, buen día. Llegó el cappuccino.',
    quoteArm: 'Ողջո՜ւյն, բարի լույս։ Կապուչինոն եկավ։',
    correctSpeaker: 'Monita',
    explanationEsp: 'Monita entra trayendo el café con entusiasmo y una sonrisa.',
    explanationArm: 'Մոնիտան է ներս գալիս՝ ժպիտով ու ոգևորությամբ սուրճ բերելով։'
  },
  {
    id: 2,
    quoteEsp: 'Gracias, bonita. Moría por un café.',
    quoteArm: 'Շնորհակալ եմ, գեղեցկուհիս։ Մեռնում էի սուրճի համար։',
    correctSpeaker: 'Martín',
    explanationEsp: 'Martín le agradece con cariño llamándola "bonita".',
    explanationArm: 'Մարտինն է շնորհակալություն հայտնում՝ նրան «bonita» (գեղեցկուհիս) անվանելով։'
  },
  {
    id: 3,
    quoteEsp: '¿Y por verme, a mí no moría?',
    quoteArm: 'Իսկ ինձ տեսնելո՞ւ համար... ինձ համար չէի՞ք մեռնում։',
    correctSpeaker: 'Monita',
    explanationEsp: 'Monita le hace una broma coqueta y dulce.',
    explanationArm: 'Մոնիտան է նազանքով ու կատակով հարցնում, թե արդյոք իրեն չէր կարոտել։'
  },
  {
    id: 4,
    quoteEsp: 'Anoche lo sentí tan preocupado que le juro me quedé re mal.',
    quoteArm: 'Երեկ գիշեր ձեզ այնքան մտահոգ զգացի, որ երդվում եմ՝ ես էլ շատ վատ զգացի։',
    correctSpeaker: 'Monita',
    explanationEsp: 'Monita expresa lo mucho que le preocupó verlo angustiado la noche anterior.',
    explanationArm: 'Մոնիտան է արտահայտում իր անկեղծ անհանգստությունը Մարտինի նախորդ գիշերվա վիճակի մասին։'
  },
  {
    id: 5,
    quoteEsp: 'Sí, tuve una agarrada muy fuerte con Constance.',
    quoteArm: 'Այո, Կոնստանսի հետ շատ ուժեղ վիճաբանություն ունեցա։',
    correctSpeaker: 'Martín',
    explanationEsp: 'Martín le cuenta la razón de su disgusto de anoche.',
    explanationArm: 'Մարտինն է պատմում իր երեկվա վատ տրամադրության պատճառը։'
  },
  {
    id: 6,
    quoteEsp: 'Bueno, no se preocupe porque ahora yo estoy acá para cuidar.',
    quoteArm: 'Դե, մի՛ անհանգստացեք, որովհետև հիմա ես այստեղ եմ՝ [ձեզ] խնամելու համար։',
    correctSpeaker: 'Monita',
    explanationEsp: 'Monita lo consuela ofreciéndole su presencia y cuidado.',
    explanationArm: 'Մոնիտան է մխիթարում նրան՝ ասելով, որ այստեղ է նրան հոգ տանելու համար։'
  },
  {
    id: 7,
    quoteEsp: 'Sí, y vos curás de todos los males.',
    quoteArm: 'Այո՛, իսկ դու բուժում ես բոլոր ցավերից',
    correctSpeaker: 'Martín',
    explanationEsp: 'Martín reconoce lo bien que le hace estar con ella.',
    explanationArm: 'Մարտինն է խոստովանում, որ նրա ներկայությունը բուժում է բոլոր հոգսերը։'
  },
  {
    id: 8,
    quoteEsp: 'Lo único que le pido es que no se le dé por el pucho y la bebida...',
    quoteArm: 'Միակ բանը, որ ձեզնից խնդրում եմ՝ չսկսեք ծխախոտ քաշել ու խմել...',
    correctSpeaker: 'Monita',
    explanationEsp: 'Monita le advierte que se cuide de los malos hábitos.',
    explanationArm: 'Մոնիտան է նրան հորդորում խուսափել ծխախոտից ու ալկոհոլից։'
  },
  {
    id: 9,
    quoteEsp: 'Eh, morita, pará, pará, pará.',
    quoteArm: 'Է՜յ, մորիտա՛, սպասի՛ր, սպասի՛ր, սպասի՛ր։',
    correctSpeaker: 'Martín',
    explanationEsp: 'Martín la detiene para no dejarla marchar sin decirle algo trascendental.',
    explanationArm: 'Մարտինն է նրան կանգնեցնում, երբ նա փորձում է գնալ գրասենյակի խոհանոց։'
  },
  {
    id: 10,
    quoteEsp: 'Nenita... ¿Te querés casar conmigo?',
    quoteArm: 'Փոքրի՛կս... Կամուսնանա՞ս ինձ հետ։',
    correctSpeaker: 'Martín',
    explanationEsp: 'Martín pronuncia la esperada propuesta de matrimonio.',
    explanationArm: 'Մարտինն է նրան ամուսնության առաջարկություն անում։'
  }
];

// 3. ¿QUÉ SIGNIFICA? (8 expressions)
export const QUE_SIGNIFICA_QUESTIONS: QueSignificaQuestion[] = [
  {
    id: 1,
    expressionEsp: 'moría por...',
    contextSentence: 'Moría por un café.',
    optionsArm: [
      'Ատում էի / խուսափում էի սուրճից',
      'Մեռնում էի ... համար / անչափ շատ էի տենչում կամ ուզում',
      'Գնել էի բարձր գնով',
      'Մոռացել էի խմել'
    ],
    correctIndex: 1,
    explanationEsp: '"Morir por algo" es una expresión que significa tener deseos intensos e impacientes de conseguirlo.',
    explanationArm: '«Morir por algo» նշանակում է ինչ-որ բան չափազանց շատ տենչալ կամ ցանկանալ (հայերենում նույնպես ասում ենք՝ «մեռնում եմ մի բաժակ սուրճի համար»)։'
  },
  {
    id: 2,
    expressionEsp: 're mal',
    contextSentence: 'Le juro me quedé re mal.',
    optionsArm: [
      'Շատ լավ / գերազանց',
      'Շատ վատ / ահավոր անհանգստացած կամ տխուր',
      'Բավականին ուշացած',
      'Առանց աշխատանքի'
    ],
    correctIndex: 1,
    explanationEsp: 'El prefijo "re-" es un intensificador rioplatense equivalente a "muy" o "súper". "Re mal" significa sumamente mal.',
    explanationArm: '«Re-» նախածանցը Արգենտինայում գործածվում է «շատ / սուպեր» իմաստով։ «Re mal» նշանակում է շատ վատ, ահավոր ազդված։'
  },
  {
    id: 3,
    expressionEsp: 'agarrada',
    contextSentence: 'Tuve una agarrada muy fuerte con Constance.',
    optionsArm: [
      'Ջերմ գրկախառնություն',
      'Սուր վիճաբանություն / կռիվ / բախում',
      'Համատեղ ճաշկերույթ',
      'Գործարար հաջող պայմանագիր'
    ],
    correctIndex: 1,
    explanationEsp: '"Agarrada" en el habla coloquial de Argentina hace referencia a una pelea o fuerte disputa verbal.',
    explanationArm: 'Արգենտինական խոսակցականում «agarrada» նշանակում է թեժ վեճ, ընդհարում կամ կռիվ։'
  },
  {
    id: 4,
    expressionEsp: 'pucho',
    contextSentence: 'Que no se le dé por el pucho y la bebida.',
    optionsArm: [
      'Մեքենա վարել',
      'Սիգարետ / ծխախոտ',
      'Շոկոլադե կոնֆետ',
      'Քուն / հանգիստ'
    ],
    correctIndex: 1,
    explanationEsp: '"Pucho" es la palabra típica del lunfardo rioplatense para nombrar al cigarrillo.',
    explanationArm: '«Pucho»-ն արգենտինական լունֆարդոյում (խոսակցական ժարգոնում) սիգարետն է / ծխախոտը։'
  },
  {
    id: 5,
    expressionEsp: 'pará',
    contextSentence: 'Eh, morita, pará, pará, pará.',
    optionsArm: [
      'Վազի՛ր արագ',
      'Սպասի՛ր / կա՛նգ առ (արգենտինական vos ձևով)',
      'Երգի՛ր բարձր',
      'Նստի՛ր աթոռին'
    ],
    correctIndex: 1,
    explanationEsp: '"Pará" es la forma imperativa del verbo parar con voseo rioplatense (acento en la última sílaba: pa-RÁ).',
    explanationArm: '«Pará»-ն «parar» (կանգնել) բայի հրամայականն է vos-ի համար (շեշտը վերջին վանկի վրա)՝ «սպասի՛ր, կա՛նգ առ»։'
  },
  {
    id: 6,
    expressionEsp: 'no puedo aguantar más',
    contextSentence: 'Te quiero pedir algo porque no puedo aguantar más.',
    optionsArm: [
      'Էլ ժամանակ չունեմ',
      'Այլևս չեմ կարողանում դիմանալ / համբերել',
      'Էլ ախորժակ չունեմ',
      'Այլևս չեմ ուզում աշխատել'
    ],
    correctIndex: 1,
    explanationEsp: '"No aguantar más" significa haber alcanzado el límite de la paciencia o la contención emocional.',
    explanationArm: '«No aguantar más» նշանակում է էլ չկարողանալ համբերել, զսպել սեփական զգացմունքները։'
  },
  {
    id: 7,
    expressionEsp: 'te quiero pedir algo',
    contextSentence: 'Te quiero pedir algo importante.',
    optionsArm: [
      'Ուզում եմ քեզ պատժել',
      'Ուզում եմ քեզնից մի բան խնդրել',
      'Ուզում եմ քեզ նվեր տալ',
      'Ուզում եմ քեզնից հեռանալ'
    ],
    correctIndex: 1,
    explanationEsp: '"Pedir algo" significa solicitar o rogar un favor o propuesta importante a otra persona.',
    explanationArm: '«Te quiero pedir algo» նշանակում է «Ուզում եմ քեզնից մի բան խնդրել»։'
  },
  {
    id: 8,
    expressionEsp: '¿Te querés casar conmigo?',
    contextSentence: 'Nenita... ¿Te querés casar conmigo?',
    optionsArm: [
      'Կգա՞ս ինձ հետ կինոթատրոն',
      'Կամուսնանա՞ս ինձ հետ (կուզե՞ս ամուսնանալ ինձ հետ)',
      'Կօգնե՞ս ինձ գործերում',
      'Կուզե՞ս ճաշել ինձ հետ'
    ],
    correctIndex: 1,
    explanationEsp: 'Es la clásica propuesta matrimonial en español argentino con la conjugación "querés" (voseo).',
    explanationArm: 'Ամուսնության առաջարկությունն է արգենտինական voseo խոնարհումով («querés»՝ «quieres»-ի փոխարեն)։'
  }
];

// 4. TRADUCE AL ESPAÑOL (14 exercises)
export const TRADUCE_QUESTIONS: TraduceQuestion[] = [
  {
    id: 1,
    armenianSentence: 'Ես հիմա ինձ շատ ավելի լավ եմ զգում։',
    optionsEsp: [
      'Ahora me siento mucho mejor.',
      'Ahora estoy sentir mejor.',
      'Me siento ayer mejor.',
      'Ahora he sentirse mejor.'
    ],
    correctIndex: 0,
    explanationEsp: 'Conjugación correcta del presente reflexivo: "me siento" + comparativo "mucho mejor".',
    explanationArm: 'Ճիշտ ձևն է՝ «Ahora me siento mucho mejor» (ներկա ժամանակի անդրադարձ բայ՝ sentirse)։'
  },
  {
    id: 2,
    armenianSentence: 'Ես ուզում եմ քեզ մի բան ասել։',
    optionsEsp: [
      'Te digo ayer una cosa.',
      'Te quiero decir una cosa.',
      'Quiero que dices algo.',
      'Quiero hablar tú.'
    ],
    correctIndex: 1,
    explanationEsp: 'Estructura con pronombre de objeto indirecto: "Te quiero decir una cosa" (o "Quiero decirte una cosa").',
    explanationArm: 'Ճիշտ տարբերակն է՝ «Te quiero decir una cosa»։'
  },
  {
    id: 3,
    armenianSentence: 'Ես այլևս չեմ կարող դիմանալ։',
    optionsEsp: [
      'No quiero hablar más.',
      'No tengo más tiempo.',
      'No puedo aguantar más.',
      'No aguanto ayer.'
    ],
    correctIndex: 2,
    explanationEsp: '"No puedo aguantar más" expresa el límite de la tolerancia emocional o física.',
    explanationArm: '«No puedo aguantar más» նշանակում է «Էլ չեմ կարողանում դիմանալ»։'
  },
  {
    id: 4,
    armenianSentence: 'Կուզե՞ս ամուսնանալ ինձ հետ։ (արգենտինական ձևով)',
    optionsEsp: [
      '¿Quieres hablar conmigo?',
      '¿Te gusta casarte?',
      '¿Te querés casar conmigo?',
      '¿Quieres venir conmigo?'
    ],
    correctIndex: 2,
    explanationEsp: 'En Argentina se usa el voseo: "¿Te querés casar conmigo?".',
    explanationArm: 'Արգենտինական ձևն է՝ «¿Te querés casar conmigo?»։'
  },
  {
    id: 5,
    armenianSentence: 'Բարի լույս։ Կապուչինոն եկավ։',
    optionsEsp: [
      'Buen día. Llegó el cappuccino.',
      'Buenas noches. Vino el té.',
      'Hola amigo. Trae un café.',
      'Buen día. Compré el jugo.'
    ],
    correctIndex: 0,
    explanationEsp: '"Buen día" es muy usual en Argentina, junto a "Llegó el cappuccino".',
    explanationArm: 'Ճիշտ տարբերակն է՝ «Buen día. Llegó el cappuccino»։'
  },
  {
    id: 6,
    armenianSentence: 'Շնորհակալ եմ, գեղեցկուհիս։ Մեռնում էի սուրճի համար։',
    optionsEsp: [
      'Gracias, señorita. Quería un agua.',
      'Gracias, bonita. Moría por un café.',
      'Muchas gracias. Buscaba un té.',
      'De nada, bella. Tomé un café.'
    ],
    correctIndex: 1,
    explanationEsp: '"Gracias, bonita. Moría por un café" usa el imperfecto enfático "moría por".',
    explanationArm: '«Gracias, bonita. Moría por un café» արտահայտում է խիստ ցանկությունը։'
  },
  {
    id: 7,
    armenianSentence: 'Ինչպե՞ս եք ձեզ զգում։ (հարգալից)',
    optionsEsp: [
      '¿Cómo te llamas?',
      '¿Cómo se siente?',
      '¿Dónde estás?',
      '¿Qué estás haciendo?'
    ],
    correctIndex: 1,
    explanationEsp: 'Para la persona "usted" se conjuga: "¿Cómo se siente?".',
    explanationArm: 'Հարգալից «Դուք»-ի համար՝ «¿Cómo se siente?»։'
  },
  {
    id: 8,
    armenianSentence: 'Մի՛ անհանգստացեք, որովհետև հիմա ես այստեղ եմ։',
    optionsEsp: [
      'No se preocupe porque ahora yo estoy acá.',
      'No te preocupas porque voy allá.',
      'No preocuparse por favor.',
      'Nunca preocuparse de mí.'
    ],
    correctIndex: 0,
    explanationEsp: 'Imperativo negativo formal: "No se preocupe" + adverbio de lugar "acá".',
    explanationArm: '«No se preocupe porque ahora yo estoy acá» (հարգալից հրամայական և «acá»՝ այստեղ)։'
  },
  {
    id: 9,
    armenianSentence: 'Այո՛, իսկ դու բուժում ես բոլոր ցավերից (արգենտինական vos-ով)։',
    optionsEsp: [
      'Vos curás de todos los males.',
      'Tú estás enfermo hoy.',
      'Vosotros curáis el dolor.',
      'Usted cura la medicina.'
    ],
    correctIndex: 0,
    explanationEsp: 'Forma verbal del voseo: "vos curás" (acento en la terminación -ás).',
    explanationArm: 'Արգենտինական vos-ով՝ «Vos curás de todos los males»։'
  },
  {
    id: 10,
    armenianSentence: 'Ես չեմ խմում և չեմ մտածում նորից ծխել։',
    optionsEsp: [
      'Yo tomo siempre y fumo mucho.',
      'Yo no tomo y no pienso volver a fumar además.',
      'No bebo agua y fumo tabaco.',
      'Nunca tomo café en la mañana.'
    ],
    correctIndex: 1,
    explanationEsp: 'Construcción con perífrasis: "volver a + infinitivo" (volver a fumar).',
    explanationArm: '«Yo no tomo y no pienso volver a fumar además»։'
  },
  {
    id: 11,
    armenianSentence: 'Սպասի՛ր, սպասի՛ր, սպասի՛ր։ (արգենտինական հրամայական)',
    optionsEsp: [
      'Corre, corre, corre.',
      'Pará, pará, pará.',
      'Venga, venga, venga.',
      'Habla, habla, habla.'
    ],
    correctIndex: 1,
    explanationEsp: 'Imperativo de parar para vos: "pará" (con acento en la "á").',
    explanationArm: 'Արգենտինական շեշտով հրամայականն է՝ «Pará, pará, pará»։'
  },
  {
    id: 12,
    armenianSentence: 'Ոչինչ, մոռացե՛ք (թողե՛ք այդ թեման)։',
    optionsEsp: [
      'Nada, déjelo.',
      'Todo está bien.',
      'No quiero nada.',
      'Dámelo ahora.'
    ],
    correctIndex: 0,
    explanationEsp: 'Fórmula conversacional formal: "Nada, déjelo".',
    explanationArm: 'Խոսակցական դարձվածք՝ «Nada, déjelo» (թողե՛ք այդ խոսակցությունը)։'
  },
  {
    id: 13,
    armenianSentence: 'Այդքան էլ մեծ մեղք չէ։',
    optionsEsp: [
      'Es un pecado horrible.',
      'Tampoco es un pecado tan grande.',
      'Nunca hagas eso.',
      'No me gusta el pecado.'
    ],
    correctIndex: 1,
    explanationEsp: '"Tampoco es un pecado tan grande" atenúa la gravedad de una falta.',
    explanationArm: '«Tampoco es un pecado tan grande» նշանակում է՝ այդքան էլ մեծ մեղք չէ։'
  },
  {
    id: 14,
    armenianSentence: 'Ես շատ վատ զգացի (արգենտինական ժարգոնով)։',
    optionsEsp: [
      'Me quedé re mal.',
      'Estuve muy feliz.',
      'Me fui temprano.',
      'Llegué al trabajo.'
    ],
    correctIndex: 0,
    explanationEsp: '"Me quedé re mal" es la forma coloquial porteña para expresar gran desazón.',
    explanationArm: '«Me quedé re mal»՝ ահավոր վատ զգացի / անհանգստացա։'
  }
];

// 5. COMPLETA LA FRASE (10 exercises)
export const COMPLETA_FRASE_QUESTIONS: CompletaFraseQuestion[] = [
  {
    id: 1,
    starterEsp: 'No puedo aguantar...',
    starterArm: 'Էլ չեմ կարողանում դիմանալ...',
    options: ['ayer', 'conmigo', 'más', 'bonito'],
    correctIndex: 2,
    fullSentenceEsp: 'No puedo aguantar más.',
    fullSentenceArm: 'Էլ չեմ կարողանում դիմանալ։'
  },
  {
    id: 2,
    starterEsp: 'Te quiero pedir...',
    starterArm: 'Ուզում եմ քեզնից խնդրել...',
    options: ['algo', 'nada', 'café', 'bien'],
    correctIndex: 0,
    fullSentenceEsp: 'Te quiero pedir algo.',
    fullSentenceArm: 'Ուզում եմ քեզնից մի բան խնդրել։'
  },
  {
    id: 3,
    starterEsp: 'Llegó el...',
    starterArm: 'Եկավ...',
    options: ['autobús', 'cappuccino', 'invierno', 'periódico'],
    correctIndex: 1,
    fullSentenceEsp: 'Llegó el cappuccino.',
    fullSentenceArm: 'Կապուչինոն եկավ։'
  },
  {
    id: 4,
    starterEsp: 'Moría por un...',
    starterArm: 'Մեռնում էի ... համար',
    options: ['avión', 'café', 'libro', 'zapato'],
    correctIndex: 1,
    fullSentenceEsp: 'Moría por un café.',
    fullSentenceArm: 'Մեռնում էի սուրճի համար։'
  },
  {
    id: 5,
    starterEsp: 'Tuve una agarrada muy fuerte con...',
    starterArm: 'Շատ ուժեղ վիճաբանություն ունեցա ... հետ',
    options: ['Constance', 'el camarero', 'el vecino', 'el médico'],
    correctIndex: 0,
    fullSentenceEsp: 'Tuve una agarrada muy fuerte con Constance.',
    fullSentenceArm: 'Շատ ուժեղ վիճաբանություն ունեցա Կոնստանսի հետ։'
  },
  {
    id: 6,
    starterEsp: 'Vos curás de todos los...',
    starterArm: 'Այո՛, իսկ դու բուժում ես բոլոր...',
    options: ['días', 'males', 'amigos', 'coches'],
    correctIndex: 1,
    fullSentenceEsp: 'Vos curás de todos los males.',
    fullSentenceArm: 'Այո՛, իսկ դու բուժում ես բոլոր ցավերից'
  },
  {
    id: 7,
    starterEsp: 'No se le dé por el pucho y la...',
    starterArm: 'Մտքովդ չանցնի ծխախոտ քաշել և...',
    options: ['comida', 'fruta', 'bebida', 'fiesta'],
    correctIndex: 2,
    fullSentenceEsp: 'No se le dé por el pucho y la bebida.',
    fullSentenceArm: 'Չսկսեք ծխախոտ քաշել ու խմել։'
  },
  {
    id: 8,
    starterEsp: 'Me voy para el...',
    starterArm: 'Գնում եմ...',
    options: ['office', 'cine', 'aeropuerto', 'parque'],
    correctIndex: 0,
    fullSentenceEsp: 'Me voy para el office.',
    fullSentenceArm: 'Գնում եմ գրասենյակի խոհանոց/սենյակ։'
  },
  {
    id: 9,
    starterEsp: 'Eh, morita, pará, pará,...',
    starterArm: 'Է՜յ, մորիտա՛, սպասի՛ր, սպասի՛ր,...',
    options: ['ahora', 'pará', 'rápido', 'nunca'],
    correctIndex: 1,
    fullSentenceEsp: 'Eh, morita, pará, pará, pará.',
    fullSentenceArm: 'Է՜յ, մորիտա՛, սպասի՛ր, սպասի՛ր, սպասի՛ր։'
  },
  {
    id: 10,
    starterEsp: '¿Te querés casar...',
    starterArm: 'Կամուսնանա՞ս...',
    options: ['mañana', 'conmigo', 'aquí', 'ayer'],
    correctIndex: 1,
    fullSentenceEsp: '¿Te querés casar conmigo?',
    fullSentenceArm: 'Կամուսնանա՞ս ինձ հետ։'
  }
];

// 6. ¿QUÉ PASÓ PRIMERO? (8 questions)
export const QUE_PASO_PRIMERO_QUESTIONS: QuePasoPrimeroQuestion[] = [
  {
    id: 1,
    situationArm: 'Ո՞ր գործողությունն է տեղի ունենում առաջինը երկխոսության ընթացքում։',
    optionA: { esp: 'Ella trae el cappuccino.', arm: 'Աղջիկը բերում է կապուչինոն։' },
    optionB: { esp: 'Él pide matrimonio.', arm: 'Նա ամուսնության առաջարկություն է անում։' },
    correctOption: 'A',
    explanationEsp: 'Monita entra al principio con la taza diciendo: "Llegó el cappuccino". La propuesta ocurre al final.',
    explanationArm: 'Մոնիտան սկզբում է ներս գալիս սուրճով։ Ամուսնության առաջարկը տեսարանի վերջում է։'
  },
  {
    id: 2,
    situationArm: 'Ի՞նչն է տեղի ունեցել ավելի վաղ՝ երկխոսությունից առաջ։',
    optionA: { esp: 'La pelea muy fuerte con Constance anoche.', arm: 'Կոնստանսի հետ թեժ վիճաբանությունը նախորդ գիշեր։' },
    optionB: { esp: 'Martín y Monita hablando en la oficina hoy.', arm: 'Մարտինի և Մոնիտայի այսօրվա խոսակցությունը գրասենյակում։' },
    correctOption: 'A',
    explanationEsp: 'La discusión con Constance tuvo lugar la noche anterior ("anoche"), antes del encuentro de hoy.',
    explanationArm: 'Կոնստանսի հետ վեճը եղել էր նախորդ գիշեր («anoche»), իսկ այսօր նրանք գրասենյակում են։'
  },
  {
    id: 3,
    situationArm: 'Ո՞ր արտահայտությունն է հնչում ավելի շուտ։',
    optionA: { esp: 'Él dice: "Moría por un café".', arm: 'Նա ասում է. «Մեռնում էի սուրճի համար»։' },
    optionB: { esp: 'Ella dice: "No vino la Kimberly, no vino la Yara".', arm: 'Աղջիկն ասում է. «Քիմբերլին չեկավ, Յարան չեկավ»։' },
    correctOption: 'A',
    explanationEsp: '"Moría por un café" se dice a los 10 segundos, mientras que la mención a Kimberly es casi al final (0:51).',
    explanationArm: '«Moría por un café»-ն ասվում է 10-րդ վայրկյանին, իսկ Քիմբերլիի մասին՝ 51-րդ վայրկյանին։'
  },
  {
    id: 4,
    situationArm: 'Ի՞նչ է տեղի ունենում առաջինը։',
    optionA: { esp: 'Ella le pide que no fume ni beba.', arm: 'Աղջիկը խնդրում է չծխել ու չխմել։' },
    optionB: { esp: 'Él le dice: "Eh, morita, pará, pará, pará".', arm: 'Տղամարդն ասում է. «Է՜յ, մորիտա՛, սպասի՛ր, սպասի՛ր»։' },
    correctOption: 'A',
    explanationEsp: 'El consejo sobre el pucho y la bebida ocurre a los 0:33, y él la detiene a los 0:54.',
    explanationArm: 'Ծխելու մասին նախազգուշացումը հնչում է 0:33-ին, իսկ կանգնեցնելու խոսքերը՝ 0:54-ին։'
  },
  {
    id: 5,
    situationArm: 'Ո՞ր խոսքն է ասվում առաջինը։',
    optionA: { esp: 'Ella pregunta: "¿Y por verme, a mí no moría?".', arm: 'Աղջիկը հարցնում է. «Իսկ ինձ տեսնելո՞ւ համար չէիք մեռնում»։' },
    optionB: { esp: 'Ella dice: "Me voy para el office".', arm: 'Աղջիկն ասում է. «Գնում եմ օֆիս/խոհանոց»։' },
    correctOption: 'A',
    explanationEsp: 'La broma sobre verse ocurre en el segundo 0:13, y el intento de irse al office a los 0:49.',
    explanationArm: 'Հարցը հնչում է 0:13-ին, իսկ հեռանալու փորձը՝ 0:49-ին։'
  },
  {
    id: 6,
    situationArm: 'Ո՞ր իրադարձությունն է նախորդում մյուսին։',
    optionA: { esp: 'Martín dice que ella cura de todos los males.', arm: 'Մարտինն ասում է. «Այո՛, իսկ դու բուժում ես բոլոր ցավերից»։' },
    optionB: { esp: 'Martín le dice: "Nenita... ¿Te querés casar conmigo?".', arm: 'Մարտինն ասում է. «Փոքրի՛կս... Կամուսնանա՞ս ինձ հետ»։' },
    correctOption: 'A',
    explanationEsp: '"Vos curás de todos los males" se dice a los 0:29, mientras la propuesta es la frase final (1:08).',
    explanationArm: '«Vos curás de todos los males» ասվում է 0:29-ին, իսկ առաջարկությունը՝ ամենավերջում (1:08)։'
  },
  {
    id: 7,
    situationArm: 'Ի՞նչն է նախորդում ամուսնության առաջարկին։',
    optionA: { esp: 'Él dice: "Te quiero pedir algo porque no puedo aguantar más".', arm: 'Նա ասում է. «Ուզում եմ քեզնից մի բան խնդրել, որովհետև էլ չեմ կարողանում դիմանալ»։' },
    optionB: { esp: 'La pregunta: "¿Te querés casar conmigo?".', arm: 'Հարցը. «Կամուսնանա՞ս ինձ հետ»։' },
    correctOption: 'A',
    explanationEsp: 'Primero él anuncia que no puede aguantar más y quiere pedirle algo, y después formula la propuesta.',
    explanationArm: 'Նախ նա ասում է, որ էլ չի դիմանում և ուզում է մի բան խնդրել, ապա նոր տալիս է բուն հարցը։'
  },
  {
    id: 8,
    situationArm: 'Ո՞րն է սկզբում՝ Մոնիտայի մտահոգությո՞ւնը, թե՞ գրասենյակի ժողովի հիշատակումը։',
    optionA: { esp: 'Ella le confiesa que anoche se quedó "re mal" al verlo preocupado.', arm: 'Աղջիկը խոստովանում է, որ երեկ գիշեր շատ վատ է զգացել՝ նրան տեսնելով մտահոգ։' },
    optionB: { esp: 'Ella habla de Kimberly, Yara y Alfredo.', arm: 'Աղջիկը խոսում է Քիմբերլիի, Յարայի և Ալֆրեդոյի մասին։' },
    correctOption: 'A',
    explanationEsp: 'Primero comparten el momento emotivo de cómo pasaron la noche (0:19), y más tarde ella habla de sus compañeros de oficina (0:51).',
    explanationArm: 'Սկզբում նրանք քննարկում են անցած գիշերվա ապրումները (0:19), իսկ գործընկերների մասին նա խոսում է 0:51-ին։'
  }
];

// 7. PREGUNTAS DE REFLEXIÓN (6 situational & interpretive questions)
export const PREGUNTAS_REFLEXION: ReflexionQuestion[] = [
  {
    id: 1,
    questionEsp: '¿Crees que ella esperaba la propuesta de matrimonio en ese momento?',
    questionArm: 'Կարծո՞ւմ ես, որ նա սպասում էր ամուսնության առաջարկին հենց այդ պահին։',
    options: [
      {
        letter: 'A',
        esp: 'No, parecía completamente desprevenida porque ya se iba al office a trabajar.',
        arm: 'Ո՛չ, նա բոլորովին անպատրաստ էր թվում, քանի որ արդեն հեռանում էր դեպի օֆիս՝ աշխատելու։',
        insightEsp: 'Excelente observación. Su lenguaje corporal muestra sorpresa total cuando él la detiene justo cuando se marchaba.',
        insightArm: 'Հիանալի դիտարկում։ Նրա մարմնի լեզուն ցույց է տալիս լիակատար անակնկալ, երբ Մարտինը կանգնեցնում է նրան հեռանալու պահին։'
      },
      {
        letter: 'B',
        esp: 'Sí, en el fondo sabía que entre ellos existía un amor profundo que tarde o temprano se declararía.',
        arm: 'Այո՛, խորքում նա գիտեր, որ իրենց միջև խոր սեր կա, որը վաղ թե ուշ պիտի բացահայտվեր։',
        insightEsp: 'Muy perspicaz. La complicidad y las miradas previas demuestran que el sentimiento era correspondido desde hacía tiempo.',
        insightArm: 'Շատ խորաթափանց է։ Նրանց նախորդ հայացքներն ու մտերմությունն ապացուցում են, որ զգացմունքը վաղուց փոխադարձ էր։'
      },
      {
        letter: 'C',
        esp: 'Es difícil saberlo con certeza: esperaba una muestra de cariño, pero tal vez no un pedido de matrimonio formal.',
        arm: 'Դժվար է վստահ ասել. գուցե սպասում էր քնքշանքի, բայց ոչ պաշտոնական ամուսնության առաջարկի։',
        insightEsp: 'Una lectura equilibrada y psicológica. El salto de una charla casual con café a pedir la mano es un giro dramático.',
        insightArm: 'Հավասարակշռված հոգեբանական տեսակետ։ Սուրճի շուրջ առօրյա զրույցից անցումը ամուսնության առաջարկի՝ դրամատիկ շրջադարձ է։'
      }
    ]
  },
  {
    id: 2,
    questionEsp: '¿Por qué crees que él estaba tan preocupado la noche anterior?',
    questionArm: 'Ինչո՞ւ էր նա այդքան մտահոգ նախորդ գիշեր՝ ըստ քեզ։',
    options: [
      {
        letter: 'A',
        esp: 'Por la fuerte discusión con Constance y el peso de una relación que ya no lo hacía feliz.',
        arm: 'Կոնստանսի հետ ուժեղ վիճաբանության և մի հարաբերության ծանրության պատճառով, որն իրեն այլևս երջանիկ չէր դարձնում։',
        insightEsp: 'Punto exacto. La mención de Constance revela el conflicto sentimental que Martín cargaba.',
        insightArm: 'Ճիշտ կետին։ Կոնստանսի հիշատակումը բացահայտում է այն զգացմունքային կոնֆլիկտը, որը տանջում էր Մարտինին։'
      },
      {
        letter: 'B',
        esp: 'Porque sentía una lucha interna entre sus obligaciones y sus verdaderos sentimientos hacia Monita.',
        arm: 'Քանի որ նրա մեջ ներքին պայքար կար պարտավորությունների և Մոնիտայի հանդեպ իրական զգացմունքների միջև։',
        insightEsp: 'Gran análisis emocional. Darse cuenta de a quién ama de verdad provoca una intensa crisis antes de dar el paso definitivo.',
        insightArm: 'Հիանալի զգացմունքային վերլուծություն։ Հասկանալը, թե ում է իրականում սիրում, ճգնաժամ էր առաջացրել նախքան վճռական քայլը։'
      },
      {
        letter: 'C',
        esp: 'Por problemas laborales y estrés general en la empresa.',
        arm: 'Աշխատանքային խնդիրների և ընկերության ընդհանուր սթրեսի պատճառով։',
        insightEsp: 'Interesante ángulo. Aunque el detonante directo fue Constance, las tensiones de la oficina también influyen en su estado.',
        insightArm: 'Հետաքրքիր անկյուն։ Թեև գլխավոր առիթը Կոնստանսն էր, գրասենյակային լարվածությունն էլ կարող էր իր դերն ունենալ։'
      }
    ]
  },
  {
    id: 3,
    questionEsp: '¿Cómo cambia el estado de ánimo de él durante la conversación?',
    questionArm: 'Ինչպե՞ս է փոխվում նրա տրամադրությունը խոսակցության ընթացքում։',
    options: [
      {
        letter: 'A',
        esp: 'Pasa del cansancio y la pesadumbre a la calma, y finalmente a la valentía apasionada.',
        arm: 'Հոգնածությունից ու ծանրությունից անցնում է հանդարտության, իսկ վերջում՝ կրքոտ քաջության։',
        insightEsp: 'Exactamente así evoluciona el personaje: la calidez de ella lo transforma en pocos minutos.',
        insightArm: 'Հենց այդպես էլ զարգանում է կերպարը. աղջկա ջերմությունը մի քանի րոպեում կերպարանափոխում է նրան։'
      },
      {
        letter: 'B',
        esp: 'Comienza deprimido pero el cappuccino le da suficiente energía para hablar de negocios.',
        arm: 'Սկսում է ընկճված, բայց կապուչինոն բավարար էներգիա է տալիս բիզնեսից խոսելու համար։',
        insightEsp: 'Buena observación práctica, aunque el motor de su cambio fue sobre todo la presencia afectiva de ella.',
        insightArm: 'Լավ գործնական դիտարկում, թեև նրա փոփոխության գլխավոր շարժիչ ուժը հենց աղջկա սիրալիր ներկայությունն էր։'
      },
      {
        letter: 'C',
        esp: 'Mantiene una postura seria y distante hasta el último segundo.',
        arm: 'Պահպանում է լուրջ և հեռավոր դիրք մինչև վերջին վայրկյանը։',
        insightEsp: 'Buena interpretación exterior: intenta disimular su tormento interior hasta que ya no puede reprimir sus sentimientos.',
        insightArm: 'Լավ արտաքին մեկնաբանություն. նա փորձում է զսպել ներքին փոթորիկը, մինչև այլևս չի կարողանում պահել զգացմունքները։'
      }
    ]
  },
  {
    id: 4,
    questionEsp: '¿Qué frase del diálogo demuestra un cariño más profundo?',
    questionArm: 'Երկխոսության ո՞ր նախադասությունն է արտահայտում առավել խոր քնքշանք։',
    options: [
      {
        letter: 'A',
        esp: '"Sí, y vos curás de todos los males."',
        arm: '«Այո՛, իսկ դու բուժում ես բոլոր ցավերից»։',
        insightEsp: 'Una metáfora hermosísima: eleva a la otra persona al estatus de bálsamo y salvación emocional.',
        insightArm: 'Չափազանց գեղեցիկ փոխաբերություն. նա աղջկան համարում է իր հոգու բալասանն ու փրկությունը։'
      },
      {
        letter: 'B',
        esp: '"Lo único que le pido es que no se le dé por el pucho y la bebida porque me va a terminar muy mal usted."',
        arm: '«Միակ բանը՝ չսկսեք ծխախոտ քաշել ու խմել, այլապես շատ վատ կավարտվի ձեր վիճակը»։',
        insightEsp: 'El verdadero amor también se muestra en la preocupación sincera por la salud y el bienestar del otro.',
        insightArm: 'Իրական սերը դրսևորվում է նաև դիմացինի առողջության ու ապագայի հանդեպ անկեղծ հոգատարությամբ։'
      },
      {
        letter: 'C',
        esp: '"Anoche lo sentí tan preocupado que le juro me quedé re mal."',
        arm: '«Երեկ գիշեր ձեզ այնքան մտահոգ տեսա, որ երդվում եմ՝ ես էլ ահավոր վատ զգացի»։',
        insightEsp: 'Muestra una empatía total: el sufrimiento de él se convirtió instantáneamente en sufrimiento de ella.',
        insightArm: 'Ցույց է տալիս լիակատար էմպաթիա. տղամարդու տանջանքն ակնթարթորեն դարձել էր նաև աղջկա ցավը։'
      }
    ]
  },
  {
    id: 5,
    questionEsp: '¿Qué parte del diálogo te parece la más inesperada o espontánea?',
    questionArm: 'Երկխոսության ո՞ր մասն է քեզ թվում ամենաանսպասելին կամ ինքնաբուխը։',
    options: [
      {
        letter: 'A',
        esp: 'Cuando ella finge que se va para el office y él grita "¡Pará, pará, pará!" desesperado.',
        arm: 'Երբ նա ձևացնում է, թե գնում է օֆիս, իսկ տղամարդը հուսահատ կանչում է՝ «Սպասի՛ր, սպասի՛ր, սպասի՛ր»։',
        insightEsp: 'Ese momento rompe el ritmo rutinario de la oficina y desata la confesión inmediata.',
        insightArm: 'Այդ պահը կոտրում է գրասենյակի առօրյա ռիթմը և սանձազերծում անհապաղ խոստովանությունը։'
      },
      {
        letter: 'B',
        esp: 'El paso instantáneo del reproche por el cigarrillo al apodo "morita".',
        arm: 'Անմիջական անցումը սիգարետի նախատինքից դեպի «morita» քնքուշ մականունը։',
        insightEsp: 'Muestra el juego de contrastes típico de las parejas apasionadas en la comedia romántica.',
        insightArm: 'Ցույց է տալիս կրքոտ զույգերի հակադրությունների խաղը ռոմանտիկ կատակերգությունում։'
      },
      {
        letter: 'C',
        esp: 'La sencillez con la que él suelta la propuesta final sin adornos: "Nenita... ¿Te querés casar conmigo?".',
        arm: 'Այն պարզությունը, որով նա առանց ավելորդ զարդարանքների ասում է. «Փոքրի՛կս... Կամուսնանա՞ս ինձ հետ»։',
        insightEsp: 'La falta de pompa y la pureza directa de la frase le otorgan una emoción conmovedora.',
        insightArm: 'Պերճախոսության բացակայությունն ու անկեղծ պարզությունը նախադասությանը հուզիչ ուժ են հաղորդում։'
      }
    ]
  },
  {
    id: 6,
    questionEsp: '¿Qué harías tú si recibieras una propuesta de matrimonio tan inesperada en el trabajo?',
    questionArm: 'Ի՞նչ կանեիր դու, եթե աշխատավայրում նման անսպասելի ամուսնության առաջարկ ստանայիր։',
    options: [
      {
        letter: 'A',
        esp: 'Diría que sí inmediatamente, porque el amor no entiende de lugares ni momentos perfectos.',
        arm: 'Անմիջապես «այո» կասեի, որովհետև սերը վայրեր ու կատարյալ պահեր չի ճանաչում։',
        insightEsp: '¡Una postura romántica y decidida! Las grandes oportunidades de la vida se toman con el corazón.',
        insightArm: 'Ռոմանտիկ ու վճռական մոտեցում։ Կյանքի մեծ հնարավորությունները ընդունվում են սրտով։'
      },
      {
        letter: 'B',
        esp: 'Me quedaría sin palabras, pediría un momento para asimilar la sorpresa y luego contestaría con calma.',
        arm: 'Կապշեի, մի պահ կխնդրեի անակնկալն ըմբռնելու համար և ապա հանգիստ կպատասխանեի։',
        insightEsp: 'Una reacción muy natural y prudente. Un shock emocional tan grande requiere unos segundos para respirar.',
        insightArm: 'Շատ բնական ու խոհեմ արձագանք։ Նման ուժեղ հուզական շոկը մի քանի վայրկյան շունչ քաշել է պահանջում։'
      },
      {
        letter: 'C',
        esp: 'Le preguntaría: "¿Estás bromeando o lo dices completamente en serio?", asegurándome antes de responder.',
        arm: 'Կհարցնեի. «Կատա՞կ ես անում, թե՞ լրիվ լուրջ ես ասում»՝ նախքան պատասխանելը վստահ լինելու համար։',
        insightEsp: 'Muy sensato. Dado el tono juguetón que venían teniendo con el café, verificar la seriedad es muy lógico.',
        insightArm: 'Շատ տրամաբանական է։ Հաշվի առնելով նրանց կատակախառն զրույցը՝ լրջությունը ճշտելը շատ բնական է։'
      },
      {
        letter: 'D',
        esp: 'Le daría un abrazo fuerte primero, dejando que el gesto hable antes que cualquier palabra.',
        arm: 'Նախ ամուր կգրկեի նրան՝ թույլ տալով, որ գրկախառնությունը խոսի ցանկացած բառից առաջ։',
        insightEsp: 'Una respuesta tierna y cálida: el afecto físico resuelve la tensión al instante y confirma el vínculo.',
        insightArm: 'Քնքուշ ու ջերմ պատասխան. գրկախառնությունն ակնթարթորեն լիցքաթափում է լարվածությունը։'
      }
    ]
  }
];

// 8. MINI-DIÁLOGOS (6 practical everyday situations)
export const MINI_DIALOGOS: MiniDialogoQuestion[] = [
  {
    id: 1,
    situationEsp: 'Situación 1: Tu amigo está preocupado y agobiado.',
    situationArm: 'Իրավիճակ 1. Քո ընկերը մտահոգված է և ընկճված։',
    speakerPromptEsp: 'Él te dice suspirando: "Estoy muy preocupado por todo lo que pasó".',
    speakerPromptArm: 'Նա հոգոց հանելով ասում է. «Ես շատ մտահոգ եմ այն ամենի համար, ինչ տեղի ունեցավ»։',
    optionsEsp: [
      'No te preocupes, estoy aquí para lo que necesites.',
      'Buenos días, ¿cuánto cuesta el cappuccino?',
      'Ayer llovió mucho en la plaza.',
      'No compré el billete de tren.'
    ],
    correctIndex: 0,
    explanationEsp: '"No te preocupes, estoy aquí" es la fórmula solidaria y empática para apoyar a alguien.',
    explanationArm: '«No te preocupes, estoy aquí» (Մի՛ անհանգստացիր, ես այստեղ եմ) կարեկցանքի և աջակցության ամենաբնական արտահայտությունն է։'
  },
  {
    id: 2,
    situationEsp: 'Situación 2: Quieres pedirle algo muy importante a tu pareja.',
    situationArm: 'Իրավիճակ 2. Ուզում ես շատ կարևոր մի բան խնդրել քո սիրելիից։',
    speakerPromptEsp: '¿Cuál es la forma más natural y correcta para introducir la petición?',
    speakerPromptArm: 'Ո՞րն է խնդրանքը ներկայացնելու ամենաբնական և ճիշտ ձևը։',
    optionsEsp: [
      'Te quiero pedir algo importante.',
      'Yo pedir ayer una cosa tú.',
      'Quiero que tú algo me des.',
      'Estoy pedir favor rápido.'
    ],
    correctIndex: 0,
    explanationEsp: '"Te quiero pedir algo" es la estructura idónea, directa y afectuosa para pedir un favor o dar un paso.',
    explanationArm: '«Te quiero pedir algo importante» արտահայտությունն առավել ճիշտ և բնական նախադասությունն է։'
  },
  {
    id: 3,
    situationEsp: 'Situación 3: Llegas por la mañana a una oficina y saludas a tus compañeros con café.',
    situationArm: 'Իրավիճակ 3. Առավոտյան գալիս ես գրասենյակ և ողջունում ես գործընկերներիդ սուրճով։',
    speakerPromptEsp: '¿Qué frase animada y amigable puedes decir al entrar?',
    speakerPromptArm: 'Ի՞նչ աշխույժ ու բարյացակամ արտահայտություն կարող ես ասել ներս մտնելիս։',
    optionsEsp: [
      '¡Hola, hola, buen día! ¿Quién quiere café?',
      'Cierren la puerta que tengo frío.',
      'No me gusta hablar con nadie por la mañana.',
      'Ayer terminé el trabajo a medianoche.'
    ],
    correctIndex: 0,
    explanationEsp: '"¡Hola, hola, buen día!" es un saludo alegre, optimista y muy hispanoamericano.',
    explanationArm: '«¡Hola, hola, buen día!» ուրախ և բարյացակամ ողջույն է, որը դրական տրամադրություն է ստեղծում։'
  },
  {
    id: 4,
    situationEsp: 'Situación 4: Alguien tiene prisa y se quiere ir rápido, pero necesitas que espere un segundo.',
    situationArm: 'Իրավիճակ 4. Ինչ-որ մեկը շտապում է հեռանալ, բայց քեզ պետք է, որ նա մի վայրկյան սպասի։',
    speakerPromptEsp: 'En un ambiente de confianza argentino, ¿cómo le dices amistosamente que se detenga?',
    speakerPromptArm: 'Արգենտինական մտերմիկ միջավայրում ինչպե՞ս ընկերաբար կասես, որ սպասի։',
    optionsEsp: [
      '¡Eh, pará un segundo! Te quiero decir una cosa.',
      '¡Corré rápido que llegás tarde!',
      'No hables con nadie en el pasillo.',
      'Hasta la semana que viene.'
    ],
    correctIndex: 0,
    explanationEsp: '"¡Pará un segundo!" (con el imperativo rioplatense pará) es la forma cotidiana exacta.',
    explanationArm: '«¡Eh, pará un segundo!» արգենտինական vos հրամայականով ամենահարմար և կենդանի տարբերակն է։'
  },
  {
    id: 5,
    situationEsp: 'Situación 5: Un compañero te dice que le duele la cabeza por el estrés.',
    situationArm: 'Իրավիճակ 5. Գործընկերդ ասում է, որ սթրեսից գլուխը ցավում է։',
    speakerPromptEsp: 'Él te dice: "Tengo un dolor de cabeza tremendo después de esa reunión".',
    speakerPromptArm: 'Նա ասում է. «Սարսափելի գլխացավ ունեմ այդ ժողովից հետո»։',
    optionsEsp: [
      'Descansá un ratito y tomá un vaso de agua, te va a hacer bien.',
      'Trabajá el doble ahora mismo.',
      'No me interesa tu problema.',
      'El tren pasa a las cinco.'
    ],
    correctIndex: 0,
    explanationEsp: 'Aconsejarle descansar y beber agua demuestra cuidado empático en la conversación cotidiana.',
    explanationArm: '«Descansá un ratito y tomá un vaso de agua...» խորհուրդ տալը ցուցաբերում է հոգատար վերաբերմունք։'
  },
  {
    id: 6,
    situationEsp: 'Situación 6: Te preguntan cómo te sientes después de unos días de descanso.',
    situationArm: 'Իրավիճակ 6. Քեզ հարցնում են, թե ինչպես ես քեզ զգում մի քանի օր հանգստանալուց հետո։',
    speakerPromptEsp: 'Te preguntan: "¿Cómo te sentís hoy?".',
    speakerPromptArm: 'Քեզ հարցնում են. «Ինչպե՞ս ես քեզ զգում այսօր»։',
    optionsEsp: [
      'La verdad es que ahora me siento mucho mejor, gracias por preguntar.',
      'Ayer compré tres kilos de manzanas.',
      'No sé dónde dejé el paraguas.',
      'El coche se quedó sin gasolina.'
    ],
    correctIndex: 0,
    explanationEsp: '"Ahora me siento mucho mejor" es la respuesta adecuada para expresar recuperación.',
    explanationArm: '«La verdad es que ahora me siento mucho mejor...» ճիշտ և բնական պատասխանն է։'
  }
];

// 9. RETO FINAL (10 comprehensive mixed questions)
export const RETO_FINAL_QUESTIONS: RetoFinalQuestion[] = [
  {
    id: 1,
    category: 'comprension',
    categoryLabel: 'Comprensión del vídeo',
    questionEsp: '¿Qué bebida le lleva Monita a Martín en la oficina?',
    questionArm: 'Ի՞նչ ըմպելիք է Մոնիտան բերում Մարտինին գրասենյակում։',
    options: ['Un zumo de naranja', 'Un cappuccino', 'Un té con limón', 'Un mate caliente'],
    correctIndex: 1,
    explanationEsp: 'Monita entra exclamando con alegría: "Llegó el cappuccino".',
    explanationArm: 'Մոնիտան ուրախ ասում է. «Llegó el cappuccino»։'
  },
  {
    id: 2,
    category: 'argentino',
    categoryLabel: 'Español de Argentina',
    questionEsp: '¿Cómo se dice "¿Tú quieres?" en el voseo rioplatense (de Argentina)?',
    questionArm: 'Ինչպե՞ս է հնչում «¿Tú quieres?»-ը արգենտինական voseo-ում։',
    options: ['¿Tú querés?', '¿Vos querés?', '¿Vos quieres?', '¿Usted queréis?'],
    correctIndex: 1,
    explanationEsp: 'El pronombre es "vos" y el verbo lleva acento agudo en la última sílaba: "vos querés".',
    explanationArm: 'Ճիշտ արգենտինական տարբերակն է «vos querés» (շեշտը վերջում)։'
  },
  {
    id: 3,
    category: 'lexico',
    categoryLabel: 'Léxico coloquial',
    questionEsp: '¿Qué significa la palabra argentina "pucho"?',
    questionArm: 'Ի՞նչ է նշանակում արգենտինական «pucho» բառը։',
    options: ['Սուրճի բաժակ', 'Սիգարետ / ծխախոտ', 'Գրասենյակի բանալի', 'Ամուսնական մատանի'],
    correctIndex: 1,
    explanationEsp: '"Pucho" es la voz lunfarda para cigarrillo.',
    explanationArm: '«Pucho» նշանակում է սիգարետ / ծխախոտ։'
  },
  {
    id: 4,
    category: 'quien',
    categoryLabel: '¿Quién lo dijo?',
    questionEsp: '¿Quién dice: "Sí, y vos curás de todos los males"?',
    questionArm: 'Ո՞վ է ասում. «Sí, y vos curás de todos los males»:',
    options: ['Martín (Él)', 'Monita (Ella)', 'Constance', 'Alfredo'],
    correctIndex: 0,
    explanationEsp: 'Martín se lo dice con profundo agradecimiento a Monita.',
    explanationArm: 'Մարտինն է դա ասում Մոնիտային («Այո՛, իսկ դու բուժում ես բոլոր ցավերից»)։'
  },
  {
    id: 5,
    category: 'traduccion',
    categoryLabel: 'Traduce al español',
    questionEsp: '¿Cómo se traduce correctamente: «Ես այլևս չեմ կարող դիմանալ»?',
    questionArm: 'Ինչպե՞ս է ճիշտ թարգմանվում. «Ես այլևս չեմ կարող դիմանալ»։',
    options: ['No quiero hablar más.', 'No tengo más fuerza.', 'No puedo aguantar más.', 'No pienso más.'],
    correctIndex: 2,
    explanationEsp: '"No puedo aguantar más" expresa no soportar más una situación o emoción.',
    explanationArm: '«No puedo aguantar más» նշանակում է «Էլ չեմ կարողանում դիմանալ»։'
  },
  {
    id: 6,
    category: 'lexico',
    categoryLabel: 'Léxico coloquial',
    questionEsp: 'En la frase "Me quedé re mal", ¿qué función cumple el prefijo "re-"?',
    questionArm: '«Me quedé re mal» նախադասության մեջ ի՞նչ դեր ունի «re-» նախածանցը։',
    options: [
      'Ժխտում է իմաստը (ինչպես «ոչ»)',
      'Ուժեղացնում է իմաստը («շատ / չափազանց»)',
      'Ցույց է տալիս գործողության կրկնություն',
      'Փոխում է բայի ժամանակը ապառնիի'
    ],
    correctIndex: 1,
    explanationEsp: 'En el español rioplatense, "re-" es un prefijo intensificador popular equivalente a "muy" o "súper".',
    explanationArm: '«Re-» նախածանցը արգենտինական խոսակցականում ուժեղացուցիչ է («շատ / չափազանց»)։'
  },
  {
    id: 7,
    category: 'secuencia',
    categoryLabel: 'Secuencia de eventos',
    questionEsp: '¿Qué ocurre antes en el vídeo?',
    questionArm: 'Ի՞նչն է տեղի ունենում ավելի շուտ տեսանյութում։',
    options: [
      'Monita dice que no vino la Kimberly y se marcha hacia el office.',
      'Martín le pide matrimonio diciendo: "¿Te querés casar conmigo?".'
    ],
    correctIndex: 0,
    explanationEsp: 'Primero Monita se prepara para irse al office; al intentar irse, él la frena y le propone matrimonio.',
    explanationArm: 'Սկզբում Մոնիտան պատրաստվում է գնալ օֆիս, ապա տղամարդը կանգնեցնում է նրան և առաջարկ անում։'
  },
  {
    id: 8,
    category: 'comprension',
    categoryLabel: 'Comprensión del diálogo',
    questionEsp: '¿Con quién tuvo una "agarrada muy fuerte" Martín la noche anterior?',
    questionArm: 'Ո՞ւմ հետ էր Մարտինը նախորդ գիշեր «ուժեղ վիճաբանություն» (agarrada) ունեցել։',
    options: ['Con Monita', 'Con Constance', 'Con Kimberly', 'Con el camarero'],
    correctIndex: 1,
    explanationEsp: 'Martín confiesa: "Sí, tuve una agarrada muy fuerte con Constance".',
    explanationArm: 'Մարտինն ասում է. «Sí, tuve una agarrada muy fuerte con Constance»։'
  },
  {
    id: 9,
    category: 'argentino',
    categoryLabel: 'Español de Argentina',
    questionEsp: '¿Qué significa la palabra "pará" cuando Martín dice "Eh, morita, pará, pará"?',
    questionArm: 'Ի՞նչ է նշանակում «pará»-ն, երբ Մարտինն ասում է. «Eh, morita, pará, pará»:',
    options: [
      'Վազի՛ր',
      'Կա՛նգ առ / սպասի՛ր (հրամայական vos-ի համար)',
      'Երգի՛ր',
      'Ուրախացի՛ր'
    ],
    correctIndex: 1,
    explanationEsp: '"Pará" es la orden o ruego de detenerse en voseo argentino (acento agudo en la -á).',
    explanationArm: '«Pará»-ն նշանակում է սպասի՛ր կամ կա՛նգ առ։'
  },
  {
    id: 10,
    category: 'traduccion',
    categoryLabel: 'Traduce al español',
    questionEsp: '¿Cuál es la forma rioplatense exacta de la propuesta final?',
    questionArm: 'Ո՞րն է վերջնական առաջարկի ճշգրիտ արգենտինական տարբերակը տեսանյութում։',
    options: [
      '¿Quieres casarte conmigo mañana?',
      '¿Te querés casar conmigo?',
      '¿Desea usted casarse conmigo?',
      '¿Vamos a casarnos nosotros?'
    ],
    correctIndex: 1,
    explanationEsp: 'La frase cumbre del diálogo es: "Nenita... ¿Te querés casar conmigo?".',
    explanationArm: 'Տեսանյութի գագաթնակետային հարցն է. «Nenita... ¿Te querés casar conmigo?»։'
  }
];
