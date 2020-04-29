import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import {
  LocationContext,
  CategoryContext,
} from "../shared/context/form-context";

import PaymentForm from "./payment/index";
import Breadcrumbs from "../components/Breadcrumbs";
import ErrorModal from "../components/Error";

import {
  INSIGHTFUL_PAYMENT_CRUMBS,
  DIGITAL_PAYMENT_CRUMBS,
} from "../shared/Crumbs";
import { COLOURS } from "../shared/Colours";

const Payment: React.FC = (props) => {
  const locationContext = useContext(LocationContext);
  const categoryContext = useContext(CategoryContext);
  const [isError, setIsError] = useState<boolean>(false);

  let crumbs;
  switch (categoryContext.category) {
    case "insightful":
      crumbs = INSIGHTFUL_PAYMENT_CRUMBS;
      break;
    case "digital":
      crumbs = DIGITAL_PAYMENT_CRUMBS;
      break;
    default:
      crumbs = undefined;
  }

  if (!crumbs) {
    setIsError(true);
  }

  useEffect(() => {
    locationContext.updateLocation("/payment");
  });

  return (
    <React.Fragment>
      <ErrorModal color={COLOURS.red} isError={isError} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: 70, minHeight: "40rem" }}
        spacing={5}
      >
        <Grid item style={{ position: "absolute", top: 10 }}>
          <Breadcrumbs crumbs={crumbs} />
        </Grid>
        <Grid item>
          <PaymentForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Payment;
