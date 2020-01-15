//custom Input component for form field

import React from "react";
import { Field } from "formik";

function Input({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export const NormalInput = ({ className, ...props }) => {
  return <input className={className} {...props} />;
};

export const NormalTextArea = ({ className, ...props }) => {
  return <textarea className={className} {...props} />;
};

export default Input;
