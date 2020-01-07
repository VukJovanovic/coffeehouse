import { showMenu, closeMenu } from '../animations/sidebarAnimations';
import { showLoader, hideLoader } from '../animations/loaderAnimations';
import _ from 'underscore';

const productsLoader = document.querySelector('.productsLoader');
const loaderImage = document.querySelector('.loaderImage');
window.addEventListener('load', function() {
  // Hide the loader on page load
  if (productsLoader) {
    hideLoader(productsLoader, loaderImage);
  }
});
