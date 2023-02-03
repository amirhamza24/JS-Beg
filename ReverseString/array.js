function reverseMaker(text) {

    let reverse = '';

    for(let i = text.length-1; i >= 0; i--) {

        reverse = reverse + text[i];

        console.log(text[i], reverse);
    }

    return reverse;
}

var myString = 'I am a good Boy';

var reversed = reverseMaker(myString);

console.log(reversed);