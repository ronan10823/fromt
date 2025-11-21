// call back function
// 다른 함수에 파라메터로 전달되어 이후에 어떤 이벤트가 발생했거나 특정 작업이
// 완료된 후에 호출되는 함수
// 비동기 처리 / Ajex 요청 주로 사용
// 동기식 : 위에서 아래로 순차적으로 실행되는 것
// 비동기식 : 순차적 X

// 1초가 지난 후에 함수 호출
console.log("start");
setTimeout(() => {
  console.log("1sec passed");
}, 1000);
console.log("end");
