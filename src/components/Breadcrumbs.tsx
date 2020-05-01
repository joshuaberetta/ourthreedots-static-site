import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  crumbs: {
    width: "30rem",
    [theme.breakpoints.down("xs")]: {
      width: "20rem",
    },
  },
}));

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
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify={props.crumbs.length === 1 ? "center" : "space-between"}
      // spacing={5}
      // style={{ minWidth: "20rem" }}
      className={classes.crumbs}
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
