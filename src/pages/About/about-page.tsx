import React from "react";
import { AboutUsCard } from "containers/about-us-card";
import { BrandCarousel } from "containers/brand-carousel";

export function AboutUs() {
    return (
        <>
            <AboutUsCard />
            <BrandCarousel />
        </>
    );
}

export default AboutUs;
