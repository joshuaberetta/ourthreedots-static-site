import React, { useState, useContext } from "react";
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

import { FormContext } from "../shared/context/form-context";
import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";

const CAT = CATEGORIES.filter((cat) => cat.title === "insightful")[0];

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

const Content: React.FC = () => {
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

const Form: React.FC = () => {
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

const Insightful: React.FC = () => {
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
        <Content />
      </Grid>
      <Grid item>
        <DatePickers />
      </Grid>
      <Grid item>
        <Purchase />
      </Grid>
    </Grid>
  );
};

export default Insightful;
