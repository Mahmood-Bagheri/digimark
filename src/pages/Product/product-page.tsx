import React from "react";
import { ProductDetails } from "containers/product-details";
import { ProductsCarousel } from "containers/product-carousel";
import { ProductDetailsTab } from "containers/product-details-tab";

interface Props {}

export const ProductPage = (props: Props) => {
    return (
        <div>
            <ProductDetails />
            <div className="my-5">
                <ProductsCarousel />
            </div>
            <ProductDetailsTab />
        </div>
    );
};
