// Implicitly convert into Number no need to specify it as a number
const a  = 400;

// Another way to declare number by creating it's Object
const b = new Number(20.7893);

console.log(a);
console.log(b);


// To deal with numbers after decimal toFixed(n) use to make number significant for the n decimal places
console.log(b.toFixed(7))

// To deal with numbers before decimal toPrecision(n) use to make the number precise upto n places before the decimal
console.log(b.toPrecision(1))

// convert the number into string
console.log(b.toString())

// to convert 100000000000 this number to human understandable format using (,) 
// We use toLocaleString(param)
// param = 'en-IN' , 'en-UK'
const x = 100000000000000;
console.log(x.toLocaleString('en-IN'));



// ----------------------- MATH Library -----------------------

console.log(Math.round(12.12));
console.log(Math.log2(8));
console.log(Math.ceil(45.92));
console.log(Math.floor(45.92));
// give the random number between 0 to 1
console.log(Math.random());
// to get the random number between 1 to 6
console.log(Math.floor(((Math.random()*10))%6)+1);


// other way to generate the random number in the given range
const min = 1;
const max = 6;

console.log(Math.floor(Math.random()* (max-min+1)) + min);