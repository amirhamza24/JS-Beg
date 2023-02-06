function findingBadData(numbers) {
    let count = 0;

    for(let i = 0; i < numbers.length; i++) {
        let element = numbers[i];

        if(element < 0) {
            count++;
        }
    }

    return count;
}

let inputNumbers = [-4, -9, -5, -33, -55];

let finalBadData = findingBadData(inputNumbers);

console.log(finalBadData);
  
  
