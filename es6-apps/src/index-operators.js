//operators
//comparsional operator - equal to 
//  == , ===  - !=,!==

// let a = 10;
// let b = 10;
// == test against value, not against type ; which is not good.
let a = "10";
let b = 10;
console.log(typeof a , typeof b)
if (a == b) {
    console.log('Equal')
} else {
    console.log('not equal')
}
// test against value,  against type ; which is not good
if (a === b) {
    console.log('Equal')
} else {
    console.log('not equal')
}

//tenary operator. to eleminate if else lader

(a===b) ? console.log('Equal') : console.log('not Equal')