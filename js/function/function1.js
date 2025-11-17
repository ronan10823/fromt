// function(단독) == Method(include in object)

// How to announce a function?
// 1) function name(params) {};
// 2) const func = function() {};
// // arrow function
// 3) const func1  = () => {};

// 1. function not with parameter
function showMsg() {
  console.log("Hello");
}
// how to call that funciton
showMsg();

// 2. Function with parameter
function multiply(a, b) {
  return a * b;
}

// 2-1. if you put 2 parameters.
// const result = multiply(5, 3);
// console.log(result); // 15

// 2-2. if you put only 1 parameter
// const result = multiply(5);
// console.log(result); // NaN

// 2-3. If you
function multiply(a, b) {
  console.log(a, b); // undefined undefined // this is only for check the result of a, b.
  return a * b;
}
const result = multiply();
console.log(result); // NaN

// function(noraml)
function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
}
showDialog("Hello", "kim"); // Hello!! kim

// // 3. Parameter default(파라미터 기본값)
function multiply(a, b = 5) {
  console.log(a, b); // undefined undefined
  return a * b;
}
// if you don't put parameter, it use the default value.
console.log(multiply(3)); // 15
// if you put parameter, it use the valute that you input.
console.log(multiply(5, 6)); // 30
function multiply(a, b = 5) {
  console.log(a, b); // undefined undefined
  return a * b;
}

// there is a way to put a parameter value in function.
function multiply(a, b) {
  console.log(a, b);
  b = b || 5;
  return a * b;
}
console.log(multiply(3)); // 3 undefined 15
console.log(multiply(5, 6)); // 5 6 30

// 4. Function in function
function a() {
  // void
  function b() {
    // 'b' is declared but its value is never read.
    console.log("b function");
  }
  if (true) {
    function c() {} // 'c' is declared but its value is never read.
  }
}
a();
// b(); // ReferenceError: b is not defined
// inner function only works inside the function in which include it.
