import React from "react";
import Grid from "@material-ui/core/Grid";

interface PageProps {
  children?: any;
  background?: string;
  id: string;
}

const Page: React.FC<PageProps> = (props) => (
  <React.Fragment>
    <div style={{ paddingTop: "2rem" }} id={props.id} />
    <Grid
      container
      style={{
        minHeight: "50rem",
        background: props.background || "white",
        // width: "100%",
        // margin: 0,
        // padding: 0,
      }}
      direction="column"
      justify="space-around"
      alignItems="center"
      // id={props.id}
    >
      {props.children}
    </Grid>
  </React.Fragment>
);

export default Page;
