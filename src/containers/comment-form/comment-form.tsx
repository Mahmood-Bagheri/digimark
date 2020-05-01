import React from "react";
import "./comment-form.scss";
import { Textfield } from "components/Textfield";
import { Button, ButtonSize } from "components/Button";
interface Props {}

export const CommentForm = (props: Props) => {
    return (
        <>
            <p className="text mb-2">نظری بگذارید</p>

            <Textfield
                className="mb-3"
                label="نام"
                onChange={e => console.log(e)}
                placeholder="به طور مثال: محمود باقری"
            />
            <Textfield
                className="mb-3"
                label="ایمیل"
                onChange={e => console.log(e)}
                placeholder="به طور مثال: example@gmail.com"
            />
            <Textfield
                className="mb-3"
                label="وب سایت"
                onChange={e => console.log(e)}
                placeholder="به طور مثال: Google.com"
            />

            <Textfield isMultiline className="mb-3" onChange={e => console.log(e)} placeholder="متن نظر" />
            <Button size={ButtonSize.large} block>
                ارسال نظر
            </Button>
        </>
    );
};
