function maxArray(number) {
    let largest = number[0];

    for(var i = 0; i<number.length; i++) {
        let element = number[i];

        if(element > largest) {
            largest = element;
        }
    }

    return largest;
}

var arr = [123, 212, 421, 124, 534, 242, 634, 232];
var findMax = maxArray(arr);

console.log(findMax);