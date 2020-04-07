import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "./Page";
import WannaRing from "../components/WannaRing";
import WhatDo from "../components/WhatDo";

const Product: React.FC = () => {
  return (
    <Page>
      <Grid item>
        <Typography variant="h5">Hello from Product</Typography>
      </Grid>
      <Grid item>
        <WannaRing />
      </Grid>
      <Grid item>
        <WhatDo />
      </Grid>
    </Page>
  );
};

export default Product;
