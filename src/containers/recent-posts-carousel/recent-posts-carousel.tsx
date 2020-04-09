import React, { FunctionComponent } from "react";
import Swiper from "react-id-swiper";
import { Card } from "components/Card";
import { RecentPostsCarouselItem } from "containers/recent-posts-carousel-item";
import "./recent-posts-carousel.scss";

export const RecentPostsCarousel: FunctionComponent = (props) => {
    const params = {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    };
    return (
        <Card title="مطالب اخیر" className="recent-posts-card">
            <Swiper {...params}>
                <div>
                    <RecentPostsCarouselItem />
                </div>
                <div>
                    <RecentPostsCarouselItem />
                </div>
            </Swiper>
        </Card>
    );
};
