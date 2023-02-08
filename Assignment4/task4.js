function findingBadData(numbers) {
    let count = 0;

    if (!Array.isArray(numbers)) {
        return 'Please input array'
    }

    for(let i = 0; i < numbers.length; i++) {
        let element = numbers[i];

        if(element < 0) {
            count++;
        }
    }

    return count;
}

let arr = [-4, -9, -5, -33, -55];

let totalBadData = findingBadData(arr);

console.log(totalBadData);
