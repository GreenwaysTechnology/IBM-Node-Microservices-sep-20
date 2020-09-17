const { ServiceBroker } = require('moleculer');
let ApiService = require("moleculer-web");

const { log } = console;

const broker = new ServiceBroker();

// broker.createService({
//     name:'apigateway',
//     mixins:[ApiService],
//     settings: {
//         routes:[{
//             path:"/api",
//             whitelist: [
//                 // Access any actions in 'posts' service
//                 "hello.*",
//             ]
//         }]
//     }
// });
// broker.createService({
//     name:'apigateway',
//     mixins:[ApiService],
//     settings: {
//         routes:[{
//             path:"/api",
//             aliases: {
//                "hello": "hello.sayHello"
//             }
//         }]
//     }
// });

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
//             }
//         }]
//     }
// });


broker.createService({
    name: 'apigateway',
    mixins: [ApiService],
    settings: {
        routes: [{
            path: "/api",
            aliases: {
                "REST hello": "hello"
            }
        }]
    }
});

// broker.createService({
//     name: 'hello',
//     actions: {
//         //define biz api of that service
//         sayHello() {
//             return 'Hello,Molecular'
//         },
//         sayHelloByName(ctx) {
//             return `Hello ${ctx.params.name}`
//         }
//     }
// });
broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service

        list: {
            handler(ctx) {
                return 'Hello,Molecular'
            }
        },

        get(ctx) {
            log(ctx.params)
            return `Hello How are you? ${ctx.params.id}`
        }
    }
});

async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();