// const mycode = require('./mylib')

// console.log(mycode);
// console.log(mycode.message)
// console.log(mycode.name);
// console.log(mycode.skills);
//destructuring
const { message, name, skills } = require('./mylib')
const { log } = console;

log(message)
log(name);
log(skills);