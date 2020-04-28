import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { CategoryContext } from "../shared/context/form-context";
import { PriceCard } from "../models/PriceCard.model";
import { BOX } from "../shared/Themes";

const useStyles = makeStyles(() => ({
  button1: {
    borderWidth: BOX.borderWidth,
    width: 150,
    "&:hover, &$focusVisible": {
      // background: "none",
    },
  },
}));

const Card: React.FC<PriceCard> = (props) => {
  const context = useContext(CategoryContext);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    context.updateCategry(props.title);
    history.push(props.href);
    window.scrollTo(0, 0);
  };

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
          className={classes.button1}
          onClick={handleClick}
          disableRipple
          variant="outlined"
          size="large"
          style={{
            borderColor: props.color,
            // borderWidth: BOX.borderWidth,
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
