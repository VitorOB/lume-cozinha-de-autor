import { useEffect, useRef } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
import { X } from "lucide-react";
import { useSite } from "../i18n/lang";

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
};

/**
 * Menu em tela cheia para telas pequenas.
 * Fechado: fica `inert` e invisível. Aberto: o foco vai para o botão de fechar,
 * o Tab circula dentro do painel e o Esc fecha.
 */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const { site, t } = useSite();
  const { brand, hero, navigation } = site;
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    // Espera o painel ficar visível antes de mover o foco para dentro dele.
    const focusTimer = window.setTimeout(() => closeButton.current?.focus(), 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  // Mantém o Tab dentro do painel enquanto ele está aberto.
  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panel.current) return;

    const focusable = panel.current.querySelectorAll<HTMLElement>("a[href], button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const itemStyle = (index: number): CSSProperties => ({
    transitionDelay: open ? `${120 + index * 60}ms` : "0ms",
  });

  const itemClass = `transition-[opacity,transform] duration-500 ease-lume ${
    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
  }`;

  return (
    <div
      ref={panel}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={t.navDialog}
      inert={!open}
      onKeyDown={trapFocus}
      className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink transition-[opacity,visibility] duration-500 ease-lume md:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex h-20 shrink-0 items-center justify-between px-6">
        <span className="font-display text-2xl tracking-[0.32em] text-ivory" aria-hidden="true">
          {brand.name.toUpperCase()}
        </span>
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          className="-mr-3 flex h-12 w-12 items-center justify-center text-ivory"
        >
          <X aria-hidden="true" size={26} strokeWidth={1.25} />
          <span className="sr-only">{t.closeMenu}</span>
        </button>
      </div>

      <hr className="rule mx-6" />

      <nav aria-label={t.mainNav} className="flex flex-1 flex-col justify-center px-6 py-10">
        <ul className="space-y-1">
          {navigation.map((item, index) => (
            <li key={item.href} className={itemClass} style={itemStyle(index)}>
              <a
                href={item.href}
                onClick={onClose}
                className="flex min-h-14 items-baseline gap-5 py-2 font-display text-[2.5rem] leading-none text-ivory"
              >
                <span className="label w-6 shrink-0" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`px-6 pb-10 ${itemClass}`}
        style={itemStyle(navigation.length)}
      >
        <a href={hero.primaryCta.href} onClick={onClose} className="btn btn-gold w-full">
          {hero.primaryCta.label}
        </a>
      </div>
    </div>
  );
}
