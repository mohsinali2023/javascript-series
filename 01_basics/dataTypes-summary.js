// primitive 

// 7 types 
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Reference types (non-primitive)
// 1. Object
// 2. Array
// 3. Function


// statically typed vs dynamically typed languages
// statically typed: variable types are known at compile time (e.g., Java, C++)
// dynamically typed: variable types are determined at runtime (e.g., JavaScript, Python)

const id = Symbol(123); 
const anotherId = Symbol(123);

console.log(id === anotherId); // false, each Symbol is unique

const bigNumber = 34565435766543567654356745n; // BigInt literal

// Reference types examples
// object
const person = {
    name: 'Alice',
    age: 30
};

// array
const numbers = [1, 2, 3, 4, 5];

//function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Bob')); // Hello, Bob!



