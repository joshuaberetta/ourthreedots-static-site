import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ minHeight: "4rem" }} />
      <Pricing />
      <Product />
    </React.Fragment>
  );
};

export default App;
