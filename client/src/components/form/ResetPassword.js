import React, { useState, useContext, useEffect, useRef } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import photo_reset from "../../img/ForgotPassword.jpg";
import ApiContext from "../context/api/apiContext";
import { useParams, useHistory } from "react-router-dom";

import * as Yup from "yup";
import PopupMessage from "../../admin/components/globals/PopupMessage";
import { StyledInlineErrorMessage } from "../../admin/components/dashboard/form/InputStyles";
// import { Link } from "react-router-dom";

const ResetPassword = () => {
  // const history = useHistory();
  // const { HasError, setHasError } = useState(false);
  const apiContext = useContext(ApiContext);
  const { resetPassword, errorMessage } = apiContext;
  const { resetPasswordToken } = useParams();
  const [values, setValues] = React.useState({});

  const history = useHistory();
  // console.log("error", errorMessage);
  const ref = useRef(null);
  // console.log("tokenR:", resetPasswordToken);

  const formik = useFormik({
    initialValues: {
      password: "",
      resetPasswordToken: "",
      confirmPassword: ""
    },

    SignupSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, "Your password is more than 6!")
        .required("Require password"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      resetPasswordToken: Yup.string().required("Required Passowrd Reset Code")
    }),
    onSubmit: (values, actions) => {
      const data = new FormData();

      data.append("password", values.password);

      resetPassword(data, resetPasswordToken);
      console.log("message:", errorMessage);
      if (errorMessage === null) {
        history.push("/signIn");
      }
      actions.setSubmitting(false);
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2 m6 offset-m3">
          {errorMessage && errorMessage.length > 0 && (
            <h5 style={{ color: "red" }}>{errorMessage}</h5>
          )}
          <div className="card center-align">
            <div className="card-image">
              <img className="activator" alt="" src={photo_reset}></img>
            </div>

            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab">
                  <h6 style={{ color: "#ed5634" }}>
                    Please type your Password Reset Code,
                    <br />
                    password, confirm password
                  </h6>
                </li>
              </ul>
            </div>

            <div className="card-content grey lighten-4">
              <div id="test4">
                <div className="row">
                  <form
                    name="resetPasword"
                    action=""
                    method="post"
                    onSubmit={formik.handleSubmit}
                  >
                    <PopupMessage children={add => (ref.current = add)} />{" "}
                    <div className="input-field col s12">
                      <i className="material-icons prefix"> vpn_key</i>

                      <input
                        name="resetPasswordToken"
                        id="resetPasswordToken"
                        placeholder="reset password code"
                        onChange={formik.handleChange}
                        value={formik.values.resetPasswordToken}
                      />
                      {formik.errors.resetPasswordToken &&
                      formik.touched.resetPasswordToken ? (
                        <StyledInlineErrorMessage>
                          {formik.errors.resetPasswordToken}
                        </StyledInlineErrorMessage>
                      ) : null}
                    </div>
                    <div className="input-field col s12">
                      <i
                        className="material-icons prefix"
                        style={{ paddingLeft: 10 }}
                      >
                        {" "}
                        Password
                      </i>

                      <input
                        name="password"
                        id="password"
                        placeholder="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      {formik.errors.password && formik.touched.password ? (
                        <StyledInlineErrorMessage>
                          {formik.errors.password}
                        </StyledInlineErrorMessage>
                      ) : null}
                    </div>
                    <div className="input-field col s12">
                      <i
                        className="material-icons prefix"
                        style={{ paddingLeft: 10 }}
                      >
                        Confirm password
                      </i>

                      <input
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="comfirm password"
                        type="password"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword ? (
                        <StyledInlineErrorMessage>
                          {formik.errors.confirmPassword}
                        </StyledInlineErrorMessage>
                      ) : null}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="waves-effect waves-light btn red"
                      >
                        <i className="material-icons right">arrow_forward</i>
                        Send
                      </button>
                    </div>
                  </form>
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

{
  /* if (!errorMessage) {
                        console.log("error", errorMessage);
                        resetPassword(data, resetPasswordToken);
                        const timeOut = setTimeout(() => {
                          ref.current(
                            "your password has been changed successfully!!"
                          );
                          actions.setSubmitting(false);
                          clearTimeout(timeOut);
                        }, 1500);
                      } else {
                        actions.setErrors({
                          HasError: "Invalid Reset Token or Something is wrong"
                        });
                      }
                    }} */
}
