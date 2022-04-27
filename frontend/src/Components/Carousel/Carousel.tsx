import StyledCard from "../Card/Card.style";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "../CarouselButtons/CarouselButtons";

type CarouselProps = {
  className: string;
  multiPages: boolean;
  slides: any[];
};

const Carousel = ({ className, slides, multiPages }: CarouselProps) => {
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
        {multiPages
          ? slides.map((page: any) => {
              return page.results.map((data: any) => {
                return (
                  <StyledCard
                    className="card"
                    imagePath={data.poster_path}
                    title={data.title}
                    rating={data.vote_average}
                    date={data.release_date}
                    cardId={data.id}
                    mediaType={"movie"}
                    key={data.id}
                  />
                );
              });
            })
          : slides.map((slide: any) => {
              return (
                <StyledCard
                  className="card"
                  imagePath={slide.poster_path}
                  title={slide.title}
                  rating={slide.vote_average}
                  date={slide.release_date}
                  cardId={slide.id}
                  mediaType={"movie"}
                  key={slide.id}
                />
              );
            })}
      </div>
      <PrevButton className="embla__button prev" onClick={scrollPrev} />
      <NextButton className="embla__button next" onClick={scrollNext} />
    </div>
  );
};

export default Carousel;
