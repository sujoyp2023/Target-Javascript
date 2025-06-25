let symbol1 = Symbol("Hello") 
let user = {
    name: "Sujoy",
    age: 23,
    email: "sujoypaul023@gmail.com",
    location: "puruliya",
    // [symbol1]: "Hello World"
}

// console.log(user.age);
// console.log(user["age"]); // Accessing the age property using bracket notation

// console.log(user[symbol1]); // Accessing the value of the symbol property

user.location = "chelyama"; // Updating the location property
// console.log(user["location"]); // Accessing the updated location property

Object.freeze(user); // Freezing the object to prevent further modifications
user.age = 24; // Attempting to change the age property (will not work due to freeze)
// console.log(user.age); // Still outputs 23, as the object is frozen

user.greeting = function() {
    console.log("Hello");
}
// console.log(user.greeting()); // Calling the greeting method

user.greeting2 = function() {
console.log(`hello, ${this.name}`);
}
// console.log(user.greeting2()); // Calling the greeting2 method



const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {1: "uno", 2: "dos", 3: "tres"};
// const obj3 = {obj1, obj2};
// console.log(obj3);
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
const obj4 = {...obj1, ...obj2};
// console.log(obj4);



// console.log(user);
// console.log(Object.keys(user)); // Outputs an array of keys in the user object
// console.log(Object.values(user)); // Outputs an array of values in the user object
// console.log(Object.entries(user)); // Outputs an array of key-value pairs in the user object

const {email: useremail} = user; // Destructuring to extract the email property
// console.log(useremail); // Outputs the value of the email property
