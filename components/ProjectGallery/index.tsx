"use client";

import Image from "next/image";
import { type TouchEvent, useCallback, useEffect, useRef, useState } from "react";

type ProjectImage = {
  file: string;
  src: string;
};

type ProjectGalleryProps = {
  images: ProjectImage[];
};

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length]);

  const showNext = useCallback(() => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrev();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrev]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = touchStartX.current - touchEndX;
    touchStartX.current = null;

    if (Math.abs(delta) < 40) {
      return;
    }

    if (delta > 0) {
      showNext();
      return;
    }

    showPrev();
  };

  return (
    <>
      <div className="project-gallery__grid">
        {images.map((image, index) => (
          <button
            key={image.file}
            type="button"
            className="project-gallery__item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Abrir proyecto ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={`Proyecto ${index + 1}`}
              width={900}
              height={700}
              className="project-gallery__image"
            />
            <span className="project-gallery__caption" aria-hidden="true" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label="Galería de proyectos">
          <button type="button" className="project-lightbox__backdrop" onClick={closeLightbox} aria-label="Cerrar" />
          <div className="project-lightbox__content">
            <button type="button" className="project-lightbox__close" onClick={closeLightbox} aria-label="Cerrar">
              Cerrar
            </button>
            <div className="project-lightbox__viewer">
              <button type="button" className="project-lightbox__nav project-lightbox__nav--prev" onClick={showPrev} aria-label="Imagen anterior">
                ‹
              </button>
              <div className="project-lightbox__image-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <Image
                  src={images[activeIndex].src}
                  alt={`Proyecto ${activeIndex + 1}`}
                  width={1800}
                  height={1200}
                  className="project-lightbox__image"
                  priority
                />
                <span className="project-lightbox__counter">
                  {activeIndex + 1} / {images.length}
                </span>
              </div>
              <button type="button" className="project-lightbox__nav project-lightbox__nav--next" onClick={showNext} aria-label="Imagen siguiente">
                ›
              </button>
            </div>
            <div className="project-lightbox__thumbs" aria-label="Miniaturas de proyectos">
              {images.map((image, index) => (
                <button
                  key={`thumb-${image.file}`}
                  type="button"
                  className={`project-lightbox__thumb ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir al proyecto ${index + 1}`}
                >
                  <Image src={image.src} alt={`Miniatura proyecto ${index + 1}`} width={180} height={120} className="project-lightbox__thumb-img" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
