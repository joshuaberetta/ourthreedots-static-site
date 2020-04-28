import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";

import { INSIGHTFUL_CRUMBS } from "../shared/Crumbs";

interface CrumbProps {
  href: string;
  title: string;
  disabled: boolean;
}

const Crumb: React.FC<CrumbProps> = (props) => {
  const history = useHistory();
  return (
    <Button
      onClick={() => {
        history.push(props.href);
      }}
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
      {INSIGHTFUL_CRUMBS.map((crumb) => (
        <Grid item key={crumb.title}>
          <Crumb {...crumb} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Breadcrumbs;
