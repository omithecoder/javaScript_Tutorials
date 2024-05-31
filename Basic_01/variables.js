// constant declaration
const accountId = 12323112; // constant variable
let accountEmail = "om@gmail.com"; // declaration using let
var accountpassword = "12345"; // declaration using var
accountCity = "kalyan";  // without let & var
let accountState;   // undefined

// accountId = 10; // TypeError: Assignment to constant variable.
accountEmail = "omkar@gmail.com";
accountpassword = "12312333";
accountCity = "thane";

console.log('====================================');
console.log(accountId);
console.log('====================================');
//to print variables in tabular form
console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);

// difference between var and let
/*
Prefer not to use var instead use let 
because of issue in block and functional scope
*/