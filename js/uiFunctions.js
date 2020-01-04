import { showProducts } from './animations';
import {
  numberOfProducts,
  addClassTo,
  removeClassFrom
} from './helperFunctions';
/**
 *
 * Display products
 *
 */

const displayProducts = function(parentEl) {
  parentEl.innerHTML = '';
  const markup = `
                  <div class="productModal">
                  <div class="productModalContent">
                    <a id="productModalClose" href="#" class="productModalClose"
                      ><img src="./img/close.svg" alt=""
                    /></a>
                  </div>
                </div>
                <div class="productContainer">
                    <div class="productHeading">
                        <h2>Kafa</h2>
                        <p class="productSubheading">Pogledajte izbor nasih kafa</p>
                    </div>
                    <!-- Coffee products -->
                    <div class="coffeeProducts">
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">espresso</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">ristretto</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">capucino</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard coffeeProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                    </div>
                    <a href="#" class="showMore__button" id="coffeeShowMore__button"
                        >Prikazi jos</a
                    >
                    <!-- End of coffee products -->

                    <!-- Tea products -->
                    <div class="productHeading">
                        <h2>Caj</h2>
                        <p class="productSubheading">Pogledajte izbor nasih cajeva</p>
                    </div>
                    <div class="teaProducts">
                        <div class="productCard teaProductCard">
                        <div class="productCard__title">espresso</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard teaProductCard">
                        <div class="productCard__title">ristretto</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard teaProductCard">
                        <div class="productCard__title">capucino</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                        <div class="productCard teaProductCard">
                        <div class="productCard__title">latte</div>
                        <div class="productCard__button">
                            <p>pogledajte vise</p>
                            <img src="./img/arrow-right-black.svg" alt="" />
                        </div>
                        </div>
                    </div>
                    <a href="#" class="showMore__button" id="teaShowMore__button"
                        >Prikazi jos</a
                    >
                    <!-- End of tea products -->
                    </div>`;
  parentEl.insertAdjacentHTML('beforeend', markup);
  showProducts();
};

// Show more products
const showMoreProducts = function(
  products,
  toggledBtn,
  numberOfActiveElements,
  className
) {
  if (numberOfActiveElements.length <= products.length) {
    let productsLength = numberOfProducts();

    let delay = 0.2;
    for (let i = productsLength; i < productsLength + productsLength; i++) {
      if (products[i]) {
        TweenMax.to(products[i], 0.7, {
          display: 'block',
          opacity: 1,
          delay: delay
        });
        delay = delay + 0.1;
      }
    }

    //   adding class to elements that are added when we click on show more btn
    addClassTo(
      products,
      productsLength,
      productsLength + productsLength,
      className
    );
  }
};

// Hide products function
const hideProducts = function(products) {
  let productsLength = numberOfProducts();
  for (let i = productsLength; i < products.length; i++) {
    TweenMax.to(products[i], 1, {
      display: 'none',
      opacity: 0
    });
  }

  // remove visible class from all products that are not visible when page loads, only on show more btn
  //   removeClassFrom(products, productsLength, products.length);
};

export { displayProducts, showMoreProducts, hideProducts };
