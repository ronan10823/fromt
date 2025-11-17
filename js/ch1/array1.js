const fruits = ["apple", "mango", "banana", "watermelon", "grape", "straberry"];
// let fruits = ["apple", "mango", "banana", "watermelon", "grape", "straberry"];
const others = ["fruit", 1, 1.34, new Date(), true, {}];
const array1 = new Array("bicycle", "car", "trian", "truck", "motocycle");
const planet = new Array("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus");

// 배열 출력
console.log(fruits);
for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  console.log(element);
}

// for each
// you can give argument after the element in condition.
// planet.forEach((element, idx) => {
//     console.log(element);
// });
planet.forEach((element, idx) => {
  console.log(`${idx} : ${element}`);
});

for (const element of others) {
  console.log(element);
}

console.log(fruits[3]);

// // // 1. Add array elements

// // push(), unshift()
// console.log("\n--------- Add array Elements ----------");
// fruits.push("Melon");
// console.log(fruits); // insert in final index = append

// fruits.unshift("Blueberry");
// console.log(fruits); // insert in first index

// fruits[5] = "Kiwii";
// console.log(fruits); // change array elements

// fruits[8] = "Pineapple";
// console.log(fruits);
// even if there is no 8th index,(=If you use non-existed index) Pineappple is inserted in final index. = append

// fruits = []; This makes error as fruits are announced as constant.

// // 2. Delete array elements
// splice() , pop()
// pop(): Delete the elements in final index.
// splice() : Delete the elements after you specify the position.

console.log("\n--------- Delete array Elements ----------");
console.log(array1); // [ 'bicycle', 'car', 'trian', 'truck', 'motocycle' ]

// // pop(): Delete the elements in final index.
array1.pop();
console.log(array1); //[ 'bicycle', 'car', 'trian', 'truck' ]

// // splice() : Delete the elements after you specify the position.
array1.splice(2, 1);
console.log(array1); // [ 'bicycle', 'car', 'truck' ]

// another function of splice() : Change the contents of index into an Input Info.
// splice(start, deleteCount, "Item") : Replace the elements.
array1.splice(2, 1, "motocycle");
console.log(array1); // [ 'bicycle', 'car', 'motocycle' ]
array1.splice(2, 1, "truck");
console.log(array1); // [ 'bicycle', 'car', 'truck' ]

// // 3. Connect the array
// join() : Connect the array elements and return into String.
// fruits.join("-");
console.log("- Connect the Array with String", fruits.join("-"));
console.log("Connect the Array with String", fruits.join(" "));

// // 4. Connect one Array with other one, and Return into New Array.
// concat()
console.log(fruits.concat(planet));
console.log(fruits); // [ 'apple', 'mango', 'banana', 'watermelon', 'grape', 'straberry' ]

// // 5. Cut the array elements, and Return into Array
// slice()
console.log(fruits.slice(1, 3)); // [ 'mango', 'banana' ]

// // 6. Classify the Array elements
// sort() the elements in Array with ASEC.
console.log(fruits.sort()); // [ 'apple', 'banana', 'grape', 'mango', 'straberry', 'watermelon' ]

console.log([12, 6, 9, 1, 10, 7].sort()); // [ 1, 10, 12, 6, 7, 9 ]
// if you want to sort the numbers in array, you have to write down appropriate function.
// Write the functiion using aqn arrow function.
// arrow function : Set the sorting way of indexes.
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => b - a)); // Desc 내림차순 [ 12, 10, 9, 7, 6, 1 ]
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => a - b)); // Asc 오름차순 [ 1, 6, 7, 9, 10, 12 ]

// // 7. Check the index of array.
// indexOf()
console.log(fruits.indexOf("mango"));

// // 8. Deep Copy vs Shallow Copy
const fruits2 = fruits;
console.log(fruits);
console.log(fruits2);

console.log("\n--------- Shallow Copy : Copy address ----------");
// Modify original
fruits[2] = "car";
console.log(fruits); // original : [ 'apple', 'banana', 'car', 'mango', 'straberry', 'watermelon' ]
console.log(fruits2); // copy : [ 'apple', 'banana', 'car', 'mango', 'straberry', 'watermelon' ]
// 2 statements print out the same result.
// because they have same address.

// ... : spread
console.log("\n--------- Deep Copy : Copy only the value ----------");
const shallowCopy = [...fruits];
fruits[2] = "melon";
console.log(fruits); // original : [ 'apple', 'banana', 'melon', 'mango', 'straberry', 'watermelon' ]
console.log(shallowCopy); // copy : [ 'apple', 'banana', 'car', 'mango', 'straberry', 'watermelon' ]
// changes in only original. copy didn't changed.

// Create an array that has 5 elements only with number 1.
// const array2 = [1, 1, 1, 1, 1];
const array2 = new Array(5).fill(1);
// 2 statements work same.
console.log(array2);

// Announce an Array
// Wnat to get an array element that satisfied a condition.
const array3 = [12, 6, 9, 1, 10, 7];

// find() : get the first element that satisfied the condition.
console.log(array3.find((item) => item > 5)); // 12

// findIndex() : get the position of element that satisfied the condition.
console.log(array3.findIndex((item) => item > 5)); // 0

const varArr1 = ["num1", "num2"];
const varArr2 = ["num3", "num4"];

// make 2D array
const varArr3 = [varArr1, varArr2];
console.log(varArr3); // [ [ 'num1', 'num2' ], [ 'num3', 'num4' ] ]
// make into normal array.
const varArr4 = [...varArr1, ...varArr2];
console.log(varArr4); // [ 'num1', 'num2', 'num3', 'num4' ]

// Modify original
varArr1[0] = "num5";
console.log("Copy", varArr3); // Copy [ [ 'num5', 'num2' ], [ 'num3', 'num4' ] ]
// that means, this is a kind of Shallow Copy.
// as you already change the number, the varArr4 is changed.
console.log(varArr4); // [ 'num5', 'num2', 'num3', 'num4' ]
