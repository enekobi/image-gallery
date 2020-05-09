import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';

export const theme = {
  fontFamily: "'Lato', 'Calibri', 'Arial', 'sans-serif'"
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <>
      {props.children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);
