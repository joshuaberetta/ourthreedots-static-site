import React, { useContext, Suspense, lazy } from "react";
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

import BasicForm from "./pages/BasicForm";
// import DigitalStyles from "./pages/DigitalStyles";
import Book from "./pages/Book";
// import Payment from "./pages/Payment";
// import Success from "./pages/Success";

import { HREFS } from "./shared/Hrefs";
import { CategoryContext } from "./shared/context/form-context";
import LoadingSpinner from "./components/LoadingSpinner";
import { COLOURS } from "./shared/Colours";

const Payment = lazy(() => import("./pages/Payment"));
const Success = lazy(() => import("./pages/Success"));
const DigitalStyles = lazy(() => import("./pages/DigitalStyles"));

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
  const category = useContext(CategoryContext);
  console.log("Category: ", category.category);

  return (
    <Router>
      <Switch>
        <Route path={HREFS.home} exact>
          <NavBar />
          <MainPage />
        </Route>
        <Route path={HREFS.insightful} exact>
          <BasicForm category={"insightful"} />
        </Route>
        <Route path={HREFS.digitalForm} exact>
          <BasicForm category={"digital"} />
        </Route>
        <Route path={HREFS.book} exact>
          <Book />
        </Route>
        <Suspense
          fallback={<LoadingSpinner loading={true} color={COLOURS.red} />}
        >
          {category.category === "digital" && (
            <Route path={HREFS.digitalStyles} exact>
              <DigitalStyles />
            </Route>
          )}
          {category.category && (
            <Route path={HREFS.payment} exact>
              <Payment />
            </Route>
          )}
          {category.category && (
            <Route path={HREFS.success} exact>
              <Success />
            </Route>
          )}
        </Suspense>
        <Redirect to={HREFS.home} />
      </Switch>
    </Router>
  );
};

export default App;
