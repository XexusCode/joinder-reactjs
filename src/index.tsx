import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// axe(React, ReactDOM, 1000);  // active component to see accesibility fails
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
