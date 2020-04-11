import React, { FunctionComponent } from "react";
import { Spinner } from "components/Spinner";
import "./page-spinner.scss";
import { SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
export const PageSpinner: FunctionComponent = (props) => {
    return (
        <div className="page-spinner">
            <Spinner size={SpinnerSize.large} />
        </div>
    );
};
