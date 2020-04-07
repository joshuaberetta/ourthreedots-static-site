import React from "react";
import Grid from "@material-ui/core/Grid";

interface PageProps {
  children: any;
  background: string;
  spacing: number;
}

const Page: React.FC<PageProps> = (props) => (
  <Grid
    container
    style={{ minHeight: "40rem", background: props.background || "white" }}
    direction="column"
    justify="space-around"
    alignItems="center"
    spacing={props.spacing}
  >
    {props.children}
  </Grid>
);

export default Page;
