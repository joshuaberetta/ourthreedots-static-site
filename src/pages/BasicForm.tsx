import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "date-fns";
import {
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  withStyles,
  IconButton,
  Tooltip,
} from "@material-ui/core";
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
import DragAndDropAvatar from "../components/DragDropAvatar";
import { PriceCard } from "../models/PriceCard.model";

import { BASIC_FORM } from "../shared/Content";
import { CATEGORIES } from "../shared/PricingCategories";
import { INSIGHTFUL_FORM_CRUMBS, DIGITAL_FORM_CRUMBS } from "../shared/Crumbs";
import { HREFS } from "../shared/Hrefs";
import * as STYLES from "../shared/Styles";

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
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

interface ContentProps {
  category: PriceCard;
  acceptedFileTop: FileList;
  acceptedFileBottom: FileList;
  previewUrlTop: string;
  previewUrlBottom: string;
  handleSelectedFileTop: (acceptedFile: FileList) => void;
  handleSelectedFileBottom: (acceptedFile: FileList) => void;
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
          acceptedFileTop={props.acceptedFileTop}
          acceptedFileBottom={props.acceptedFileBottom}
          previewUrlTop={props.previewUrlTop}
          previewUrlBottom={props.previewUrlBottom}
          handleSelectedFileTop={props.handleSelectedFileTop}
          handleSelectedFileBottom={props.handleSelectedFileBottom}
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
  acceptedFileTop: FileList;
  acceptedFileBottom: FileList;
  previewUrlTop: string;
  previewUrlBottom: string;
  handleSelectedFileTop: (acceptedFile: FileList) => void;
  handleSelectedFileBottom: (acceptedFile: FileList) => void;
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
      {BASIC_FORM.formItems.map((item) => (
        <Grid item key={item.label}>
          <FormItem
            category={props.category}
            {...item}
            acceptedFileTop={props.acceptedFileTop}
            acceptedFileBottom={props.acceptedFileBottom}
            previewUrlTop={props.previewUrlTop}
            previewUrlBottom={props.previewUrlBottom}
            handleSelectedFileTop={props.handleSelectedFileTop}
            handleSelectedFileBottom={props.handleSelectedFileBottom}
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
  acceptedFileTop: FileList;
  acceptedFileBottom: FileList;
  previewUrlTop: string;
  previewUrlBottom: string;
  handleSelectedFileTop: (acceptedFile: FileList) => void;
  handleSelectedFileBottom: (acceptedFile: FileList) => void;
  emailChange: (event: any) => void;
  nameTopChange: (event: any) => void;
  nameBottomChange: (event: any) => void;
}

const FormItem: React.FC<FormItemProps> = (props) => {
  // let styles = STYLES.INSIGHTFUL_STYLES;
  // if (props.category.title === "digital") {
  //   styles = STYLES.DIGITAL_STYLES;
  // }
  // const useStyles = makeStyles(styles);
  // const classes = useStyles();

  // const CustomTextField = withStyles(styles)(TextField);

  let cb;
  if (props.label === "Email") {
    cb = props.emailChange;
  } else if (props.label === "John") {
    cb = props.nameTopChange;
  } else {
    cb = props.nameBottomChange;
  }

  let avatar;
  if (props.label === "John") {
    avatar = (
      <DragAndDropAvatar
        handleSelectedFile={props.handleSelectedFileTop}
        color={props.background}
        acceptedFile={props.acceptedFileTop}
        previewUrl={props.previewUrlTop}
        avatar={props.avatar}
      />
    );
  } else if (props.label === "Jane") {
    avatar = (
      <DragAndDropAvatar
        handleSelectedFile={props.handleSelectedFileBottom}
        color={props.background}
        acceptedFile={props.acceptedFileBottom}
        previewUrl={props.previewUrlBottom}
        avatar={props.avatar}
      />
    );
  } else {
    avatar = (
      <IconButton disabled={true} style={{ padding: 5 }}>
        <Avatar style={{ background: props.background, width: 50, height: 50 }}>
          <Typography variant="h4">{props.avatar}</Typography>
        </Avatar>
      </IconButton>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={5}
    >
      <Grid item>{avatar}</Grid>
      <Grid item>
        <TextField
          placeholder={props.label}
          variant="outlined"
          style={{ width: 300 }}
          onChange={cb}
          required={true}
          // noValidate
          autoComplete="off"
          // InputProps={classes}
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
  let styles = STYLES.INSIGHTFUL_STYLES;

  const CustomKeyboardDatePicker = withStyles(styles)(KeyboardDatePicker);

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
          <CustomKeyboardDatePicker
            disableToolbar
            format="dd/MM/yyyy"
            margin="normal"
            id="start-date-picker-inline"
            label="Start date"
            value={props.start.value}
            onChange={props.start.cb}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Grid item>
          <CustomKeyboardDatePicker
            disableToolbar
            format="dd/MM/yyyy"
            margin="normal"
            id="end-date-picker-inline"
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
    buttonText = BASIC_FORM.button.insightful;
  } else {
    buttonText = BASIC_FORM.button.digital;
  }

  return (
    <Tooltip
      title={
        props.disabled
          ? BASIC_FORM.tooltips.next.disabled
          : BASIC_FORM.tooltips.next.proceed
      }
    >
      <span style={{ width: 300, height: 300 }}>
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
      </span>
    </Tooltip>
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
  const [previewUrlTop, setPreviewUrlTop] = useState<any>();
  const [acceptedImageTop, setAcceptedImageTop] = useState<any>();
  const [previewUrlBottom, setPreviewUrlBottom] = useState<any>();
  const [acceptedImageBottom, setAcceptedImageBottom] = useState<any>();
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
  }, [props.category, locationContext]);

  useEffect(() => {
    if (!acceptedImageTop) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrlTop(fileReader.result);
    };
    fileReader.readAsDataURL(acceptedImageTop);
  }, [acceptedImageTop]);

  useEffect(() => {
    if (!acceptedImageBottom) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrlBottom(fileReader.result);
    };
    fileReader.readAsDataURL(acceptedImageBottom);
  }, [acceptedImageBottom]);

  // very simple form validation
  useEffect(() => {
    if (
      email &&
      checkEmail(email) &&
      nameTop &&
      nameBottom &&
      acceptedFile &&
      acceptedImageTop &&
      acceptedImageBottom
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    email,
    nameTop,
    nameBottom,
    acceptedFile,
    acceptedImageTop,
    acceptedImageBottom,
  ]);

  const handleSelectedFile = (acceptedFile: FileList) => {
    setAcceptedFile(acceptedFile);
  };

  const handleSelectedImageTop = (acceptedImage: FileList) => {
    setAcceptedImageTop(acceptedImage);
  };

  const handleSelectedImageBottom = (acceptedImage: FileList) => {
    setAcceptedImageBottom(acceptedImage);
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
      formData.append("file", acceptedFile);
      formData.append("imageTop", acceptedImageTop);
      formData.append("imageBottom", acceptedImageTop);

      // TODO
      const responseData = await sendRequest(
        `${process.env.REACT_APP_API}/api/users/insightful`,
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

      // TODO - update when payment is ready
      history.push(
        category.title === "insightful" ? HREFS.almost : HREFS.digitalStyles,
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
        style={{ padding: 20, marginTop: 70 }}
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
            handleSelectedFileTop={handleSelectedImageTop}
            acceptedFileTop={acceptedImageTop}
            previewUrlTop={previewUrlTop}
            handleSelectedFileBottom={handleSelectedImageBottom}
            acceptedFileBottom={acceptedImageBottom}
            previewUrlBottom={previewUrlBottom}
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
