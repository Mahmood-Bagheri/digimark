import React from "react";
import { MainLayout } from "containers/main-layout";
import { MainCarousel } from "containers/main-carousel";
import { ProductTypes } from "containers/product-types";
import { FeaturesSecondary } from "containers/features-secondary";
import { ProductsCarousel } from "containers/product-carousel";
import { Testimonials } from "containers/testimonials";
import { RecentPostsCarousel } from "containers/recent-posts-carousel";
import { Advertisements } from "containers/advertisements";
import { BrandCarousel } from "containers/brand-carousel";

export function LandingPage() {
    return (
        <>
            <MainLayout>
                <MainCarousel />
                <ProductTypes />
                <FeaturesSecondary />
                <BrandCarousel />
                <ProductsCarousel />
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <Advertisements />
                    </div>{" "}
                    <div className="col-12 col-lg-4">
                        <RecentPostsCarousel />
                    </div>
                    <div className="col-12 col-lg-4">
                        <Testimonials />
                    </div>
                </div>
                <BrandCarousel />
            </MainLayout>
        </>
    );
}
