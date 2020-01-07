// Header elements
const header = document.querySelector('.header');
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

export { showMenu, closeMenu };
