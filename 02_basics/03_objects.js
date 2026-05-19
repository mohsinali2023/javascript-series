// singleton
// Object.create();

// Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Mohsin",
    "full name": "Mohsin Ali",
    age: 22,
    [mySym]: "myKey1",
    location: "Kashmir",
    email: "mohsin@example.com",
    isLoggedIn: false,
    lastLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "mohsin@chatgpt.com";

// Object.freeze(JsUser); 
JsUser.email = "mohsin@microsoft.com";
console.log(JsUser.email);

JsUser.greeting = function () {
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

