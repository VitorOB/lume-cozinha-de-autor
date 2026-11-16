import { useSyncExternalStore } from "react";

/**
 * Acompanha uma media query. No servidor (pré-renderização) e na hidratação
 * o valor é sempre `false`; depois passa a refletir o navegador.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const DESKTOP = "(min-width: 768px)";
