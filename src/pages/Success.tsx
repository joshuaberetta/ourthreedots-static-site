import React, { useEffect, useContext } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import { LocationContext } from "../shared/context/form-context";

import Breadcrumbs from "../components/Breadcrumbs";

import { SUCCESS } from "../shared/Content";
import { SUCCESS_CRUMBS } from "../shared/Crumbs";

const useStyles = makeStyles({
  root: {
    padding: 20,
    paddingTop: 70,
    minHeight: "40rem",
  },
  crumbs: {
    position: "absolute",
    top: 10,
  },
});

const Success: React.FC = () => {
  const locationContext = useContext(LocationContext);
  const classes = useStyles();

  useEffect(() => {
    locationContext.updateLocation("/success");
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
      spacing={5}
    >
      <Grid item className={classes.crumbs}>
        <Breadcrumbs crumbs={SUCCESS_CRUMBS} />
      </Grid>
      <Grid item>
        <Typography variant="h1">{SUCCESS.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{SUCCESS.subtitle}</Typography>
      </Grid>
    </Grid>
  );
};

export default Success;
