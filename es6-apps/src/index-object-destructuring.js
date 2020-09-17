//object destructuring .

// function printEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`Street ${employee.address.street}`)
//     console.log(`City ${employee.address.city}`)
// }
//object destructuring
// function printEmployee(employee) {
//     const { id, name, address } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Street ${address.street}`)
//     console.log(`City ${address.city}`)
// }
// //object destructuring
// function printEmployee({id,name,address}) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Street ${address.street}`)
//     console.log(`City ${address.city}`)
// }

//object destructuring
// function printEmployee({ id, name, address: { street, city } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Street ${street}`)
//     console.log(`City ${city}`)
// }
const printEmployee = ({ id, name, address: { street, city } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`Street ${street}`)
    console.log(`City ${city}`)
}

let employee = {
    id: 1,
    name: 'subramanian',
    address: {
        street: '10th street',
        city: 'coimbatore'
    }
}
printEmployee(employee);

////////////////////////////////////////////////////////////////////

//object destructuring with return value

// function getStock() {
//     return {
//         id: 1,
//         name: 'IBM',
//         unit: 100,
//         price: 1000
//     }
// }
// console.log(getStock())
// function getStock(id=1, name='IBM', unit=0, price=0) {
//     return {
//         id: id,
//         name: name,
//         unit: unit,
//         price: price
//     }
// }
// function getStock(id=1, name='IBM', unit=0, price=0) {
//     //key:value => key and value === both are same, remove one
//     return {
//         id,
//         name,
//         unit,
//         price
//     }
// }
//arrow
const getStock = (id = 1, name = 'IBM', unit = 0, price = 0) => ({
    id,
    name,
    unit,
    price
});

console.log(getStock())
console.log(getStock(12, 'google', 10000, 10000));