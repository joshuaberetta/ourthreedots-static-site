import { COLOURS } from "./Colours";

export const INSIGHTFUL_STYLES = {
  root: {
    "& label.Mui-focused": {
      color: COLOURS.yellow,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLOURS.yellow,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: COLOURS.blue,
      },
      "&:hover fieldset": {
        borderColor: COLOURS.yellow,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLOURS.yellow,
      },
    },
  },
};

export const DIGITAL_STYLES = {
  root: {
    "& label.Mui-focused": {
      color: COLOURS.yellow,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLOURS.yellow,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: COLOURS.red,
      },
      "&:hover fieldset": {
        borderColor: COLOURS.yellow,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLOURS.yellow,
      },
    },
  },
};
