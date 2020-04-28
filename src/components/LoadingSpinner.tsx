import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

interface LoadingSpinnerProps {
  loading: boolean;
  color: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <Backdrop
      style={{ zIndex: 2, background: "rgba(255,255,255,0.7)" }}
      open={props.loading}
    >
      <CircularProgress style={{ color: props.color }} />
    </Backdrop>
  );
};

export default LoadingSpinner;
