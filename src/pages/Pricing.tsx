import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Page from "./Page";
import Card from "../components/Card";

import { PRICING } from "../shared/Content";
import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const Pricing: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <div id="pricing" /> */}
      <Page background={COLOURS.green} id="pricing">
        <Grid item className={classes.root}>
          <Typography variant="h3">{PRICING.title}</Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={3}
            justify="center"
            alignItems="center"
            className={classes.root}
          >
            {CATEGORIES.map((card) => (
              <Grid item key={card.title}>
                <Card {...card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Page>
    </React.Fragment>
  );
};

export default Pricing;
