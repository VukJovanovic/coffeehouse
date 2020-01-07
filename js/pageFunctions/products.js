import { showMenu, closeMenu } from '../animations/sidebarAnimations';
import { showLoader, hideLoader } from '../animations/loaderAnimations';
import _ from 'underscore';

const productsLoader = document.querySelector('.productsLoader');
const loaderImage = document.querySelector('.loaderImage');
window.addEventListener('load', function() {
  // Hide the loader on page load
  if (productsLoader) {
    hideLoader(productsLoader, loaderImage);
  }
});

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
    showLoader(productsLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('/');
    }, 500);
  });
}

// Sidebar about us page
const aboutPageMenu = document.getElementById('aboutBtn');
aboutPageMenu.addEventListener('click', function(e) {
  e.preventDefault();
  showLoader(productsLoader, loaderImage);
  setTimeout(function() {
    window.location.replace('/about.html');
  }, 500);
});

// Sidebar products page
const sidebarProductsBtn = document.getElementById('productBtn');
if (sidebarProductsBtn) {
  sidebarProductsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeMenu();
  });
}
