// 수학
// 자바 : Math.random() == 자바스크립트

console.log(Math.PI); // 3.141592653589793
console.log(Math.floor(3.14159)); // 버림, 3
console.log(Math.ceil(3.14159)); // 올림, 4
console.log(Math.abs(-3)); // 절대값, 3
console.log(Math.max(5, 6, 8, 12, 1, 3)); // 최댓값, 12
console.log(Math.min(5, 6, 8, 12, 1, 3)); // 최솟값, 1
console.log(Math.random()); // 0 <= Math.random() < 1의 형태가 나옴, 0.6487040078941968
console.log(Math.random() * 10); // 2.614757757301396
console.log(Math.floor(Math.random() * 11)); //  6
console.log(Math.floor(Math.random() * 31)); // 8

// 120 - 150 사이의 난수
// console.log(Math.floor(Math.random() * 31) + 120);

// 주사위 2개르 굴려서 눈의 합이 5가 나올 때까지
// 함수 작성 (1, 4) 이렇게 나온 값을 출력

// // Teacher's answer

// const dice = () => {
//   while (true) {
//     // java: (int)(Math.random() * 6) <- java에서는 정수로 이렇게 바꿨다.
//     // js : parseInt(Math.random() * 6) <- 정수로 바꾸기
//     const num1 = Math.floor(Math.random() * 6 + 1);
//     const num2 = Math.floor(Math.random() * 6 + 1);
//     // 메소드를 적으면, 그 뒤에는 ()를 넣어야 한다.

//     console.log(`(${num1}, ${num2})`);

//     if (num1 + num2 == 5) {
//       break;
//     } else {
//     }
//   }
// };
// dice();

// // my temptation
// const dice = () => {
//   let x = Math.floor(Math.random() * 6) + 1;
//   let y = Math.floor(Math.random() * 6) + 1;
//   console.log(x, y);
//   while (x + y == 5) {
//     return [x, y];
//     break;
//   }
// };

// dice();
// console.log(dice());

// 로또 번호 6개 추출(숫자 중복 X) 후 배열에 담은 후 출력
// 1 - 46 까지의 숫자

// // Teacher's Answer
const lottoArr = [];
while (true) {
  let num = Math.floor(Math.random() * 46 + 1);

  if (!lottoArr.includes(num)) {
    lottoArr.push(num);
  }
  if (lottoArr.length > 5) break;
}

console.log("로또 번호 ", lottoArr);

// // my themptation
// const dice = [num1, num2, num3, num4, num5, num6];
// const arr1 = () => {
//     for (let i = 0; i < 6; i++) {
//         i = Math.floor(Math.random() * 45 + 1)
//     }
// }
