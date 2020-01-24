// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// 3 ways to set a variable: var, let and const
// var has been around as long as javascript and isn't used because var is a globally scoped variable, avoid using var to set a variable
// let and const have a block-level scope. the difference between let and const is that with a let variable you can reassign values where as a const variable cannot be changed, it is a constant
let age = 30;
age = 40;
console.log(age);
const year = 1930
// year = 1940; Uncaught TypeError: Assignment to constant variable.
console.log(year);
