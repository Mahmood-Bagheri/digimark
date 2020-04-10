import React, { FunctionComponent } from "react";
import { IScollbar } from "./scrollbar.types";
import "./scrollbar.scss";
import classnames from "classnames";

export const Scrollbar: FunctionComponent<IScollbar> = (props) => {
    const { className, ...restProps } = props;

    return (
        <div className={classnames("scrollbar", className)} {...restProps}>
            {props.children}
        </div>
    );
};
