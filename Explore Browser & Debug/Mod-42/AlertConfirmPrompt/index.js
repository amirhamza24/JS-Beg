// alert
const showAlert = () => {
    alert('Payment Loading...')
}

// confirm
const payment2 = () => {
    // confirm('payment done?');

    const result = confirm('payment done?');
    
    if(result === true) {
        alert('YES, payment is ok.');
    }

    else {
        alert('SORRY. Payment first.');
    }
}

// prompt
const getInfo = () => {
    //prompt('What is your Name?');

    const name = prompt('What is your Name?');
    console.log(name);

    if(name === null) {
        alert('Please, enter your name first.');
    }

    else {
        alert('Welcome to this world.');
    }
}