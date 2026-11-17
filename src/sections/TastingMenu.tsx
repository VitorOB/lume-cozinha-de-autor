import { useEffect, useRef } from "react";
import { scroll } from "motion";
import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSite } from "../i18n/lang";
import { REDUCED_MOTION, useMediaQuery } from "../hooks/useMediaQuery";

/** Larguras alternadas das fotos, para quebrar a simetria da linha do tempo. */
const photoWidths = ["w-full", "w-full md:w-5/6 md:ml-auto", "w-full md:w-4/6"];

export function TastingMenu() {
  const { site, t } = useSite();
  const { tastingMenu } = site;
  const list = useRef<HTMLOListElement>(null);
  const reduced = useMediaQuery(REDUCED_MOTION);

  const fill = useRef<HTMLSpanElement>(null);

  // A linha dourada se completa conforme a rolagem avança pelas etapas.
  useEffect(() => {
    const listEl = list.current;
    const fillEl = fill.current;
    if (reduced || !listEl || !fillEl) return;

    const stop = scroll(
      (progress: number) => {
        fillEl.style.transform = `scaleY(${progress.toFixed(4)})`;
      },
      { target: listEl, offset: ["start 80%", "end 55%"] },
    );

    return () => {
      stop();
      fillEl.style.transform = "";
    };
  }, [reduced]);

  let photoIndex = -1;

  return (
    <section
      id="menu"
      aria-labelledby="degustacao-titulo"
      className="bg-coal px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading
            id="degustacao-titulo"
            label={tastingMenu.label}
            title={tastingMenu.title}
            className="lg:sticky lg:top-32"
          >
            {tastingMenu.intro}
          </SectionHeading>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ol ref={list} className="relative">
            {/* Trilho da linha do tempo e o preenchimento que acompanha a rolagem. */}
            <li aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-gold/25">
              <span ref={fill} className="block h-full w-px origin-top bg-gold" />
            </li>

            {tastingMenu.steps.map((step, index) => {
              if (step.image) photoIndex += 1;

              return (
                <Reveal
                  as="li"
                  key={step.name}
                  className="relative pb-14 pl-8 last:pb-0 md:pb-20 md:pl-16"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-0 block h-2 w-2 -translate-x-1/2 rotate-45 border border-gold bg-coal"
                  />
                  <p className="label">
                    <span className="sr-only">{t.course}</span>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[clamp(2rem,4.2vw,3.25rem)] text-ivory">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-stone">{step.ingredients}</p>

                  {step.image && (
                    <ParallaxImage
                      image={step.image}
                      ratio="3 / 2"
                      sizes="(min-width: 1024px) 50vw, 90vw"
                      className={`mt-8 ${photoWidths[photoIndex % photoWidths.length]}`}
                    />
                  )}
                </Reveal>
              );
            })}
          </ol>

          <Reveal className="mt-16 md:mt-24 md:pl-16">
            <hr className="rule" />
            <dl className="mt-8 grid gap-2 md:grid-cols-[10rem_1fr] md:gap-8">
              <dt className="label pt-1">{tastingMenu.pairingLabel}</dt>
              <dd className="text-ivory">
                {tastingMenu.pairing}
                <span className="mt-2 block text-stone">{tastingMenu.note}</span>
              </dd>
            </dl>
            <a href={tastingMenu.cta.href} className="btn btn-gold mt-10 w-full sm:w-auto">
              {tastingMenu.cta.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
