import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { aLaCarte } from "../data/site";

export function ALaCarte() {
  return (
    <section
      aria-labelledby="carta-titulo"
      className="bg-ink px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[90rem]">
        <SectionHeading
          id="carta-titulo"
          label={aLaCarte.label}
          title={aLaCarte.title}
          className="md:ml-[16.666%]"
        >
          {aLaCarte.intro}
        </SectionHeading>

        {/* Duas colunas tipográficas, sem fotos. */}
        <div className="mt-16 gap-x-24 md:mt-24 md:ml-[16.666%] md:columns-2">
          {aLaCarte.groups.map((group) => (
            <Reveal key={group.name} className="mb-16 break-inside-avoid">
              <h3 className="label font-sans!">{group.name}</h3>
              <hr className="rule mt-4" />
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className="border-b border-ivory/10 py-5">
                    <p className="font-display text-[1.75rem] leading-tight text-ivory">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-stone">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            as="p"
            className="break-inside-avoid font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-gold italic"
          >
            {aLaCarte.note}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
