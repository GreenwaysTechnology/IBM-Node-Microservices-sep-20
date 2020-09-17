const TodoService = require('./services/Todoservice');

//create todoservice object
let { findAll, findAllAsync } = new TodoService();
////blocking version call
//console.log(findAll())

//non blocking version call
console.log('start')
findAllAsync(todos => {
    console.log(todos);
});

console.log('end')

const { log } = console;
findAllAsyncPromise()
    .then(log)
    .catch(log)
    .finally(() => console.log('finally'));