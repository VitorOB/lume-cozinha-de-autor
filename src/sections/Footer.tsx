import { DemoTag } from "../components/DemoTag";
import {
  brand,
  contact,
  creatorMessage,
  footer,
  navigation,
  social,
  whatsappLink,
} from "../data/site";

export function Footer() {
  const creatorUrl = whatsappLink(contact.creatorWhatsapp, creatorMessage);
  const creatorName = contact.creatorName.trim();

  return (
    <footer className="bg-ink px-6 pb-10 md:px-10">
      <div className="mx-auto max-w-[90rem]">
        <hr className="rule" />

        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-20">
          <div className="md:col-span-5">
            <p className="font-display text-5xl tracking-[0.3em] text-ivory">
              {brand.name.toUpperCase()}
            </p>
            <p className="label mt-4">{brand.tagline}</p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3 md:col-start-7">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-sm text-ivory">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label">{social.label}</p>
            <ul className="mt-3">
              {social.items.map((name) => (
                <li key={name} className="flex min-h-11 flex-wrap items-center gap-3">
                  {/* Sem href de propósito: não é um link que finge funcionar. */}
                  <a role="link" aria-disabled="true" className="cursor-not-allowed text-sm text-stone">
                    {name}
                  </a>
                  <DemoTag />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="rule" />

        <div className="flex flex-col gap-4 pt-8 text-sm text-stone md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="max-w-2xl">
            {footer.creditPrefix}
            {creatorName && ` ${footer.creditBy} ${creatorName}`} — {footer.creditQuestion}{" "}
            <a
              href={creatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-gold [&::after]:scale-x-100"
            >
              {footer.creditCta}
              <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
            </a>
          </p>
          <p className="md:pt-2.5 md:text-right">
            {footer.rights} {footer.mediaCredit}
          </p>
        </div>
      </div>
    </footer>
  );
}
