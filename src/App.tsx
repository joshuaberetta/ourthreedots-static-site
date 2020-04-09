import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Insights from "./pages/Insights";
import Pricing from "./pages/Pricing";
import Footer from "./pages/Footer";

import Insightful from "./pages/Insightful";
import Digital from "./pages/Digital";
import Book from "./pages/Book";

import { HREFS } from "./shared/Hrefs";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path={HREFS.home} exact>
            <Home />
            <Product />
            <Features />
            <Insights />
            <Pricing />
            <Footer />
          </Route>
          <Route path={HREFS.insightful} exact>
            <Insightful />
          </Route>
          <Route path={HREFS.digital} exact>
            <Digital />
          </Route>
          <Route path={HREFS.book} exact>
            <Book />
          </Route>
          <Redirect to={HREFS.home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
