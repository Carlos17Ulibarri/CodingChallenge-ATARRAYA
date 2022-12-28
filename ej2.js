/**
 * 2. Write a promise that takes a number as its first parameter and
 * evaluates whether that number is odd or even.When the number is
 * even the promise must be resolved and when the number is odd the
 * promise must fail
 */

// code ..

let number = [10,11];

const parOrImpar = (number) => new Promise((resolve,reject)=>{
    if((number % 2) === 0 ){
        resolve({
            n: number
        });
    }else{
        reject('El numero es impar');
    }
});

parOrImpar(number[1])
    .then((n)=>{
        console.log('El numero: ',n,'es par');
    })
    .catch((error)=>{
        console.log(error);
    })





