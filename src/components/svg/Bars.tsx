import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import { INSIGHTS } from "../../shared/Content";
import { COLOURS } from "../../shared/Colours";

const useStyles = makeStyles({
  root: {
    background: (props: BarProps) => props.color,
    height: (props: BarProps) => props.height,
    width: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

interface BarProps {
  emoji: string;
  color: string;
  height: number;
}

const BARS: BarProps[] = [
  {
    emoji: INSIGHTS.emoji[0],
    color: COLOURS.red,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: INSIGHTS.emoji[1],
    color: COLOURS.blue,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: INSIGHTS.emoji[2],
    color: COLOURS.green,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: INSIGHTS.emoji[3],
    color: COLOURS.yellow,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: INSIGHTS.emoji[4],
    color: COLOURS.red,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: INSIGHTS.emoji[5],
    color: COLOURS.blue,
    height: 50 + ~~(Math.random() * 150),
  },
];

const Bar: React.FC<BarProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item className={classes.root} />
      <Grid item>
        <Typography variant="h6">
          <span role="img" aria-label="emoji">
            {props.emoji}
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

const BarPlot = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-end"
      spacing={2}
    >
      {BARS.map((bar) => (
        <Grid item key={`${bar.height}-${bar.emoji}`}>
          <Bar {...bar} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BarPlot;
