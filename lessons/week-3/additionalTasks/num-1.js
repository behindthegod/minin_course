const groceries = {
    "Orange Juice": {
        price: 1.5,
        discount: 10,
    },
    "Chocolate": {
        price: 2,
        discount: 0,
    },
}

const shoppingBag = [
    {product: 'Chocolate', quantity: 3},
    {product: 'Orange Juice', quantity: 23},
]

function getTotalPriceOfShoppingBag(shoppingBag) {
    let res = 0;
    shoppingBag.forEach(el => {
        let price = groceries[el.product].price;
        let discount = groceries[el.product].discount;
        let priceOfDiscount = price - (price * discount / 100);
        let amount = el.quantity;
        res += priceOfDiscount * amount;
    })
    return res;
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05