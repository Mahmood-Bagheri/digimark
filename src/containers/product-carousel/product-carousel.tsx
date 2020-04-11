import React from "react";
import Swiper from "react-id-swiper";
import { Product } from "containers/product";
import "./product-carousel.scss";

export const ProductsCarousel = () => {
    const params = {
        // spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
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
        <div className="product-carousel">
            <Swiper {...params}>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
                <div>
                    <Product
                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                        price={19.999}
                        image="/assets/images/t-shirt.jpg"
                        url="google.com"
                    />
                </div>
            </Swiper>
        </div>
    );
};
