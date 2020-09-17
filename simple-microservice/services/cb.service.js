const { ServiceBroker } = require('moleculer');
let ApiService = require("moleculer-web");

const { log } = console;

const broker = new ServiceBroker({
    circuitBreaker: {
        enabled: true,
        threshold: 0.5,
        minRequestCount: 20,
        windowTime: 60, // in seconds
        halfOpenTime: 5 * 1000, // in milliseconds
        check: err => {
            log('failed requests', err)
            err && err.code >= 500
        }
    }
});

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


broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service

        list: {
            handler(ctx) {
                //simulating exception,if exeception, cb will open, try to use fallback api
                //let foo = 'foo'
                let foo;
                if (foo) {
                    throw new Error('Something went wrong')
                }
                return 'Hello,Molecular'
            },
            fallback: (ctx, err) => "I am fallback message"
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