//simple http implementation
const http = require('http');
const { findAllAsyncPromise } = require('./services/Todoservice');

const { log } = console;

//create server and handle request
//non blocking request-response handling.
const requestListener = async (request, response) => {
    //set header
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    //send response
    // findAllAsyncPromise().then(todos=>{
    //     response.write(todos);
    //     response.end();
    // })
    try {
        const todos = await findAllAsyncPromise();
        response.end(todos);
    }
    catch (e) {
        response.end('Some thing went wrong');
    }

    //response events
    response.on('close', () => {
        log('response close event')
    })
    response.on('finish', () => {
        log('response finish event')
    })
};
const server = http.createServer(requestListener);


//start the server

server.listen(3000, () => {
    log('Server is Ready');
})

//attach and listen for server events

server.on('request', (request, response) => {
    log(`${request.url} - ${request.method} `)
});