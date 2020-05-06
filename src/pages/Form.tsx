import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [nameTop, setNameTop] = useState<string>("");
  const [nameBottom, setNameBottom] = useState<string>("");
  const [dateStart, setDateStart] = useState<string>("yesterday");
  const [dateEnd, setDateEnd] = useState<string>("today");

  const handleEmailChange = (event: any) => {
    setEmail((event.target as HTMLInputElement).value);
  };

  const handleNameTopChange = (event: any) => {
    setNameTop((event.target as HTMLInputElement).value);
  };

  const handleNameBottomChange = (event: any) => {
    setNameBottom((event.target as HTMLInputElement).value);
  };

  const formSubmitHandler = async (event: any) => {
    event.preventDefault();
    try {
      const formData: FormData = new FormData();
      formData.append("uuid", "qwerty123456");
      formData.append("email", email);
      formData.append("nameTop", nameTop);
      formData.append("nameBottom", nameBottom);
      formData.append("dateStart", dateStart);
      formData.append("dateEnd", dateEnd);

      const responseData = await fetch(
        `${process.env.REACT_APP_API}/api/users/insightful`,
        {
          method: "POST",
          body: formData,
        },
      );
    } catch (err) {}
  };

  return (
    <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <TextField
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic-email"
            label="nameTop"
            variant="outlined"
            onChange={handleNameTopChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic-email"
            label="nameBottom"
            variant="outlined"
            onChange={handleNameBottomChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit">submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
