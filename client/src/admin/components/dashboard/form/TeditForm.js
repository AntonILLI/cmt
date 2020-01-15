//Edit Form  in event table modal

import React from "react";
import styled from "styled-components";
import ImgDropAndCrop from "./ImgDropAndCrop";
import { PrimaryBtn } from "../../globals/Button";
import { Title, Label, MyNormalInput, MyNormalTextArea } from "./InputStyles";

const MySection = styled.section`
  margin: 5rem 5rem 10rem 5rem;
`;
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
const TeditForm = ({ onClose }) => {
  return (
    <MySection>
      <Title color="#707173" size>
        Edit Profile
      </Title>

      <MyForm name="contact">
        <Label color="#8e929c" size htmlFor="firstName">
          First Name
          <MyNormalInput
            className="browser-default"
            type="text"
            name="firstName"
          />
        </Label>
        <Label color="#8e929c" size htmlFor="LastName">
          Last Name
          <MyNormalInput
            className="browser-default"
            type="text"
            name="LastName"
          />
        </Label>
        <Label color="#8e929c" size htmlFor="Email">
          Email
          <MyNormalInput className="browser-default" type="text" name="Email" />
        </Label>
        <Label color="#8e929c" size htmlFor="title">
          Title
          <MyNormalInput className="browser-default" type="text" name="title" />
        </Label>

        <Label color="#8e929c" size htmlFor="description">
          Description
          <MyNormalTextArea
            className="browser-default"
            rows="4"
            cols="50"
            name="description"
          />
        </Label>
        <ImgWrapper>
          <Label color="#8e929c" size htmlFor="image">
            Image
            <ImgDropAndCrop />
          </Label>
        </ImgWrapper>
      </MyForm>

      <BtnWrapper>
        <PrimaryBtn
          radius="5"
          color="#363837"
          background
          fontSize="1.5"
          width="100px"
        >
          Edit
        </PrimaryBtn>

        <PrimaryBtn
          id="modal"
          radius="5"
          color="#363837"
          fontSize="1.5"
          width="100px"
          onClick={onClose}
        >
          Close
        </PrimaryBtn>
      </BtnWrapper>
    </MySection>
  );
};

export default TeditForm;
