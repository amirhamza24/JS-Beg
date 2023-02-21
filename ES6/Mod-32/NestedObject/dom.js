const user = {
    id: 5001,
    name: 'Thomas',
    address: {
        street: {
            first: 'Center',
            second: 'Left',
            third: 'right',
        },
        post: 'cantonment',
        city: 'Dhaka',
    }
}

const userFloor = user.address.street.second;
console.log(userFloor);