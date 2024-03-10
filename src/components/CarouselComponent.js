import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({title, moviesType}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
  return (
    <>
      <div className="mx-12 pb-14">
        <h1 className="text-2xl font-bold pb-4 text-white">{title}</h1>
        <div className="slider-container">
            <Slider {...settings}>
              {moviesType.map((a) => (
                <img
                  key={a.id}
                  className="w-[19%] rounded-md"
                  src={"https://image.tmdb.org/t/p/w500/" + a.backdrop_path}
                />
              ))}
            </Slider>
          </div>
      </div>
    </>
  );
}

export default CarouselComponent