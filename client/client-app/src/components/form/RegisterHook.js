import React, { useState, useEffect } from "react";
import RegisterFormHook from "./RegisterFormHook.js";
import { validateRegisterForm } from "./validate";

import axios from "axios";
import "./style.css";
const zxcvbn = require("zxcvbn");

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  categories: []
};

const RegisterHook = () => {
  const [user, setUser] = useState(initialState);
  const [score, setScore] = useState({ score: 0 });

  const [errors, setErrors] = useState({});

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeMultiple = event => {
    const { value, name } = event.target;
    setUser({ [name]: value });
  };

  const handlePassword = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });

    if (event.target.value === "") {
      setScore(state =>
        Object.assign({}, state, {
          score: "0"
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);

      setScore(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      );
    }
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
          setErrors({
            errors: { message: res.data.message }
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

  //Object.keys(data).length === 0
  const validateForm = async event => {
    await event.preventDefault();

    const data = await validateRegisterForm(event.user);
    console.log(data);

    if (data.success) {
      setErrors({});

      registerSubmit({ user });
    } else {
      const errors = data.errors;

      setErrors(prevError => {
        return { ...prevError, ...errors };
      });
    }
  };

  // useEffect(
  //   event => {
  //     validateForm(event);
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [validateForm]
  // );
  return (
    <div>
      <RegisterFormHook
        onChange={handleInputChange}
        handleChangeMultiple={handleChangeMultiple}
        error={errors}
        user={user}
        validateForm={validateForm}
        handlePassword={handlePassword}
        score={score}
      />
    </div>
  );
};

export default RegisterHook;
//   onSelectChange={handleMultipleInput}
// const handleClickShowPassword = () => {
//   setShowPassword({ password: !showPassword.password });
// };

//  setPicture(e.target.value[0]);

// const handleMouseDownPassword = event => {
//   event.preventDefault();
// };

// const passwordMask = event => {
//   event.preventDefault();
//   setMask(state =>
//     Object.assign({}, state, {
//       type: mask.type === "password" ? "input" : "password",
//       btnTxt: mask.btnTxt === "show" ? "hide" : "show"
//     })
//   );
// };
