const { request } = require('express');
const express = require('express');
const { findAllAsyncPromise } = require('../services/Todoservice');
const {log} = console;
//create router object
const router = express.Router()

router.use((request,response,next)=>{
   log('We have entered Todo Router');
   next();
});

router.get('/list', async (request, response) => {
    const todos = await findAllAsyncPromise();
    response.json(todos);
});
router.post('/', async (request, response) => {
    //core http api 
    // request.on('data', chunk => {
    //     console.log(chunk.toString());
    // });
    const todo = request.body;
    console.log(todo)

    response.json('post');
});


module.exports = router;