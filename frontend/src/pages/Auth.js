import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { theme, useStyles } from "../styles/AuthStyles";

const Auth = () => {
  const classes = useStyles();
  let emailEl = React.createRef();
  let passwordEl = React.createRef();

  const [isLogin, setIsLogin] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    const email = emailEl.current.value;
    const password = passwordEl.current.value;

    if (email.trim().length === 0 && password.trim().length) {
      return;
    }

    const requestBody = {
      query: `
        mutation {
          createUser( userInput: {
            email: "${email}",
            password: "${password}"
          }) {
            _id
            email
          }
        }
      `
    };

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    const email = emailEl.current.value;
    const password = passwordEl.current.value;

    if (email.trim().length === 0 && password.trim().length) {
      return;
    }

    const requestBody = {
      query: `
        query {
          login( email: "${email}", password: "${password}") {
              token
          }
        }
      `      
    };

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(data => {
        setIsLogin(true);
        console.log(data);
      })
      .catch(err => {
        setIsLogin(false);
        console.log(err);
      });
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
          inputRef={emailEl}
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
          inputRef={passwordEl}
          onChange={handleChange("password")}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={handleSubmit}
          >
            SingUp
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={handleLogin}
          >
            Switch to {isLogin? 'Logout': 'Login'}
          </Button>
        </ThemeProvider>
      </form>
    </Container>
  );
};

export default Auth;
