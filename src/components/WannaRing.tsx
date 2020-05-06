import React from "react";
import Grid from "@material-ui/core/Grid";

import Bubble from "./Bubble";
import { BubbleProps } from "../models/Bubble.model";

import { HOME } from "../shared/Content";
import { COLOURS } from "../shared/Colours";

const CONTENT: BubbleProps[] = [
  {
    side: "right",
    msg: HOME.messages.messageOne,
    background: COLOURS.green,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: HOME.messages.messageTwo,
    color: COLOURS.black,
    borderColor: COLOURS.black,
  },
  {
    side: "right",
    msg: HOME.messages.messageThree,
    background: COLOURS.green,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: HOME.messages.messageFour,
    color: COLOURS.black,
    borderColor: COLOURS.black,
  },
];

const WannaRing: React.FC = () => {
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

export default WannaRing;
