// Toggle The Cart
const cart = document.querySelector(".cart");

function toggleCart() {
  cart.classList.toggle("active");
}

// Add Items To The Cart
var all_products_json;
let productCart = [];
let itemsInCart = document.getElementById("cart-items");

let cartCount = document.querySelector(".cart-count");
let innerCartCount = document.querySelector(".inner-cart-count");
let headerPrice = document.querySelector(".header-price");
let bottomPrice = document.querySelector(".bottom-price");

function addToCart(id, btn) {
  productCart.push(all_products_json[id]);
  btn.classList.add("active");

  addCartItems();
  console.log(all_products_json[id]);
}

function addCartItems() {
  let items = "";
  let totalSum = 0;

  for (let i = 0; i < productCart.length; i++) {
    items += `
    <div class="item">
      <img src="${productCart[i].img}" alt="Product" />
      <div class="content">
        <h4>${productCart[i].name}</h4>
        <p class="price-cart">$${productCart[i].price}</p>
      </div>
      <button onclick="removeCartItem(${i})" class="delete-item">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    `;
    totalSum += parseFloat(productCart[i].price);
  }

  cartCount.innerHTML = `${productCart.length} `;
  innerCartCount.innerHTML = `${productCart.length} &nbsp; Items in Cart`;
  headerPrice.innerHTML = bottomPrice.innerText = `$${totalSum}`;
  itemsInCart.innerHTML = items;
}

function removeCartItem(idx) {
  productCart.splice(idx, 1);

  let addToCartBtns = document.querySelectorAll(".fa-cart-plus");

  for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].classList.remove("active");

    productCart.forEach((product) => {
      if (product.id == i) {
        addToCartBtns[i].classList.add("active");
      }
    });
  }

  addCartItems();
}

// Scroll Up
const scrollUp = document.querySelector(".back-to-top");
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
