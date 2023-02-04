function totalCost(products) {
    let sum = 0;
    for(var i=0; i<products.length; i++) {

        let totalQuantity = products[i].price * products[i].quantity;
        sum = sum + totalQuantity;
    }

    return sum;
}


const shoppingCart = [
    {Name: 'Shoe', price: 1200, quantity: 2},
    {Name: 'Shirt', price: 1600, quantity: 5},
    {Name: 'Pant', price: 2600, quantity: 4},
    {Name: 'Belt', price: 600, quantity: 3},
]

const expense = totalCost(shoppingCart);
console.log(expense);