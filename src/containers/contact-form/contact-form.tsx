import React from "react";
import "./contact-form.scss";
import { Card } from "components/Card";
import { Textfield } from "components/Textfield";
import { Button, ButtonSize } from "components/Button";
interface Props {}

export const ContactForm = (props: Props) => {
    return (
        <Card className="contact-form">
            <div className="contact-form__title">فرم تماس</div>
            <Textfield
                className="my-3"
                onChange={(e) => {}}
                placeholder="متن"
                label="نام و نام خانوادگی"
                name="name"
                type="text"
            />
            <Textfield
                className="my-3"
                onChange={(e) => {}}
                placeholder="متن"
                label="پست الکترونیکی"
                name="email"
                type="email"
            />
            <Textfield
                className="my-3"
                onChange={(e) => {}}
                placeholder="متن"
                label="شماره تماس"
                name="phone"
                type="text"
            />
            <Textfield
                className="my-3"
                onChange={(e) => {}}
                placeholder="متن"
                label="موضوع"
                name="subject"
                type="text"
            />
            <Textfield
                isMultiline
                className="my-3"
                onChange={(e) => {}}
                placeholder="متن خود را وارد نمایید."
                name="content"
                type="text"
            />

            <Button block size={ButtonSize.large}>
                ارسال پیام
            </Button>
        </Card>
    );
};
