import React, { useState, useRef, useContext, useEffect } from "react";
import { Formik, Form, ErrorMessage, FieldArray } from "formik";
import PopupMessage from "../../globals/PopupMessage";
import * as Yup from "yup";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import { useHistory } from "react-router-dom";
import { MultiSelect } from "./MultiSelect";
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
  margin: 0;
  border-radius: 10px;
  /* border: 10px solid #ffffff; */
  overflow: none;

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
function TeditForm({ params }) {
  const history = useHistory();
  // console.log("history:", history);
  // const ref = useRef(null);
  const ref = useRef(null);

  const adminContext = useContext(AdminContext);
  const { updateUser, teacher, adminUser } = adminContext;
  const [formValue, setFormValue] = useState({ firstname: "" });
  console.log("teacher:", teacher);
  console.log("P:", params);
  useEffect(() => {
    adminUser(params);
    //eslint-disable-next-line
  }, []);
  const getValues = values => values.fields;
  // console.log('history:',history)
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
      label: "aural",
      value: "aural"
    },
    {
      label: "vocal training",
      value: "vocal training"
    },
    {
      label: "flute",
      value: "flute"
    },
    {
      label: "recorder",
      value: "recorder"
    },

    {
      label: "piccolo",
      value: "piccolo"
    },
    {
      label: "music theory",
      value: "music theory"
    },
    {
      label: "viola repaire",
      value: "viola repaire"
    },
    {
      label: "others",
      value: "others"
    }
  ];

  return (
    <MySection>
      <PageWrapper Border Margin Width>
        <Title>Profile Edit Form</Title>

        <hr />

        {teacher.map((teacher, key) => (
          <Formik
            id={key}
            enableReinitialize={true}
            initialValues={{
              firstname: teacher.firstname,
              lastname: teacher.lastname,
              email: teacher.email,
              description: teacher.description,
              photo: null,
              careers: [],
              price: []
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log(values);

              const data = new FormData();
              data.append("firstname", values.firstname);
              data.append("lastname", values.lastname);
              data.append("email", values.email);
              data.append("description", values.description);
              data.append("photo", values.photo);
              data.append("careers", values.careers);
              data.append("price", values.price);
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
              setFieldValue,
              handleChange,
              isSubmitting,
              handleReset,
              dirty,
              isValid
            }) => {
              return (
                <>
                  <Form name="TeditForm" method="post" onSubmit={handleSubmit}>
                    <PopupMessage children={add => (ref.current = add)} />

                    <Label htmlFor="firstname">First Name</Label>

                    <MyInput
                      className="browser-default"
                      type="text"
                      value={values.firstname}
                      name="firstname"
                      placeholder="your first name"
                      valid={touched.firstname && !errors.firstname}
                      error={touched.firstname && errors.firstname}
                    />

                    {errors.firstname && touched.firstname && (
                      <StyledInlineErrorMessage>
                        {errors.firstname}
                      </StyledInlineErrorMessage>
                    )}

                    <Label htmlFor="lastname">
                      Last Name
                      <MyInput
                        className="browser-default"
                        value={values.lastname}
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
                        value={values.email}
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
                        <StyledInlineErrorMessage>
                          {msg}
                        </StyledInlineErrorMessage>
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
                        value={values.description}
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

                    <Label htmlFor="careers">
                      Music skills
                      <MultiSelect
                        value={values.careers}
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
                        Width
                        render={arrayHelpers => (
                          <div>
                            {values.price && values.price.length > 0 ? (
                              values.price.map((price, index) => (
                                <div
                                  key={index}
                                  style={{ paddingRight: "27px" }}
                                >
                                  <MyInput
                                    className="browser-default"
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
                                    onClick={() =>
                                      arrayHelpers.insert(index, "")
                                    }
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
                                Add Fees
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
                    <Close onClick={() => history.push("/admin")}>X</Close>
                  </Form>

                  <hr />
                  <div style={{ color: "black" }}>
                    {" "}
                    {JSON.stringify(teacher, null, 2)}
                    {JSON.stringify(values, null, 2)}
                  </div>
                </>
              );
            }}
          </Formik>
        ))}
      </PageWrapper>
    </MySection>
  );
}

export default TeditForm;
