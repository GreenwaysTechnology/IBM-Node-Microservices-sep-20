//routers
const express = require('express');
//create router object
const router = express.Router()

router.get('/hello', (request, response) => {
    response.end('Hello')
});
router.get('/hai', (request, response) => {
    response.end('Hai')
});
router.post('/', (request, response) => {
    response.end('post request')
});
router.put('/', (request, response) => {
    response.end('PUT request')
});
router.delete('/', (request, response) => {
    response.end('DELETE request')
});

module.exports = router;