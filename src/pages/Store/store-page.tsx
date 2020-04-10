import React from "react";
import { MainLayout } from "containers/main-layout";
import { SearchInResults } from "containers/search-in-results";
import { Brandfilter } from "containers/brand-filter";
import { Product } from "containers/product";

export function Store() {
    return (
        <>
            <MainLayout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <SearchInResults />
                            <Brandfilter />
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                    <div className="col-12 col-sm-6 col-lg-4 mb-2">
                                        <Product
                                            title="گوشی موبایل اپل iPhone XS Max 256GB "
                                            price={19.999}
                                            image={
                                                !!(index % 2)
                                                    ? "/assets/images/clothes.jpg"
                                                    : "/assets/images/t-shirt.jpg"
                                            }
                                            url="google.com"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
