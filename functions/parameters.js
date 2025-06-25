function myname() {
    console.log("S");
    console.log("u");
    console.log("j");
    console.log("o");
    console.log("y");
}

// myname(); // Calling the function to print each character of the name "Sujoy" on a new line

// function add2numbers(num1, num2) {
//     console.log(num1 + num2);
// }
// add2numbers(10, 20); // Calling the function to add two numbers and print the result

function add2numbers(num1, num2) {
    let sum = num1 + num2; // Adding the two numbers
    return sum; // Returning the sum
    console.log("sujoy"); // This line will not execute because it is after the return statement
    
}
let sum = add2numbers(10, 20); // Calling the function and storing the result

// console.log(sum); // Printing the result of the addition

function calculatevalue(...value /*rest parameter*/) {
    return value
    
}
console.log(calculatevalue(10, 20, 30, 40, 50)); // Calling the function with multiple arguments and printing the result    
