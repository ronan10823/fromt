export {};

// 함수 정의
// add 함수 정의: 2개의 숫자 타입 전달 인자, 덧셈 결과 출력
// return 타입은 없다
// function add(num1:number, num2:number):void {
//     console.log(num1+num2)
// }

//화살표 함수로 바꾸기
const add = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

add(5, 6);

// add 2 정의 : 리턴값 num1 + num2
const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(add2(5, 7));

// age 값을 받아서 19보다 크면 true , false
const isAdult = (age: number): boolean => {
  return age > 19;
};
console.log(isAdult(24));

// name(없을 수도 있음 = ?를 사용하면 된다.) =>  Hello  홍길동  or Guest
const hello = (name?: string): void => {
  // name이 없으면 기본값 Guest
  console.log(`Hello ${name || "Guest"}`);
};
hello("홍길동");
hello();

const hello2 = (name = "Guest"): void => {
  console.log(`Hello ${name}`);
};
console.log("defualt 값을 인자에 적");
hello2("홍길동");
hello2();

// 선택적 매개변수가 필수 매개변수보다 앞에 올 수 없음
// const hello3 = (name?:string, age:number): void => {
//   console.log(`Hello ${name}`);
// };

const hello3 = (name: string | undefined, age: number): void => {
  console.log(`Hello ${name}, age ${age}`);
};
hello3(undefined, 15); // Hello undefined, age 15
hello3("Tom", 15); // Hello Tom, age 15

// 나머지 매개변수 : ... => 배열 형태로 전달
// 매개 변수의 개수가 정해져 있지 않을 때 유용
const sum = (...nums: number[]): number => {
  let total = 0;
  nums.forEach((i) => {
    total += i;
  });
  return total;
};

let total = sum(1, 2, 3); /// [] 배열이 아니기에 오류가 난다. -> ... 으로 해결
console.log(total);
total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(total);

interface User {
  name: string;
  age: number;
}

const join = (name: string, age: number | string): User | string => {
  if (typeof age === "number") {
    return { name, age };
  } else {
    // age도 string으로 들어올 수 있다는 의미
    return "나이는 숫자로 입력해 주세요";
  }
};

const sam = join("Sam", 30);
const jane = join("Jane", "30");
console.log(sam); // { name: 'Sam', age: 30 }
console.log(jane); // 나이는 숫자로 입력해 주세요

// 변수 선언 방식 : 유추, 선언
let userName = "Bob";
// userName = 3; // string만 담아야 하며, 다른 타입의 변수를 담을 수는 없다.
let userName2: string | number = "Jane";
userName2 = 4;

// type & interface
// 타입 지정 = 여러 번 사용 가능
type Job = "developer" | "designer" | "manager";

interface Person {
  name: string;
  job: Job;
}

// person 변수 선언
let person: Person = {
  name: "Alice",
  job: "designer",
};
console.log(person); // { name: 'Alice', job: 'designer' }

// 만약 타입을 굳이 지정하고 싶지 않다 = 한 번만 써도 된다면?
interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}

let student1: HighSchoolStudent = {
  name: "홍길동",
  grade: 2,
};
console.log(student1); // { name: '홍길동', grade: 2 }

interface Developer {
  name: string;
  skills: string[];
}

interface Manager {
  name: string;
  age: number;
  manage(): void;
}

let person2: Developer;
let person3: Manager;
let person4: Developer & Manager;
person4 = {
  name: "Eve",
  skills: ["javascript", "java", "typescript"],
  age: 35,
  manage() {
    console.log("Managing team");
  },
};
