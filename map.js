const numbers = [4, 5, 6, 7, 8, 9, 10];

const doubled = [];

for(const num of numbers){
    
    const double = num * 2;
   doubled.push(double);
}

// console.log(doubled);

function doubleIt(num){
    return num * 2;
}

const resultIt = numbers.map(doubleIt);
// console.log(resultIt);


// self try .map

const selfArray = [7, 8, 9, 6, 5, 4, 2];

function selfDouble(self){
    return self * 2;

}

const selfResult = selfArray.map(selfDouble);
// console.log(selfResult);


const arrowFunctionArray = [444, 888, 555, 8889, 3466, 69658, 5656,];

const doubleArrowResult = arrowFunctionArray.map(num => num * 2);

// console.log(doubleArrowResult);

const selfArrowArray = [22, 33, 99, 88, 77];
const selfArrowResultDouble = selfArrowArray.map(num => num * 2);
console.log(selfArrowResultDouble);

