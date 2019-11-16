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
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    margin: theme.spacing(1)
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
  handlePassword,
  score,
  password,
  validateForm,
  mouseDownPassword,
  clickPassword
}) => {
  const classes = useStyles();
  return (
    <div className="registerBox">
      <h1>Sign Up</h1>
      {error.message && (
        <p style={{ color: "red", fontSize: 13 }}>{error.message}</p>
      )}

      <form onSubmit={validateForm}>
        <TextField
          className={classes.textField}
          name="firstname"
          label="Filled First name"
          value={user.firstname}
          onChange={onChange}
          margin="normal"
        />
        {error.firstname && error.firstname.length >= 0 && (
          <p style={{ color: "red", fontSize: 13 }}>{error.firstname}</p>
        )}

        <TextField
          className={classes.textField}
          name="lastname"
          value={user.lastname}
          onChange={onChange}
          margin="normal"
          label="Filled last name"
        />
        {error.lastname && error.lastname.length >= 0 && (
          <p style={{ color: "red", fontSize: 13 }}>{error.lastname}</p>
        )}

        <TextField
          className={classes.textField}
          name="email"
          value={user.email}
          onChange={onChange}
          margin="normal"
          label="Filled email"
        />

        {error.email && (
          <p style={{ color: "red", fontSize: 13 }}>{error.email}</p>
        )}
        <FormControl className={clsx(classes.textField)}>
          <Input
            className={classes.textField}
            style={{
              height: 53,
              marginTop: 20
            }}
            name="password"
            value={user.password}
            type={password.showPassword ? "text" : "password"}
            onChange={handlePassword}
            label="Filled Password"
            margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={clickPassword}
                  onMouseDown={mouseDownPassword}
                >
                  {password.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="pwStrRow">
          {score.score >= 1 && (
            <div>
              <PasswordSet score={score.score} />
            </div>
          )}
        </div>

        <br />
        {error.password && (
          <p style={{ color: "red", fontSize: 13 }}>{error.password}</p>
        )}

        <TextField
          name="confirmPassword"
          className={classes.textField}
          value={user.confirmPassword}
          onChange={onChange}
          label="Filled Confirm Password"
          margin="normal"
        />
        <br />

        {error.confirmPassword && (
          <p style={{ color: "red", fontSize: 13 }}>{error.confirmPassword}</p>
        )}

        <from className={classes.textField}>
          <InputLabel id="demo-mutiple-checkbox-label">Categories</InputLabel>
          <Select
            className={classes.textField}
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            name="categories"
            value={user.categories}
            onChange={onChange}
            input={<Input />}
            renderValue={selected => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={user.categories.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          {error.categories && (
            <p style={{ color: "red", fontSize: 13 }}>{error.categories}</p>
          )}
        </from>
        <br />
        <Button
          variant="outlined"
          type="submit"
          color="primary"
          className={classes.button}
        >
          Submit
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
