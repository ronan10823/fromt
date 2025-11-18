// 테이블 요소 찾기 (먼저 찾아야 나중에 이벤트 가능)
const table = document.querySelector("table");
console.log(table);

// -----------------  in class --------------------
// Search 버튼 클릭 시 검색어 가져오기
// 일반 벝튼 : 버튼 모양 제공

// submit 버튼 : 폼 안의 내용 전송(action이 가리키는 곳으로)
// action 값이 없다면 : 현재 브라우저 주소 그대로 사용
// method : 기본값 get
// submit 중지

// reset 버튼 : 폼 안의 내용 clear

// 폼 안의 버튼이 submit이라면 form의 submit 이벤트 감지하도록 한다.
const form = document.querySelector("form");
console.log(form);
// 폼 안의 요소 찾기
// 1) form.querySelector("");
// 2) 이름 form.name 값

form.addEventListener("submit", (e) => {
  // 이벤트 중지 => submit 중지
  e.preventDefault();
  const search = form.search;
  //   console.log(search);
  console.log(search.value);
});

// link li 찾기
// text 출력
const li = document.querySelector(".navbar-nav li:nth-child(2)");
console.log(li);
console.log(li.textContent);

// -----------------  my notes --------------------

// 사용자가 어떤 단어를 누르고, search를 눌렀을때 그 값에 대한 결과값을 가져오는 과정
// 사용자가 search 버튼을 클릭 시 -> 요소를 찾아야 한다. 클릭 일어나는지 안 일어나는지 감시도 시켜야 한다.(대상-지금의 경우 search 버튼-에게 이벤트 리스너)
// 1. 검색어 가져오기
//
// <form class="d-flex" role="search">
// <input class="form-control me-2" type="search" placeholder="Search"
// // aria-label="Search" />
// <button class="btn btn-outline-success" type="submit">Search</button>
// </form>
//
// button type = submit
// -> action 값이 없으면 현재 브라우저 주소에 그대로 되돌아간다.
// ?가 마지막에 붙으면서, 한 번 이동한 흔적이 표시된다.
// ?가 붙으면, method의 기본값인 get에 해당된다.
// 검색어를 가져오려면, submit 타입의 버튼이다? 그러면 submit을 중지시켜야 한다. submit이 작동하기 전에 그 검색어를 서버로 보내야 하기 때문.
// submit일 때에는 document querySelector로 찾기보다는 포맷으로 찾는게 편하다.
// const btn = document.querySelector(".btn-outline-success");
// 폼 안의 버튼이 submit이라면 form의 submit 이벤트 감지하도록 한다.
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
// 이벤트 중지 == 여기에서는 이벤트에 해당하는 submit 기능 중지
// })

// 폼 안의 버튼이 submit이라면 form의 submit 이벤트 감지하도록 한다.
// const form = document.querySelector("form");
// console.log(form);
// // 폼 안의 요소 찾기
// 'form'.querySelector("");
// '폼' 안의 요소를 찾을 수 있다.
// 더 간단하게는, 이름을 가지고 찾을 수도 있다.
