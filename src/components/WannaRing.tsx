import React from "react";
import Grid from "@material-ui/core/Grid";

import Bubble from "./Bubble";
import { BubbleProps } from "../models/Bubble.model";

import { COLOURS } from "../shared/Colours";

const CONTENT: BubbleProps[] = [
  {
    side: "right",
    msg: "Heyy gurl.... wana ring? 💍",
    background: COLOURS.green,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: "Whaaaaaat!!?????",
    color: COLOURS.black,
    borderColor: COLOURS.black,
  },
  {
    side: "right",
    msg: "Jokes. But fo realz tho?",
    background: COLOURS.green,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: "🔪🍆 🚑 !",
    color: COLOURS.black,
    borderColor: COLOURS.black,
  },
];

const WannaRing: React.FC = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {CONTENT.map((message) => (
        <Grid item>
          <Bubble {...message} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WannaRing;
