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

export { pageFunction };
