import { Reveal } from "../components/Reveal";
import { useSite } from "../i18n/lang";

export function Manifesto() {
  const { manifesto } = useSite().site;
  return (
    <section
      id="a-casa"
      aria-labelledby="manifesto-titulo"
      className="bg-ink px-6 py-28 md:px-10 md:py-48"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal as="h2" id="manifesto-titulo" className="label font-sans!">
          {manifesto.label}
        </Reveal>

        <Reveal
          as="p"
          delay={100}
          className="mt-10 font-display text-[clamp(1.75rem,4.4vw,3.75rem)] leading-[1.18] font-light text-ivory md:mt-14"
        >
          {manifesto.before}
          <em className="font-normal text-gold">{manifesto.highlight}</em>
          {manifesto.after}
        </Reveal>

        <Reveal delay={200} className="mt-12 flex flex-col items-center gap-6 md:mt-16">
          <span aria-hidden="true" className="block h-16 w-px bg-gold/50" />
          <p className="label text-stone!">{manifesto.signature}</p>
        </Reveal>
      </div>
    </section>
  );
}
