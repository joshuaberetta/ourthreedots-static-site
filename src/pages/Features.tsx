import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

import Page from "./Page";
import { COLOURS } from "../shared/Colours";
import Look from "../components/svg/Look";
import Dates from "../components/svg/Dates";

const Left = () => (
  <Grid container direction="column" alignItems="center">
    <Grid item>
      <Typography>Make the look your own</Typography>
    </Grid>
    <Grid item>
      <Look />
    </Grid>
  </Grid>
);

const Right = () => (
  <Grid container direction="column" alignItems="center">
    <Grid item>
      <Typography>Pick your dates</Typography>
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
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography>{props.name}</Typography>
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
  <Grid container direction="column" alignItems="center">
    <Grid item>
      <Typography>Choose your avatars</Typography>
    </Grid>
    {AVATARS.map((avatar) => (
      <Grid item>
        <AvatarJJ {...avatar} />
      </Grid>
    ))}
  </Grid>
);

const Features: React.FC = () => {
  return (
    <Page background={COLOURS.red} spacing={3}>
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={10}
          alignItems="center"
          justify="center"
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
  );
};

export default Features;
