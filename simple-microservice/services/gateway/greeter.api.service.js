const { ServiceBroker } = require('moleculer');
const ApiService = require("moleculer-web");
const { log } = console;

const broker = new ServiceBroker();

//convert into api gateway
//way -1 of routing:

// broker.createService({
//     name:'apigateway',
//     mixins : [ApiService],
//     settings: {
//         routes:[{
//             path:"/api",
//             whitelist: [
//                 // Access any actions in 'hello' service
//                 "hello.*",
//             ]
//         }]
//     }
// })

//way 2.1; 
// broker.createService({
//     name:'apigateway',
//     mixins:[ApiService],
//     settings: {
//         routes:[{
//             path:"/api",
//             aliases: {
//                "hey": "hello.sayHello" //only get request
//             }
//         }]
//     }
// });
//way 2.2 with various http method mapping

// broker.createService({
//     name:'apigateway',
//     mixins:[ApiService],
//     settings: {
//         routes:[{
//             path:"/api",
//             aliases: {
//                "GET hello": "hello.sayHello",
//                   // The `name` comes from named param. 
//                 // You can access it with `ctx.params.name` in action
//                "GET hello/:name": "hello.sayHelloByName"
//                 //"POST url" : "action"
//             }
//         }]
//     }
// });

//Way 3
//if you follow the below approach,
/**
 * To use this shorthand alias, 
 * create a service which has list, get, create,
 *  update and remove actions.
 */
// broker.createService({
//     name: 'apigateway',
//     mixins: [ApiService],
//     settings: {
//         routes: [{
//             path: "/api",
//             aliases: {
//                 "REST hello": "hello"
//             }
//         }]
//     }
// });


// broker.createService({
//     name: 'hello',
//     actions: {
//         //define biz api of that service
//         sayHello() {
//             return 'Hello,Molecular'
//         },
//         //http://localhost:3000/api/hello/subramanian
//         sayHelloByName(ctx) {
//             return `Hello ${ctx.params.name}`
//         }

//     }
// });

// broker.createService({
//     name: 'hello',
//     actions: {
//         //define biz api of that service
//         list: {
//             handler(ctx) {
//                 return 'Hello,Molecular'
//             }
//         },

//         get(ctx) {
//             log(ctx.params)
//             return `Hello How are you? ${ctx.params.id}`
//         }
//     }
// });



//url mapping;
//http://localhost:3000/api/hello/sayHello
async function init() {
    try {
        await broker.start();
        }
    catch (e) {
        log(e);
    }
}
init();
