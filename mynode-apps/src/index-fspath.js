const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets/info.txt')
const options = {
    encoding: 'UTF-8'
}
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err;
    console.log(data);
});
