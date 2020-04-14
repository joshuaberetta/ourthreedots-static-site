import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { FormContext } from "./shared/context/form-context";
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

// import Payment from "./pages/Payment";
// import Success from "./pages/Success";

import { HREFS } from "./shared/Hrefs";
// import Payment from './pages/'

const App: React.FC = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);

  const updateForm = useCallback((name, email, id) => {
    setName(name);
    setEmail(email);
    setId(id);
  }, []);

  return (
    <FormContext.Provider
      value={{
        name: name,
        email: email,
        id: id,
        updateForm: updateForm,
      }}
    >
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
          {/* <Route path={HREFS.payment} exact>
            <Payment />
          </Route>
          <Route path={HREFS.success} exact>
            <Success />
          </Route> */}
          <Redirect to={HREFS.home} />
        </Switch>
      </Router>
    </FormContext.Provider>
  );
};

export default App;
