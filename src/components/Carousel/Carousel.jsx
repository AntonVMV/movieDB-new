import { useSelector, useDispatch } from "react-redux";
import { getCarouselRequest } from "../../store/carouselData/thunk";
import React, { useEffect, useState } from "react";
import { Slider, Slide, SliderDescription } from "../../styles/carousel";
import { SliderContainer } from "../../styles/containers";
import {
  SliderTitle,
  SliderText,
  SliderButton,
  SliderRating,
  SliderControls,
  SliderControlBtn,
  SliderNavs,
  BackgroundColor,
  SliderDot,
} from "../../styles/carousel";
import { AiOutlineStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Carousel = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store.carouselReducer);
  let [current, setCurrent] = useState(0);
  const image = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    dispatch(getCarouselRequest());
  }, []);

  useEffect(() => {
    if (movies) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [movies]);

  const nextSlide = () => {
    setCurrent((current) => (current === movies.length - 1 ? 0 : current + 1));
  };

  const prevtSlide = () => {
    setCurrent(current === 0 ? movies.length - 1 : current - 1);
  };

  const slideTo = (index) => {
    if (index === current) {
      return;
    }
    setCurrent(index);
  };

  const buttonHandler = (e) => {
    console.log(e);
  };

  const sliceString = (text) => {
    if (text.length > 300) {
      return text.slice(0, 300) + ". . .";
    }
    return text;
  };

  return (
    <Slider>
      <SliderContainer>
        <SliderControls>
          <SliderControlBtn onClick={prevtSlide}>
            <AiOutlineLeft size="2em" />
          </SliderControlBtn>
          <SliderControlBtn onClick={nextSlide}>
            <AiOutlineRight size="2em" />
          </SliderControlBtn>
        </SliderControls>
        <BackgroundColor />
        {movies &&
          movies.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <SliderDescription active={index === current}>
                  <SliderTitle>{item.title}</SliderTitle>
                  <SliderText>{sliceString(item.overview)}</SliderText>
                  <SliderRating>
                    <AiOutlineStar size="1.5em" />
                    {item.vote_average}
                  </SliderRating>
                  <SliderButton onClick={buttonHandler}>Continue</SliderButton>
                </SliderDescription>

                <Slide
                  key={index}
                  image={image + item.backdrop_path}
                  active={index === current}
                />
              </React.Fragment>
            );
          })}
        <SliderNavs>
          {movies &&
            movies.map((item, index) => {
              return (
                <SliderDot
                  key={index}
                  active={index === current}
                  onClick={() => slideTo(index)}
                />
              );
            })}
        </SliderNavs>
      </SliderContainer>
    </Slider>
  );
};
