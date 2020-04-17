import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Typography, Button, TextField, Paper } from "@material-ui/core";
import { COLOURS } from "../shared/Colours";
import { LocationContext } from "../shared/context/form-context";

import PaymentForm from "./payment/index";

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
      <Grid item>
        <Crumb title="✍️" href="/insightful" disabled={false} />
      </Grid>
      <Grid item>
        <Crumb title="💰" href="/" disabled={false} />
      </Grid>
      <Grid item>
        <Crumb title="🎉" href="/" disabled={true} />
      </Grid>
    </Grid>
  );
};

interface CustomButtonProps {
  onClick: (event: any) => void;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      variant="outlined"
      style={{ border: `2px solid ${COLOURS.blue}`, width: 300 }}
      disableRipple
      onClick={props.onClick}
    >
      <Typography variant="h3">
        <span role="img" aria-label="emoji">
          🎉 🎉 🎉
        </span>
      </Typography>
    </Button>
  );
};

const Payment: React.FC = () => {
  const locationContext = useContext(LocationContext);
  // const history = useHistory();

  // const handleClick = () => {
  //   locationContext.updateLocation("/payment");
  //   history.push("/success");
  // };

  useEffect(() => {
    locationContext.updateLocation("/payment");
  }, []);

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
        <PaymentForm />
      </Grid>
    </Grid>
  );
};

export default Payment;
