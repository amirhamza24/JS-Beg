function mindGame(number) {
    
    let multiply = number * 3;
    let sum = multiply + 10;
    let divided = sum / 2;
    let subtract = divided - 5;

    return subtract;
}

let positiveNumber = 33;

let finalNumber = mindGame(positiveNumber);
console.log(finalNumber);