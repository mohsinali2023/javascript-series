"use strict"; // treat all js code as newer version

// alert( 3 + 3) we are using nodejs not browser

console.log(3
     + 3); //  code reusbility should be High

let name = "Mohsin"; // string
let age = 25; // number
let isLoggedIn = true; // boolean
let state; // undefined


// number => 2 to power 53 -1
// bigint => 2 to power 53 -1 and above
// string => "" or '' or ``
// boolean => true or false
// null => null is a value which is assigned to a variable which is empty
// undefined => variable which is not assigned any value
// symbol => unique value

// Objects => objects are used to store multiple values in a single variable

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined

// null => null is a value which is assigned to a variable which is empty
let city = null;
console.log(typeof city); // object (this is a bug in js)