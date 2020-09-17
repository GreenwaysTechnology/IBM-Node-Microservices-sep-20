// const something = require('./mymodule');

// console.log(something)

// let s = new something();
// console.log(s.findAll())

const EmployeeService = require('./mymodule');

// let service = new EmployeeService();
// console.log(service.findAll())

let { findAll } = new EmployeeService();
console.log(findAll())