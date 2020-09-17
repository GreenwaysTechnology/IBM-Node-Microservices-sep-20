/**
 * Create two services , communicate them.
 * //Local Services
 */
const { ServiceBroker } = require('moleculer');
const { log } = console;

const broker = new ServiceBroker();

//publisher service
broker.createService({
    name: 'publisher',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return a + b;
            }
        }
    }
})


//consumer service
broker.createService({
    name: 'consumer',
    actions: {
        calculate: {
            async handler(ctx) {
                log('consumer - calculate')
                let result = await ctx.call('publisher.add', { a: 10, b: 20 });
                log(`Result is ${result}`)
            }
        }
    }
})

async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('consumer.calculate')
        log(response)
    }
    catch (e) {
        log(e);
    }
}
init();