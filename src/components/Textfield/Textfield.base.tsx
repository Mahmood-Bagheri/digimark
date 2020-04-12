import * as React from "react";
import "./Textfield.scss";
import { ITextfield } from "./Textfield.types";
import classnames from "classnames";
export const Textfield: React.FunctionComponent<ITextfield> = (props) => {
    const { className, ...restProps } = props;
    return (
        <div className={classnames("textfield", className)}>
            {renderLabel(props)}
            <input className="textfield__input" placeholder={props.placeholder} {...restProps} />
            <div className="icon mr-auto"></div>
        </div>
    );

    function renderLabel(props: ITextfield): JSX.Element | null {
        const { label } = props;
        if (label) {
            return (
                <>
                    <label className="textfield__label">{label}</label>
                    <div className="textfield__seprator"></div>
                </>
            );
        } else {
            return null;
        }
    }
};
