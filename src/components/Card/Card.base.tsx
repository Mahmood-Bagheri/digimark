import React, { FunctionComponent } from "react";
import "./Card.scss";

export const Card: FunctionComponent<Partial<ICard>> = (props) => {
    const { link, title, children } = props;

    return (
        <div className="card mb-2">
            {renderTitle(props)}
            <div className="card__body">{children}</div>
            {renderAction(props)}
        </div>
    );

    function renderTitle(props: Partial<ICard>): JSX.Element | null {
        if (!props.title) {
            return null;
        }
        return <div className="card__title">{title}</div>;
    }

    function renderAction(props: Partial<ICard>): JSX.Element | null {
        if (!props.link) {
            return null;
        }
        return <div className="card__action">{link}</div>;
    }
};
