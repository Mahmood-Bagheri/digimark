import React, { useState } from "react";
import { SearchInResults } from "containers/search-in-results";
import { Brandfilter } from "containers/brand-filter";
import { Product } from "containers/product";
import { Link } from "react-router-dom";

export default function Store() {
    const [searchWord, setSearchWord] = useState("");

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-3">
                    <SearchInResults setSearchWord={value => setSearchWord(value)} />
                    <Brandfilter />
                </div>
                <div className="col-12 col-lg-9">
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                            <div className="col-12 col-sm-6 col-lg-4 mb-2">
                                <Link to={`/products/${index}`}>
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
