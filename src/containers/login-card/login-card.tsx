import React from "react";
import { Card } from "components/Card";
import "./login-card.scss";
import { Textfield } from "components/Textfield";
import { Button, ButtonSize } from "components/Button";
import { Checkbox } from "components/Checkbox";

interface Props {}

export const LoginCard = (props: Props) => {
    return (
        <div className="login-card-container">
            <Card className="login">
                <img className="login__logo" src="assets/icons/icon-en.svg" alt="logo" />
                <div className="login__text">ورود به دیجی مارک</div>
                <Textfield
                    className="login__textfield mt-2"
                    label="ایمیل یا شماره موبایل"
                    placeholder="لطفا شماره موبایل خود را وارد کنید"
                    onChange={(e) => {}}
                    dir={"ltr"}
                />
                <Textfield
                    className="login__textfield mt-2"
                    label="رمز عبور"
                    placeholder="لطفا رمز عبور خود را وارد نمایید"
                    onChange={(e) => {}}
                    type={"password"}
                    dir={"ltr"}
                />

                <Button block size={ButtonSize.large} className="mt-3">
                    ورود به دیجی مارک
                </Button>

                <div className="login__remember">
                    <Checkbox />
                    <p>مرا به خاطر داشته باش</p>
                </div>

                <div className="login__register-text">
                    <p>کاربر جدید هستید؟</p>
                    <div className="login__question">ثبت نام در دیجی مارک</div>
                </div>
            </Card>
        </div>
    );
};
