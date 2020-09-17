//function can be returned from another function

// function myfun() {
//     console.log('outer')
//     //inner functions
//     function hello() {
//         console.log('hello');
//     }
//     //call inside
//     hello();
// }
// function myfun() {
//     console.log('outer')
//     //inner functions
//     function hello() {
//         console.log('hello');
//     }
//     //call outside
//     return hello;
// }
// function myfun() {
//     console.log('outer')
//     //inner functions
//     return function hello() {
//         console.log('hello');
//     }
// }
function myfun() {
    console.log('outer')
    //inner functions
    return function () {
        console.log('hello');
    }
}
let myhello = myfun();
myhello();

let mynewFun = function () {
    return function () {
        console.log('my fun')
    };
};
//arrow version
mynewFun = () => () => console.log('my fun')

let mynewHello = mynewFun();
mynewHello();