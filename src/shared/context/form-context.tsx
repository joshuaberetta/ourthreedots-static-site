import { createContext } from "react";

export const IdContext = createContext({
  id: "",
});

export const CategoryContext = createContext({
  category: "",
  updateCategry: (category: string) => {},
});

interface FormContextType {
  // id: any;
  email: string;
  nameTop: string;
  nameBottom: string;
  fileUploaded: boolean;
  dateStart: any;
  dateEnd: any;
  isFormValid: boolean;
  formLoading: boolean;
}

export const FirstFormContext = createContext({
  // id: "qwerty12345",
  email: "",
  nameTop: "",
  nameBottom: "",
  fileUploaded: false,
  dateStart: new Date(),
  dateEnd: new Date(),
  isFormValid: false,
  formLoading: false,
  updateForm: (updatedItems: FormContextType) => {},
});

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

export const StylesContext = createContext({
  backgroundTop: "",
  textTop: "",
  filledTop: true,
  backgroundBottom: "",
  textBottom: "",
  filledBottom: false,
  dbUpdated: false,
  isStyleValid: false,
  styleLoading: false,
  updateStyles: (updatedStyles: StylesContextType) => {},
});

interface PaymentContextType {
  paymentConfirmed: boolean;
  paymentLoading: boolean;
}

export const PaymentContext = createContext({
  paymentConfirmed: false,
  paymentLoading: false,
  updatePayment: (updatedPayment: PaymentContextType) => {},
});

export const FormContext = createContext({
  category: null,
  //
  // id: null,
  email: null,
  nameTop: null,
  nameBottom: null,
  dateStart: null,
  dateEnd: null,
  isFormValid: false,
  formLoading: false,
  //
  backgroundTop: null,
  textTop: null,
  filledTop: null,
  backgroundBottom: null,
  textBottom: null,
  filledBottom: null,
  fileUploaded: false,
  dbUpdated: false,
  isStyleValid: false,
  styleLoading: false,
  //
  paymentConfirmed: false,
  paymentLoading: false,
  updateForm: (
    category: string,
    //
    // id: any,
    email: string,
    nameTop: string,
    nameBottom: string,
    dateStart: any,
    dateEnd: any,
    isFormValid: boolean,
    formLoading: boolean,
    //
    backgroundTop: string,
    textTop: string,
    filledTop: boolean,
    backgroundBottom: string,
    textBottom: string,
    filledBottom: boolean,
    fileUploaded: boolean,
    dbUpdated: boolean,
    isStyleValid: boolean,
    styleLoading: boolean,
    //
    paymentConfirmed: boolean,
    paymentLoading: boolean,
  ) => {},
});
