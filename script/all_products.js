// Toggle Filter
const filter = document.querySelector(".filter");

function toggleFilter() {
  filter.classList.toggle("active");
}

// Render All Products:
let allProducts = document.getElementById("products-dev");

fetch("script/items.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      let salePercent = Math.ceil(
        ((product.old_price - product.price) / product.old_price) * 100
      );

      let old_price_paragraph = product.old_price
        ? `<p class="old-price">$${product.old_price}</p>`
        : "";

      let sale_percent_element = product.old_price
        ? `<span class="sale-percent">-${salePercent}%</span>`
        : "";

      allProducts.innerHTML += `
          <div class="product swiper-slide">
            <div class="icons">
              <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>

            ${sale_percent_element}

            <div class="product-img">
              <img src="${product.img}" alt="product1" />
              <img
                class="img-hover"
                src="${product.img_hover}"
                alt="product1"
              />
            </div>

            <h3 class="product-name">
              <a href="#">${product.name}</a>
            </h3>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_paragraph}
            </div>
          </div>
        `;
    });
  });
