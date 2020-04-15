import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "date-fns";
import {
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  FirstFormContext,
  LocationContext,
} from "../shared/context/form-context";
import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";

const CAT = CATEGORIES.filter((cat) => cat.title === "insightful")[0];

interface CrumbProps {
  href: string;
  title: string;
  disabled: boolean;
}

const Crumb: React.FC<CrumbProps> = (props) => {
  const history = useHistory();
  return (
    <Button
      onClick={() => {
        history.push(props.href);
      }}
      disabled={props.disabled}
      disableRipple
    >
      <Typography variant="h6">{props.title}</Typography>
    </Button>
  );
};

const Breadcrumbs: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={10}
    >
      <Grid item>
        <Crumb title="🏠" href="/" disabled={false} />
      </Grid>
      <Grid item>
        <Crumb title="✍️" href="/insightful" disabled={false} />
      </Grid>
      <Grid item>
        <Crumb title="💰" href="/" disabled={true} />
      </Grid>
      <Grid item>
        <Crumb title="🎉" href="/" disabled={true} />
      </Grid>
    </Grid>
  );
};

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
  emailChange: (event: Event) => void;
  nameTopChange: (event: Event) => void;
  nameBottomChange: (event: Event) => void;
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
        <Form
          emailChange={props.emailChange}
          nameTopChange={props.nameTopChange}
          nameBottomChange={props.nameBottomChange}
        />
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
  emailChange: (event: Event) => void;
  nameTopChange: (event: Event) => void;
  nameBottomChange: (event: Event) => void;
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
          <FormItem
            {...item}
            emailChange={props.emailChange}
            nameTopChange={props.nameTopChange}
            nameBottomChange={props.nameBottomChange}
          />
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
  emailChange: (event: any) => void;
  nameTopChange: (event: any) => void;
  nameBottomChange: (event: any) => void;
}

const FormItem: React.FC<FormItemProps> = (props) => {
  let cb;
  if (props.label === "Email") {
    cb = props.emailChange;
  } else if (props.label === "John") {
    cb = props.nameTopChange;
  } else {
    cb = props.nameBottomChange;
  }

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
          onChange={cb}
        />
      </Grid>
    </Grid>
  );
};

interface DatePickersProps {
  start: {
    value: Date;
    cb: (date: any) => void;
  };
  end: {
    value: Date;
    cb: (date: any) => void;
  };
}

const DatePickers: React.FC<DatePickersProps> = (props) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
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
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start date"
            value={props.start.value}
            onChange={props.start.cb}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Grid item>
          <KeyboardDatePicker
            disableToolbar
            // variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="End date"
            value={props.end.value}
            onChange={props.end.cb}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
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

const Insightful: React.FC = () => {
  const context = useContext(FirstFormContext);
  const locationContext = useContext(LocationContext);
  const history = useHistory();
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date());
  const [email, setEmail] = useState<string>("");
  const [nameTop, setNameTop] = useState<string>("");
  const [nameBottom, setNameBotton] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleStartDateChange = (date: Date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setSelectedEndDate(date);
  };

  const handleEmailChange = (event: Event) => {
    setEmail((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    locationContext.updateLocation("/insightful");
  }, []);

  const handleNameTopChange = (event: Event) => {
    setNameTop((event.target as HTMLInputElement).value);
  };

  const handleNameBottomChange = (event: Event) => {
    setNameBotton((event.target as HTMLInputElement).value);
  };

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    context.updateForm({
      email: email,
      nameTop: nameTop,
      nameBottom: nameBottom,
      fileUploaded: false,
      dateStart: selectedStartDate,
      dateEnd: selectedEndDate,
      isFormValid: false,
      formLoading: false,
    });
    setClicked((prev: boolean) => !prev);
    history.push("/payment");
  };

  // const handlers = [
  //   {
  //     label: "email",
  //     cb: handleEmailChange,
  //   },
  //   {
  //     label: "nameTop",
  //     cb: handleNameTopChange,
  //   },
  //   {
  //     label: "nameBottom",
  //     cb: handleNameBottomChange,
  //   },
  // ];

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log({ email, nameTop, nameBottom });
  // };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={5}
      style={{ marginTop: 70, marginBottom: 20 }}
    >
      <Grid item style={{ position: "absolute", top: 10 }}>
        <Breadcrumbs />
      </Grid>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Content
          emailChange={handleEmailChange}
          nameTopChange={handleNameTopChange}
          nameBottomChange={handleNameBottomChange}
        />
      </Grid>
      <Grid item>
        <DatePickers
          start={{ value: selectedStartDate, cb: handleStartDateChange }}
          end={{ value: selectedEndDate, cb: handleEndDateChange }}
        />
      </Grid>
      <Grid item>
        <Purchase onClick={handleClick} />
      </Grid>
    </Grid>
  );
};

export default Insightful;
