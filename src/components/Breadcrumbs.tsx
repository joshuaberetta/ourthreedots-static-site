import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";

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

interface BreadcrumbsProps {
  crumbs: CrumbProps[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={10}
    >
      {props.crumbs.map((crumb) => (
        <Grid item key={crumb.title}>
          <Crumb {...crumb} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Breadcrumbs;
