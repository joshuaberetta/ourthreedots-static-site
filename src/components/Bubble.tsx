import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { BubbleProps } from "../models/Bubble.model";

const Bubble: React.FC<BubbleProps> = (props) => {
  return (
    <Grid
      container
      style={{ width: 300 }}
      justify={props.side === "right" ? "flex-end" : "flex-start"}
    >
      <Grid
        item
        style={{
          background: props.background || "none",
          borderRadius: 10,
          borderBottomRightRadius: props.side === "right" ? 0 : 10,
          borderBottomLeftRadius: props.side === "right" ? 10 : 0,
          padding: 15,
          border: `2px solid ${props.borderColor || "none"}`,
          maxWidth: 250,
        }}
      >
        <Typography variant="body1" style={{ color: props.color }}>
          {props.msg}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Bubble;
