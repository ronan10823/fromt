const regEx = /d(b+)d/g;
const origin = "cdbbdbsbzldjadsi";

// 정규식 객체 메소드 이용
console.log(regEx.exec(origin)); // ['dbbd',  'bb', index: 1, input: 'cdbbdbsbzldjadsi', groups: undefined ]
// 문자열 메소드 이용
console.log(origin.match(regEx)); // [ 'dbbd' ]

// 캡쳐링
// 비캡쳐링 : (?:ko)+
const regEx1 = /(ko)+/;
const origin1 = "kokokoko";

console.log("캡쳐링");
console.log(origin1.match(regEx1));

console.log("비캡쳐링");
console.log(origin1.match(/(?:ko)+/));

const name = "John Smith";
const regEx2 = /(\w+)\s(\w+)/;
console.log(name.match(regEx2));
const newName = name.replace(regEx2, "$2, $1");
console.log(newName); // Smith, John

//  폼이 전송 시 submit 기능 중지
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  // 이름 입력값 확인 : 한글, 최대 2-5자 허용
  const name = form.name.value;
  const regName = /^[가-힣]{2,5}$/;

  const tel = form.tel.value;
  const regTel = /\d{3}-\d{4}-\d{4}$/;

  if (!regName.test(name)) {
    alert("이름을 확인해 주세요(한글, 2-5글자)");
    form.name.focus();
    return;
} else if (!regTel.test(tel)){
    alert("전화번호를 확인해 주세요(000-0000-0000)");
    return;
  }
});
// 전화번호 입력값 확인: 000-1234-5678
