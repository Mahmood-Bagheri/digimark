import React from "react";
import { Card } from "components/Card";
import "./contact-card.scss";

interface IProps {
    title: string;
    description: string;
}
export const ContactCard = (props: IProps) => {
    const { description, title } = props;

    return (
        <Card className="contact-card">
            <div className="contact-card__title">{title}</div>
            <div className="contact-card__description">{description}</div>
        </Card>
    );
};
