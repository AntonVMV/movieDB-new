import { useSelector, useDispatch } from "react-redux";
import { getCarouselRequest } from "../../store/carouselData/thunk";
import React, { useEffect, useState } from "react";
import { Slider, Slide, SliderDescription } from "../../styles/carousel";
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
import { Link } from "react-router-dom";

export const Carousel = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store.carouselReducer);
  const [current, setCurrent] = useState(0);
  const [startTouch, setStartTouch] = useState();
  const image = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    dispatch(getCarouselRequest());
  }, []);

  useEffect(() => {
    if (movies) {
      const timeout = setTimeout(nextSlide, 5000);
      return () => clearTimeout(timeout);
    }
  }, [movies, current]);

  const nextSlide = () => {
    setCurrent((current) => (current === movies.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? movies.length - 1 : current - 1);
  };

  const slideTo = (index) => {
    if (index === current) {
      return;
    }
    setCurrent(index);
  };

  const sliceString = (text) => {
    if (text.length > 300) {
      return text.slice(0, 300) + ". . .";
    }
    return text;
  };

  const swipeHandler = (e) => {
    if (!startTouch) {
      return;
    }
    if (e.touches[0].clientX > startTouch) {
      prevSlide();
    } else {
      nextSlide();
    }
    setStartTouch(null);
  };

  return (
    <Slider
      onTouchMove={swipeHandler}
      onTouchStart={(e) => setStartTouch(e.touches[0].clientX)}
    >
      <SliderControls>
        <SliderControlBtn onClick={prevSlide}>
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
                <SliderButton
                  to={{ pathname: "/Details", search: `id=${item.id}` }}
                >
                  Continue
                </SliderButton>
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
    </Slider>
  );
};
