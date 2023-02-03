function removeDuplicate(names) {
    const unique = [];

    for(var i = 0; i < names.length; i++) {

        if(unique.includes(names[i]) == false) {
            unique.push(names[i]);
        }
    }

    return unique;
}

var arr = ['Abul', 'Karim', 'Rahim', 'Abul', 'Sakib', 'Rahim', 'Karim'];

var newArr = removeDuplicate(arr);
console.log(newArr);