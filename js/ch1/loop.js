
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// array.forEach(element => {
    
// });

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
// for (const element of object) {
    
// }

// while (condition) {
    
// }

// print out 1 ~ 10
// for (let index = 1; index < 11; index++) {
//     console.log(index);
// }

// 객체 출력 
const myCar = { make : "BMW", model:"X5", year: 2013}; // 객체 선언
console.log(myCar);
console.log("제조연도 : ", myCar["year"]);
console.log("모델 : ", myCar.model);

// 만약 객체를 출력하고 싶다면? 
// for (const key in myCar) {
//     //  key = make, model, year
//     console.log(myCar[key]);
// } 
// output(result): BMW, X5, 2013

// for (const key in myCar) {
//     console.log(key, ":", myCar[key]);
// } 

for (const key in myCar) {
    console.log(`${key} : ${myCar[key]}`);
} 
// $는 변수명 앞에 붙이는 특수기호의 개념, 백틱(`)으로 쓰는 개념
// { 중괄호를 쓰면 객체를 담는 개념이기에, }
// 백틱과 { `그 안에 $를 붙여서 사용하면 각 객체의 정보를 담을 수 있다.`}
// for in은 객체 출력할 때 자주 쓴다. 

// 그 다음에 배열을 쓸건데, 그때도 for 문은 계속 사용할 것이다.

// 1 - 100까지 출력, 증가 +2씩, 
// 숫자가 48이 되면 반복문 중지
for (let index = 0; index < 100; index +=2) {
    if (index==50)break;
        console.log(index);
}





