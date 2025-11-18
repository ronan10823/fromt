// h1 요소의 클래스명(classList) 전부 가져오기 (classList로 할 수 있는 기능들)
// 1) 요소 찾기
const h1 = document.querySelector("h1");
console.log(h1.classList);

// h1 클래스명 one => four로 변경
h1.classList.replace("one", "four");

// h1 클래스명 추가 five
h1.classList.add("five");

// h1 클래스명 : one 추가 (없다면 붙이고 있다면 제거)
h1.classList.toggle("two");

// h1 클래스명 제거
h1.classList.remove("three");
