import React, { useState, useEffect } from "react";
import Swiper, { ReactIdSwiperProps, ReactIdSwiperChildren } from "react-id-swiper";
import "swiper/css/swiper.css";
import "./product-details-carousel.scss";
interface Props {}

export const ProductDetailsCarousel = (props: Props) => {
    const [gallerySwiper, getGallerySwiper] = useState<any>(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState<any>(null);

    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    };

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        wrapperClass: "child",
    };

    useEffect(() => {
        if (
            gallerySwiper !== null &&
            gallerySwiper.controller &&
            thumbnailSwiper !== null &&
            thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, [gallerySwiper, thumbnailSwiper]);

    return (
        <div className="product-image-carousel">
            <Swiper {...gallerySwiperParams}>
                {new Array(4).fill("").map((item, index) => {
                    return (
                        <div
                            style={{
                                backgroundImage: `url(https://source.unsplash.com/collection/4481886/${Math.floor(
                                    Math.random() * 100
                                )})`,
                                backgroundSize: "cover",
                            }}
                        />
                    );
                })}
            </Swiper>

            <Swiper {...thumbnailSwiperParams}>
                {new Array(4).fill("").map((item, index) => {
                    return (
                        <div
                            style={{
                                backgroundImage: `url(https://source.unsplash.com/collection/4481886/${Math.floor(
                                    Math.random() * 100
                                )})`,
                                backgroundSize: "cover",
                            }}
                        />
                    );
                })}
            </Swiper>
        </div>
    );
};
