import React from "react";
import Swiper from "react-id-swiper";
import "./product-carousel.scss";
import { Product } from "containers/product";

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
        <Swiper {...params}>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
            <div>
                <Product
                    title="گوشی موبایل اپل iPhone XS Max 256GB "
                    price={19.999}
                    image="https://dkstatics-public-2.digikala.com/digikala-products/111678863.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
                    url="google.com"
                />
            </div>
        </Swiper>
    );
};
