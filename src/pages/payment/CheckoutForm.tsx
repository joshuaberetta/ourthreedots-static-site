import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";

import ErrorModal from "../../components/Error";
import LoadingSpinner from "../../components/LoadingSpinner";
import CardSection from "./CardSection";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { IdContext, CategoryContext } from "../../shared/context/form-context";
import { CATEGORIES } from "../../shared/PricingCategories";
import { PriceCard } from "../../models/PriceCard.model";
import { COLOURS } from "../../shared/Colours";

const useStyles = makeStyles({
  buttonCancel: {
    border: `2px solid ${COLOURS.red}`,
    width: 150,
  },
  buttonProceed: {
    border: (props: { color: string }) => `2px solid ${props.color}`,
    width: 150,
  },
});

const CheckoutForm = () => {
  const idContext = useContext(IdContext);
  const categoryContext = useContext(CategoryContext);
  const { sendRequest } = useHttpClient();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [category, setCategory] = useState<PriceCard>({
    title: "",
    description: "",
    price: "",
    href: "",
    background: "",
    color: "",
  });

  const classes = useStyles({ color: category.color });

  useEffect(() => {
    const CAT = CATEGORIES.filter(
      (cat) => cat.title === categoryContext.category,
    )[0];
    setCategory(CAT);
  }, [categoryContext]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
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
      setIsError(true);
    }

    if (!responseData) {
      setIsError(true);
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

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setIsError(true);
    } else {
      // The payment has been processed!
      if (result.paymentIntent!.status === "succeeded") {
        history.push("/success");
      }
    }
  };

  return (
    <React.Fragment>
      <LoadingSpinner loading={loading && !isError} color={category.color} />
      <ErrorModal isError={isError} color={category.color} />
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
                  className={classes.buttonCancel}
                  disableRipple
                  onClick={() => history.push("/")}
                  disabled={!stripe || !elements || loading}
                >
                  <Typography variant="h3">
                    <span role="img" aria-label="emoji">
                      ✋
                    </span>
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.buttonProceed}
                  disableRipple
                  type="submit"
                  disabled={!stripe || !elements || loading}
                >
                  <Typography variant="h3">
                    <span role="img" aria-label="emoji">
                      🎉
                    </span>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default CheckoutForm;
