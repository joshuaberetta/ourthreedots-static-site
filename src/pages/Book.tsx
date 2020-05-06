import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { COLOURS } from "../shared/Colours";

import { CategoryContext, IdContext } from "../shared/context/form-context";
import { useHttpClient } from "../shared/hooks/http-hook";

import Breadcrumbs from "../components/Breadcrumbs";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorModal from "../components/Error";

import { BOOK_DEFAULT } from "../shared/Content";
import { SUCCESS_CRUMBS } from "../shared/Crumbs";

const useStyles = makeStyles({
  root: {
    padding: 20,
    paddingTop: 70,
    height: "40rem",
  },
  body: {
    maxWidth: "30rem",
  },
  textField: {
    width: 300,
  },
  button: {
    border: `2px solid ${COLOURS.yellow}`,
    width: 300,
  },
  crumbs: {
    position: "absolute",
    top: 10,
  },
});

const Book: React.FC = () => {
  const category = useContext(CategoryContext);
  const idContext = useContext(IdContext);
  const { sendRequest } = useHttpClient();

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const history = useHistory();
  const classes = useStyles();

  const handleEmailChange = (event) => {
    setEmail((event.target as HTMLInputElement).value);
  };

  // useEffect(() => {
  //   console.log(email);
  // }, [email]);

  const handleClick = async () => {
    try {
      setLoading((prevState: boolean) => !prevState);

      const formData: FormData = new FormData();
      formData.append("uuid", idContext.id);
      formData.append("category", category.category);
      formData.append("email", email);

      const responseData = await sendRequest(
        `${process.env.REACT_APP_API}/api/users/email`,
        "POST",
        formData,
      );

      setIsError(responseData.status !== "OK");

      history.push("/");
    } catch {
      setIsError(true);
    }
  };

  return (
    <React.Fragment>
      {loading && !isError && (
        <LoadingSpinner loading={loading} color={COLOURS.red} />
      )}
      {isError && <ErrorModal isError={isError} color={COLOURS.red} />}
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={5}
        className={classes.root}
      >
        <Grid item className={classes.crumbs}>
          <Breadcrumbs crumbs={SUCCESS_CRUMBS} />
        </Grid>
        <Grid item>
          <Typography variant="h4">{BOOK_DEFAULT.title}</Typography>
        </Grid>
        <Grid item className={classes.body}>
          <Typography>{BOOK_DEFAULT.subtitle}</Typography>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            placeholder={BOOK_DEFAULT.placeholder}
            variant="outlined"
            autoComplete="off"
            className={classes.textField}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={classes.button}
            disableRipple
            onClick={handleClick}
          >
            <Typography variant="h3">{BOOK_DEFAULT.button}</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Book;
