import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "date-fns";
import { Grid, Typography, Avatar, TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  FirstFormContext,
  LocationContext,
  IdContext,
} from "../shared/context/form-context";

import { useHttpClient } from "../shared/hooks/http-hook";

import ErrorModal from "../components/Error";
import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumbs from "../components/Breadcrumbs";
import DragAndDrop from "../components/DragDrop";
import { PriceCard } from "../models/PriceCard.model";

import { CATEGORIES } from "../shared/PricingCategories";
import { FORM_ITEMS } from "../shared/FormItems";
import { INSIGHTFUL_FORM_CRUMBS, DIGITAL_FORM_CRUMBS } from "../shared/Crumbs";
import { HREFS } from "../shared/Hrefs";

const Header: React.FC<PriceCard> = (props) => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h3" style={{ color: props.color }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">{props.description}</Typography>
      </Grid>
    </Grid>
  );
};

interface ContentProps {
  category: PriceCard;
  emailChange: (event: Event) => void;
  nameTopChange: (event: Event) => void;
  nameBottomChange: (event: Event) => void;
  handleSelectedFile: (acceptedFile: FileList) => void;
  acceptedFile: FileList;
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
        <DragAndDrop
          color={props.category.color}
          handleSelectedFile={props.handleSelectedFile}
          acceptedFile={props.acceptedFile}
        />
      </Grid>
      <Grid item>
        <Form
          category={props.category}
          emailChange={props.emailChange}
          nameTopChange={props.nameTopChange}
          nameBottomChange={props.nameBottomChange}
        />
      </Grid>
    </Grid>
  );
};

interface FormProps {
  category: PriceCard;
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
            category={props.category}
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

interface FormItemProps {
  avatar: string;
  label: string;
  background: string;
  category: PriceCard;
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
          style={{ width: 300 }}
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

interface NextProps {
  category: PriceCard;
  disabled: boolean;
  onClick: (event: any) => void;
}

const Next: React.FC<NextProps> = (props) => {
  let buttonText;
  if (props.category.title === "insightful") {
    buttonText = "👉 👉 👉";
  } else {
    buttonText = "💅 💅 💅";
  }
  return (
    <Button
      variant="outlined"
      style={{ border: `2px solid ${props.category.color}`, width: 300 }}
      disableRipple
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <Typography variant="h3">
        <span role="img" aria-label="emoji">
          {buttonText}
        </span>
      </Typography>
    </Button>
  );
};

// Simple email validation -- do not use!
const checkEmail = (email: string) => {
  return RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
  ).test(email);
};

interface BasicFormProps {
  category: string;
}

const BasicForm: React.FC<BasicFormProps> = (props) => {
  const context = useContext(FirstFormContext);
  const locationContext = useContext(LocationContext);
  const idContext = useContext(IdContext);
  const { sendRequest } = useHttpClient();
  const history = useHistory();
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date());
  const [email, setEmail] = useState<string>("");
  const [nameTop, setNameTop] = useState<string>("");
  const [nameBottom, setNameBotton] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const [acceptedFile, setAcceptedFile] = useState<any>();
  const [category, setCategory] = useState<PriceCard>({
    title: "",
    description: "",
    price: "",
    href: "",
    background: "",
    color: "",
  });

  useEffect(() => {
    locationContext.updateLocation(`/${props.category}`);

    const CAT = CATEGORIES.filter((cat) => cat.title === props.category)[0];
    setCategory(CAT);
  }, []);

  // very simple form validation
  useEffect(() => {
    if (email && checkEmail(email) && nameTop && nameBottom && acceptedFile) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, nameTop, nameBottom, acceptedFile]);

  const handleSelectedFile = (acceptedFile: FileList) => {
    setAcceptedFile(acceptedFile);
  };

  const handleStartDateChange = (date: Date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setSelectedEndDate(date);
  };

  const handleEmailChange = (event: Event) => {
    setEmail((event.target as HTMLInputElement).value);
  };

  const handleNameTopChange = (event: Event) => {
    setNameTop((event.target as HTMLInputElement).value);
  };

  const handleNameBottomChange = (event: Event) => {
    setNameBotton((event.target as HTMLInputElement).value);
  };

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      setLoading((prevState: boolean) => !prevState);

      const formData: FormData = new FormData();
      formData.append("uuid", idContext.id);
      formData.append("email", email);
      formData.append("nameTop", nameTop);
      formData.append("nameBottom", nameBottom);
      formData.append("dateStart", selectedStartDate.toLocaleString("en-uk"));
      formData.append("dateEnd", selectedEndDate.toLocaleString("en-uk"));
      formData.append("status", "STAGE-0");
      formData.append("category", props.category);
      formData.append("image", acceptedFile);

      // TODO
      const responseData = await sendRequest(
        "http://localhost:5000/api/users/insightful",
        "POST",
        formData,
      );

      setIsError(responseData.status !== "OK");

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

      history.push(
        category.title === "insightful" ? HREFS.payment : HREFS.digitalStyles,
      );
    } catch (err) {
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
        style={{ marginTop: 70, marginBottom: 20 }}
      >
        <Grid item style={{ position: "absolute", top: 10 }}>
          <Breadcrumbs
            crumbs={
              category.title === "insightful"
                ? INSIGHTFUL_FORM_CRUMBS
                : DIGITAL_FORM_CRUMBS
            }
          />
        </Grid>
        <Grid item>
          <Header {...category} />
        </Grid>
        <Grid item>
          <Content
            category={category}
            emailChange={handleEmailChange}
            nameTopChange={handleNameTopChange}
            nameBottomChange={handleNameBottomChange}
            handleSelectedFile={handleSelectedFile}
            acceptedFile={acceptedFile}
          />
        </Grid>
        <Grid item>
          <DatePickers
            start={{ value: selectedStartDate, cb: handleStartDateChange }}
            end={{ value: selectedEndDate, cb: handleEndDateChange }}
          />
        </Grid>
        <Grid item>
          <Next onClick={handleClick} category={category} disabled={!isValid} />
        </Grid>
      </Grid>
      <LoadingSpinner loading={loading && !isError} color={category.color} />
      <ErrorModal isError={isError} color={category.color} />
    </React.Fragment>
  );
};

export default BasicForm;
