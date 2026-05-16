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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// primitives are immutable, meaning their values cannot be changed after they are created.
// For example, if you have a string, you cannot change a character in that string; instead, 
// you would create a new string with the desired changes.

//Stack- Primitives are stored in the stack, which is a simple data structure that operates in a last-in, first-out (LIFO) manner.

// Reference types are mutable, meaning their values can be changed after they are created.
//  When you modify an object or an array, you are changing the original reference, and all variables that reference that object or array will reflect the change.

// Heap- Reference types are stored in the heap, which is a more complex memory structure that allows for dynamic memory allocation. 
// When you create an object or an array,it is stored in the heap, and a reference to that location is stored in the stack.



