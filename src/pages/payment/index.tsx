import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_LuJUFjsEqp694fDozc0HVn8P00BJIKfwNI");

export default () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
