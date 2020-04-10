import * as React from "react";
import "./Button.scss";
import { IButton, ButtonSize } from "./Button.types";
import classnames from "classnames";

export const Button: React.FunctionComponent<IButton> = (props) => {
    const { className, children, size, block, ...restProps } = props;

    return (
        <button className={classnames("btn", { "btn--block": block }, renderSize(), className)} {...restProps}>
            {children}
        </button>
    );

    function renderSize(): string | null {
        switch (size) {
            case ButtonSize.normal:
                return null;

            case ButtonSize.large:
                return "btn--large";
            default:
                return null;
        }
    }
};
