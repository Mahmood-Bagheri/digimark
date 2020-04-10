import * as React from "react";
import "./Seprator.scss";
import classnames from "classnames";

interface ISeprator extends React.HTMLAttributes<HTMLDivElement> {}

export const Seprator: React.FunctionComponent<ISeprator> = (props) => {
    const { className, ...resProps } = props;
    return <div className={classnames("seprator", className)}></div>;
};
