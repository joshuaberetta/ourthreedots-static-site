import React, { useCallback } from "react";
import {
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { useDropzone } from "react-dropzone";

import { BASIC_FORM } from "../shared/Content";

const useStyles = makeStyles({
  avatar: {
    background: (props: DragAndDropAvatarProps) => props.color,
    width: 50,
    height: 50,
  },
  icon: {
    padding: 5,
  },
});

interface DragAndDropAvatarProps {
  avatar: string;
  color: string;
  handleSelectedFile: (acceptedFile: FileList) => void;
  acceptedFile: FileList;
  previewUrl: string;
}

const DragAndDropAvatar: React.FC<DragAndDropAvatarProps> = (props) => {
  const classes = useStyles(props);

  const onDropAccepted = useCallback(
    (acceptedFiles) => {
      props.handleSelectedFile(acceptedFiles[0]);
    },
    [props],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    accept: "image/jpg, image/jpeg, image/png",
    multiple: false,
  });

  return (
    <Grid item {...getRootProps({ className: "dropzone" })}>
      <Tooltip title={BASIC_FORM.tooltips.avatar}>
        <IconButton disableRipple className={classes.icon}>
          <input {...getInputProps()} />
          <Avatar src={props.previewUrl} className={classes.avatar}>
            <Typography variant="h4">{props.avatar}</Typography>
          </Avatar>
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default DragAndDropAvatar;
