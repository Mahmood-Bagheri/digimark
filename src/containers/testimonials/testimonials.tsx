import React from "react";
import "./testimonials.scss";
import { Card } from "components/Card";
import { Scrollbar } from "containers/scrollbar";

interface Props {}

export const Testimonials = (props: Props) => {
    return (
        <Card title="نظر خریدار">
            <Scrollbar>
                <div className="testimonials mb-1">
                    <div className="testimonials__profile"></div>
                    <div className="testimonials__user">
                        <div className="testimonials__name">محمود باقری</div>
                        <div className="testimonials__comment">کیفیت جنس ها عالی هستند و قیمتش هم مناسب</div>
                    </div>
                </div>
                <div className="testimonials mb-1">
                    <div className="testimonials__profile"></div>
                    <div className="testimonials__user">
                        <div className="testimonials__name">محمود باقری</div>
                        <div className="testimonials__comment">کیفیت جنس ها عالی هستند و قیمتش هم مناسب</div>
                    </div>
                </div>{" "}
                <div className="testimonials mb-1">
                    <div className="testimonials__profile"></div>
                    <div className="testimonials__user">
                        <div className="testimonials__name">محمود باقری</div>
                        <div className="testimonials__comment">کیفیت جنس ها عالی هستند و قیمتش هم مناسب</div>
                    </div>
                </div>{" "}
                <div className="testimonials mb-1">
                    <div className="testimonials__profile"></div>
                    <div className="testimonials__user">
                        <div className="testimonials__name">محمود باقری</div>
                        <div className="testimonials__comment">کیفیت جنس ها عالی هستند و قیمتش هم مناسب</div>
                    </div>
                </div>{" "}
                <div className="testimonials mb-1">
                    <div className="testimonials__profile"></div>
                    <div className="testimonials__user">
                        <div className="testimonials__name">محمود باقری</div>
                        <div className="testimonials__comment">کیفیت جنس ها عالی هستند و قیمتش هم مناسب</div>
                    </div>
                </div>
            </Scrollbar>
        </Card>
    );
};
