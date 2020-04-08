import React, { FunctionComponent } from "react";
import { Footer } from "containers/footer";
import { Header } from "containers/header";

export const MainLayout: FunctionComponent = (props) => {
    return (
        <>
            <Header />
            <div className="container py-2">{props.children}</div>
            <Footer />
        </>
    );
};
