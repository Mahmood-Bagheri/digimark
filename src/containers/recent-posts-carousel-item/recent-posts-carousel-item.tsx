import React, { FunctionComponent } from "react";
import "./recent-posts-carousel-item.scss";

export const RecentPostsCarouselItem: FunctionComponent = (props) => {
    return (
        <div className="recent-posts-item">
            <img className="recent-posts-item__image" src="/assets/images/carousel.png" alt="recent-post" />
            <p className="recent-posts-item__title">لورم ایپسوم متن ساختگی با تولید سادگی</p>
            <span className="recent-posts-item__description">خرید از دیجی مارک</span>
        </div>
    );
};
