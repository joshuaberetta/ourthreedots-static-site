import React from "react";
import Grid from "@material-ui/core/Grid";

import Bubble from "./Bubble";

import { PRODUCT } from "../shared/Content";
import { COLOURS } from "../shared/Colours";

const CONTENT = [
  {
    side: "right",
    msg: PRODUCT.messages.messageOne,
    background: COLOURS.blue,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: PRODUCT.messages.messageTwo,
    color: COLOURS.red,
    borderColor: COLOURS.red,
  },
  {
    side: "right",
    msg: PRODUCT.messages.messageThree,
    background: COLOURS.blue,
    color: COLOURS.white,
  },
  {
    side: "left",
    msg: PRODUCT.messages.messageFour,
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
