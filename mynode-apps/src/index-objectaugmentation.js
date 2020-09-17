//in java script objects are dynamic
//you can add,delete,update,iterate object properties during runtime
//this is called as object augmentation.

let emp = {

};
//add new property after object creation 
//javascript checks wether id property exits in object or not, if not 
//it will add 
emp.id = 10;
emp.name = 'subramanian'
emp.salary = 1000;

//update
//javascript checks wether  property exits in object or not, if not 
//it will add else it will update.
emp.salary = 100

//delete 
delete emp.salary


console.log(emp.city);
//iterate
for (const key in emp) {
    console.log(key, emp[key])
}

console.log(emp)