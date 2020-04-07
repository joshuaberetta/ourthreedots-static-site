import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "./Page";
import WannaRing from "../components/WannaRing";
import WhatDo from "../components/WhatDo";
import { COLOURS } from "../shared/Colours";

const Words = () => {
  return (
    <Grid container direction="column" spacing={2} style={{ width: 300 }}>
      <Grid item>
        <Typography variant="h4">
          Digital memories, brought to life{" "}
          <span role="img" aria-label="emoji">
            🔥
          </span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Remember and relive shared memories, just as you would with a photo
          album.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Home: React.FC = () => {
  return (
    <Page background={COLOURS.yellow}>
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={10}
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Words />
          </Grid>
          <Grid item>
            <WannaRing />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
