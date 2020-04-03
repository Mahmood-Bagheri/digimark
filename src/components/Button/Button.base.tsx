import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { IButton } from "./Button.types";

export const Button: React.FunctionComponent<IButton> = props => {
    return <PrimaryButton className="btn" {...props} />;
};
