//blocking io
const fs = require('fs');

const path = './src/assets/info.txt'

const options = {
    encoding: 'UTF-8'
}
console.log('start')
const fileContent = fs.readFileSync(path, options);
console.log(fileContent);
console.log('end')