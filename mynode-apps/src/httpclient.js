const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {

    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {

       console.log(d);
    });
});

req.on('error', (err) => {

    console.error(err);
});

req.end();