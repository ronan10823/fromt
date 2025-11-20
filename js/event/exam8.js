// 이벤트 버블링
// li 클릭 시 부모(container)한테 전달되는 부분 이용
const parent = document.querySelector(".container");

const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

parent.addEventListener("click", (e) => {
  // 어느 tab-button 이 클릭이 되었는가? 를 알아야 한다. e Target
  btns.forEach((element) => {
    element.classList.remove("orange");
  });
  // e.target orange 추가
  e.target.classList.add("orange");
  // 모든 tab-content show 제거
  contents.forEach((content) => {
    content.classList.remove("show");
  });
  // show 클래스명 
  // -> idx를 어떻게 알아낼 것인지만 고민해보자. 
  // data- 를 한 번 써보자. 
  contents[e.target.dataset.idx].classList.add("show");
});
