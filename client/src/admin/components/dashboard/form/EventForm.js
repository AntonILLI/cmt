//Form with formik and yup validation in eventForm

import React, { useState, useRef, useContext } from "react";
import { Formik, Form } from "formik";
import PopupMessage from "../../globals/PopupMessage";
import * as Yup from "yup";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";
// import ImgDropAndCrop from "./ImgDropAndCrop";
import { screenSmallerThan } from "../../globals/Util";
import { MyParagraph } from "../teachers/Teachers";
import FileUpload from "./FileUpload";
import EventContext from "../../../../components/context/eventAPI/eventContext";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  PageWrapper,
  Title,
  Label,
  MyInput,
  StyledInlineErrorMessage,
  Submit
} from "./InputStyles";

const FileSize = 15000000;
const FormatType = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter your title"),
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

const items = [
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit.aspernatur ",
  " sint! Esse aliquam explicabo aperiam eos ✨✨"
];
const config = { mass: 5, tension: 2000, friction: 200 };

export const MySection = styled.section`
  margin: 0 5rem 8rem 8rem;

  /* ${screenSmallerThan.desktop`
    margin-left:3rem;
  `} */
  ${screenSmallerThan.tablet`
  
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
  `}
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

  ${screenSmallerThan.phone`
   margin-left:3rem; 
`}
`;

//will use userId for save or delete conttent
function EventForm() {
  const eventContext = useContext(EventContext);
  const { createEvent } = eventContext;
  // const [error, setError] = useState([false]);
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  const ref = useRef(null);

  const [toggle, setToggle] = useState(true);

  const anime = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <MySection>
      <MyTitle>
        <h1 className="common-heading">Add Event</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </MyTitle>

      <MyParagraph onClick={() => setToggle(state => !state)}>
        {anime.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </MyParagraph>

      <PageWrapper>
        <Title>Teacher's Event Form</Title>

        <hr />
        <Formik
          initialValues={{
            title: "",
            description: "",
            url: "",
            photo: null
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            const data = new FormData();
            data.append("photo", values.photo);
            data.append("title", values.title);
            data.append("url", values.url);
            data.append("description", values.description);

            console.log(values);
            createEvent(data);
            {
              /* ref.current("Submitted Successfully!!"); */
            }
            const timeOut = setTimeout(() => {
              clearTimeout(timeOut);
              setRedirect(true);
            }, 5000);
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
            isValid,
            setFieldValue
          }) => {
            return (
              <>
                <Form name="contact" method="post" onSubmit={handleSubmit}>
                  {redirect ? <Redirect to="/admin/event" /> : null}
                  {/* <PopupMessage children={add => (ref.current = add)} /> */}
                  <Label htmlFor="title">
                    Title
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="title"
                      autoCorrect="off"
                      autoComplete="title"
                      placeholder="your title"
                      valid={touched.title && !errors.title}
                      error={touched.title && errors.title}
                    />
                  </Label>
                  {errors.title && touched.title && (
                    <StyledInlineErrorMessage>
                      {errors.title}
                    </StyledInlineErrorMessage>
                  )}

                  <Label htmlFor="description">
                    Description
                    <MyInput
                      style={{ height: 100 }}
                      className="browser-default"
                      component="textarea"
                      type="textrea"
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

                  <Label htmlFor="url">
                    Event Link (Optional)
                    <MyInput
                      className="browser-default"
                      type="text"
                      name="url"
                      autoCorrect="off"
                      autoComplete="url"
                      placeholder="your event link ..ex) www.example.com "
                      valid={touched.url && !errors.url}
                      error={touched.url && errors.url}
                    />
                  </Label>
                  {errors.url && touched.url && (
                    <StyledInlineErrorMessage>
                      {errors.url}
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

                  {/* to do onclick after submit validation done probably ternary operator   */}
                  <Submit type="submit" disabled={!isValid || isSubmitting}>
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
                  <PopupMessage children={add => (ref.current = add)} />
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

export default EventForm;
