import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Page from "./Page";

import { INSIGHTS } from "../shared/Content";
import { COLOURS } from "../shared/Colours";

import Bars from "../components/svg/Bars";
import Bubbles from "../components/svg/Bubbles";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const Product: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Page background={COLOURS.white} id="insights">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={10}
          className={classes.root}
        >
          <Grid item>
            <Typography variant="h4">{INSIGHTS.title}</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              spacing={10}
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <Bars />
              </Grid>
              <Grid item>
                <Bubbles />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </React.Fragment>
  );
};

export default Product;
