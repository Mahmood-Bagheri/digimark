import React from "react";
import { MainLayout } from "containers/main-layout";
import { AboutUsCard } from "containers/about-us-card";
import { BrandCarousel } from "containers/brand-carousel";

export function AboutUs() {
    return (
        <>
            <MainLayout>
                <AboutUsCard />
                <BrandCarousel />
            </MainLayout>
        </>
    );
}

export default AboutUs;
