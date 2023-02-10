const placesNew = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Kaptai Lake';

placesNew.appendChild(li);



//New Section Added
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Water';
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section);


// Another Added html elements
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Dress Collection</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Panjabi</li>
    <li>T-Shirt</li>
</ul>
`

mainContainer.appendChild(sectionDress);