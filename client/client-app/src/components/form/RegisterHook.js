import React, { useState } from "react";
import RegisterFormHook from "./RegisterFormHook.js";
import { validateRegisterForm } from "./validate";

import axios from "axios";
import "./style.css";

const RegisterHook = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  //const [mask, setMask] = useState({ btnTxt: "show", type: "password" });
  const [showPassword, setShowPassword] = useState({ password: false });

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeMultiple = event => {
    setCategories(event.target.value);
  };

  const handleChangeUser = event => {
    setUser(event.target.value);
  };

  const registerSubmit = user => {
    const users = {
      firsrname: user.firstname,
      lastname: user.lastname,
      password: user.password,
      email: user.email,
      categories: user.categories
    };

    axios
      .post("/api/user/register", users)
      .then(res => {
        if (res.data.success === true) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          window.location.reload();
        } else {
          const errors = res.data.errors;
          setErrors({
            errors
          });
        }
      })
      .catch(err => {
        console.log("Sign up data submit error: ", err);
      });
  };
  // .then(res => res.data)
  // .catch(err => {
  //   console.log("Sign up data submit error: ", err);
  // });

  const validateForm = (event, categories) => {
    event.preventDefault();
    //const { firstname, lastname, email, password } = user;
    const data = validateRegisterForm(categories);
    console.log(data);
    if (data.success) {
      setErrors({
        errors: {}
      });

      const { firstname, lastname, password, email } = user;

      registerSubmit({ firstname, lastname, password, email, categories });
      // console.log(user);
    } else {
      // const errors = data.errors;

      setErrors({
        errors: data.errors
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword({ password: !showPassword.password });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // const passwordMask = event => {
  //   event.preventDefault();
  //   setMask(state =>
  //     Object.assign({}, state, {
  //       type: mask.type === "password" ? "input" : "password",
  //       btnTxt: mask.btnTxt === "show" ? "hide" : "show"
  //     })
  //   );
  // };

  return (
    <div>
      <RegisterFormHook
        onSubmit={validateForm}
        onChange={handleInputChange}
        handleChangeMultiple={handleChangeMultiple}
        isErrors={errors}
        user={user}
        categories={categories}
        handleChange={handleChangeUser}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
      />
    </div>
  );
};

export default RegisterHook;
//   onSelectChange={handleMultipleInput}
