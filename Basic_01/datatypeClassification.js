// In all language data types are classified into 2 types one is primitive another one is non-primitive

// this classification is on the basis of how this variables are stored & access from the memory

// Primitive data type : 
// Datatypes which directly pass to function without sending any of it's reference so whatever changes happens on that variable actually happens on copy of variable 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt




// Reference data type : 
// Here always reference is send to the function so whatever changes happens on that variable happens on that original variable only 

// Array, Objects, Functions


// JavaScript is Dynamically typed language we are not define the datatype while declaring or initialising the variable

const id = Symbol("123");
const id1 = Symbol("123");

console.log(id == id1) // false   since the id is Symbol and id1 is also Symbol so they must be unique in itself means they never be equal

let om = 2n
console.log(typeof om)

// Non primitives 
// Array 

const students = ["Omkar","Soham","Raj","Jay"];

// Object

const student1 =
{
    name : "omkar",
    age : 20,
    roll : 17,
    div : 'c'
};

// function

const sayHello = function (name) {  
    console.log("Hello "+name);
}

sayHello("Omkar");

console.log("Students name array : \n"+students);

console.log("Student Info student 1 => \n");
console.table(student1)

