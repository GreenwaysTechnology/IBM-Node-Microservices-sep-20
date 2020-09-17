//nonblocking file system
const fs = require('fs');

const path = './src/assets/info.txt'
const options = {
    encoding: 'UTF-8'
}
console.log('start')
fs.readFile(path, options, (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('end');

const data = 'Hello Node.js';

let file = './src/assets/message.txt';
fs.writeFile(file, data, options, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});