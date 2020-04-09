import React, { FunctionComponent } from "react";
import { IProduct } from "./product.types";
import "./product.scss";

export const Product: FunctionComponent<IProduct> = (props) => {
    const { title, price, image } = props;

    return (
        <div className="product">
            <img className="product__image" src={image} alt={title as string} />
            <div className="product__content">
                <div className="product__title">{title}</div>
                <div className="product__price">{price} تومان</div>
            </div>
        </div>
    );
};
