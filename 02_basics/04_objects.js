// const tindUser = new Object();

const tindUser = {};
tindUser.id = "123abc";
tindUser.name = "Mohsin";
tindUser.isLoggedIn = false;

// console.log(tindUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohsin",
            lastname: "Ali"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({}, obj1,obj2,obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 }

// console.log(obj3);

const users = [
   {
    id: 1,
    email: "h@gmail.com"
   },
   {
     id: 2,
    email: "h@gmail.com"
   },
   {
     id: 3,
    email: "h@gmail.com"
   }
];
// console.log(user[1].email);

// console.log(Object.keys(tindUser));
// console.log(Object.values(tindUser));
// console.log(Object.entries(tindUser));

console.log(tindUser.hasOwnProperty("name"));




