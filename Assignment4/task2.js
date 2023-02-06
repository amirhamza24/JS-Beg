function evenOdd(str) {
    
    if(str.length % 2 === 0) {
        return 'even';
    }

    else {
        return 'odd';
    }
}

let anyString = 'chatgpt';
let finalAns = evenOdd(anyString);

console.log(finalAns);