import React from "react";
import { Card } from "components/Card";
import "./product-brand-card.scss";

interface Props {}

export const ProductBrandCard = (props: Props) => {
    return (
        <Card className="product-brand-card" title="برند گوچی">
            <img className="product-brand-card__brand" src="/assets/images/icons/brands/gucci.svg" alt="" />
            <p className="product-brand-card__url">https://localhost:3000/brands/gucci</p>
        </Card>
    );
};
