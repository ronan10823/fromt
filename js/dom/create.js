// 동적으로 element(node) 생성
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const pTag = "<p>HELLO</p>";
  // insertAdjacentHTML("위치", 삽입요소)

  // document.querySelector("#test").insertAdjacentHTML("afterbegin", pTag);
  document.querySelector("#test").insertAdjacentHTML("beforeend", pTag);

  // document.body.append(pTag);

  const img = document.createElement("img"); // img라는 생성
  img.src = "1.jpg"; // 속성 부여
  img.alt = "시계";
  document.body.appendChild(img);
});
