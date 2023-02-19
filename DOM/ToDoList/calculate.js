let count = 0;

document.getElementById('input-btn').addEventListener('click',function() {
    count = count + 1;

    const getInputValue = document.getElementById('input-value');
    const inputValue = getInputValue.value;
    

    const mainContent = document.getElementById('main-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-primary">Done</button>
    <button class="btn btn-danger btn-delete">Delete</button>
    </td>
    `;

    mainContent.appendChild(tr);

    getInputValue.value = '';


    const btnDelete = document.querySelectorAll('.btn-delete');

    for(const value of btnDelete) {
        value.addEventListener('click', function(event) {
            event.target.parentNode.parentNode.style.display = "none";
        })
    }
})

document.getElementById('btn-clear').addEventListener('click', function(event) {
    event.target.parentNode.style.display = "none";
})