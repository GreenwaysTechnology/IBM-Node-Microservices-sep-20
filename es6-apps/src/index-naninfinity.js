//NaN - not a number;it is error

let qty; //undefined
let price = 1000;
let totalPrice = qty * price; //undefined * price =>NaN.
console.log(`Total Price =  ${totalPrice}`)

//type conversion - string to num

let x = "10"; //value of x is 10 looks like number but type is string.

//here string is converted into number- implicit type conversion
let res = x * 10; // string * number
console.log(`Result ${res}`)

let y = "100"
//y is converted into  number
let newRes = parseInt(y) * 2;
console.log(`The Result is ${newRes}`);

//nan : here $ cant be converted to number.
let z = "$10";
let result = parseInt(z) * 2;
console.log(`The Result is ${result}`);


//////////////////////////////////////////////////////////////////
//Infinity : div/0

let myavg = 100 / 0;
console.log(myavg)