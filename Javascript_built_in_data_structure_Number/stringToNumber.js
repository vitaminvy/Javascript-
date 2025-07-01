let str = '3';
let num = parseInt (str) //parseInt: convert string to interger
console.log ('typeof num: ', typeof num); // typeof num: number
let num1 = parseFloat(str) // parseFloat: convert string fo floating point number
console.log ('typeof num1: ', typeof num1) // typeof num1: number

let str1 = '3.24'
let num2 = parseFloat(typeof str1)  // convert 'str1' to number and assgin it to num variable
console.log ('typeof num2: ', typeof num2); // typeof num2: number
let num3 = Number.parseFloat(str1); 
console.log('typeof num3: ', typeof num3); //  typeof num3: number
console.log (typeof str, typeof str1) // string string
