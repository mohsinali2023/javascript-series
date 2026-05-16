let score = "Mohsin";

// console.log(score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);



// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Mohsin";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 0 => false
// 1 => true
// "" => false
// "Mohsin" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************************ Operations ************************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

let isLoggedInValue = true;
let negIsLoggedInValue = -isLoggedInValue;
// console.log(negIsLoggedInValue); // -1

let str = "Mohsin";
let negStr = -str;
// console.log(negStr); // NaN


//prefix and postfix
let x = 5;
console.log(x++);
console.log(x);

let y = 5;
console.log(++y);
console.log(y);

// arithmetic operations
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (10 to the power of 3)

// operator precedence
let result = 10 + 5 * 2; // 10 + (5 * 2) = 10 + 10 = 20
console.log(result);

result = (10 + 5) * 2; // (10 + 5) * 2 = 15 * 2 = 30
console.log(result);

result = 10 + 5 * 2 ** 2; // 10 + (5 * (2 ** 2)) = 10 + (5 * 4) = 10 + 20 = 30
console.log(result);

// assignment operators
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15

c -= 3; // c = c - 3
console.log(c); // 12

c *= 2; // c = c * 2
console.log(c); // 24

c /= 4; // c = c / 4
console.log(c); // 6

c %= 5; // c = c % 5
console.log(c); // 1

c **= 3; // c = c ** 3
console.log(c); // 1 (1 to the power of 3 is still 1)   







