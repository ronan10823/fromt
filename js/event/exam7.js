// tab-button 버튼 클릭시 짝꿍 tab-content 보여주기

// tab-button  버튼 찾기 + click 이벤트 리스너 부착 + orange 도 이동
const btns = document.querySelectorAll(".tab-button");

// tab-content 찾기 + show 클래스명 이동
const contents = document.querySelectorAll(".tab-content");

// 클래스명으로 찾으려면, clasList 사용
// classList.add(), classList.remove(), classList.toggle()

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 어느 tab-button 이 클릭이 되었는가? 를 알아야 한다. e Target

    // // 모든 tab-button orange 제거
    // btns[0].classList.remove("orange");
    // btns[1].classList.remove("orange");
    // btns[2].classList.remove("orange");

    btns.forEach((element) => {
      element.classList.remove("orange");
    });
    // e.target orange 추가
    e.target.classList.add("orange");

    // show 클래스명
    // 모든 tab-content show 제거
    contents.forEach((content) => {
      content.classList.remove("show");
    });
    contents[idx].classList.add("show");
  });
});
