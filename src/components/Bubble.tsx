import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import { BubbleProps } from "../models/Bubble.model";

const useStyles = makeStyles({
  container: {
    width: 300,
  },
  item: {
    background: (props: BubbleProps) => props.background || "none",
    borderRadius: 10,
    borderBottomRightRadius: (props: BubbleProps) =>
      props.side === "right" ? 0 : 10,
    borderBottomLeftRadius: (props: BubbleProps) =>
      props.side === "right" ? 10 : 0,
    padding: 15,
    border: (props: BubbleProps) => `2px solid ${props.borderColor || "none"}`,
    maxWidth: 250,
  },
});

const Bubble: React.FC<BubbleProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.container}
      justify={props.side === "right" ? "flex-end" : "flex-start"}
    >
      <Grid item className={classes.item}>
        <Typography variant="body1" style={{ color: props.color }}>
          {props.msg}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Bubble;
