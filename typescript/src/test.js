function add(num1, num2) {
  console.log(num1 + num2);
}

add();
add(1);
add(1, 2);
add(3, 4, 5);
add("hello", "world");

// 배열 출력하는 함수
function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3, 4, 5]);
showItems(1, 2, 3, 4, 5);

// js에서는 이게 객체다.
let user = {
  id: "user01",
  name: "홍길동",
};
