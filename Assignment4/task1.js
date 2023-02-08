function mindGame(number) {

    if(typeof number !== 'number') {
        return 'Please input number';
    }
    
    let multiply = number * 3;
    let sum = multiply + 10;
    let divided = sum / 2;
    let subtract = divided - 5;

    return subtract;
}

let anyNumber = 33;
let finalResult = mindGame(anyNumber);
console.log(finalResult);
