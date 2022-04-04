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

Hi. I'm reviewing my code to see if I could clean it up and organize it. I need to make it more structured and organized. I renamed the classes to make them more usable across the pages. I added more layout scss files based on my restructuring. One I set up was the container. Hernandez set up generic styles for the container (wrapper). I was having problem with background images. I will have to check to see why this is happening tomorrow.

Acknowledgement:

- [Simon Hernandez](https://github.com/simonhernandez/scootMultiPage): I like how he structured his HTML code.

Resources:

- [Build an Accordion Menu Using HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/)

### 03/30/2022

Hi. I'm back. I was working on another project. My goal is to get the page organized in the first level of styling and the navbar menu.

### 03/31/2022

Good afternoon. I'm working on the header today. I want to get this sidebar done. I was able to get the sidebar set up and styled. I will finish tomorrow.

Resources:

- [How To: Side Navigation](https://www.w3schools.com/howto/howto_js_sidenav.asp)

### 04/01/2022

Hi! I'm back again working on my page. I got my sidebar to work and styled. I did spend some unsure time about whether I should use jQuery or JS when I wanted to add page overlay. Left that alone. Then I got stuck on why my button text wouldn't center. Found the solution: padding, 0px. I was able to get the styling done for the tablet and desktop navbar. I may need to readjust some of the media queries tomorrow.

Resources:

-[Simple CSS Text Won't Center in a Button](https://stackoverflow.com/questions/2883373/simple-css-text-wont-center-in-a-button)

### 04/02/2022
Hi. Happy Saturday. I got a late start today. I would like to move onto the other sections. I was able to add the backgrounds to the heros on the other pages. I'm learning that sometimes I do too much instead of using fewer lines of code that will handle the job I want to do. 

### 04/03/2022
Hi. Today my goal is to work on my About page and hopefully Careers page. 

### 04/04/2022 
Hi. Happy Monday afternoon! My goal today is to focus on finishing the home page and working on the About page. 

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
