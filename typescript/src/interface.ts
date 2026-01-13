export {};
// object 타입

let user1: object;
user1 = { name: "Alice", age: 25 };
console.log(user1);
// console.log(user1.name) // name 붉은줄 Property 'name' does not exist on type 'object'.
// 타입 스크립트에서는 객체 선언할 때, 다음과 같이 해야한다.

// 객체 선언 방법 1 : type
// type Name = {
//     firstName: string;
//     lastName: string;
// }

// 객체 선언 방법 2 : interface (장점: 상속이 된다.)
interface User {
  name: string;
  age: number;
  gender?: string;
}
let user2: User = {
  name: "Alice",
  age: 25,
};
console.log(user2.name);
let user3: User = {
  name: "Teddy",
  age: 40,
  gender: "male",
};
console.log(user2.name);
console.log(user3.gender);

// 젠더를 바꾸고 싶다면?
user3.gender = "female";
console.log(user3.gender);
// 객체를 선언할 때 readonly 속성을 선언할 수 있다. -> 배열에서 추가/수정 등을 못함

// interface Car {
//   readonly model: string;
//   year: number;
// }

// let myCar: Car = {
//   model: "Toyota",
//   year: 2020,
// };
// myCar.model="Honda"

// ? 왜  key:string이면 id에 붉은 줄이 가는거야?
interface Student {
  name: string;
  id: number;
  [key: number]: string;
}

// A-D의 점수를 부여해야 한다면?
// : enum, type 사용
let student: Student = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  4: "C",
};

// 다음과 같이 enum 을 잉해 가능
type Score = "A+" | "A" | "B" | "C" | "D";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

let student2: Student2 = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  4: "D",
  //   4: "F", 이렇게 에러가 날 수 있다.
};

// 인터페이스 확장의 개념
// 인터페이스는 함수일 때도 가능하다.
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

class Truck implements Car2 {
  color: string;
  wheels: number;
  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }
  start(): void {
    console.log("Truck start");
  }
}

const myCar2 = new Truck("white", 4);
console.log(myCar2);

interface Person {
  name: string;
  age: number;
}

// Employee
interface Employee extends Person {
  employeeId: number;
  department: string;
}

let employee: Employee = {
  name: "Jane",
  age: 30,
  employeeId: 1001,
  department: "HR",
};

console.log(employee);
console.log(employee.name, employee.age, employee.employeeId, employee.department);

// 한 번만 쓸 거면 이렇게 선언해도 된다.
// 인라인 방식
let user4: { name: string; age: number } = {
  name: "Bob",
  age: 32,
};
console.log(user4);
