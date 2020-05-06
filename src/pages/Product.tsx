import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Page from "./Page";
import WhatDo from "../components/WhatDo";

import { PRODUCT } from "../shared/Content";
import { COLOURS } from "../shared/Colours";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  words: {
    width: 300,
  },
});

const Words = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} className={classes.words}>
      <Grid item>
        <Typography variant="h4">{PRODUCT.title}</Typography>
      </Grid>
    </Grid>
  );
};

const Product: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Page background={COLOURS.white} id="product">
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={10}
            alignItems="center"
            justify="center"
            className={classes.root}
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
