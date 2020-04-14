import React from "react";
import { useHistory } from "react-router-dom";

import Page from "./Page";
import { Grid, Typography, Button } from "@material-ui/core";

const Payment: React.FC = () => {
  const history = useHistory();
  return (
    <Page>
      <Grid item>
        <Typography variant="h4">
          <span role="img" aria-label="e">
            🎉
          </span>
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={() => history.push("/")}>Home</Button>
      </Grid>
    </Page>
  );
};

export default Payment;
