import * as React from "react";
import { Rating as RatingsBase } from "office-ui-fabric-react/lib/Rating";
import { IRating } from "./Rating.types";

export const Rating: React.FunctionComponent<IRating> = props => {
    return <RatingsBase {...props} />;
};
