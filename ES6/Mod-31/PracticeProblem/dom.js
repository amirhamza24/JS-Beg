// Module 31

// practice problem 1.1
const math = (x,y,z) => x*y*z;

const result = math (3, 3, 3);
//console.log(result);


// practice problem 1.2
const problem2 = `I am Web Developer
I Love to code
I Love to eat Biriyani`;

//console.log(problem2);


// practice problem 1.3
const problem3 = (a , b = 10) => a + b;

const defaultParameter = problem3(20);
//console.log(defaultParameter);


// practice problem 2
const problem4 = (arr) => {
    const newArr = [];

    for(let i = 0; i<arr.length; i++) {
        if(arr[i].length % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const arr1 = ['Sakib', 'Roni', 'Rakib', 'Sagor', 'Robi'];

const namesOfFriends = problem4(arr1);
//console.log(namesOfFriends);


// practice problem 3
const getAvgOfSqr = (array) => {

    const newArrSum= [];
    let sum = 0;            

    for (let i = 0; i < array.length; i++) {
        newArrSum.push(array[i] * array[i]);
    }

    for(let j = 0; j < newArrSum.length; j++) {
        sum = sum + newArrSum[j];
    }

    const avgSum = sum / newArrSum.length;
  
    return avgSum;
};

const array = [1, 2, 3, 4, 5];
const avgOfSqr = getAvgOfSqr(array);
//console.log(avgOfSqr); 


// practice problem 4
const getAddArr = (array1, array2) => {
    const newAddArr = [...array1, ...array2];
    const largestNum = Math.max(...newAddArr);
    return largestNum;

}


const array1 = [2, 7, 4, 10, 30, 43];
const array2 = [4, 1, 47, 5, 53, 42];
const resultArr = getAddArr(array1, array2);
console.log(resultArr);
