import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { COLOURS } from "../shared/Colours";

const Book: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={5}
      style={{ height: "40rem" }}
    >
      <Grid item>
        <Typography variant="h4">
          Oh dear{" "}
          <span role="img" aria-label="emoji">
            😢
          </span>
        </Typography>
      </Grid>
      <Grid item style={{ maxWidth: "30rem" }}>
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
          style={{ width: "30rem" }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          style={{ border: `2px solid ${COLOURS.yellow}`, width: 300 }}
          disableRipple
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
