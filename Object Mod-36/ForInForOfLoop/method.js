// loop through an object using "for in, for of", object entries

const bottle = {
    color: 'Yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
}


// 3 ways to read object property
// bottle.color (use korbo)
// bottle['color']
// bottle[key] (use korbo)

// getting object property using loop "for of"
const keys = Object.keys(bottle);
for(const key of keys) {
    // console.log(key);
}

const keys = Object.keys(bottle);
for(const key of keys) {
    //console.log(bottle[key]);
}

// for in loop. 'most of the time eta use korbo'.. getting a object property name
for(const key in bottle) {
    //console.log(key);
}

// getting a object property value using "for in"
for(const key in bottle) {
    console.log(bottle[key]);
}