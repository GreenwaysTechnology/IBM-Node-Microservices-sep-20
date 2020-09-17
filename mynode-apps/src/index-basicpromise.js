//promises

//Promise Object creation using factory apis

//create Promise Object with success and return
function getSuccessPromise() {
    return Promise.resolve('Hello I am promise')
}

//process the process.
console.log('start')
let p = getSuccessPromise();
console.log('end');
//then,catch,finally
p.then(response => console.log(response));
//builder pattern /fluent pattern
getSuccessPromise().then(response => console.log(response));

//failure promise
function getFailurePromise() {
    return Promise.reject('something went wrong')
}
getFailurePromise().catch(err => console.log(err));

/////////////////////////////////////////////////////////////////////
//how to return success and failure based on biz logic

function auth(userName) {
    if (userName === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login failed')
    }
}
auth('admin')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));

auth('foo')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));

const { log } = console;
auth('admin')
    .then(log)
    .catch(log)
    .finally(() => console.log('finally'));










