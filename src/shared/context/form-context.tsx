import { createContext } from "react";

export const FormContext = createContext({
  name: null,
  email: null,
  id: null,
  updateForm: (name: string, email: string, id: string) => {},
});
