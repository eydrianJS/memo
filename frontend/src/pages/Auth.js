import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { theme, useStyles } from "../styles/AuthStyles";

const Auth = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    age: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange("email")}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange("password")}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <ThemeProvider theme={theme} >
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Switch to Singup
          </Button>
        </ThemeProvider>
      </form>
    </Container>
  );
};

export default Auth;
