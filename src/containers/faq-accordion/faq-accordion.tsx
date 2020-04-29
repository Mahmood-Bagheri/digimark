import React, { FunctionComponent } from "react";
import { Accordion } from "components/Accordion";
import { FaqData } from "data/faq";

export const FaqAccordion: FunctionComponent = props => {
    return (
        <>
            {FaqData.map(item => {
                return <Accordion {...item} />;
            })}
        </>
    );
};
