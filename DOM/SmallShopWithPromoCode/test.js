document.getElementById('kitkat-buy-btn').addEventListener('click', function() {
    const kitkatInputValue = getQuantityByInputField('kitkat-quantity');

    const kitkatValue = 200 * kitkatInputValue;

    setInnerText('kitkat', kitkatValue);
    total();
})

document.getElementById('rose-buy-btn').addEventListener('click', function() {
    const roseInputValue = getQuantityByInputField('rose-quantity');

    const roseValue = 100 * roseInputValue;

    setInnerText('rose', roseValue);
    total();
})

document.getElementById('diary-buy-btn').addEventListener('click', function() {
    const diaryInputValue = getQuantityByInputField('diary-quantity');

    const diaryValue = 300 * diaryInputValue;

    setInnerText('diary', diaryValue);
    total();
})


function getQuantityByInputField(id) {
    const kitkatInput = document.getElementById(id);
    const kitkatInputString = kitkatInput.value;
    const kitkatInputValue = parseInt(kitkatInputString);
    return kitkatInputValue;
}

function setInnerText(id, value) {
    const previous = document.getElementById(id);
    previous.innerText = value;
}

function total() {
    const kitkat = document.getElementById('kitkat').innerText;
    const rose = document.getElementById('rose').innerText;
    const diary = document.getElementById('diary').innerText;

    const totalCost = parseInt(kitkat) + parseInt(rose) + parseInt(diary);

    setInnerText('total', totalCost)
}

document.getElementById('promo-code-btn').addEventListener('click', function() {
    const promoCode = getQuantityByInputField('promo-code');
    
    if(promoCode == 101) {
        const totalValue = document.getElementById('total');
        const totalValueString = totalValue.innerText;
        const totalFinalValue = parseInt(totalValueString);

        const multiplyAll = totalFinalValue * 0.1;
        const sumAll = totalFinalValue - multiplyAll;

        setInnerText('all-total', sumAll);
    }

    else {
        alert('Your entered code is wrong. Please try again with enter valid code. Thank You...');
    }
})
