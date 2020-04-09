import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./main-carousel.scss";

export const MainCarousel = (props: {}) => {
    const params = {
        spaceBetween: 30,
    };

    return (
        <Swiper {...params}>
            <img className="carousel__slide" src="/assets/images/main-carousel.png" alt="1" />
        </Swiper>
    );
};
