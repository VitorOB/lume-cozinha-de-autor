import { Header } from "./components/Header";
import { brand, images, location, reservations } from "./data/site";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useSite } from "./i18n/lang";
import { ALaCarte } from "./sections/ALaCarte";
import { Ambiance } from "./sections/Ambiance";
import { Chef } from "./sections/Chef";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Location } from "./sections/Location";
import { Manifesto } from "./sections/Manifesto";
import { Reservations } from "./sections/Reservations";
import { TastingMenu } from "./sections/TastingMenu";

/** Dados estruturados (schema.org) montados a partir de site.ts. */
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  servesCuisine: brand.cuisine,
  url: `${brand.url}/`,
  image: `${brand.url}${images.hero.base}.jpg`,
  acceptsReservations: true,
  openingHours: reservations.openingHoursSchema,
  address: { "@type": "PostalAddress", ...location.schema },
}).replace(/</g, "\\u003c");

export default function App() {
  const { lang, t } = useSite();
  useRevealOnScroll(lang);

  return (
    <>
      <a
        href="#conteudo"
        className="btn btn-gold fixed top-3 left-3 z-[60] -translate-y-24 focus-visible:translate-y-0"
      >
        {t.skipLink}
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Manifesto />
        <TastingMenu />
        <ALaCarte />
        <Chef />
        <Ambiance />
        <Reservations />
        <Location />
      </main>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}
