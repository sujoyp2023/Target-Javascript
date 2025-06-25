let user = {
    name: "Sujoy",
    age: 24,
    city: "Kolkata"
}
function useobject(getuser) {
    return getuser; // Returning the user object
    
}
// console.log(useobject(user)); // Calling the function and printing the returned user object

function useobject(getuser) {
    console.log(`Name: ${getuser.name}, Age: ${getuser.age}, City: ${getuser.city}`);
    
}
// useobject(user); 
/*useobject({
    name: "Sujoy",
    age: 25,
    city: "Puruliya"}); // Calling the function with an object literal instead of a variable */

    
