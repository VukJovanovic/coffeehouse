// Function that checks in list of elements if one of them have a class active and if thes is one it returs it
const checkIfActive = function(pages) {
  let temp;
  pages.forEach(page => {
    if (page.classList.contains('active')) {
      temp = page;
    }
  });
  return temp;
};

export { checkIfActive };
