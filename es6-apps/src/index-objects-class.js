//object creation
// patterns
/**
 * 1.constructor pattern
 *    -with functions and es 6 classes
 * 2.literal pattern
 */
function Employee(id = 1, name = 'default') {
    // object instance properties ; variables /methods
    this.id = id;//1;
    this.name = name; 'subramanian';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//create 
//emp is reference variable
//new is operator
//Employee() - constructor call
let emp = null;
emp = new Employee(1, 'Subramanian');
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary()}`)

emp = new Employee();
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary()}`)
//es 6 class
class Customer {
    // object instance properties ; variables /methods
    constructor(id = 1, name = 'default') {
        this.id = id;//1;
        this.name = name;// 'subramanian';
    }
    //methods
    // calculateInvoice = function () {
    //     return 1000;
    // }
    calculateInvoice() {
        return 1000;
    }
}
let customer = null;
customer = new Customer();
console.log(`id ${customer.id} ${customer.name} ${customer.calculateInvoice()}`)
customer = new Customer(34, 'ram');
console.log(`id ${customer.id} ${customer.name} ${customer.calculateInvoice()}`)
customer = new Customer();
customer.id = 999;
customer.name = 'john'
console.log(`id ${customer.id} ${customer.name} ${customer.calculateInvoice()}`)

