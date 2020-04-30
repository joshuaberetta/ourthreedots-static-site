import React from "react";
// import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { HashLink as Link } from "react-router-hash-link";

import { NavLinkProps } from "../models/NavLink.model";
import { LINKS } from "../shared/Links";
import { COLOURS } from "../shared/Colours";

const useStyles = makeStyles(() => ({
  bar: {
    minHeight: "4rem",
    width: "100%",
    paddingRight: "4rem",
    paddingLeft: "4rem",
  },
  button: {
    position: "relative",
    height: "4rem",
    textTransform: "none",
    width: "100px",
    fontWeight: "bold",
  },
  logo: {
    position: "relative",
    height: "4rem",
    textTransform: "none",
    "&:hover": {
      background: "white",
    },
  },
  link: {
    color: "black",
  },
}));

const NavLink: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();

  return (
    <Link smooth to={props.href} style={{ textDecoration: "none" }}>
      <Button disableRipple className={classes.button}>
        <Typography
          variant="subtitle1"
          component="span"
          className={classes.link}
        >
          {props.title}
        </Typography>
      </Button>
    </Link>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="inherit">
        <Grid
          container
          direction="row"
          className={classes.bar}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link smooth to="/#home" style={{ textDecoration: "none" }}>
              <Button disableRipple className={classes.logo}>
                <Typography variant="h4">
                  <span style={{ color: COLOURS.black }}>our</span>
                  <span style={{ color: COLOURS.blue }}>three</span>
                  <span style={{ color: COLOURS.red }}>dots</span>
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={1}>
              {LINKS.map((link) => (
                <Grid item key={link.title}>
                  <NavLink title={link.title} href={link.href} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
