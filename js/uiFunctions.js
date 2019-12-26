import { showProducts } from './animations';

/**
 *
 * Display products
 *
 */

const displayProducts = function(parentEl) {
  parentEl.innerHTML = '';
  const markup = `<div class="productContainer">
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
                    </div>
                    <a href="#" class="showMore__button" id="coffeeShowMore__button"
                        >Prikazi jos</a
                    >
                    <!-- End of tea products -->
                    </div>`;
  parentEl.insertAdjacentHTML('beforeend', markup);
  showProducts();
};

export { displayProducts };
