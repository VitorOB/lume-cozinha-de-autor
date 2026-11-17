// Toda a informação editável do site fica neste arquivo:
// textos, menu, horários, endereço, redes e contato.

/* ------------------------------------------------------------------ */
/* Contato — preencher antes de publicar                               */
/* ------------------------------------------------------------------ */

export const contact = {
  whatsappNumber: "", // 5531999999999 — preencher antes de publicar
  whatsappMessage:
    "Olá! Gostaria de reservar uma mesa no Lume. Data: , horário: , pessoas: ",
  reservationUrl: "", // link de plataforma de reservas, se houver
  creatorName: "",
  creatorWhatsapp: "",
};

export const creatorMessage =
  "Olá! Vi o site demonstrativo do Lume e quero um site assim para o meu restaurante.";

/* ------------------------------------------------------------------ */
/* Marca e navegação                                                   */
/* ------------------------------------------------------------------ */

export const brand = {
  /** Endereço público do site (sem barra no final). Usado no JSON-LD. */
  url: "https://lume-cozinha-de-autor.vercel.app",
  name: "Lume",
  tagline: "Cozinha de Autor",
  description:
    "Cozinha autoral de ingredientes brasileiros e técnica francesa. Menu degustação em sete etapas e carta reduzida. Jantar de terça a sábado.",
  cuisine: ["Contemporânea", "Brasileira", "Francesa"],
};

export const navigation = [
  { label: "A casa", href: "#a-casa" },
  { label: "Menu", href: "#menu" },
  { label: "Chef", href: "#chef" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Reservas", href: "#reservas" },
];

/* ------------------------------------------------------------------ */
/* Imagens (WebP em 800 e 1600 px, geradas em public/images)           */
/* ------------------------------------------------------------------ */

export type SiteImage = {
  /** Caminho sem sufixo: "/images/prato-1" vira prato-1-800.webp e prato-1-1600.webp */
  base: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  hero: {
    base: "/images/hero",
    width: 1600,
    height: 844,
    alt: "",
  },
  prato1: {
    base: "/images/prato-1",
    width: 1600,
    height: 1066,
    alt: "Fatias de carne maturada ao lado de uma roseta de batata e cebolinha, em prato de cerâmica sobre fundo preto, vistas de cima.",
  },
  prato2: {
    base: "/images/prato-2",
    width: 1600,
    height: 1066,
    alt: "Camarões com purê amarelo, espuma e brotos em um prato fundo de cerâmica escura, sobre mesa de madeira.",
  },
  prato3: {
    base: "/images/prato-3",
    width: 1600,
    height: 1066,
    alt: "Tartelete coberta de figos fatiados e açúcar, com gotas de calda vermelha, vista de cima sobre fundo preto.",
  },
  chef: {
    base: "/images/chef",
    width: 1600,
    height: 2396,
    alt: "Chef de dólmã preta finalizando um prato com as mãos, na penumbra da cozinha. O rosto está fora do quadro.",
  },
  ambiente1: {
    base: "/images/ambiente-1",
    width: 1600,
    height: 1066,
    alt: "Salão na penumbra, com uma mesa de toalha branca iluminada por velas e arandelas ao fundo.",
  },
  ambiente2: {
    base: "/images/ambiente-2",
    width: 1600,
    height: 2400,
    alt: "Balcão de madeira do bar com um coquetel servido, poltrona de veludo em primeiro plano.",
  },
  ambiente3: {
    base: "/images/ambiente-3",
    width: 1600,
    height: 1066,
    alt: "Mesa posta com taças de cristal e guardanapos de linho, iluminada por um único foco de luz.",
  },
  ambiente4: {
    base: "/images/ambiente-4",
    width: 1600,
    height: 2000,
    alt: "Mesa de canto para dois, com taças, uma garrafa de vinho e uma vela acesa junto à parede.",
  },
  ambiente5: {
    base: "/images/ambiente-5",
    width: 1600,
    height: 2402,
    alt: "Coquetel em taça coupe sobre a mesa, iluminado por um facho de luz quente.",
  },
} satisfies Record<string, SiteImage>;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  label: "Cozinha de autor · Somente jantar",
  /** Cada item é uma linha do título, revelada em sequência. */
  titleLines: ["O essencial,", "à luz do fogo."],
  support: "Ingredientes brasileiros de pequenos produtores. Técnica francesa.",
  primaryCta: { label: "Reservar uma mesa", href: "#reservas" },
  secondaryCta: { label: "Conhecer o menu", href: "#menu" },
  scrollHint: "Role",
  video: "/video/hero.mp4",
  pauseLabel: "Pausar vídeo de fundo",
  playLabel: "Reproduzir vídeo de fundo",
};

/* ------------------------------------------------------------------ */
/* Manifesto                                                           */
/* ------------------------------------------------------------------ */

export const manifesto = {
  label: "A casa",
  /** O trecho `highlight` aparece em itálico dourado entre `before` e `after`. */
  before:
    "Cozinhamos o que os produtores colhem na semana. A despensa é brasileira, a técnica é francesa, e o cardápio obedece à ",
  highlight: "estação",
  after: ". O resto é fogo e paciência.",
  signature: "Lume, desde a primeira brasa",
};

/* ------------------------------------------------------------------ */
/* Menu degustação                                                     */
/* ------------------------------------------------------------------ */

export type TastingStep = {
  name: string;
  ingredients: string;
  image?: SiteImage;
};

export const tastingMenu = {
  label: "Menu degustação",
  title: "Sete etapas",
  intro:
    "Uma sequência pensada do primeiro ao último prato. Servida para a mesa inteira.",
  steps: [
    { name: "Ostra", ingredients: "tucupi, maçã verde, óleo de coentro" },
    {
      name: "Palmito pupunha",
      ingredients: "brasa, manteiga noisette, castanha-do-pará",
    },
    {
      name: "Camarão",
      ingredients: "mandioquinha, espuma de moqueca, brotos",
      image: images.prato2,
    },
    {
      name: "Pirarucu",
      ingredients: "beurre blanc de caju, banana-da-terra",
    },
    {
      name: "Carne maturada",
      ingredients: "jus, mil-folhas de batata, cebolinha",
      image: images.prato1,
    },
    {
      name: "Queijo de leite cru",
      ingredients: "mel de abelha nativa, pão de fermentação longa",
    },
    {
      name: "Figo",
      ingredients: "tartelete, creme de coco, calda de jabuticaba",
      image: images.prato3,
    },
  ] as TastingStep[],
  pairingLabel: "Harmonização",
  pairing:
    "Opcional. Um vinho escolhido para cada etapa, com versão sem álcool.",
  note: "Informe restrições alimentares ao reservar.",
  cta: { label: "Reservar para o menu degustação", href: "#reservas" },
};

/* ------------------------------------------------------------------ */
/* À la carte                                                          */
/* ------------------------------------------------------------------ */

export const aLaCarte = {
  label: "À la carte",
  title: "Uma carta curta",
  intro: "Para quem prefere escolher. Poucos pratos, feitos sem pressa.",
  groups: [
    {
      name: "Entradas",
      items: [
        { name: "Beterraba assada", detail: "coalhada seca, noz-pecã" },
        { name: "Vieiras", detail: "couve-flor, baunilha do cerrado" },
        { name: "Terrine de galinha caipira", detail: "picles de maxixe" },
      ],
    },
    {
      name: "Principais",
      items: [
        { name: "Peixe do dia", detail: "arroz de coco, caldo de crustáceos" },
        { name: "Cordeiro", detail: "purê de cará, molho de jabuticaba" },
        { name: "Arroz de cogumelos", detail: "queijo curado, tomilho" },
      ],
    },
    {
      name: "Sobremesas",
      items: [
        { name: "Cacau", detail: "sorvete de cumaru, flor de sal" },
        { name: "Goiaba", detail: "creme de queijo, castanha crocante" },
        { name: "Mandioca", detail: "bolo morno, coco queimado" },
      ],
    },
  ],
  note: "O menu muda com as estações.",
};

/* ------------------------------------------------------------------ */
/* Chef (personagem fictício)                                          */
/* ------------------------------------------------------------------ */

export const chef = {
  label: "O chef",
  name: "Tomás Albernaz",
  bio: [
    "Tomás aprendeu o ofício em cozinhas de Lyon e Paris. Voltou ao Brasil para cozinhar perto de quem planta, pesca e cria.",
    "No Lume, trabalha com uma brigada pequena e produtores que conhece pelo nome. O menu começa na conversa com eles.",
  ],
  quote: "Um prato está pronto quando não há mais nada a tirar.",
  image: images.chef,
};

/* ------------------------------------------------------------------ */
/* Ambiente                                                            */
/* ------------------------------------------------------------------ */

export const ambiance = {
  label: "Ambiente",
  title: "Poucas mesas, luz baixa",
  intro: "Um salão para conversar sem levantar a voz. E um bar para chegar antes, ou ficar depois.",
  photos: [
    { image: images.ambiente1, caption: "O salão" },
    { image: images.ambiente2, caption: "O bar" },
    { image: images.ambiente5, caption: "Coquetelaria" },
    { image: images.ambiente3, caption: "A mesa" },
    { image: images.ambiente4, caption: "Mesa para dois" },
  ],
};

/* ------------------------------------------------------------------ */
/* Reservas                                                            */
/* ------------------------------------------------------------------ */

export const reservations = {
  label: "Reservas",
  title: "Sua mesa",
  intro: "Atendemos apenas com reserva. Escreva com a data, o horário e o número de pessoas.",
  hoursLabel: "Horários",
  hours: [
    { days: "Terça a sábado", time: "Jantar, das 19h às 23h" },
    { days: "Domingo e segunda", time: "Fechado" },
  ],
  policyLabel: "Antes de vir",
  policy: [
    { term: "Tolerância", detail: "15 minutos após o horário reservado." },
    { term: "Traje sugerido", detail: "Esporte fino." },
  ],
  whatsappCta: "Reservar pelo WhatsApp",
  onlineCta: "Reservar online",
  /** Usado no JSON-LD (formato schema.org). */
  openingHoursSchema: ["Tu-Sa 19:00-23:00"],
};

/* ------------------------------------------------------------------ */
/* Localização e rodapé                                                */
/* ------------------------------------------------------------------ */

export const demoTag = "demonstrativo";

export const location = {
  label: "Localização",
  title: "Onde estamos",
  addressLines: ["Rua das Acácias, 120", "Belo Horizonte, MG"],
  /** Usado no JSON-LD. Endereço fictício. */
  schema: {
    streetAddress: "Rua das Acácias, 120",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  addressNote: "Endereço fictício, usado apenas nesta demonstração.",
  mapPlaceholder: "Mapa indisponível na versão demonstrativa",
};

export const social = {
  label: "Redes",
  items: ["Instagram", "Facebook"],
};

export const footer = {
  creditPrefix: "Site demonstrativo",
  creditBy: "criado por",
  creditQuestion: "Quer um site assim para o seu restaurante?",
  creditCta: "Fale comigo",
  mediaCredit: "Fotos e vídeo: Pexels.",
  rights: "Marca e conteúdo fictícios.",
};

/* ------------------------------------------------------------------ */
/* Utilitários de contato                                              */
/* ------------------------------------------------------------------ */

/** Monta o link do WhatsApp. Sem número, abre o seletor de contato (wa.me/?text=). */
export function whatsappLink(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits
    ? `https://wa.me/${digits}?text=${text}`
    : `https://wa.me/?text=${text}`;
}
