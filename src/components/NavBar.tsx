import React from "react";
import { useHistory } from "react-router-dom";
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
  button: {
    position: "relative",
    height: "4rem",
    textTransform: "none",
    width: "100px",
    fontWeight: "bold",
    "&:hover, &$focusVisible": {
      "& $imageBackdrop": {
        opacity: 0.15,
      },
    },
  },
  logo: {
    position: "relative",
    height: "4rem",
    textTransform: "none",
    // background: "white",
    // width: "500px",
    "&:hover, &$focusVisible": {
      background: "white",
    },
  },
}));

const NavLink: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();
  // const history = useHistory();

  // const handleRedirect = () => {
  //   history.push("/");
  //   window.scrollTo(0, 0);
  // };
  // onClick={handleRedirect}

  return (
    <Link smooth to={props.href} style={{ textDecoration: "none" }}>
      <Button disableRipple className={classes.button}>
        <Typography
          variant="subtitle1"
          component="span"
          style={{ color: "black" }}
        >
          {props.title}
        </Typography>
      </Button>
    </Link>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyles();
  // const history = useHistory();

  // const handleRedirect = () => {
  //   history.push("/");
  //   window.scrollTo(0, 0);
  // };

  return (
    <React.Fragment>
      <AppBar color="inherit">
        <Grid
          container
          direction="row"
          style={{
            minHeight: "4rem",
            width: "100%",
            //   boxShadow: "0px 3px 20px 5px #ccc",
            paddingRight: "4rem",
            paddingLeft: "4rem",
          }}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link smooth to="/#home" style={{ textDecoration: "none" }}>
              <Button
                disableRipple
                className={classes.logo}
                // onClick={handleRedirect}
              >
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
      <div style={{ height: "4rem" }} />
    </React.Fragment>
  );
};

export default NavBar;
