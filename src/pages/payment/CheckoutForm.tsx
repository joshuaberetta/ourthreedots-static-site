import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {
  Backdrop,
  CircularProgress,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

import CardSection from "./CardSection";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { IdContext, CategoryContext } from "../../shared/context/form-context";
import { COLOURS } from "../../shared/Colours";

interface LoadingSpinnerProps {
  loading: boolean;
  color: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <Backdrop
      style={{ zIndex: 2, background: "rgba(255,255,255,0.7)" }}
      open={props.loading}
    >
      <CircularProgress style={{ color: props.color }} />
    </Backdrop>
  );
};

export default function CheckoutForm() {
  const idContext = useContext(IdContext);
  const categoryContext = useContext(CategoryContext);
  const { sendRequest } = useHttpClient();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    let responseData;
    try {
      setLoading((prev: boolean) => !prev);

      const formData = new FormData();
      formData.append("category", categoryContext.category);
      responseData = await sendRequest(
        "http://localhost:5000/api/payment",
        "POST",
        formData,
      );
    } catch {
      console.log("something went wrong");
    }

    if (!responseData) {
      console.log("something went wrong");
      return;
    }

    const result = await stripe.confirmCardPayment(responseData.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: idContext.id,
        },
      },
    });

    // testing out shared state
    // console.log(context);

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent!.status === "succeeded") {
        history.push("/success");
      }
    }
  };

  return (
    <React.Fragment>
      <LoadingSpinner loading={loading} color={COLOURS.blue} />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Typography variant="h3">
              <span role="img" aria-label="emjoi">
                💳
              </span>
            </Typography>
          </Grid>
          <Grid item>
            <CardSection />
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => history.push("/")}
                  disabled={!stripe || loading}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!stripe || loading}
                >
                  Confirm order
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
