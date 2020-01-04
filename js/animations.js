import _ from 'underscore';
import { hideProducts } from './uiFunctions';
import { numberOfProducts, addClassTo } from './helperFunctions';
/**
 *
 *    DOM elements
 *
 */
// Header elements
const header = document.querySelector('.header');
const openNavBtn = document.querySelector('.burgerNav');
const shoppingCart = document.querySelector('.shoppingCart');
const shoppingCartImage = document.getElementById('shoppingCartImage');
const logoImage = document.getElementById('logoImage');

// header animations
// hide header
const hideHeader = function() {
  TweenMax.to(header, 0.4, {
    opacity: 0,
    display: 'none',
    delay: 0.5
  });
};

// show header
const showHeader = function() {
  TweenMax.to(header, 0.4, {
    opacity: 1,
    display: 'flex',
    delay: 0.8
  });
};

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

/**
 *
 *
 * Content container
 *
 */
const contentContainer = document.getElementById('contentContainer');
const contentContainerShow = function() {
  if (screen.width > 1280) {
    TweenMax.to(contentContainer, 0.4, {
      width: '100vw',
      padding: '20rem 10rem'
    });
  } else if (screen.width < 1280) {
    TweenMax.to(contentContainer, 0.4, {
      width: '100vw',
      padding: '20rem 7rem'
    });
  } else if (screen.width < 1024) {
    TweenMax.to(contentContainer, 0.4, {
      width: '100vw',
      padding: '20rem 5rem'
    });
  }

  // When we scroll on content container we want the header to have other style
  const checkHeader = _.throttle(() => {
    // Detect scroll position
    let scrollPosition = Math.round(contentContainer.scrollTop);

    // If we scrolled we add class to our navigation bar
    if (scrollPosition > 10) {
      document.querySelector('.header').classList.add('headerScroll');
    } else {
      document.querySelector('.header').classList.remove('headerScroll');
    }
  }, 300);
  // When we scroll we want to do some animations with the header
  contentContainer.addEventListener('scroll', checkHeader);
};

const contentContainerHide = function() {
  contentContainer.innerHTML = '';
  TweenMax.to(contentContainer, 1, { width: '0rem', padding: '0rem' });
};

/**
 *
 * Product page elements
 *
 * */

const showProducts = function() {
  const productPageHeading = document.querySelectorAll('.productHeading');
  const productCard = document.querySelectorAll('.productCard');
  const coffeeProducts = document.querySelectorAll('.coffeeProductCard');
  const teaProducts = document.querySelectorAll('.teaProductCard');
  const productBtn = document.querySelectorAll('.showMore__button');

  // show product heading
  TweenMax.to(productPageHeading, 0.3, { opacity: 1, delay: 0.8 });

  // show product cards
  let delay = 0.9;
  for (let i = 0; i < productCard.length; i++) {
    TweenMax.to(productCard[i], 0.6, {
      opacity: 1,
      delay: delay
    });
    delay = delay + 0.1;
  }

  // showing show more buttons
  TweenMax.to(productBtn, 0.5, { opacity: 1, delay: 1 });

  // Get number of products that should recive visible class based on screen size
  let productsLength = numberOfProducts();

  // adding classes to product cards that are visible when we load the product page
  addClassTo(coffeeProducts, 0, productsLength, 'visibleCoffee');
  addClassTo(teaProducts, 0, productsLength, 'visibleTea');

  // hide rest of the product cards based on screen width,
  // which we later show when we click on show more btn
  hideProducts(coffeeProducts);
  hideProducts(teaProducts);
};

const productModalShow = function() {
  const productModal = document.querySelector('.productModal');
  const productModalContent = document.querySelector('.productModalContent');
  if (screen.width > 1200) {
    TweenMax.to(productModal, 0.6, { width: '100vw', padding: '5rem 20rem' });
  } else if (screen.width < 1200 && screen.width > 1024) {
    TweenMax.to(productModal, 0.6, { width: '100vw', padding: '5rem 15rem' });
  } else if (screen.width <= 1024 && screen.width > 700) {
    TweenMax.to(productModal, 0.6, { width: '100vw', padding: '5rem 10rem' });
  } else if (screen.width <= 700) {
    TweenMax.to(productModal, 0.6, { width: '100vw', padding: '5rem 2rem' });
  }

  TweenMax.to(productModalContent, 0.6, { opacity: 1, delay: 0.7 });
};
const productModalHide = function() {
  const productModal = document.querySelector('.productModal');
  const productModalContent = document.querySelector('.productModalContent');
  TweenMax.to(productModalContent, 0.6, { opacity: 0 });
  TweenMax.to(productModal, 0.6, { width: '0', padding: '0', delay: 0.7 });
};

export {
  showMenu,
  closeMenu,
  contentContainerShow,
  contentContainerHide,
  showProducts,
  productModalShow,
  productModalHide,
  showHeader,
  hideHeader
};
