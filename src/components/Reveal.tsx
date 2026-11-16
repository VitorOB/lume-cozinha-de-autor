import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  id?: string;
  /** Atraso em milissegundos, para encadear elementos vizinhos. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Entra com fade e leve deslocamento na primeira vez que aparece na tela.
 * O estado oculto vem só do CSS (`.js [data-reveal]`), então sem JavaScript
 * o conteúdo continua visível.
 */
export function Reveal({ as: Tag = "div", id, delay = 0, className, children }: RevealProps) {
  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <Tag id={id} data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  );
}
