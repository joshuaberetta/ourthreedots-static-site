import React from "react";
// import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Insights from "./pages/Insights";
import Pricing from "./pages/Pricing";
import Footer from "./pages/Footer";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ minHeight: "4rem" }} />
      <Home />
      <Product />
      <Features />
      <Insights />
      <Pricing />
      <Footer />
    </React.Fragment>
  );
};

export default App;
