import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "./Page";
import { COLOURS } from "../shared/Colours";

import Bars from "../components/svg/Bars";
import Bubbles from "../components/svg/Bubbles";

const Product: React.FC = () => {
  return (
    <Page background={COLOURS.white}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item>
          <Typography variant="h4">
            Discover unique trends{" "}
            <span role="img" aria-label="emoji">
              🤔
            </span>
          </Typography>
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
  );
};

export default Product;
