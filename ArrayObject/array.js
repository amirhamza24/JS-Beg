function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(var i=0; i<phones.length; i++) {
        if(phones[i].price > cheapest.price) {
            cheapest = phones[i];
        }
    }

    return cheapest;
}


const phone = [
    {Name: 'Samsung', Camera: 66, storage: '64gb', price: 38000, color: 'Silver'},
    {Name: 'Iphone', Camera: 108, storage: '64gb', price: 88000, color: 'Silver'},
    {Name: 'Realme', Camera: 48, storage: '64gb', price: 24000, color: 'Silver'},
    {Name: 'Redmi', Camera: 48, storage: '64gb', price: 28000, color: 'Silver'},
    {Name: 'Oppo', Camera: 40, storage: '64gb', price: 25000, color: 'Silver'},
    {Name: 'OnePlus', Camera: 84, storage: '64gb', price: 50000, color: 'Silver'},
    {Name: 'Walton', Camera: 16, storage: '64gb', price: 18000, color: 'Silver'},
    {Name: 'HTC', Camera: 50, storage: '64gb', price: 30000, color: 'Silver'},
]

var mySelection = cheapestPhone(phone);

console.log(mySelection);