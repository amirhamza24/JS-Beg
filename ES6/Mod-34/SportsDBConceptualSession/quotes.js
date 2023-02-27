const searchAllData = () => {

    const inputElement = document.getElementById('search-value');
    const inputValue = inputElement.value;
    //console.log(inputValue);

    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`

    console.log(URL);
    fetch(URL)
    .then(res => res.json())
    .then(data => showPlayerData(data.player))
}

const showPlayerData = (players) => {

    document.getElementById('search-value').value = '';

    const container = document.getElementById('player-info');
    container.innerHTML = '';

    players.forEach((player) => {
        console.log(player.idPlayer);

        // const { strThumb, strPlayer } = player; //Object destructuring.. 

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${player.strThumb ? player.strThumb : "No"}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text">Nationality: ${player.strNationality}</p>
                </div>

                <div class="my-5 mx-3">
                    <button type="btn" class="btn btn-primary">Details</button>
                    <button type="btn" class="btn btn-danger">Delete</button>
                </div>
            </div>
    `
    container.appendChild(div)
    })
}

// searchAllData();