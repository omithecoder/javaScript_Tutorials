"use strict";

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toUTCString())
// console.log(myDate.toDateString())


// Date ( year , month , date , hour, min , sec , milisec)
// month starts from 0 - 11

let newDate = new Date(2024,5,3,10,0,0,0);
console.log(newDate.toUTCString());

// yyyy-mm-dd
let newDate1 = new Date("2024-06-03");
console.log(newDate1.toString());

// mm-dd-yyyy
let newDate2 = new Date("06-03-2024");
console.log(newDate2.toString());

// date
let timeStamp = Date.now();
let date = new Date(timeStamp);
console.log("MiliSec : "+timeStamp);
console.log("Sec : "+Math.floor(timeStamp/1000));
console.log(date.getFullYear())


// Important method => date.toLocaleString(properties)

console.log(date.toLocaleString('default',{
    weekday: "long",
    year : "numeric",
    second : "numeric",
    day : "numeric",
    hour : "numeric",
    minute : "numeric"
}));