// reduce

const numbers =[4, 5, 6, 7, 1, 2, 66];

// const total = numbers.reduce((previous, current) => previous + current, 0);

// console.log(total);


const total = numbers.reduce((p, c) => p + c ,0);

// console.log(total);


const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'macBook', price: 150000},
    
]


// map 
// const names = products.map(product => product.name);
// const price = products.map(product => product.price);
// const id = products.map(product => product.id);

// console.log(names, price, id);




 // forEach

//  products.forEach(p => {console.log(p.name)});


//filter 

// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);


// find

const affordable = products.find(p => p.price < 50000);

// console.log(affordable);



// reduce 

const priceTotal = products.reduce((p, c) => (p + c.price), 0);
console.log(priceTotal);
