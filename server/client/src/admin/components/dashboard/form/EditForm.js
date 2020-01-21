//Edit Form  in event table modal
import React, { useState, useRef, useContext } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PopupMessage from "../../globals/PopupMessage";
import * as Yup from "yup";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import { screenSmallerThan } from "../../globals/Util";
import AdminContext from "../../../../components/context/adminAPI/adminContext";

import {
  PageWrapper,
  Label,
  MyInput,
  StyledInlineErrorMessage,
  Submit
} from "./InputStyles";

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 5rem;
  align-items: center;
  padding: 1rem;
`;
const MyForm = styled.form`
  margin-bottom: 100px;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  height: 50%;
  width: 50%;
`;

//will use userId for save or delete conttent
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

const Close = styled.button`
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
function EditForm({ id }) {
  // const ref = useRef(null);
  const ref = useRef(null);
  // console.log("id:", id);
  const adminContext = useContext(AdminContext);
  const { updateEvent, loading, error } = adminContext;

  return (
    <MySection>
      <PageWrapper Border Margin Width>
        <Title>Profile Edit Form</Title>

        <hr />
        <Formik
          initialValues={{
            title: "",
            description: "",
            photo: null
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            const data = new FormData();
            data.append("title", values.title);
            data.append("description", values.description);
            data.append("photo", values.photo);

            updateEvent(data);

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
                <Form name="contact" method="post" onSubmit={handleSubmit}>
                  <PopupMessage children={add => (ref.current = add)} />

                  <Label htmlFor="title">
                    Title
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="title"
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
                  
                </Form>
                <Close href="/admin/eventTable">X</Close>
                <hr />
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </MySection>
  );
}

export default EditForm;

// <MySection>
//       <Title color="#707173" size>
//         Edit Form
//       </Title>

//       <MyForm name="contact">
//         <Label color="#8e929c" size htmlFor="title">
//           Title
//           <MyNormalInput className="browser-default" type="text" name="title" />
//         </Label>

//         <Label color="#8e929c" size htmlFor="description">
//           Description
//           <MyNormalTextArea className="browser-default" name="description" />
//         </Label>
//         <ImgWrapper>
//           <Label color="#8e929c" size htmlFor="image">
//             Image
//             <FileUpload />
//           </Label>
//         </ImgWrapper>
//       </MyForm>

//       <BtnWrapper>
//         <PrimaryBtn
//           radius="5"
//           color="#363837"
//           background
//           fontSize="2"
//           width="100px"
//         >
//           Edit
//         </PrimaryBtn>

//         <PrimaryBtn
//           id="modal"
//           radius="5"
//           color="#363837"
//           fontSize="2"
//           width="100px"
//           onClick={onClick}
//         >
//           Close
//         </PrimaryBtn>
//       </BtnWrapper>
//     </MySection>
