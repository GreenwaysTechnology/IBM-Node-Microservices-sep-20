const { ServiceBroker } = require('moleculer');
const {log} =console;
const broker = new ServiceBroker();

broker.loadService("./services/math.service.js");

async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('math.add', { a: 1, b: 3 })
        log(`response ${response}`)
    }
    catch (e) {
        log(e);
    }
}
init();