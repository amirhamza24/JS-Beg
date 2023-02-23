const student = {
    name: 'Fredie',
    age: 26,
}

const studentAgeDot = student.age;
const studentAgeBracket = student['age'];

console.log(studentAgeDot);
console.log(studentAgeBracket);


// console the value of city
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};

const dataCityDot = data.location[0].city;
const dataCityBracket = data['location'][0]['city']

console.log(dataCityDot);
console.log(dataCityBracket);