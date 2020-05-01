import React from "react";
import { Grid, Typography, Avatar, makeStyles } from "@material-ui/core";

import Page from "./Page";
import { COLOURS } from "../shared/Colours";
import Look from "../components/svg/Look";
import Dates from "../components/svg/Dates";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const Left = () => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justify="flex-start"
    spacing={5}
  >
    <Grid item>
      <Typography variant="h6">Make the look your own</Typography>
    </Grid>
    <Grid item>
      <Look />
    </Grid>
  </Grid>
);

const Right = () => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justify="flex-start"
    spacing={5}
  >
    <Grid item>
      <Typography variant="h6">Pick your dates</Typography>
    </Grid>
    <Grid item>
      <Dates />
    </Grid>
  </Grid>
);

const AVATARS = [
  {
    name: "John",
    emoji: "👻",
    background: COLOURS.yellow,
  },
  {
    name: "Jane",
    emoji: "👑",
    background: COLOURS.blue,
  },
];

const AvatarJJ = (props) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography style={{ color: COLOURS.white }}>{props.name}</Typography>
      </Grid>
      <Grid item>
        <Avatar
          style={{ background: props.background, height: 100, width: 100 }}
        >
          <Typography variant="h3">
            <span role="img" aria-label="emoji">
              {props.emoji}
            </span>
          </Typography>
        </Avatar>
      </Grid>
    </Grid>
  );
};

const Middle = () => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justify="flex-start"
    spacing={5}
  >
    <Grid item>
      <Typography variant="h6">Choose your avatars</Typography>
    </Grid>
    <Grid item>
      <Grid container direction="row" spacing={2}>
        {AVATARS.map((avatar) => (
          <Grid item key={avatar.name}>
            <AvatarJJ {...avatar} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

const Features: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <div id="features" /> */}
      <Page background={COLOURS.red} id="features">
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={10}
            alignItems="flex-start"
            justify="center"
            className={classes.root}
          >
            <Grid item>
              <Left />
            </Grid>
            <Grid item>
              <Middle />
            </Grid>
            <Grid item>
              <Right />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </React.Fragment>
  );
};

export default Features;
