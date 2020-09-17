//timer

function sayHello() {
    console.log('Hello')
}

sayHello();
setTimeout(function () {
    console.log('called latter')
}, 5000);
sayHello();

// function delay(callback) {
//     // setTimeout(function () {
//     //     callback();
//     // }, 6000)
//     setTimeout(callback, 6000);
// }
const { log } = console;
const delay = callback => setTimeout(callback, 6000, 'fake Response');
// delay(response =>log(response))
delay(log);