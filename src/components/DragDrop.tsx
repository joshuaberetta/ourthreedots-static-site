import React, { useCallback } from "react";
import { Grid, Button, Typography, makeStyles } from "@material-ui/core";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles({
  container: {
    height: 300,
    width: 300,
    background: "none",
    border: (props: DragAndDropProps) => `dashed 2px ${props.color}`,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
  },
  text: {
    color: (props: DragAndDropProps) => props.color,
  },
});

interface DragAndDropProps {
  color: string;
  handleSelectedFile: (acceptedFile: FileList) => void;
  acceptedFile: FileList;
}

const DragAndDrop: React.FC<DragAndDropProps> = (props) => {
  const classes = useStyles(props);

  const onDropAccepted = useCallback(
    (acceptedFiles) => {
      props.handleSelectedFile(acceptedFiles[0]);
    },
    [props],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    accept: "image/jpg, image/jpeg, image/png, text/plain",
    multiple: false,
  });

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item {...getRootProps({ className: "dropzone" })}>
        <Button disableRipple className={classes.button}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            className={classes.container}
          >
            <Grid item>
              <input {...getInputProps()} />
              {props.acceptedFile ? (
                <Typography variant="h3">
                  <span role="img" aria-label="emoji">
                    👍
                  </span>
                </Typography>
              ) : (
                <Typography variant="h6" className={classes.text}>
                  DROP IT IN!
                </Typography>
              )}
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DragAndDrop;
