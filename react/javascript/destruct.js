const array = [10, 11, 12];

// 배열 분해
let arr1 = array[0];
let arr2 = array[1];
let arr3 = array[2];

console.log(arr1, arr2, arr3);

// 위의 방법보다는 이 방법이 좀더 편하다.
const [arr4, arr5] = array;
console.log(arr4, arr5);

console.log("...스프레드 연산자");
const [arr6, ...arr7] = array;
console.log(arr6); // 10
console.log(arr7); // 11, 12 (나머지 남아있는 애들 알아서 복제해서 다 담아줌)

// 복제
// 얕은 복제(동일한 주소값을 가지게 됨) vs 깊은 복제
const array2 = array;
console.log("복사된 array2 ", array2);

array2[0] = 88;
console.log("값 변경 후 array2 ", array2); // 88, 11, 12
console.log("값 변경 후 array1 ", array); // 88, 11, 12

// 깊은 복제 (값만 복제)
const array3 = [...array];
array3[0] = 15;
console.log("값 변경 후 array3 ", array3);
console.log("값 변경 후 array ", array);

const person = {
  name: "John",
  age: 30,
  job: "developer",
};

console.log(person.name);

// 분해
const { name, age } = person;
console.log(name, age);

// 얕은 복사
const person1 = person;
person1.name = "Jane";
console.log("person1 이름 변경 후 ", person1); // Jane
console.log("person 이름 변경 후 ", person); // Jane

// 깊은 복사
const person2 = { ...person };
person2.name = "홍길동";
console.log("person 이름 변경 후 ", person2); // 홍길동 (person2의 값만 변경되고 )
console.log("person 이름 변경 후 ", person); // Jane
