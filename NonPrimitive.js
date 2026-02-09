/* primitive data types in js(array , objects and functions) */

//array :-An array is a special object used to store ordered collections of values .It is Zero-indexed ,Dynamic in Size,Heterogeneous → can hold mixed data types (numbers, strings, objects, other arrays).

const arr = [1, "Dibya", true, null, undefined, {name:"Dibya"}, [1,2,3]];
console.log(arr);

//objects :- An object is a collection of key-value pairs where each key is a string (or symbol) and the value can be of any data type. Objects are used to represent real-world entities and their properties.

const obj = {
    name:"Dibya",
    age:24,
    city:"Bangalore"
};
console.log(obj);

//functions :- A function is a reusable block of code that performs a specific task. Functions can take parameters, perform operations, and return values. They are fundamental building blocks in JavaScript and are used to organize and structure code.

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Dibya"));






/*all about Arrays in js*/

// Add/Remove	push(), pop(), shift(), unshift(), splice()
// Search	indexOf(), includes(), find(), findIndex()
// Transform	map(), filter(), reduce(), sort(), reverse()
// Utility	length, concat(), join(), slice()

let arr1 = [1,2,3,4,5];
//looping is discussed in controlFlow.js file. here we will discuss about array methods in js.
console.log(arr1);

//length property - returns the number of elements in the array
console.log(arr1.length); //length of the array

//toString() - returns a string representing the array and its elements
console.log(arr1.toString()); //string representation of the array

//map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let arr2 = arr1.map(function(value){
    return value*value;
})
console.log(arr2);

//filter() - creates a new array with all elements that pass the test implemented by the provided function
let arr3 = arr1.filter(function(value){
    return value%2==0;
});
console.log(arr3);

//reduce() - executes a reducer function on each element of the array, resulting in a single output value
let sum = arr1.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
},0);
console.log(sum);

//push() - adds an element to the end of the array
arr1.push(6);
console.log(arr1);
//pop() - removes the last element from the array
arr1.pop();
console.log(arr1);
//shift() - removes the first element from the array
arr1.shift(); 
console.log(arr1);
//unshift() - adds an element to the beginning of the array
arr1.unshift(0);
console.log(arr1); 
//splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place 
arr1.splice(2,1,10); //this will remove 1 element at index 2 and add 10 at index 2      
console.log(arr1);

//indexOf() - returns the index of the first occurrence of a specified value in the array, or -1 if it is not found
console.log(arr1.indexOf(3));
//slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(arr1.slice(1,4));

//join() - joins all elements of an array into a string and returns this string
console.log(arr1.join("-")); //joins the elements of the array with a hyphen

let arrr= [1,2,3,4,5];
//reverse() - reverses the order of the elements in the array
arrr.reverse();
console.log(arrr);
//sort() - sorts the elements of the array in place and returns the sorted array
arrr.sort();
console.log(arrr); //sorts the array in ascending order
//concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
let arr4 = [7,8,9];
let arr5 = arrr.concat(arr4);
console.log(arr5); //merges arr1 and arr4 into a new array arr5






//all about objects in js
let obj1 = {
    name:"Dibya",
    age:24,
    city:"Bangalore"
};
//accessing object properties
console.log(obj1.name);
console.log(obj1["age"]);
//adding new property to the object
obj1.country = "India";
console.log(obj1);
//deleting a property from the object
delete obj1.city;
console.log(obj1);
//object.values() - returns an array of a given object's own enumerable property values
console.log(Object.values(obj1));
//object.keys() - returns an array of a given object's own enumerable property names
console.log(Object.keys(obj1));
//object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(obj1));
//object.assign() - is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
let obj2 = {
    country:"India",
    state:"Karnataka"
};
let obj3 = Object.assign({},obj1,obj2);
console.log(obj3);


