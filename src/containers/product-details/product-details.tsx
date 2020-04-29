import React from "react";
import "./product-details.scss";
import { Rating } from "components/Rating";
import { Seprator } from "components/Seprator";
import { Button, ButtonSize } from "components/Button";
import { ProductDetailsCarousel } from "containers/product-details-carousel";

interface Props {}

export const ProductDetails = (props: Props) => {
    return (
        <div className="product-details">
            <div className="row">
                <div className="col-lg-4 ">
                    <ProductDetailsCarousel />
                </div>
                <div className="col-lg-8">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className="title">گوشی موبایل</div>
                        </div>
                        <div className="col-auto">
                            <div className="rating">
                                <Rating rating={3.5} readOnly />
                                <div className="text">از 9 رای</div>
                            </div>
                        </div>
                    </div>
                    <Seprator className="my-2" />
                    <div className="insight py-2">
                        <div className="row">
                            <div className="col-auto">
                                <div className="insight__title">برند:</div>
                                <span>شین دیزاین</span>
                            </div>
                            <div className="col-auto">
                                <div className="insight__title">دسته بندی: </div>
                                <span>سخت افزار</span>
                            </div>
                            <div className="col-auto">
                                <div className="insight__title">فروشگاه:</div>
                                <span>گلایل</span>
                            </div>
                        </div>
                    </div>
                    <Seprator className="my-2" />
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="colors">
                                <div className="colors__title">انتخاب رنگ</div>
                                <div className="colors-container mt-2">
                                    <div className="colors__item"></div>
                                    <div className="colors__item colors__item--selected"></div>
                                    <div className="colors__item"></div>
                                    <div className="colors__item"></div>
                                    <div className="colors__item"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto p-0 mr-auto">
                            <div className="seprator--vertical"></div>
                        </div>
                        <div className="col-lg-5">
                            <div className="pre-factor">
                                <div className="pre-factor__title">پیش فاکتور</div>
                                <div className="pre-factor__param">
                                    <div className="pre-factor__key">کد محصول</div>
                                    <div className="pre-factor__value">#12456</div>
                                </div>
                                <div className="pre-factor__param">
                                    <div className="pre-factor__key">فروشنده</div>
                                    <div className="pre-factor__value">گلایل</div>
                                </div>{" "}
                                <div className="pre-factor__param">
                                    <div className="pre-factor__key">تعداد سفارش</div>
                                    <div className="pre-factor__value">1400</div>
                                </div>{" "}
                                <div className="pre-factor__param">
                                    <div className="pre-factor__key">کد محصول</div>
                                    <div className="pre-factor__value">#12456</div>
                                </div>
                                <Seprator className="my-2" />
                                <div className="pre-factor__param">
                                    <div className="pre-factor__price">قیمت واحد</div>
                                    <div className="pre-factor__priceValue">19,000 تومان</div>
                                </div>
                                <Seprator className="my-2" />
                                <div className="pre-factor__param">
                                    <div className="pre-factor__final-price">قیمت نهایی</div>
                                    <div className="pre-factor__final-priceValue">19,000 تومان</div>
                                </div>
                                <Button className="mt-3" size={ButtonSize.large} block>
                                    افزودن به سبد خرید
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
