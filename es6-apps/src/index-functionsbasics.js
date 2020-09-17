//how to declare functions and how call them.
//callee and caller

//declare a function
function sayHello() {
    //body
    console.log('Hello')
}
//invoke 
sayHello();
//parameters and args;

//a,b = are args
//default args; if no parameters are passed
function add(a = 0, b = 0) {
    //computation
    let c = a + b;
    console.log(c)
}
//10,10 are parameters
add(10, 10);
//undefined,undefined
add();

//...REST Operator
function logs(...args) {
    console.log(args);
}
logs('hello', "hai", 'welcome');

//return values
function getStock() {
    return 100;
}
console.log(getStock());

function getName(name='defaultValue') {
    return name;
}
console.log(getName('Subramanian'));
console.log(getName());

