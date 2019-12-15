/**
 *
 *    page load animation
 *
 */
const homepageLoad = function(elements) {
  TweenMax.to(elements.homepageShapeOne, 0.3, { opacity: 1, x: 0 });
  TweenMax.to(elements.homepageShapeTwo, 0.3, { opacity: 1 });
  TweenMax.to(elements.homepageShapeThree, 0.3, { opacity: 1, x: 0 });
};

/**
 *
 *    Show sidebar animation
 *
 */

const showMenu = function(elements) {
  TweenMax.to(elements.shoppingCart, 0.4, { opacity: 0 });
  TweenMax.to(elements.openNavBtn, 0.4, { opacity: 0 });
  TweenMax.to(elements.sideBarMenu, 0.4, { width: '30rem' });
  TweenMax.to(elements.closeNavBtn, 0.4, { opacity: 1, delay: 0.5 });
  TweenMax.to(elements.homeBtn, 0.4, { opacity: 1, delay: 0.6 });
  TweenMax.to(elements.aboutBtn, 0.4, { opacity: 1, delay: 0.7 });
  TweenMax.to(elements.productBtn, 0.4, { opacity: 1, delay: 0.8 });
  TweenMax.to(elements.shopBtn, 0.4, { opacity: 1, delay: 0.9 });
  TweenMax.to(elements.galleryBtn, 0.4, { opacity: 1, delay: 1 });
  TweenMax.to(elements.contactBtn, 0.4, { opacity: 1, delay: 1.1 });
  TweenMax.to(elements.baristaImg, 0.4, { opacity: 1, y: 0, delay: 0.6 });
  TweenMax.to(elements.filterImg, 0.4, { opacity: 1, y: 0, delay: 0.7 });
  TweenMax.to(elements.grinderImg, 0.4, { opacity: 1, y: 0, delay: 0.8 });
  TweenMax.to(elements.tamperImg, 0.4, { opacity: 1, y: 0, delay: 0.9 });
  TweenMax.to(elements.machineImg, 0.4, { opacity: 1, y: 0, delay: 1 });
  TweenMax.to(elements.copyright, 0.4, { opacity: 1, y: 0, delay: 1 });
};

/**
 *
 *    Hide sidebar animation
 *
 */
const closeMenu = function(elements) {
  TweenMax.to(elements.copyright, 0.4, { opacity: 0, y: 5 });
  TweenMax.to(elements.baristaImg, 0.4, { opacity: 0, y: 5 });
  TweenMax.to(elements.filterImg, 0.4, { opacity: 0, y: 0, delay: 0.1 });
  TweenMax.to(elements.grinderImg, 0.4, { opacity: 0, y: 0, delay: 0.2 });
  TweenMax.to(elements.tamperImg, 0.4, { opacity: 0, y: 0, delay: 0.3 });
  TweenMax.to(elements.machineImg, 0.4, { opacity: 0, y: 0, delay: 0.4 });
  TweenMax.to(elements.contactBtn, 0.4, { opacity: 0, delay: 0.2 });
  TweenMax.to(elements.galleryBtn, 0.4, { opacity: 0, delay: 0.25 });
  TweenMax.to(elements.shopBtn, 0.4, { opacity: 0, delay: 0.3 });
  TweenMax.to(elements.productBtn, 0.4, { opacity: 0, delay: 0.35 });
  TweenMax.to(elements.aboutBtn, 0.4, { opacity: 0, delay: 0.4 });
  TweenMax.to(elements.homeBtn, 0.4, { opacity: 0, delay: 0.45 });
  TweenMax.to(elements.closeNavBtn, 0.4, { opacity: 0, delay: 0.5 });
  TweenMax.to(elements.sideBarMenu, 0.4, { width: '0rem', delay: 0.7 });
  TweenMax.to(elements.shoppingCart, 0.4, { opacity: 1, delay: 1 });
  TweenMax.to(elements.openNavBtn, 0.4, { opacity: 1, delay: 1.1 });
};

const productPageShow = function(elements) {
  TweenMax.to(elements.productpage, 0.4, { width: '100vw' });
};

const productPageHide = function(elements) {
  TweenMax.to(elements.productpage, 0.4, { width: '0rem' });
};

export { homepageLoad, showMenu, closeMenu, productPageShow, productPageHide };
