
let productdata = JSON.parse(localStorage.getItem('orderproduct'));
var totalprice = localStorage.getItem("total price");
for (var i =0; i < productdata.length; i++){
    if (productdata[i]){
        console.log("My product is"+JSON.stringify(productdata[i]));
        var content = `
        <ul class="cart-ul">
            <li>
                <div class="img-ckt">
                    <img src="${productdata[i].imageSource}" alt="${productdata[i].productTitle}" >
                </div>
            </li>
            <li>
                <div class="title-ckt">
                    ${productdata[i].productTitle}
                </div>
            </li>
            <li>
                <div class="price-ckt">
                    Price: RM ${productdata[i].productPrice}.00
                </div>
            </li>
            <li>
                <div class="qty-ckt">
                    Quantity: ${productdata[i].productQuantity}
                </div>
            </li>
            <li>
                <div class="ttl-ckt">
                    Sub Total: RM ${productdata[i].productTotalPrice}.00
                </div>
            </li>

        </ul>

        `
        var checkout =  document.getElementById('cart-list')
        checkout.innerHTML += content;
    }
}
price = parseFloat(totalprice);

price += 20.00;
var grandtotal = `<div class="grd-ckt">
                        <h5>Grand Total: RM ${price}.00 [Including Delivery fee: RM20.00]
                        </h5>
                 </div>
                `
var grd = document.getElementById('cart-list-total')
grd.innerHTML = grandtotal



