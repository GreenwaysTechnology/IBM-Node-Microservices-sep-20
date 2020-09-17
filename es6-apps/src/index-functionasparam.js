//function as parameter
//function is also value like numbers,strings booleans

function add(a, b) {
    console.log(a + b);
}
add(10, 10);
let x = 10;
let y = 20;
add(x, y);

// es 5

function handle(handler) {
    handler();
}
//passing function as parameter
handle(function () {
    console.log('hello')
});
let myhandler = function () {
    console.log('myhandler');
};
handle(myhandler);

//parameters
function requestHandler(handler) {
    handler('The Response');
}
requestHandler(function (response) {
    console.log(response);
});
let httpHandler = function (response) {
    console.log(response);
}
requestHandler(httpHandler);
//arrow verson
let socketHandler = handler => handler('The Socket Response');
socketHandler(response => console.log(response));
let socket = response => console.log(response);
socketHandler(socket);