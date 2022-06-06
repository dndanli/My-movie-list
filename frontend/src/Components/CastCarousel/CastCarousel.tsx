import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { NextButton, PrevButton } from "../CarouselButtons/CarouselButtons";
import StyledCastCard from "../CastCard/CastCard.style";
import { v4 as uuidv4 } from "uuid";

type CastCarouselProps = {
  className: string;
  slides: [];
  total: number;
  heading: string;
};

const CastCarousel = ({
  className,
  slides,
  total,
  heading,
}: CastCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 2,
    speed: 25,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, slides]);

  return (
    <div className={className} ref={emblaRef}>
      <div className="embla__container">
        {slides.slice(0, total).map((person: any) => {
          return (
            <StyledCastCard
              key={uuidv4()}
              className="cast-card"
              person={person}
            />
          );
        })}
      </div>
      <h2 className="heading">{heading}</h2>
      {slides?.length > 3 ? (
        <>
          <PrevButton className="embla__button prev" onClick={scrollPrev} />
          <NextButton className="embla__button next" onClick={scrollNext} />
        </>
      ) : null}
    </div>
  );
};

export default CastCarousel;
