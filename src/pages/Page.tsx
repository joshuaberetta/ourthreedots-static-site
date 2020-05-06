import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  anchor: {
    paddingTop: "2rem",
  },
  page: {
    minHeight: "50rem",
    background: (props: PageProps) => props.background,
  },
});

interface PageProps {
  children?: any;
  background?: string;
  id: string;
}

const Page: React.FC<PageProps> = (props) => {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <div className={classes.anchor} id={props.id} />
      <Grid
        container
        className={classes.page}
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        {props.children}
      </Grid>
    </React.Fragment>
  );
};

export default Page;
