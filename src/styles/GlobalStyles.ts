import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
      color: var(--primary);
      letter-spacing: 0.0475296px;
  }
  html, body, #root {
      max-height: 100vh;
      max-width: 100vw;
      width: 100%;
      height: 100%;
      background: var(--background);
  }
   *, button, input {
       border: 0;
       background: none;
       font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
   }
   :root {
    --primary: #000000;
    --secondary: #FFFFFF;
    --tertiary: #A8A8A8;
    --purple-1: #794AFF;
    --purple-2: #9A4AFF;
    --gray-1: #F4F6FC;
    --background: #F9FAFE;
  }
`;
