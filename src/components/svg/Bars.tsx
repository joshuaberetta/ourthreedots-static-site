import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { COLOURS } from "../../shared/Colours";

interface BarProps {
  emoji: string;
  color: string;
  height: number;
}

const BARS: BarProps[] = [
  {
    emoji: "🤡",
    color: COLOURS.red,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: "🎲",
    color: COLOURS.blue,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: "🕺",
    color: COLOURS.green,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: "🔥",
    color: COLOURS.yellow,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: "😀",
    color: COLOURS.red,
    height: 50 + ~~(Math.random() * 150),
  },
  {
    emoji: "🙌",
    color: COLOURS.blue,
    height: 50 + ~~(Math.random() * 150),
  },
];

const Bar: React.FC<BarProps> = (props) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
        item
        style={{
          background: props.color,
          height: props.height,
          width: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
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
