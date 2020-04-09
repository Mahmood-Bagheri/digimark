import React, { FunctionComponent } from "react";
import "./scrollbar.scss";

export const Scrollbar: FunctionComponent = (props) => {
    return <div className="scrollbar">{props.children}</div>;
};
