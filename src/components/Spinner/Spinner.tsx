import * as React from "react";
import { Spinner as SpinnerComponent } from "office-ui-fabric-react/lib/Spinner";
import { ISpinner } from "./Spinner.types";

export const Spinner: React.FunctionComponent<ISpinner> = (props) => {
    return <SpinnerComponent {...props} />;
};
