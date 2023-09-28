window.addEventListener("load",displayCart);
window.addEventListener("load",displayTotalPrice);
window.addEventListener("load",displayCartNumber);

var addcart = document.getElementById('addcartBtn');

addcart.onclick = function(){
	alert("The product is added to the cart!")
	var product = addcart.parentElement.parentElement;//class="productDescription"
	var productImg = document.getElementById('openImg').src;
	var title = product.getElementsByClassName('shop-item-title')[0].innerText;
	var qty = document.getElementById("Qty").value;
	var price = product.getElementsByClassName('shop-item-price')[0].innerText;
    price = parseFloat(price.slice(2));

	var finalprice = price * qty;
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));

    if (!productdata){
        localStorage.setItem('orderproduct', JSON.stringify([{imageSource: productImg, productTitle: title, productPrice:price, productQuantity: qty, productTotalPrice: finalprice}]));//set the item value into the array if the current array is empty
    }
    else {
        
        var count = 0;
        for (let i = 0; i < productdata.length; i++){
            if (productdata[i]){
                if (productdata[i].productTitle == title){
                    productdata[i].productQuantity = parseInt(productdata[i].productQuantity) + parseInt(qty);
                    productdata[i].productTotalPrice = parseInt(productdata[i].productTotalPrice) + parseInt(finalprice);
                    localStorage.setItem('orderproduct', JSON.stringify(productdata))
                }
                else{
                    count++;
                    continue;
                }
            }
            else{
                count++;
                continue;
            }
        }
        if (count == productdata.length){
            productdata.push({imageSource: productImg, productTitle: title, productPrice:price, productQuantity: qty, productTotalPrice: finalprice});
            localStorage.setItem('orderproduct',JSON.stringify(productdata));
        }
    }
    
    let cartNum = localStorage.getItem("cartNumber");
    cartNum = parseInt(cartNum);
    qty = parseInt(qty,10);
    if (cartNum){
        localStorage.setItem("cartNumber" , cartNum + qty);
    }
    else{
        localStorage.setItem("cartNumber" , qty);
    }

    displayCartNumber();
    displayCart();
    displayTotalPrice();
    
}




function displayCart(){
    var cartContent = document.getElementById('cart-table_modal');
    cartContent.innerHTML ="";
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));
    if (productdata){
        for (var i =0; i < productdata.length; i++){
            if (productdata[i]){
                var content = `<tr>
                <td id="cart-img-lbll"  ><img src="${productdata[i].imageSource}" alt="" style="width: 60px; clear: both;"></td>
                <td id="cart-title-lbll">${productdata[i].productTitle}</td>
                <td id="cart-price-lbll" class="cart_price">RM${productdata[i].productPrice}.00</td>
                <td id="cart-qty-lbll" class="cart_qty"  ><span id="decQty"class="setQtyBtn" onclick="decQuantity(${i});"><</span>
                ${productdata[i].productQuantity}<span id="incQty" class="setQtyBtn" onclick="incQuantity(${i});">></span></td>
                <td id="cart-price-lbll" class="cart_price">RM${productdata[i].productTotalPrice}.00</td>
                <td class="cancelproduct"><span id="timesSymbol" onclick="cancelProduct(${i});">&times;</span></td>
                </tr>
                `
                cartContent.innerHTML += content;
            }            
        }

    }
}


function decQuantity(index){
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));
    productdata[index].productQuantity--;
    if(productdata[index].productQuantity <1){
        return false;
    }
    productdata[index].productTotalPrice -=productdata[index].productPrice;
   

    let currentQty = parseInt(localStorage.getItem("cartNumber"));
    var quantityLeft = currentQty - 1;

    localStorage.setItem('orderproduct',JSON.stringify(productdata));
    localStorage.setItem('cartNumber',quantityLeft);
   
    displayCart();
    displayTotalPrice();
    displayCartNumber();
}
function incQuantity(index){
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));
    productdata[index].productQuantity++;
    productdata[index].productTotalPrice +=productdata[index].productPrice;
   

    let currentQty = parseInt(localStorage.getItem("cartNumber"));
    var quantityLeft = currentQty + 1;

    localStorage.setItem('orderproduct',JSON.stringify(productdata));
    localStorage.setItem('cartNumber',quantityLeft);
   
    displayCart();
    displayTotalPrice();
    displayCartNumber();
}
 
function cancelProduct(index){
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));
    let deleteQty = productdata[index].productQuantity;
    let currentQty = parseInt(localStorage.getItem("cartNumber"));
    var quantityLeft = currentQty - deleteQty;

    delete productdata[index];
    localStorage.setItem('orderproduct',JSON.stringify(productdata));
    localStorage.setItem('cartNumber',quantityLeft);
   
    displayCart();
    displayTotalPrice();
    displayCartNumber();
    document.getElementById("cartModal").style.display="block";
}
function displayTotalPrice(){
    var totalprice = 0;
    var priceContent = document.getElementById('price');
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));
    if (productdata){
        for (var i =0; i < productdata.length; i++){
            if (productdata[i]){
                totalprice += productdata[i].productTotalPrice;
            }
           
        }
    }
    
    var total = `<tr>
    <td id="totalprice">${totalprice}.00</td>
    </tr>
    `
    priceContent.innerHTML ="Total: RM" + total;
    localStorage.setItem("total price", totalprice);
}
function displayCartNumber(){
    let cartNum = localStorage.getItem("cartNumber");
    if(cartNum != 0){
        document.getElementById("cartNum").textContent = cartNum;
    }
    
}

function ckcout(){

    var totalprice = 0;
    var priceContent = document.getElementById('price');
    let productdata = JSON.parse(localStorage.getItem('orderproduct'));
    if (productdata){
        for (var i =0; i < productdata.length; i++){
            if (productdata[i]){
                totalprice += productdata[i].productTotalPrice;
            }
        }
    }
    if (totalprice == 0){
        alert("No item in cart.")
    }
    else{
        location.href='/checkout.html';
    }

}
