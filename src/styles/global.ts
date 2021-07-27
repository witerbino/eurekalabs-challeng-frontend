import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #ebebeb;
    --primary-color: #ffca2c;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
`;