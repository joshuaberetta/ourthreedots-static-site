import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Page from "./Page";
import WannaRing from "../components/WannaRing";
import { HOME } from "../shared/Content";
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
        <Typography variant="h4">{HOME.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{HOME.subtitle}</Typography>
      </Grid>
    </Grid>
  );
};

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Page background={COLOURS.yellow} id="home">
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
              <Words />
            </Grid>
            <Grid item>
              <WannaRing />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </React.Fragment>
  );
};

export default Home;
