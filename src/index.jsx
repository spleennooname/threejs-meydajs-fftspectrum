import "./style.scss"

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.jsx";

const rootDom = document.getElementById("app")
const root = ReactDOM.createRoot(rootDom);
root.render(
 <App />
);