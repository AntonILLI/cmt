import React, { useState, useContext, useEffect } from "react";
import ApiContext from "../../components/api/apiContext";
import SignInForm from "./SignInForm.js";
import { validateLoginForm } from "./validate";

// import "./style.css";

const initialValue = {
  email: "",
  password: ""
};

const SignIn = props => {
  const apiContext = useContext(ApiContext);
  const { login, isAuthenticated } = apiContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = event => {
    event.preventDefault();
    const data = validateLoginForm(user);
    console.log(data);
    if (data.success) {
      setErrors({});

      const { password, email } = user;

      login({ password, email });
      window.location.reload(true);
      // console.log(user);
    } else {
      const errors = data.errors;

      setErrors({
        ...errors
      });
    }
  };

  return (
    <div>
      <SignInForm
        onSubmit={event => validateForm(event)}
        onChange={event => handleInputChange(event)}
        errors={errors}
        user={user}
      />
    </div>
  );
};

export default SignIn;

// const loginSubmit = user => {
//   const userData = {
//     email: user.email,
//     password: user.password
//   };

//   axios
//     .post("/api/user/login", userData)
//     .then(res => {
//       if (res.status === 200) {
//         this.setState({ histroy: true });
//       } else {
//         throw new Error("Something went wrong ...");
//       }
//     })
//     .catch(error => {
//       setErrors({ error });
//     });
//   // this.setState({ email: "", password: "", history: false });
// };
