import React, { useEffect, useContext } from "react";
import { Grid, Typography } from "@material-ui/core";

import { LocationContext } from "../shared/context/form-context";

import Breadcrumbs from "../components/Breadcrumbs";

import { SUCCESS_CRUMBS } from "../shared/Crumbs";

const Payment: React.FC = () => {
  const locationContext = useContext(LocationContext);

  useEffect(() => {
    locationContext.updateLocation("/success");
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: 70, minHeight: "40rem" }}
      spacing={5}
    >
      <Grid item style={{ position: "absolute", top: 10 }}>
        <Breadcrumbs crumbs={SUCCESS_CRUMBS} />
      </Grid>
      <Grid item>
        <Typography variant="h1">
          <span role="img" aria-label="e">
            🎉
          </span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          Please check your email for order confirmation{" "}
          <span role="img" aria-label="e">
            💌
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Payment;
