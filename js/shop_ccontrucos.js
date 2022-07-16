// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1

function buy(id) {

    let buyItem = products.find(o => o.id === id);

    console.log(buyItem);
    cartList.push(buyItem);
    console.log(cartList);

}

//for(let i=0; i <=products.length;i++){
//  console.log(products[i]);









//products.forEach(element => console.log(element));
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array


// Exercise 2
function cleanCart() {
    cart = [];

    let total  = document.getElementById("total_price");
    let bodyList = document.getElementById("cart_list");
    total.innerHTML = 0;
    bodyList.innerHTML = "No products selected";
    //console.log(cart);

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let list = cartList.length;
    let i = 0;
    let totalPrice = 0;
    for (i; i < list; i++) {
        totalPrice += cartList[i].price;

    } return totalPrice;
    console.log(totalPrice);

}



// Exercise 4


function generateCart() {

    for (let i = 0; i<cartList.length; i++){
        let found = cart.find((prod) => prod.id === cartList[i].id);
        
        if(found === cartList[i]){
            let prodIndex = cart.indexOf(found);
            cart[prodIndex].quantity++;
        }else{
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
    }
}


    /*
       for (let i = 0; i < cartList.length; i++) {
    let found = cart.find((item) => item.id == cartList[i].id);
     if (found == undefined) {
       let obj = cartList[i];
       obj.quantity = 1;
       cart.push(obj);
     } else {
       let positionOfItem = cart.indexOf(found);
       cart[positionOfItem].quantity++;
    }
   }
 }*/


    /*
    for (let product of cartList) {
		let foundIndex,
			found = cart.find((item, index) => {
				foundIndex = index;
				return item.id == product.id;
			});

		// found ? cart[foundIndex].quantity++ : (cart.push(product), (cart[cart.length - 1].quantity = 1));
		// El operador ternario es menos legible

		if (found) {
			cart[foundIndex].quantity++;
		} else {
			cart.push(product);
			cart[cart.length - 1].quantity = 1;
		}
	}
 } */




    /*
	// Using the "cartlist" array that contains all the items in the shopping cart,
	// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

	// To do @here posibilidad de hacerlo con otros métodos de array

	for (let product of cartList) {
		let foundIndex,
			found = cart.find((item, index) => {
				foundIndex = index;
				return item.id == product.id;
			});

		// found ? cart[foundIndex].quantity++ : (cart.push(product), (cart[cart.length - 1].quantity = 1));
		// El operador ternario es menos legible

		if (found) {
			cart[foundIndex].quantity++;
		} else {
			cart.push(product);
			cart[cart.length - 1].quantity = 1;
		}
	}
 } 
 
 
 
 *//* { 
        cartList[0].quantity = 1;
        cart.push(cartList[0]);


     for(let i = 1; i<cartList.length; i++){
        let j = 0;
        if(cartList[i].id === cart[j].id){
            ++cart[j].quantity;
        }else{
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
            ++j;
        }
     }
            }
          cartList.splice(0, 1);

            // itinerador de cartLIST

            for (let j = 0; j < cartList.length; j++) {
              if (cartList[j].id === cart[i].id) {
                ++cart[i].quantity;
                cartList.splice(j, 1);
                j--;
              }
            }
          }console.log(cart);

          */
        
      




    
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  



// Exercise 5
function applyPromotionsCart() {

    


for (let prod of cart){
    if (prod.id === 1 && prod.quantity >= prod.offer.number){
        
        prod.price = prod.price - (prod.price * prod.offer.percent/100);
    }
    if (prod.id === 3 && prod.quantity >= 10){
        prod.price = prod.price - (prod.price * prod.offer.percent/100);
    }

}
    

}

    //promo 1 oil 3 oli -preu -10 euros

    //   if id=1 and quantity>=3 / price=10

        //promo 10 prod cakes  -preu -2/3

        //  if (id= 1+ id=5) quantity>=10 / price= -2/3

/*
// const PROMO1 = [];
            cart.forEach(promo1);
            function promo1(item){
              
                    if(item.id === 1 && item.quantity >= 3){
                        item.price=10;
                        let promo1Price = 0;
                        promo1Price += item.price;
                        promoCalc.push(promo1Price);
                    }
                }
            

            cart.forEach(promo2);
        

            function promo2 (item){


                const  arrayOne = [];
                const  arrayTwo = [];


                if(item.id === 3){
                   
                    arrayOne.push(item);
                }else if(item.id === 1){
                    
                    arrayTwo.push(item);
                }
                if(arrayOne.length=== 0){
                    let x ={quantity: 0,
                            price: 0};
                    arrayOne.push(x);
                }else if(arrayTwo.length === 0){
                    let y ={quantity: 0,
                        price: 0};
                    arrayTwo.push(y);
                }
                
            
           
        

               let discountTotal = 0;
            let quantityTotal = arrayOne[0].quantity + arrayTwo[0].quantity;
            if (quantityTotal >= 10){
                let suma = (arrayOne[0].price * arrayOne[0].quantity) + 
            (arrayTwo[0].price * arrayTwo[0].quantity);
                let promo2Price= (suma *2)/3;
                promoCalc.push(promo2Price);
                for(let x of promoCalc){
                discountTotal += x;}
                console.log(discountTotal);
            }}
        }
        */
                   


   // const PROMO1 = [];






    /*let discount = 0;
    cartList.forEach(addition);

        let itemPrice = cartList[i].price * cartList[i].quantity 
        let discount = 0;
    

    let subTotal = totalPrice - discount;*/
    // Apply promotions to each item in the array "cart"


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let total  = document.getElementById("total_price");
    let bodyList = document.getElementById("cart_list");
 
    generateCart();
     total.innerHTML = calculateTotal();

    for(prod of cart){

        bodyList.innerHTML += toString(prod);
 
    }
    function toString(prod){
        return `<tr>
        <th scope="row">${prod.name}</th>
        <td>${prod.price}</td>
        <td>${prod.quantity}</td>
        <td>${prod.quantity * prod.price}</td>
      </tr>`
    }

    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}