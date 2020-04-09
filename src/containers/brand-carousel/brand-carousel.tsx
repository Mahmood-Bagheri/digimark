import React, { FunctionComponent } from "react";
import Swiper from "react-id-swiper";
import "./brand-carousel.scss";

export const BrandCarousel: FunctionComponent = (props) => {
    const params = {
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    };

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-12 brand-carousel">
                    <Swiper {...params}>
                        <div>
                            <img
                                className="brand-carousel__item"
                                src="/assets/images/icons/brands/adidas.svg"
                                alt="adidas"
                            />
                        </div>
                        <div>
                            <img
                                className="brand-carousel__item"
                                src="/assets/images/icons/brands/diesel.svg"
                                alt="adidas"
                            />
                        </div>
                        <div>
                            <img
                                className="brand-carousel__item"
                                src="/assets/images/icons/brands/lacoste.svg"
                                alt="adidas"
                            />
                        </div>
                        <div>
                            <img
                                className="brand-carousel__item"
                                src="/assets/images/icons/brands/puma.svg"
                                alt="adidas"
                            />
                        </div>
                        <div>
                            <img
                                className="brand-carousel__item"
                                src="/assets/images/icons/brands/gucci.svg"
                                alt="adidas"
                            />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
