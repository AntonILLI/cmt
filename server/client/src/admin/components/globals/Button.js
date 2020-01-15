//custom reusable button component for many pages

import styled from "styled-components";
import { setColor } from "../globals/colors";

const setRem = (number = 16) => {
  return `${number / 16}rem`;
};
const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};
const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
};

const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `border:${width} ${style} ${color}`;
};
const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

export const PrimaryBtn = styled.button`
  border-radius: ${props => `${props.radius}px`};
  display: inline-block;
  background: ${props =>
    props.background ? setColor.primaryColor : setColor.removeColor};
  color: ${props => (props.color ? props.color : setColor.mainWhite)};
  text-transform: capitalize;
  font-size: ${props => (props ? `${props.fontSize}rem` : setRem(15))};
  font-weight: ${setRem(70)};
  width: ${props => props.width};
  ${setFont.main};
  padding: ${setRem(10)} ${setRem(20)};
  ${setBorder({ color: setColor.primaryColor })}
  ${setLetterSpacing(3)};
  ${setTransition()}
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${props =>
    `margin:${props.t || 0} ${props.r || 0}${props.b || 0}${props.l || 0}`};
  text-decoration: none;
  cursor: pointer;
`;
