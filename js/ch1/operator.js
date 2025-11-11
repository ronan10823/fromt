// 연산자
let a = 4, 
b = 5;
// 산술연산자
console.log("\n산술 연산");
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
// 비교 
console.log("\n비교 연산");
console.log("a == b = ", a == b);
console.log("a === b = ", a === b);
console.log("a != b = ", a != b);
console.log("a !== b = ", a !== b);
let c = "4";
console.log("a == c = ", a == c);
console.log("a === c = ", a === c);
console.log("a != c = ", a != c);
console.log("a !== c = ", a !== c);

// 연결 
console.log("\n연결 연산");
console.log("a + c = ", a+c);
let d = "5";
console.log("d + c = ", d+c);


// 단항
console.log("\n단항 연산");
let i = 0;
while (i < 10) {
    i++;
    if (i == 5) continue;
     console.log(i);
}