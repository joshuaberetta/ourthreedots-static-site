import React from "react";
import Grid from "@material-ui/core/Grid";

import Bubble from "./Bubble";

import { COLOURS } from "../shared/Colours";

const CONTENT = [
  {
    side: "right",
    msg: "So what does this thing actually do? ",
    background: COLOURS.blue,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg:
      "We take your chat messages, run it through some fancy analysis and pump out a beautiful poo, print or digital",
    color: COLOURS.red,
    borderColor: COLOURS.red,
  },
  {
    side: "right",
    msg: "Wow. That’s awesome!",
    background: COLOURS.blue,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: "Yeehaa! 🕺",
    color: COLOURS.red,
    borderColor: COLOURS.red,
  },
];

const WhatDo: React.FC = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {CONTENT.map((message) => (
        <Grid item key={message.msg}>
          <Bubble {...message} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WhatDo;
