//es 6 arrow functions
// inline function declaration ; anonomous function
//es 5
// let hello = function(message = 'default') {
//     console.log('greet', message)
//     return 'greeter';
// };
// console.log(hello('hello'))

//arrow functions : es6

//=> fat arrow
let greet = () => {
    console.log('greet');
};
greet();
//syntax flavs
//if function has one line of body;remove {}
greet = () => console.log('greet');
greet();
//parameters and args: multi parameter with default value

let add = (a = 0, b = 0) => {
    let result = a + b;
    console.log(result)
};
add(10, 10);
add();
//parameters and args: single parameter without default value
let stock = (value) => console.log(value);
stock(100);
//parameters and args: single parameter without default value; drop ();
stock = value => console.log(value);
stock(100);
//return values
let multiply = (a = 1, b = 1) => {
    return a * b;
};
console.log(multiply(10, 10));
//return values : only return statement; remove {}, and return statement
multiply = (a = 1, b = 1) => (a * b);
console.log(multiply(10, 10));
//single parameter, return the same
let setName = name => name;
console.log(setName('Subramanian'));