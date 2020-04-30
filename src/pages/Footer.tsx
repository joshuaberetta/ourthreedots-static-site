import React from "react";
import Grid from "@material-ui/core/Grid";

import { COLOURS } from "../shared/Colours";

import FooterLogo from "../components/svg/FooterLogo";

const Product: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: "10rem", background: COLOURS.white }}
    >
      <Grid item>
        <FooterLogo />
      </Grid>
    </Grid>
  );
};

export default Product;
