// In JavaScript string are declare in "" (double qoutes) as well as '' (single qoutes)

const name = 'omkar'
const age = 20

// outdated syntax
console.log("My name is "+name+" and age "+age)

// latest syntax (String Interpolation)
console.log(`Hello my name is ${name} and age is ${age}`);

// Declaring string as a Object which provides us different properties
const gamename = new String("NewGame@123");

// Get the length of String
console.log(gamename.length);

// convert the string into UpperCase do not change the original value
console.log(gamename.toUpperCase());

// if we need to find on which index which character of the string is present
console.log(gamename.charAt(1));

// if we need to find the index of the particular character 
console.log(gamename.indexOf('e'));

// to check particular substring is present in the strin or not
console.log(gamename.includes('Game'));

// to spilt the word "NewGame@123" on the basis of '@' Symbol
const credentials = gamename.split('@');
console.log(credentials);


// to separate or slice the string
const newString = gamename.substring(0,7);
console.log(newString);
const Id = gamename.substring(8,11);
console.log(Id);

const substr = gamename.slice(1,4);
console.log(substr);


// to remove all extra spaces
const sb = new String('    Omkar K   ');
console.log(sb);
console.log(sb.trim());


// to edit the string (replace,remove)
console.log(sb.replace('K',"Khanvilkar").trim());






