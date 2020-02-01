//media query ajustments function

import { css } from "styled-components";

export const sizes = {
  giant: 1440,
  desktop: 1024,
  tablet: 760,
  phone: 420
};

//acumulator return object which is ...props and css() function grab ...props
//em based on divided 16
export const screenSmallerThan = Object.keys(sizes).reduce(
  (accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {}
);
