const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

//Listener service
broker.createService({
    name:'reportlistner',
    events: {
        "user.created"(payload) {
            this.logger.info("User created:", payload);
            // Do something
        }
    }
});

broker.createService({
    name:'reportsender',
    actions:{
        sendReport(ctx){
            let user = {
                id: 1,
                name: 'subramanian'
            }
            ctx.emit("user.created", { entity: user });
            return `Report has been sent`
        }
    }
});

async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('reportsender.sendReport');
        log(response);

    }
    catch (e) {
        log(e);
    }
}
init();
