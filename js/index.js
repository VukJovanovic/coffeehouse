import {
  showMenu,
  closeMenu,
  contentContainerShow,
  contentContainerHide
} from './animations';

import { homePageFunction, contentContainerFunction } from './pageFunctions';
import { checkIfActive } from './checkActiveFunction';
import { displayProducts, showMoreProducts } from './uiFunctions';
// import { checkHeader } from './scrollAnimation';

const homepageImage1 = document.getElementById('homepageImage-1');
const homepageImage2 = document.getElementById('homepageImage-2');
const homepageImage3 = document.getElementById('homepageImage-3');

// displaying different images for mobile phones
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
const homepage = document.getElementById('homepage');
const contentContainer = document.getElementById('contentContainer');
const pages = [homepage, contentContainer];

homeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  // If homepage is allready active we just close the sidebar menu
  if (active === homepage) {
    closeMenu();
  } else {
    if (active === contentContainer) {
      homePageFunction(active);
      closeMenu();
      contentContainerHide();
    }
  }
});

/**
 *
 *  Product page
 *
 */

// show product page when button on sidebar is toggled
productBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  if (active === contentContainer) {
    closeMenu();
  } else {
    contentContainerFunction(active);
    closeMenu();
    contentContainerShow();
    displayProducts(contentContainer);
  }
});

// show product page when button on homepage shape is toggled
homepageProductBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  contentContainerFunction(active);
  contentContainerShow();
  displayProducts(contentContainer);
});
// show product page when product image is toggled
homepageShapeTwo.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  contentContainerFunction(active);
  contentContainerShow();
  displayProducts(contentContainer);
});

// show more coffee products
contentContainer.addEventListener('click', function(e) {
  // if user clicke on show more button for coffe we show him more coffee products
  if (e.target.id === 'coffeeShowMore__button') {
    e.preventDefault();
    const coffeeProducts = document.querySelectorAll('.coffeeProductCard');
    const coffeeProductList = Array.from(coffeeProducts);
    const coffeeVisibleProducts = document.querySelectorAll('.visibleCoffee');
    const coffeeVisibleProductsList = Array.from(coffeeVisibleProducts);
    showMoreProducts(
      coffeeProductList,
      e.target,
      coffeeVisibleProductsList,
      'visibleCoffee'
    );
  }
});
