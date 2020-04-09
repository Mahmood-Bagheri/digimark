import React from "react";
import { Card } from "components/Card";
import "./product-types.scss";

export const ProductTypes = (props: {}) => {
    return (
        <div className="my-4">
            <div className="row">
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/buttons.svg"
                                alt="buttons"
                            />
                            <div className="product-types__text">انواع دکمه</div>
                        </div>
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/washing-machine.svg"
                                alt="washing-machine"
                            />
                            <div className="product-types__text">دستور شست و شو</div>
                        </div>
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/label.svg"
                                alt="label"
                            />
                            <div className="product-types__text">کارت آویز</div>
                        </div>
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        {" "}
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/leather.svg"
                                alt="leather"
                            />
                            <div className="product-types__text">لیبل بافت</div>
                        </div>
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/tape-measure.svg"
                                alt="tape-measure"
                            />
                            <div className="product-types__text">نوار</div>
                        </div>
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/rubber-stamp.svg"
                                alt="rubber-stamp"
                            />
                            <div className="product-types__text">چاپ فلزی</div>
                        </div>
                    </Card>
                </div>
                <div className="col-6 col-sm-4 col-md">
                    <Card className="product-types-card">
                        <div className="product-types">
                            <img
                                className="product-types__icon"
                                src="/assets/images/icons/product-types/pocket.svg"
                                alt="pocket"
                            />
                            <div className="product-types__text">چرم و فلز</div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
