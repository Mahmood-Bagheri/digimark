import React, { useState } from "react";
import { SearchInResults } from "containers/search-in-results";
import { Product } from "containers/product";
import { ProductBrandCard } from "containers/product-brand-card";
import { Link } from "react-router-dom";

export function BrandProducts() {
    const [searchWord, setSearchWord] = useState("");

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-3">
                    <ProductBrandCard />
                    <SearchInResults setSearchWord={(value) => setSearchWord(value)} />
                </div>
                <div className="col-12 col-lg-9">
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <div className="col-12 col-sm-6 col-lg-4 mb-2">
                                <Link to={`/products/${item}`}>
                                    <Product
                                        title="گوشی موبایل اپل iPhone XS Max 256GB "
                                        price={19.999}
                                        image={index % 2 ? "/assets/images/clothes.jpg" : "/assets/images/t-shirt.jpg"}
                                        url="google.com"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
