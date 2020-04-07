import React from "react";
import "./navigation-bar.scss";
interface Props {}

export const Navbar = (props: Props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="navbar flex-nowrap">
                    <div className="navbar__item col-auto">فروشگاه ها</div>
                    <div className="navbar__item col-auto">محصولات</div>
                    <div className="navbar__item col-auto navbar__item--active">برند ها</div>
                    <div className="navbar__item col-auto">سفارشات</div>
                    <div className="navbar__item col-auto">همکاری با ما</div>
                    <div className="navbar__item col-auto">درباره ما</div>
                </div>
            </div>
        </div>
    );
};
