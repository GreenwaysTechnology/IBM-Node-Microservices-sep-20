const _ = require("lodash");
const {ServiceBroker} = require("moleculer");
const { MoleculerRetryableError } = require("moleculer").Errors;



const broker = new ServiceBroker({
	retryPolicy: {
		enabled: true,
		delay: 100,
		maxDelay: 2000,
		factor: 2,
		retries: 5,
		//check: err => !!err
    },
	tracing: {
		enabled: true,
		exporter: ["Console", "Event"]
	}
});

const apiService = broker.createService({
	name: "api",
	actions: {
		rest: {
			//visibility: "private",
			handler(ctx) {
				return ctx.call("test.wrong", ctx.params);
			}
        }
    }
	
});

broker.createService({
	name: "test",
	actions: {
		wrong: {
			params: {
				a: "number"
			},
			async handler(ctx) {
				this.logger.info("Action called.", ctx._retryAttempts);
				//retry simulation. 
				//OK Result will be given to caller after 4 att
				if (!ctx._retryAttempts || ctx._retryAttempts < 4  ) {
					await this.Promise.delay(5000);
					throw new MoleculerRetryableError("Some error");
				}

				return "OK";
			}
		},
	}
});


broker.start()
	.then(() => broker.repl())
	.then(() => broker.Promise.delay(1000))
	.then(() => broker.call("api.rest", { a: 5 }, { requestID: "123", retries: null }))
	.then(res => broker.logger.info(res))
	.catch(err => broker.logger.error(err.message));