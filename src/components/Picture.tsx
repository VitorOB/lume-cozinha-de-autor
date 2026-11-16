import type { SiteImage } from "../data/site";

type PictureProps = {
  image: SiteImage;
  /** Atributo `sizes`: a largura que a imagem ocupa em cada tamanho de tela. */
  sizes: string;
  className?: string;
  /** Use apenas na imagem do hero: carrega já, com prioridade alta. */
  priority?: boolean;
};

/** Imagem WebP em 800 e 1600 px, com dimensões declaradas para não deslocar o layout. */
export function Picture({ image, sizes, className, priority = false }: PictureProps) {
  return (
    <img
      src={`${image.base}-800.webp`}
      srcSet={`${image.base}-800.webp 800w, ${image.base}-1600.webp 1600w`}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      className={className}
    />
  );
}
