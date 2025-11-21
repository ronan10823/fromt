//fetch
// init과 btn에서도 써야 해서 init 위에 선언
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 페이지가 로드되면
const init = () => {
  // 1. 어제 날짜를 보여주기 (이거부터 해보자. 입력하는 칸에 아예 처음부터 어제 날짜를 알려주자)
  const now = new Date();
  console.group(now); // 2025-11-21T08:11:46.110Z -> 연월일만 필요하다.

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월 0부터 시작하기 때문에 11이 나온다. 그래서 +1을 해야한다.
  const day = now.getDate() - 1; // 어제 날짜를 구하기 위해서 -1을 해준다.

  console.log(year, month, day);

  // 2. 구한 어제 날짜를 화면에 보여주기

  // 2-2. 이렇게 2개의 자리로 만들어야 한다.
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init(); // 한 번 호출해야 한다. 언제 호춣해야 하는 걸 아는거지? 뭐가 호출해야하는 거야?

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=eb701c68265eee3e0d3e4bf254de7c77&targetDt=${date}` // 사용자가 입력한 날짜가 들어간다.
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // movieCd, movieNm, rank, rankInten -> dailyBoxOfficeList 배열로 전부 추출하기
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;;
      dailyBoxOfficeList.forEach(item => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
        
      });
    });
    
});

// // 2-1.  문제가 생길수도 있다. 오늘이 9월 9일이었다면? 입력값은 09이기에, 사용자의 입력값을 한자리인 9에서 09로 만들기 위해서 작업을 해야한다.
// txtYear.value = year;
// selMon.value = month;
// selDay.value = day;

// 사용자가 확인을 누르면, 입력한 날짜를 받아야 한다.

// fetch("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=eb701c68265eee3e0d3e4bf254de7c77&targetDt=20251120")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   }); // 날짜를 고쳐야 한다.
