// keys, values, entries, delete, seal freeze

const bottle = {
    color: 'Yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
}

// get a object property, that's mean object a ki ki property ache shudhu seta =>
const keys = Object.keys(bottle);
//console.log(keys);

// get a object property value, that's mean object a property value dekhabe =>
const values = Object.values(bottle);
//console.log(values);

// getting property and property value both by using "entries" 
const pair = Object.entries(bottle);
//console.log(pair);

// if delete any property then use delete keyword, for example
delete bottle.isCleaned;
//console.log(bottle);

// using "seal". eta use korle tar por theke kono property delete ba add kora jabena..
Object.seal(bottle);
// console.log(bottle);

// adding new property
bottle.height = 12;
// console.log(bottle);

// kono property er value change korte hole =>
bottle.price = 1000;
// console.log((bottle));

// using "freeze". eta korle kono property ba value change, delete ba add kichui kora jabena
Object.freeze(bottle);
// console.log((bottle));
