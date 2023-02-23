const reduceNumbers = [1, 9, 17, 22];
let reduceSum = 0;
for(const reduceNum of reduceNumbers) {
    reduceSum = reduceSum + reduceNum;
}
console.log(reduceSum);

// add all array elements using reduce
const reduceTotal = reduceNumbers.reduce((previous, current) => previous + current, 0);
console.log(reduceTotal);