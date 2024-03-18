import { createGlobalStyle } from "styled-components";

import CaslonBold from "../fonts/LibreCaslonText-Bold.ttf";
import CaslonItalic from "../fonts/LibreCaslonText-Italic.ttf";
import CaslonRegular from "../fonts/LibreCaslonText-Regular.ttf";
import FranklinItalic from "../fonts/LibreFranklin-Italic-VariableFont_wght.ttf";
import FranklinRegular from "../fonts/LibreFranklin-VariableFont_wght.ttf";

const GlobalStyles = createGlobalStyle`
  /* Josh Comeau's global style as a kind of css reset */
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }

  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  /* Fonts */
  @font-face {
    font-family: 'Caslon';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${CaslonBold});
  }

  @font-face {
    font-family: 'Caslon';
    font-weight: normal;
    font-style: italic;
    font-display: ;: swap;
    src: url(${CaslonItalic});
  }

  @font-face {
    font-family: 'Caslon';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${CaslonRegular});
  }

  @font-face {
    font-family: 'Franklin';
    font-style: normal;
    font-display: swap;
    src: url(${FranklinRegular});
  }

  @font-face {
    font-family: 'Franklin';
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    src: url(${FranklinItalic});
  }

  /**
  CSS Costum Propreties
  */

  :root {
    --color-gray-50: hsl(210deg, 19%, 10%);
    --color-gray-100: hsl(210deg, 15%, 20%);
    --color-gray-200: hsl(210deg, 15%, 25%);
    --color-gray-300: hsl(210deg, 10%, 40%);
    --color-gray-400: hsl(210deg, 9%, 45%);
    --color-gray-500: hsl(210deg, 8%, 50%);
    --color-gray-600: hsl(210deg, 12%, 55%);
    --color-gray-700: hsl(210deg, 14%, 66%);
    --color-gray-800: hsl(210deg, 20%, 77%);
    --color-gray-900: hsl(210deg, 25%, 88%);
    --color-gray-1000: hsl(210deg, 25%, 96%);
    --color-white: hsl(0deg, 0%, 100%);
    --color-beige: #e9dfd1;
  /** https://www.happyhues.co/palettes/5*/
    --color-green-light: #f2f7f5;
    --color-green: #475d5b;
    --color-green-dark: #00473e;
    --color-pink-dark: #d8779a;
    --color-pink-light: #ffa8ba;
    --color-red: #fa5246;
    --color-yellow: #fa5246;

    --space-s: 0.5rem;
    --space-m: 1rem;
    --space-l: 1.5rem;
    --space-xl: 2rem;
  }


`;

export default GlobalStyles;
