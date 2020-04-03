import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { ITextfield } from "./Textfield.types";
import "./Textfield.scss";

export const Textfield: React.FunctionComponent<ITextfield> = props => {
    return <TextField {...props} />;
};
