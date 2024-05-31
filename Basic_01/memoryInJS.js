// Here Primitive datatypes are get store inside the that stack
// while reference datatype values are stored inside the heap but it's reference stored inside the stack

//  primitive datatypes creates copy when we equalise that variable with another variable 

// But when non primitive datatypes are passes the reference when we equalise that variable with another variable 

let Number1 = 10;
let Number2 = Number1;
// Here Number1 copy is created and value get stored inside the Number 2 means Number1 & Number2 are two different variables pointing different values so as make change is Number2 no changes are make inside Number1 since they are two entierly different variables

Number2 += 10;
console.log(Number1)
console.log(Number2)


let stud1 = {
    name : "omkar",
    age : 20,
    roll : 17,
    div : "B"
}

let stud2 = stud1;
// Here Object stud2 is created which equal to stud1 here both stud1 and stud2 pointing same object in heap
// So as we make changes in stud2 the same changes are reflected inside stud1

stud2.age = 80
console.table(stud1)


// When we put anything inside the stack it gives us copy 
// But when we put anything inside the heap it's reference is given