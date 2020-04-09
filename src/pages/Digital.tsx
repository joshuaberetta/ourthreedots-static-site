import React, { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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

const Header: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h3" style={{ color: CAT.color }}>
          {CAT.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">{CAT.description}</Typography>
      </Grid>
    </Grid>
  );
};

interface ContentProps {
  emailChange?: () => void;
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={5}
    >
      <Grid item>
        <DragDrop />
      </Grid>
      <Grid item>
        <Form />
        {/* <Form emailChange={props.emailChange} /> */}
      </Grid>
    </Grid>
  );
};

const DragDrop: React.FC = () => {
  return (
    <Button disableRipple style={{ background: "none" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          height: 300,
          width: 300,
          background: "none",
          border: `dashed 2px ${CAT.color}`,
          borderRadius: 10,
        }}
      >
        <Grid item>
          <Typography variant="h6" style={{ color: CAT.color }}>
            Drop it in!
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

interface FormProps {
  emailChange?: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="center"
      spacing={4}
    >
      {FORM_ITEMS.map((item) => (
        <Grid item>
          <FormItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

const FORM_ITEMS = [
  {
    avatar: "📬",
    label: "Email",
    background: COLOURS.yellow,
  },
  {
    avatar: "👻",
    label: "John",
    background: COLOURS.yellow,
  },
  {
    avatar: "👑",
    label: "Jane",
    background: COLOURS.blue,
  },
];

interface FormItemProps {
  avatar: string;
  label: string;
  background: string;
}

const FormItem: React.FC<FormItemProps> = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={5}
    >
      <Grid item>
        <Avatar style={{ background: props.background, width: 50, height: 50 }}>
          <Typography variant="h4">{props.avatar}</Typography>
        </Avatar>
      </Grid>
      <Grid item>
        <TextField
          label={props.label}
          variant="outlined"
          style={{ width: 300, borderColor: CAT.color }}
          // onChange={props.emailChange.bind()}
        />
      </Grid>
    </Grid>
  );
};

const DatePickers: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <KeyboardDatePicker
            disableToolbar
            // variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Grid item>
          <KeyboardDatePicker
            disableToolbar
            // variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="End date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

const Purchase: React.FC = () => {
  return (
    <Button
      variant="outlined"
      style={{ border: `2px solid ${CAT.color}`, width: 300 }}
      disableRipple
    >
      <Typography variant="h3">
        <span role="img" aria-label="emoji">
          👉 👉 👉
        </span>
      </Typography>
    </Button>
  );
};

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
        <Avatar />
      </Grid>
      <Grid item>
        <Avatar />
      </Grid>
      <Grid item>
        <Avatar />
      </Grid>
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
  const [email, setEmail] = useState();
  const [nameTop, setNameTop] = useState();
  const [nameBottom, setNameBottom] = useState();

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

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
        <Header />
      </Grid>
      <Grid item>
        {/* <Content emailChange={handleEmailChange} /> */}
        <Content />
      </Grid>
      <Grid item>
        <DatePickers />
      </Grid>
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
