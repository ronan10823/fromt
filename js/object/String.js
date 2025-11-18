// const msg = new String("hello javascript");
const msg = "hello javascript";

console.log("특정 문자 위치 반환 ", msg.charAt(4)); // 0
console.log("특정 문자 위치 찾기 ", msg.indexOf("j")); // 6
console.log("찾을 문자 ", msg.match("ja")); // [ 'ja', index: 6, input: 'hello javascript', groups: undefined ]
console.log("찾을 문자 ", msg.match("boy")); // null
console.log("특정 문자 변경 ", msg.replace("hello", "hi")); // hi javascript
console.log("특정 문자 찾기(위치) ", msg.search("ja")); // 6
console.log("문자 자르기 ", msg.slice(6, 10)); // java
console.log("문자 자르기 ", msg.substring(6, 10)); // java
console.log("문자 공백 제거 ", "     hello     ".trim()); // hello
console.log("대문자 변경 ", msg.toUpperCase()); // HELLO JAVASCRIPT
console.log("소문자 변경 ", "ABCDFEFG".toLowerCase()); // abcdefg

// 함수 작성
// 사용자로부터 영문 이름 소문자로 입력, 전화번호 입력(000-0000-0000)
// 이름은 대문자로 출력 / 010-5356-1256 => 010-####-1256

// // Teacher's answer
// const info = () => {
//   const userName = prompt("소문자로 영문이름 입력");
//   const userTel = prompt("전화번호 입력(000-0000-0000)");

//   document.writeln("이름 : ", userName.toUpperCase());
//   document.writeln("<br>");
//   document.writeln("전화번호 : ", userTel.replace(userTel.substring(4, 8), "####"));
// };

// info();

// // my temptation
// let name1 = prompt("영문이름 소문자로 입력 : ");
// document.writeln(name1.toUpperCase, input);
// let phone = prompt("전화번호 입력 ");
// document.writeln(phone.substring);

// 이메일 입력받기
// 이메일 형식이 맞는지 확인 : @
// 없는 경우: alert(입력값 확인)
// 있는 경우: 이메일 출력

const info = () => {
  const email = prompt("이메일 입력");

  // email.includes("@")

  if (email.indexOf("@") == -1) {
    alert("이메일 입력값을 확인해주세요");
    info();
  } else {
    document.writeln("이메일 : ", email);
  }
};
info();

// // my temptation
// const info = () => {
//   const email = prompt("이메일 입력");

//   if (email.indexOf("@") !== -1) {
//     document.writeln(email);
//   } else {
//     alert("입력값을 확인해주세요");
//   }
// };
