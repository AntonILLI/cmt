//media query ajustments function

import { css } from "styled-components";

export const sizes = {
  giant: 1440,
  desktop: 1024,
<<<<<<< HEAD
  tablet: 617,
  phone: 397
=======
  tablet: 760,
  phone: 420
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
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
