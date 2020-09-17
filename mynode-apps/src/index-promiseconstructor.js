//how to create promise object using constructor.

//callback style async api
function getUser(callback) {
    let user = {
        id: 2,
        name: 'admin'
    };
    setTimeout(callback, 1000, user);
}
getUser(user => console.log(user));
//convert callback programing into promises ; Promise Constructor

function getUserUsingPromise() {
    //return promise
    return new Promise((resolve, reject) => {
        let user = {
            id: 2,
            name: 'admin'
        };
        if (user) {
            setTimeout(resolve, 2000, user);
        } else {
            setTimeout(reject, 100, { id: 400, message: 'something went wrong' })
        }
    })

}
const { log } = console;
getUserUsingPromise()
    .then(log)
    .catch(log)
    .finally(() => console.log('finally'));