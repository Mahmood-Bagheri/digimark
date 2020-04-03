import * as React from "react";
import { Separator } from "office-ui-fabric-react/lib/Separator";
import { ISeprator } from "./Seprator.types";

export const Seprator: React.FunctionComponent<ISeprator> = props => {
    return <Separator {...props} />;
};
