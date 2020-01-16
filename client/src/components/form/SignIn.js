import React, { useState, useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import photo_loginpic from "../../img/loginpic.jpg";
import ApiContext from "../context/api/apiContext";
import * as Yup from "yup";
import { StyledInlineErrorMessage } from "../../admin/components/dashboard/form/InputStyles";
// import { Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .required("Required")
});

// function Copyright() {
//   return (
//     <p variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit">Canterbury Music Teacher</Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </p>
//   );
// }

const SignIn = () => {
  const history = useHistory();

  const apiContext = useContext(ApiContext);
  const { login, isAuthenticated } = apiContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/admin");
    }
  }, [isAuthenticated, history]);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2 m6 offset-m3">
          <div className="card center-align">
            <div className="card-image">
              <img className="activator" src={photo_loginpic}></img>
            </div>

            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab">
                  <a href="#test4">Sign-In</a>
                </li>
              </ul>
            </div>

            <div className="card-content grey lighten-4">
              <div id="test4">
                <div className="row">
                  <Formik
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                      // same shape as initial values
                      login(values);
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form
                        name="signIn"
                        action=""
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <div className="input-field col s12">
                          <i className="material-icons prefix">email</i>

                          <Field name="email" />
                          {errors.email && touched.email ? (
                            <StyledInlineErrorMessage>
                              {errors.email}
                            </StyledInlineErrorMessage>
                          ) : null}
                        </div>
                        <div className="input-field col s12">
                          <i className="material-icons prefix">vpn_key</i>
                          <Field name="password" />
                          {errors.password && touched.password ? (
                            <StyledInlineErrorMessage>
                              {errors.password}
                            </StyledInlineErrorMessage>
                          ) : null}
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="waves-effect waves-light btn red"
                          >
                            <i className="material-icons right">
                              arrow_forward
                            </i>
                            Login
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// import React, { useState, useContext, useEffect } from "react";
// import ApiContext from "../context/api/apiContext";
// import SignInForm from "./SignInForm.js";
// import { validateLoginForm } from "./validate";

// // import "./style.css";

// const initialValue = {
//   email: "",
//   password: ""
// };

// const SignIn = props => {
//   const apiContext = useContext(ApiContext);
//   const { login, isAuthenticated } = apiContext;

//   useEffect(() => {
//     if (isAuthenticated) {
//       props.history.push("/admin/dashboard");
//     }
//   }, [isAuthenticated, props.history]);

//   const [user, setUser] = useState(initialValue);
//   const [errors, setErrors] = useState(initialValue);

//   const handleInputChange = event => {
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value
//     });
//   };

//   const validateForm = event => {
//     event.preventDefault();
//     const data = validateLoginForm(user);
//     console.log(data);
//     if (data.success) {
//       setErrors({});

//       const { password, email } = user;

//       login({ password, email });
//       // window.location.reload(true);
//       // console.log(user);
//     } else {
//       const errors = data.errors;

//       setErrors({
//         ...errors
//       });
//     }
//   };

//   return (
//     <div>
//       <SignInForm
//         onSubmit={event => validateForm(event)}
//         onChange={event => handleInputChange(event)}
//         errors={errors}
//         user={user}
//       />
//     </div>
//   );
// };

// export default SignIn;

{
  /* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => (

          
          <div className="container" name="SignIn" onSubmit={handleSubmit}> */
}
