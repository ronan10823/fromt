// 정규표현식

// 정규표현식 생성
// const regex = /Ajax/;
const regex = new RegExp("Ajax", "g");
const origin = "JavaScript Ajax Java Python";

// 1. exec()
console.log(regex.exec(origin));
console.log(regex.exec("Javascript"));

// 2. test() : 일치하면 true / 아니면 false
console.log(regex.test(origin));
console.log(regex.test("Javascript"));

// 3. match(): string의 메서드
// RegEXP 객체의 exec() 메소드와 같은 결과
console.log(origin.match(regex));
console.log("Javascript".match(regex));

// 4. search(): 찾으면 시작위치 리턴  / 못찾으면 -1 리턴
console.log(origin.search(regex)); // 11
console.log("Javascript".search(regex)); // -1

// 5. replace():
console.log(origin.replace(regex, "아작스"));
