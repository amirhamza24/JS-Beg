// bold text
document.getElementById('bold-text').addEventListener('click', function() {

    if(textAreaField().style.fontWeight == "700") {
        textAreaField().style.fontWeight = "400";
    }

    else {
        textAreaField().style.fontWeight = "700";
    }
})

// italic text
document.getElementById('italic-text').addEventListener('click', function() {
    
    // const textAreaField = document.getElementById('text-area-field');
    // const allText = textAreaField;

    if(textAreaField().style.fontStyle == "italic") {
        textAreaField().style.fontStyle = "normal";
    }

    else {
        textAreaField().style.fontStyle = "italic";
    }
})

// underline text
document.getElementById('under-text').addEventListener('click', function() {
    
    // const textAreaField = document.getElementById('text-area-field');
    // const allText = textAreaField;

    if(textAreaField().style.textDecoration == "underline") {
        textAreaField().style.textDecoration= "none";
    }

    else {
        textAreaField().style.textDecoration = "underline";
    }
})


// align section
// align left
document.getElementById('left-align').addEventListener('click', function() {
    textAreaField().style.textAlign = 'left';
})

// align center
document.getElementById('center-align').addEventListener('click', function() {
    textAreaField().style.textAlign = 'center';
})

// align right
document.getElementById('right-align').addEventListener('click', function() {
    textAreaField().style.textAlign = 'right';
})

// align justify
document.getElementById('justify-align').addEventListener('click', function() {
    textAreaField().style.textAlign = 'justify';
})


// increase or decrease fonts
document.getElementById('text-size').addEventListener('click', function(){
    const inputField = document.getElementById('text-size');
    const inputFieldString = inputField.value;
    const inputNumber = parseInt(inputFieldString);

    textAreaField().style.fontSize = inputNumber + 'px';
})


// uppercase lowercase
document.getElementById('upper-lower').addEventListener('click', function() {
    if(textAreaField().style.textTransform === "uppercase") {
        textAreaField().style.textTransform = "lowercase";
    }

    else {
        textAreaField().style.textTransform = "uppercase";
    }
})


// text color
document.getElementById('text-color').addEventListener('change', function() {
    const colorValueString = document.getElementById('text-color');
    const colorValue = colorValueString.value;
    textAreaField().style.color = colorValue;
})
