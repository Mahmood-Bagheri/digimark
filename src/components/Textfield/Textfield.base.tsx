import * as React from "react";
import { ITextfield } from "./Textfield.types";
import classnames from "classnames";
import "./Textfield.scss";

export const Textfield: React.FunctionComponent<ITextfield> = (props) => {
    const { className, ...restProps } = props;

    return (
        <div className={classnames("textfield", className)}>
            {renderLabel(props)}
            {renderInput(props)}
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

    function renderInput(props: ITextfield): JSX.Element {
        const { isMultiline } = props;

        if (isMultiline) {
            return <textarea className="textfield__input" placeholder={props.placeholder} />;
        }
        return <input className="textfield__input" placeholder={props.placeholder} {...restProps} />;
    }
};
