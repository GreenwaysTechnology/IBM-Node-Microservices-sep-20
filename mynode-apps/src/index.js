const { log } = console;
const express = require('express');
const bodyParser = require('body-parser')
const messageRouter = require('./routers/messagerouter')
const todoRouter = require('./routers/todosrouter');


const app = express();

//global middleware.
app.use((req, res, next) => {
    log(`${req.method}  -  ${req.url}  `)
    next();
});


//attaching middleware to application
// parse application/json
app.use(bodyParser.json())

//router itself is built in middleware, which is part of express core module.
//Router binding with application
app.use('/api/message', messageRouter);
app.use('/api/todos', todoRouter);

app.get('/', (request, response) => {
    response.end('Home Page')
});

app.listen(3000, () => {
    log('Express server is running!!!');
})
