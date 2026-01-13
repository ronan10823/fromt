export {};

// javascript 타입: number, string, boolean, [], undefined, null
// let car = "BMW"; // string 유추
let car: string = "BMW"; // 명시적으로 알려줌
// car = 3;

let age: number = 30;
// age="45";
// age=true;

let isAdult: boolean;
isAdult = true;
// isAdult = 4;

let n: null = null;
// n=undefined; null 이라고 생각해서

let u: undefined;
u = undefined;
// u = "123";

let fruits: string[] = ["apple", "banana", "cherry"];
// fruits="melon";
// fruits="apple";
// fruits.push(1)

let score1: number[] = [90, 85, 88];
let score2: Array<number> = [90, 85, 88];

//  string + number
let mixed: (string | number)[] = ["apple", 45, "banana", 46, 78];

// 읽기 전용 배열
const vegetables: readonly string[] = ["carrot", "brocolli", "spinach"];
// vegetables.push()

// const newArray = [...vegetables, "potato"];
// console.log(newArray);

// 타입 스크립트 제공: 튜플, any, unknown, void, never, enum
// tuple : 순서 개수
let person: [string, number];
// person = [25, "Alice"]
person = ["Alice", 25];
console.log(person[0].toLowerCase());
// console.log(person[1].toLowerCase());

function getUserInfo(): [string, number, boolean] {
  // 이름, 나이, 성인여부 모두 리턴하고 싶다면?
  return ["Bob", 30, true];
}

// console.log(getUserInfo());
const [name1, age1, audult] = getUserInfo();
console.log(`name:${name1}, age:${age1}, isAudult:${audult}`);

console.log("배열과 튜플 비교");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const;

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push(4);
console.log(inferredArray);

// inferredTuple
const explicitTuple: [number, string] = [1, "two"];
explicitTuple[0] = 2;
explicitTuple[1] = "three";
console.log(explicitTuple);

/// any == 기존의 자바 스크립트 변수 선언 개념과 동일 (typescript에서는 잘 사용 안함)
let num; // 값을 할당하지 않으면 유추 불가
num = 95;
num = "five";

let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

// unknown
let unknownValue: unknown = 10;
unknownValue = "Hello";

if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("문자 길이 ", strLength);
}
if (typeof unknownValue === "string") {
  console.log(unknownValue.toLowerCase());
  // unknownValue.toFixed() if 조건문에서 string으로 타입을 정해놨기에 숫자에서 사용하는 메소드들은 아예 호출이 안된다.
}

unknownValue = false;

// as : 타입 단언 or <타입>변수명
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;

// void : 반환값에 사용
function logMsg(message: string): void {
  console.log(`${message}`);
}
logMsg("log messagaes");

// 전달 인자가 stirng or null, 반환값 없음
function printLength(text: string | null): void {
  //   console.log(`text length ${text?.length}`);

  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`text length ${text.length}`);
}

printLength("Hello! TypeScript!");
printLength(null);

// never : 절대 실행될 수 없음
function error(message: string): never {
  throw new Error(message);
}
// error("이것은 에러입니다.") /// 호출 = 호출하면 그 아래의 코드가 절대 실행될 수 없다.
let doc: string = "문서"; // Unreachable code detected
// let neverValue:never = 10; never 타입 자체가 아무것도 되지 않기 때문에, 대입조차 불가능하다고 나온다.

let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
    console.log("String value : " + x);
  } else if (typeof x === "number") {
    console.log("Number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("Boolean value : " + x);
  } else if (typeof x === "object") {
    console.log("Oject value : " + x);
  } else {
    // 코드 안정성을 위함 -> 조건문에 쓰인 타입을 else if 로 하지 않는다면 오류가 뜬다.
    const Unreachable: never = x;
    throw new Error("Unhandled type : " + Unreachable);
  }
}
handleValue("hello");
handleValue(25);
handleValue(true);
// 나중에 x가 object도 들어올 수 있었다고 가정한다면?

// enum == 상수들의 모임
enum Color {
  Red,
  Blue,
  Green,
}

console.log(Color.Blue); // 1
console.log(Color["Blue"]); // 1

let myColor: Color;
myColor = Color.Green;
// myColor = "Red"
// myColor = Color.Yellow

// type
type Addr = string | number;
let userAddr: Addr;
userAddr = "서울시 34-5";

// type == enum
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

// let person:[string, number];
// const inferredTuple = [1, "two"] as const;
type PointTuple = [number, number];
let point: PointTuple = [10, 25];
// point = [10, 20, 30]
// point = [10, "30"]

// & 교차타입
type Name = {
  firstName: string;
  lastName: string;
};

type Employee = Name & {
  employeeId: number;
};

let employee: Employee;
employee = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
};

// Member 의 property 가 정해지지 않은 경우
type Member = {
  [key: string]: string;
};
let member: Member = {
  id: "user01",
};
member = {
  id: "user02",
  name: "홍길동",
};
