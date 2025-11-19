// form submit 발생 시

document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();

  const form = e.target;

  // 검증

  // 검증 1.
  // 내용이 잘 입력되어 있는지 확인
  // 입력 안 된 요소에 focus 메시지 alert 띄우기
  if (form.name.value === "") {
    alert("이름을 입력하세요");
    form.name.focus();
    return;
} else if (form.password.value === "") {
    alert("비밀번호를 입력하세요");
    form.password.focus();
    return;
} else if (form.age.value === "") {
    alert("나이를 입력하세요");
    form.age.focus();
    return;
  }

  // 검증 2.
  // 내용이 전부 들어있다면 원래대로 submit 실행
  e.target.submit(); // 함수로 submit을 실행시키면 된다.
});
