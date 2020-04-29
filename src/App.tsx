import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import GlobalState from "./shared/context/GlobalState";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Insights from "./pages/Insights";
import Pricing from "./pages/Pricing";
import Footer from "./pages/Footer";

import BasicForm from "./pages/BasicForm";
import DigitalStyles from "./pages/DigitalStyles";
import Book from "./pages/Book";
import Form from "./pages/Form";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

import { HREFS } from "./shared/Hrefs";

const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Home />
      <Product />
      <Features />
      <Insights />
      <Pricing />
      <Footer />
    </React.Fragment>
  );
};

const App: React.FC = () => {
  return (
    <GlobalState>
      <Router>
        <Switch>
          <Route path={HREFS.home} exact>
            <NavBar />
            <MainPage />
          </Route>
          <Route path={"/form"} exact>
            <Form />
          </Route>
          <Route path={HREFS.insightful} exact>
            <BasicForm category={"insightful"} />
          </Route>
          <Route path={HREFS.digitalForm} exact>
            <BasicForm category={"digital"} />
          </Route>
          <Route path={HREFS.digitalStyles} exact>
            <DigitalStyles />
          </Route>
          <Route path={HREFS.book} exact>
            <Book />
          </Route>
          <Route path={HREFS.payment} exact>
            <Payment />
          </Route>
          <Route path={HREFS.success} exact>
            <Success />
          </Route>
          <Redirect to={HREFS.home} />
        </Switch>
      </Router>
    </GlobalState>
  );
};

export default App;
