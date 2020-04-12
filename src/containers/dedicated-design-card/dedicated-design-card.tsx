import React, { FunctionComponent } from "react";
import { Card } from "components/Card";
import "./dedicated-design-card.scss";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}

export const DedicatedDesignCard = (props: Props) => {
    const { disabled, className } = props;
    return (
        <Card
            className={classnames("dedicated-design-card", { "dedicated-design-card--disabled": disabled }, className)}
        >
            <img className="dedicated-design-card__img" src="/assets/images/icons/product-types/buttons.svg" alt="" />
            <div className="dedicated-design-card__text">طراحی لیبل بافت</div>
        </Card>
    );
};

export const DedicatedDesignCardContainer = () => {
    return (
        <>
            <div className="row">
                {new Array(6).fill("null").map((item, index) => (
                    <div className="col-6 col-md-4 col-lg-2">
                        <DedicatedDesignCard className="" disabled={index % 3 === 0} />
                    </div>
                ))}
            </div>
        </>
    );
};
