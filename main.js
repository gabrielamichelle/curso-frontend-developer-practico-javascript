const menuEmail = document.querySelector('.navbar-right');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuBtn = document.querySelector('.mobileMenuBtn');
const moblieMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive');
});

mobileMenuBtn.addEventListener('click', () => {
  moblieMenu.classList.toggle('inactive');
});

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "CellPhone",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Internet",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

renderProducts(productList);

function renderProducts(productList) {
  for (const product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productimg = document.createElement("img");
    productimg.setAttribute("src", product.image);
    
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-card-info");
  
  
    const productInfoDiv = document.createElement("div");
    const price = document.createElement("p");
    price.innerText = `$${product.price}`;
    const name = document.createElement("p");
    name.innerText = `$${product.name}`;
  
  
  
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(price);
    productInfoDiv.appendChild(name);
  
    cardsContainer.appendChild(productCard);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);
  }
}