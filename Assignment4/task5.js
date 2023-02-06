function gemsToDiamond(num1, num2, num3) {

    let firstPerson = num1 * 21;
    let secondPerson = num2 * 32;
    let thirdPerson = num3 * 43;

    let totalDiamond = firstPerson + secondPerson + thirdPerson;

    if(totalDiamond >= 1000) {
        return totalDiamond - 2000;
    }

    else {
        return totalDiamond;
    }
}

let person1 = 20;
let person2 = 200;
let person3 = 50;

let finalDiamond = gemsToDiamond(person1, person2, person3);

console.log(finalDiamond);