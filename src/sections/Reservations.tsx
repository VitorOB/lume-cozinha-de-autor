import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { whatsappLink } from "../data/site";
import { useSite } from "../i18n/lang";

export function Reservations() {
  const { site, t } = useSite();
  const { contact, reservations } = site;
  const whatsappUrl = whatsappLink(contact.whatsappNumber, contact.whatsappMessage);
  const reservationUrl = contact.reservationUrl.trim();

  return (
    <section
      id="reservas"
      aria-labelledby="reservas-titulo"
      className="bg-coal px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[90rem] gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <SectionHeading id="reservas-titulo" label={reservations.label} title={reservations.title}>
            {reservations.intro}
          </SectionHeading>

          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle aria-hidden="true" size={18} strokeWidth={1.5} />
              {reservations.whatsappCta}
              <span className="sr-only"> {t.newTab}</span>
            </a>

            {/* Só aparece quando `reservationUrl` está preenchido em site.ts. */}
            {reservationUrl && (
              <a
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                {reservations.onlineCta}
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
                <span className="sr-only"> {t.newTab}</span>
              </a>
            )}
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <h3 className="label font-sans!">{reservations.hoursLabel}</h3>
            <hr className="rule mt-4" />
            <dl>
              {reservations.hours.map((row) => (
                <div
                  key={row.days}
                  className="flex flex-col gap-1 border-b border-ivory/10 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <dt className="font-display text-[1.75rem] leading-tight text-ivory">{row.days}</dt>
                  <dd className="text-stone">{row.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <h3 className="label font-sans!">{reservations.policyLabel}</h3>
            <hr className="rule mt-4" />
            <dl>
              {reservations.policy.map((row) => (
                <div
                  key={row.term}
                  className="flex flex-col gap-1 border-b border-ivory/10 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <dt className="font-display text-[1.75rem] leading-tight text-ivory">{row.term}</dt>
                  <dd className="text-stone sm:text-right">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
