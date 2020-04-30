import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { COLOURS } from "../shared/Colours";

import Breadcrumbs from "../components/Breadcrumbs";

import { SUCCESS_CRUMBS } from "../shared/Crumbs";

const useStyles = makeStyles({
  root: {
    marginTop: 70,
    height: "40rem",
  },
  body: {
    maxWidth: "30rem",
  },
  textField: {
    width: "30rem",
  },
  button: {
    border: `2px solid ${COLOURS.yellow}`,
    width: 300,
  },
  crumbs: {
    position: "absolute",
    top: 10,
  },
});

const Book: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={5}
      className={classes.root}
    >
      <Grid item className={classes.crumbs}>
        <Breadcrumbs crumbs={SUCCESS_CRUMBS} />
      </Grid>
      <Grid item>
        <Typography variant="h4">
          Oh dear{" "}
          <span role="img" aria-label="emoji">
            😢
          </span>
        </Typography>
      </Grid>
      <Grid item className={classes.body}>
        <Typography>
          This feature is not available yet and will be based on popular demand.
          If this is something that you would like, please leave your email
          below and you will be notified when you can order.
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          className={classes.textField}
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          className={classes.button}
          disableRipple
          onClick={handleClick}
        >
          <Typography variant="h3">
            <span role="img" aria-label="emoji">
              📨 📨 📨
            </span>
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Book;
