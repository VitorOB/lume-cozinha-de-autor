import type { CSSProperties } from "react";
import { MapPin } from "lucide-react";
import { DemoTag } from "../components/DemoTag";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSite } from "../i18n/lang";

/** Malha de linhas finas no lugar do mapa (sem embed). */
const gridLines: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgb(201 169 110 / 0.09) 1px, transparent 1px), linear-gradient(to bottom, rgb(201 169 110 / 0.09) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
};

export function Location() {
  const { location } = useSite().site;
  return (
    <section
      aria-labelledby="local-titulo"
      className="bg-ink px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[90rem] gap-14 md:grid-cols-12 md:items-end md:gap-10">
        <div className="md:col-span-4">
          <SectionHeading id="local-titulo" label={location.label} title={location.title} />

          <Reveal delay={160} className="mt-8">
            <address className="font-display text-[1.75rem] leading-snug text-ivory not-italic">
              {location.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-stone">
              <DemoTag />
              {location.addressNote}
            </p>
          </Reveal>
        </div>

        <Reveal className="md:col-span-7 md:col-start-6">
          <div
            role="img"
            aria-label={location.mapPlaceholder}
            className="relative flex aspect-[4/3] items-center justify-center border border-gold/30 bg-coal md:aspect-[16/9]"
            style={gridLines}
          >
            <div className="flex flex-col items-center gap-4 px-6 text-center">
              <MapPin aria-hidden="true" size={28} strokeWidth={1} className="text-gold" />
              <p className="label text-stone!">{location.mapPlaceholder}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
