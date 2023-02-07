const numbers = [45, 65, 23, 97, 18];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

for (const number of numbers) {
    // console.log(number);
}


const products = [
    { id: 1, name: 'HP Laptop', price: 19000 },
    { id: 2, name: 'Lenovo laptop', price: 19000 },
    { id: 3, name: 'MacBook Air laptop', price: 19000 },
    { id: 4, name: 'iPhone', price: 19000 },
    { id: 5, name: 'Walton Phone', price: 19000 },
    { id: 6, name: 'Samsung Note 7 Phone', price: 19000 },
    { id: 7, name: 'One Plus phone', price: 19000 },
]

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts (products, 'phone');
console.log(result);