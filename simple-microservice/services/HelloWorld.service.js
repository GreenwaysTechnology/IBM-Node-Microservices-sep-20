//Get ServiceBroker function(class)
const { ServiceBroker } = require('moleculer');
const { log } = console;

//Create Service Broker object.
const broker = new ServiceBroker();

//how to create Service
//every service , contains schema 
//schema is collection of properties
broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello() {
            return 'Hello,Molecular'
        }
    }
});

//start app
function startApp() {
    //start container,ensure broker ready.
    broker.start().then(() => {
        log('Broker ready!!!')
        //call(serviceName.method)
        broker.call('hello.sayHello').then(response => {
            log(`Service Response  ${response}`)
        }).catch(err => log('Service failed'))
    }).catch(e => {
        log('Broker failed')
    });
}
startApp();

//how to write simplifiy the above call
async function init() {
    try {
        await broker.start();
        const response = await broker.call('hello.sayHello')
        log(`Service Response  ${response}`)
    }
    catch (e) {
        log(e);
    }
}
init();






