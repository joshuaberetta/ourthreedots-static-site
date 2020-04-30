import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Page from "./Page";
import { COLOURS } from "../shared/Colours";

import Bars from "../components/svg/Bars";
import Bubbles from "../components/svg/Bubbles";

const Product: React.FC = () => {
  return (
    <React.Fragment>
      <Page background={COLOURS.white} id="insights">
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
    </React.Fragment>
  );
};

export default Product;
