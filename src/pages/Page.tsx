import React from "react";
import Grid from "@material-ui/core/Grid";

interface PageProps {
  children?: any;
  background?: string;
}

const Page: React.FC<PageProps> = (props) => (
  <Grid
    container
    style={{
      minHeight: "45rem",
      background: props.background || "white",
      width: "100%",
    }}
    direction="column"
    justify="space-around"
    alignItems="center"
  >
    {props.children}
  </Grid>
);

export default Page;
