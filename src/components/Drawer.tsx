import React from "react";
import {
  Grid,
  Typography,
  Button,
  Drawer,
  makeStyles,
} from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";

import { LINKS } from "../shared/Links";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  button: {
    position: "relative",
    height: "4rem",
    textTransform: "none",
    width: 250,
    fontWeight: "bold",
  },
});

interface MyDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}

const MyDrawer: React.FC<MyDrawerProps> = (props) => {
  const classes = useStyles();

  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.toggleDrawer}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.list}
        role="presentation"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}
      >
        {LINKS.map((link) => (
          <Grid item key={link.title}>
            <Link smooth to={link.href} style={{ textDecoration: "none" }}>
              <Button disableRipple className={classes.button}>
                <Typography>{link.title}</Typography>
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Drawer>
  );
};

export default MyDrawer;
