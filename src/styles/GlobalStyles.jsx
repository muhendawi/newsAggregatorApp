import { createGlobalStyle } from "styled-components";

const GlobalSTyles = createGlobalStyle`
    :root {
  --color-background-main: #faf3ea;
  --color-background-secondary: #f5eadc;
  --color-background-third: "#f5eadb";
  --color-background-green-light: #b4dfcbbc;
  --color-background-green-extralight: #82968d99;
  --color-background-green-solid: #82968d;
  --color-background-greenish: #87968ff7;
  --color-text-green: #0d3c26;
  --color-text-greish-light: #f5eadc;
  --color-text-greyish-dark:#c3bbae;
  --color-text-green-light: #038247;
  --color-text-brown: #6b6255;
  --color-text-brown-light: #a69986;
  --color-text-brown-dark: #202a25;
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
ul {
  list-style: none;
}
/* Set core body defaults */
body {
  max-width: 1440px;
  margin: 0 auto;
  font-family: "Sorts Mill Goudy", serif;
  min-height: 100vh;
  line-height: 1.5;
  padding: 0 0.5rem;
  background-color: var(--color-background-main);
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

`;
export default GlobalSTyles;
