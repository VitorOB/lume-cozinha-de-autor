import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { chef } from "../data/site";

export function Chef() {
  return (
    <section
      id="chef"
      aria-labelledby="chef-titulo"
      className="bg-coal px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[90rem] items-end gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="w-5/6 md:col-span-5 md:w-full">
          <ParallaxImage
            image={chef.image}
            ratio="4 / 5"
            sizes="(min-width: 768px) 40vw, 80vw"
          />
        </Reveal>

        <div className="md:col-span-6 md:col-start-7 md:pb-10">
          <Reveal as="p" className="label">
            {chef.label}
          </Reveal>
          <Reveal
            as="h2"
            id="chef-titulo"
            delay={80}
            className="mt-5 text-[clamp(2.5rem,7vw,5rem)] text-ivory"
          >
            {chef.name}
          </Reveal>

          <Reveal delay={160} className="mt-8 max-w-md space-y-5 text-stone">
            {chef.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="figure" delay={240} className="mt-12 border-l border-gold/60 pl-6 md:mt-16 md:pl-8">
            <blockquote className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.15] text-ivory italic">
              <p>“{chef.quote}”</p>
            </blockquote>
            <figcaption className="label mt-5">{chef.name}</figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
