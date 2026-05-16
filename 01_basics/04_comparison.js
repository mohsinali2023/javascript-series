// comparison operators
let d = 10;
let e = 20;

console.log(d == e); // false
console.log(d != e); // true
console.log(d > e); // false
console.log(d < e); // true
console.log(d >= e); // false
console.log(d <= e); // true

// null and undefined comparison

console.log(null == undefined); // true (loose equality, null and undefined are considered equal)
console.log(null === undefined); // false (strict equality, null and undefined are different types)
 
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true (null is converted to 0 for comparison)


console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false (undefined is not converted to a number for comparison)   

// strict equality operators
let f = "10";
let g = 10;

console.log(f == g); // true (loose equality, type coercion happens)
console.log(f === g); // false (strict equality, no type coercion)