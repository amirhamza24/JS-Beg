//console.log('Awesome DOM tour');
//console.log(document.body);


const title = document.querySelectorAll('section');
//console.log(title);

for(const sectionFor of title) {
    console.log(sectionFor);
    sectionFor.style.border = '2px solid steelblue';
    sectionFor.style.marginBottom = "5px";
    sectionFor.style.borderRadius = "12px";
    sectionFor.style.padding = "10px";
    sectionFor.style.backgroundColor = ("lightgray");
}

// const placeContainer = document.getElementById('tour');
// placeContainer.style.backgroundColor= "yellow";

// const placeContainer = document.getElementById('man');
// placeContainer.classList.add('yellow-bg');
// placeContainer.classList.remove('large-text');