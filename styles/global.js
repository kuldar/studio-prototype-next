// Libraries
import { css } from 'styled-components'

// Document Styles
export const documentStyles = css`
  /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap'); */

  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.25;
    font-size: 16px;

    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip-ink: auto;
    text-decoration-skip: ink;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-size: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul, ol, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  input { font-family: 'Open Sans', sans-serif; }

  pre, code {
    font-family: 'Roboto Mono', monospace;
  }
`