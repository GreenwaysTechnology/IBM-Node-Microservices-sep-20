//async and await keywords
const { log } = console;
//async functions return promise with promise.resovle
async function getValue() {
    return 10 // return Promise.resolve(10);
}
console.log(getValue())
getValue().then(log);
////////////////////////////////////////////////////////////////////////
async function getUser() {
    return {
        id: 1,
        name: 'subramanian'
    }
}
getUser().then(log);
//////////////////////////////////////////////////////////////////////
function getStock() {
    return Promise.resolve({
        id: 1,
        qty: 100,
        price: 1000
    });
}
////////////////////////////////////////////////////////////////////
async function processStocks() {
    //promise style of accessing data
    getStock().then(log);
    const stock = await getStock();
    console.log(stock);
}
processStocks();
/////////////////////////////////////////////////////////////////////

function auth(userName) {
    if (userName === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login failed')
    }
}
async function validation() {
    try {
        const status = await auth('admin');
        console.log(status);
    } catch (err) {
        console.log(err)
    } finally {
        console.log('done')
    }
}
validation();


















