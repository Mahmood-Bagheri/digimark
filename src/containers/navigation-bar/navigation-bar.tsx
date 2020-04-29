import React from "react";
import "./navigation-bar.scss";
import { NavLink } from "react-router-dom";
interface Props {}

export const Navbar = (props: Props) => {
    return (
        <div className="container-fluid">
            <div className="navbar flex-nowrap">
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/" exact>
                    خانه
                </NavLink>
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/products">
                    محصولات
                </NavLink>
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/brands" exact>
                    برند ها
                </NavLink>

                <div className="navbar__item col-auto">سفارشات</div>
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/faq" exact>
                    سوالات متداول
                </NavLink>
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/blog">
                    بلاگ
                </NavLink>
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/about">
                    درباره ما
                </NavLink>
                <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/contact">
                    تماس با ما
                </NavLink>
            </div>
        </div>
    );
};
