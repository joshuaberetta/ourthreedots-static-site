import React, { useState, useCallback } from "react";
import {
  Grid,
  Typography,
  AppBar,
  Button,
  makeStyles,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { HashLink as Link } from "react-router-hash-link";
import Drawer from "./Drawer";

import { NavLinkProps } from "../models/NavLink.model";
import { LINKS } from "../shared/Links";
import { COLOURS } from "../shared/Colours";

const useStyles = makeStyles((theme) => ({
  bar: {
    minHeight: "4rem",
    width: "100%",
    paddingRight: "4rem",
    paddingLeft: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
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
  linkContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setOpen((prev: boolean) => !prev);
  }, []);

  return (
    <React.Fragment>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
      <AppBar color="inherit" position="fixed">
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
          <Grid item className={classes.linkContainer}>
            <Grid container direction="row" spacing={1}>
              {LINKS.map((link) => (
                <Grid item key={link.title}>
                  <NavLink title={link.title} href={link.href} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.drawer} onClick={toggleDrawer}>
            <Button disableRipple className={classes.button}>
              {/* <Typography variant="h4">🗄</Typography> */}
              <MoreHorizIcon fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
