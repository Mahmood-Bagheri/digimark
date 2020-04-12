import React from "react";
import "./navigation-bar.scss";
import { NavLink } from "react-router-dom";
interface Props {}

export const Navbar = (props: Props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="navbar flex-nowrap">
                    <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/" exact>
                        فروشگاه ها
                    </NavLink>
                    <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/store" exact>
                        محصولات
                    </NavLink>
                    <NavLink
                        className="navbar__item col-auto"
                        activeClassName="navbar__item--active"
                        to="/brands"
                        exact
                    >
                        برند ها
                    </NavLink>

                    <div className="navbar__item col-auto">سفارشات</div>
                    <div className="navbar__item col-auto">همکاری با ما</div>
                    <NavLink className="navbar__item col-auto" activeClassName="navbar__item--active" to="/about">
                        درباره ما
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
