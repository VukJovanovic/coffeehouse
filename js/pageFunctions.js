import {
  removeClass,
  addIndexClass,
  changeClass,
  changeImageSrc
} from './helperFunctions';

const pageFunction = function(activePage, toggledEl, imageObj, changeClassObj) {
  removeClass(activePage);
  addIndexClass(toggledEl);
  changeImageSrc(imageObj);
  changeClass(changeClassObj);
};

/**
 *
 *  Homepage functions
 *
 */
const logoImage = document.getElementById('logoImage');
const shoppingCartImage = document.getElementById('shoppingCartImage');
const openNavBtn = document.querySelector('.burgerNav');

const homePageFunction = function(activeEl) {
  const imageObject = {
    imgs: [logoImage, shoppingCartImage],
    srcs: ['./img/Logo.svg', './img/cart.svg']
  };
  const changeClassObject = {
    element: openNavBtn,
    addClass: 'whiteBurger',
    removeClass: 'blackBurger'
  };
  pageFunction(activeEl, homepage, imageObject, changeClassObject);
};

/**
 *
 * Content container functions
 *
 */

const contentContainerFunction = function(activeEl) {
  const imageObject = {
    imgs: [logoImage, shoppingCartImage],
    srcs: ['./img/logo-black.svg', './img/shopping-cart-black.svg']
  };
  const changeClassObject = {
    element: openNavBtn,
    addClass: 'blackBurger',
    removeClass: 'whiteBurger'
  };
  pageFunction(activeEl, contentContainer, imageObject, changeClassObject);
};

export { homePageFunction, contentContainerFunction };
