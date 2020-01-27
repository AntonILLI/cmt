//custom Input component for form field

import React from "react";
import { Field, FieldArray } from "formik";

function Input({ className, valid, error, value, ...props }) {
  return <Field className={className} {...props} />;
}

export const ArrayInput = ({ className, valid, error, value, ...props }) => {
  return <FieldArray className={className} {...props} />;
};

export default Input;
