// built-in function(내장 함수)
// confirm(), alert()
// => window.confirm(), window.alert() => omit 'window'
// isNaN(), parseInt(), parseFloat()

// endoceURI() : 영문, 숫자, 일부 기호만 제외
// endoceURIComponent() : 영문, 숫자만 제외

console.log(encodeURI("http://localhost:8080/basic/info.html?name=홍길동&age=15"));
// http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15
console.log();
console.log(encodeURIComponent("http://localhost:8080/basic/info.html?name=홍길동&age=15")); // http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15

// Decoding
console.log(decodeURI("http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15"));
console.log(
  decodeURIComponent(
    "http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15"
  )
);

// (first argument = function , mili second )
// setTimeout(() => {}, timeout);

// print out hello after 2 sec
console.log("Start");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("End");
// Start and End print out at same time.
// Hello comes out after 2 sec as console.log("Hello") is call back function

// setInterval = call back function
console.log("Start");
setInterval(() => {
    console.log("3 secs passed away");
}, 3000);
console.log("End");
