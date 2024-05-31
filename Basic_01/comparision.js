// console.log(2>1)
// console.log(2<1)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 >= 1)


// following type of comparison convert the string into a number and checks the value and compare it
console.log("2" == 2) 
console.log("1" > 2)



// comparison operator >,<,>=,<= convert the null => 0 and then compare
// equal to operator not convert null into 0 it consider as a empty object
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// undefiend compariaion => false

console.log(undefined == 0)
console.log(undefined >= 0)


// strictly equal

let s = "2"
let n = 2
console.log(s === n); // false     since "===" this operator checks the variables strictly means along with value it checks the datatype also

console.log(s == n); //true    since "==" this operator only checks for value

 