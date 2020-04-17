import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { green } from "@material-ui/core/colors";

const BasicDD = (props) => {
  const [acceptedFile, setAcceptedFile] = useState();

  const onDropAccepted = useCallback((acceptedFiles) => {
    setAcceptedFile(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    accept: "image/jpg, image/jpeg, image/png",
    multiple: false,
  });

  return (
    <Grid
      container
      direction="column"
      style={{ minHeight: "20rem" }}
      alignItems="center"
      justify="center"
    >
      <Grid item {...getRootProps({ className: "dropzone" })}>
        <Paper elevation={isDragActive ? 1 : 10}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            style={{ height: 100, width: 300 }}
          >
            <Grid item>
              <input {...getInputProps()} />
              {acceptedFile ? (
                <CheckCircleOutlineIcon
                  fontSize="large"
                  style={{ color: green[500] }}
                />
              ) : (
                <CreateNewFolderIcon fontSize="large" />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BasicDD;
