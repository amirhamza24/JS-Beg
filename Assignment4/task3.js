function isLGSeven(number) {
    let difference = number - 7;

    if(difference < 0) {
        return difference;
    }

    else {
        return number * 2;
    }
}

let inputNumber = -15;
let finalResult = isLGSeven(inputNumber);

console.log(finalResult);