import React from "react";
import { MainLayout } from "containers/main-layout";
import { FaqAccordion } from "containers/faq-accordion";

export function FaqPage() {
    return (
        <>
            <MainLayout>
                <FaqAccordion />
            </MainLayout>
        </>
    );
}
