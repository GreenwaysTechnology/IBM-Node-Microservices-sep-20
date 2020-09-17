//hierachy - object relationship; is-a ;inheritance

class Account {
    constructor(accountid) {
        console.log('Account')
        this.accountid = accountid;
    }
    withdraw() {
        return 10;
    }
}

class SavingsAccount extends Account {
    constructor(accountid = 'A0000') {
        super(accountid); //
        console.log('savings Account')
    }
    //override the withdraw
    withdraw() {
        return 100 * super.withdraw();
    }
}
let sb = null;
sb = new SavingsAccount();
console.log(sb.withdraw(), sb.accountid);
sb = new SavingsAccount('B1000374098');
console.log(sb.withdraw(), sb.accountid);

class Product {
    constructor(pid = '1A00', pname = 'defaultproduct') {
        this.pid = pid;
        this.pname = pname;
    }
}

class Order {
    //has-a
    constructor(orderId = 'O1100', product = new Product()) {
        this.orderId = orderId;
        this.product = product
    }
}

let order = null;
order = new Order();
console.log(order.orderId, order.product.pname);

order = new Order('B0001234', new Product('12', 'TV'));
console.log(order.orderId, order.product.pname);