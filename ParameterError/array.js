function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Please Enter a Number";
    }

    return num1 + num2;
}

let sum = add(12, 45);

console.log(sum);