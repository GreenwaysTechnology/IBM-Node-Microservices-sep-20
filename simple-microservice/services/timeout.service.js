const { ServiceBroker } = require('moleculer');
let ApiService = require("moleculer-web");
const _ = require("lodash");

const { log } = console;

const broker = new ServiceBroker({
	requestTimeout: 5 * 1000,
});

broker.createService({
	name: "test",
	actions: {
		slow: {
			//timeout: 2000,
			async handler(ctx) {
				//here service will return "OK" result after 8000
				await this.Promise.delay(8000); //error
				//await this.Promise.delay(2000); //success, because which inside timelimit
				return "OK";
            },
            fallback: (ctx, err) => "Some cached result",
		},
	}
});


broker.start()
	.then(() => broker.repl())
	.then(() => broker.Promise.delay(1000))
	.then(() => broker.logger.info("Calling action..."))
	.then(() => broker.call("test.slow", null, { timeout: 4000 }))
	.then(res => broker.logger.info(res))
	.catch(err => broker.logger.error(err.message));