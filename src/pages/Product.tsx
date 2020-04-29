import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "./Page";
import WhatDo from "../components/WhatDo";
import { COLOURS } from "../shared/Colours";

const Words = () => {
  return (
    <Grid container direction="column" spacing={2} style={{ width: 300 }}>
      <Grid item>
        <Typography variant="h4">
          Your{" "}
          <span role="img" aria-label="emoji">
            💩
          </span>{" "}
          is our business.{" "}
          <span role="img" aria-label="emoji">
            😏
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

const Product: React.FC = () => {
  return (
    <React.Fragment>
      {/* <div id="product" /> */}
      <Page background={COLOURS.white} id="product">
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={10}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <WhatDo />
            </Grid>
            <Grid item>
              <Words />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </React.Fragment>
  );
};

export default Product;
