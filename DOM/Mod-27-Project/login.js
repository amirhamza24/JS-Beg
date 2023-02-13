// Step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    
    // Step-2: get the email address inside email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step-3: get Password
    // 3.a set is on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    

    // DANGER: do not verify email password on the client side
    // Step-4: verify email and password and check whether valid user or not
    if(email == 'sontan@baap.com' && password == 'secret') {
        //console.log("Valid User");
        
        window.location.href = 'bank.html';
    }

    else {
        //console.log('Invalid User');

        alert('Incorrect email or Password!!!');
    }
})