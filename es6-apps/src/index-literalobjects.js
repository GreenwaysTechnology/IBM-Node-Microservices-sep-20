//literal objects.

//value , can be any literal
let customer = null;
customer = {
    //key; value
    id: 1,
    name: 'subramanian',
    calculateInvoice: function () {
        return 1000
    }
};
console.log(customer.id, customer.name, customer.calculateInvoice())
//es 6 reduces method syntax
customer = {
    //key; value
    id: 1,
    name: 'subramanian',
    calculateInvoice() {
        return 1000
    }
};
console.log(customer.id, customer.name, customer.calculateInvoice())


//nested objects ; has -a 
let employee = {
    id: 1,
    name: 'subramanian',
    address: {
        street: '10th street',
        city: 'coimbatore'
    }
}
console.log(employee);
/////////////////////////////////////////////////////////////////////

//array is object 
let list = [1, 2, 3, 4, 5];
console.log(list);

//array of employees
let empList = [{
    id: 1,
    name: 'subramanian',
    address: {
        street: '10th street',
        city: 'coimbatore'
    }
},
{
    id: 1,
    name: 'subramanian',
    address: {
        street: '10th street',
        city: 'coimbatore'
    }
},
{
    id: 1,
    name: 'subramanian',
    address: {
        street: '10th street',
        city: 'coimbatore'
    }
}
];
//iterators;
empList.forEach(employee => {
    console.log(employee.id, employee.name)
});