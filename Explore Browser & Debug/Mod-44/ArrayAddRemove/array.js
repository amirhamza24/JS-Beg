const products = [
    { name: 'Laptop', price: 3200, brand: 'Len', color: 'Silver' },
    { name: 'Phone', price: 7000, brand: 'HTC', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'yellow' },
    { name: 'Sunglass', price: 300, brand: 'Ray', color: 'Black' },
    { name: 'Camera', price: 9000, brand: 'Canon', color: 'Gray' }
];

const newProduct = {name: 'Webcam', price: 700, brand: 'Lal', color: 'Red'};

const addProduct = [...products, newProduct];
console.log(addProduct);

const remaining = products.filter(p => p.name !== 'Phone');
console.log(remaining);

