import React, { useCallback } from "react";
import {
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { useDropzone } from "react-dropzone";

// const useStyles = makeStyles({
//   container: {
//     height: 300,
//     width: 300,
//     background: "none",
//     border: (props: DragAndDropProps) => `dashed 2px ${props.color}`,
//     borderRadius: 10,
//   },
//   button: {
//     borderRadius: 10,
//   },
//   text: {
//     color: (props: DragAndDropProps) => props.color,
//   },
// });

interface DragAndDropAvatarProps {
  avatar: string;
  color: string;
  handleSelectedFile: (acceptedFile: FileList) => void;
  acceptedFile: FileList;
  previewUrl: string;
}

const DragAndDropAvatar: React.FC<DragAndDropAvatarProps> = (props) => {
  // const classes = useStyles(props);

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
      <Tooltip title="Add an image">
        <IconButton disableRipple style={{ padding: 5 }}>
          <input {...getInputProps()} />
          <Avatar
            src={props.previewUrl}
            style={{ background: props.color, width: 50, height: 50 }}
          >
            <Typography variant="h4">{props.avatar}</Typography>
          </Avatar>
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default DragAndDropAvatar;
