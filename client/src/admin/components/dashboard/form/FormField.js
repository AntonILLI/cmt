//Form in the user profile form
import React, { useState, useRef, useContext } from "react";
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import PopupMessage from "../../globals/PopupMessage";
import * as Yup from "yup";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
import styled from "styled-components";
import FileUpload from "./FileUpload";
import { MultiSelect } from "./MultiSelect";

import { screenSmallerThan } from "../../globals/Util";

import {
  PageWrapper,
  Title,
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
  margin: 0 5rem 8rem 8rem;
  padding-bottom: 7rem;
<<<<<<< HEAD
  /* ${screenSmallerThan.tablet`
    margin-left:0;
    msrgin-right:0;
=======
  ${screenSmallerThan.tablet`
  
    margin-left:3rem;
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
<<<<<<< HEAD
  `} */

  ${screenSmallerThan.phone`
    margin:0;
    padding:0;
    flex-direction: column;
    justify-content:center;
    align-items:center;

  `}
=======
  `} /* background-color: #15141b; */
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
`;

export const MyTitle = styled.div`
  padding: 5rem;
  text-align: center;
  color: #b85d1c;

  .common-heading {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
<<<<<<< HEAD

    ${screenSmallerThan.phone`
   font-size:1rem;
   left:-1rem;
   font-weight: 150;
   letter-spacing: 0.1rem;
 `}
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  }

  .small-underline {
    width: 9rem;
    height: 0.1rem;
    background-color: #b85d1c;
    margin: 0 auto 1rem auto;
  }
<<<<<<< HEAD
  ${screenSmallerThan.phone`
  width:4rem

 `}
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

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

  const adminContext = useContext(AdminContext);
  const { addUsers, loading, error } = adminContext;
<<<<<<< HEAD
  const { redirect, setRedirect } = useState(false);
  const history = useHistory();
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

  const getValues = values => values.fields;

  const Poptions = [
    {
      label: "piano",
      value: "piano"
    },
    {
      label: "guitar",
      value: "guitar"
    },
    {
      label: "jazz",
      value: "jazz"
    },
    {
      label: "vocal training",
      value: "vocal training"
    },
    {
      label: "others",
      value: "others"
    }
  ];

  return (
    <MySection>
      <MyTitle>
        <h1 className="common-heading">Add Teacher</h1>
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
            description: "",
            password: "",
            photo: null,
            careers: [],
            price: []
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            //formdata file data transmission
            const data = new FormData();
            data.append("firstname", values.firstname);
            data.append("lastname", values.lastname);
            data.append("email", values.email);
            data.append("password", values.password);
            data.append("description", values.description);
            data.append("photo", values.photo);
            data.append("careers", values.careers);
            data.append("price", values.price);
            console.log(JSON.stringify(values, null, 2));

            addUsers(data);
<<<<<<< HEAD
            {
              /* setRedirect(true); */
            }
=======

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
            const timeOut = setTimeout(() => {
              ref.current("Submitted Successfully!!");
              actions.setSubmitting(false);
              clearTimeout(timeOut);
<<<<<<< HEAD

              {
                /* history.push("/admin"); */
              }
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            touched,
<<<<<<< HEAD
            handleSubmit,
            setFieldValue,
=======
            setFieldValue,
            handleSubmit,
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
            isSubmitting,
            handleReset,
            dirty,
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

                  <Label htmlFor="password">
                    Password
                    <MyInput
                      className="browser-default"
                      type="password"
                      name="password"
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

<<<<<<< HEAD
                  <Label style={{ marginTop: "20px" }} htmlFor="photo">
                    Image(upload photo sould be 200 height * 300 in size width)
=======
                  <Label htmlFor="photo">
                    Image
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
                    <MyInput
                      className="browser-default"
                      name="photo"
                      value={values.price}
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
<<<<<<< HEAD

=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
                  <Label htmlFor="careers">
                    Music skills
                    <MultiSelect
                      name="careers"
                      options={Poptions}
                      placeholder="multi choise is available, select your music skills to teach"
                    />
                  </Label>

                  <Label htmlFor="photo">
                    Fees
                    <FieldArray
                      className="browser-default"
                      placeholder="Add Price"
                      name="price"
<<<<<<< HEAD
                      Width
=======
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
                      render={arrayHelpers => (
                        <div>
                          {values.price && values.price.length > 0 ? (
                            values.price.map((price, index) => (
<<<<<<< HEAD
                              <div key={index} style={{ paddingRight: "27px" }}>
                                <MyInput
                                  className="browser-default"
=======
                              <div key={index}>
                                <Field
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
                                  name={`${price}.${index}`}
                                  onChange={e => {
                                    setFieldValue("price.0", e.target.value);
                                    getValues(values);
                                  }}
                                />

                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  -
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")}
                                >
                                  +
                                </button>
                              </div>
                            ))
                          ) : (
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
<<<<<<< HEAD
                              Add Fees
=======
                              Add Price
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
                            </button>
                          )}
                        </div>
                      )}
                    />
                  </Label>
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
                {JSON.stringify(values, null, 2)}
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </MySection>
  );
}

export default FormField;
