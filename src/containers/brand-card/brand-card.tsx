import React, { FunctionComponent } from "react";
import { IBrandCard } from "./brand-card.types";
import classnames from "classnames";
import "./brand-card.scss";

export const BrandCard: FunctionComponent<IBrandCard> = (props) => {
    const { image, name, className, ...restProps } = props;

    return (
        <div className={classnames("brand-card", className)} {...restProps}>
            <img className="brand-card__brand" src={image} alt={name} />
        </div>
    );
};
