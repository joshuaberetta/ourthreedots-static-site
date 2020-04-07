import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";

import { NavLinkProps } from "../models/NavLink.model";
import { LINKS } from "../shared/Links";
import { COLOURS } from "../shared/Colours";

const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Link>
      <Typography variant="body1" style={{ color: "black" }}>
        {props.title}
      </Typography>
    </Link>
  );
};

const NavBar: React.FC = () => {
  return (
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
          <Typography variant="h4">
            <span style={{ color: COLOURS.black }}>our</span>
            <span style={{ color: COLOURS.blue }}>three</span>
            <span style={{ color: COLOURS.red }}>dots</span>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={5}>
            {LINKS.map((link) => (
              <Grid item>
                <NavLink title={link.title} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
