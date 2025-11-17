// call back function : Pass function into the other function's argument. can call the passed function.

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("You Agreed");
// }

// function showCancle() {
//   alert("You Disagreed");
// }

// // Using function as another function's argument.
// ask("Do you agree?", showOk, showCancle);

// func != normal variables.
// const foo = function (func) {
//   func();
// };

// foo(() => {
//   console.log("Pass Function as argument");
// });

function callTenTimes(callback) {
  for (let index = 0; index < 10; index++) {
    callback();
  }
}
const callback = () => console.log("Call Function");

// you have to write down only name in parameter position.
/// why? what's the difference?
callTenTimes(callback);
