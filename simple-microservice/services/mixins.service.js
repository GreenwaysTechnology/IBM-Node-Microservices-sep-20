const { ServiceBroker } = require('moleculer');
const hello = require('./parent.service');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    mixins: [hello],
    actions: {
        sayGreet:{
            handler(){
                return 'Greet';
            }
        }
    }
});


async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('greeter.sayHello')
        log(`${response}`)
        response = await broker.call('greeter.sayGreet')
        log(`${response}`)

    }
    catch (e) {
        log(e);
    }
}
init();