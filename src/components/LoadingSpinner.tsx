import React from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  backdrop: {
    zIndex: 2,
    background: "rgba(255,255,255,0.7)",
  },
  spinner: {
    color: (props: LoadingSpinnerProps) => props.color,
  },
});

interface LoadingSpinnerProps {
  loading: boolean;
  color: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  const classes = useStyles(props);
  return (
    <Backdrop className={classes.backdrop} open={props.loading}>
      <CircularProgress className={classes.spinner} />
    </Backdrop>
  );
};

export default LoadingSpinner;
