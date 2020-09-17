//simple rest end points using express
const { log } = console;
//here express variable represents the function , to create object
const express = require('express');
//call express variable to create application object
const app = express();

//application object pointed by app variable.
//application object used for creating end points, to start server

//handling request-response. rest end points

app.get('/', (request, response) => {
    response.end('Home Page')
});
app.get('/api/message/hello', (request, response) => {
    response.end('Hello')
});
app.get('/api/message/hai', (request, response) => {
    response.end('Hai')
});

app.post('/api/message', (request, response) => {
    response.end('post request')
});
app.put('/api/message', (request, response) => {
    response.end('PUT request')
});
app.delete('/api/message', (request, response) => {
    response.end('DELETE request')
});
app.listen(3000, () => {
    log('Express server is running!!!');
})
