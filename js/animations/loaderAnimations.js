const showLoader = function(loader, logo) {
  TweenMax.to(loader, 0.4, { width: '100vw' });
  TweenMax.to(logo, 0.3, { opacity: 1, delay: 0.1 });
};

const hideLoader = function(loader, logo) {
  TweenMax.to(loader, 0.5, { width: '0', delay: 0.4 });
  TweenMax.to(logo, 0.7, { opacity: 0, delay: 0.1 });
};

export { showLoader, hideLoader };
