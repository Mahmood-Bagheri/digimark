import React from "react";
import "./features-primary.scss";

interface Props {}

export const FeaturesPrimary = (props: Props) => {
    return (
        <div className="features-primary py-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img
                            alt={""}
                            className="features-primary__image"
                            src="/assets/images/icons/delivery-truck.svg"
                        />
                        <div className="features-primary__text">ارسال سریع</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img alt={""} className="features-primary__image" src="/assets/images/icons/money-card.svg" />
                        <div className="features-primary__text">پرداخت امن</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img alt={""} className="features-primary__image" src="/assets/images/icons/check.svg" />
                        <div className="features-primary__text">اصالت کالا</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img alt={""} className="features-primary__image" src="/assets/images/icons/support.svg" />
                        <div className="features-primary__text">پشتیبانی قوی</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img alt={""} className="features-primary__image" src="/assets/images/icons/tap.svg" />
                        <div className="features-primary__text">انتخاب کالا</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img
                            alt={""}
                            className="features-primary__image"
                            src="/assets/images/icons/shopping-cart.svg"
                        />
                        <div className="features-primary__text">قدرت انتخاب</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg d-flex flex-column justify-content-center align-items-center">
                        <img alt={""} className="features-primary__image" src="/assets/images/icons/save.svg" />
                        <div className="features-primary__text">ذخیره زمان</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
