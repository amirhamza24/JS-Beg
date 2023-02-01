function factorial(number) {
    var multi = 1;
    for(var i = 1; i <= number; i++) {
        multi = multi * i;
    }

    return  multi;
}

var num = 3;
var result = factorial(num);
console.log("Factorial of", num, "is = ", result);
