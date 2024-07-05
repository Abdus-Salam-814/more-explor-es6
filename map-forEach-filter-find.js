const numbers = [24, 55, 79.99, 80, 88, 99, 77, 20];

const resultMap = numbers.map(n => n * 2);
// console.log(resultMap);


const resultForEach = numbers.forEach(n  => {
            console.log(n);
        
    
})

console.log(resultForEach);


const resultFilter = numbers.filter(n => n > 30);

// console.log(resultFilter);

const resultFind = numbers.find(n => n === 80);

console.log(resultFind);