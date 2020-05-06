import React, { useCallback } from "react";
import {
  Grid,
  Button,
  Typography,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import { useDropzone } from "react-dropzone";

import { BASIC_FORM } from "../shared/Content";

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
    accept: "text/plain",
    multiple: false,
  });

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item {...getRootProps({ className: "dropzone" })}>
        <Tooltip title={BASIC_FORM.tooltips.dragAndDrop}>
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
                    {BASIC_FORM.dragAndDrop.success}
                  </Typography>
                ) : (
                  <Typography variant="h6" className={classes.text}>
                    {BASIC_FORM.dragAndDrop.default}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default DragAndDrop;
