function reverseWords(text) {
    let splitWords = text.split(' ');

    let result = [];
    for( var i = splitWords.length - 1; i >= 0; i--) {
        result.push(splitWords[i]);
    }

    const reversed = result.join(' ');
    return reversed;
}

var myString = 'I am a Good BOY';
var finalReversed = reverseWords(myString);
console.log(finalReversed);