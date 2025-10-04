const saleProducts = document.getElementById("sale-products");

fetch("script/items.json")
  .then((res) => res.json())
  .then((data) => {
    globalThis.all_products_json = data;
    console.log(data);
    data.forEach((product) => {
      if (product.old_price) {
        let salePercent = Math.ceil(
          ((product.old_price - product.price) / product.old_price) * 100
        );

        saleProducts.innerHTML += `
          <div class="product swiper-slide">
            <div class="icons">
              <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>

            <span class="sale-percent">-${salePercent}%</span>

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
              <p class="old-price">$${product.old_price}</p>
            </div>
          </div>
        `;
      }
    });
  });
