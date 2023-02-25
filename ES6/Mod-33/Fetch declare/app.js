function loadData2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

// normal way te
// function loadUser() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// calling a function
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data) {
    console.log(data)
}