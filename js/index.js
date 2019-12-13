import { showMenu, closeMenu } from './animations';

/*
 * DOM elements
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
 * Object with dom elements that we pass into functions where we perform actions on those elements
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
