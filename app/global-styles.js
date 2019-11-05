import { createGlobalStyle } from 'styled-components';
// import { fontFaces } from 'theme/typography';

// const createFontFaces = () => {
//   return fontFaces.map(font => `
//     @font-face {
//       font-family: ${font.fontFamily};
//       font-style: ${font.fontStyle};
//       font-weight: ${font.fontWeight};
//       src: ${font.src};
//     }
//   `);
// }

const GlobalStyle = createGlobalStyle`
  // @import url('https://fonts.googleapis.com/css?family=Montserrat:900,700&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.text.main};
  }

  body {
    font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    // font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    // font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    // font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    // font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

`;

export default GlobalStyle;
