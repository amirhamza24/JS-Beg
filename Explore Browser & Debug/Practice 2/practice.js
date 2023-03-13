// problem 1
const numberPrompt = () => {
    const numString = prompt('Enter any number: ');
    const num = parseInt(numString);
    
    if(isNaN(num)) {
        alert('Sorry... Please enter number.');
    }

    else {
        const value = num + 200;
    
        console.log(value);
    }
}

// problem 2
const confirmButton = () => {
    const result = confirm("Do you want to see the location of your website?");

    if(result === true) {
        console.log(window.location.href);
        console.log('done');
    }

    else {
        console.log('confirm first');
    }
}