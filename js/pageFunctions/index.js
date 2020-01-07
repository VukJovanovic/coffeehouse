import { showMenu, closeMenu } from '../animations/sidebarAnimations';
import { showLoader, hideLoader } from '../animations/loaderAnimations';

const homepageImage1 = document.getElementById('homepageImage-1');
const homepageImage2 = document.getElementById('homepageImage-2');
const homepageImage3 = document.getElementById('homepageImage-3');

const homepageLoader = document.querySelector('.homepageLoader');
const loaderImage = document.querySelector('.loaderImage');
window.addEventListener('load', function() {
  // displaying different images for mobile phones
  if (screen.width < 500) {
    homepageImage1.src = './img/homepageimage1-mobile.jpg';
    homepageImage2.src = './img/homepageimage2-mobile.jpg';
    homepageImage3.src = './img/homepageimage3-mobile.jpg';
  }
  // hide loader after page loads
  if (homepageLoader) {
    hideLoader(homepageLoader, loaderImage);
  }
});

/*
 * DOM elements
 */

// homepage elements

const homepageShapeOne = document.querySelector('.homepage__shape-1');
const homepageShapeTwo = document.querySelector('.homepage__shape-2');
const homepageShapeThree = document.querySelector('.homepage__shape-3');
const homepageProductBtn = document.getElementById('homepageProductBtn');
const homepageAboutBtn = document.getElementById('homepageAboutBtn');
const homepageShopBtn = document.getElementById('homepageShopBtn');

// Homepage buttons and images (About us, Products, Shop) functionality
// When user clicks on first image on homepage
if (homepageShapeOne) {
  homepageShapeOne.addEventListener('click', function() {
    showLoader(homepageLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('http://127.0.0.1:8080/about.html');
    }, 500);
  });
}
// When user clicks on about button on homepage
if (homepageAboutBtn) {
  homepageAboutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showLoader(homepageLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('http://127.0.0.1:8080/about.html');
    }, 500);
  });
}

// When user clicks on products image we redirect to products page
if (homepageShapeTwo) {
  homepageShapeTwo.addEventListener('click', function() {
    showLoader(homepageLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('http://127.0.0.1:8080/products.html');
    }, 500);
  });
}
// When user clicks on products button on homepage
if (homepageProductBtn) {
  homepageProductBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showLoader(homepageLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('http://127.0.0.1:8080/products.html');
    }, 500);
  });
}
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
    closeMenu();
  });
}

// Sidebar about us page
const sidebarAboutBtn = document.getElementById('aboutBtn');
sidebarAboutBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showLoader(homepageLoader, loaderImage);
  setTimeout(function() {
    window.location.replace('http://127.0.0.1:8080/about.html');
  }, 500);
});

// Sidebar products page
const sidebarProductsBtn = document.getElementById('productBtn');
if (sidebarProductsBtn) {
  sidebarProductsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showLoader(homepageLoader, loaderImage);
    setTimeout(function() {
      window.location.replace('http://127.0.0.1:8080/products.html');
    }, 500);
  });
}
