import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  chip: {
    margin: 2
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
  onSubmit,
  onChange,
  handleChange,
  isErrors,
  user,
  categories,
  handleChangeMultiple,
  handleClickShowPassword,
  handleMouseDownPassword,
  showPassword
}) => {
  const classes = useStyles();
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {isErrors.message && <p style={{ color: "red" }}>{isErrors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          className={classes.textField}
          name="firstname"
          label="Filled First name"
          variant="filled"
          color="secondary"
          value={user.firstname}
          errors
          helperText={isErrors.firstname}
          onChange={onChange}
          margin="normal"
        />
        {isErrors.firstname && (
          <p style={{ color: "red" }}>{isErrors.firstname}</p>
        )}
        <TextField
          errors
          className={classes.textField}
          name="lastname"
          value={user.lastname}
          onChange={onChange}
          helperText={isErrors.lastname}
          margin="normal"
          label="Filled last name"
          variant="filled"
          color="secondary"
        />
        {isErrors.lastname && (
          <p style={{ color: "red" }}>{isErrors.lastname}</p>
        )}
        <TextField
          errors
          className={classes.textField}
          name="email"
          value={user.email}
          onChange={onChange}
          helperText={isErrors.email}
          margin="normal"
          label="Filled email"
          variant="filled"
          color="secondary"
        />
        {isErrors.email && <p style={{ color: "red" }}>{isErrors.email}</p>}

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword.password ? "text" : "password"}
            value={user.password}
            onChange={handleChange}
            helperText={isErrors.password}
            margin="normal"
            label="Filled password"
            variant="filled"
            color="secondary"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword.password ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {isErrors.password && (
          <p style={{ color: "red" }}>{isErrors.password}</p>
        )}
        <TextField
          errors
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={onChange}
          helperText={isErrors.confirmPassword}
          label="Filled Confirm Password"
          variant="filled"
          color="secondary"
        />
        <br />
        {isErrors.confirmPassword && (
          <p style={{ color: "red" }}>{isErrors.confirmPassword}</p>
        )}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Categories</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={categories}
            onChange={handleChangeMultiple}
            input={<Input />}
            renderValue={selected => selected.join(", ")}
            MenuProps={MenuProps}
            variant="filled"
            color="secondary"
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={categories.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
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
      <pre>{JSON.stringify(isErrors, null, 2)}</pre>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default RegisterFormHook;

/* <div className="passwordClick">
          <div>
            <Button
              className="pwShowHideBtn"
              label={mask.btnTex}
              onClick={passwordMask}
              style={{
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)"
              }}
            >
              click
            </Button>
          </div>
        </div> */
