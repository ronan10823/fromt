// Add function, add(a, b) : return the result (with function announcement)
function add(a, b) {
  return a + b;
}
console.log("Add ", add(5, 7));

// add => add2 , chang add into add2 with function statement
const add2 = function (a, b) {
  return a + b;
};
console.log("Add ", add2(5, 8));

// Make function of add from 1 to 10 with function statement
const sum = function () {
  let hap = 0;
  for (let i = 0; i < 11; i++) {
    hap += i;
  }
  return hap;
};
console.log("Add from 1 to 10 ", sum());

// find out the multiple number of 3
// multiple(num) : if num is multiple numver of num3, print out "박수". if not, "통과"
const multiple = function (num) {
  if (num % 3 === 0)
    if (num % 9 !== 0) {
      console.log("Applause");
    } else {
      console.log("Pass*2");
    }
  else console.log("Pass");
};
multiple(3);
multiple(7);
multiple(9);

// Make function which could talk whether you Pass or not when you input the score of two subjects.
// pass(outline, law)
// if the total score of 2 subs >= 120, print out Pass / if one sub score < 40, print out Fail
function pass(outline, law) {
  const jumsu = outline + law;

  if (outline >= 40 && law >= 40 && jumsu >= 120) console.log("Pass");
  else console.log("Fail");
}
pass(80, 60);
pass(40, 90);
