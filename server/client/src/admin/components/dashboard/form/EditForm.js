//Edit Form  in event table modal

import React from "react";
import styled from "styled-components";
import ImgDropAndCrop from "./ImgDropAndCrop";
import { PrimaryBtn } from "../../globals/Button";
import { Title, Label, MyNormalInput, MyNormalTextArea } from "./InputStyles";

const MySection = styled.section`
  margin: 0;
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
const EditForm = ({ onClick }) => {
  return (
    <MySection>
      <Title color="#707173" size>
        Edit Form
      </Title>

      <MyForm name="contact">
        <Label color="#8e929c" size htmlFor="title">
          Title
          <MyNormalInput className="browser-default" type="text" name="title" />
        </Label>

        <Label color="#8e929c" size htmlFor="description">
          Description
          <MyNormalTextArea className="browser-default" name="description" />
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
          fontSize="2"
          width="100px"
        >
          Edit
        </PrimaryBtn>

        <PrimaryBtn
          id="modal"
          radius="5"
          color="#363837"
          fontSize="2"
          width="100px"
          onClick={onClick}
        >
          Close
        </PrimaryBtn>
      </BtnWrapper>
    </MySection>
  );
};

export default EditForm;
