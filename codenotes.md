### 03/18/2022

Today I am starting the a new project-- Scoot Website with 4 pages. My overall goal is to work on this project in a timely manner. I am thinking of using Bootstrap for this site in addition to Sass.

---

font-family: 'Lexend Deca', sans-serif;
font-family: 'Space Mono', monospace;

/_ Set the width of the sidebar to 250px and the left margin of the page content to 250px _/
function openNav() {
document.getElementById("mySidebar").style.width = "270px";

      }

      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";

      }



      @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Space+Mono:wght@700&display=swap');

// Variables
$yellow: hsl(40, 97%, 58%);
$dk-navy: hsl(216, 17%, 35%);
$dim-grey: hsl(217, 12%, 62%);
$lt-grey: hsl(212, 41%, 93%);
$snow-grey: hsl(214, 37%, 96%);
$lt-yellow: hsl(39, 100%, 94%);
$white: hsl(0, 0%, 100%);

$heading-font: 'Space Mono',
monospace;
$text-font: 'Lexend Deca',
sans-serif;
$weight-bold: 700;
$weight-regular: 400;

//Theme
$headings: $dk-navy;
$main-heading: $white;
$page-heading: $white;
$faq-text: $dk-navy;
$faq-bg: $snow-grey;
$faq-hover: $lt-yellow;
$accordion-icon: $yellow;
$jobs-bg: $snow-grey;
$body-text: $dim-grey;
$nav-text: $dim-grey;
$nav-text-hover: $yellow;
$app-bg: $lt-grey;
$button-bg: $yellow;
$button-text: $white;
$button-hover-border: $yellow;
$button-hover-text: $yellow;
$social-icon-bg: $yellow;

// Base styles
_,
_::before,
\*::after {
padding: 0;
margin: 0;
box-sizing: border-box;
outline: 1px solid black;
}

html {
font: 62.5%;
}

html,
body {
margin: 0;
padding: 0;
}

body {
font-family: $text-font;
font-size: 1.500em;
line-height: 2.5rem;
}

h1,
h2,
h3,
h4 {
font-family: $heading-font;
font-weight: $weight-bold;
}

h1 {
font-size: 5.6em;
line-height: 5.6rem;
letter-spacing: -2.5;
}

h2 {
font-size: 4.600em;
line-height: 4.8rem;
letter-spacing: -2.14;
}

h3 {
font-size: 4.00em;
line-height: 4.8rem;
letter-spacing: -1.79;
}

h4 {
font-size: 2.400em;
line-height: 2.8rem;
letter-spacing: -1.07;
}
