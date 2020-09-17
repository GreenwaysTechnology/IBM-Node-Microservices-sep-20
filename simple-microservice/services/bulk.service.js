const { ServiceBroker } = require('moleculer');
let ApiService = require("moleculer-web");
const _ = require("lodash");

const { log } = console;


const broker = new ServiceBroker({
	bulkhead: {
		enabled: false,
		concurrency: 1,
		maxQueueSize: 10,
	},
	metrics: {
		enabled: true,
		reporter: {
			type: "Console",
			options: {
				onlyChanges: true,
				includes: "moleculer.**.bulkhead.**",

			}
		}
	}
});

broker.createService({
	name: "test",
	actions: {
		first: {
			bulkhead: {
				enabled: true,
				concurrency: 1
			},
			async handler(ctx) {

				await this.Promise.delay(_.random(500, 2500));

				this.logger.info("First called.", ctx.params);

				return ctx.params;
			}
		},

		second: {
			bulkhead: {
				enabled: true,
				concurrency: 2
			},
			async handler(ctx) {

				await this.Promise.delay(_.random(500, 2500));

				this.logger.info("Second called.", ctx.params);

				return ctx.params;
			}
		},
    }
});

let id = 1;
broker.start()
	.then(() => broker.repl())
	.then(() => {
		return broker.Promise.all(_.times(10, id => {
        	return broker.call("test.second", { id });
		}));
	})
	.then(() => {
		setInterval(() => broker.call("test.second", { id: id++ }), 200);
	})
	.then(res => broker.logger.info("Done!"))
	.catch(err => broker.logger.error(err.message));

