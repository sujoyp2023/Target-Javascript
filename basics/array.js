let myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// console.log(myArray[2]);
 myArray.push(6);
// console.log(myArray);
myArray.pop();
// console.log(myArray);
myArray.unshift(7); // Adds an element at the beginning of the array
// console.log(myArray);
myArray.shift(); // Removes the first element of the array
// console.log(myArray);

let arr = myArray.join(); // Joins the elements of the array into a string
// console.log(arr);
// console.log(myArray);


// console.log('A ',myArray)
let newarray1 = myArray.slice(1, 3); // Slicing the array from index 1 to 3, does not select 3rd element
// console.log('B ', newarray1); 
let newarrary2 = myArray.splice(1, 3); // Splicing the array from index 1 to 3, does select 3rd element
// console.log('C ', newarrary2);
// slice does not modify the original array, while splice can manupulate the original array


// console.log(myArray.includes(5)); // Checks if the array includes the element 5
// console.log(myArray.indexOf(5)); // Returns the index of the element 5, -1 if not found

let new1 = [1,2,3,4];
let new2 = [5,6,7,8];
// new1.push(new2); // Adds the entire new2 array as a single element to new1
// console.log(new1); // new1 now contains new2 as a single element

// let new3 = new1.concat(new2); // Concatenates two arrays
// console.log(new3);

let new4 = [...new1, ...new2]; // Using spread operator to concatenate arrays
// console.log(new4); // new4 contains elements of both new1 and new2

let subarrayy= [1,2,3,4,5,6,[7,8,[9,10]]];
let flatArrayy= subarrayy.flat(Infinity); // Flattens the array to a single level
// console.log(flatArrayy);

// console.log(Array.isArray("Sujoy")); // Checks if the given value is an array, returns false
// console.log(Array.from("Sujoy")); // Converts a string to an array of characters

let s1 = 100;
let s2 = 200;
let s3 = 300;
// console.log(Array.of(s1, s2, s3)); // Creates an array from the given argument,same as from
