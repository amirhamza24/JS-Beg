// plus and minus work for this function
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease == true) {
        newCaseNumber = previousCaseNumber + 1;
    }

    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}

// update value added a new function
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function() {
    
    // without function
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    
    // const newCaseNumber = previousCaseNumber + 1;
    // caseNumberField.value = newCaseNumber;

    // function calling for plus
    const newCaseNumber = updateCaseNumber(true);

    // const caseTotalPrice = newCaseNumber * 59;

    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

    // Added new value through function
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})



document.getElementById('btn-case-minus').addEventListener('click', function() {

    // without function
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    
    // const newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;

    // function Calling for minus
    const newCaseNumber =  updateCaseNumber(false);

    // const caseTotalPrice = newCaseNumber * 59;

    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

    // Added new value through function
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})