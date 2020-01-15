//Form in the user profile form

import React, { useState, useRef } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PopupMessage from "../../globals/PopupMessage";
import * as Yup from "yup";
import styled from "styled-components";
import ImgDropAndCrop from "./ImgDropAndCrop";
// import PopupMessage from "../../globals/PupupMessage";
import { screenSmallerThan } from "../../globals/Util";
// import { MyTitle, MySection } from "../teachers/Teachers";
import {
  PageWrapper,
  Title,
  Label,
  MyInput,
  StyledInlineErrorMessage,
  Submit
} from "./InputStyles";

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Your firstname is too short")
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2, "Your lastname is too short")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  description: Yup.string()
    .min(10, "Your description is too short")
    .required("Please enter your description")
});

export const MySection = styled.section`
  margin: 0 5rem 8rem 8rem;
  padding-bottom: 7rem;
  ${screenSmallerThan.tablet`
  
    margin-left:3rem;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
  `} /* background-color: #15141b; */
`;

export const MyTitle = styled.div`
  padding: 5rem;
  text-align: center;
  color: #b85d1c;

  .common-heading {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
  }

  .small-underline {
    width: 9rem;
    height: 0.1rem;
    background-color: #b85d1c;
    margin: 0 auto 1rem auto;
  }

  .big-underline {
    width: 9rem;
    height: 0.1rem;
    margin: auto;
    background-color: #b85d1c;
  }
  ${screenSmallerThan.tablet`
  
  margin-left:3rem;

  
`}
`;

//will use userId for save or delete conttent
function FormField({ userId }) {
  // const ref = useRef(null);
  const ref = useRef(null);
  const [formValues, setFormValues] = useState();

  return (
    <MySection>
      <MyTitle>
        <h1 className="common-heading">Teacher's Profile</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </MyTitle>

      <PageWrapper>
        <Title>Teacher's Profile Form</Title>

        <hr />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            description: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setFormValues(values);

            const timeOut = setTimeout(() => {
              ref.current(" Submitted Successfully!!");
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
            isValidating,
            handleReset,
            dirty,
            height,
            isValid
          }) => {
            return (
              <>
                <Form name="contact" method="post" onSubmit={handleSubmit}>
                  <PopupMessage children={add => (ref.current = add)} />
                  <Label htmlFor="firstname">
                    First Name
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="firstname"
                      autoCorrect="off"
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
                  <Label htmlFor="email">
                    Email
                    <MyInput
                      className="browser-default"
                      type="email"
                      name="email"
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

                  <Label htmlFor="description">
                    Description
                    <MyInput
                      style={{ height: 100 }}
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

                  <ImgDropAndCrop />

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
                </Form>

                <hr />
                {/* <CodeWrapper>
                <strong>Errors:</strong> {JSON.stringify(errors, null, 2)}
                <strong>Touched:</strong> {JSON.stringify(touched, null, 2)}
                {formValues && <strong>Submitted values:</strong>}
                {JSON.stringify(formValues, null, 2)}
              </CodeWrapper> */}
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </MySection>
  );
}

export default FormField;
