import * as React from "react";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import { ISpinner } from "./Spinner.types";

export const SpinnerBasicExample: React.FunctionComponent<ISpinner> = props => {
    return <Spinner {...props} />;
};
