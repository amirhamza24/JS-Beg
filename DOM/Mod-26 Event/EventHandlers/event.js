function handleOnclick() {
    const handlerStatus = document.getElementById('handler-status')
    handlerStatus.innerText = 'Handled by Function attached onclick attribute';
}

// Option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text Updated by Add Event Listener';
})

// Option 2 Recap
document.getElementById('btn-update').addEventListener('click', function() {
    const inputField = document.getElementById('input-field');
    
    //console.log(inputField.value); //value dekhar jonno

    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;

    inputField.value = '';  //input field a j value dibo seta update a click korar por empty hoye jabe ba input field er lekha ta remove korar jonno..
})
