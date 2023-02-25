const products = [
    { phone: 'Xiaomi', price: 29000 },
    { laptop: 'Laptop', price: 53000 },
    { watch : 'Rolex', price: 5000},
    { bike: 'R15', price: 500000}
]

const final = products.find(product => product.price == 5000);
console.log(final);