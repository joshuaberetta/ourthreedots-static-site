import React from "react";
import {
  Grid,
  Backdrop,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

import { ERROR_MODAL } from "../shared/Content";
import { COLOURS } from "../shared/Colours";

const useStyles = makeStyles({
  backdrop: {
    zIndex: 2,
    background: "rgba(255,255,255,0.7)",
  },
  container: {
    width: 400,
    height: 300,
    background: COLOURS.white,
    border: (props: ErrorModalProps) => `2px solid ${props.color}`,
    borderRadius: 10,
  },
  text: {
    color: (props: ErrorModalProps) => props.color,
  },
  button: {
    border: (props: ErrorModalProps) => `2px solid ${props.color}`,
    width: 100,
  },
});

interface ErrorModalProps {
  isError: boolean;
  color: string;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Backdrop className={classes.backdrop} open={props.isError}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h5" className={classes.text}>
            {ERROR_MODAL.title}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            href="/"
            variant="outlined"
            className={classes.button}
            disableRipple
          >
            <Typography variant="h4">{ERROR_MODAL.button}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Backdrop>
  );
};

export default ErrorModal;
