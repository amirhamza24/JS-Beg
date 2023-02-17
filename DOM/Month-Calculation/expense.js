document.getElementById('btn-calculate').addEventListener('click', function() {

    const incomeField = getInputFieldValueById('income-field');

    const foodField = getInputFieldValueById('food-field');

    const rentField = getInputFieldValueById('rent-field');

    const clothField = getInputFieldValueById('cloth-field');

    // const incomeFieldValue = document.getElementById('income-field');
    // const incomeFieldValueString = incomeFieldValue.value;
    // const incomeField = parseFloat(incomeFieldValueString);

    // const foodFieldValue = document.getElementById('food-field');
    // const foodFieldValueString = foodFieldValue.value;
    // const foodField = parseFloat(foodFieldValueString);

    // const rentFieldValue = document.getElementById('rent-field');
    // const rentFieldValueString = rentFieldValue.value;
    // const rentField = parseFloat(rentFieldValueString);

    // const clothFieldValue = document.getElementById('cloth-field');
    // const clothFieldValueString = clothFieldValue.value;
    // const clothField = parseFloat(clothFieldValueString);

    const allExpense = foodField + rentField + clothField;
    
    const lastBalance = incomeField - allExpense;

    setTextElementValueById('total-expense', allExpense);

    setTextElementValueById('balance', lastBalance);

    // const totalExpenseValue = document.getElementById('total-expense');
    // totalExpenseValue.innerText = allExpense;

    // const balance = document.getElementById('balance');
    // balance.innerText = lastBalance;


    // (saveValue/income) * 100


    // saving amount
    document.getElementById('btn-save').addEventListener('click', function() {

    //const incomeField = getInputFieldValueById('income-field');

    const saveValue = getInputFieldValueById('save-field');

    const semiPercent = saveValue * lastBalance;
    const percentageValue = semiPercent / 100;
    const finalPercent = percentageValue.toFixed(2);

    setTextElementValueById('saving-amount', finalPercent);

    // remaining balance
    const remainingBalance = lastBalance - finalPercent;
    setTextElementValueById('remaining-balance', remainingBalance);
})
})

// document.getElementById('btn-save').addEventListener('click', function() {

//     const incomeField = getInputFieldValueById('income-field');

//     const saveValue = getInputFieldValueById('save-field');

//     const semiPercent = saveValue / incomeField;
//     const percentageValue = semiPercent * 100;

//     setTextElementValueById('saving-amount', percentageValue);
// })