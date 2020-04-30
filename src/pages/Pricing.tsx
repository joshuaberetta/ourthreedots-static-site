import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Page from "./Page";
import Card from "../components/Card";

import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";

const useStyles = makeStyles({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const Pricing: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <div id="pricing" /> */}
      <Page background={COLOURS.green} id="pricing">
        <Grid item>
          <Typography variant="h3">
            <span role="img" aria-label="emoji">
              💰💰💰💰
            </span>
          </Typography>
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
