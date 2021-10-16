import React, { useEffect, useState, useCallback } from "react";
import { Flex } from "@chakra-ui/react";
import Content from "./Content";

function Structure({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;
  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, [slidesCount]);
  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, [slidesCount]);

  const carouselStyle = {
    transition: "all .5s",
    mx: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [prevSlide, nextSlide]);

  return (
    <Flex w="full" p={10} alignItems="center" justifyContent="center">
      <Flex w="80%" overflow="hidden" flexWrap="wrap">
        <Flex w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Content key={`slide-${sid}`} slide={slide} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Structure;
