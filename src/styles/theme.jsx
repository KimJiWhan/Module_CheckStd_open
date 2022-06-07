import { css } from "styled-components";
// import from VECTOR WEB (2021)

const colors = {
  white: "#ffffff",
  black: "#232323",
  blue: "#003875",
  gray_1: "#707070",
  gray_2: "#9cafb8",
};
// how to use : ${({ theme }) => theme.colors.white};

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 320,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
// how to use : ${({ theme }) => theme.media.phone` mobile ver code comes here `;

const theme = {
  colors,
  media,
};

export default theme;