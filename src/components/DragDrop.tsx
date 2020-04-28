import React, { useCallback } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useDropzone } from "react-dropzone";

interface DragAndDropProps {
  color: string;
  handleSelectedFile: (acceptedFile: FileList) => void;
  acceptedFile: FileList;
}

const DragAndDrop: React.FC<DragAndDropProps> = (props) => {
  const onDropAccepted = useCallback((acceptedFiles) => {
    props.handleSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    accept: "image/jpg, image/jpeg, image/png, text/plain",
    multiple: false,
  });

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item {...getRootProps({ className: "dropzone" })}>
        <Button disableRipple style={{ borderRadius: 10 }}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            style={{
              height: 300,
              width: 300,
              background: "none",
              border: `dashed 2px ${props.color}`,
              borderRadius: 10,
            }}
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
                <Typography variant="h6" style={{ color: props.color }}>
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
