const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// const wrap = document.querySelector(".wrap");

// carousel.html  스크립트
// next.addEventListener("click",(e)=>{
//     wrap.style.transform = `translate(-${300*1}px)`
// })
// prev.addEventListener("click",(e)=>{
//     wrap.style.transform = `translate(-${300*0}px)`
// })

// carousel.htm2  스크립트
// 첫 번째 슬라이드=> 다음 클릭
// 두 번째 이미지가 나와야 한다.
// transform = translate(-${100}vw) =>translate(-${200}vw)
// 그 다음에 눌렀으면 다시 -200, 300 등으로 바뀌어야 한다.
// 이전 클릭
// transform = translate(-${200}vw) =>translate(-${100}vw) => translate(-${0}vw)

const carousel = document.querySelector(".carousel");
let idx = 0;
prev.addEventListener("click", (e) => {
  // 0번까지 가면 더이상 눌리지 않을 것이다.
  if (idx === 0) {
    return;
  }
  idx -= 1; // idx= idx -1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});

next.addEventListener("click", (e) => {
  if (idx === 2) {
    return;
  }
  idx += 1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});
