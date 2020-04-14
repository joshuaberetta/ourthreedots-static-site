import React from "react";
import { useHistory } from "react-router-dom";

import { Grid, Typography, Button, TextField, Paper } from "@material-ui/core";
import { COLOURS } from "../shared/Colours";

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
  const history = useHistory();

  const handleClick = () => {
    history.push("/success");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "40rem" }}
      spacing={5}
    >
      <Grid item>
        <Paper elevation={5} style={{ borderRadius: 10 }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "20rem", minWidth: "40rem" }}
            spacing={5}
          >
            <Grid item>
              <Typography variant="h4">
                Payment Details{" "}
                <span role="img" aria-label="emoji">
                  🕺
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="4242 4242 4242 4242"
                variant="outlined"
                style={{ width: "30rem" }}
              />
            </Grid>
            <Grid item>
              <CustomButton onClick={handleClick} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Payment;
