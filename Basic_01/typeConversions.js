"use strict";

let score = "123AB";
console.log(typeof score)
console.log(score)

let num = Number(score)
console.log(typeof num)
console.log(num)

// if score = "123AB" then num = NaN which implies that the score value is not a perfect number 

// but if score = "123" then num = 123 

//  if score = null then num = 0

//  if score = undefined then num = undefined

//  if score = true or false then num = 1 or 0

let loggedIn = undefined;
let booleanLoggedIn = Boolean(loggedIn)
console.log(typeof booleanLoggedIn)
console.log(booleanLoggedIn)


// if loggedIn = non zero any number (negative as well as positive) booleanLoggedIn = true

// if loggedIn = 0 then booleanLoggedIn = false

// if loggedIn = "" (empty string) then booleanLoggedIn = false

// if loggedIn = null then booleanLoggedIn = false

// if loggedIn = undefined then booleanLoggedIn = false


let numb = -20
let stringNum = String(numb);
console.log(typeof stringNum);
console.log(stringNum);

// it converts all type of numbers into string 
// null => null , undefined => undefined



