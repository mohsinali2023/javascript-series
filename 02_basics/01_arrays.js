const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

const myHeores = ["Muhummad Bin Qasim", "Sultan Slahudin", "Zaheer Ud Din Babur"];
// console.log(myHeores);

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(myArr2);

// Array methods

myArr.push(6); // adds an element at the end of the array
myArr.push(7);
myArr.pop();

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(5)); 
// console.log(myArr.indexOf(5)); 



const newArr = myArr.join("-"); 

// console.log(myArr);
// console.log(typeof newArr);


//slice, splice

console.log("A ", myArr);

const mynewArr1 = myArr.slice(1, 3);
console.log("B ", mynewArr1);

const mynewArr2 = myArr.splice(1, 3);
console.log("C ", mynewArr2);
console.log("D ", myArr);


