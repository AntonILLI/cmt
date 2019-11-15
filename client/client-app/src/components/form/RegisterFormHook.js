import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import PasswordSet from "./PasswordSet";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import IconButton from "@material-ui/core/IconButton";
//import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const names = ["Piano", "Flute", "Guiter", "Drum", "Others"];

const RegisterFormHook = ({
  onChange,
  error,
  user,
  handleChangeMultiple,
  handlePassword,
  score,
  validateForm
}) => {
  const classes = useStyles();
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {error.message && <p style={{ color: "red" }}>{error.message}</p>}

      <form onSubmit={validateForm}>
        <TextField
          className={classes.textField}
          name="firstname"
          label="Filled First name"
          variant="filled"
          color="secondary"
          value={user.firstname}
          onChange={onChange}
          margin="normal"
        />
        {error.firstname && error.firstname.length >= 0 && (
          <p style={{ color: "red" }}>{error.firstname}</p>
        )}

        <TextField
          className={classes.textField}
          name="lastname"
          value={user.lastname}
          onChange={onChange}
          margin="normal"
          label="Filled last name"
          variant="filled"
          color="secondary"
        />
        {error.lastname && error.lastname.length >= 0 && (
          <p style={{ color: "red" }}>{error.lastname}</p>
        )}

        <TextField
          className={classes.textField}
          name="email"
          value={user.email}
          onChange={onChange}
          margin="normal"
          label="Filled email"
          variant="filled"
          color="secondary"
        />

        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <TextField
          className={classes.textField}
          name="password"
          value={user.password}
          onChange={handlePassword}
          label="Filled Password"
          variant="filled"
          color="secondary"
          margin="normal"
        />

        <div className="pwStrRow">
          {score.score >= 1 && (
            <div>
              <PasswordSet score={score.score} />
            </div>
          )}
        </div>

        <br />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        <TextField
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={onChange}
          label="Filled Confirm Password"
          variant="filled"
          color="secondary"
          margin="normal"
        />
        <br />

        {error.confirmPassword && (
          <p style={{ color: "red" }}>{error.confirmPassword}</p>
        )}

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Categories</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            name="categories"
            value={user.categories}
            onChange={handleChangeMultiple}
            input={<Input />}
            renderValue={selected => selected.join(", ")}
            MenuProps={MenuProps}
            variant="filled"
            color="secondary"
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={user.categories.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          {error.categories && (
            <p style={{ color: "red" }}>{error.categories}</p>
          )}
        </FormControl>
        <br />
        <Button className="signUpSubmit" primary type="submit" label="submit">
          submit
        </Button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/login">Log in here</a>
      </p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <pre>{JSON.stringify(score, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
export default RegisterFormHook;
// {isErrors.email && <p style={{ color: "red" }}>{isErrors.email}</p>}
// <FormControl className={classes.textField}>
//   <Input
//     id="standard-adornment-password"
//     type={showPassword.password ? "text" : "password"}
//     value={user.password}
//     name="password"
//     onChange={handleChange}
//     helperText={isErrors.password}
//     margin="normal"
//     label="Filled password"
//     variant="filled"
//     color="secondary"
//     endAdornment={
//       <InputAdornment position="end">
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={handleClickShowPassword}
//           onMouseDown={handleMouseDownPassword}
//         >
//           {showPassword.password ? <Visibility /> : <VisibilityOff />}
//         </IconButton>
//       </InputAdornment>
//     }
//   />
// </FormControl>
