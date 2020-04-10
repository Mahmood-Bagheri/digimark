import React, { FunctionComponent, useState } from "react";
import { IAccordion } from "./Accordion.types";
import "./Accordion.scss";
import { Card } from "components/Card";
import classnames from "classnames";

export const Accordion: FunctionComponent<IAccordion> = (props) => {
    const { description, question } = props;

    const [visible, setVisible] = useState<boolean>(false);

    const toggle = () => setVisible(!visible);

    return (
        <div className="accordion">
            <div className="row">
                <div className="col-12">
                    <Card onClick={toggle}>
                        <div className="accordion__item">
                            <div className="accordion__text">{question}</div>
                            <svg
                                className={classnames("accordion__icon", { "accordion__icon--active": visible })}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </div>
                        {renderAnswer()}
                    </Card>
                </div>
            </div>
        </div>
    );

    function renderAnswer(): JSX.Element | null {
        if (visible) {
            return <div className="accordion__description">{description}</div>;
        } else {
            return null;
        }
    }
};
