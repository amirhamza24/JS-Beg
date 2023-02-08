function evenOdd(str) {
    
    if (typeof str !== 'string') {
        return 'Please input string';
    }

    else if(str.length % 2 === 0) {
        return 'even';
    }

    else {
        return 'odd';
    }
}

let anyString = 'Phero';
let finalResult = evenOdd(anyString);
console.log(finalResult);
