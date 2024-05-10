

function showSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex";
}
function hideSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="none";
}

let products ={
    data :[

        {
            productName:"Chicken Breast",
            category:"Chicken",
            price:"40",
            cart:"Add to Cart",
            image:"./images/food1.webp",
        },
        {
            productName:"Broccoli Salad",
            category:"Salad",
            price:"50",
            cart:"Add to Cart",

            image:"./images/food4.webp",   
        }
        ,{
            productName:"Jasmine Rice",
            category:"Biryani",
            price:"40",
            cart:"Add to Cart",

            image:"./images/blg6.webp",
        }
        ,{
            productName:"Rubby Chicken Curry",
            category:"Chicken",
            price:"40",
            cart:"Add to Cart",

            image:"./images/food6.webp",
        }
        ,{
            productName:"Tandoori Chicken",
            category:"Chicken",
            price:"80",
            cart:"Add to Cart",

            image:"./images/food2.webp",
        }
        ,{
            productName:"Hummus",
            category:"Others",
            price:"20",
            cart:"Add to Cart",

            image:"./images/blg4.jpg",
        }
        ,{
            productName:"Hongshao ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",

            image:"./images/food3.webp",
        },
        {
            productName:"Caesor Salad ",
            category:"Salad",
            price:"40",
            cart:"Add to Cart",

            image:"./images/food5.webp",
        }
        ,{
            productName:"Japanese Vegetable Skewers ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",

            image:"./images/blg5.webp",
        },
        {
            productName:"Chilli Peanut Noodles ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",

            image:"./images/blg3.webp",
        },
        {
            productName:"Air Fryer Beacon ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",

            image:"./images/blg1.webp",
        }
        ,{
            productName:"Beef Steak",
            category:"Others",
            price:"40",
            cart:"Add to Cart",

            image:"./images/blg2.webp",
        },
    ],
};

for (let i of products.data){
    // Create Card
    let card=document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card",i.category,"hide");
    //Image div
    let imgContainer=document.createElement("div")
    imgContainer.classList.add("image-container")
    // image tag 
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // Container
    let container=document.createElement("div");
    container.classList.add('container1');
    //Product Name
    let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productName.toUpperCase() ;
    container.appendChild(name);
    container.style.color="#efefef"
// price
let price=document.createElement('h6');
price.innerText="$" + i.price;
price.style.color="#efefef"
container.appendChild( price);

let cart=document.createElement("button");
cart.innerText="Cart" + i.category;
card.appendChild(container);
/// own 
// cart.appendChild(container);
// console.log(cart)

// console.log(container)
// console.log(card)
// end
 document.getElementById("products").appendChild(card)

}
//Parameter passed from  buttton (Parameter same as a category)
function filterProduct(value){
    //button class code
    let butttons=document.querySelectorAll(".button-value");
    butttons.forEach((button)=>{
        //check if value equals innerText
        if(value.toUpperCase()== button.innerText.toUpperCase()){
            button.classList.add("active")
        }else{
            button.classList.remove("active")
        }
    });
    //Select all cards
    let elements=document.querySelectorAll('.card')
    // loop through all cards
    elements.forEach((element)=>{
        if(value== "all"){
            element.classList.remove("hide");
        }else{
            //
            if(element.classList.contains(value)){
                //
                element.classList.remove("hide");
            }
            else{
                //
                element.classList.add('hide')
            }
        }
    })
}

document.getElementById('search').addEventListener("click", () => {
    // initialization
    let searchInput = document.getElementById("search-input").value.toUpperCase(); 
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    // Check if the search input is "ALL"
    if (searchInput === "ALL") {
        // Show all products if the search term is "all"
        cards.forEach((card) => {
            card.classList.remove("hide");
        });
    } else {
        elements.forEach((element, index) => {
            if (element.innerText.includes(searchInput)) {
                cards[index].classList.remove("hide");
            } else {
                cards[index].classList.add("hide");
            }
        });
    }
});


//Initially display All Products
window.onload=()=>{
    filterProduct("all")
}
