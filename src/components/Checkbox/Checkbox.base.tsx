import * as React from "react";
import { Checkbox as CheckboxBase } from "office-ui-fabric-react/lib/Checkbox";
import { ICheckbox } from "./Checkbox.types";

export const Checkbox: React.FunctionComponent<ICheckbox> = props => {
    return <CheckboxBase {...props} />;
};
