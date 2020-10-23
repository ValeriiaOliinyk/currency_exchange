import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

p {
  margin-top: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
`;

export default GlobalStyle;
