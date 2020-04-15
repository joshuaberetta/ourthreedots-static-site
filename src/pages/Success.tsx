import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import { LocationContext } from "../shared/context/form-context";

interface CrumbProps {
  href: string;
  title: string;
  disabled: boolean;
}

const Crumb: React.FC<CrumbProps> = (props) => {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push(props.href)}
      disabled={props.disabled}
      disableRipple
    >
      <Typography variant="h6">{props.title}</Typography>
    </Button>
  );
};

const Breadcrumbs: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={10}
    >
      <Grid item>
        <Crumb title="🏠" href="/" disabled={false} />
      </Grid>
    </Grid>
  );
};

const Payment: React.FC = () => {
  const locationContext = useContext(LocationContext);

  useEffect(() => {
    locationContext.updateLocation("/success");
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: 70, minHeight: "40rem" }}
      spacing={5}
    >
      <Grid item style={{ position: "absolute", top: 10 }}>
        <Breadcrumbs />
      </Grid>
      <Grid item>
        <Typography variant="h1">
          <span role="img" aria-label="e">
            🎉
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Payment;
