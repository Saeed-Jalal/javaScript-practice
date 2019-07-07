// console.log('hi');
/*
let x = 12;
let y = 20;
let  z = x + y;
console.log('Answer: ' + z);
*/
/*
let a = 100;
let b = 23456;
let result = a * b;
console.log('The conclusion will be: ' + result);
*/
// Variables in JS
/*
let firstName = "Muhammad Saeed";
let lastName = "Mustafa";
let fullName = firstName + ' ' + lastName;
console.log('It will be the full name of our first student: ' + fullName + '.');
*/

// Data Types in JS
/*
let x = 8;
console.log(typeof x);
let y = 'My country';
console.log(typeof y);
let z = true;
console.log(typeof z);
*/

// Expressions and Operators
// Assignment =
// Arithmetic + - * / %

// Increment / Decrement ++ --
/*
let a = 1;
a++;
console.log(a);
let b = 5;
b--;
console.log(b);
*/
// Function invocation operators ()

// Logical operators and: && or: ||

// Code block operators {}

// Array element access operators []

// Arrays
/*
let numbers = [1, 3, 5, 7, 8, 9, 10];
let names = [ 'Bill', 'Jeff', 'Warren', 'Steve', 'Zukerberg', 'Larry'];
console.log(numbers[1]);
console.log(names[4]);
console.log(numbers);
console.log(names);
numbers[0] = 99;
console.log(numbers);
names[6] = 'Saeed';
console.log(names);
numbers.push(22);
console.log(numbers);
numbers.pop();
console.log(numbers);
*/

// Functions in JS
/*
function sayHello(name) {
  console.log('---------------');
  console.log('Helloooo ' + name + '!');
  console.log('----------------');
}
sayHello('Mr.Saeed');
sayHello('Mr.Bill');
sayHello('Mr.Jeff');
sayHello('Mr.Larry');
*/

function calculateTax(amount) {
  let result = amount * 0.025;
  return result;
}
let tax = calculateTax(75);
console.log(tax);

// Function Expressions
