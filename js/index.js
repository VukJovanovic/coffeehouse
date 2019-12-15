import {
  homepageLoad,
  showMenu,
  closeMenu,
  productPageShow,
  productPageHide
} from './animations';

/*
 * DOM elements
 */

const loader = document.querySelector('.loaderContainer');

// homepage elements
const homepage = document.getElementById('homepage');
const homepageShapeOne = document.querySelector('.homepage__shape-1');
const homepageShapeTwo = document.querySelector('.homepage__shape-2');
const homepageShapeThree = document.querySelector('.homepage__shape-3');

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
 * Loader
 *
 */

/*
 * Show sidebar menu
 */
openNavBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu(sideBarAnimationObject);
});

/*
 * Hide sidebar menu
 */
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
    closeMenu(sideBarAnimationObject);
    removeClass(active);
    addClass(homepage);
  }
});

/**
 *
 *  Product page
 *
 */
productBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const active = checkIfActive(pages);
  if (active === productpage) {
    closeMenu(sideBarAnimationObject);
  } else {
    closeMenu(sideBarAnimationObject);
    removeClass(active);
    addClass(productpage);
    productPageShow(productpageObject);
  }
});

/**
 *
 * Function that checks in list of elements if one of them have a class active and if thes is one it returs it
 *
 */
const checkIfActive = function(pages) {
  let temp;
  pages.forEach(page => {
    if (page.classList.contains('active')) {
      temp = page;
    }
  });
  return temp;
};

const removeClass = function(element) {
  element.classList.remove('active', 'zindexPlus');
  element.classList.add('zindexMinus');
};
const addClass = function(element) {
  element.classList.add('active', 'zindexPlus');
  if (element.classList.contains('zindexMinus')) {
    element.classList.remove('zindexMinus');
  }
};
