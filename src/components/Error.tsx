import React from "react";
import { Grid, Backdrop, Typography, Button } from "@material-ui/core";
import { COLOURS } from "../shared/Colours";

interface ErrorModalProps {
  isError: boolean;
  color: string;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <Backdrop
      style={{ zIndex: 2, background: "rgba(255,255,255,0.7)" }}
      open={props.isError}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
        style={{
          width: 400,
          height: 300,
          background: COLOURS.white,
          border: `2px solid ${props.color}`,
          borderRadius: 10,
        }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: props.color }}>
            Something went wrong{" "}
            <span role="img" aria-label="emoji">
              😢
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            href="/"
            variant="outlined"
            style={{ border: `2px solid ${props.color}`, width: 100 }}
            disableRipple
          >
            <Typography variant="h4">
              <span role="img" aria-label="emoji">
                🏠
              </span>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Backdrop>
  );
};

export default ErrorModal;
