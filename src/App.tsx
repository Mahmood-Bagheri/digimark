import React, { Suspense, lazy } from "react";
import { MainLayout } from "containers/main-layout";
// import { BrandProducts } from "pages/Brand-Products";
import { Route, Switch } from "react-router-dom";
// import { ProductPage } from "pages/Product";
import { Loading } from "components/Loading";

const About = lazy(() => import("pages/About"));

const Blog = lazy(() => import("pages/Blog"));

const BrandProducts = lazy(() => import("pages/Brand-Products"));

const Brands = lazy(() => import("pages/Brands"));

const Contact = lazy(() => import("pages/Contact"));

const Faq = lazy(() => import("pages/Faq"));

const Landing = lazy(() => import("pages/Landing"));

const Login = lazy(() => import("pages/Login"));

const Store = lazy(() => import("pages/Store"));

const Product = lazy(() => import("pages/Product"));

function App() {
    return (
        <>
            <MainLayout>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/products" exact component={Store} />
                        <Route path="/products/:id" exact component={Product} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/about" exact component={About} />
                        <Route path="/brands" exact component={Brands} />
                        <Route path="/brands/:id" exact component={BrandProducts} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/faq" exact component={Faq} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                </Suspense>
            </MainLayout>
        </>
    );
}

export default App;
