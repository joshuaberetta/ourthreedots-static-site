import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { PriceCard } from "../models/PriceCard.model";
import { BOX } from "../shared/Themes";

const Card: React.FC<PriceCard> = (props) => {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      style={{
        height: "400px",
        width: "320px",
        borderRadius: 10,
        background: props.background,
        padding: 30,
      }}
    >
      <Grid item>
        <Typography variant="h5" style={{ color: props.color }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            background: "white",
            textAlign: "center",
            padding: 15,
            minHeight: "150px",
          }}
        >
          <Grid item>
            <Typography>{props.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="large"
          style={{
            borderColor: props.color,
            borderWidth: BOX.borderWidth,
            width: 150,
          }}
        >
          <Typography variant="body1" style={{ color: props.color }}>
            {props.price}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Card;
