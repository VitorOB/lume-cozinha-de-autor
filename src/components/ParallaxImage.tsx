import { useEffect, useRef } from "react";
import { scroll } from "motion";
import type { SiteImage } from "../data/site";
import { DESKTOP, REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";
import { Picture } from "./Picture";

/** Deslocamento total do parallax, em px (20 para cima, 20 para baixo). */
const TRAVEL = 40;

type ParallaxImageProps = {
  image: SiteImage;
  sizes: string;
  /** Proporção da moldura, ex.: "4 / 5". Padrão: a proporção da própria foto. */
  ratio?: string;
  className?: string;
};

/**
 * Foto grande com parallax sutil (no máximo 40 px) e zoom de 1.03 no hover.
 * O parallax fica desligado no celular e com `prefers-reduced-motion`.
 */
export function ParallaxImage({ image, sizes, ratio, className = "" }: ParallaxImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery(DESKTOP);
  const reduced = useMediaQuery(REDUCED_MOTION);
  const active = isDesktop && !reduced;

  useEffect(() => {
    const frameEl = frame.current;
    const layerEl = layer.current;
    if (!active || !frameEl || !layerEl) return;

    // progresso 0 → a foto entra por baixo da tela; 1 → sai por cima.
    const stop = scroll(
      (progress: number) => {
        const y = (progress - 0.5) * TRAVEL;
        layerEl.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      },
      { target: frameEl, offset: ["start end", "end start"] },
    );

    return () => {
      stop();
      layerEl.style.transform = "";
    };
  }, [active]);

  return (
    <div
      ref={frame}
      className={`photo-frame relative overflow-hidden bg-coal ${className}`}
      style={{ aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
    >
      {/* A camada é 40 px mais alta que a moldura, para o deslocamento nunca mostrar a borda. */}
      <div ref={layer} className="absolute inset-x-0 -top-5 -bottom-5 will-change-transform">
        <Picture
          image={image}
          sizes={sizes}
          className="photo-zoom h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
