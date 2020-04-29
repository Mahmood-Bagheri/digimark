import React from "react";
import { MainLayout } from "containers/main-layout";
import { LoginCard } from "containers/login-card";

export default function Login() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <LoginCard />
                </div>
            </div>
        </>
    );
}
