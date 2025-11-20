const box = document.querySelector(".alert-box");

const notification = (state) => {
  box.style.display = state;
};

// 알림창 보여주기 클릭시 알림창 보여주기

document.querySelector("button").addEventListener("click", () => {
  notification("block");
});

// X 클릭 시 창 닫기
// // display = "none";
// box.addEventListener("click", () => {
//   notification("none");
// });

document.querySelector(".close").addEventListener("click", () => {
  notification("none");
});

// const pop = document.querySelector(".alert-box")
// pop.addEventListener("alert", (e) =>{
//     e.style.display = "block";
// })
