import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { brand, navigation } from "../data/site";
import { MobileMenu } from "./MobileMenu";

const MENU_ID = "menu-mobile";

/** Transparente sobre o hero; ganha fundo escuro depois de rolar. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Devolve o foco ao botão que abriu o menu.
    menuButton.current?.focus();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Fundo em camada própria: muda só a opacidade. */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 border-b border-gold/20 bg-ink/95 transition-opacity duration-500 ease-lume ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative mx-auto flex h-20 max-w-[90rem] items-center justify-between px-6 md:px-10">
          <a
            href="#topo"
            className="flex min-h-11 items-center font-display text-2xl tracking-[0.32em] text-ivory"
          >
            <span aria-hidden="true">{brand.name.toUpperCase()}</span>
            <span className="sr-only">
              {brand.name} — {brand.tagline}, voltar ao início
            </span>
          </a>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-11">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline justify-center text-[0.8125rem] tracking-[0.14em] text-ivory uppercase"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#reservas" className="btn btn-gold btn-compact">
              Reservar
            </a>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              onClick={() => setMenuOpen(true)}
              className="-mr-3 flex h-12 w-12 items-center justify-center text-ivory md:hidden"
            >
              <Menu aria-hidden="true" size={26} strokeWidth={1.25} />
              <span className="sr-only">Abrir menu</span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu id={MENU_ID} open={menuOpen} onClose={closeMenu} />
    </>
  );
}
