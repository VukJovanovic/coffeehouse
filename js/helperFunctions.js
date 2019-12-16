// Function that checks in list of elements if one of them have a class active and if there is one it returs it
const checkIfActive = function(pages) {
  let temp;
  pages.forEach(page => {
    if (page.classList.contains('active')) {
      temp = page;
    }
  });
  return temp;
};

// removing classes from current active element
const removeClass = function(element) {
  element.classList.remove('active', 'zindexPlus');
  element.classList.add('zindexMinus');
};

// adding classes to an element that is being toggled from sidebar menu or from homepage buttons
const addIndexClass = function(element) {
  element.classList.add('active', 'zindexPlus');
  if (element.classList.contains('zindexMinus')) {
    element.classList.remove('zindexMinus');
  }
};
// Function for adding class to an element and removing other class
const changeClass = function(object) {
  object.element.classList.remove(object.removeClass);
  object.element.classList.add(object.addClass);
};
// Changing image src, we provide array of images and array of sources. They need to bee in order.
const changeImageSrc = function(imgs, src) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = src[i];
  }
};

export {
  checkIfActive,
  removeClass,
  addIndexClass,
  changeClass,
  changeImageSrc
};
