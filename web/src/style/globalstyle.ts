import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Mulish', sans-serif;
  }
  :root {
    --primary: #6324C6;
    --secondary: #2f3136;
    --white: #fff;
    --gray: #A7B0BE;
  }
`;