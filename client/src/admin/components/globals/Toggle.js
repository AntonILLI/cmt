//themes toggling button styling

import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <MySection>
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <img
          src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
          width="224"
          height="224"
          alt="Sun free icon"
          title="Sun free icon"
        />
        <img
          src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
          width="224"
          height="224"
          alt="Moon free icon"
          title="Moon free icon"
        />
      </ToggleContainer>
    </MySection>
  );
};
const MySection = styled.section`
  margin-left: 2rem;

  /* background-color: #15141b; */
`;
const ToggleContainer = styled.button`
  position: relative !important;
  display: flex !important;
  justify-content: space-between !important;
  background: ${({ theme }) => theme.gradient}!important;
  width: 8rem !important;
  height: 3.5rem !important;
  margin: 0 auto !important;
  outline: none !important;
  border-radius: 30px !important;
  border: 2px solid ${({ theme }) => theme.toggleBorder}!important;
  font-size: 0.5rem !important;
  padding: 0.5rem !important;
  overflow: hidden !important;
  cursor: pointer !important;

  img {
    max-width: 2.5rem !important;
    height: auto !important;
    transition: all 0.3s linear !important;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
