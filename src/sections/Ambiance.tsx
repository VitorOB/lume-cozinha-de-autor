import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ambiance } from "../data/site";

/**
 * Composição da galeria, na ordem das fotos em `ambiance.photos`.
 * No celular as fotos empilham com larguras alternadas;
 * a partir de 768 px ocupam uma grade assimétrica de 12 colunas.
 */
const layout = [
  { ratio: "3 / 2", frame: "w-full md:col-span-7", sizes: "(min-width: 768px) 58vw, 90vw" },
  {
    ratio: "4 / 5",
    frame: "ml-auto w-4/5 md:col-span-4 md:col-start-9 md:mt-32 md:w-full",
    sizes: "(min-width: 768px) 33vw, 75vw",
  },
  {
    ratio: "3 / 4",
    frame: "w-3/5 md:col-span-3 md:col-start-2 md:-mt-10 md:w-full",
    sizes: "(min-width: 768px) 25vw, 55vw",
  },
  {
    ratio: "3 / 2",
    frame: "w-full md:col-span-6 md:col-start-7 md:mt-24",
    sizes: "(min-width: 768px) 50vw, 90vw",
  },
  {
    ratio: "4 / 5",
    frame: "ml-auto w-4/5 md:col-span-4 md:col-start-3 md:-mt-16 md:ml-0 md:w-full",
    sizes: "(min-width: 768px) 33vw, 75vw",
  },
];

export function Ambiance() {
  return (
    <section
      id="ambiente"
      aria-labelledby="ambiente-titulo"
      className="bg-ink px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[90rem]">
        <SectionHeading
          id="ambiente-titulo"
          label={ambiance.label}
          title={ambiance.title}
          className="md:ml-auto md:w-1/2"
        >
          {ambiance.intro}
        </SectionHeading>

        <ul className="mt-16 flex flex-col gap-10 md:mt-24 md:grid md:grid-cols-12 md:items-start md:gap-x-8 md:gap-y-0">
          {ambiance.photos.map((photo, index) => {
            const slot = layout[index % layout.length];
            return (
              <Reveal as="li" key={photo.image.base} className={slot.frame}>
                <figure>
                  <ParallaxImage image={photo.image} ratio={slot.ratio} sizes={slot.sizes} />
                  <figcaption className="label mt-4 text-stone!">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
