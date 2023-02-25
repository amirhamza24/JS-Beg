function addThree(num1, num2, num3 = 7) {
    return num1 + num2 + num3;
}

const a = 5;
const b = 6;
const c = 9;

const sum = addThree(a, b, c);
console.log(sum);