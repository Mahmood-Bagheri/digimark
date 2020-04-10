import React, { FunctionComponent } from "react";
import { Accordion } from "components/Accordion";

export const FaqAccordion: FunctionComponent = (props) => {
    return (
        <>
            <Accordion question="سوال؟" description="جواب" />
            <Accordion question="سوال؟" description="جواب" />
            <Accordion question="سوال؟" description="جواب" />
            <Accordion question="سوال؟" description="جواب" />
            <Accordion question="سوال؟" description="جواب" />
        </>
    );
};
