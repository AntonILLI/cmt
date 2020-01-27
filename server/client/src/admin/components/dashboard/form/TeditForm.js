import React, { useState, useRef, useContext } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PopupMessage from "../../globals/PopupMessage";
import * as Yup from "yup";
import styled from "styled-components";
import FileUpload from "./FileUpload";

import { screenSmallerThan } from "../../globals/Util";

import {
  PageWrapper,
  Label,
  MyInput,
  StyledInlineErrorMessage,
  Submit
} from "./InputStyles";
import AdminContext from "../../../../components/context/adminAPI/adminContext";

const FileSize = 15000000;
const FormatType = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Your firstname is too short")
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2, "Your lastname is too short")
    .required("Please enter your last name"),
  password: Yup.string()
    .min(6, "Your password is more than 6")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  title: Yup.string()
    .min(5, "Your title is too short")
    .required("Please enter your title"),
  description: Yup.string()
    .min(10, "Your description is too short")
    .required("Please enter your description"),
  photo: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FileSize
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && FormatType.includes(value.type)
    )
});

export const MySection = styled.section`
  margin: 0;
  border-radius: 10px;
  border: 10px solid #ffffff;
  overflow: auto;

  ${screenSmallerThan.tablet`

    flex-direction: column;
    justify-content:center;
    align-items:center;
    
  `} /* background-color: #15141b; */
`;
export const Title = styled.h1`
  font-size: 1.75rem;
  line-height: 2.5rem;
  margin-top: 0;
  color: #222a6e;
`;

const Close = styled.a`
  position: absolute;
  right: -2rem;
  top: -2rem;
  width: 5.5rem;
  height: 5.5rem;
  font-size: 2.1rem;
  font-weight: 400;
  border-radius: 100%;
  padding-top: 1rem;
  background-color: #f5ebeb;
  z-index: 4;
  border: 2.2px solid #0d134f;
  color: #eb0e15;
  -webkit-box-shadow: -10px 9px 5px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -10px 9px 5px -4px rgba(0, 0, 0, 0.75);
  box-shadow: -10px 9px 5px -4px rgba(0, 0, 0, 0.75);
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;

//will use userId for save or delete content
function TeditForm({ params, Tvalue }) {
  // const ref = useRef(null);
  const ref = useRef(null);
  console.log(Tvalue);
  const { firstname, lastname, email, title, password, description } = Tvalue;

  const adminContext = useContext(AdminContext);
  const { updateUser, loading, error } = adminContext;

  // console.log('history:',history)

  return (
    <MySection>
      <PageWrapper Border Margin Width>
        <Title>Profile Edit Form</Title>

        <hr />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            title: "",
            description: "",
            password: "",
            photo: null
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            const data = new FormData();

            data.append("firstname", values.firstname);
            data.append("lastname", values.lastname);
            data.append("email", values.email);
            data.append("password", values.password);
            data.append("title", values.title);
            data.append("description", values.description);
            data.append("photo", values.photo);

            console.log("id:", params);
            updateUser(data, params);

            const timeOut = setTimeout(() => {
              ref.current("Submitted Successfully!!");
              actions.setSubmitting(false);

              clearTimeout(timeOut);
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleReset,
            dirty,
            isValid
          }) => {
            return (
              <>
                <Form name="TeditForm" method="post" onSubmit={handleSubmit}>
                  <PopupMessage children={add => (ref.current = add)} />
                  <Label htmlFor="firstname">
                    First Name
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="firstname"
                      autoCorrect="off"
                      value={firstname}
                      autoComplete="firstname"
                      placeholder="your first name"
                      valid={touched.firstname && !errors.firstname}
                      error={touched.firstname && errors.firstname}
                    />
                  </Label>

                  {errors.firstname && touched.firstname && (
                    <StyledInlineErrorMessage>
                      {errors.firstname}
                    </StyledInlineErrorMessage>
                  )}

                  <Label htmlFor="lastname">
                    Last Name
                    <MyInput
                      className="browser-default"
                      type="text"
                      value={lastname}
                      name="lastname"
                      autoCorrect="off"
                      autoComplete="lastname"
                      placeholder="your last name"
                      valid={touched.lastname && !errors.lastname}
                      error={touched.lastname && errors.lastname}
                    />
                  </Label>
                  {errors.lastname && touched.lastname && (
                    <StyledInlineErrorMessage>
                      {errors.lastname}
                    </StyledInlineErrorMessage>
                  )}

                  <Label htmlFor="password">
                    Password
                    <MyInput
                      className="browser-default"
                      type="password"
                      name="password"
                      value={password}
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="password"
                      placeholder="your password"
                      valid={touched.password && !errors.password}
                      error={touched.password && errors.password}
                    />
                  </Label>
                  <ErrorMessage name="password">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="email">
                    Email
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="email"
                      value={email}
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      placeholder="your email"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                  </Label>
                  <ErrorMessage name="email">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="title">
                    Title
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="title"
                      value={title}
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      placeholder="your title"
                      valid={touched.title && !errors.title}
                      error={touched.title && errors.title}
                    />
                  </Label>
                  <ErrorMessage name="title">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="description">
                    Description
                    <MyInput
                      style={{ height: 100 }}
                      value={description}
                      className="browser-default"
                      component="textarea"
                      type="textarea"
                      name="description"
                      autoCorrect="off"
                      autoComplete="description"
                      placeholder="your description"
                      valid={touched.description && !errors.description}
                      error={touched.description && errors.description}
                    />
                  </Label>
                  {errors.description && touched.description && (
                    <StyledInlineErrorMessage>
                      {errors.description}
                    </StyledInlineErrorMessage>
                  )}

                  <Label htmlFor="photo">
                    Image
                    <MyInput
                      className="browser-default"
                      name="photo"
                      component={FileUpload}
                      autoCorrect="off"
                      autoComplete="photo"
                      placeholder="your photo"
                      valid={touched.photo && !errors.photo}
                      error={touched.photo && errors.photo}
                    />
                  </Label>
                  {errors.photo && touched.photo && (
                    <StyledInlineErrorMessage>
                      {errors.photo}
                    </StyledInlineErrorMessage>
                  )}

                  <Submit
                    className="browser-default"
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? `Submiting...` : `Submit`}
                  </Submit>

                  <button
                    style={{ marginTop: 10 }}
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <Close href="/admin/">X</Close>
                </Form>

                <hr />
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </MySection>
  );
}

export default TeditForm;
