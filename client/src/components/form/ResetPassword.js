import React, { useState, useContext, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import photo_reset from "../../img/ForgotPassword.jpg";
import ApiContext from "../context/api/apiContext";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import PopupMessage from "../../admin/components/globals/PopupMessage";
import { StyledInlineErrorMessage } from "../../admin/components/dashboard/form/InputStyles";
// import { Link } from "react-router-dom";

import { useHistory, Redirect } from "react-router";
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Your password is more than 6!")
    .required("Require password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  resetPasswordToken: Yup.string().required("Required Token")
});

// function Copyright() {
//   return (
//     <p variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <div color="inherit">Canterbury Music Teacher</div>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </p>
//   );
// }

const ResetPassword = () => {
  const history = useHistory();

  const apiContext = useContext(ApiContext);
  const { resetPassword } = apiContext;
  const { resetPasswordToken } = useParams();
  const ref = useRef(null);
  console.log("tokenR:", resetPasswordToken);

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2 m6 offset-m3">
          <div className="card center-align">
            <div className="card-image">
              <img className="activator" alt="" src={photo_reset}></img>
            </div>

            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab">
                  <a href="#test4">Please type your email address</a>
                </li>
              </ul>
            </div>

            <div className="card-content grey lighten-4">
              <div id="test4">
                <div className="row">
                  <Formik
                    initialValues={{
                      password: "",
                      resetPasswordToken: "",
                      confirmPassword: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, actions) => {
                      const data = new FormData();
                      data.append("password", values.password);

                      resetPassword(data, resetPasswordToken);

                      const timeOut = setTimeout(() => {
                        ref.current(
                          "Successfully sent it, you will recieved a confirmation email in your email box!!"
                        );
                        actions.setSubmitting(false);
                        clearTimeout(timeOut);
                      }, 1500);
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form
                        name="resetPasword"
                        action=""
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <PopupMessage children={add => (ref.current = add)} />
                        <div className="input-field col s12">
                          <i className="material-icons prefix">vpn_key</i>

                          <Field name="resetPasswordToken" />
                          {errors.resetPasswordToken &&
                          touched.resetPasswordToken ? (
                            <StyledInlineErrorMessage>
                              {errors.resetPasswordToken}
                            </StyledInlineErrorMessage>
                          ) : null}
                        </div>
                        <div className="input-field col s12">
                          <i className="material-icons prefix">Password</i>

                          <Field name="password" />
                          {errors.password && touched.password ? (
                            <StyledInlineErrorMessage>
                              {errors.password}
                            </StyledInlineErrorMessage>
                          ) : null}
                        </div>

                        <div className="input-field col s12">
                          <i className="material-icons prefix">
                            Confirm password
                          </i>

                          <Field name="confirmPassword" />
                          {errors.confirmPassword && touched.confirmPassword ? (
                            <StyledInlineErrorMessage>
                              {errors.confirmPassword}
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
                            Send
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

export default ResetPassword;
