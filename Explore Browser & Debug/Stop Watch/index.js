document.getElementById('btn-start').addEventListener('click', function() {

    increaseNumber();
})

document.getElementById('btn-stop').addEventListener('click', function() {
    // increaseNumber();
    clearInterval(intervalId);
    // console.log('stop');
})

document.getElementById('btn-clear').addEventListener('click', function() {
    let number = 0;
    document.getElementById('number').innerText = number;
    clearInterval(intervalId);
})

function increaseNumber() {
    let num = 0;
    intervalId = setInterval(() => {
        num++;
        const numberFiled = document.getElementById('number');
        numberFiled.innerText = num;
    // console.log((num++));
    
}, 1000);
}