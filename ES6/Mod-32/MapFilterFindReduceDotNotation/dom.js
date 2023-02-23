//map
// const numbers = [2, 8, 4, 6, 3];

// function getDoubles(numbers) {
//     const output = [];
//     for(const number of numbers) {
//         const doubled = doubleIt(number);
//         output.push(doubled);
//     }
//     return output;
// }


// // function doubleIt(number) {
// //     return number * 2;
// // }

// const doubleIt = num => num * 2;

// const makeDouble = numbers.map(doubleIt);

// const makeDoubleDirect = numbers.map(num => num * 2);

// const result = getDoubles(numbers);
// console.log(result);
// console.log(makeDouble);
// console.log(makeDoubleDirect);

// const fiveTimes = [1,2,3,4,5].map(x => x * 5);
// console.log(fiveTimes);


const numbers = [12, 56, 87, 44];
const second = numbers.map(n => n/2);
const third = numbers.map(x => x/3);
//console.log(second);
//console.log(third);

const friends = ['Nayeem', 'Shohan', 'Sourov', 'Shuvon', 'Raju', 'Rakib'];
const firstLetter = friends.map(friend => friend[0]);
const nameLength = friends.map(friend => friend.length);
// console.log(firstLetter);
// console.log(nameLength);

const products = [
   { names : 'Samsung', id : 2, price : 30000},
   { names : 'Xiaomi', id : 4, price : 22000},
   { names : 'HTC', id : 3, price : 38000},
   { names : 'Oppo', id : 1, price : 19000},
];

// const items = products.map(product => console.log(product.names));
const items = products.map(product => product.names);
const prices = products.map(p => p.price);
//console.log(items);
//console.log(prices);

//friends.forEach(frid => console.log(frid));


// filter
const filterExample = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNum = filterExample.filter(filNum => filNum > 20);
const minNum = filterExample.filter(filMin => filMin < 10);
const even = filterExample.filter(evenNum => evenNum % 2 == 0);
// console.log(bigNum);
// console.log(minNum);
// console.log(even);

const electronics = [
    { brand : 'hp', brandName: "Laptop", brandPrice: 60000},
    { brand : 'Dell', brandName: "Desktop", brandPrice: 80000},
    { brand : 'LG', brandName: "Monitor", brandPrice: 32000},
    { brand : 'Samsung', brandName: "Monitor", brandPrice: 46000},
]

const expensive = electronics.filter(pElec => pElec.brandPrice > 50000);
//console.log(expensive);


// find
const fiveNumbers = [10, 12, 15, 18, 20, 30, 28, 55];
const fiveNum = fiveNumbers.find(nums => nums % 5 == 0);
const fiveNumAll = fiveNumbers.filter(nums => nums % 5 == 0); //using filter for checking filter vs find
const fiveElectronics = electronics.find(fiveElec => fiveElec.brandPrice > 40000)
// console.log(fiveNum);
// console.log(fiveNumAll);
// console.log(fiveElectronics);

//reduce
const reduceNumber = [1, 2, 3, 4, 5];
// const reduceTotal = reduceNumber.reduce((previous, current) => previous + current , 0);
// console.log(reduceTotal);
// reduce (accumulatorFunction, initial value)
// accumulator function use two parameters

const reduceTotal = reduceNumber.reduce((previous, current) => {
    //console.log(previous, current);
    return previous + current;
    
} , 0);
//console.log(reduceTotal);


// . dot notation
const student = {
    studentNames: 'abc',
    age: 19,
    class: 10,
    marks: {
        math: 87,
        physics: 88,
        chemistry: 64
    },
}

const marks = student.marks.math;
console.log(marks);
const chemistry = student['marks']['chemistry'];
console.log(chemistry);

const subject = 'physics';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
