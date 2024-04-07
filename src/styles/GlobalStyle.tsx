import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --color-white :#ffffff;
  --color-white-mercury :#e7e7e7;
  --color-river-bed: #4b5563;
  --color-silver:#c5c5c5;
  --color-godGray: #181818;
  --color-black-filter: #000000ad;

  --shadow-primary: 0px 0px 19px -4px #000000;

  --border-radius-bottom-large: 0px 0px 32px 32px;
  --border-radius-small: 8px;
  --border-radius-medium: 12px;
  --border-radius-large: 16px;

  --font-small-extra: 1rem;
  --font-small: 1.2rem;
  --font-medium: 1.8rem;
  --font-large: 2.2rem;
  --font-large-extra: 2.8rem;
  --font-header: 3.4rem;
}


  *,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


`;

export default GlobalStyles;
