import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useFormikContext, useField } from "formik";

export const MultiSelect = ({ name, options, placeholder }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onChange = React.useCallback(
    option => {
      if (option !== null) {
        setFieldValue(
          field.name,
          option.map(item => item.value)
        );
      } else {
        return (option = []);
      }
    },
    [field.name, setFieldValue]
  );

  const getValue = () => {
    if (options) {
      return options.filter(option => field.value.indexOf(option.value) >= 0);
    } else {
      return [];
    }
  };

  const customTheme = theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "green"
      }
    };
  };

  return (
    <Select
      components={makeAnimated()}
      theme={customTheme}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isSearchable
      autoFocus
      noOptionMessage={() => "Not matching"}
      isMulti
    />
  );
};
