// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// browser-sync --server start --files "*/*"

// Get the header
var header = document.querySelector("header");


// Get the offset position of the navbar
var sticky = header.offsetTop;

var mobileMenu = document.querySelector(".homeLinksList")

function showMenu() {
  mobileMenu.style.display = "flex"
}
function closeMenu() {
  mobileMenu.style.display = "none"
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

