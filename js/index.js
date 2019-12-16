import {
  homepageLoad,
  showMenu,
  closeMenu,
  productPageShow,
  productPageHide
} from './animations';

import { pageFunction } from './pageFunctions';
import { checkIfActive } from './checkActiveFunction';

/*
 * DOM elements
 */

const loader = document.querySelector('.loaderContainer');

// homepage elements
const homepage = document.getElementById('homepage');
const homepageShapeOne = document.querySelector('.homepage__shape-1');
const homepageShapeTwo = document.querySelector('.homepage__shape-2');
const homepageShapeThree = document.querySelector('.homepage__shape-3');
const homepageProductBtn = document.getElementById('homepageProductBtn');

/**
 *
 *  Object that contains homepage elements
 *
 */

const homepageObject = {
  homepageShapeOne,
  homepageShapeTwo,
  homepageShapeThree
};

// product elements
const productpage = document.getElementById('productpage');

const productpageObject = {
  productpage
};
/**
 *
 *  Object that contains product page elements
 *
 */

// header elements
const openNavBtn = document.querySelector('.burgerNav');
const shoppingCart = document.querySelector('.shoppingCart');
const shoppingCartImage = document.getElementById('shoppingCartImage');
const logoImage = document.getElementById('logoImage');

// sidebar elements
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

/*
 * Object with dom elements that are associated with menu, we pass the object into functions where we perform actions on those elements
 */
const sideBarAnimationObject = {
  sideBarMenu,
  closeNavBtn,
  openNavBtn,
  shoppingCart,
  homeBtn,
  aboutBtn,
  productBtn,
  shopBtn,
  galleryBtn,
  contactBtn,
  baristaImg,
  filterImg,
  grinderImg,
  tamperImg,
  machineImg,
  copyright
};

/**
 *
 * Sidebar functions
 *
 */

// Show sidebar menu
openNavBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu(sideBarAnimationObject);
});

// Hide sidebar menu
closeNavBtn.addEventListener('click', function(e) {
  e.preventDefault();
  closeMenu(sideBarAnimationObject);
});

/*
 * Sidebar navigation functionality
 */

const pages = [homepage, productpage];

homeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  // If homepage is allready active we just close the sidebar menu
  if (checkIfActive(pages) === homepage) {
    closeMenu(sideBarAnimationObject);
  } else {
    if (active === productpage) {
      productPageHide(productpageObject);
    }
    changeImageSrc(logoImage, './img/Logo.svg');
    changeImageSrc(shoppingCartImage, './img/cart.svg');
    closeMenu(sideBarAnimationObject);
    removeClass(active);
    addClass(homepage);
    changeBurgerColor('whiteBurger', 'blackBurger');
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
  if (active === productpage) {
    closeMenu(sideBarAnimationObject);
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
  pageFunction(active, productpage, imageObject, changeClassObject);
  closeMenu(sideBarAnimationObject);
  productPageShow(productpageObject);
};
