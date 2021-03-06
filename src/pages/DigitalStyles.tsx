import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, IconButton, Paper, Button } from "@material-ui/core";
import { SwatchesPicker } from "react-color";

import Bubble from "../components/Bubble";
import Breadcrumbs from "../components/Breadcrumbs";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorModal from "../components/Error";

import { useHttpClient } from "../shared/hooks/http-hook";

import {
  StylesContext,
  IdContext,
  FirstFormContext,
} from "../shared/context/form-context";
import { DIGITAL_STYLES } from "../shared/Content";
import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";
import { DIGITAL_STYLE_CRUMBS } from "../shared/Crumbs";
import { HREFS } from "../shared/Hrefs";

const CAT = CATEGORIES.filter((cat) => cat.title === "digital")[0];

// TODO
const CONTENT = [
  {
    side: "left",
    msg: DIGITAL_STYLES.messages.messageOne,
    background: COLOURS.blue,
    color: COLOURS.white,
  },
  {
    side: "right",
    msg: DIGITAL_STYLES.messages.messageTwo,
    color: COLOURS.red,
    borderColor: COLOURS.red,
  },
  {
    side: "left",
    msg: DIGITAL_STYLES.messages.messageThree,
    background: COLOURS.blue,
    color: COLOURS.white,
  },
];

interface StylingProps {
  nameTop: string;
  backgroundTop: any;
  setBackgroundTop: (color: any) => void;
  textTop: any;
  setTextTop: (color: any) => void;
  filledTop: boolean;
  setFilledTop: (event: boolean) => void;
  //
  nameBottom: string;
  backgroundBottom: any;
  setBackgroundBottom: (color: any) => void;
  textBottom: any;
  setTextBottom: (color: any) => void;
  filledBottom: boolean;
  setFilledBottom: (event: boolean) => void;
}

const Styling: React.FC<StylingProps> = (props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-end"
      justify="center"
      spacing={3}
    >
      <Grid item>
        <PersonalStyle
          name={props.nameTop}
          background={props.backgroundTop}
          setBackground={props.setBackgroundTop}
          text={props.textTop}
          setText={props.setTextTop}
          filled={props.filledTop}
          setFilled={props.setFilledTop}
          defaultBackground={COLOURS.blue}
          defaultText={COLOURS.white}
        />
      </Grid>
      <Grid item>
        <PersonalStyle
          name={props.nameBottom}
          background={props.backgroundBottom}
          setBackground={props.setBackgroundBottom}
          text={props.textBottom}
          setText={props.setTextBottom}
          filled={props.filledBottom}
          setFilled={props.setFilledBottom}
          defaultBackground={COLOURS.red}
          defaultText={COLOURS.red}
        />
      </Grid>
    </Grid>
  );
};

interface PersonalStyleProps {
  name: string;
  background: any;
  setBackground: (color: any) => void;
  text: any;
  setText: (color: any) => void;
  filled: boolean;
  setFilled: (event: any) => void;
  defaultBackground: string;
  defaultText: string;
}

const PersonalStyle: React.FC<PersonalStyleProps> = (props) => {
  const [displayBackgroundPicker, setDisplayBackgroundPicker] = useState<
    boolean
  >(false);
  const [displayTextPicker, setDisplayTextPicker] = useState<boolean>(false);
  // const [background, setBackground] = useState<any>("grey");
  // const [text, setText] = useState<any>("grey");
  // const [filled, setFilled] = useState<boolean>(true);

  const ELEVATION = 2;
  const BUTTON_SIZE = 55;

  const handlePickedBackground = (color: any) => {
    props.setBackground(color);
    setDisplayBackgroundPicker((prev: boolean) => !prev);
    // console.log(color);
  };

  const handlePickedText = (color: any) => {
    props.setText(color);
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
    props.setFilled((prev: boolean) => !prev);
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
        <Paper elevation={ELEVATION} style={{ borderRadius: "100%" }}>
          <IconButton
            disableRipple
            onClick={handleBackgroundDisplay}
            style={{
              height: BUTTON_SIZE,
              width: BUTTON_SIZE,
              background: props.background
                ? props.background.hex
                : props.defaultBackground,
              // border: `2px solid ${background.hex || "grey"}`,
            }}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={ELEVATION} style={{ borderRadius: "100%" }}>
          <IconButton
            disableRipple
            onClick={handleTextDisplay}
            style={{
              height: BUTTON_SIZE,
              width: BUTTON_SIZE,
              background: props.text ? props.text.hex : props.defaultText,
              // border: `2px solid ${text.hex || "grey"}`,
            }}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={ELEVATION} style={{ borderRadius: "100%" }}>
          <IconButton
            disableRipple
            onClick={handleFilled}
            style={{
              height: BUTTON_SIZE,
              width: BUTTON_SIZE,
              background: props.filled
                ? props.background
                  ? props.background.hex
                  : props.defaultBackground
                : "none",
              border: `2px solid ${
                props.background
                  ? props.background.hex
                  : props.defaultBackground
              }`,
            }}
          >
            <Typography
              variant="h5"
              style={{ color: props.text ? props.text.hex : props.defaultText }}
            >
              T
            </Typography>
          </IconButton>
        </Paper>
      </Grid>
      {displayBackgroundPicker ? (
        <Grid
          item
          style={{
            position: "absolute",
            zIndex: 2,
            // top: "50%",
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
            color={props.background ? props.background.rgb : "rgb(255,255,255)"}
            onChange={handlePickedBackground}
          />
        </Grid>
      ) : null}
      {displayTextPicker ? (
        <Grid
          item
          style={{
            position: "absolute",
            zIndex: 2,
            // top: "50%",
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
            color={props.text ? props.text.rgb : props.defaultText}
            onChange={handlePickedText}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

interface MessagesProps {
  backgroundTop: any;
  textTop: any;
  filledTop: boolean;
  backgroundBottom: any;
  textBottom: any;
  filledBottom: boolean;
}

const Messages: React.FC<MessagesProps> = (props) => {
  return (
    <Grid container direction="column" spacing={2}>
      {CONTENT.map((message) => {
        if (message.side === "left") {
          return (
            <Grid item key={message.msg}>
              <Bubble
                {...message}
                background={
                  props.filledTop
                    ? props.backgroundTop
                      ? props.backgroundTop.hex
                      : COLOURS.blue
                    : COLOURS.white
                }
                color={props.textTop ? props.textTop.hex : COLOURS.white}
                borderColor={
                  !props.filledTop
                    ? props.backgroundTop
                      ? props.backgroundTop.hex
                      : COLOURS.blue
                    : COLOURS.white
                }
              />
            </Grid>
          );
        } else {
          return (
            <Grid item key={message.msg}>
              <Bubble
                {...message}
                background={
                  props.filledBottom
                    ? props.backgroundBottom
                      ? props.backgroundBottom.hex
                      : COLOURS.red
                    : COLOURS.white
                }
                color={props.textBottom ? props.textBottom.hex : COLOURS.red}
                borderColor={
                  !props.filledBottom
                    ? props.backgroundBottom
                      ? props.backgroundBottom.hex
                      : COLOURS.red
                    : COLOURS.white
                }
              />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

interface StyleBlockProps {
  nameTop: string;
  backgroundTop: any;
  setBackgroundTop: (color: any) => void;
  textTop: any;
  setTextTop: (color: any) => void;
  filledTop: boolean;
  setFilledTop: (event: any) => void;
  nameBottom: string;
  backgroundBottom: any;
  setBackgroundBottom: (color: any) => void;
  textBottom: any;
  setTextBottom: (color: any) => void;
  filledBottom: any;
  setFilledBottom: (event: any) => void;
}

const StyleBlock: React.FC<StyleBlockProps> = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={10}
    >
      <Grid item>
        <Styling
          nameTop={props.nameTop}
          backgroundTop={props.backgroundTop}
          setBackgroundTop={props.setBackgroundTop}
          textTop={props.textTop}
          setTextTop={props.setTextTop}
          filledTop={props.filledTop}
          setFilledTop={props.setFilledTop}
          //
          nameBottom={props.nameBottom}
          backgroundBottom={props.backgroundBottom}
          setBackgroundBottom={props.setBackgroundBottom}
          textBottom={props.textBottom}
          setTextBottom={props.setTextBottom}
          filledBottom={props.filledBottom}
          setFilledBottom={props.setFilledBottom}
        />
      </Grid>
      <Grid item>
        <Messages
          backgroundTop={props.backgroundTop}
          textTop={props.textTop}
          filledTop={props.filledTop}
          //
          backgroundBottom={props.backgroundBottom}
          textBottom={props.textBottom}
          filledBottom={props.filledBottom}
        />
      </Grid>
    </Grid>
  );
};

interface PurchaseProps {
  onClick: (event: any) => void;
}

const Purchase: React.FC<PurchaseProps> = (props) => {
  return (
    <Button
      variant="outlined"
      style={{ border: `2px solid ${CAT.color}`, width: 300 }}
      disableRipple
      onClick={props.onClick}
    >
      <Typography variant="h3">
        <span role="img" aria-label="emoji">
          👉 👉 👉
        </span>
      </Typography>
    </Button>
  );
};

const DigitalStyles: React.FC = () => {
  const context = useContext(StylesContext);
  const idContext = useContext(IdContext);
  const formContext = useContext(FirstFormContext);
  // TODO
  // const [nameTop, setNameTop] = useState<string>("John");
  const [backgroundTop, setBackgroundTop] = useState<any>();
  const [textTop, setTextTop] = useState<any>();
  const [filledTop, setFilledTop] = useState<boolean>(true);
  // TODO
  // const [nameBottom, setNameBottom] = useState<string>("Jane");
  const [backgroundBottom, setBackgroundBottom] = useState<any>();
  const [textBottom, setTextBottom] = useState<any>();
  const [filledBottom, setFilledBottom] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const history = useHistory();
  const { sendRequest } = useHttpClient();

  // TODO
  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      setLoading((prevState: boolean) => !prevState);

      const formData: FormData = new FormData();
      formData.append("uuid", idContext.id);
      formData.append(
        "backgroundTop",
        backgroundTop ? backgroundTop.hex : COLOURS.blue,
      );
      formData.append("textTop", textTop ? textTop.hex : COLOURS.white);
      formData.append("filledTop", filledTop.toString());
      formData.append(
        "backgroundBottom",
        backgroundBottom ? backgroundBottom.hex : COLOURS.red,
      );
      formData.append("textBottom", textBottom ? textBottom.hex : COLOURS.red);
      formData.append("filledBottom", filledBottom.toString());
      formData.append("status", "STAGE-1");

      // TODO
      const responseData = await sendRequest(
        `${process.env.REACT_APP_API}/api/users/insightful`,
        "PATCH",
        formData,
      );

      setIsError(responseData.status !== "OK");

      context.updateStyles({
        backgroundTop: backgroundTop ? backgroundTop.hex : COLOURS.blue,
        textTop: textTop ? textTop.hex : COLOURS.white,
        filledTop: filledTop,
        backgroundBottom: backgroundBottom ? backgroundBottom.hex : COLOURS.red,
        textBottom: textBottom ? textBottom.hex : COLOURS.red,
        filledBottom: filledBottom,
        dbUpdated: false,
        styleLoading: false,
        isStyleValid: false,
      });
      // setClicked((prev: boolean) => !prev);
      history.push(HREFS.almost);
    } catch {
      setIsError(true);
    }
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={5}
        style={{ padding: 20, marginTop: 70 }}
      >
        <Grid item style={{ position: "absolute", top: 10 }}>
          <Breadcrumbs crumbs={DIGITAL_STYLE_CRUMBS} />
        </Grid>
        <Grid item>
          <Typography variant="h4" style={{ color: COLOURS.red }}>
            {DIGITAL_STYLES.title}
          </Typography>
        </Grid>
        <Grid item>
          <StyleBlock
            nameTop={formContext.nameTop}
            backgroundTop={backgroundTop}
            setBackgroundTop={setBackgroundTop}
            textTop={textTop}
            setTextTop={setTextTop}
            filledTop={filledTop}
            setFilledTop={setFilledTop}
            //
            nameBottom={formContext.nameBottom}
            backgroundBottom={backgroundBottom}
            setBackgroundBottom={setBackgroundBottom}
            textBottom={textBottom}
            setTextBottom={setTextBottom}
            filledBottom={filledBottom}
            setFilledBottom={setFilledBottom}
          />
        </Grid>
        <Grid item>
          <Purchase onClick={handleClick} />
        </Grid>
      </Grid>
      {/* TODO */}
      <LoadingSpinner loading={loading && !isError} color={COLOURS.red} />
      <ErrorModal isError={isError} color={COLOURS.red} />
    </React.Fragment>
  );
};

export default DigitalStyles;
