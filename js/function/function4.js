// arrow function

const mult = (a, b) => x * y; // no return
const mult2 = (a, b) => {
  return x * y;
};

const planet = new Array("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus");
planet.forEach((element, idx) => console.log(`${idx}:${element}`));

const array3 = [12, 6, 9, 1, 10, 7];
console.log(array3.find((item) => item > 5));
console.log(array3.findIndex((item) => item > 5));

const showMsg = () => {
  console.log("Hello");
};
showMsg();

const showDialog = (greeting, name) => {
  console.log(`${greeting}!! ${name}`);
};
showDialog("hello", "kim");

const fruits = ["apple", "mango", "banana", "watermelon", "grape", "straberry"];
const elements = [];

fruits.forEach((item) => elements.push(item));
console.log(elements);

// map(), filter() -> very useful function in react.
// what these things do?
const arr1 = [1, 4, 9, 16];
// Create new array which restore the result of multiple 2 times in each element.
// create new array first,
const arr2 = [];
// take out items in arr2 and put the result that mutiple 2 times.
arr1.forEach((item) => arr2.push(item * 2));
console.log(arr2);
// question. why arr2 should be in front of push? why not arr1?

// map()
const arr3 = arr1.map((item) => item * 2);
console.log(arr3);

// filter()
const arr4 = arr1.filter((i) => i > 5);
console.log(arr4);
