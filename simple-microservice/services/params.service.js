const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello(ctx) {
            const { name } = ctx.params;
            return `Hello,${name}`;
        }
    }
});
//adding validation to parameters, and  adding more behaviours
//behaviours are like validation,caching...
broker.createService({
    name: 'math',
    actions: {

        //add method with more behaviours
        add: {
            //validation behaviour
            params: {
                a: "number",
                b: "number"
            },
            //logic, inside a method called handler
            handler(ctx) {
                const { a, b } = ctx.params;
                return a + b;
            }

        }

    }
});


async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('hello.sayHello', { name: 'Subramanian' })
        log(response);
        let addresult
        addresult = await broker.call('math.add',{a:10,b:20});
        log(`Add Result is ${addresult}`);
        addresult = await broker.call('math.add',{a:'20',b:20});
        log(`Add Result is ${addresult}`);

    }
    catch (e) {
        log(e);
    }
}
init();