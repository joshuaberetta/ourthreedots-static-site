import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import "date-fns";
import { useDropzone } from "react-dropzone";
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
  CategoryContext,
} from "../shared/context/form-context";
import { useHttpClient } from "../shared/hooks/http-hook";

import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumbs from "../components/Breadcrumbs";
import DragAndDrop from "../components/DragDrop";

import { CATEGORIES } from "../shared/PricingCategories";
import { COLOURS } from "../shared/Colours";
import { FORM_ITEMS } from "../shared/FormItems";

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

interface ContentProps {
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
          color={CAT.color}
          handleSelectedFile={props.handleSelectedFile}
          acceptedFile={props.acceptedFile}
        />
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

//////////////////////

// interface DragAndDropProps {
//   handleSelectedFile: (acceptedFile: FileList) => void;
//   acceptedFile: FileList;
// }

// const DragAndDrop: React.FC<DragAndDropProps> = (props) => {
//   const onDropAccepted = useCallback((acceptedFiles) => {
//     props.handleSelectedFile(acceptedFiles[0]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDropAccepted,
//     accept: "image/jpg, image/jpeg, image/png, text/plain",
//     multiple: false,
//   });

//   return (
//     <Grid container direction="column" alignItems="center" justify="center">
//       <Grid item {...getRootProps({ className: "dropzone" })}>
//         <Button disableRipple style={{ borderRadius: 10 }}>
//           <Grid
//             container
//             alignItems="center"
//             justify="center"
//             direction="column"
//             style={{
//               height: 300,
//               width: 300,
//               background: "none",
//               border: `dashed 2px ${CAT.color}`,
//               borderRadius: 10,
//             }}
//           >
//             <Grid item>
//               <input {...getInputProps()} />
//               {props.acceptedFile ? (
//                 <Typography variant="h3">
//                   <span role="img" aria-label="emoji">
//                     👍
//                   </span>
//                 </Typography>
//               ) : (
//                 <Typography variant="h6" style={{ color: COLOURS.blue }}>
//                   DROP IT IN!
//                 </Typography>
//               )}
//             </Grid>
//           </Grid>
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

//////////////////////

const Insightful: React.FC = () => {
  const context = useContext(FirstFormContext);
  const locationContext = useContext(LocationContext);
  const idContext = useContext(IdContext);
  const categoryContext = useContext(CategoryContext);
  const { sendRequest } = useHttpClient();
  const history = useHistory();
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date());
  const [email, setEmail] = useState<string>("");
  const [nameTop, setNameTop] = useState<string>("");
  const [nameBottom, setNameBotton] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [acceptedFile, setAcceptedFile] = useState<any>();

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

  useEffect(() => {
    locationContext.updateLocation("/insightful");
  }, []);

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
      formData.append("category", categoryContext.category);
      formData.append("image", acceptedFile);

      const responseData = await sendRequest(
        "http://localhost:5000/api/users/insightful",
        "POST",
        formData,
      );

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
    } catch (err) {}
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
          <Purchase onClick={handleClick} />
        </Grid>
      </Grid>
      <LoadingSpinner loading={loading} color={COLOURS.blue} />
    </React.Fragment>
  );
};

export default Insightful;
