const TODO = require('../mockdata/todo');

class TodoService {
    constructor() {
        console.log('TODO Service is being initalized');
    }
    //apis
    //blocking api
    findAll() {
        return TODO;
    }
    //non blocking version of findAll callback
    findAllAsync(callback) {
        //simulate delay with timer
        setTimeout(callback, 1000, TODO);
    }
    findAllAsyncPromise() {
        return new Promise((resolve, reject) => {
           // setTimeout(resolve, 6000, JSON.stringify(TODO));
           setTimeout(resolve, 6000, TODO);
        })
    }
}

module.exports = new TodoService();