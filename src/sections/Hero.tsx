import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { Picture } from "../components/Picture";
import { hero, images } from "../data/site";
import { REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";

const line = (index: number) => ({ "--i": index }) as CSSProperties;

export function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useMediaQuery(REDUCED_MOTION);

  // O vídeo só entra depois que a página terminou de carregar,
  // para não disputar banda com a imagem do hero (LCP).
  const [pageLoaded, setPageLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const showVideo = pageLoaded && !reduced && !videoFailed;
  // Se o vídeo falhar, a foto ganha um zoom lento no lugar.
  const kenBurns = pageLoaded && !reduced && videoFailed;
  const showToggle = showVideo || kenBurns;

  const toggle = () => {
    if (kenBurns) {
      setPlaying((value) => !value);
      return;
    }
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      element.play().catch(() => setPlaying(false));
    } else {
      element.pause();
    }
  };

  const titleLines = hero.titleLines.length;

  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-ink"
    >
      {/* Fundo: a foto (poster) está sempre lá; o vídeo aparece por cima quando pode tocar. */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className={`h-full w-full ${kenBurns ? "kenburns" : ""}`}
          data-paused={kenBurns ? !playing : undefined}
        >
          <Picture
            image={images.hero}
            sizes="100vw"
            priority
            className="h-full w-full object-cover object-[38%_50%]"
          />
        </div>
        {showVideo && (
          <video
            ref={video}
            className={`absolute inset-0 h-full w-full object-cover object-[38%_50%] transition-opacity duration-1000 ease-lume ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            src={hero.video}
            poster={`${images.hero.base}-800.webp`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            disablePictureInPicture
            onCanPlay={() => setVideoReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setVideoFailed(true)}
          />
        )}
        {/* Sobreposição escura: garante o contraste do texto em qualquer quadro. */}
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-ink/20" />
      </div>

      <div className="relative mx-auto w-full max-w-[90rem] px-6 pt-32 pb-24 md:px-10 md:pb-40">
        <p className="label rise" style={line(0)}>
          {hero.label}
        </p>

        <h1
          id="hero-titulo"
          className="mt-6 text-[clamp(2.75rem,14vw,8.5rem)] font-light text-ivory md:mt-8"
        >
          {hero.titleLines.map((text, index) => (
            <span key={text} className="rise block" style={line(index + 1)}>
              {index === titleLines - 1 ? <em className="text-gold">{text}</em> : text}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 md:mt-10 md:flex md:items-end md:justify-between md:gap-12">
          <p
            className="rise max-w-sm text-base text-ivory md:text-lg"
            style={line(titleLines + 1)}
          >
            {hero.support}
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row md:mt-0"
            style={line(titleLines + 2)}
          >
            <a href={hero.primaryCta.href} className="btn btn-gold">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-line">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-6 flex flex-col items-center gap-3 md:left-10"
      >
        <span className="label hidden [writing-mode:vertical-rl] text-stone! md:block">{hero.scrollHint}</span>
        <span className="block h-12 w-px bg-gold/25">
          <span className="scroll-hint-line block h-full w-px bg-gold" />
        </span>
      </div>

      {/* Pausar / reproduzir (WCAG 2.2.2) */}
      {showToggle && (
        <button
          type="button"
          onClick={toggle}
          className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center border border-ivory/40 bg-ink/60 text-ivory md:right-10 md:bottom-8"
        >
          {playing ? (
            <Pause aria-hidden="true" size={18} strokeWidth={1.5} />
          ) : (
            <Play aria-hidden="true" size={18} strokeWidth={1.5} />
          )}
          <span className="sr-only">{playing ? hero.pauseLabel : hero.playLabel}</span>
        </button>
      )}
    </section>
  );
}
