import * as React from "react";
import "./Textfield.scss";
import { ITextfield } from "./Textfield.types";
export const Textfield: React.FunctionComponent<ITextfield> = (props) => {
    return (
        <div className="textfield">
            {renderLabel(props)}
            <input className="textfield__input" placeholder={props.placeholder} {...props} />
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
