// h1 태그 요소 삭제

const h1 = document.querySelector("h1");
// h1.remove();

// h1 글자 클릭 시 제거
// h1.addEventListener("click", () => h1.remove());

// h1 제거 버튼 클릭 시 제거
// e.target() : 이벤트 대상 가져오기
h1.addEventListener("mouseover", (e) => e.target.remove());

// h1 제거 버튼 클릭 시 제거 > 여기에서 이벤트 대상은 button이 된다.
// document.querySelector("button").addEventListener("click", (e) => button.remove);

// h1 요소의 class 제거 (버튼 클릭 시) -> css 속성이 없어지면 어떻게 되는지 F12의 Styles에서 확인 가능(체크박스에서 체크 제거해도 실제 소스 변경X, 확인만 가능)
// 1) removeAttribute("제거할 속성명") : 모든 속성용
// 2) classList.remove() : class 전용

// img 요소 찾기
const img = document.querySelector("img"); // img가 하나밖에 없어서 태그로 그냥 찾는다.
// img alt 속성값 제거(하고 싶다. -> 위에서 1번에 하는 내용)
img.removeAttribute("alt");
// 이벤트(버튼 클릭) 없어서, 무조건 실행된다.


// h1 요소의 클래스 제거
// 1)  h1.removeAttribute("class");
console.log(h1.classList);
// h1의 클래스가 header이면 header, header one two three이면 header one two three 로 나온다. 배열과 유사한 형태로 나온다. 
console.log(h1.classList[0]);
console.log(h1.classList[1]);

// 2) classList.remove() : 클래스 전용
h1.classList.remove("two"); 
// h1의 클래스가 element에서 header one three만 나온다. 


