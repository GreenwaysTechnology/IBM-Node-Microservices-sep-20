const EventEmitter = require('events');

//domain class to get power of event driven programming
//steps
/**
 * 1.create Event Emitter Object
 * 2.you have to register for an event , listens for that event
 */
const event = 'order.placed';

class OrderService extends EventEmitter {
    constructor() {
        super();
        //event registration 
        this.on(event, ({ id, qty, price }) => {
            console.log(`${event} ${id} ${qty} ${price}`)
        });
    }
    //biz api
    placeOrder(orderdetails) {
        //trigger event/emit event
        this.emit(event, orderdetails);
    }
}
//
let orderService = new OrderService();
orderService.placeOrder({ id: 1, qty: 10, price: 100 });