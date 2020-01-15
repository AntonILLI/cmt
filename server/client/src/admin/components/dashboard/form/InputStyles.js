//custom Input for styling
import styled, { css } from "styled-components";
import Input, { NormalInput, NormalTextArea } from "./Input";

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.toggleBorder};
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  margin-left: 8rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  line-height: 2rem;
  max-width: 90em;
  /* margin-left: auto; */
  margin-right: auto;
  margin-top: 2rem;
  padding: 1rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
`;

// export const CodeWrapper = styled.pre`
//   font-family: "Montserrat", sans-serif;
//   font-size: 1.2rem;
//   line-height: 1.25rem;
//   background-color: hsl(210, 4%, 96%);
//   overflow: auto;
//   padding: 0.75rem;
//   margin: 0;
//   border-radius: 4px;

//   & strong {
//     margin-top: 2rem;

//     &:first-child {
//       margin-top: 0;
//     }
//   }
// `;

export const Title = styled.h1`
  font-size: ${props => (props.size ? "3rem" : "1.75rem")};
  line-height: 2.5rem;
  margin-top: 0;
  color: ${props => props.color};
`;

export const Label = styled.label`
  color: ${props => props.color};
  font-size: ${props => (props.size ? "1.6rem" : "1.4rem")};
  margin-top: 1.75rem;
  width: 100%;
`;

export const MyInput = styled(Input)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1.5rem;
  line-height: ${props => (props.height ? "5rem" : "1.5rem")};
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Submit = styled.button`
  width: 100% !important;
  height: 4rem !important;
  margin-top: 1.5rem !important;
  border-radius: 2px !important;
  background-color: rgb(24, 81, 187) !important;
  display: block !important;
  text-align: center !important;
  font-size: 1.25rem !important;
  line-height: 2rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  height: 3rem !important;
  white-space: nowrap !important;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem !important;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer !important;
  }

  &:disabled {
    cursor: pointer !important;
    background-color: rgb(163, 168, 173) !important;
    box-shadow: none !important;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed !important;
    }
  }
`;

export const MyNormalTextArea = styled(NormalTextArea)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 2rem;
  line-height: ${props => (props.height ? "5rem" : "1.5rem")};
  font-style: normal;
  font-weight: 400;
  width: 100%;
  height: 8rem;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }
`;

export const MyNormalInput = styled(NormalInput)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 2rem;
  line-height: ${props => (props.height ? "5rem" : "1.5rem")};
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }
`;
