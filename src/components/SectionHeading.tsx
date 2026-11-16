import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

/** Rótulo em maiúsculas + título grande + texto de apoio opcional. */
export function SectionHeading({ id, label, title, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal as="p" className="label">
        {label}
      </Reveal>
      <Reveal
        as="h2"
        id={id}
        delay={80}
        className="mt-5 text-[clamp(2.5rem,7vw,5rem)] text-ivory"
      >
        {title}
      </Reveal>
      {children && (
        <Reveal as="p" delay={160} className="mt-6 max-w-md text-stone">
          {children}
        </Reveal>
      )}
    </div>
  );
}
