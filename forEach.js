const numbers1 = [12, 2, 33, 77, 99, 66, 55, 70, 30];
// const result = numbers1.forEach(n => n * 2);
// console.log(result);

/*
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

*/


const result = numbers1.forEach(num =>{
    return num * 2;
}) 

console.log(result);