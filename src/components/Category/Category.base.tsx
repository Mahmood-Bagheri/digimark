import React, { FunctionComponent } from "react";
import { ICategory } from "./Category.types";
import "./Category.scss";

export const Category: FunctionComponent<ICategory> = (props) => {
    const { text, id, getId } = props;
    return (
        <div className="category" onClick={() => getId(id)}>
            {text}
        </div>
    );
};
