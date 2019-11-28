import React, { useState, useContext, useEffect } from "react";
import RegisterFormHook from "./RegisterFormHook.js";
import { validateRegisterForm } from "./validate";
import ApiContext from "../../components/api/apiContext";

// import "./style.css";
const zxcvbn = require("zxcvbn");

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  category: []
};

const RegisterHook = props => {
  const apiContext = useContext(ApiContext);

  const { register, isAuthenticated } = apiContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const [score, setScore] = useState({ score: 0 });
  const [password, setPassword] = useState({ showPassword: false });

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };
  const clickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const mouseDownPassword = event => {
    event.preventDefault();
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

  const validateForm = event => {
    event.preventDefault();

    const data = validateRegisterForm(user);
    console.log(data);

    if (data.success) {
      setErrors({});

      const { firstname, lastname, password, email, category } = user;

      register({ firstname, lastname, password, email, category });
    } else {
      const errors = data.errors;

      setErrors({ ...errors });
    }
  };

  return (
    <div>
      <RegisterFormHook
        onChange={handleInputChange}
        error={errors}
        user={user}
        validateForm={validateForm}
        handlePassword={handlePassword}
        score={score}
        password={password}
        clickPassword={clickShowPassword}
        mouseDownPassword={mouseDownPassword}
      />
    </div>
  );
};

export default RegisterHook;

// const registerSubmit = user => {
//   const users = {
//     firstname: user.firstname,
//     lastname: user.lastname,
//     password: user.password,
//     email: user.email,
//     category: user.categories
//   };

//   axios
//     .post("/api/user/register", users)
//     .then(res => {
//       if (res.data.success === true) {
//         window.location.reload();
//       } else {
//         const message = res.data;
//         setErrors({
//           ...message
//         });
//       }
//     })
//     .catch(err => {
//       console.log("Sign up data submit error: ", err);
//     });
// };

//Object.keys(data).length === 0
