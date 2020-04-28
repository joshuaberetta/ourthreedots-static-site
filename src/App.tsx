import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { uuid } from "uuidv4";
import {
  CategoryContext,
  FirstFormContext,
  IdContext,
  StylesContext,
  PaymentContext,
  LocationContext,
} from "./shared/context/form-context";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Insights from "./pages/Insights";
import Pricing from "./pages/Pricing";
import Footer from "./pages/Footer";

import Insightful from "./pages/Insightful";
import DigitalForm from "./pages/DigitalForm";
import DigitalStyles from "./pages/DigitalStyles";
import Book from "./pages/Book";
import Form from "./pages/Form";

import Payment from "./pages/Payment";
import Success from "./pages/Success";

import { HREFS } from "./shared/Hrefs";

interface FormContextType {
  email: string;
  nameTop: string;
  nameBottom: string;
  fileUploaded: boolean;
  dateStart: any;
  dateEnd: any;
  isFormValid: boolean;
  formLoading: boolean;
}

interface StylesContextType {
  backgroundTop: string;
  textTop: string;
  filledTop: boolean;
  backgroundBottom: string;
  textBottom: string;
  filledBottom: boolean;
  dbUpdated: boolean;
  isStyleValid: boolean;
  styleLoading: boolean;
}

interface PaymentContextType {
  paymentConfirmed: boolean;
  paymentLoading: boolean;
}

const App: React.FC = () => {
  const [id, setId] = useState<any>("");
  const [category, setCategory] = useState<string>("");
  const [form, setForm] = useState<FormContextType>({
    email: "",
    nameTop: "",
    nameBottom: "",
    fileUploaded: false,
    dateStart: new Date(),
    dateEnd: new Date(),
    isFormValid: false,
    formLoading: false,
  });
  const [styles, setStyles] = useState<StylesContextType>({
    backgroundTop: "",
    textTop: "",
    filledTop: true,
    backgroundBottom: "",
    textBottom: "",
    filledBottom: false,
    dbUpdated: false,
    isStyleValid: false,
    styleLoading: false,
  });
  const [payment, setPayment] = useState<PaymentContextType>({
    paymentConfirmed: false,
    paymentLoading: false,
  });
  const [location, setLocation] = useState<string>("/");

  const updateLocation = useCallback((loc: string) => {
    setLocation(loc);
  }, []);

  useEffect(() => {
    setId(uuid());
  }, []);

  useEffect(() => {
    setLocation("/");
  }, []);

  useEffect(() => {
    console.log(location, id, category);
  }, [location, id, category]);

  const updateForm = useCallback(
    (updatedItems: FormContextType) => {
      setForm({ ...form, ...updatedItems });
    },
    [form],
  );

  const updateStyles = useCallback(
    (updatedStyles: StylesContextType) => {
      setStyles({ ...styles, ...updatedStyles });
    },
    [styles],
  );

  const updatePayment = useCallback(
    (updatedPayment: PaymentContextType) => {
      setPayment({ ...payment, ...updatedPayment });
    },
    [payment],
  );

  const updateCategory = useCallback((cat: string) => {
    setCategory(cat);
  }, []);

  // useEffect(() => {
  //   console.log({ id, category, form, styles });
  // }, [id, category, form, styles]);

  return (
    <React.Fragment>
      <StylesContext.Provider
        value={{
          backgroundTop: styles.backgroundTop,
          textTop: styles.textTop,
          filledTop: styles.filledTop,
          backgroundBottom: styles.backgroundBottom,
          textBottom: styles.textBottom,
          filledBottom: styles.filledBottom,
          dbUpdated: styles.dbUpdated,
          isStyleValid: styles.isStyleValid,
          styleLoading: styles.styleLoading,
          updateStyles: updateStyles,
        }}
      >
        <FirstFormContext.Provider
          value={{
            email: form.email,
            nameTop: form.nameTop,
            nameBottom: form.nameBottom,
            fileUploaded: form.fileUploaded,
            dateStart: form.dateStart,
            dateEnd: form.dateEnd,
            isFormValid: form.isFormValid,
            formLoading: form.formLoading,
            updateForm: updateForm,
          }}
        >
          <CategoryContext.Provider
            value={{
              category: category,
              updateCategry: updateCategory,
            }}
          >
            <IdContext.Provider value={{ id: id }}>
              <PaymentContext.Provider
                value={{
                  paymentConfirmed: payment.paymentConfirmed,
                  paymentLoading: payment.paymentLoading,
                  updatePayment: updatePayment,
                }}
              >
                <LocationContext.Provider
                  value={{ location: location, updateLocation: updateLocation }}
                >
                  <Router>
                    {/* {location === "/" ? <NavBar /> : null} */}
                    <Switch>
                      <Route path={HREFS.home} exact>
                        <NavBar />
                        <Home />
                        <Product />
                        <Features />
                        <Insights />
                        <Pricing />
                        <Footer />
                      </Route>
                      <Route path={"/form"} exact>
                        <Form />
                      </Route>
                      <Route path={HREFS.insightful} exact>
                        <Insightful />
                      </Route>
                      <Route path={HREFS.digitalForm} exact>
                        <DigitalForm />
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
                </LocationContext.Provider>
              </PaymentContext.Provider>
            </IdContext.Provider>
          </CategoryContext.Provider>
        </FirstFormContext.Provider>
      </StylesContext.Provider>
    </React.Fragment>
  );
};

export default App;
