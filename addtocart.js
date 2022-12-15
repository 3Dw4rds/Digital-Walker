const product= [
    {
    id: 0,
    image:'img/Note20.png',
    title: 'Galaxy Note20 Ultra',
    price: 45972,
},
{
    id: 1,
    image:'img/Note10.png',
    title: 'Galaxy Note 10',
    price: 18888,
},
{
    id: 2,
    image:'img/flip4.jpg',
    title: 'Samsung Galaxy Z Flip4',
    price: 62990,
},
{
    id: 3,
    image:'img/s20.jpg',
    title: 'Galaxy s20',
    price: 22980,
},
{
    id: 4,
    image:'img/ultra.jpg',
    title: 'Samsung Galaxy S22 Ultra',
    price: 72990,
},
{
    id: 5,
    image:'img/fold4.png',
    title: 'Samsung Z Fold4',
    price: 72803,
},
];
const categories= [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class= 'box'>
            <div class='img-box'>
                <img class= 'images' src= ${image}></img>
        </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>P ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.lenght==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
        document.getElementById('total').innerHTML = "P" + 0 + ".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price}= items;
            total=total+price;
            document.getElementById("total").innerHTML = "P" + total + ".00";
            return(
                `<div class= 'cart-item'>
                <div class= 'row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>P${price}.00</h2>`+
                "<i class='fa-solid fa-trash'onclick='delElement("+ (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
