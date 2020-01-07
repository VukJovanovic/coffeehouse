import { showMenu, closeMenu } from '../animations/sidebarAnimations';
import { showLoader, hideLoader } from '../animations/loaderAnimations';
import _ from 'underscore';

const aboutLoader = document.querySelector('.aboutLoader');
const loaderImage = document.querySelector('.loaderImage');
window.addEventListener('load', function() {
  // Hide the loader on page load
  if (aboutLoader) {
    hideLoader(aboutLoader, loaderImage);
  }
});

// Heder DOM elements
const header = document.querySelector('.header');
const burgerNav = document.querySelector('.burgerNav');
const headerCart = document.getElementById('shoppingCartImage');
const headerLogo = document.getElementById('logoImage');
// Changing header style on scroll and making it fixed on the top
const checkHeader = _.throttle(() => {
  // Detect scroll position
  let scrollPosition = Math.round(window.scrollY);

  // If we scrolled we add class to our navigation bar
  if (scrollPosition > 1) {
    header.classList.add('headerScroll');
    burgerNav.classList.remove('whiteBurger');
    burgerNav.classList.add('blackBurger');
    headerLogo.src = './img/logo-black.svg';
    headerCart.src = './img/shopping-cart-black.svg';
  } else {
    header.classList.remove('headerScroll');
    burgerNav.classList.remove('blackBurger');
    burgerNav.classList.add('whiteBurger');
    headerLogo.src = './img/Logo.svg';
    headerCart.src = './img/cart.svg';
  }
}, 300);

window.addEventListener('scroll', checkHeader);

/**
 *
 * Sidebar functions
 *
 */

// Show sidebar menu
const openNavBtn = document.querySelector('.burgerNav');
if (openNavBtn) {
  openNavBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showMenu();
  });
}

// Close sidebar menu
const closeNavBtn = document.querySelector('.closeSidebar');
if (closeNavBtn) {
  closeNavBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeMenu();
  });
}

// Sidebar home page button
const sidebarHomeBtn = document.getElementById('homeBtn');
if (sidebarHomeBtn) {
  sidebarHomeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // if the user is already on the homepage we just close the menu
    showLoader(aboutLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('/');
    }, 500);
  });
}

// Sidebar about us page
const aboutPageMenu = document.getElementById('aboutBtn');
aboutPageMenu.addEventListener('click', function(e) {
  e.preventDefault();
  closeMenu();
});

// Sidebar products page
const sidebarProductsBtn = document.getElementById('productBtn');
if (sidebarProductsBtn) {
  sidebarProductsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showLoader(aboutLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('/products.html');
    }, 500);
  });
}
