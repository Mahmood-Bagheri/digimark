import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { createTheme, loadTheme } from "office-ui-fabric-react/lib/Styling";
import { setRTL } from "office-ui-fabric-react/lib/Utilities";
import "assets/css/bootstrap-grid.min.css";

initializeIcons(/* optional base url */);
const myTheme = createTheme({
    palette: {
        themePrimary: "#5bbeff",
        themeLighterAlt: "#f8fcff",
        themeLighter: "#e5f5ff",
        themeLight: "#ceebff",
        themeTertiary: "#9dd8ff",
        themeSecondary: "#6fc6ff",
        themeDarkAlt: "#53abe6",
        themeDark: "#4690c2",
        themeDarker: "#336a8f",
        neutralLighterAlt: "#faf9f8",
        neutralLighter: "#f3f2f1",
        neutralLight: "#edebe9",
        neutralQuaternaryAlt: "#e1dfdd",
        neutralQuaternary: "#d0d0d0",
        neutralTertiaryAlt: "#c8c6c4",
        neutralTertiary: "#c2c8e2",
        neutralSecondary: "#8d98c5",
        neutralPrimaryAlt: "#6470aa",
        neutralPrimary: "#53609d",
        neutralDark: "#404a78",
        black: "#2f3759",
        white: "#ffffff",
    },
});

loadTheme(myTheme);

setRTL(true);
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
