// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"animations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentContainerHide = exports.contentContainerShow = exports.closeMenu = exports.showMenu = void 0;

/**
 *
 *    DOM elements
 *
 */
// Header elements
var openNavBtn = document.querySelector('.burgerNav');
var shoppingCart = document.querySelector('.shoppingCart');
var shoppingCartImage = document.getElementById('shoppingCartImage');
var logoImage = document.getElementById('logoImage'); //  Sidebar elements

var closeNavBtn = document.querySelector('.closeSidebar');
var sideBarMenu = document.querySelector('.sideBar__container');
var homeBtn = document.getElementById('homeBtn');
var aboutBtn = document.getElementById('aboutBtn');
var productBtn = document.getElementById('productBtn');
var shopBtn = document.getElementById('shopBtn');
var galleryBtn = document.getElementById('galleryBtn');
var contactBtn = document.getElementById('contactBtn');
var baristaImg = document.getElementById('baristaImg');
var filterImg = document.getElementById('filterImg');
var grinderImg = document.getElementById('grinderImg');
var tamperImg = document.getElementById('tamperImg');
var machineImg = document.getElementById('machineImg');
var copyright = document.querySelector('.sideBar__copyright');
/**
 *
 *    Show sidebar animation
 *
 */

var showMenu = function showMenu() {
  TweenMax.to(shoppingCart, 0.4, {
    opacity: 0
  });
  TweenMax.to(openNavBtn, 0.4, {
    opacity: 0
  });
  TweenMax.to(sideBarMenu, 0.4, {
    width: '30rem'
  });
  TweenMax.to(closeNavBtn, 0.4, {
    opacity: 1,
    delay: 0.5
  });
  TweenMax.to(homeBtn, 0.4, {
    opacity: 1,
    delay: 0.6
  });
  TweenMax.to(aboutBtn, 0.4, {
    opacity: 1,
    delay: 0.7
  });
  TweenMax.to(productBtn, 0.4, {
    opacity: 1,
    delay: 0.8
  });
  TweenMax.to(shopBtn, 0.4, {
    opacity: 1,
    delay: 0.9
  });
  TweenMax.to(galleryBtn, 0.4, {
    opacity: 1,
    delay: 1
  });
  TweenMax.to(contactBtn, 0.4, {
    opacity: 1,
    delay: 1.1
  });
  TweenMax.to(baristaImg, 0.4, {
    opacity: 1,
    y: 0,
    delay: 0.6
  });
  TweenMax.to(filterImg, 0.4, {
    opacity: 1,
    y: 0,
    delay: 0.7
  });
  TweenMax.to(grinderImg, 0.4, {
    opacity: 1,
    y: 0,
    delay: 0.8
  });
  TweenMax.to(tamperImg, 0.4, {
    opacity: 1,
    y: 0,
    delay: 0.9
  });
  TweenMax.to(machineImg, 0.4, {
    opacity: 1,
    y: 0,
    delay: 1
  });
  TweenMax.to(copyright, 0.4, {
    opacity: 1,
    y: 0,
    delay: 1
  });
};
/**
 *
 *    Hide sidebar animation
 *
 */


exports.showMenu = showMenu;

var closeMenu = function closeMenu() {
  TweenMax.to(copyright, 0.4, {
    opacity: 0,
    y: 5
  });
  TweenMax.to(baristaImg, 0.4, {
    opacity: 0,
    y: 5
  });
  TweenMax.to(filterImg, 0.4, {
    opacity: 0,
    y: 0,
    delay: 0.1
  });
  TweenMax.to(grinderImg, 0.4, {
    opacity: 0,
    y: 0,
    delay: 0.2
  });
  TweenMax.to(tamperImg, 0.4, {
    opacity: 0,
    y: 0,
    delay: 0.3
  });
  TweenMax.to(machineImg, 0.4, {
    opacity: 0,
    y: 0,
    delay: 0.4
  });
  TweenMax.to(contactBtn, 0.4, {
    opacity: 0,
    delay: 0.2
  });
  TweenMax.to(galleryBtn, 0.4, {
    opacity: 0,
    delay: 0.25
  });
  TweenMax.to(shopBtn, 0.4, {
    opacity: 0,
    delay: 0.3
  });
  TweenMax.to(productBtn, 0.4, {
    opacity: 0,
    delay: 0.35
  });
  TweenMax.to(aboutBtn, 0.4, {
    opacity: 0,
    delay: 0.4
  });
  TweenMax.to(homeBtn, 0.4, {
    opacity: 0,
    delay: 0.45
  });
  TweenMax.to(closeNavBtn, 0.4, {
    opacity: 0,
    delay: 0.5
  });
  TweenMax.to(sideBarMenu, 0.4, {
    width: '0rem',
    delay: 0.7
  });
  TweenMax.to(shoppingCart, 0.4, {
    opacity: 1,
    delay: 1
  });
  TweenMax.to(openNavBtn, 0.4, {
    opacity: 1,
    delay: 1.1
  });
};

exports.closeMenu = closeMenu;

var contentContainerShow = function contentContainerShow(elements) {
  TweenMax.to(elements.contentContainer, 0.4, {
    width: '100vw'
  });
};

exports.contentContainerShow = contentContainerShow;

var contentContainerHide = function contentContainerHide(elements) {
  TweenMax.to(elements.contentContainer, 1, {
    width: '0rem'
  });
};

exports.contentContainerHide = contentContainerHide;
},{}],"helperFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeImageSrc = exports.changeClass = exports.addIndexClass = exports.removeClass = exports.checkIfActive = void 0;

// Function that checks in list of elements if one of them have a class active and if there is one it returs it
var checkIfActive = function checkIfActive(pages) {
  var temp;
  pages.forEach(function (page) {
    if (page.classList.contains('active')) {
      temp = page;
    }
  });
  return temp;
}; // removing classes from current active element


exports.checkIfActive = checkIfActive;

var removeClass = function removeClass(element) {
  element.classList.remove('active', 'zindexPlus');
  element.classList.add('zindexMinus');
}; // adding classes to an element that is being toggled from sidebar menu or from homepage buttons


exports.removeClass = removeClass;

var addIndexClass = function addIndexClass(element) {
  element.classList.add('active', 'zindexPlus');

  if (element.classList.contains('zindexMinus')) {
    element.classList.remove('zindexMinus');
  }
}; // Function for adding class to an element and removing other class


exports.addIndexClass = addIndexClass;

var changeClass = function changeClass(object) {
  object.element.classList.remove(object.removeClass);
  object.element.classList.add(object.addClass);
}; // Changing image src, we provide array of images and array of sources. They need to bee in order.


exports.changeClass = changeClass;

var changeImageSrc = function changeImageSrc(images) {
  for (var i = 0; i < images.imgs.length; i++) {
    images.imgs[i].src = images.srcs[i];
  }
};

exports.changeImageSrc = changeImageSrc;
},{}],"pageFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageFunction = void 0;

var _helperFunctions = require("./helperFunctions");

var pageFunction = function pageFunction(activePage, toggledEl, imageObj, changeClassObj) {
  (0, _helperFunctions.removeClass)(activePage);
  (0, _helperFunctions.addIndexClass)(toggledEl);
  (0, _helperFunctions.changeImageSrc)(imageObj);
  (0, _helperFunctions.changeClass)(changeClassObj);
};

exports.pageFunction = pageFunction;
},{"./helperFunctions":"helperFunctions.js"}],"checkActiveFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfActive = void 0;

// Function that checks in list of elements if one of them have a class active and if thes is one it returs it
var checkIfActive = function checkIfActive(pages) {
  var temp;
  pages.forEach(function (page) {
    if (page.classList.contains('active')) {
      temp = page;
    }
  });
  return temp;
};

exports.checkIfActive = checkIfActive;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _animations = require("./animations");

var _pageFunctions = require("./pageFunctions");

var _checkActiveFunction = require("./checkActiveFunction");

/*
 * DOM elements
 */
// homepage elements
var homepageShapeOne = document.querySelector('.homepage__shape-1');
var homepageShapeTwo = document.querySelector('.homepage__shape-2');
var homepageShapeThree = document.querySelector('.homepage__shape-3');
var homepageProductBtn = document.getElementById('homepageProductBtn');
/**
 *
 * Sidebar functions
 *
 */
// Show sidebar menu

var openNavBtn = document.querySelector('.burgerNav');
openNavBtn.addEventListener('click', function (e) {
  e.preventDefault();
  (0, _animations.showMenu)();
}); // Hide sidebar menu

var closeNavBtn = document.querySelector('.closeSidebar');
closeNavBtn.addEventListener('click', function (e) {
  e.preventDefault();
  (0, _animations.closeMenu)();
});
/*
 * Sidebar navigation functionality
 */

var pages = [homepage, contentContainer];
homeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var active = (0, _checkActiveFunction.checkIfActive)(pages); // If homepage is allready active we just close the sidebar menu

  if (active === homepage) {
    (0, _animations.closeMenu)();
  } else {
    if (active === contentContainer) {
      homepagePageFunction(active);
    }
  }
});

var homepagePageFunction = function homepagePageFunction(active) {
  var imageObject = {
    imgs: [logoImage, shoppingCartImage],
    srcs: ['./img/Logo.svg', './img/cart.svg']
  };
  var changeClassObject = {
    element: openNavBtn,
    addClass: 'whiteBurger',
    removeClass: 'blackBurger'
  };
  (0, _pageFunctions.pageFunction)(active, homepage, imageObject, changeClassObject);
  (0, _animations.closeMenu)();
  (0, _animations.contentContainerHide)(contentContainerObject);
};
/**
 *
 *  Product page
 *
 */


var homepage = document.getElementById('homepage'); // show product page when button on sidebar is toggled

productBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var active = (0, _checkActiveFunction.checkIfActive)(pages);

  if (active === contentContainer) {
    (0, _animations.closeMenu)();
  } else {
    productPageFunctions(active);
  }
}); // show product page when button on homepage shape is toggled

homepageProductBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var active = (0, _checkActiveFunction.checkIfActive)(pages);
  productPageFunctions(active);
}); // show product page when product image is toggled

homepageShapeTwo.addEventListener('click', function (e) {
  e.preventDefault();
  var active = (0, _checkActiveFunction.checkIfActive)(pages);
  productPageFunctions(active);
}); // function that is in charge of showing product page

var productPageFunctions = function productPageFunctions(active) {
  var imageObject = {
    imgs: [logoImage, shoppingCartImage],
    srcs: ['./img/logo-black.svg', './img/shopping-cart-black.svg']
  };
  var changeClassObject = {
    element: openNavBtn,
    addClass: 'blackBurger',
    removeClass: 'whiteBurger'
  };
  (0, _pageFunctions.pageFunction)(active, contentContainer, imageObject, changeClassObject);
  (0, _animations.closeMenu)();
  (0, _animations.contentContainerShow)(contentContainerObject);
};
},{"./animations":"animations.js","./pageFunctions":"pageFunctions.js","./checkActiveFunction":"checkActiveFunction.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64928" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/bundle.js.map