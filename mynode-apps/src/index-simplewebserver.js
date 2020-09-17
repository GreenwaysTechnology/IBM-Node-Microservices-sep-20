//simple http implementation
const http = require('http');

const {log} = console;

//create server and handle request
//non blocking request-response handling.
const requestListener = (request, response) => {
    //send response
    response.write('Hello Node');
    response.end();

    //response events
    response.on('close',()=>{
        log('response close event')
    })
    response.on('finish',()=>{
        log('response finish event')
    })
};
const server = http.createServer(requestListener);


//start the server

server.listen(3000,()=>{
    log('Server is Ready');
})

//attach and listen for server events

server.on('request',(request,response)=>{
    log(`${request.url} - ${request.method} `)
});