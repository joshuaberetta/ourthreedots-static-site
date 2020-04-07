import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ minHeight: "4rem" }} />
      <Home />
      <Product />
      <Features />
      <Pricing />
    </React.Fragment>
  );
};

export default App;
