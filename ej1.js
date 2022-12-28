/**
 * 1. Write a function that takes an array of numbers 
 * as the first parameter and callback as the second, 
 * which should apply any arithmetic operation to each 
 * element of the array and return a new array.
 */

let array1 = [50,20,60,40,85];

function modifyArray(array, callback) {
  // code .. 
    const operaciones  =  array.map((a)=>{
        return a ** a;
    });
  callback(operaciones);
};

function operacionesResult(result){
    console.log('Resultados: ',result)
};

modifyArray(array1,operacionesResult);