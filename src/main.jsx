import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
