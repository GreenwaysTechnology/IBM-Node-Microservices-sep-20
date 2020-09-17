//const  vs let
//let can allow to reinitalize the values at any point of time in program.

let myvar = 10;
console.log(`${typeof myvar} and its value is ${myvar}`)
myvar = 'hello';
console.log(`${typeof myvar} and its value is ${myvar}`)
myvar = true;
console.log(`${typeof myvar} and its value is ${myvar}`)

//constants ; not able to reinitalize.

const mynewVar = 10;
console.log(`${typeof mynewVar} and its value is ${mynewVar}`)
//mynewVar =9000;