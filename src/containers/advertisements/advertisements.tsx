import React, { FunctionComponent } from "react";
import "./advertisements.scss";

export const Advertisements: FunctionComponent = (props) => {
    return (
        <div className="ads">
            <div className="ads__item">تبلیغات</div>
            <div className="ads__item">تبلیغات</div>
            <div className="ads__item">تبلیغات</div>
            <div className="ads__item">تبلیغات</div>
        </div>
    );
};
