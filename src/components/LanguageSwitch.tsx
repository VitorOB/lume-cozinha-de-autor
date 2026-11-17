import { useSite } from "../i18n/lang";

/** Botão PT/EN: mostra o idioma de destino. */
export function LanguageSwitch() {
  const { t, setLang } = useSite();
  const { short, label, target } = t.langSwitch;
  return (
    <button
      type="button"
      onClick={() => setLang(target)}
      className="flex h-12 min-w-12 shrink-0 items-center justify-center border border-ivory/40 px-3 text-[0.8125rem] tracking-[0.14em] text-ivory uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
    >
      <span lang={target === "en" ? "en" : "pt-BR"}>
        {short}
        <span className="sr-only"> — {label}</span>
      </span>
    </button>
  );
}
