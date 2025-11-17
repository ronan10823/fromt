// Fuinction Statement

// 1. Function with no parameter
const showMsg = function () {
  console.log("Hello");
};
// How to call
showMsg(); // Hello

// // 2. Function with parameters
const multiply = function multiply(a, b) {
  return a * b;
};
const result = multiply(5, 3);
console.log(result); // 15
//  why 'result' must be announced?

// //3. Function(noraml)
const showDialog = function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
showDialog("Hello", "kim"); // Hello!! kim

// if you make a name of function.
// const showDialog2 = function a(greeting, name){
//     console.log(`${greeting}!! ${name}`);
// }
// a(); // Error : ReferenceError: a is not defined.
// // a is the parameter inside of function.
// showDialog2("Hello", "kim"); //  Hello!! kim

// you call the function(multifly) first, and define function again.
// this is opposite to normal way in function announcement order.

// [Hoisting]
// We call this hoisting, which means function call before function announcement.
// * call first,
console.log(multiply2(6, 8));
// * and announce later
function multiply2(x, y) {
  return x * y; // 48
}

// ---- [Hoisting] : variable 'var' : hoisting ----
console.log(z);
var z = 5; // no error, but undefined.
// if you use var, you can use var variable without initialization.
/// This contains Hoisting conception.

// ---- [X Hoisting X] : variable 'let'
// console.log(multifly3(8, 9)); // Error, Cannot access 'multifly3' before initialization.
// const multifly3 = function (x, y){
//     return x*y;
// }
// that means, the function statement(if you use the function statement) cannot do 'hoisting'.

// ---- [X Hoisting X] variable 'let' ----
// Simillarily, let's see the operator 'let'
// console.log(k); // ReferenceError : Cannot access 'k' before initialization.
// let k = 6;
