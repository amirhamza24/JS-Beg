const loadPhones = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerText = '';

    // display 10 phones
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }

    else {
        showAll.classList.add('d-none');
    }

    // display no phones found
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    
    else {
        noPhone.classList.add('d-none');
    }


    // display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        //console.log(phone.phone_name);

        phoneDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                </div>
            </div>
        
        `;

        phoneContainer.appendChild(phoneDiv)
    })
    // stop spinner or loader
    toggleSpinner(false);

}

const processSearch = (dataLimit) => {
    // start loader
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}


// handle search button click
document.getElementById('btn-search').addEventListener('click', function() {
    processSearch(10);
    
})

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        processSearch(10);
    }
})


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading) {
        loaderSection.classList.remove('d-none');
    }

    else {
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function() {
    processSearch();
})

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json()
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;

    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p> <span class="fw-bold">Release Date:</span> ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found.'}</p>
        <p> <span class="fw-bold">Display Size:</span> ${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize : 'No Display Size Found.'}</p>
        <p> <span class="fw-bold">Memory Size:</span> ${phone.mainFeatures.memory ? phone.mainFeatures.memory : 'No Memory Size Found.'}</p>
        <p> <span class="fw-bold">Storage:</span> ${phone.mainFeatures.storage ? phone.mainFeatures.storage : 'No Storage Found.'}</p>
    `   
}



loadPhones('apple');