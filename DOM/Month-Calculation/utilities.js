function getInputFieldValueById(inputId) {
    const fieldValue = document.getElementById(inputId);
    const fieldValueString = fieldValue.value;
    const field = parseFloat(fieldValueString);
    return field;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}