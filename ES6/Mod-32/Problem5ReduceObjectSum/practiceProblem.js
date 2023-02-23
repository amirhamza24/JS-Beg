// array object sum of age using for loop
const people = [
    { name: 'Meena', age: 20},
    { name: 'Rina', age: 15},
    { name: 'Suchorita', age: 22},
];

let reduceAge = 0;
for(const ageEach of people) {
    reduceAge = reduceAge + ageEach.age;
}
console.log(reduceAge);



// array object sum of age using reduce
const totalAgeReduce = people.reduce((previous, current) => {
    return previous + current.age;
}, 0);

console.log(totalAgeReduce);