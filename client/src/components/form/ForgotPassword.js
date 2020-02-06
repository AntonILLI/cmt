import React, { useContext, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import photo_forgot from "../../img/ForgotPassword.jpg";
import ApiContext from "../context/api/apiContext";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { StyledInlineErrorMessage } from "../../admin/components/dashboard/form/InputStyles";
// import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Require email")
});

const ForgotPassword = () => {
  const ref = useRef(null);
  const apiContext = useContext(ApiContext);
  const { forgotPassword } = apiContext;
  const history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2 m6 offset-m3 z-depth-2  grey lighten-5">
          <div className="card center-align">
            <div className="card-image">
              <img className="activator" alt="" src={photo_forgot}></img>
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
                      email: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, actions) => {
                      const data = new FormData();
                      data.append("email", values.email);

                      forgotPassword(data).then(() => {
                        setTimeout(() => {
                          actions.setSubmitting(false);
                          history.push("/signIn");
                        }, 1000);
                      });
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form
                        name="reset"
                        action=""
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <h5 style={{ color: "red" }}>{errors.HasError}</h5>

                        <div className="input-field col s12">
                          <i className="material-icons prefix">email</i>

                          <Field name="email" placeholder="email" />
                          {errors.email && touched.email ? (
                            <StyledInlineErrorMessage>
                              {errors.email}
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
                            Reset-Passowrd
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

export default ForgotPassword;

