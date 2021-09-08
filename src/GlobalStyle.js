import { createGlobalStyle } from "styled-components";
import background from "./backgroundimage.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("${background}");
  background-position: center;
  min-height: 115vh;
  font-family: 'Open Sans', sans-serif;
}
`;