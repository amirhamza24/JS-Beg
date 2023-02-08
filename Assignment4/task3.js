function isLGSeven(number) {
    let difference = number - 7;

    if(typeof number !== 'number') {
        return 'Please input number';
    }

    else if(difference < 7) {
        return difference;
    }

    else {
        return number * 2;
    }
}

let anyNumber = -15;

let finalResult = isLGSeven(anyNumber);

console.log(finalResult);
