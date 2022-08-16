import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Layout from "./components/Layout/Layout";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

reportWebVitals();
