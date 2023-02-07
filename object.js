const nayok = {
    name: 'Bappy Alam',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Shariful', 'Amir'],
    movies: [{name: 'My name is Khan', year: 2013}, {name: 'King Khan', year: 2015}],
    act: function() {
        console.log('acting like Bappy Man')
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }
}

nayok.act();