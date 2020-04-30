import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { COLOURS } from "../shared/Colours";

import FooterLogo from "../components/svg/FooterLogo";

const useStyles = makeStyles({
  root: {
    minHeight: "10rem",
    background: COLOURS.white,
  },
});

const Product: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <FooterLogo />
      </Grid>
    </Grid>
  );
};

export default Product;
