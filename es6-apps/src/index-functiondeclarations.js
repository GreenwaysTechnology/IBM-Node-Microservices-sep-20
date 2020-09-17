//function literals.
/**
 * function is first class citizen
 *  -function can be assigned to variable.
 *  -that variable can be used to invoke that function
 */

//funciton as literal we have various ways.

//syntax -1

function greet(message = 'default') {
    console.log('greet', message)
    return 'greeter';
}
//assign the function into variable
let greetMe = greet;
let res = greetMe('hello');
console.log(res);

//syntax -2 ; inline function declaration ; anonomous function
let hello = function(message = 'default') {
    console.log('greet', message)
    return 'greeter';
};
console.log(hello('hello'))







