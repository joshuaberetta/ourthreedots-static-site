import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "./Page";
import Card from "../components/Card";

import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";

const Pricing: React.FC = () => {
  return (
    <Page background={COLOURS.green} spacing={3}>
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
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          {CATEGORIES.map((card) => (
            <Grid item>
              <Card {...card} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Pricing;
