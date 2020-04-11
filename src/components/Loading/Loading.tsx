import React, { useEffect } from "react";
import NProgress from "nprogress";
import "./nprogress.scss";
// NProgress.configure({ showSpinner: false });

export const Loading = () => {
    useEffect(() => {
        NProgress.start();
        return () => {
            NProgress.done();
        };
    }, []);
    return <> </>;
};
