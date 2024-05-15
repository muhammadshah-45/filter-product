
function showSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex";
}
function hideSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="none";
}

let products ={
    data: [
            
        {
            productName:"Chicken Breast",
            category:"Chicken",
            price:"40",
            cart:"Add to Cart",
            image:"./images/food1.webp",
            cartBtn:"Add to Cart",
        },
        {
            productName:"Broccoli Salad",
            category:"Salad",
            price:"50",
            cart:"Add to Cart",
            
            image:"./images/food4.webp",  
            cartBtn:"Add to Cart", 
        }
        ,{
            productName:"Jasmine Rice",
            category:"Biryani",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/blg6.webp",
            cartBtn:"Add to Cart",
        }
        ,{
            productName:"Rubby Chicken ",
            category:"Chicken",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/food6.webp",
            cartBtn:"Add to Cart",
        }
        ,{
            productName:"Tandoori Chicken",
            category:"Chicken",
            price:"80",
            cart:"Add to Cart",
            
            image:"./images/food2.webp",
            cartBtn:"Add to Cart",
        }
        ,{
            productName:"Hummus",
            category:"Others",
            price:"20",
            cart:"Add to Cart",
            
            image:"./images/blg4.jpg",
            cartBtn:"Add to Cart",
        }
        ,{
            productName:"Hongshao ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/food3.webp",
            cartBtn:"Add to Cart",
        },
        {
            productName:"Caesor Salad ",
            category:"Salad",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/food5.webp",
            cartBtn:"Add to Cart",
        }
        ,{
            productName:"Japanese Vegetable ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/blg5.webp",
            cartBtn:"Add to Cart",
        },
        {
            productName:"Chilli Noodles ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/blg3.webp",
            cartBtn:"Add to Cart",
        },
        {
            productName:"Air Fryer Beacon ",
            category:"Others",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/blg1.webp",
            cartBtn:"Add to Cart",
        }
        ,{
            productName:"Beef Steak",
            category:"Others",
            price:"40",
            cart:"Add to Cart",
            
            image:"./images/blg2.webp",
            cartBtn:"Add to Cart",
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
        container.classList.add('container');
        //Product Name
        let name=document.createElement("h5");
        name.classList.add("product-name");
        name.innerText=i.productName.toUpperCase() ;
        container.appendChild(name);
        // container.style.color="#efefef"
        // console.log(container)
    // price
    let price=document.createElement('h6');
    price.innerText="$" + i.price;
    // price.style.color="#efefef"
    container.appendChild(price);
    card.appendChild(container);

    let cartBtns=document.createElement("button");
    cartBtns.innerText= i.cartBtn;
    cartBtns.classList.add("cart-buttons")
    container.appendChild(cartBtns);
    
    // My previous code that issued
    // ============finish this block ====== //
    // ========(SATRT) I did my work given below ======//
    // let cart=document.createElement("button");
    // cart.innerText="Cart" + i.category;
    
    // cart.appendChild(container);
    // console.log(cart)
    
    // console.log(card)
    // console.log(card)
    // ============= Here end i did mY work above=========///
    
     document.getElementById("products").appendChild(card);
    
    }


    //Parameter passed from  buttton (Parameter same as a category)
    function filterProduct(value){
        //button class code
        let butttons=document.querySelectorAll(".button-value");
        butttons.forEach((button)=>{
            //check if value equals innerText
            if(value.toUpperCase()== button.innerText.toUpperCase()){
                button.classList.add("active");
            }else{
                button.classList.remove("active")
            }
        });
        //  I had issued above code
        //Select all cards
        let elements=document.querySelectorAll(".card");
        // loop through all cards
        elements.forEach((element)=>{
            //display all cards on "all" button click
            
            if(value == "all"){
                element.classList.remove("hide");
            }else{
                //check if element contains category class
                if(element.classList.contains(value)){
                    //display element based on cotegory
                    element.classList.remove("hide");
                }
                else{
                    //hide other elements
                    element.classList.add('hide');
                }
            }
        });
    }
    
    // Search button click
    document.getElementById('search').addEventListener("click", () => {
        //  console.log("line190") ==mine i had issued that added extra code
        // initializations
        let searchInput = document.getElementById("search-input").value; 
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
       // Loop through all elements
    //    I had issued below code that was own code
      elements.forEach((element,index)=>{
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card 
            cards[index].classList.remove("hide");
        }else{
            //hide others
            cards[index].classList.add("hide");
        }
      });
    });
        
    
    
    
    
        // Mine code below ===============
    //     if (searchInput === "ALL") {
    //      console.log("line198");
    //         // Show all products if the search term is "all"
    //         cards.forEach((card) => {
    //             card.classList.remove("hide");
        
    
    //         });
    //     } else {
    //         elements.forEach((element, index) => {
    //             console.log({elementName:element.innerText.toLowerCase(),elementSearchName:searchInput})
    //             if (element.innerText.toLowerCase().includes(searchInput)) {
    //                 console.log('line209')
    
    //                 cards[index].classList.remove("hide");
    //             } else {
    //                 cards[index].classList.add("hide");
    //             }
    //         });
    //     }
    // });
    // I had issued above at preivous time.
    
    //Initially display All Products
    window.onload=()=>{    
        filterProduct("all");
        showSidebar();
    };