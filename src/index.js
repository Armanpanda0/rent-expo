import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createContext } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Store from "./Store";
import RenderComp from "./RenderComp";






const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
  <Store>
  
    <Router>
    <RenderComp>
      <App />
      </RenderComp>
    </Router>
    </Store>
  </React.StrictMode>
);
