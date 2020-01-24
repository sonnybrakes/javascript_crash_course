// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// 3 ways to set a variable: var, let and const
// var has been around as long as javascript and isn't used because var is a globally scoped variable, avoid using var to set a variable
// let and const have a block-level scope. the difference between let and const is that with a let variable you can reassign values where as a const variable cannot be changed, it is a constant
// let age = 30;
// age = 40;
// console.log(age);
const year = 1930
// year = 1940; Uncaught TypeError: Assignment to constant variable.
console.log(year);
// always use const unless you know you're going to reassign the value
// use let when circumstances dictate that the variable will change
let score;
score = 10;
console.log(score);
// datatypes: strings, numbers, boolean, null, undefined, Symbol
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
// test datatypes
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof rating); // number
console.log(typeof isCool); // boolean
console.log(typeof x); // object
console.log(typeof y); // undefined
console.log(typeof z); // undefined
