import {
  showMenu,
  closeMenu,
  contentContainerShow,
  contentContainerHide
} from './animations';

import { pageFunction } from './pageFunctions';
import { checkIfActive } from './checkActiveFunction';

const homepageImage1 = document.getElementById('homepageImage-1');
const homepageImage2 = document.getElementById('homepageImage-2');
const homepageImage3 = document.getElementById('homepageImage-3');

// optimizing images for mobile phones
window.addEventListener('load', function() {
  if (screen.width < 500) {
    homepageImage1.src = './img/homepageimage1-mobile.jpg';
    homepageImage2.src = './img/homepageimage2-mobile.jpg';
    homepageImage3.src = './img/homepageimage3-mobile.jpg';
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

/**
 *
 * Sidebar functions
 *
 */

// Show sidebar menu
const openNavBtn = document.querySelector('.burgerNav');
openNavBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});

// Hide sidebar menu
const closeNavBtn = document.querySelector('.closeSidebar');
closeNavBtn.addEventListener('click', function(e) {
  e.preventDefault();
  closeMenu();
});

/*
 * Sidebar navigation functionality
 */

const pages = [homepage, contentContainer];

homeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  // If homepage is allready active we just close the sidebar menu
  if (active === homepage) {
    closeMenu();
  } else {
    if (active === contentContainer) {
      homepagePageFunction(active);
    }
  }
});

const homepagePageFunction = function(active) {
  const imageObject = {
    imgs: [logoImage, shoppingCartImage],
    srcs: ['./img/Logo.svg', './img/cart.svg']
  };
  const changeClassObject = {
    element: openNavBtn,
    addClass: 'whiteBurger',
    removeClass: 'blackBurger'
  };
  pageFunction(active, homepage, imageObject, changeClassObject);
  closeMenu();
  contentContainerHide(contentContainerObject);
};
/**
 *
 *  Product page
 *
 */
const homepage = document.getElementById('homepage');

// show product page when button on sidebar is toggled
productBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  if (active === contentContainer) {
    closeMenu();
  } else {
    productPageFunctions(active);
  }
});

// show product page when button on homepage shape is toggled
homepageProductBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  productPageFunctions(active);
});
// show product page when product image is toggled
homepageShapeTwo.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  productPageFunctions(active);
});

// function that is in charge of showing product page
const productPageFunctions = function(active) {
  const imageObject = {
    imgs: [logoImage, shoppingCartImage],
    srcs: ['./img/logo-black.svg', './img/shopping-cart-black.svg']
  };
  const changeClassObject = {
    element: openNavBtn,
    addClass: 'blackBurger',
    removeClass: 'whiteBurger'
  };
  pageFunction(active, contentContainer, imageObject, changeClassObject);
  closeMenu();
  contentContainerShow(contentContainerObject);
};
