import React, { FunctionComponent } from "react";
import { IProduct } from "./product.types";
import { Image } from "components/Image";
import classnames from "classnames";
import "./product.scss";

export const Product: FunctionComponent<IProduct> = props => {
    const { title, price, image, className, id, ...restProps } = props;

    return (
        <div className={classnames("product", className)} {...restProps}>
            <Image
                className="product__image"
                src={`https://source.unsplash.com/collection/4481886/${Math.floor(Math.random() * 100)}`}
                alt={title as string}
            />
            <div className="product__content">
                <div className="product__title">{title}</div>
                <div className="product__price">{price} تومان</div>
            </div>
        </div>
    );
};
