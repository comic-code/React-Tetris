import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #282a36;
    --blue: #8be9fd;
    --blueDark: #2e384e;
    --gray: #bfbfbf;
    --green: #50fa7b;
    --pink: #ff80bf;
    --purple: #bd93f9;
    --red: #ff5555;
    --white: #F8F8F2;
    --yellow: #f1fa8c;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    color: var(--white);
    background-color: var(--black);
    height: 100vh;
    padding: 1rem;
  }
`