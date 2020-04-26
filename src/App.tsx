import React, { Suspense } from "react";
import { MainLayout } from "containers/main-layout";
// import { BrandProducts } from "pages/Brand-Products";
import { Route, Switch } from "react-router-dom";
// import { ProductPage } from "pages/Product";
import { Loading } from "components/Loading";

const BrandProducts = React.lazy(() =>
    import("pages/Brand-Products").then(({ BrandProducts }) => ({ default: BrandProducts }))
);

const ProductPage = React.lazy(() => import("pages/Product").then(({ ProductPage }) => ({ default: ProductPage })));
const BlogPage = React.lazy(() => import("pages/Blog").then(({ BlogPage }) => ({ default: BlogPage })));

function App() {
    return (
        <>
            <MainLayout>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/products" exact component={BrandProducts} />
                        <Route path="/blog" exact component={BlogPage} />
                        <Route path="/products/:id" exact component={ProductPage} />
                    </Switch>
                </Suspense>
            </MainLayout>
        </>
    );
}

export default App;
