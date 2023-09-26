let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "",
    },
  ],
};
for (let i of products.data) {
  //Creating  Card dom use kore
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div declaration
  //   let imgContainer = document.createElement("div");
  //   imgContainer.classList.add("image-container");
  //img tag
  //   let image = document.createElement("img");
  //   image.setAttribute("src", i.image);
  //   imgContainer.appendChild(image);
  //   card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name declaration
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price declaration
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button clicked wise class add/remove part
  let buttons = document.querySelectorAll(".button_value");
  buttons.forEach((button) => {
    //check if value equals innerText...jodi equal hoi taile add korbe otherwise remove korbe class
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  // all cards gulake pawar jonno select
  let elements = document.querySelectorAll(".card");
  //sob cards ke loop korbe
  elements.forEach((element) => {
    //display all cards by all button
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click korle ja ja hobe
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search_input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop korbe sob element ke
  elements.forEach((element, index) => {
    //check korbe user jei text ta diche seta actually ache ki/na
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially sob products display te show korbe
window.onload = () => {
  filterProduct("all");
};
