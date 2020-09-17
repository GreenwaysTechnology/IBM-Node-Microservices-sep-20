//built in node modules
const { arch, cpus } = require('os') //os.js
//search TodoService.js from current dir - src folder
const TodoService = require('./services/Todoservice')
//const somemodule = require('osxxx')


console.log(arch());
console.log(cpus())

