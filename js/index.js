// import {
//   showMenu,
//   closeMenu,
//   contentContainerShow,
//   contentContainerHide
// } from './animations';

import { pageFunction } from './pageFunctions';
import { checkIfActive } from './checkActiveFunction';

/*
 * DOM elements
 */

// homepage elements
/**
 *
 *    DOM elements
 *
 */
// Header elements
const openNavBtn = document.querySelector('.burgerNav');
const shoppingCart = document.querySelector('.shoppingCart');
const shoppingCartImage = document.getElementById('shoppingCartImage');
const logoImage = document.getElementById('logoImage');

//  Sidebar elements
const closeNavBtn = document.querySelector('.closeSidebar');
const sideBarMenu = document.querySelector('.sideBar__container');
const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const productBtn = document.getElementById('productBtn');
const shopBtn = document.getElementById('shopBtn');
const galleryBtn = document.getElementById('galleryBtn');
const contactBtn = document.getElementById('contactBtn');
const baristaImg = document.getElementById('baristaImg');
const filterImg = document.getElementById('filterImg');
const grinderImg = document.getElementById('grinderImg');
const tamperImg = document.getElementById('tamperImg');
const machineImg = document.getElementById('machineImg');
const copyright = document.querySelector('.sideBar__copyright');

/**
 *
 *    Show sidebar animation
 *
 */

const showMenu = function() {
  TweenMax.to(shoppingCart, 0.4, { opacity: 0 });
  TweenMax.to(openNavBtn, 0.4, { opacity: 0 });
  TweenMax.to(sideBarMenu, 0.4, { width: '30rem' });
  TweenMax.to(closeNavBtn, 0.4, { opacity: 1, delay: 0.5 });
  TweenMax.to(homeBtn, 0.4, { opacity: 1, delay: 0.6 });
  TweenMax.to(aboutBtn, 0.4, { opacity: 1, delay: 0.7 });
  TweenMax.to(productBtn, 0.4, { opacity: 1, delay: 0.8 });
  TweenMax.to(shopBtn, 0.4, { opacity: 1, delay: 0.9 });
  TweenMax.to(galleryBtn, 0.4, { opacity: 1, delay: 1 });
  TweenMax.to(contactBtn, 0.4, { opacity: 1, delay: 1.1 });
  TweenMax.to(baristaImg, 0.4, { opacity: 1, y: 0, delay: 0.6 });
  TweenMax.to(filterImg, 0.4, { opacity: 1, y: 0, delay: 0.7 });
  TweenMax.to(grinderImg, 0.4, { opacity: 1, y: 0, delay: 0.8 });
  TweenMax.to(tamperImg, 0.4, { opacity: 1, y: 0, delay: 0.9 });
  TweenMax.to(machineImg, 0.4, { opacity: 1, y: 0, delay: 1 });
  TweenMax.to(copyright, 0.4, { opacity: 1, y: 0, delay: 1 });
};

/**
 *
 *    Hide sidebar animation
 *
 */
const closeMenu = function() {
  TweenMax.to(copyright, 0.4, { opacity: 0, y: 5 });
  TweenMax.to(baristaImg, 0.4, { opacity: 0, y: 5 });
  TweenMax.to(filterImg, 0.4, { opacity: 0, y: 0, delay: 0.1 });
  TweenMax.to(grinderImg, 0.4, { opacity: 0, y: 0, delay: 0.2 });
  TweenMax.to(tamperImg, 0.4, { opacity: 0, y: 0, delay: 0.3 });
  TweenMax.to(machineImg, 0.4, { opacity: 0, y: 0, delay: 0.4 });
  TweenMax.to(contactBtn, 0.4, { opacity: 0, delay: 0.2 });
  TweenMax.to(galleryBtn, 0.4, { opacity: 0, delay: 0.25 });
  TweenMax.to(shopBtn, 0.4, { opacity: 0, delay: 0.3 });
  TweenMax.to(productBtn, 0.4, { opacity: 0, delay: 0.35 });
  TweenMax.to(aboutBtn, 0.4, { opacity: 0, delay: 0.4 });
  TweenMax.to(homeBtn, 0.4, { opacity: 0, delay: 0.45 });
  TweenMax.to(closeNavBtn, 0.4, { opacity: 0, delay: 0.5 });
  TweenMax.to(sideBarMenu, 0.4, { width: '0rem', delay: 0.7 });
  TweenMax.to(shoppingCart, 0.4, { opacity: 1, delay: 1 });
  TweenMax.to(openNavBtn, 0.4, { opacity: 1, delay: 1.1 });
};

const contentContainerShow = function(elements) {
  TweenMax.to(elements.contentContainer, 0.4, { width: '100vw' });
};

const contentContainerHide = function(elements) {
  TweenMax.to(elements.contentContainer, 1, { width: '0rem' });
};

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
// const openNavBtn = document.querySelector('.burgerNav');
openNavBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});

// Hide sidebar menu
// const closeNavBtn = document.querySelector('.closeSidebar');
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
