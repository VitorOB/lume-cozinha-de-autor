import { useSite } from "../i18n/lang";

/** Etiqueta que marca conteúdo fictício ou links que ainda não funcionam. */
export function DemoTag() {
  const { demoTag } = useSite().site;
  return (
    <span className="inline-block border border-gold/50 px-2 py-0.5 text-xs leading-5 tracking-[0.18em] text-gold uppercase">
      {demoTag}
    </span>
  );
}
