import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const LoginForm = ({ history, onSubmit, onChange, errors, user }) => {
  const classes = useStyles();

  if (history) {
    return <Redirect to="/" />;
  }
  return (
    <div className="loginBox">
      <h1>Sing In</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          className={classes.textField}
          name="email"
          value={user.email}
          onChange={onChange}
          helperText={errors.email}
          margin="normal"
          label="Filled email"
          variant="filled"
          color="secondary"
        />

        <TextField
          className={classes.textField}
          name="password"
          floatingLabelText="password"
          value={user.password}
          onChange={onChange}
          helperText={errors.password}
          margin="normal"
          label="Filled Password"
          variant="filled"
          color="secondary"
        />

        <br />
        <Button className="loginSubmit" primary type="submit" label="submit">
          Login
        </Button>

        <pre>{JSON.stringify(user, null, 2)}</pre>
      </form>
    </div>
  );
};

export default LoginForm;
