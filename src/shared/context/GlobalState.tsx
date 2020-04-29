import React, { useState, useCallback, useEffect } from "react";
import { uuid } from "uuidv4";
import {
  CategoryContext,
  FirstFormContext,
  IdContext,
  StylesContext,
  PaymentContext,
  LocationContext,
} from "./form-context";

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

interface GlobalStateProps {
  children: any;
}

const GlobalState: React.FC<GlobalStateProps> = (props) => {
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

  return (
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
                {props.children}
              </LocationContext.Provider>
            </PaymentContext.Provider>
          </IdContext.Provider>
        </CategoryContext.Provider>
      </FirstFormContext.Provider>
    </StylesContext.Provider>
  );
};

export default GlobalState;
