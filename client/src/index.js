import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/tailwind.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App></App> ,
  </BrowserRouter>,
  document.getElementById("root")
);
