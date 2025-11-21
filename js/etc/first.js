// 일급 함수 : 함수를 일반적인 값(정수, 문자열...)과 동일하게 취급하는 개념
// 변수에 할당
// 다른 함수의 인자로 전달
// 다른 함수의 리턴값으로 사용

// 변수에 할당하는 예시
const func1 = () => {
  console.log("변수 할당");
};
func1();

// 화살표 함수
function logText(msg) {
  msg(); // msg는 변수지만, 받은게 함수라서 ()를 사용 가능
}

// logText() 호출하면서 함수를 전달인자로 사용
// 괄호 안에 들어있는 것은 함수다. 이 함수를, msg라는 인자에 넘기는 것이
logText(() => console.log("hi"));

// 리턴값
function add(x) {
  return function (y) {
    return x + y;
  };
}
const sum = add(5);
console.log(sum(6));
