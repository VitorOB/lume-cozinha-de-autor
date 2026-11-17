/** Textos fixos da interface (fora de site.ts), em português e inglês. */

export type Lang = "pt" | "en";

const pt = {
  skipLink: "Pular para o conteúdo",
  backToTop: "voltar ao início",
  mainNav: "Principal",
  book: "Reservar",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  navDialog: "Menu de navegação",
  footerNav: "Rodapé",
  newTab: "(abre em nova aba)",
  viaWhatsAppNewTab: "pelo WhatsApp (abre em nova aba)",
  course: "Etapa ",
  /** Botão de idioma: mostra o idioma de destino. */
  langSwitch: { short: "EN", label: "View in English", target: "en" as Lang },
};

const en: typeof pt = {
  skipLink: "Skip to content",
  backToTop: "back to top",
  mainNav: "Main",
  book: "Book",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  navDialog: "Navigation menu",
  footerNav: "Footer",
  newTab: "(opens in a new tab)",
  viaWhatsAppNewTab: "on WhatsApp (opens in a new tab)",
  course: "Course ",
  langSwitch: { short: "PT", label: "Ver em português", target: "pt" },
};

export const ui = { pt, en };
export type UiText = typeof pt;
