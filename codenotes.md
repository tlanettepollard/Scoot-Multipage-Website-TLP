### 03/18/2022

Today I am starting the a new project-- Scoot Website with 4 pages. My overall goal is to work on this project in a timely manner. I am thinking of using Bootstrap for this site in addition to Sass. I changed my mind. I got frustrated that the offcanvas menu didn't work in Bootstrap, so I went back to Vanilla JS. I also looked up mor info about the best breakpoints to use. It said you should choose the breakpoint based on your design. Think about if your design changes from one column to two columns based on your device size. So, I was able to add all of the structure to the four html pages. I started some styling.

Resources:

- [What Media Query Breakpoints Should You Use? 2021](https://coder-coder.com/media-query-breakpoints/)
- [5 Steps to Implement Maintainable and Scalable Sass Theming in Complex Projects](https://medium.com/javascript-in-plain-english/5-steps-to-implement-maintainable-and-scalable-sass-theming-in-complex-projects-76bb6da0a8e6): very good article about how to organize your folder structure for Sass.

### 03/20/2022

Hi. Happy Sunday! Did some work on styling my header.

### 03/21/2022

Happy Monday! I realized that I had a perfect page to refer to for making the sidebar-- My portfolio page. I also found an article about using floating elements to help with the extra designs for this page. I got my sidebar to work. It opens, but now it isn't closing. Will try to work that out tomorrow. 

Resources:

- [How to Use Floating Elements to Improve Your Web Design](https://adwebstudiouae015.medium.com/how-to-use-floating-elements-to-improve-your-web-design-2393d1d4fd66)

### 03/22/2022
Hi, I'm back. I will be home for awhile, so that means more coding time for me. Today I want to figure out this issue with the close button. 

### 03/22/2022
Hi. I'm reviewing my code to see if I could clean it up and organize it. I need to make it more structured and organized. 

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

688px = 43em / 68.8em
767px = 47.938em/ 76.7em
768px = 48em/ 76.8em
992px = 62em/ 99.2em
1023px = 63.938em/102.3em
1024px = 64em/102.4em
1312px = 82em/ 131.2em
