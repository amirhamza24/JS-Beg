//practice problem 1
const oddNumbers = [1, 3, 5, 7, 9];

function getEven(oddNumbers) {
    const evenFinalArr = [];
    for(const oddNumber of oddNumbers) {
        const evenAddSum = evenAdd(oddNumber);
        evenFinalArr.push(evenAddSum);
    }

    return evenFinalArr;
}

// using normal function
// function evenAdd(evenNum) {
//     return evenNum + 1;
// }

// using arrow function
const evenAdd = evenNum => evenNum + 1;

// using .map function and called another function
const makeEven = oddNumbers.map(evenAdd);

// using .map function
const makeEvenAnother = oddNumbers.map(evenNum => evenNum + 1)

const evenArr = getEven(oddNumbers);
console.log(evenArr);
console.log(makeEven);
console.log(makeEvenAnother);