// *** Hide Nav Menu on Scroll ***
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll
var previousScrollPosition = window.pageYOffset;
window.onscroll = function () { navScrollFunction() };

function navScrollFunction() {

    var currentScrollPosition = window.pageYOffset;

    if (previousScrollPosition > currentScrollPosition) {
        document.getElementById("nav-menu").style.top = "0";
    } else {
        document.getElementById("nav-menu").style.top = "-10vh";
    }

    previousScrollPosition = currentScrollPosition;
};



// *** Scroll Indicator ***
// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp

// When the user scrolls the page, execute myFunction 
// window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
    var pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (pageScroll / height) * 100;
    document.getElementById("myScrollIndicator").style.width = scrolled + "%";
};



// *** CSS Variables Site Theming + Component Variations with CSS Variables ***
// https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855 -->
// https://codepen.io/DavidAfonso/pen/XGjzeW
// https://codepen.io/ohansemmanuel/full/xYKgwE/
// https://codepen.io/ohansemmanuel/full/PQYzvv/
// https://codepen.io/DavidAfonso/pen/rRMdNR

const root = document.documentElement 
const themeBtns = document.querySelectorAll('.themes > button')

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate)
})

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'dark': 
      root.style.setProperty('--bg', '#c23616') 
      root.style.setProperty('--bg-text', '#f5f6fa')
      break
    case 'calm': 
       root.style.setProperty('--bg', '#0097e6')
       root.style.setProperty('--bg-text', '#f5f6fa')
      break
    case 'light':
      root.style.setProperty('--bg', '#f5f6fa')
      root.style.setProperty('--bg-text', '#c23616')
      break
    case 'original':
      root.style.setProperty('--bg', '#8c7ae6')
      root.style.setProperty('--bg-text', '#f5f6fa')
      break
  }
}
