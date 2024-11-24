let products = [
  {
    productName: "Chicken Breast",
    category: "Chicken",
    price: "40",
    cart: "Add to Cart",
    image: "./images/food1.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Broccoli Salad",
    category: "Salad",
    price: "50",
    cart: "Add to Cart",

    image: "./images/food4.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Biryani",
    category: "Biryani",
    price: "40",
    cart: "Add to Cart",

    image: "./images/blg6.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Rubby Chicken ",
    category: "Chicken",
    price: "40",
    cart: "Add to Cart",

    image: "./images/food6.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Tandoori Chicken",
    category: "Chicken",
    price: "80",
    cart: "Add to Cart",

    image: "./images/food2.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Hummus",
    category: "Others",
    price: "20",
    cart: "Add to Cart",

    image: "./images/blg4.jpg",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Hongshao ",
    category: "Others",
    price: "40",
    cart: "Add to Cart",

    image: "./images/food3.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Caesor Salad ",
    category: "Salad",
    price: "40",
    cart: "Add to Cart",

    image: "./images/food5.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Japanese Vegetable ",
    category: "Others",
    price: "40",
    cart: "Add to Cart",

    image: "./images/blg5.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Chilli Noodles ",
    category: "Others",
    price: "40",
    cart: "Add to Cart",

    image: "./images/blg3.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Air Fryer Beacon ",
    category: "Others",
    price: "40",
    cart: "Add to Cart",

    image: "./images/blg1.webp",
    cartBtn: "Add to Cart",
  },
  {
    productName: "Beef Steak",
    category: "Others",
    price: "40",
    cart: "Add to Cart",
    image: "./images/blg2.webp",
    cartBtn: "Add to Cart",
  },
];
products.forEach((product) => {
  
  // Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", product.category, "hide");
  //Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // image tag
  let image = document.createElement("img");
  image.setAttribute("src", product.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  //Product Name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = product.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = `$${product.price}`;

  container.appendChild(price);
  card.appendChild(container);

  let cartBtns = document.createElement("button");
  cartBtns.innerText = product.cartBtn;
  cartBtns.classList.add("cart-buttons");
  container.appendChild(cartBtns);
  document.getElementById("products").appendChild(card);
  console.log(card)
});

function filterProduct(value) {
  let butttons = document.querySelectorAll("#button-value");
  butttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
          button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  
  elements.forEach((element) => {
      if (value == "all") {
          element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
          element.classList.add("hide");
        }
    }
});

}

// Search button click
let searchButton = document.getElementById("search");
searchButton.addEventListener("click", () => {
  
  let searchInput = document.getElementById("search-input").value;
  let allProductNames = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
 
  // Loop through all product Names
  allProductNames.forEach((productName, index) => {
    //check if text includes the search value

    if (productName.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
      console.log(cards[index])
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});


//Initially display All Products
window.onload = () => {
  filterProduct("all");
};
