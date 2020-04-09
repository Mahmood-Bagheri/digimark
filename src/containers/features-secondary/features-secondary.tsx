import React from "react";
import { Card } from "components/Card";
import "./features-secondary.scss";

export const FeaturesSecondary = (props: {}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Card>
                            <div className="features">
                                <div className="features__content">
                                    <div className="features__title">ارسال رایگان کالا ها</div>
                                    <div className="features__description">برای خرید های بالای 100 هزار تومان</div>
                                </div>
                                <img className="features__image" src="/assets/images/icons/packaging.svg" alt="image" />
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <div className="features">
                                <div className="features__content">
                                    <div className="features__title">ارسال رایگان کالا ها</div>
                                    <div className="features__description">برای خرید های بالای 100 هزار تومان</div>
                                </div>
                                <img
                                    className="features__image"
                                    src="/assets/images/icons/delivery-truck.svg"
                                    alt="image"
                                />
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <div className="features">
                                <div className="features__content">
                                    <div className="features__title">ارسال رایگان کالا ها</div>
                                    <div className="features__description">برای خرید های بالای 100 هزار تومان</div>
                                </div>

                                <img className="features__image" src="/assets/images/icons/shop.svg" alt="image" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
