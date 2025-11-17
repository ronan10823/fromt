// 함수
// alert("Give message to users")

// //  입력
// let input = prompt("Insert number", 100);
// console.log("User's value", input);

// let isBoss = confirm("Are you an owner?");
// console.log(isBoss ? "Owner" : "Not Owner");

// if (hour < 12) {
//     console.log("오전");
// } else {
//     console.log("오후");
// }

// 게임 의사 물어보기
// if (confirm("Wanna try some game?")) {
//     document.writeln("Alright, let's play the game.");
// } else {
//     document.writeln("let's do it later.");
// }

// const num1  = Number("12");
// console.log(typeof num1); // number
// console.log(Number("abc")); // NaN

// console.log(isNaN(num1)); // flase
// console.log(isNaN(Number("abc")))

// 사용자에게 숫자를 입력받아 양수, 음수, 0인지 판별
// let input = Number(prompt("Input number."));

// if (input >0) {
//     document.writeln("positive number");
// } else if (input < 0) {
//     document.writeln("negative number");
// } else if (input == 0) {
//     document.writeln("0");
// } else if (isNaN(input)) {
//     document.writeln("Not number");
// }

// input number and distinguish whether it is odd or even.
// let input = Number(prompt("Input Number"));

// if (input % 2 == 0) {
//     document.writeln("even");
// } else if (input % 2 !== 0) {
//     document.writeln("odd");
// } else {
//     document.writeln("Not Number.");
// }

// Input 3 different numbers. If average is >= 90 A, >=80 B, >=70 C, >=60 D, F
let num1 = Number(prompt("Input three number"));
let num2 = Number(prompt("Input three number"));
let num3 = Number(prompt("Input three number"));

let avg = (num1 + num2 + num3) / 3;

// if (avg >= 90) {
//   document.writeln("A");
// } else if (avg >= 80) {
//   document.writeln("B");
// } else if (avg >= 70) {
//   document.writeln("C");
// } else if (avg >= 60) {
//   document.writeln("D");
// } else {
//   document.writeln("F");
// }

switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    document.writeln("A");
    break;
  case 8:
    document.writeln("B");
    break;
  case 7:
    document.writeln("C");
    break;
  case 6:
    document.writeln("D");
    break;
  default:
    document.writeln("F");
    break;
}
