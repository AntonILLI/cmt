import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import photo_loginpic from "../../img/loginpic.jpg";
import ApiContext from "../context/api/apiContext";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { StyledInlineErrorMessage } from "../../admin/components/dashboard/form/InputStyles";

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
  const { login, isAuthenticated, error } = apiContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/admin/dashboard");
    }
  }, [isAuthenticated, history]);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2 m6 offset-m3">
          {error && error.length > 0 && (
            <h4 style={{ color: "red" }}>{error}</h4>
          )}
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
                        <Link to="/forgotPassword">Forgot your password?</Link>
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
