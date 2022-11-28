let shop = document.getElementById('shop')

let shopItemsData = [{
    id:"jjkd",
    name: "Casual shirts",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "img-1.jpg"
},
{
    id:"jjkdhja",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "img-2.jpg"
},
{
    id:"ajsjjjkd",
    name: "T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "img-3.jpg"
},
{
    id:"jieajkd",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "img-4.jpg"
}
];
console.log(shop);

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        return `
        <div class="item">
                <img width="220" src="img-1.jpg" alt=""> 
                <div class="details">
                    <h3>Casual Shirt</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="price-quantity">
                        <h4>$ 45</h4>
                        <div class="buttons">
                            <i class="bi bi-dash-lg"></i>
                            <div class="quantity">0</div>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
              </div>  
        `      
    }));
}

generateShop();