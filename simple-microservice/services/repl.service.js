const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        sayHello(ctx) {
            const { name } = ctx.params;
            return `Hello,${name}`;
        }
    }
});

async function init() {
    try {
        await broker.start();
        broker.repl();     
    }
    catch (e) {
        log(e);
    }
}
init();