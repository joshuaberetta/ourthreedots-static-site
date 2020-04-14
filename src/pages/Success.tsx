import React from "react";

import Page from "./Page";
import { Grid, Typography } from "@material-ui/core";

const Payment: React.FC = () => {
  return (
    <Page>
      <Grid item>
        <Typography variant="h1">
          <span role="img" aria-label="e">
            🎉
          </span>
        </Typography>
      </Grid>
    </Page>
  );
};

export default Payment;
