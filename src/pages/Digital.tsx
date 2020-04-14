import React, { useState } from "react";
import "date-fns";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { SwatchesPicker } from "react-color";

import Bubble from "../components/Bubble";

import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";

const CAT = CATEGORIES.filter((cat) => cat.title === "digital")[0];

const CONTENT = [
  {
    side: "left",
    msg: "So what does this thing actually do? ",
    background: COLOURS.blue,
    color: COLOURS.white,
  },
  {
    side: "right",
    msg: "We take your chat messages",
    color: COLOURS.red,
    borderColor: COLOURS.red,
  },
  {
    side: "left",
    msg: "Wow. That’s awesome!",
    background: COLOURS.blue,
    color: COLOURS.white,
  },
];

const Styling: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-end"
      justify="center"
      spacing={3}
    >
      <Grid item>
        <PersonalStyle name={"adsf"} />
      </Grid>
      <Grid item>
        <PersonalStyle name={"adsfdngfbv"} />
      </Grid>
    </Grid>
  );
};

interface PersonalStyleProps {
  name: string;
}

const PersonalStyle: React.FC<PersonalStyleProps> = (props) => {
  const [displayBackgroundPicker, setDisplayBackgroundPicker] = useState<
    boolean
  >(false);
  const [displayTextPicker, setDisplayTextPicker] = useState<boolean>(false);
  const [background, setBackground] = useState<any>("grey");
  const [text, setText] = useState<any>("grey");
  const [filled, setFilled] = useState<boolean>(true);

  const handlePickedBackground = (color: any) => {
    setBackground(color);
    setDisplayBackgroundPicker((prev: boolean) => !prev);
    // console.log(color);
  };

  const handlePickedText = (color: any) => {
    setText(color);
    setDisplayTextPicker((prev: boolean) => !prev);
    // console.log(color);
  };

  const handleBackgroundDisplay = () => {
    setDisplayBackgroundPicker((prev: boolean) => !prev);
  };

  const handleTextDisplay = () => {
    setDisplayTextPicker((prev: boolean) => !prev);
  };

  const handleFilled = () => {
    setFilled((prev: boolean) => !prev);
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography>{props.name}</Typography>
      </Grid>
      <Grid item>
        <IconButton
          disableRipple
          onClick={handleBackgroundDisplay}
          style={{
            height: 55,
            width: 55,
            background: background.hex || "grey",
            // border: `2px solid ${background.hex || "grey"}`,
          }}
        />
      </Grid>
      <Grid item>
        <IconButton
          disableRipple
          onClick={handleTextDisplay}
          style={{
            height: 55,
            width: 55,
            background: text.hex || "grey",
            // border: `2px solid ${text.hex || "grey"}`,
          }}
        />
      </Grid>
      <Grid item>
        <IconButton
          disableRipple
          onClick={handleFilled}
          style={{
            height: 55,
            width: 55,
            background: filled ? background.hex || "grey" : "none",
            border: `2px solid ${background.hex || "grey"}`,
          }}
        >
          <Typography variant="h5" style={{ color: text.hex || "black" }}>
            T
          </Typography>
        </IconButton>
      </Grid>
      {displayBackgroundPicker ? (
        <Grid
          item
          style={{
            position: "absolute",
            zIndex: 2,
            top: "50%",
            left: "38%",
            right: "62%",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              background: "rgba(255,255,255,0.7)",
            }}
            onClick={handleBackgroundDisplay}
          />
          <SwatchesPicker
            color={background.rgb}
            onChange={handlePickedBackground}
            // triangle={"hide"}
          />
        </Grid>
      ) : null}
      {displayTextPicker ? (
        <Grid
          item
          style={{
            position: "absolute",
            zIndex: 2,
            top: "50%",
            left: "38%",
            right: "62%",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              background: "rgba(255,255,255,0.7)",
            }}
            onClick={handleTextDisplay}
          />
          <SwatchesPicker
            color={text.rgb}
            onChange={handlePickedText}
            // triangle={"hide"}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

const Messages: React.FC = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {CONTENT.map((message) => (
        <Grid item>
          <Bubble {...message} />
        </Grid>
      ))}
    </Grid>
  );
};

const StyleBlock: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={10}
    >
      <Grid item>
        <Styling />
      </Grid>
      <Grid item>
        <Messages />
      </Grid>
    </Grid>
  );
};

const Digital: React.FC = () => {
  const [nameTopStyles, setNameTopBubble] = useState({
    bubble: "",
    text: "",
    style: false,
  });
  const [nameBottomStyles, setNameBottomBubble] = useState({
    bubble: "",
    text: "",
    style: false,
  });

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={5}
      style={{ marginTop: 20 }}
    >
      <Grid item>
        <Typography variant="h4">Make the look your own</Typography>
      </Grid>
      <Grid item>
        <StyleBlock />
      </Grid>
    </Grid>
  );
};

export default Digital;
